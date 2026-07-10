// === State ===
let audio = new Audio();
let currentEpisode = null;
let isPlaying = false;
let wasPlayingBeforeHidden = false;
let playbackSpeed = 1;
let sortNewestFirst = true;
let activeFilter = null;
let progress = {};
let durations = {};
let seekDragging = false;
let sleepTimerId = null;
let sleepEndOfEpisode = false;
let sleepRemaining = 0;
let currentView = 'home'; // 'home' or 'show'

const SPEEDS = [1, 1.25, 1.5, 1.75, 2];
const SAVE_INTERVAL = 5000;
const DURATION_CACHE_VERSION = 3; // Bump this to force re-fetch all durations

const SERIES_LIST = [
  { name: 'Mania for Subjugation', cssClass: 'series-mania' },
  { name: 'Twilight of the Aesir', cssClass: 'series-aesir' },
  { name: 'Supernova in the East', cssClass: 'series-supernova' },
  { name: 'Blueprint for Armageddon', cssClass: 'series-blueprint' },
  { name: 'Kings of Kings', cssClass: 'series-kings' },
  { name: 'Wrath of the Khans', cssClass: 'series-khans' },
  { name: 'Death Throes of the Republic', cssClass: 'series-republic' },
  { name: 'Ghosts of the Ostfront', cssClass: 'series-ostfront' },
  { name: 'Punic Nightmares', cssClass: 'series-punic' }
];

function getSeriesClass(s) {
  const found = SERIES_LIST.find(x => x.name === s);
  return found ? found.cssClass : '';
}

// === Init ===
document.addEventListener('DOMContentLoaded', init);

function init() {
  loadProgress();
  loadDurations();
  renderHome();
  renderEpisodes();
  renderFilterChips();
  setupPlayer();
  setupAutoResume();
  startAutoSave();
  fetchVisibleDurations();
  // Auto-load last episode into player (paused) so mini player shows
  autoLoadLastEpisode();
}

// === Navigation ===
function showHomeView() {
  document.getElementById('home-view').classList.remove('hidden');
  document.getElementById('show-view').classList.add('hidden');
  currentView = 'home';
  renderHome();
}

function showEpisodeView() {
  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('show-view').classList.remove('hidden');
  currentView = 'show';
}

// === Home Page ===
function renderHome() {
  // Continue Listening
  const lastId = localStorage.getItem('hh_last_episode');
  const continueSection = document.getElementById('home-continue');

  if (lastId) {
    const id = parseFloat(lastId);
    const ep = EPISODES.find(e => e.id === id);
    const prog = progress[id];
    if (ep && prog && prog.percent > 0.5 && prog.percent < 98) {
      continueSection.classList.remove('hidden');
      document.getElementById('hc-ep-num').textContent = ep.number;
      document.getElementById('hc-title').textContent = `EP ${ep.number}: ${ep.title}`;
      document.getElementById('hc-progress-fill').style.width = prog.percent + '%';
      const left = prog.duration - prog.time;
      document.getElementById('hc-time').textContent = formatDuration(left) + ' left';
    } else {
      continueSection.classList.add('hidden');
    }
  }

  // Recently Played
  const recentSection = document.getElementById('home-recent');
  const recentList = document.getElementById('home-recent-list');
  const played = Object.entries(progress)
    .filter(([_, p]) => p.lastPlayed && p.percent > 0.5)
    .sort((a, b) => b[1].lastPlayed - a[1].lastPlayed)
    .slice(0, 8);

  if (played.length > 0) {
    recentSection.classList.remove('hidden');
    recentList.innerHTML = played.map(([id, prog]) => {
      const ep = EPISODES.find(e => e.id === parseFloat(id));
      if (!ep) return '';
      const status = prog.percent >= 98 ? 'Finished' :
        formatDuration(prog.time) + ' / ' + formatDuration(prog.duration);
      return `
        <div class="home-recent-item" onclick="playEpisode(${ep.id}); showEpisodeView();">
          <div class="hr-art">${ep.number}</div>
          <div class="hr-info">
            <div class="hr-title">${ep.title}</div>
            <div class="hr-meta">${status}</div>
          </div>
        </div>`;
    }).join('');
  } else {
    recentSection.classList.add('hidden');
  }

  // Episode count
  document.getElementById('hs-count').textContent = EPISODES.length + ' episodes';
}

function resumeFromHome() {
  const lastId = localStorage.getItem('hh_last_episode');
  if (lastId) {
    playEpisode(parseFloat(lastId));
    showEpisodeView();
  }
}

// === Auto-resume after iOS suspends the PWA ===
function setupAutoResume() {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      // App going to background - save state
      wasPlayingBeforeHidden = isPlaying;
      if (currentEpisode) saveProgress();
    } else if (document.visibilityState === 'visible') {
      // App coming back - try to resume
      if (currentEpisode && wasPlayingBeforeHidden) {
        // Check if audio is still alive
        if (audio.paused && !audio.ended) {
          // Try to resume directly
          audio.play().catch(() => {
            // Audio context was killed by iOS - reload and seek
            const saved = progress[currentEpisode.id];
            if (saved) {
              audio.src = getAudioUrl(currentEpisode);
              audio.currentTime = saved.time;
              audio.playbackRate = playbackSpeed;
              audio.play().catch(() => {});
            }
          });
        }
      }
      // Refresh UI
      if (currentView === 'home') renderHome();
    }
  });
}

function autoLoadLastEpisode() {
  const lastId = localStorage.getItem('hh_last_episode');
  if (!lastId) return;
  const id = parseFloat(lastId);
  const ep = EPISODES.find(e => e.id === id);
  const prog = progress[id];
  if (!ep || !prog || prog.percent > 98 || prog.percent < 0.5) return;

  // Load into player but don't play
  currentEpisode = ep;
  audio.src = getAudioUrl(ep);
  audio.playbackRate = playbackSpeed;
  audio.currentTime = prog.time;
  showMiniPlayer();
  updateFullPlayerInfo();
  setupMediaSession();
}

// === Progress & Duration Persistence ===
function loadProgress() {
  try { progress = JSON.parse(localStorage.getItem('hh_progress') || '{}'); } catch { progress = {}; }
}

function loadDurations() {
  const savedVersion = parseInt(localStorage.getItem('hh_dur_version') || '0');
  if (savedVersion < DURATION_CACHE_VERSION) {
    // Source changed - clear cached durations so they re-fetch from the correct files
    durations = {};
    localStorage.removeItem('hh_durations');
    localStorage.setItem('hh_dur_version', String(DURATION_CACHE_VERSION));
    return;
  }
  try { durations = JSON.parse(localStorage.getItem('hh_durations') || '{}'); } catch { durations = {}; }
}

function saveDurations() {
  localStorage.setItem('hh_durations', JSON.stringify(durations));
}

function saveProgress() {
  if (!currentEpisode || !audio.duration) return;
  progress[currentEpisode.id] = {
    time: audio.currentTime,
    duration: audio.duration,
    percent: (audio.currentTime / audio.duration) * 100,
    lastPlayed: Date.now()
  };
  if (!durations[currentEpisode.id]) {
    durations[currentEpisode.id] = audio.duration;
    saveDurations();
  }
  localStorage.setItem('hh_progress', JSON.stringify(progress));
  localStorage.setItem('hh_last_episode', String(currentEpisode.id));
}

function startAutoSave() {
  setInterval(() => {
    if (isPlaying) { saveProgress(); renderEpisodeMeta(); }
  }, SAVE_INTERVAL);
}

// === Fetch Durations ===
function fetchVisibleDurations() {
  const unknown = EPISODES.filter(ep => !durations[ep.id] && !(progress[ep.id] && progress[ep.id].duration));
  let i = 0;
  const PARALLEL = 6;
  function loadOne() {
    if (i >= unknown.length) return;
    const ep = unknown[i++];
    const tmp = new Audio();
    tmp.preload = 'metadata';
    tmp.src = getAudioUrl(ep);
    tmp.addEventListener('loadedmetadata', () => {
      durations[ep.id] = tmp.duration;
      saveDurations();
      updateCardMeta(ep.id);
      tmp.src = '';
      loadOne();
    });
    tmp.addEventListener('error', () => { loadOne(); });
  }
  setTimeout(() => { for (let n = 0; n < PARALLEL; n++) loadOne(); }, 500);
}

function updateCardMeta(id) {
  const card = document.querySelector(`.ep-card[data-id="${id}"] .ep-meta`);
  if (!card) return;
  const ep = EPISODES.find(e => e.id === id);
  if (ep) card.innerHTML = buildMetaHTML(ep);
}

// === Render Episodes ===
function renderEpisodes() {
  const list = document.getElementById('episode-list');
  let episodes = [...EPISODES];
  if (activeFilter) episodes = episodes.filter(ep => ep.series === activeFilter);
  if (!sortNewestFirst) episodes.reverse();

  list.innerHTML = episodes.map(ep => {
    const isActive = currentEpisode && currentEpisode.id === ep.id;
    return `
      <div class="ep-card ${isActive ? 'playing' : ''}" data-id="${ep.id}" onclick="playEpisode(${ep.id})">
        <div class="ep-top">
          <div class="ep-thumb">${ep.number}</div>
          <div class="ep-text">
            <div class="ep-title">${ep.title}</div>
            <div class="ep-desc">${ep.description}</div>
          </div>
          <button class="ep-play-btn" onclick="event.stopPropagation(); playEpisode(${ep.id})">
            ${isActive && isPlaying
              ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>'
              : '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>'}
          </button>
        </div>
        <div class="ep-meta">${buildMetaHTML(ep)}</div>
      </div>`;
  }).join('');
}

function buildMetaHTML(ep) {
  const prog = progress[ep.id];
  const dur = durations[ep.id] || (prog && prog.duration);
  if (prog && prog.percent >= 98) {
    return `<span class="finished">Finished</span>${dur ? `<span class="dot"></span>${formatDuration(dur)}` : ''}`;
  }
  if (prog && prog.percent > 1) {
    const left = dur ? dur - prog.time : 0;
    return `<span class="in-progress">${formatDuration(prog.time)} listened</span>`
      + (left > 0 ? `<span class="dot"></span>${formatDuration(left)} left` : '')
      + `<div class="ep-meta-progress"><div class="ep-meta-progress-fill" style="width:${prog.percent}%"></div></div>`;
  }
  return dur ? formatDuration(dur) : '';
}

function renderEpisodeMeta() {
  if (currentEpisode) updateCardMeta(currentEpisode.id);
}

// === Filter Chips ===
function renderFilterChips() {
  const container = document.getElementById('filter-chips');
  const chips = [{ name: 'All', value: null }].concat(SERIES_LIST.map(s => ({ name: s.name, value: s.name })));
  container.innerHTML = chips.map(c => `
    <button class="chip ${activeFilter === c.value ? 'active' : ''}"
            onclick="setFilter(${c.value ? `'${c.value}'` : 'null'})">${c.name}</button>
  `).join('');
}

function setFilter(series) {
  activeFilter = series;
  document.getElementById('filter-label').textContent = series || 'All Episodes';
  renderEpisodes();
  renderFilterChips();
}

// === Player Setup ===
function setupPlayer() {
  const $ = id => document.getElementById(id);
  $('mini-play-btn').addEventListener('click', e => { e.stopPropagation(); togglePlay(); });
  $('mini-player-tap').addEventListener('click', openFullPlayer);
  $('full-player-close').addEventListener('click', closeFullPlayer);
  $('play-btn').addEventListener('click', togglePlay);
  $('rewind-btn').addEventListener('click', () => seek(-15));
  $('forward-btn').addEventListener('click', () => seek(15));
  $('prev-btn').addEventListener('click', prevEpisode);
  $('next-btn').addEventListener('click', nextEpisode);
  $('speed-btn').addEventListener('click', cycleSpeed);
  $('sleep-btn').addEventListener('click', openSleepModal);

  const seekBar = $('seek-bar');
  seekBar.addEventListener('input', () => {
    seekDragging = true;
    const t = (seekBar.value / 1000) * audio.duration;
    $('current-time').textContent = formatTime(t);
    $('remaining-time').textContent = '-' + formatTime(audio.duration - t);
  });
  seekBar.addEventListener('change', () => {
    audio.currentTime = (seekBar.value / 1000) * audio.duration;
    seekDragging = false;
  });

  $('sort-btn').addEventListener('click', () => {
    sortNewestFirst = !sortNewestFirst;
    $('sort-label').textContent = sortNewestFirst ? 'Newest' : 'Oldest';
    renderEpisodes();
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (tab.dataset.tab === 'series') {
        $('filter-bar').classList.remove('hidden');
      } else {
        $('filter-bar').classList.add('hidden');
        activeFilter = null;
        renderEpisodes();
      }
    });
  });

  audio.addEventListener('timeupdate', updatePlayerUI);
  audio.addEventListener('loadedmetadata', () => {
    updatePlayerUI();
    if (currentEpisode) { durations[currentEpisode.id] = audio.duration; saveDurations(); }
    updatePositionState();
  });
  audio.addEventListener('ended', onEpisodeEnded);
  audio.addEventListener('play', () => { isPlaying = true; updatePlayButtons(); updatePositionState(); });
  audio.addEventListener('pause', () => { isPlaying = false; updatePlayButtons(); updatePositionState(); });
}

// === Play Episode ===
function playEpisode(id) {
  const ep = EPISODES.find(e => e.id === id);
  if (!ep) return;
  if (currentEpisode && currentEpisode.id === id) { togglePlay(); return; }
  if (currentEpisode) saveProgress();

  currentEpisode = ep;
  audio.src = getAudioUrl(ep);
  audio.playbackRate = playbackSpeed;
  const saved = progress[ep.id];
  if (saved && saved.time > 0 && saved.percent < 98) audio.currentTime = saved.time;
  audio.play().catch(() => {});
  showMiniPlayer();
  updateFullPlayerInfo();
  renderEpisodes();
  setupMediaSession();
}

function togglePlay() {
  if (!currentEpisode) return;
  if (audio.paused) audio.play().catch(() => {});
  else { audio.pause(); saveProgress(); }
}

function seek(s) {
  if (!audio.duration) return;
  audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + s));
}

function nextEpisode() {
  if (!currentEpisode) return;
  const idx = EPISODES.findIndex(e => e.id === currentEpisode.id);
  if (idx < EPISODES.length - 1) playEpisode(EPISODES[idx + 1].id);
}

function prevEpisode() {
  if (!currentEpisode) return;
  const idx = EPISODES.findIndex(e => e.id === currentEpisode.id);
  if (idx > 0) playEpisode(EPISODES[idx - 1].id);
}

function cycleSpeed() {
  const i = SPEEDS.indexOf(playbackSpeed);
  playbackSpeed = SPEEDS[(i + 1) % SPEEDS.length];
  audio.playbackRate = playbackSpeed;
  document.getElementById('speed-label').textContent = playbackSpeed + 'x';
}

function onEpisodeEnded() {
  if (currentEpisode) {
    progress[currentEpisode.id] = { time: audio.duration, duration: audio.duration, percent: 100, lastPlayed: Date.now() };
    localStorage.setItem('hh_progress', JSON.stringify(progress));
    renderEpisodes();
  }
  if (sleepEndOfEpisode) { clearSleepTimer(); return; }
  nextEpisode();
}

// === UI Updates ===
let positionUpdateCounter = 0;

function updatePlayerUI() {
  if (!audio.duration || seekDragging) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  document.getElementById('mini-progress-bar').style.width = pct + '%';
  document.getElementById('seek-bar').value = (audio.currentTime / audio.duration) * 1000;
  document.getElementById('current-time').textContent = formatTime(audio.currentTime);
  document.getElementById('remaining-time').textContent = '-' + formatTime(audio.duration - audio.currentTime);
  if (++positionUpdateCounter % 20 === 0) updatePositionState();
}

function updatePlayButtons() {
  const pause = '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>';
  const play = '<polygon points="5 3 19 12 5 21 5 3"/>';
  document.getElementById('play-icon').innerHTML = isPlaying ? pause : play;
  document.getElementById('mini-play-icon').innerHTML = isPlaying ? pause : play;
  renderEpisodes();
}

function showMiniPlayer() {
  document.getElementById('mini-player').classList.remove('hidden');
  document.getElementById('mini-art-text').textContent = currentEpisode.number;
  document.getElementById('mini-title').textContent = currentEpisode.title;
}

function updateFullPlayerInfo() {
  if (!currentEpisode) return;
  document.getElementById('fp-art-ep').textContent = currentEpisode.number;
  document.getElementById('fp-title').textContent = `${currentEpisode.number}. ${currentEpisode.title}`;
}

function openFullPlayer() {
  if (!currentEpisode) return;
  const fp = document.getElementById('full-player');
  fp.classList.remove('hidden', 'slide-down');
  fp.classList.add('slide-up');
  document.body.style.overflow = 'hidden';
}

function closeFullPlayer() {
  const fp = document.getElementById('full-player');
  fp.classList.remove('slide-up');
  fp.classList.add('slide-down');
  document.body.style.overflow = '';
  setTimeout(() => { fp.classList.add('hidden'); fp.classList.remove('slide-down'); }, 300);
}

// === Sleep Timer ===
function openSleepModal() { document.getElementById('sleep-modal').classList.remove('hidden'); document.getElementById('sleep-off-btn').classList.toggle('hidden', !sleepTimerId && !sleepEndOfEpisode); }
function closeSleepModal() { document.getElementById('sleep-modal').classList.add('hidden'); }

function setSleepTimer(minutes) {
  closeSleepModal(); clearSleepTimer();
  if (minutes === 0) return;
  if (minutes === -1) {
    sleepEndOfEpisode = true;
    document.getElementById('sleep-badge').textContent = 'EP';
    document.getElementById('sleep-badge').classList.remove('hidden');
    return;
  }
  sleepRemaining = minutes * 60; sleepEndOfEpisode = false;
  updateSleepBadge();
  document.getElementById('sleep-badge').classList.remove('hidden');
  sleepTimerId = setInterval(() => {
    sleepRemaining--;
    updateSleepBadge();
    if (sleepRemaining <= 0) { audio.pause(); saveProgress(); clearSleepTimer(); }
  }, 1000);
}

function clearSleepTimer() {
  if (sleepTimerId) clearInterval(sleepTimerId);
  sleepTimerId = null; sleepEndOfEpisode = false; sleepRemaining = 0;
  document.getElementById('sleep-badge').classList.add('hidden');
}

function updateSleepBadge() {
  const m = Math.ceil(sleepRemaining / 60);
  document.getElementById('sleep-badge').textContent = m > 60 ? Math.round(m / 60) + 'h' : m + 'm';
}

// === Media Session ===
function setupMediaSession() {
  if (!('mediaSession' in navigator) || !currentEpisode) return;
  navigator.mediaSession.metadata = new MediaMetadata({
    title: `EP ${currentEpisode.number}: ${currentEpisode.title}`,
    artist: 'Dan Carlin', album: currentEpisode.series || 'Hardcore History',
  });
  navigator.mediaSession.setActionHandler('play', () => audio.play());
  navigator.mediaSession.setActionHandler('pause', () => audio.pause());
  navigator.mediaSession.setActionHandler('seekbackward', d => seek(-(d.seekOffset || 15)));
  navigator.mediaSession.setActionHandler('seekforward', d => seek(d.seekOffset || 15));
  navigator.mediaSession.setActionHandler('previoustrack', prevEpisode);
  navigator.mediaSession.setActionHandler('nexttrack', nextEpisode);
  navigator.mediaSession.setActionHandler('seekto', d => { if (d.seekTime != null) audio.currentTime = d.seekTime; });
  updatePositionState();
}

function updatePositionState() {
  if (!('mediaSession' in navigator) || !audio.duration || !isFinite(audio.duration)) return;
  try {
    navigator.mediaSession.setPositionState({ duration: audio.duration, playbackRate: audio.playbackRate, position: Math.min(audio.currentTime, audio.duration) });
  } catch (e) {}
}

// === Helpers ===
function formatTime(s) {
  if (!s || isNaN(s)) return '0:00';
  s = Math.floor(s);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return h > 0 ? `${h}:${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}` : `${m}:${sec.toString().padStart(2,'0')}`;
}

function formatDuration(s) {
  if (!s || isNaN(s)) return '';
  s = Math.floor(s);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
  if (h > 0) return m > 0 ? `${h} hr ${m} min` : `${h} hr`;
  return `${m} min`;
}

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});

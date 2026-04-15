const IA_BASE = 'https://archive.org/download/hardcore-history/Hardcore%20History/';
const IA_BASE_ALT = 'https://archive.org/download/hardcorehistory_20240414/';

const EPISODES = [
  {
    id: 73,
    number: '73',
    title: 'Mania for Subjugation III',
    subtitle: null,
    series: 'Mania for Subjugation',
    description: 'The conclusion of the series examining the history of slavery and forced labor across civilizations.',
    audioFile: '73 - Mania for Sunjugation III.mp3',
    alt: true
  },
  {
    id: 72,
    number: '72',
    title: 'Mania for Subjugation II',
    subtitle: null,
    series: 'Mania for Subjugation',
    description: 'The continuation of a deep dive into the history of slavery and human subjugation.',
    audioFile: '72 - Mania for Subjugation II.mp3',
    alt: true
  },
  {
    id: 71,
    number: '71',
    title: 'Mania for Subjugation',
    subtitle: null,
    series: 'Mania for Subjugation',
    description: 'An examination of the history of slavery and forced labor throughout human civilization.',
    audioFile: '71 - Mania for Subjugation.mp3',
    alt: true
  },
  {
    id: 70,
    number: '70',
    title: 'Twilight of the Aesir II',
    subtitle: null,
    series: 'Twilight of the Aesir',
    description: 'The conclusion of the Viking Age story and the transformation of Scandinavian society.',
    audioFile: '70 - Twilight of The Aesir II.mp3',
    alt: true
  },
  {
    id: 69,
    number: '69',
    title: 'Twilight of the Aesir',
    subtitle: null,
    series: 'Twilight of the Aesir',
    description: 'The Viking Age, Norse culture, and the dramatic raids and voyages that shaped Europe.',
    audioFile: '69 - Twilight of the Aesir.mp3',
    alt: true
  },
  {
    id: 68,
    number: '68',
    title: 'Human Resources',
    subtitle: null,
    series: null,
    description: 'An exploration of how human beings have been used as resources throughout history.',
    audioFile: '68 - Human Resources.mp3',
    alt: true
  },
  {
    id: 67,
    number: '67',
    title: 'Supernova in the East VI',
    subtitle: null,
    series: 'Supernova in the East',
    description: 'The final chapter of the Pacific War, the atomic bombs, and Japan\'s surrender.',
    audioFile: 'dchha67_Supernova_in_the_East_VI.mp3'
  },
  {
    id: 66,
    number: '66',
    title: 'Supernova in the East V',
    subtitle: null,
    series: 'Supernova in the East',
    description: 'The Pacific War intensifies as island-hopping campaigns grind toward Japan.',
    audioFile: 'dchha66_Supernova_in_the_East_V.mp3'
  },
  {
    id: 65,
    number: '65',
    title: 'Supernova in the East IV',
    subtitle: null,
    series: 'Supernova in the East',
    description: 'The tide turns in the Pacific as Allied forces begin their counteroffensive.',
    audioFile: 'dchha65_Supernova_in_the_East_IV.mp3'
  },
  {
    id: 64,
    number: '64',
    title: 'Supernova in the East III',
    subtitle: null,
    series: 'Supernova in the East',
    description: 'Japan\'s empire reaches its zenith as the war in the Pacific expands.',
    audioFile: 'dchha64_Supernova_in_the_East_III.mp3'
  },
  {
    id: 63,
    number: '63',
    title: 'Supernova in the East II',
    subtitle: null,
    series: 'Supernova in the East',
    description: 'The road to Pearl Harbor and the opening campaigns of Japan\'s Pacific war.',
    audioFile: 'dchha63_Supernova_in_the_East_II.mp3'
  },
  {
    id: 62,
    number: '62',
    title: 'Supernova in the East I',
    subtitle: null,
    series: 'Supernova in the East',
    description: 'The rise of Imperial Japan from the Meiji Restoration to the brink of World War II.',
    audioFile: 'dchha62_Supernova_in_the_East_I.mp3'
  },
  {
    id: 61,
    number: '61',
    title: 'Painfotainment',
    subtitle: 'BLITZ',
    series: null,
    description: 'Pain, public punishment, and the intersection of entertainment and suffering throughout history.',
    audioFile: 'dchha61_BLITZ_Painfotainment.mp3'
  },
  {
    id: 60,
    number: '60',
    title: 'The Celtic Holocaust',
    subtitle: null,
    series: null,
    description: 'Julius Caesar\'s fruit of his invasion of Gaul and the horrific treatment of the Celtic peoples.',
    audioFile: 'dchha60_The_Celtic_Holocaust.mp3'
  },
  {
    id: 59,
    number: '59',
    title: 'The Destroyer of Worlds',
    subtitle: 'BLITZ',
    series: null,
    description: 'The story of nuclear weapons from their creation to the Cuban Missile Crisis and the terror of the atomic age.',
    audioFile: 'dchha59_BLITZ_The_Destroyer_of_Worlds.mp3'
  },
  {
    id: 58,
    number: '58',
    title: 'Kings of Kings III',
    subtitle: null,
    series: 'Kings of Kings',
    description: 'The conclusion of the Persian Empire saga, from Xerxes\' invasion of Greece to Alexander\'s conquest.',
    audioFile: 'dchha58_Kings_of_Kings_III.mp3'
  },
  {
    id: 57,
    number: '57',
    title: 'Kings of Kings II',
    subtitle: null,
    series: 'Kings of Kings',
    description: 'The rise of the Achaemenid Persian Empire continues with Darius the Great and the wars with Greece.',
    audioFile: 'dchha57_Kings_of_Kings_II.mp3'
  },
  {
    id: 56,
    number: '56',
    title: 'Kings of Kings',
    subtitle: null,
    series: 'Kings of Kings',
    description: 'The rise of the Achaemenid Persian Empire under Cyrus the Great and his successors.',
    audioFile: 'dchha56_Kings_of_Kings.mp3'
  },
  {
    id: 55,
    number: '55',
    title: 'Blueprint for Armageddon VI',
    subtitle: null,
    series: 'Blueprint for Armageddon',
    description: 'The conclusion of World War I, the final offensives, the armistice, and the lasting consequences.',
    audioFile: '55-Blueprint-for-Armageddon-VI-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 54,
    number: '54',
    title: 'Blueprint for Armageddon V',
    subtitle: null,
    series: 'Blueprint for Armageddon',
    description: 'The war grinds on through 1916-1917 with Verdun, the Somme, and the entry of the United States.',
    audioFile: '54-Blueprint-for-Armageddon-V-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 53,
    number: '53',
    title: 'Blueprint for Armageddon IV',
    subtitle: null,
    series: 'Blueprint for Armageddon',
    description: 'Gallipoli, poison gas, and the horrors of trench warfare in 1915-1916.',
    audioFile: '53-Blueprint-for-Armageddon-IV-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 52,
    number: '52',
    title: 'Blueprint for Armageddon III',
    subtitle: null,
    series: 'Blueprint for Armageddon',
    description: 'The Western Front settles into the trenches and the Eastern Front explodes.',
    audioFile: '52-Blueprint-for-Armageddon-III-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 51,
    number: '51',
    title: 'Blueprint for Armageddon II',
    subtitle: null,
    series: 'Blueprint for Armageddon',
    description: 'The war begins in earnest with the invasion of Belgium and the First Battle of the Marne.',
    audioFile: '51-Blueprint-for-Armageddon-II-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 50,
    number: '50',
    title: 'Blueprint for Armageddon I',
    subtitle: null,
    series: 'Blueprint for Armageddon',
    description: 'The assassination of Archduke Franz Ferdinand and the chain of events that led to World War I.',
    audioFile: '50-Blueprint-for-Armageddon-I-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 49,
    number: '49',
    title: 'The American Peril',
    subtitle: null,
    series: null,
    description: 'The Spanish-American War and America\'s emergence as an imperial power.',
    audioFile: '49-The-American-Peril-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 48,
    number: '48',
    title: 'Prophets of Doom',
    subtitle: null,
    series: null,
    description: 'The Anabaptist takeover of Munster in 1534 and the radical religious apocalypse that followed.',
    audioFile: '48-Prophets-of-Doom-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 47.5,
    number: 'EXTRA',
    title: 'Wrath of the Khans (Extra)',
    subtitle: 'EXTRA',
    series: 'Wrath of the Khans',
    description: 'Bonus material and epilogue for the Wrath of the Khans series.',
    audioFile: '47_5_EXTRA_Wrath_of_the_Khans-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 47,
    number: '47',
    title: 'Wrath of the Khans V',
    subtitle: null,
    series: 'Wrath of the Khans',
    description: 'The Mongol Empire after Genghis Khan, its expansion and eventual fragmentation.',
    audioFile: '47-Wrath-of-the-Khans-V-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 46,
    number: '46',
    title: 'Wrath of the Khans IV',
    subtitle: null,
    series: 'Wrath of the Khans',
    description: 'The death of Genghis Khan and the continued expansion of the Mongol Empire into Europe.',
    audioFile: '46-Wrath-of-the-Khans-IV-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 45,
    number: '45',
    title: 'Wrath of the Khans III',
    subtitle: null,
    series: 'Wrath of the Khans',
    description: 'The Mongol invasion continues westward with devastating consequences.',
    audioFile: '45-Wrath-of-the-Khans-III-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 44,
    number: '44',
    title: 'Wrath of the Khans II',
    subtitle: null,
    series: 'Wrath of the Khans',
    description: 'Genghis Khan\'s war against the Khwarezmian Empire and the destruction it brought.',
    audioFile: '44-Wrath-of-the-Khans-II-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 43,
    number: '43',
    title: 'Wrath of the Khans I',
    subtitle: null,
    series: 'Wrath of the Khans',
    description: 'The rise of Temujin and the unification of the Mongol tribes under Genghis Khan.',
    audioFile: '43-Wrath-of-the-Khans-I-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 42.5,
    number: 'EXTRA',
    title: 'Logical Insanity (Extra)',
    subtitle: 'EXTRA',
    series: null,
    description: 'Bonus material and follow-up to the Logical Insanity episode.',
    audioFile: '42_5-Extra-Logical-Insanity-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 42,
    number: '42',
    title: 'Logical Insanity',
    subtitle: 'BLITZ',
    series: null,
    description: 'The decision to drop atomic bombs on Japan and the logic behind nuclear warfare.',
    audioFile: '42-BLITZ-Logical-Insanity-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 41.5,
    number: 'EXTRA',
    title: 'Thor\'s Angels (Extra)',
    subtitle: 'EXTRA',
    series: null,
    description: 'Bonus material and epilogue for the Thor\'s Angels episode.',
    audioFile: '41_5_EXTRA_Thors_Angels-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 41,
    number: '41',
    title: 'Thor\'s Angels',
    subtitle: null,
    series: null,
    description: 'The Germanic barbarian tribes and how they transformed Europe after the fall of Rome.',
    audioFile: '41-Thors-Angels-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 40,
    number: '40',
    title: 'Radical Thoughts',
    subtitle: 'BLITZ',
    series: null,
    description: 'The history of radical and revolutionary movements and their impact on society.',
    audioFile: '40-BLITZ-Radical-Thoughts-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 39,
    number: '39',
    title: 'Death Throes of the Republic VI',
    subtitle: null,
    series: 'Death Throes of the Republic',
    description: 'The final chapter: Caesar crosses the Rubicon, civil war, and the end of the Roman Republic.',
    audioFile: '39-Death-Throes-of-the-Republic-VI-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 38,
    number: '38',
    title: 'Death Throes of the Republic V',
    subtitle: null,
    series: 'Death Throes of the Republic',
    description: 'Spartacus, Pompey, Crassus, and the rise of the First Triumvirate.',
    audioFile: '38-Death-Throes-of-the-Republic-V-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 37,
    number: '37',
    title: 'Death Throes of the Republic IV',
    subtitle: null,
    series: 'Death Throes of the Republic',
    description: 'Sulla\'s dictatorship and the proscriptions that terrorized Rome.',
    audioFile: '37-Death-Throes-of-the-Republic-IV-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 36,
    number: '36',
    title: 'Death Throes of the Republic III',
    subtitle: null,
    series: 'Death Throes of the Republic',
    description: 'The Social War and Sulla\'s march on Rome shatter Republican norms.',
    audioFile: '36-Death-Throes-of-the-Republic-III-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 35,
    number: '35',
    title: 'Death Throes of the Republic II',
    subtitle: null,
    series: 'Death Throes of the Republic',
    description: 'Gaius Marius reforms the Roman army and political violence escalates.',
    audioFile: '35-Death-Throes-of-the-Republic-II-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 34,
    number: '34',
    title: 'Death Throes of the Republic I',
    subtitle: null,
    series: 'Death Throes of the Republic',
    description: 'The Gracchi brothers attempt reform and set Rome on the path to civil war.',
    audioFile: '34-Death-Throes-of-the-Republic-I-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 33,
    number: '33',
    title: 'Old School Toughness',
    subtitle: 'BLITZ',
    series: null,
    description: 'How tough were people in ancient and medieval times compared to today?',
    audioFile: '33-BLITZ-Old-School-Toughness-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 32,
    number: '32',
    title: 'Globalization Unto Death',
    subtitle: null,
    series: null,
    description: 'The first circumnavigation of the globe and early European exploration and conquest.',
    audioFile: '32-Globalization-Unto-Death-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 31,
    number: '31',
    title: 'Suffer the Children',
    subtitle: 'BLITZ',
    series: null,
    description: 'The treatment of children throughout history and how childhood has changed.',
    audioFile: '31-BLITZ-Suffer-the-Children-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 30,
    number: '30',
    title: 'Ghosts of the Ostfront IV',
    subtitle: null,
    series: 'Ghosts of the Ostfront',
    description: 'The Soviet counteroffensive, Stalingrad to Berlin, and the end of the Eastern Front.',
    audioFile: '30-Ghosts-of-the-Ostfront-IV-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 29,
    number: '29',
    title: 'Ghosts of the Ostfront III',
    subtitle: null,
    series: 'Ghosts of the Ostfront',
    description: 'Stalingrad and the turning point of the Eastern Front.',
    audioFile: '29-Ghosts-of-the-Ostfront-III-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 28,
    number: '28',
    title: 'Ghosts of the Ostfront II',
    subtitle: null,
    series: 'Ghosts of the Ostfront',
    description: 'Operation Barbarossa continues and the brutal siege of Leningrad.',
    audioFile: '28-Ghosts-of-the-Ostfront-II-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 27,
    number: '27',
    title: 'Ghosts of the Ostfront I',
    subtitle: null,
    series: 'Ghosts of the Ostfront',
    description: 'The savage war between Nazi Germany and the Soviet Union begins.',
    audioFile: '27-Ghosts-of-the-Ostfront-I-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 26,
    number: '26',
    title: 'Addicted to Bondage',
    subtitle: 'BLITZ',
    series: null,
    description: 'The history of slavery and human bondage across civilizations.',
    audioFile: '26-BLITZ-Addicted-to-Bondage-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 25,
    number: '25',
    title: 'The Dyer Outlook',
    subtitle: null,
    series: null,
    description: 'Gwynne Dyer\'s predictions about the future of warfare and humanity.',
    audioFile: '25-The-Dyer-Outlook-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 24,
    number: '24',
    title: 'Classical Hanson',
    subtitle: null,
    series: null,
    description: 'Victor Davis Hanson\'s ideas on Western warfare and the Greek way of battle.',
    audioFile: '24-Classical-Hanson-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 23,
    number: '23',
    title: 'Punic Nightmares III',
    subtitle: null,
    series: 'Punic Nightmares',
    description: 'The final Punic War and the complete destruction of Carthage.',
    audioFile: '23-Punic-Nightmares-III-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 22,
    number: '22',
    title: 'Punic Nightmares II',
    subtitle: null,
    series: 'Punic Nightmares',
    description: 'Hannibal\'s devastating campaign in Italy and Rome\'s desperate resistance.',
    audioFile: '22-Punic-Nightmares-II-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 21,
    number: '21',
    title: 'Punic Nightmares I',
    subtitle: null,
    series: 'Punic Nightmares',
    description: 'The rivalry between Rome and Carthage and the lead-up to the Second Punic War.',
    audioFile: '21-Punic-Nightmares-I-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 20,
    number: '20',
    title: 'History Under the Influence',
    subtitle: 'BLITZ',
    series: null,
    description: 'How alcohol and drugs have shaped the course of human history.',
    audioFile: '20-History-Under-the-Influence-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 19,
    number: '19',
    title: 'Apache Tears',
    subtitle: null,
    series: null,
    description: 'The Apache Wars and the resistance of Geronimo and the Apache people.',
    audioFile: '19-Apache-Tears-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 18,
    number: '18',
    title: 'A Fly on James Burke\'s Wall',
    subtitle: null,
    series: null,
    description: 'An exploration of historian James Burke\'s ideas about connections in history.',
    audioFile: '18-A-Fly-on-James-Burkes-Wall-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 17,
    number: '17',
    title: 'Judgment at Nineveh',
    subtitle: null,
    series: null,
    description: 'The Neo-Assyrian Empire and its spectacular rise and violent fall.',
    audioFile: '17-Judgment-at-Nineveh-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 16,
    number: '16',
    title: 'Nazi Tidbits',
    subtitle: null,
    series: null,
    description: 'Fascinating and disturbing details about the Third Reich and its leaders.',
    audioFile: '16-Nazi-Tidbits-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 15,
    number: '15',
    title: 'Desperate Times',
    subtitle: null,
    series: null,
    description: 'The Great Depression era and the desperate measures people took to survive.',
    audioFile: '15-Desperate-Times-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 14,
    number: '14',
    title: 'The Macedonian Soap Opera',
    subtitle: null,
    series: null,
    description: 'The successors of Alexander the Great and their bloody wars of inheritance.',
    audioFile: '14-The-Macedonian-Soap-Opera-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 13,
    number: '13',
    title: 'Bubonic Nukes',
    subtitle: null,
    series: null,
    description: 'The Black Death and its catastrophic impact on medieval Europe.',
    audioFile: '13-Bubonic-Nukes-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 12,
    number: '12',
    title: 'Steppe Stories',
    subtitle: null,
    series: null,
    description: 'The nomadic peoples of the Eurasian steppe and their impact on world history.',
    audioFile: '12-Steppe-Stories-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 11,
    number: '11',
    title: 'Thoughts on Churchill',
    subtitle: null,
    series: null,
    description: 'Winston Churchill\'s complex legacy and his role in shaping the modern world.',
    audioFile: '11-Thoughts-on-Churchill-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 10,
    number: '10',
    title: 'The What-Ifs of 1066',
    subtitle: null,
    series: null,
    description: 'The Norman Conquest and how the Battle of Hastings changed everything.',
    audioFile: '10-The-What-Ifs-of-1066-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 9,
    number: '9',
    title: 'Darkness Buries the Bronze Age',
    subtitle: null,
    series: null,
    description: 'The mysterious collapse of Bronze Age civilizations around 1200 BCE.',
    audioFile: '09-Darkness-Buries-the-Bronze-Age-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 8,
    number: '8',
    title: 'Scars of the Great War',
    subtitle: null,
    series: null,
    description: 'The lasting scars of World War I on soldiers, civilians, and civilization.',
    audioFile: '08-Scars-of-the-Great-War-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 7,
    number: '7',
    title: 'The X-History Files',
    subtitle: null,
    series: null,
    description: 'Strange, unexplained, and mysterious events throughout history.',
    audioFile: '07-The-X-History-Files-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 6,
    number: '6',
    title: 'Shield of the West',
    subtitle: null,
    series: null,
    description: 'The Greco-Persian Wars and how the Greeks defended Western civilization.',
    audioFile: '06-Shield-of-the-West-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 5,
    number: '5',
    title: 'Meandering Through the Cold War',
    subtitle: null,
    series: null,
    description: 'The Cold War, nuclear brinkmanship, and the struggle between superpowers.',
    audioFile: '05-Meandering-Through-The-Cold-War-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 4,
    number: '4',
    title: 'Romancing the Tribes',
    subtitle: null,
    series: null,
    description: 'The romanticization of tribal peoples from Caesar\'s Gauls to the American frontier.',
    audioFile: '04-Romancing-The-Tribes-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 3,
    number: '3',
    title: 'The Organization of Peace',
    subtitle: null,
    series: null,
    description: 'The League of Nations, the United Nations, and humanity\'s attempts at organized peace.',
    audioFile: '03-The-Organization-of-Peace-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 2,
    number: '2',
    title: 'Guns and Horses',
    subtitle: null,
    series: null,
    description: 'How military technology and cavalry transformed warfare throughout history.',
    audioFile: '02-Guns-Horses-Hardcore-History-Dan-Carlin.mp3'
  },
  {
    id: 1,
    number: '1',
    title: 'Alexander versus Hitler',
    subtitle: null,
    series: null,
    description: 'Comparing the greatest military conquerors: Alexander the Great and Adolf Hitler.',
    audioFile: '01-Alexander-versus-Hitler-Hardcore-History-Dan-Carlin.mp3'
  }
];

function getAudioUrl(episode) {
  const base = episode.alt ? IA_BASE_ALT : IA_BASE;
  return base + encodeURIComponent(episode.audioFile);
}

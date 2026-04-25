const IA_BASE = 'https://archive.org/download/hardcorehistory_20240414/';

const EPISODES = [
  {
    id: 73, number: '73', title: 'Mania for Subjugation III', subtitle: null,
    series: 'Mania for Subjugation',
    description: 'Attacking the largest empire the world had ever seen is a huge endeavor at any age, but try doing it at 21. Alexander aims for immortality.',
    audioFile: '73 - Mania for Sunjugation III.mp3'
  },
  {
    id: 72, number: '72', title: 'Mania for Subjugation II', subtitle: null,
    series: 'Mania for Subjugation',
    description: 'Is it safe to hand control of the deadliest army in the world to a 20-year old? Alexander becomes king and fights off threats in all directions.',
    audioFile: '72 - Mania for Subjugation II.mp3'
  },
  {
    id: 71, number: '71', title: 'Mania for Subjugation', subtitle: null,
    series: 'Mania for Subjugation',
    description: 'What\'s the recipe for making a historically world-class apex predator? In the case of Alexander the Great, it might be the three Ns: Nature, Nurture, and Nepotism.',
    audioFile: '71 - Mania for Subjugation.mp3'
  },
  {
    id: 70, number: '70', title: 'Twilight of the Aesir II', subtitle: null,
    series: 'Twilight of the Aesir',
    description: 'Pagan Viking Sea Kings spend the 10th and 11th centuries morphing into Christian monarchs. But with rulers like Harald Bluetooth it\'s debatable whether things will be any less horrific.',
    audioFile: '70 - Twilight of The Aesir II.mp3'
  },
  {
    id: 69, number: '69', title: 'Twilight of the Aesir', subtitle: null,
    series: 'Twilight of the Aesir',
    description: 'This show picks up where Thor\'s Angels left off. In the early Middle Ages Pagan Germanic-language speakers like the Vikings are a dying breed. Many of their contemporaries wish they\'d die faster.',
    audioFile: '69 - Twilight of the Aesir.mp3'
  },
  {
    id: 68, number: '68', title: 'Human Resources', subtitle: 'BLITZ',
    series: null,
    description: 'The Atlantic Slave Trade mixes centuries of human bondage with violence, economics, commerce, geo-political competition, liberty, morality, injustice, revolution, tragedy and bloody reckonings.',
    audioFile: '68 - Human Resources.mp3'
  },
  {
    id: 67, number: '67', title: 'Supernova in the East VI', subtitle: null,
    series: 'Supernova in the East',
    description: 'When do spirit, tenacity, resilience and bravery cross into madness? Japan\'s leaders test the limits of national endurance in the war\'s last year.',
    audioFile: '67 - Supernova in the East VI.mp3'
  },
  {
    id: 66, number: '66', title: 'Supernova in the East V', subtitle: null,
    series: 'Supernova in the East',
    description: 'Can suicidal bravery and fanatical determination make up for material, industrial and numerical insufficiency? The results are nightmarish.',
    audioFile: '66 - Supernova in the East V.mp3'
  },
  {
    id: 65, number: '65', title: 'Supernova in the East IV', subtitle: null,
    series: 'Supernova in the East',
    description: 'Coral Sea, Midway and Guadalcanal are three of the most famous battles of the Second World War. Together they will shift the momentum in the Pacific theater.',
    audioFile: '65 - Supernova in the East IV.mp3'
  },
  {
    id: 64, number: '64', title: 'Supernova in the East III', subtitle: null,
    series: 'Supernova in the East',
    description: 'Japan\'s rising sun goes supernova and engulfs a huge area of Asia and the Pacific. A war without mercy begins to develop infusing the whole conflict with a savage vibe.',
    audioFile: '64 - Supernova in the East III (1941-1942 CE).mp3'
  },
  {
    id: 63, number: '63', title: 'Supernova in the East II', subtitle: null,
    series: 'Supernova in the East',
    description: 'Allegations of Japanese war crimes in China lead to eerily familiar, almost modern questions over how the world should respond. And then Dec 7, 1941 arrives...',
    audioFile: '63 - Supernova in the East II (1938-1941 CE).mp3'
  },
  {
    id: 62, number: '62', title: 'Supernova in the East I', subtitle: null,
    series: 'Supernova in the East',
    description: 'The Asia-Pacific War of 1937-1945 has deep roots. It also involves a Japanese society that\'s been called one of the most distinctive on Earth.',
    audioFile: '62 - Supernova in the East I (1800s-1938 CE).mp3'
  },
  {
    id: 61, number: '61', title: 'Painfotainment', subtitle: 'BLITZ',
    series: null,
    description: 'Pain is at the root of most drama and entertainment. When does it get too real? This very disturbing and graphic show looks into some case studies and asks some deep questions.',
    audioFile: '61 - Painfotainment (80-1757 CE).mp3'
  },
  {
    id: 60, number: '60', title: 'The Celtic Holocaust', subtitle: null,
    series: null,
    description: 'Julius Caesar is our travel guide as he takes us through his murderous subjugation of the native Celtic tribal peoples of ancient Gaul.',
    audioFile: '60 - The Celtic Holocaust.mp3'
  },
  {
    id: 59, number: '59', title: 'The Destroyer of Worlds', subtitle: 'BLITZ',
    series: null,
    description: 'What happens if human beings can\'t handle the power of their own weaponry? This show examines the dangerous early years of the Nuclear Age and humankind\'s efforts to avoid self-destruction.',
    audioFile: '59 - The Destroyer of Worlds (1945-1962 CE).mp3'
  },
  {
    id: 58, number: '58', title: 'Kings of Kings III', subtitle: null,
    series: 'Kings of Kings',
    description: 'If this were a movie, the events and cameos would be too numerous and star-studded to mention. It includes Xerxes, Spartans, Immortals, Alexander the Great, and several of the greatest battles in history.',
    audioFile: '58 - Kings of Kings III (486-323 BCE).mp3'
  },
  {
    id: 57, number: '57', title: 'Kings of Kings II', subtitle: null,
    series: 'Kings of Kings',
    description: 'From Biblical-era coup conspiracies to the horrific aftermath of ancient combat this second installment of the series on the Kings of Achaemenid Persia goes where only Dan can take it.',
    audioFile: '57 - Kings of Kings II (530-490 BCE).mp3'
  },
  {
    id: 56, number: '56', title: 'Kings of Kings', subtitle: null,
    series: 'Kings of Kings',
    description: 'Often relegated to the role of slavish cannon fodder for Sparta\'s spears, the Achaemenid Persian empire had a glorious heritage. Under a single king they created the greatest empire the world had ever seen.',
    audioFile: '56 - Kings of Kings I (559-530 BCE).mp3'
  },
  {
    id: 55, number: '55', title: 'Blueprint for Armageddon VI', subtitle: null,
    series: 'Blueprint for Armageddon',
    description: 'The Americans are coming, but will the war be over by the time they get there? Germany throws everything into a last series of stupendous attacks in the West.',
    audioFile: '55 - Blueprint for Armageddon VI (1917-1918 CE).mp3'
  },
  {
    id: 54, number: '54', title: 'Blueprint for Armageddon V', subtitle: null,
    series: 'Blueprint for Armageddon',
    description: 'Politics, diplomacy, revolution and mutiny take center stage at the start of this episode, but mud, blood, shells and tragedy drown all by the end.',
    audioFile: '54 - Blueprint for Armageddon V (1916-1917 CE).mp3'
  },
  {
    id: 53, number: '53', title: 'Blueprint for Armageddon IV', subtitle: null,
    series: 'Blueprint for Armageddon',
    description: 'Machine guns, barbed wire and millions upon millions of artillery shells create industrialized meat grinders at Verdun and the Somme.',
    audioFile: '53 - Blueprint for Armageddon IV (1915-1916 CE).mp3'
  },
  {
    id: 52, number: '52', title: 'Blueprint for Armageddon III', subtitle: null,
    series: 'Blueprint for Armageddon',
    description: 'The war of maneuver that was supposed to be over quickly instead turns into a lingering bloody stalemate. Trench warfare begins.',
    audioFile: '52 - Blueprint for Armageddon III (1914-1915 CE).mp3'
  },
  {
    id: 51, number: '51', title: 'Blueprint for Armageddon II', subtitle: null,
    series: 'Blueprint for Armageddon',
    description: 'The Great Powers all come out swinging in the first round of the worst war the planet has ever seen. Millions of men in dozens of armies vie in the most deadly opening moves of any conflict.',
    audioFile: '51 - Blueprint for Armageddon II (1914 CE).mp3'
  },
  {
    id: 50, number: '50', title: 'Blueprint for Armageddon I', subtitle: null,
    series: 'Blueprint for Armageddon',
    description: 'The planet hadn\'t seen a major war between all the Great Powers since the downfall of Napoleon at Waterloo in 1815. But 99 years later the dam breaks.',
    audioFile: '50 - Blueprint for Armageddon I (1914 CE).mp3'
  },
  {
    id: 49, number: '49', title: 'The American Peril', subtitle: null,
    series: null,
    description: 'Imperial temptations and humanitarian nightmares force the United States of the late 19th Century to confront the contradictions between its revolutionary self-image and its expanding national interests.',
    audioFile: '49 - American Peril (1897-1898 CE).mp3'
  },
  {
    id: 48, number: '48', title: 'Prophets of Doom', subtitle: null,
    series: null,
    description: 'Murderous millennial preachers and prophets take over the German city of Munster after Martin Luther unleashes a Pandora\'s Box of religious anarchy with the Protestant Reformation.',
    audioFile: '48 - Prophets of Doom (1530-1536 CE).mp3'
  },
  {
    id: 47.5, number: 'EXTRA', title: 'Wrath of the Khans (Extra)', subtitle: 'EXTRA',
    series: 'Wrath of the Khans',
    description: 'In this "Director\'s Cut" style addendum you get cutting-room floor stuff and Dan talking about the challenges this episode posed and why he made Wrath of the Khans the way he did.',
    audioFile: '47_5_EXTRA_Wrath_of_the_Khans-Hardcore-History-Dan-Carlin.mp3',
    altBase: 'https://archive.org/download/hardcore-history/Hardcore%20History/'
  },
  {
    id: 47, number: '47', title: 'Wrath of the Khans V', subtitle: null,
    series: 'Wrath of the Khans',
    description: 'Succession issues weaken the Mongol Empire as the grandchildren of Genghis Khan fight over their imperial inheritance. This doesn\'t stop them from dealing out pain and suffering.',
    audioFile: '47 - Wrath of the Khans V (1242-1294 CE).mp3'
  },
  {
    id: 46, number: '46', title: 'Wrath of the Khans IV', subtitle: null,
    series: 'Wrath of the Khans',
    description: 'The death of Genghis Khan should have slowed the momentum of Mongol conquests, but instead it accelerated it. This time though, all of Europe is on the Mongol hit list.',
    audioFile: '46 - Wrath of the Khans IV (1227-1242 CE).mp3'
  },
  {
    id: 45, number: '45', title: 'Wrath of the Khans III', subtitle: null,
    series: 'Wrath of the Khans',
    description: 'The expansion of Genghis Khan\'s conquests continue, with locations as far apart as Europe and China feeling the bloody effects of Mongol warfare and retribution.',
    audioFile: '45 - Wrath of the Khans III (1221-1227 CE).mp3'
  },
  {
    id: 44, number: '44', title: 'Wrath of the Khans II', subtitle: null,
    series: 'Wrath of the Khans',
    description: 'The Mongol leader Genghis Khan displays an unmatched level of strategic genius while moving against both Northern China and the Eastern Islamic world. Millions are slaughtered.',
    audioFile: '44 - Wrath of the Khans II (1215-1221 CE).mp3'
  },
  {
    id: 43, number: '43', title: 'Wrath of the Khans I', subtitle: null,
    series: 'Wrath of the Khans',
    description: 'In one of the most violent outbursts in history a little-known tribe of Eurasian nomads breaks upon the great societies of the Old World like a human tsunami.',
    audioFile: '43 - Wrath of the Khans I (1162-1211 CE).mp3'
  },
  {
    id: 42.5, number: 'EXTRA', title: 'Logical Insanity (Extra)', subtitle: 'EXTRA',
    series: null,
    description: 'In this "Director\'s Cut" style addendum you get cutting-room floor stuff and Dan talking about the challenges this episode posed and why he made Logical Insanity the way he did.',
    audioFile: '42_5-Extra-Logical-Insanity-Hardcore-History-Dan-Carlin.mp3',
    altBase: 'https://archive.org/download/hardcore-history/Hardcore%20History/'
  },
  {
    id: 42, number: '42', title: 'Logical Insanity', subtitle: 'BLITZ',
    series: null,
    description: 'After many listener requests, Dan examines the issue of the morality of dropping the Atomic Bombs in the Second World War. As usual, he does so in his own unique, unexpected way.',
    audioFile: '42 - Logical Insanity I (1945 CE).mp3'
  },
  {
    id: 41.5, number: 'EXTRA', title: 'Thor\'s Angels (Extra)', subtitle: 'EXTRA',
    series: null,
    description: 'In this "Director\'s Cut" style addendum you get cutting-room floor stuff and Dan talking about the challenges this episode posed and why he made Thor\'s Angels the way he did.',
    audioFile: '41_5_EXTRA_Thors_Angels-Hardcore-History-Dan-Carlin.mp3',
    altBase: 'https://archive.org/download/hardcore-history/Hardcore%20History/'
  },
  {
    id: 41, number: '41', title: 'Thor\'s Angels', subtitle: null,
    series: null,
    description: 'What started as a standard podcast episode morphed into an audio book on what used to be called "The Dark Ages" in Europe. Dan gets into many areas he should probably avoid...',
    audioFile: '41 - Thors Angels I (400s-800s CE).mp3'
  },
  {
    id: 40, number: '40', title: 'Radical Thoughts', subtitle: 'BLITZ',
    series: null,
    description: 'Using the two 20th Century "Red Scare" eras as case studies, Dan looks at the fear that can be generated by potentially dangerous ideas and examines how powerful mass emotions can cloud judgment.',
    audioFile: '40 - Radical Thoughts (1950s CE).mp3'
  },
  {
    id: 39, number: '39', title: 'Death Throes of the Republic VI', subtitle: null,
    series: 'Death Throes of the Republic',
    description: 'In a massive finish to the fall of the Roman Republic, conspiracies, civil wars, beatniks of antiquity and a guy named Caesar figure prominently. Virtually everyone dies.',
    audioFile: '39 - Death Throes of the Republic VI (62-44 BCE).mp3'
  },
  {
    id: 38, number: '38', title: 'Death Throes of the Republic V', subtitle: null,
    series: 'Death Throes of the Republic',
    description: 'The last great generation of the Roman Republic emerges from the historical mists. The dynamic between Caesar, Cato, Cicero, Crassus and Pompey forms the axis around which the rest of this tale revolves.',
    audioFile: '38 - Death Throes of the Republic V (71-62 BCE).mp3'
  },
  {
    id: 37, number: '37', title: 'Death Throes of the Republic IV', subtitle: null,
    series: 'Death Throes of the Republic',
    description: 'Sulla returns to Rome to show the Republic what REAL political violence looks like. Civil war and deadly partisan payback will pave the way for reforms pushed at sword point.',
    audioFile: '37 - Death Throes of the Republic IV (86-78 BCE).mp3'
  },
  {
    id: 36, number: '36', title: 'Death Throes of the Republic III', subtitle: null,
    series: 'Death Throes of the Republic',
    description: 'Rome\'s political violence expands in intensity from riots and assassinations to outright war as the hyper-ambitious generals Marius and Sulla tear the Republic apart.',
    audioFile: '36 - Death Throes of the Republic III (91-86 BCE).mp3'
  },
  {
    id: 35, number: '35', title: 'Death Throes of the Republic II', subtitle: null,
    series: 'Death Throes of the Republic',
    description: 'Disaster threatens the Republic, but the cure might be worse than the disease. The story continues with ambition-addict Marius dominating the story and Plutarch dominating the sources.',
    audioFile: '35 - Death Throes of the Republic II (121-100 BCE).mp3'
  },
  {
    id: 34, number: '34', title: 'Death Throes of the Republic I', subtitle: null,
    series: 'Death Throes of the Republic',
    description: 'The wars which elevate Rome to superpower status also sow the seed for the downfall of its political system. Money, slaves, ambition, political stalemate and class warfare prove to be a toxic, bloody mix.',
    audioFile: '34 - Death Throes of the Republic I (149-121 BCE).mp3'
  },
  {
    id: 33, number: '33', title: 'Old School Toughness', subtitle: 'BLITZ',
    series: null,
    description: 'Does the toughness of peoples play any role in history? How can historians deal with such an amorphous human quality?',
    audioFile: '33 - Old School Toughness.mp3'
  },
  {
    id: 32, number: '32', title: 'Globalization Unto Death', subtitle: null,
    series: null,
    description: 'Ferdinand Magellan is the lead character in this episode about the collision between the Old and New worlds and what Dan calls "Globalization 1.0".',
    audioFile: '32 - Globalization Unto Death (1519-1522 CE).mp3'
  },
  {
    id: 31, number: '31', title: 'Suffer the Children', subtitle: 'BLITZ',
    series: null,
    description: 'Dan\'s exposure to the idea of "psychohistory" gets him thinking about how children were raised in the past. Could widespread child abuse in earlier eras explain some of history\'s brutality?',
    audioFile: '31 - Suffer the Children.mp3'
  },
  {
    id: 30, number: '30', title: 'Ghosts of the Ostfront IV', subtitle: null,
    series: 'Ghosts of the Ostfront',
    description: 'In the final episode of the horror story that is the Eastern Front the tale descends into unimaginable darkness as vengeance is called down on Germany.',
    audioFile: '30 - Ghosts of the Ostfront IV (1943-1945 CE).mp3'
  },
  {
    id: 29, number: '29', title: 'Ghosts of the Ostfront III', subtitle: null,
    series: 'Ghosts of the Ostfront',
    description: 'Dan looks at the situation in the U.S.S.R. during 1942 and early 1943, including the dreadful Battle of Stalingrad.',
    audioFile: '29 - Ghosts of the Ostfront III (1942-1943 CE).mp3'
  },
  {
    id: 28, number: '28', title: 'Ghosts of the Ostfront II', subtitle: null,
    series: 'Ghosts of the Ostfront',
    description: 'Dan looks at the attempt to take Moscow and the many compelling stories surrounding the momentous 1941 German offensive.',
    audioFile: '28 - Ghosts of the Ostfront II (1941-1942 CE).mp3'
  },
  {
    id: 27, number: '27', title: 'Ghosts of the Ostfront I', subtitle: null,
    series: 'Ghosts of the Ostfront',
    description: 'Dan gives an introduction to the conflict between the Germans and the Soviet Union and discusses the causes and opening moves of Operation Barbarossa.',
    audioFile: '27 - Ghosts of the Ostfront I (1940-1941 CE).mp3'
  },
  {
    id: 26, number: '26', title: 'Addicted to Bondage', subtitle: 'BLITZ',
    series: null,
    description: 'Is slavery a natural feature of human societies? Dan looks at this timeless, evil institution and wonders if we have made as much progress freeing ourselves from its influence as we think.',
    audioFile: '26 - Addicted to Bondage.mp3'
  },
  {
    id: 25, number: '25', title: 'The Dyer Outlook', subtitle: null,
    series: null,
    description: 'Dan discusses the past, present and future with influential Canadian historian, broadcaster and columnist Gwynne Dyer.',
    audioFile: '25 - Dyer Outlook.mp3'
  },
  {
    id: 24, number: '24', title: 'Classical Hanson', subtitle: null,
    series: null,
    description: 'Dan discusses history with famed historian, political commentator and classicist Victor Davis Hanson.',
    audioFile: '24 - Classical Hanson.mp3'
  },
  {
    id: 23, number: '23', title: 'Punic Nightmares III', subtitle: null,
    series: 'Punic Nightmares',
    description: 'In one of the great displays of resiliency in all history, the Romans refuse to buckle under murderous Carthaginian pressure. Instead they recover, defeat and destroy Carthage.',
    audioFile: '23 - Punic Nightmares III (216-146 BCE).mp3'
  },
  {
    id: 22, number: '22', title: 'Punic Nightmares II', subtitle: null,
    series: 'Punic Nightmares',
    description: 'Darkness, horror, war and carnage dominate Part 2 of the Punic War trilogy as Hannibal rampages across Italy and pushes Rome to the brink of doom.',
    audioFile: '22 - Punic Nightmares II (218-216 BCE).mp3'
  },
  {
    id: 21, number: '21', title: 'Punic Nightmares I', subtitle: null,
    series: 'Punic Nightmares',
    description: 'Was it geopolitics or simply bitter hatred that fueled the ancient bloodbaths known as "The Punic Wars"? Dan highlights the unimaginable things people experienced during this intense face-off.',
    audioFile: '21 - Punic Nightmares I (288-218 BCE).mp3'
  },
  {
    id: 20, number: '20', title: 'History Under the Influence', subtitle: 'BLITZ',
    series: null,
    description: 'This first "Blitz Edition" of the show looks at the hidden side of history, the impact of drugs and alcohol on past events. Dan has a whole list of historical figures he wants to drug test.',
    audioFile: '20 - History Under the Influence.mp3'
  },
  {
    id: 19, number: '19', title: 'Apache Tears', subtitle: null,
    series: null,
    description: 'A traumatized people who traumatized their neighbors, the Native American tribe known as Apache were among the last Indians to surrender to the U.S. Government.',
    audioFile: '19 - Apache Tears (1870s CE).mp3'
  },
  {
    id: 18, number: '18', title: 'A Fly on James Burke\'s Wall', subtitle: null,
    series: null,
    description: 'Dan discusses history with famed television host, author and science historian James Burke, the man the Washington Post called "one of the most intriguing minds in the Western world".',
    audioFile: '18 - A Fly on James Burkes Wall.mp3'
  },
  {
    id: 17, number: '17', title: 'Judgment at Nineveh', subtitle: null,
    series: null,
    description: 'Will our modern society ever decline and fall? Dan uses that idea as a backdrop for a look at the first great empire in history, the biblical-era Assyrians.',
    audioFile: '17 - Judgment at Nineveh (883-612 BCE).mp3'
  },
  {
    id: 16, number: '16', title: 'Nazi Tidbits', subtitle: null,
    series: null,
    description: 'What accounts for the fascination people still have with Adolf Hitler and the Nazis? Dan looks at some of the ideas of the German National Socialists.',
    audioFile: '16 - Nazi Tidbits.mp3'
  },
  {
    id: 15, number: '15', title: 'Desperate Times', subtitle: null,
    series: null,
    description: 'The tough economic climate after the First World War fostered the growth of radicalism around the world. Did it also create tougher people?',
    audioFile: '15 - Desperate Times (1928-1929 CE).mp3'
  },
  {
    id: 14, number: '14', title: 'The Macedonian Soap Opera', subtitle: null,
    series: null,
    description: 'When Alexander the Great bequeathed his empire "to the strongest" he set off a funeral contest that shook the world for decades. Murder, marriage, intrigue, and drama all feature prominently.',
    audioFile: '14 - Macedonian Soap Opera (323-309 BCE).mp3'
  },
  {
    id: 13, number: '13', title: 'Bubonic Nukes', subtitle: null,
    series: null,
    description: 'What would happen if half the population died in a short period of time? Dan looks at the Black Death and other plagues that created almost apocalyptic conditions.',
    audioFile: '13 - Bubonic Nukes (1340-1353 CE).mp3'
  },
  {
    id: 12, number: '12', title: 'Steppe Stories', subtitle: null,
    series: null,
    description: 'Blood-sucking Scythian warriors, tattooed ice mummies, Amazons, pot smoking head-hunters, scalp-taking, koumiss-drinking Mongols, Turks, Huns, and Aliens. What\'s not to like?',
    audioFile: '12 - Steppe Stories.mp3'
  },
  {
    id: 11, number: '11', title: 'Thoughts on Churchill', subtitle: null,
    series: null,
    description: 'Dan takes a look at various elements of the dramatic life and career of the great British leader.',
    audioFile: '11 - Thoughts on Churchill (1874-1965 CE).mp3'
  },
  {
    id: 10, number: '10', title: 'The What-Ifs of 1066', subtitle: null,
    series: null,
    description: 'How might history have been changed if the events of the momentous year 1066 had turned out differently? Dan examines Normans, Vikings, Saxons, Bastards, Conquerers, and Confessors.',
    audioFile: '10 - The What ifs of 1066 (1066 CE).mp3'
  },
  {
    id: 9, number: '9', title: 'Darkness Buries the Bronze Age', subtitle: null,
    series: null,
    description: 'What was the cause of the collapse of the Bronze Age? War? Famine? Natural disaster? Dan looks at all the potential villains.',
    audioFile: '09 - Darkness Buries the Bronze Age (1620s-1200s BCE).mp3'
  },
  {
    id: 8, number: '8', title: 'Scars of the Great War', subtitle: null,
    series: null,
    description: 'Dan looks at the shock and awe caused by the First World War and marvels at how connected we still are to the empire-shattering effects of the conflict.',
    audioFile: '08 - Scars of the Great War.mp3'
  },
  {
    id: 7, number: '7', title: 'The X-History Files', subtitle: null,
    series: null,
    description: 'Napoleon is supposed to have said that "History is a set of lies agreed upon". Dan looks at some of the alternative and pseudo history ideas that many people embrace.',
    audioFile: '07 - X-History Files.mp3'
  },
  {
    id: 6, number: '6', title: 'Shield of the West', subtitle: null,
    series: null,
    description: 'Spartans, Athenians, Persians, and references to Star Trek all make appearances in this look at the dramatic and extremely consequential Greek and Persian wars.',
    audioFile: '06 - Shield of the West (559-479 BCE).mp3'
  },
  {
    id: 5, number: '5', title: 'Meandering Through the Cold War', subtitle: null,
    series: null,
    description: 'Dan meanders through a conversation about causes and effects of the Cold War without ever talking much about the actual events of the conflict.',
    audioFile: '05 - Meandering Through the Cold War (1950s-1960s CE).mp3'
  },
  {
    id: 4, number: '4', title: 'Romancing the Tribes', subtitle: null,
    series: null,
    description: 'Native American chief Tecumseh and Gallic king Vercingetorix both tried to unify their tribal peoples to face overwhelming foes. Dan examines the romance of their lost causes.',
    audioFile: '04 - Romancing the Tribes (52 BCE-1813 CE).mp3'
  },
  {
    id: 3, number: '3', title: 'The Organization of Peace', subtitle: null,
    series: null,
    description: 'The early 20th century League of Nations stood for peace, cooperation, disarmament and international understanding. What happened?',
    audioFile: '03 - The Organization of Peace (1920-1946 CE).mp3'
  },
  {
    id: 2, number: '2', title: 'Guns and Horses', subtitle: null,
    series: null,
    description: 'The West is Mike Tyson and the East is Muhammad Ali in this episode as Dan mixes Art Bell with Hans Delbruck in this look at a possible reason for the military decline of the near East.',
    audioFile: '02 - Guns and Horses.mp3'
  },
  {
    id: 1, number: '1', title: 'Alexander versus Hitler', subtitle: null,
    series: null,
    description: 'Dan compares the way the modern world sees Adolf Hitler with the way history views Alexander the Great and wonders if the two men weren\'t more alike than different.',
    audioFile: '01 - Alexander vs Hitler.mp3'
  }
];

function getAudioUrl(episode) {
  const base = episode.altBase || IA_BASE;
  return base + encodeURIComponent(episode.audioFile);
}

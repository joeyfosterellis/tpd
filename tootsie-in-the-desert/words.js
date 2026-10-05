// The words. Every tile on the board is one of these.
//
//   e      the emoji for the word (GENERATED)
//   br     how the word is spelled out for Brahmi, in a simple sound scheme (GENERATED, approximate)
//   tpd    the word's own TPD: the chain of how it became this word (GENERATED from general
//          etymology; where the origin is uncertain, it says so)
//   lines  the sentences where the word joins the story, verbatim, each with its TPD (SOURCED)
//
// A word is a junction: the same word sits in sentences from different TPDs.

window.WORDS = {
  // ---------- 1453 ----------
  durian: { e: '🍈', word: 'durian', br: 'duriyan',
    tpd: ['Malay duri, "thorn"', 'durian, "the thorny one"', 'Latin Durio, the genus', 'The Purple Durian'],
    lines: [
      ['it is the finding of Durio Zibethinus by an Arabic trader that would forever change the course of history.', 'V1'],
      ["It's a South-East Asian fruit tasting nothing like you've ever tried.", 'V1'],
      ['"I must steal the Durian", Ahmed said to himself. "It is the only way."', 'loofah · rayon'],
      ['The durian was gone.', 'rayon'],
    ] },
  orangutan: { e: '🦧', word: 'orangutan', br: 'orangutan',
    tpd: ['Malay orang, "person"', 'Malay hutan, "forest"', 'orang hutan, "person of the forest"', 'orangutan'],
    lines: [['In 1453, on a large Indonesian island west of Java, a Sumatran orangutan witnessed the first introduction of Durian into the western palate.', 'V1']] },
  java: { e: '🌴', word: 'Java', br: 'yavadviip',
    tpd: ['Sanskrit Yavadvīpa, "barley island" (one reading, not certain)', 'Javanese Jawa', 'Java'],
    lines: [['on a large Indonesian island west of Java', 'V1']] },
  trader: { e: '⛵', word: 'trader', br: 'treDar',
    tpd: ['Middle Low German trade, "track, course"', 'English trade, a course of business', 'trader'],
    lines: [['the finding of Durio Zibethinus by an Arabic trader', 'V1']] },
  constantinople: { e: '🏰', word: 'Constantinople', br: 'konstantinopal',
    tpd: ['Greek Byzantion', 'Konstantinoupolis, "city of Constantine"', 'Greek eis tin polin, "to the city"', 'Istanbul'],
    lines: [['And although that year also marks the fall of Constantinople, the end of the hundred years war, and the introduction of Islam to the west', 'V1']] },
  moon: { e: '🌙', word: 'moon', br: 'muun',
    tpd: ['an old root for "measure"', 'Old English mōna', 'moon, the measure of months'],
    lines: [
      ['"Yousef saw eleven stars, one sun, and a moon in that vision, and they bowed to him as though he was their conductor."', 'May 2023'],
      ['"The Sun represented Jacob, his father and the Moon, his mother, Rachel,"', 'hydrant'],
    ] },

  // ---------- the plane ----------
  joey: { e: '🦘', word: 'Joey', br: 'joyii',
    tpd: ['Hebrew Yosef, "he will add"', 'Greek Iōsēph', 'Latin Joseph', 'Joey', 'and, separately, Australian joey, a young kangaroo'],
    lines: [
      ['"Joey Foster Ellis. Think Joey like a baby kangaroo, Foster like the child and Ellis like the island."', 'V1'],
      ['"Well, if you think of it, there is a type of innocence and fun in Joey; it\'s a baby kangaroo."', 'gomorrah'],
      ['"But your name means more. It derives from Joseph; it\'s quranic."', 'gomorrah'],
    ] },
  foster: { e: '👶', word: 'Foster', br: 'phostar',
    tpd: ['Old English fōstor, "food, nourishment"', 'fōstrian, "to nourish"', 'foster, the child who is fed'],
    lines: [['"Foster like the child"', 'V1']] },
  island: { e: '🏝️', word: 'island', br: 'aaylainD',
    tpd: ['Old English īegland, "water land"', 'ilond', 'an s added later from Latin insula, which it was never from', 'island'],
    lines: [
      ['"Ellis like the island."', 'V1'],
      ['In 1453, on a large Indonesian island west of Java', 'V1'],
    ] },
  negroni: { e: '🍸', word: 'negroni', br: 'negronii',
    tpd: ['a family name, Negroni', 'Count Camillo Negroni, Florence, by the usual story', 'negroni, the drink'],
    lines: [['The steward handed Joey his signature drink, equal parts gin, Campari, and sweet vermouth: a negroni.', 'V1']] },
  token: { e: '🔵', word: 'token', br: 'Tokan',
    tpd: ['Old English tācen, "sign, mark"', 'token, a thing that stands for something'],
    lines: [['dug deep into his right-side pocket and pulled out a blue plastic token. It was his 6-month AA chip', 'V1']] },
  aeroplane: { e: '✈️', word: 'aeroplane', br: 'eyaropleen',
    tpd: ['Greek aēr, "air"', 'Greek planos, "wandering"', 'French aéroplane', 'aeroplane'],
    lines: [['"I\'ll stick to the aroma of aeroplane food."', 'V1']] },

  // ---------- Gladys ----------
  gladys: { e: '👑', word: 'Gladys', br: 'glaiDis',
    tpd: ['Welsh Gwladus', 'linked to gwlad, "land, country"', 'Gladys'],
    lines: [
      ['"The name is Gladys," she said, "It\'s Welsh, meaning princess, but I\'m as American as a bologna sandwich... with mustard,"', 'V1'],
      ['She was Gladys Sinclair, and according to her, she was killed in a 1988 plane crash over the strait of Hormuz.', 'V1'],
    ] },
  sandwich: { e: '🥪', word: 'sandwich', br: 'sainDvich',
    tpd: ['Old English Sandwīc, "sandy harbour", a town in Kent', 'the Earl of Sandwich', 'sandwich, bread around something'],
    lines: [['"but I\'m as American as a bologna sandwich... with mustard,"', 'V1']] },
  chiffon: { e: '👗', word: 'chiffon', br: 'shiphon',
    tpd: ['French chiffe, "rag"', 'chiffon, a thin fabric'],
    lines: [["Joey saw Gladys's teal chiffon dress shimmer against the first-class seats of the Boeing Dreamliner.", 'V1']] },
  labneh: { e: '🥣', word: 'labneh', br: 'labnah',
    tpd: ['Arabic root l-b-n, "white"', 'laban, "milk"', 'labnah, strained yoghurt'],
    lines: [
      ['"You\'re labneh", Gladys replied.', 'V1'],
      ['"Endless possibilities of toppings, a blank canvas destined to be an individual," Gladys whispered again.', 'V1'],
    ] },
  rose: { e: '🌹', word: 'rose', br: 'roj',
    tpd: ['probably an old Iranian word', 'Greek rhodon', 'Latin rosa', 'rose'],
    lines: [
      ['"All you have to do is find the man that carries the desert rose, and he will be the first to help you."', 'V1'],
      ['Joey already tasted aftermaths of sweet rose and pomegranate tinged with salt.', 'khakis'],
    ] },

  // ---------- QUEER ----------
  quack: { e: '🦆', word: 'Quack', br: 'kvaik',
    tpd: ['the sound a duck makes', 'Dutch kwakzalver, "one who boasts of his salves"', 'quack, a loud fake'],
    lines: [['"Quack: Talk loudly and foolishly.', 'V1']] },
  uggle: { e: '👹', word: 'Uggle', br: 'agal',
    tpd: ['Old Norse uggr, "fear"', 'uggligr, "dreadful"', 'ugly', 'uggle'],
    lines: [['Uggle: A horrid ugly thing.', 'V1']] },
  extranean: { e: '👽', word: 'Extranean', br: 'ekstreeniyan',
    tpd: ['Latin extra, "outside"', 'extraneus, "from outside"', 'Old French estrange', 'strange, and extranean'],
    lines: [['Extranean: An outsider, stranger, one not belonging to a home.', 'V1']] },
  evangelista: { e: '💃', word: 'Evangelista', br: 'evaanjelistaa',
    tpd: ['Greek euangelion, "good news"', 'Latin evangelista, "one who brings the good news"', 'Evangelista'],
    lines: [['Evangelista: A person who worships and glorifies the 90s supermodel in an almost religious fashion', 'V1']] },
  raisonneur: { e: '🎭', word: 'Raisonneur', br: 'rejonar',
    tpd: ['Latin ratio, "reckoning"', 'French raison, "reason"', 'raisonneur, "the one who reasons"'],
    lines: [['Raisonneur: A character in a play, novel, or the like who voices the central theme, philosophy, or point of view of the work."', 'V1']] },
  shukri: { e: '🙏', word: 'Sukree', br: 'shukrii',
    tpd: ['Arabic root sh-k-r, "to thank"', 'shukr, "thanks"', 'Shukri, "grateful"', 'Thai Sukree'],
    lines: [['His name Sukree was a Thai version of Shukri, meaning "grateful" in Arabic', 'V1']] },

  // ---------- the barbershop ----------
  barber: { e: '✂️', word: 'barber', br: 'baarbar',
    tpd: ['Latin barba, "beard"', 'Old French barbeor', 'barber, the one who cuts beards'],
    lines: [['Me a foreign student living in Doha, deciphering Islamic artefacts, and him a barber fashioning marks of masculinity', 'May 2023']] },
  beard: { e: '🧔', word: 'beard', br: 'biyarD',
    tpd: ['Old English beard', 'beard'],
    lines: [
      ['Ahmed believed that the beards he shaved contained secret geometric codes that could unlock a queer jihad that would one day save us.', 'May 2023'],
      ['"Blonde hair, white skin, a coarse Arab beard."', 'May 2023'],
    ] },
  khakis: { e: '👖', word: 'khakis', br: 'khaakii',
    tpd: ['Persian khāk, "dust"', 'Urdu khākī, "dust-coloured"', 'British army uniform', 'khakis, work trousers'],
    lines: [['Watching each other grow, I unzipped from my stonewashed jeans and him from his blue worker khakis.', 'May 2023']] },
  habibi: { e: '❤️', word: 'Habibi', br: 'habiibii',
    tpd: ['Arabic root ḥ-b-b, "love"', 'ḥabīb, "beloved"', 'ḥabībī, "my beloved"'],
    lines: [
      ["Habibi, a term of endearment used casually between friends but also between lovers, can mean 'beloved,' 'my love,' or have no English translation", 'May 2023'],
      ['"Yes, Habibi, but that doesn\'t mean we don\'t decide how they shape us."', 'May 2023 · khakis'],
    ] },
  argan: { e: '🫒', word: 'argan', br: 'aargan',
    tpd: ['Tashelhit (Berber) argan, the tree', 'argan oil'],
    lines: [
      ['Ahmed left the room smelling of argan oil and sweat that the aircon soon extinguished.', 'May 2023'],
      ['He scrubbed his recent sin away with loofa and then moisturised with the argan oil they used for lube.', 'rayon'],
    ] },
  taxi: { e: '🚕', word: 'taxi', br: 'Taiksii',
    tpd: ['Greek taxis, "arrangement, charge"', 'German Taxameter, "fare meter"', 'taximeter cab', 'taxi'],
    lines: [['That was the night we met outside the taxi. You introduced yourself as Yousef.', 'khakis · coat']] },

  // ---------- Gomorrah ----------
  adhan: { e: '👂', word: 'adhan', br: 'adhaan',
    tpd: ['Arabic root ʾ-dh-n, "ear, to hear"', 'adhān, "announcement"', 'the call to prayer'],
    lines: [['Outside the apartment, the call to prayer, the adhan, had begun. Adhan in Arabic means to listen', 'May 2023']] },
  musalla: { e: '🕌', word: 'musalla', br: 'musallaa',
    tpd: ['Arabic root ṣ-l-w, "to pray"', 'muṣallā, "place of prayer"'],
    lines: [['Intrigued by the rituals I had seen my classmates practice in the musalla just outside my door', 'May 2023']] },
  mirror: { e: '🪞', word: 'mirror', br: 'mirar',
    tpd: ['Latin mirari, "to wonder at"', 'Old French mireor', 'mirror'],
    lines: [
      ['A modern re-enactment encapsulated in the full-size mirror of my bedside wardrobe; two skins of sodomites contrasting one another.', 'May 2023'],
      ['the pinkness of the Qatari sundown burning against the mirrored glass windows of my Lavender Village apartment dorm room.', 'May 2023'],
    ] },
  daffodil: { e: '🌼', word: 'daffodil', br: 'DaiphoDil',
    tpd: ['Greek asphodelos', 'Latin asphodelus', 'affodill', 'a d added', 'daffodil'],
    lines: [["Ahmed's a daffodil-brown, and mine the shade of soft cotton.", 'May 2023']] },
  cotton: { e: '☁️', word: 'cotton', br: 'kaTan',
    tpd: ['Arabic quṭn', 'Spanish algodón', 'French coton', 'cotton'],
    lines: [["Ahmed's a daffodil-brown, and mine the shade of soft cotton.", 'May 2023']] },
  gomorrah: { e: '🔥', word: 'Gomorrah', br: 'gomoraa',
    tpd: ['Hebrew ʿĂmōrāh', 'Greek Gomorra', 'Gomorrah'],
    lines: [['A Gomorrah in Al-Gharafa.', 'May 2023']] },

  // ---------- desalination ----------
  loofah: { e: '🧽', word: 'loofah', br: 'luuphaa',
    tpd: ['Egyptian Arabic lūfa, the plant', 'loofah, the sponge'],
    lines: [['Standing there, looking at Ahmed as he washed his body, I saw an enormous strength behind each pass of the loofah.', 'May 2023']] },
  desalination: { e: '💧', word: 'desalination', br: 'Diseliineshan',
    tpd: ['Latin sal, "salt"', 'salinus, "salty"', 'de-, "away"', 'desalination, salt taken out of water'],
    lines: [['I felt deep down that they were likely tears of emotion and disgust rather than just drops of desalination.', 'May 2023']] },
  shower: { e: '🚿', word: 'shower', br: 'shaavar',
    tpd: ['Old English scūr, "a fall of rain"', 'shower'],
    lines: [
      ['"Habibi, I need to clean myself. Let me take a shower, and when done, you\'ll hear the story of your name. I promise."', 'May 2023'],
      ['Water was in his eyes, and I questioned if it actually came from the shower.', 'argan'],
    ] },
  rayon: { e: '🟪', word: 'rayon', br: 'reyon',
    tpd: ['French rayon, "ray" (likely)', 'a trade name chosen in 1924 for artificial silk', 'rayon'],
    lines: [
      ['It was still wet, turning a patch of purple rayon into a dark shadow of itself.', 'May 2023'],
      ['The stain was still wet, turning a patch of polyester into a dark shadow of itself.', 'hydrant'],
    ] },
  pineapple: { e: '🍍', word: 'pineapple', br: 'paaynaipal',
    tpd: ['pine apple, "pine cone"', 'given to the tropical fruit because it looked like one', 'pineapple'],
    lines: [
      ['Joey already tasted aftermaths of sweet rose and pineapple tinged with salt.', 'hydrant'],
      ['I tasted his saltiness with an aftermath of sweet rose and pineapple.', 'argan'],
    ] },

  // ---------- the dream ----------
  star: { e: '⭐', word: 'star', br: 'sTaar',
    tpd: ['Old English steorra', 'star'],
    lines: [
      ['"Yousef saw eleven stars, one sun, and a moon in that vision"', 'May 2023'],
      ['"The eleven stars represented the ten brothers and one sister of Yousef."', 'gomorrah'],
    ] },
  sun: { e: '☀️', word: 'sun', br: 'san',
    tpd: ['Old English sunne', 'sun'],
    lines: [['"The Sun represented Jacob, his father and the Moon, his mother, Rachel,"', 'hydrant']] },
  symphony: { e: '🎼', word: 'symphony', br: 'simphanii',
    tpd: ['Greek syn, "together"', 'phōnē, "sound"', 'symphōnia, "sounding together"', 'symphony'],
    lines: [['"A symphony?" I mused. My imagination was on full display; I envisioned Yousef in a suit of darkness with a baton, orchestrating light aeons ago.', 'May 2023']] },
  utensils: { e: '🥄', word: 'utensils', br: 'yuuTensil',
    tpd: ['Latin uti, "to use"', 'utensilia, "things for use"', 'utensils'],
    lines: [["that maybe its place on the little dipper's handle was just a speck in a universal kitchen of utensils.", 'May 2023']] },
  polaris: { e: '🐻', word: 'Polaris', br: 'polaaris',
    tpd: ['Greek polos, "pivot"', 'Latin polaris, "of the pole"', 'stella polaris, the pole star', 'Polaris, at the tail of the little bear'],
    lines: [['Did they shine more than Polaris? I had learned about the northern star as a cub scout', 'May 2023']] },

  // ---------- Chinese whispers ----------
  frog: { e: '🐸', word: 'frog', br: 'phrog',
    tpd: ['Old English frogga', 'frog'],
    lines: [["The frog had turned not into a prince but a pink flamingo who sang 'Yankee Doodle' instead of ribbits.", 'May 2023']] },
  flamingo: { e: '🦩', word: 'flamingo', br: 'phlemingo',
    tpd: ['Latin flamma, "flame"', 'Provençal flamenc', 'Portuguese flamengo', 'flamingo, the flame-coloured bird'],
    lines: [["The frog had turned not into a prince but a pink flamingo that sang 'Yankee Doodle' instead of ribbits.", 'khakis']] },
  bonfire: { e: '🔥', word: 'bonfire', br: 'bonphaayar',
    tpd: ['bone fire, a fire of bones', 'bonfire'],
    lines: [['I thought about Chinese whispers, my childhood game. Sitting around a bonfire, one person starts with a sentence and then whispers it to another.', 'May 2023']] },
  yankee: { e: '🎺', word: 'Yankee Doodle', br: 'yenkii DuuDal',
    tpd: ['probably Dutch Janke, "little Jan"', 'a nickname for the Dutch, then for New Englanders', 'Yankee', 'a song sung to mock them, then sung back'],
    lines: [["a pink flamingo who sang 'Yankee Doodle' instead of ribbits.", 'May 2023']] },
  quran: { e: '📖', word: 'Quran', br: 'kuraan',
    tpd: ['Arabic root q-r-ʾ, "to read aloud"', 'qurʾān, "recitation"'],
    lines: [
      ['"Habibi, do you know that \'Quran\' in Arabic literally means \'recitation\'?"', 'May 2023'],
      ['"Habibi, do you know that \'Quran\' in Arabic literally means \'pure translation\'?"', 'khakis'],
    ] },
  prince: { e: '🤴', word: 'prince', br: 'prins',
    tpd: ['Latin primus, "first"', 'princeps, "the one who takes first"', 'prince'],
    lines: [['The frog had turned not into a prince but a pink flamingo', 'May 2023']] },

  // ---------- the coat ----------
  red: { e: '🟥', word: 'red', br: 'reD',
    tpd: ['Old English rēad', 'red'],
    lines: [['"Pinpricks of red, flashes of orange, waves of yellow, streaks of green, blue and violet."', 'May 2023']] },
  orange: { e: '🟧', word: 'orange', br: 'orenj',
    tpd: ['Sanskrit nāraṅga', 'Persian nārang', 'Arabic nāranj', 'Spanish naranja', 'French orange', 'a norange becomes an orange'],
    lines: [
      ['"Pinpricks of red, flashes of orange, waves of yellow, streaks of green, blue and violet."', 'May 2023'],
      ['"Pinpricks of yellow, flashes of pink, waves of blue, streaks of orange..."', 'khakis'],
    ] },
  yellow: { e: '🟨', word: 'yellow', br: 'yelo',
    tpd: ['Old English geolu', 'yellow'],
    lines: [['"Close your eyes, Habibi. What do you see? Pinpricks of yellow, flashes of pink, waves of blue, streaks of orange..."', 'khakis']] },
  green: { e: '🟩', word: 'green', br: 'griin',
    tpd: ['Old English grēne, kin to "grow"', 'green'],
    lines: [['"streaks of green, blue and violet. These colours on the backs of your eyelids, you catch something"', 'May 2023']] },
  blue: { e: '🟦', word: 'blue', br: 'bluu',
    tpd: ['Frankish blao', 'Old French bleu', 'blue'],
    lines: [
      ['I think Ahmed looked to see if he could catch the blueness of my eyes, but he saw nothing. It was black.', 'May 2023'],
      ['no different from the Yves Klein blue eyeshadow the Qatari woman applied alongside their beige concealer', 'May 2023'],
    ] },
  violet: { e: '🟪', word: 'violet', br: 'vaayalet',
    tpd: ['Latin viola, the flower', 'Old French violette', 'violet, the colour'],
    lines: [['"streaks of green, blue and violet. These colours on the backs of your eyelids"', 'May 2023']] },

  // ---------- the knock ----------
  cigarette: { e: '🚬', word: 'cigarette', br: 'sigreT',
    tpd: ['probably Mayan sik\'ar, "to smoke"', 'Spanish cigarro', 'French cigare', 'cigarette, "a little cigar"'],
    lines: [["One might say we did it because it's like sneaking a cigarette behind your mother's back, knowing the consequences if she were to smell you", 'May 2023']] },
  movie: { e: '🎬', word: 'movie', br: 'muuvii',
    tpd: ['Latin movere, "to move"', 'moving picture', 'movie'],
    lines: [['"Who are you?" the taller one asked Ahmed. "A friend. Watching a movie."', 'May 2023']] },
  guard: { e: '💂', word: 'guard', br: 'gaarD',
    tpd: ['Frankish wardōn, "to watch"', 'Old French garder', 'guard, and also ward'],
    lines: [['The light flicked on, showing two guards. South Asian, likely Nepali.', 'May 2023']] },
  toilet: { e: '🧻', word: 'toilet paper', br: 'Toyleta pepar',
    tpd: ['French toile, "cloth"', 'toilette, "a little cloth" for dressing', 'the room for it', 'toilet'],
    lines: [['I rolled the condom and its wrapper in toilet paper and flushed it, the sound of the swirling water echoing in my ears as it carried away the last evidence of our encounter.', 'May 2023']] },
  lock: { e: '🔒', word: 'lock', br: 'lok',
    tpd: ['Old English loc, "bolt, enclosure"', 'lock'],
    lines: [['As I locked the door behind me, Ahmed sat cross-legged on the grey-carpeted floor of my University College London dorm room', 'May 2023']] },
  doha: { e: '🌃', word: 'Doha', br: 'dohaa',
    tpd: ['Arabic dawḥa, "a great tree" (the usual reading)', 'ad-Dawḥa', 'Doha'],
    lines: [
      ['Doha itself was a city of deceit.', 'May 2023'],
      ['He then would leave and head back out into the Doha fever, a heat characterised by punches to the chest and a rapidly evaporating sweat.', 'May 2023'],
    ] },

  // ---------- Qada Salah ----------
  ahmed: { e: '🤲', word: 'Ahmed', br: 'ahmad',
    tpd: ['Arabic root ḥ-m-d, "praise"', 'aḥmad, "most praiseworthy"', 'Ahmed'],
    lines: [
      ['He told me what his label, Ahmed, had meant before, "an Arabic boy\'s name signifying one who deeply praised or constantly thanked God."', 'May 2023'],
      ['Ahmed never told me his full name, for his name would reveal who his Father and family were in the Arabic naming convention.', 'desalination'],
    ] },
  wudu: { e: '💧', word: 'wudu', br: 'vuDuu',
    tpd: ['Arabic root w-ḍ-ʾ, "to be clean, to shine"', 'wuḍūʾ, ablution'],
    lines: [['Ahmed began by imparting to me the knowledge of wudu, the ritual ablution that precedes the act of prayer.', 'May 2023']] },
  fatiha: { e: '📖', word: 'Al-Fatiha', br: 'phaatihaa',
    tpd: ['Arabic root f-t-ḥ, "to open"', 'al-fātiḥa, "the opening"'],
    lines: [['He told me when to recite the opening chapter of the Quran, Al-Fatiha, and when to recite other verses. Two were chosen from the beginning of Surah Yousef.', 'May 2023']] },
  salah: { e: '🧎', word: 'Salah', br: 'salaah',
    tpd: ['Arabic root ṣ-l-w', 'ṣalāh, "prayer"', 'qaḍāʾ, "fulfilment"', 'Qada Salah'],
    lines: [["'Qada' in Arabic means 'to fulfil,' and 'Salah' means 'prayer.' So, 'Qada Salah' is essentially fulfilling the missed prayer.", 'May 2023']] },
  maghrib: { e: '🌙', word: 'Maghrib', br: 'magrib',
    tpd: ['Arabic root gh-r-b, "to set, to go west"', 'maghrib, "sunset, the west"', 'the sunset prayer'],
    lines: [['"I missed the Maghrib earlier because we were together. So, I\'ll perform a Qada Salah, a makeup prayer for the one I missed."', 'May 2023']] },

  // ---------- the unknown ----------
  lavender: { e: '💜', word: 'Lavender', br: 'laivenDar',
    tpd: ['Medieval Latin lavendula', 'perhaps from lividus, "bluish", or lavare, "to wash"', 'lavender', 'Lavender Village'],
    lines: [['The night had started with the pinkness of the Qatari sundown burning against the mirrored glass windows of my Lavender Village apartment dorm room.', 'May 2023']] },
  sundown: { e: '🌅', word: 'sundown', br: 'sanDaaun',
    tpd: ['sun', 'down', 'sundown'],
    lines: [['The night had started with the pinkness of the Qatari sundown', 'May 2023']] },
  city: { e: '🏙️', word: 'city', br: 'siTii',
    tpd: ['Latin civis, "citizen"', 'civitas, "citizenship"', 'Old French cite', 'city'],
    lines: [['It was a skeleton of a city, absent of people who chose air-conditioned prisons over Bedouin tents.', 'May 2023']] },
  unknown: { e: '🌫️', word: 'unknown', br: 'annon',
    tpd: ['Old English un-', 'cnāwan, "to know"', 'unknown'],
    lines: [
      ['"I just clump everything the world throws at me into a pile, especially the stuff I don\'t understand, and then label that pile the \'unknown\' and rename it \'God.\'"', 'May 2023'],
      ['"How do you have such love for the unknown?"', 'lavender'],
    ] },
  truth: { e: '🔑', word: 'truth', br: 'Truth',
    tpd: ['Old English trēowþ, "faithfulness"', 'kin to tree: firm as a tree', 'truth'],
    lines: [
      ['"What makes the story of your name special is that it\'s a story about truth."', 'May 2023'],
      ['Truth to whom? Ourselves?? Others??? True to the world????', 'May 2023'],
    ] },

  // ---------- Tootsie ----------
  tootsie: { e: '💃', word: 'Tootsie', br: 'Tuutsii',
    tpd: ['toots, an American pet name', 'tootsie', 'Tootsie, the 1982 film, a man in drag', 'Tootsie in the Desert'],
    lines: [['I later coined it "Tootsie in the Desert," a drag queen forever shifting in the dunes, signifying our ever-changing identities.', 'May 2023']] },
  desert: { e: '🏜️', word: 'desert', br: 'Dejart',
    tpd: ['Latin deserere, "to abandon"', 'desertum, "a place left behind"', 'desert'],
    lines: [['Why "Tootsie in the Desert"? Because the games are just dressed up in drag, hiding for a brief moment the truth that lies beneath it.', 'desalination']] },
  drag: { e: '👠', word: 'drag', br: 'Draig',
    tpd: ['theatre slang, 1800s, for skirts that drag (the usual guess; the origin is not certain)', 'drag'],
    lines: [['Because the games are just dressed up in drag, hiding for a brief moment the truth that lies beneath it.', 'desalination']] },
  makeup: { e: '💄', word: 'makeup', br: 'mekap',
    tpd: ['make', 'up', 'makeup, how a thing is put together', 'then what is put on a face'],
    lines: [
      ['It was all makeup to Ahmed and me, no different from the Yves Klein blue eyeshadow the Qatari woman applied', 'May 2023'],
      ['"I\'ll perform a Qada Salah, a makeup prayer for the one I missed."', 'May 2023'],
    ] },
  queen: { e: '👑', word: 'queen', br: 'kviin',
    tpd: ['Old English cwēn, "woman, wife"', 'queen'],
    lines: [
      ['a drag queen forever shifting in the dunes', 'May 2023'],
      ['But now he knew his palate was only for kebabs—an unmitigated kebab queen.', 'hydrant'],
    ] },
  concealer: { e: '💅', word: 'concealer', br: 'kansiilar',
    tpd: ['Latin celare, "to hide"', 'concelare, "to hide completely"', 'conceal', 'concealer'],
    lines: [['the Yves Klein blue eyeshadow the Qatari woman applied alongside their beige concealer, hiding more than just blemishes framed into a face bordered with a black abaya.', 'May 2023']] },
};

// Brahmi, from the simple sound scheme in `br`.
window.toBrahmi = (function () {
  const C = {
    kh: 0x11014, gh: 0x11016, ch: 0x11019, jh: 0x1101B, Th: 0x1101E, Dh: 0x11020, th: 0x11023, dh: 0x11025,
    ph: 0x11028, bh: 0x1102A, sh: 0x11030,
    k: 0x11013, g: 0x11015, c: 0x11018, j: 0x1101A, T: 0x1101D, D: 0x1101F, N: 0x11021, t: 0x11022,
    d: 0x11024, n: 0x11026, p: 0x11027, b: 0x11029, m: 0x1102B, y: 0x1102C, r: 0x1102D, l: 0x1102E,
    v: 0x1102F, s: 0x11032, h: 0x11033,
  };
  const V = { // [independent, sign]
    aa: [0x11006, 0x11038], ii: [0x11008, 0x1103B], uu: [0x1100A, 0x1103D], ai: [0x11010, 0x11043],
    au: [0x11012, 0x11045], ee: [0x1100F, 0x11042], a: [0x11005, null], i: [0x11007, 0x1103A],
    u: [0x11009, 0x1103C], e: [0x1100F, 0x11042], o: [0x11011, 0x11044],
  };
  const VIRAMA = 0x11046;
  const ck = Object.keys(C).sort((a, b) => b.length - a.length);
  const vk = Object.keys(V).sort((a, b) => b.length - a.length);
  const at = (s, i, keys) => keys.find(k => s.startsWith(k, i));
  return function (src) {
    return src.split(' ').map(w => {
      let out = '', i = 0;
      while (i < w.length) {
        const c = at(w, i, ck);
        if (c) {
          out += String.fromCodePoint(C[c]); i += c.length;
          const v = at(w, i, vk);
          if (v) { if (V[v][1]) out += String.fromCodePoint(V[v][1]); i += v.length; }
          else out += String.fromCodePoint(VIRAMA);
          continue;
        }
        const v = at(w, i, vk);
        if (v) { out += String.fromCodePoint(V[v][0]); i += v.length; continue; }
        i++;
      }
      return out;
    }).join(' ');
  };
})();

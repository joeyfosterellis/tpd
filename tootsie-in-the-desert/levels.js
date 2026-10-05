// Tootsie in the Desert: the fourteen nights.
// Every passage below is SOURCED verbatim from a TPD; `src` names the TPD.
// All versions are one story: where TPDs disagree, every version is kept.
// Game mechanics, tile choices and level order are GENERATED (see MANIFEST.md).

window.NIGHTS = [
{
  key: 'prologue', label: 'Prologue', draft: '1453', icon: '🍈',
  title: 'The Durian',
  tiles: ['durian', 'orangutan', 'java', 'trader', 'constantinople', 'moon'],
  goals: [['durian', 12]], moves: 20,
  hint: 'Swap two neighbouring tiles to line up three or more of a kind.',
  intro: { src: 'V1 · prologue', text:
`In 1453, on a large Indonesian island west of Java, a Sumatran orangutan witnessed the first introduction of Durian into the western palate. And although that year also marks the fall of Constantinople, the end of the hundred years war, and the introduction of Islam to the west, it is the finding of Durio Zibethinus by an Arabic trader that would forever change the course of history.` },
  name: {
    word: 'The Purple Durian', rebus: ['🍈'],
    meaning: `"Because when you eat Durian, you eat a bit of personal history. It's like you have to base its flavour off of everything you've ever eaten, and it ends up being a true reflection of self, a flashback of identity."`,
    src: 'V1 · chapter 1',
  },
  versions: [
    { label: 'How it smells', items: [
      ['"Some think it smells like fermented used tampons and tastes like raw onion soup."', 'V1'],
      ['"Well, to me, Durian smells like a spritz of unpasteurised hard cider and a powerful shot of apple brandy."', 'V1'],
    ]},
    { label: 'What the book is called', items: [
      ['"Working Titles: Tootsie in the Desert/The Purple Durian"', 'V1 · synopsis'],
    ]},
  ],
},
{
  key: 'faith', label: 'Night 1', draft: 'V1', icon: '✈️',
  title: 'Absolute Faith',
  tiles: ['joey', 'foster', 'island', 'negroni', 'token', 'aeroplane'],
  goals: [['joey', 8], ['foster', 8], ['island', 8]], moves: 26,
  hint: 'Spell his name in emoji: kangaroo, child, island.',
  intro: { src: 'V1 · chapter 1', text:
`Growing up in limbo between a church and a cemetery, Joey had seen apparitions since a kid and was not surprised when the person flying next to him had died thirty years prior. She was Gladys Sinclair, and according to her, she was killed in a 1988 plane crash over the strait of Hormuz.

The steward handed Joey his signature drink, equal parts gin, Campari, and sweet vermouth: a negroni.

Joey tucked his fancy sweater into his tight tan corduroys, dug deep into his right-side pocket and pulled out a blue plastic token. It was his 6-month AA chip, one he still held on to, reminding him of what's possible even though his sobriety ended years ago.` },
  name: {
    word: 'Joey Foster Ellis', rebus: ['🦘', '👶', '🏝️'],
    meaning: `"My name is Joey," he replied, being a bit cautious of what he was getting himself into. "Joey Foster Ellis. Think Joey like a baby kangaroo, Foster like the child and Ellis like the island."`,
    src: 'V1 · chapter 1',
  },
  versions: [
    { label: 'What "Joey" means', items: [
      [`"Well, if you think of it, there is a type of innocence and fun in Joey; it's a baby kangaroo. Something playful, something I've always tried to channel."`, 'gomorrah'],
      [`"But your name means more. It derives from Joseph; it's quranic."`, 'gomorrah'],
    ]},
    { label: 'Owning the name', items: [
      ['"I had yet to feel ownership of the ordained title of Joseph or what its Arabic incarnation implied."', 'desalination'],
      ['"having yet to grasp the title of Joey or the essence of its Arabic translation."', 'May 2023'],
    ]},
  ],
},
{
  key: 'gladys', label: 'Night 2', draft: 'V1', icon: '👻',
  title: 'Gladys',
  tiles: ['gladys', 'sandwich', 'chiffon', 'negroni', 'labneh', 'rose'],
  goals: [['gladys', 8]], over: { kind: 'ghost', count: 12 }, moves: 26,
  hint: 'Ghosts haunt the squares. Make a match on a haunted square to let it go.',
  intro: { src: 'V1 · chapter 1', text:
`As her bluish translucent form softly took shape, Joey saw Gladys's teal chiffon dress shimmer against the first-class seats of the Boeing Dreamliner.

"To be honest, Gladys, I'm worried about you. Ghosts never appear to me without reason, and they always want something and won't leave me alone until it's done."

"Usually, what prevents people from moving on is either unfinished business or a sin committed one still hasn't given penance for."

"Or both", Gladys said.` },
  name: {
    word: 'Gladys', rebus: ['👑', '🥪'],
    meaning: `"The name is Gladys," she said, "It's Welsh, meaning princess, but I'm as American as a bologna sandwich... with mustard," she added.`,
    src: 'V1 · chapter 1',
  },
  versions: [
    { label: 'Her clue', items: [
      ['"All you have to do is find the man that carries the desert rose, and he will be the first to help you."', 'V1'],
    ]},
    { label: 'Her name for him', items: [
      [`"You're labneh," Gladys replied. ... "plain white yoghurt." ... "Endless possibilities of toppings, a blank canvas destined to be an individual."`, 'V1'],
    ]},
    { label: 'Where she turns up again', items: [
      ['"Joey ignored Gladys, who had just arrived; she was resting in a wooden chair one meter from their bed at Casa de Colon, the accent over the o missing."', 'loofah'],
      [`"Gladys, Joey's companion, will help make sense of it all and be there for his darkest moments."`, 'V1 · synopsis'],
    ]},
  ],
},
{
  key: 'queer', label: 'Night 3', draft: 'V1', icon: '🦆',
  title: 'The Queer Jihad',
  tiles: ['quack', 'uggle', 'extranean', 'evangelista', 'raisonneur', 'shukri'],
  goals: [['quack', 5], ['uggle', 5], ['extranean', 5], ['evangelista', 5], ['raisonneur', 5]], moves: 30,
  hint: 'Collect every letter of QUEER.',
  intro: { src: 'V1 · chapter 1', text:
`For about nine months prior, after a one-night stand in Bangkok, his partner of that fuck, Sukree, had approached him with a proposition, "Come work for the Queer Jihad in Qatar". Sukree was a five-foot-four Thai Muslim bottom and had supposedly been scoping him out for the job.

"The queer what?" Joey asked.

"The QUEER Jihad," Sukree said again. "The QUEER is an acronym."

"Standing for what?"

"Quack, Uggle, Evangelista, Extranean, and Raisonneur. They're all characteristics that make an exemplary member of the jihad, and you need them all."` },
  name: {
    word: 'QUEER', rebus: ['🦆', '👹', '👽', '💃', '🎭'],
    meaning: `Quack: Talk loudly and foolishly. Uggle: A horrid ugly thing. Extranean: An outsider, stranger, one not belonging to a home. Evangelista: A person who worships and glorifies the 90s supermodel in an almost religious fashion. Raisonneur: A character in a play, novel, or the like who voices the central theme, philosophy, or point of view of the work.`,
    src: 'V1 · chapter 1',
  },
  versions: [
    { label: 'Sukree', items: [
      [`"His name Sukree was a Thai version of Shukri, meaning "grateful" in Arabic."`, 'V1'],
    ]},
    { label: 'Who believed in the queer jihad', items: [
      [`"He liked to believe that the beards Ahmed carved contained secret geometric codes that could unlock a queer jihad that would one day save them."`, 'khakis'],
      [`"Ahmed believed that the beards he shaved contained secret geometric codes that could unlock a queer jihad that would one day save us."`, 'flamingo · mirror · May 2023'],
    ]},
  ],
},
{
  key: 'khakis', label: 'Night 4', draft: 'khakis', icon: '✂️',
  title: 'The Barbershop',
  tiles: ['barber', 'beard', 'khakis', 'habibi', 'argan', 'taxi'],
  goals: [['habibi', 10], ['barber', 8], ['beard', 8]], moves: 26,
  hint: 'Match four in a line to make a Habibi tile. It clears its whole row or column.',
  intro: { src: 'May 2023', text:
`An hour earlier, we led fiercely different lives.

Me a foreign student living in Doha, deciphering Islamic artefacts, and him a barber fashioning marks of masculinity, hiding whatever effeminate traits one was scared to expose.

Although we first met in his barbershop, only in my dorm room could an emotion like this be allowed to live.

Watching each other grow, I unzipped from my stonewashed jeans and him from his blue worker khakis.` },
  name: {
    word: 'Habibi', rebus: ['❤️'],
    meaning: `"Habibi, a term of endearment used casually between friends but also between lovers, can mean 'beloved,' 'my love,' or have no English translation, for its meaning constantly changes in your context."`,
    src: 'flamingo · mirror · May 2023',
  },
  versions: [
    { label: 'Where Ahmed is from', items: [
      ['"a young, educated, mid-twenties Syrian migrant"', 'khakis · hydrant · coat · polaris · habibi · lavender · musalla · argan · gomorrah · loofah · rayon'],
      ['"a young, educated, mid-twenties Syrian migrant from Damascus"', 'May 2023'],
      ['"a young, educated, mid-twenties Lebanese migrant from Beirut"', 'desalination · flamingo · mirror'],
    ]},
    { label: 'How they met', items: [
      ['"Although we first met in his barbershop"', 'flamingo · mirror · May 2023'],
      [`"That was the night we met outside the taxi. You introduced yourself as Yousef. Your shirt was bloody, but you looked super cute."`, 'khakis · coat'],
    ]},
    { label: 'When', items: [
      ['"I asked on an evening in November of 2013"', 'desalination'],
      ['"I asked on a random November evening in 2013"', 'flamingo · mirror'],
      ['"I asked on a random August evening soon after we had just met"', 'May 2023'],
    ]},
  ],
},
{
  key: 'gomorrah', label: 'Night 5', draft: 'gomorrah', icon: '🔥',
  title: 'A Gomorrah in Al-Gharafa',
  tiles: ['adhan', 'musalla', 'mirror', 'daffodil', 'cotton', 'gomorrah'],
  goals: [['adhan', 10], ['daffodil', 8], ['cotton', 8]], moves: 26,
  hint: 'Daffodil-brown and soft cotton. Listen.',
  intro: { src: 'khakis', text:
`Watching each other grow, they unzipped from their stonewashed jeans and stood there in their off-white undies. Joey's briefs were a tight-fit, Ahmed's hung loosely around his groin, where the shadow of his package gradually became a mound in a sea of tattered white cloth. Joey's five-nine stature looked meagre against Ahmed's six-foot frame as he leaned upward to kiss his chapped lips, a result of the Qatari sunburn that manifested a reddish glow across both their faces. But Ahmed withdrew from something so intimate, a common occurrence of Middle Eastern men who didn't identify with western labels—making Joey feel rejected.

Outside the apartment, the call to prayer, the adhan, had begun. Adhan in Arabic means to listen; they listened to their naked bodies rub against each other as the people outside hearkened to God. A Gomorrah in Al-Gharafa. A modern re-enactment encapsulated in the full-size mirror of Joey's bedside wardrobe; two skins of sodomites contrasting one another. Ahmed's a daffodil-brown, and Joey's the shade of soft cotton. A classic composition to the ethnic controversy now happening.

Ahmed laid flat while the canyon of Joey's ass straddled the eleven-inch cock above his groin, teasing his opening. Joey spit into his hands, reached behind, and grabbed it. Lubing it for insertion, he slid Ahmed's dick deep within, feeling a rush of sin that connected their bodies, a biblical wickedness that charged through their veins while Joey rode him with intensities of hatred and love. This was no time for a condom. It was raw bareback in the warmest of ways. A sensation of heat with a physical form gliding in and out enveloped in saliva; friction met with wetness. Joey gyrated his hips and secured Ahmed's massive cock inside while he jerked off onto his furry chest.

They came almost together, but for Joey, just a minute before. He put a towel down on his chest for Ahmed to finish, and then he was face-fucked into a head rush. Looking up, past Ahmed's hairless sack, he saw Ahmed's eyes lost in thought. To see the world through another guy, to see someone have pleasure so that he could see it first-hand, was all Joey wanted.

Akin to a grand mal seizure, Ahmed's vision rolled back into itself while his Middle Eastern dick cock-gagged Joey's throat. He had come, and now an opaque fountain splattered Joey's beard, and a thick white lava covered Ahmed's fingers like melted surgical gloves. Ahmed quickly pushed Joey's head away. To him, it was haram for someone to taste his seed, for everything was sacred and nothing clean. But he was too late. Joey already tasted aftermaths of sweet rose and pomegranate tinged with salt. Joey wanted more and swallowed before Ahmed could say anything.` },
  name: {
    word: 'Adhan', rebus: ['👂'],
    meaning: `"Outside the apartment, the call to prayer, the adhan, had begun. Adhan in Arabic means to listen; we listened to our naked bodies rub against each other as the people outside hearkened to God."`,
    src: 'desalination · flamingo · mirror · May 2023',
  },
  versions: [
    { label: 'The aftertaste', items: [
      ['"sweet rose and pomegranate tinged with salt"', 'khakis · coat'],
      ['"sweet rose and pineapple tinged with salt"', 'hydrant · polaris · habibi · lavender · musalla'],
      ['"I tasted his saltiness with an aftermath of sweet rose and pineapple."', 'argan · gomorrah'],
    ]},
    { label: 'How it ended', items: [
      ['"It was quick. We finished almost together, while for me, just a moment before."', 'desalination'],
      ['"We came almost simultaneously. There was stillness in the room, but beyond the window, the adhan had just reached its high point."', 'May 2023'],
    ]},
    { label: 'His palate', items: [
      ['"But now he knew his palate was only for kebabs—an unmitigated kebab queen."', 'hydrant · habibi · polaris · musalla · lavender'],
      ['"But for Ahmed, he only wanted Ahmed."', 'loofah · rayon'],
    ]},
  ],
},
{
  key: 'loofah', label: 'Night 6', draft: 'loofah', icon: '🧽',
  title: 'Desalination',
  tiles: ['loofah', 'desalination', 'shower', 'argan', 'rayon', 'pineapple'],
  goals: [['desalination', 12], ['loofah', 10]], moves: 26,
  hint: 'Argan oil, a loofah, purple rayon. Wash it off.',
  intro: { src: 'May 2023', text:
`Ahmed left the room smelling of argan oil and sweat that the aircon soon extinguished.

Standing there, looking at Ahmed as he washed his body, I saw an enormous strength behind each pass of the loofah. It was as if the sins of our lust were dirt on his skin, and Ahmed had hoped for fresh cells to grow into something purer.

I knew that purification for Ahmed was half of faith, and his devotion to God, like he had said many times before, was not a burden but a blessing. But for a brief moment, in my apartment bathroom, I saw something different. Water was in his eyes, and I questioned its provenance. I felt deep down that they were likely tears of emotion and disgust rather than just drops of desalination.` },
  name: {
    word: 'Ahmed', rebus: ['🤲'],
    meaning: `He told me what his label, Ahmed, had meant before, "an Arabic boy's name signifying one who deeply praised or constantly thanked God." I realise now what an understatement that was.`,
    src: 'flamingo · mirror · May 2023',
  },
  versions: [
    { label: 'His full name', items: [
      ['"Ahmed never told me his full name, for his name would reveal who his Father and family were in the Arabic naming convention."', 'desalination'],
      ['"Mohammed finished, went to the bathroom and showered. He scrubbed his recent sin away with loofa and then moisturised with the argan oil they used for lube."', 'rayon'],
    ]},
    { label: 'The sheet', items: [
      ['"turning a patch of purple rayon into a dark shadow of itself"', 'khakis · coat · lavender · desalination · flamingo · mirror · May 2023'],
      ['"turning a patch of polyester into a dark shadow of itself"', 'hydrant · habibi · polaris · musalla · argan · gomorrah'],
    ]},
    { label: 'The water in his eyes', items: [
      ['"tears of emotion and disgust rather than just drops of desalination"', 'khakis · desalination · May 2023'],
      ['"Water was in his eyes, and I questioned if it actually came from the shower."', 'argan · gomorrah'],
      ['"\'I must steal the Durian\', Ahmed said to himself. \'It is the only way.\'"', 'loofah · rayon'],
    ]},
  ],
},
{
  key: 'polaris', label: 'Night 7', draft: 'polaris', icon: '⭐',
  title: 'The Dream',
  tiles: ['star', 'sun', 'moon', 'symphony', 'utensils', 'polaris'],
  goals: [['star', 11], ['sun', 1], ['moon', 1]], moves: 16,
  hint: 'Eleven stars, one sun and a moon.',
  intro: { src: 'May 2023', text:
`Ahmed turned onto his back and looked toward the ceiling as if its facade were a window to the midnight sky.

"It all started with a dream," he said. "Yousef saw eleven stars, one sun, and a moon in that vision, and they bowed to him as though he was their conductor."

"A symphony?" I mused. My imagination was on full display; I envisioned Yousef in a suit of darkness with a baton, orchestrating light aeons ago.

Orion's belt and the seven sisters were some of the only constellations I knew, but I wondered if Yousef's siblings had stars of their own. Did they flex and bend in their endless tar-black heaven? Did they shine more than Polaris? I had learned about the northern star as a cub scout but never imagined it part of a larger picture; that maybe its place on the little dipper's handle was just a speck in a universal kitchen of utensils.` },
  name: {
    word: 'Yousef', rebus: ['⭐', '☀️', '🌙'],
    meaning: `"Habibi, you know, I often wonder if Yousef looked a bit like you. Blonde hair, white skin, a coarse Arab beard." ... "What makes the story of your name special is that it's a story about truth."`,
    src: 'May 2023',
  },
  versions: [
    { label: 'Who the stars were', items: [
      ['"the eleven stars, sun, and moon represented the family of Yousef and his future power over them"', 'khakis · coat · lavender · musalla · desalination · flamingo · May 2023'],
      ['"The eleven stars represented the ten brothers and one sister of Yousef." "The Sun represented Jacob, his father and the Moon his mother, Rachel."', 'hydrant · habibi · argan · gomorrah'],
    ]},
    { label: 'What Joey asked', items: [
      ['"A symphony?"', 'most TPDs'],
      ['"A master of ceremony?"', 'gomorrah'],
    ]},
    { label: 'Who he was meant to be', items: [
      [`"Just because we didn't turn into the person we wanted to be doesn't mean we didn't turn into the person we were meant to be."`, 'said by Ahmed · khakis · coat · May 2023'],
      [`"Just because we didn't turn into the person we wanted to be doesn't mean we didn't turn into the person we were meant to be," he'd tell himself.`, 'said by Joey · hydrant · habibi'],
    ]},
  ],
},
{
  key: 'flamingo', label: 'Night 8', draft: 'flamingo', icon: '🦩',
  title: 'Chinese Whispers',
  tiles: ['frog', 'flamingo', 'bonfire', 'yankee', 'quran', 'prince'],
  goals: [['flamingo', 14]], whisper: 2, moves: 24,
  hint: 'After every move, two tiles are whispered into something else.',
  intro: { src: 'May 2023', text:
`"There was truth in the stars, but the problem was that he told that truth to his father, and his brother's wife overheard. She then told her husband, and he then told the others."

"Did the story remain the same?"

I thought about Chinese whispers, my childhood game. Sitting around a bonfire, one person starts with a sentence and then whispers it to another. The saying, once full stop, was never the same. The frog had turned not into a prince but a pink flamingo who sang 'Yankee Doodle' instead of ribbits. A story grounded in truth but veiled in exaggeration.` },
  name: {
    word: 'Quran', rebus: ['📖'],
    meaning: `"Habibi, do you know that 'Quran' in Arabic literally means 'recitation'? It sets Islam above all others in that its words are directly from the source with no syllable tarnished." ... I ignored such blatant religious bias, but I understood translation and its impact in that power came from the translator, not the originator.`,
    src: 'May 2023',
  },
  versions: [
    { label: 'What "Quran" means', items: [
      [`"'Quran' in Arabic literally means 'pure translation'"`, 'khakis · coat · hydrant · habibi · lavender · musalla · polaris · argan · cigarette · desalination'],
      [`"'Quran' in Arabic literally means 'recitation'"`, 'May 2023'],
    ]},
    { label: 'The question', items: [
      ['"Did the story stay the same?"', 'most TPDs'],
      ['"Did the story remain the same?"', 'May 2023'],
    ]},
    { label: 'Who overheard', items: [
      [`"his brother's wife overheard. She then told her husband, and then he told the others."`, 'most TPDs'],
      [`"The problem was that he told the dream to his father and his brothers overheard."`, 'gomorrah'],
    ]},
    { label: 'Ten years earlier', items: [
      ['"Chinese whispers in French is Arabic whispers"', 'note · 27 March 2013'],
    ]},
  ],
},
{
  key: 'coat', label: 'Night 9', draft: 'coat', icon: '🧥',
  title: 'The Coat of Many Colours',
  tiles: ['red', 'orange', 'yellow', 'green', 'blue', 'violet'],
  goals: [['red', 7], ['orange', 7], ['yellow', 7], ['green', 7], ['blue', 7], ['violet', 7]], moves: 28,
  hint: 'Match five in a line to sew the coat. Swap it with any colour to clear every tile of that colour.',
  intro: { src: 'May 2023', text:
`"Yes, and it turned Yousef's siblings jealous. The truth was misinterpreted as a brag, and they saw their father bestow favouritism upon Yousef and gift him what was called the coat of many colours."

"Describe it to me?" I asked, trying hard to imagine such a coat of colours in a room full of darkness.

"Close your eyes, Habibi. What do you see? Pinpricks of red, flashes of orange, waves of yellow, streaks of green, blue and violet. These colours on the backs of your eyelids, you catch something—tiny pixels existing even in the obscurity of space; colours just the same as Yousef's jacket."

"So, basically, it was a straight-up pride flag?"` },
  name: {
    word: 'The Coat of Many Colours', rebus: ['🧥', '🌈'],
    meaning: `"It's not we wear our colours; it's we are our colours," Joey said, thinking of the things he could not hide, both physical and meta. ... "We had no say," Ahmed remarked. "We were born with them, our colours our names. No choice, and we've had to hide them and lie."`,
    src: 'coat · khakis · lavender · cigarette',
  },
  versions: [
    { label: 'The colours', items: [
      ['"Pinpricks of yellow, flashes of pink, waves of blue, streaks of orange"', 'khakis · coat · lavender · musalla · cigarette · desalination'],
      ['"Pinpricks of red, flashes of orange, waves of yellow, streaks of green, blue and violet"', 'May 2023'],
    ]},
    { label: 'What it is called', items: [
      [`"The 'Amazing Technicolor Dreamcoat'?" ... "He might not know the Bible," he thought to himself, "but I know my broadway."`, 'hydrant · habibi · argan'],
      ['"The cloak of many colours?"', 'hydrant · polaris · musalla'],
      ['"Symbols schymbols, it\'s a straight up pride flag."', 'hydrant · habibi'],
    ]},
  ],
},
{
  key: 'cigarette', label: 'Night 10', draft: 'cigarette', icon: '🚬',
  title: 'The Knock',
  tiles: ['cigarette', 'movie', 'guard', 'toilet', 'lock', 'doha'],
  goals: [['movie', 8]], over: { kind: 'door', count: 4, knockEvery: 4, knockAdd: 2, knocks: 3 }, moves: 26,
  hint: 'Every few moves, someone knocks. Clear every door before your moves run out.',
  intro: { src: 'May 2023', text:
`We lived a life of fear, to love in fear, go out in fear, touch in fear.

One might say we did it because it's like sneaking a cigarette behind your mother's back, knowing the consequences if she were to smell you, but you do it anyway because you're a rebel or because you're just a kid.

Ahmed and I were just human.

Suddenly, a loud banging on the door jolted us. I sat up, my heart racing, while Ahmed jumped out of bed and started to dress quickly.

Panic rushed through us.` },
  name: {
    word: 'A friend', rebus: ['🎬'],
    meaning: `The light flicked on, showing two guards. ... "Who are you?" the taller one asked Ahmed. "A friend. Watching a movie." The taller guard paused, looking intensely at Ahmed and then myself before returning his gaze to Ahmed again.`,
    src: 'May 2023',
  },
  versions: [
    { label: 'How long in Doha', items: [
      ['"some of the only intimacy I had during my three years in Doha"', 'desalination'],
      ['"some of the only intimacy I had during my two-year stay in Doha"', 'flamingo · mirror · May 2023'],
    ]},
    { label: 'Still crimes', items: [
      ['"Even today, seven years after I left, twelve years after Qatar was awarded the Cup, they are still crimes."', 'desalination'],
      ['"Even today, seven years after I left, they remain crimes. ... although the authorities might have turned a blind eye during the games"', 'May 2023'],
    ]},
    { label: 'Living in fear', items: [
      [`"To always live a life in fear, fuck in fear, go out in fear, kiss in fear. Thats the life of a fag in the Middle East."`, 'khakis · coat'],
    ]},
  ],
},
{
  key: 'musalla', label: 'Night 11', draft: 'musalla', icon: '🕌',
  title: 'Qada Salah',
  tiles: ['musalla', 'ahmed', 'wudu', 'fatiha', 'salah', 'maghrib'],
  goals: [['ahmed', 10], ['fatiha', 8], ['wudu', 8]], moves: 26,
  hint: 'Wudu first: hands, face, arms, head and feet.',
  intro: { src: 'May 2023', text:
`Intrigued by the rituals I had seen my classmates practice in the musalla just outside my door, I asked him about the significance of the prayer he was about to perform.

Ahmed began by imparting to me the knowledge of wudu, the ritual ablution that precedes the act of prayer. With delicate precision, he demonstrated the cleansing of hands, face, arms, head, and feet, imbuing each gesture with the sanctity of tradition.

He told me when to recite the opening chapter of the Quran, Al-Fatiha, and when to recite other verses. Two were chosen from the beginning of Surah Yousef.` },
  name: {
    word: 'Qada Salah', rebus: ['🤲', '🕌'],
    meaning: `"I missed the Maghrib earlier because we were together. So, I'll perform a Qada Salah, a makeup prayer for the one I missed. I still need to thank Allah for the day and seek His guidance. 'Qada' in Arabic means 'to fulfil,' and 'Salah' means 'prayer.' So, 'Qada Salah' is essentially fulfilling the missed prayer."`,
    src: 'May 2023',
  },
  versions: [
    { label: 'What Joey called him', items: [
      [`Surprised and moved by his offer, I agreed. "I'd love that, Habibi." He laughed at me for calling him Habibi and smiled warmly.`, 'May 2023'],
    ]},
    { label: 'The two verses', items: [
      [`"The first ay'a of Yousef," he revealed, "tells us that the Quran contains the finest of tales, tales unknown even to the Prophet before they were divinely bestowed upon him."`, 'May 2023'],
    ]},
    { label: 'A prayer from another draft', items: [
      ['"O Allah, if my sins become abundant / Then indeed I know Your Forgiveness is greater than my sins"', 'rayon'],
    ]},
  ],
},
{
  key: 'lavender', label: 'Night 12', draft: 'lavender', icon: '💜',
  title: 'The Unknown',
  tiles: ['lavender', 'sundown', 'mirror', 'city', 'unknown', 'truth'],
  goals: [['lavender', 10], ['sundown', 8]], hidden: 0.45, moves: 26,
  hint: 'Some tiles are unknown. They still match. A match next to one reveals it.',
  intro: { src: 'May 2023', text:
`The night had started with the pinkness of the Qatari sundown burning against the mirrored glass windows of my Lavender Village apartment dorm room.

Now it ended with the absence of light and a quiet headiness while I wondered why Yousef never just denied the dream. I thought back to before about what truths to choose for myself, others, and the world. Why not all? Not here, not anywhere really, because I understood then that if you decided to be open in your world, they would find out about it in this world. I honestly questioned if concealing something saved you or if the act of revealment freed a path for your story to begin.` },
  name: {
    word: 'God', rebus: ['❓'],
    meaning: `"I just clump everything the world throws at me into a pile, especially the stuff I don't understand, and then label that pile the 'unknown' and rename it 'God.' If I don't know something, then God must know it because that is the 'unknown.'"`,
    src: 'every TPD',
  },
  versions: [
    { label: 'What Ahmed asked', items: [
      ['"How do you have such faith in the unknown?"', 'khakis · desalination · flamingo · mirror · May 2023'],
      ['"How do you have such love for the unknown?"', 'lavender · cigarette'],
      ['"How do you have such disregard for the unknown?"', 'polaris · musalla'],
    ]},
    { label: 'The nameless', items: [
      [`"I figured God was another word for the 'unknown' and that sometimes, the nameless just needed a name."`, 'flamingo · mirror'],
      [`"To me, God was a name we gave to the nameless, a way to give voice to that which remained unspoken."`, 'May 2023'],
      [`"I didn't grow up with faith but I gave the most powerful part of my life the name that others have put their faith in so that I'm not alone."`, 'polaris'],
    ]},
  ],
},
{
  key: 'tootsie', label: 'The Last Night', draft: 'May 2023', icon: '💃',
  title: 'Tootsie in the Desert',
  tiles: ['tootsie', 'desert', 'drag', 'makeup', 'queen', 'concealer'],
  goals: [['tootsie', 15], ['drag', 8]], whisper: 1, hidden: 0.2, moves: 30,
  hint: 'Everything shifts. Some of it is unknown. Dance anyway.',
  intro: { src: 'desalination', text:
`Why "Tootsie in the Desert"? Because the games are just dressed up in drag, hiding for a brief moment the truth that lies beneath it.` },
  name: {
    word: 'Tootsie in the Desert', rebus: ['💃', '🏜️'],
    meaning: `"I later coined it "Tootsie in the Desert," a drag queen forever shifting in the dunes, signifying our ever-changing identities. Examining naming's impact, we might cultivate self-awareness, inclusivity, and societal acceptance."`,
    src: 'May 2023',
  },
  versions: [
    { label: 'Why the title', items: [
      ['"Because the games are just dressed up in drag, hiding for a brief moment the truth that lies beneath it."', 'desalination'],
      ['"a drag queen forever shifting in the dunes, signifying our ever-changing identities"', 'May 2023'],
    ]},
  ],
},
];

window.ENDING = {
  definition: { src: 'khakis', text: `"Yes. Exactly. Define us. But it is not the names that define us; it is who we are that write the definition."` },
  scheherazade: { src: 'May 2023', text: `Like Scheherazade, Ahmed left each night without ever completely finishing the narrative. He dealt only with the beginning of Yousef's story mainly because that's where he and I were at our start.` },
};

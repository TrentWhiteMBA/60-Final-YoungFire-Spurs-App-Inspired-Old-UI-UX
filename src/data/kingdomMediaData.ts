import type { VideoMediaItem, KingdomMedia } from '../types';

export type { VideoMediaItem, KingdomMedia };

export const cleanYouTubeId = (urlOrId: string): string => {
  if (!urlOrId) return '';
  let id = urlOrId.trim();
  if (id.includes('v=')) {
    id = id.split('v=')[1]?.split('&')[0]?.split('?')[0] || id;
  } else if (id.includes('youtu.be/')) {
    id = id.split('youtu.be/')[1]?.split('&')[0]?.split('?')[0] || id;
  } else if (id.includes('embed/')) {
    id = id.split('embed/')[1]?.split('&')[0]?.split('?')[0] || id;
  }
  id = id.split('&')[0].split('?')[0];
  return id.substring(0, 11);
};

export const getYouTubeThumbnail = (id: string, quality: 'hq' | 'mq' | 'default' = 'hq'): string => {
  const cleanId = cleanYouTubeId(id);
  if (!cleanId) return '/favicon.png';
  return `https://img.youtube.com/vi/${cleanId}/${quality}default.jpg`;
};

export const parseScriptureRefToNav = (ref?: string): { bookId: string; chapter: number } | null => {
  if (!ref) return null;
  const normalized = ref.trim().toUpperCase();

  const bookMap: Record<string, string> = {
    'GENESIS': 'GEN', 'EXODUS': 'EXO', 'LEVITICUS': 'LEV', 'NUMBERS': 'NUM', 'DEUTERONOMY': 'DEU',
    'JOSHUA': 'JOS', 'JUDGES': 'JDG', 'RUTH': 'RUT', '1 SAMUEL': '1SA', '2 SAMUEL': '2SA',
    '1 KINGS': '1KI', '2 KINGS': '2KI', '1 CHRONICLES': '1CH', '2 CHRONICLES': '2CH',
    'EZRA': 'EZR', 'NEHEMIAH': 'NEH', 'ESTHER': 'EST', 'JOB': 'JOB', 'PSALMS': 'PSA', 'PSALM': 'PSA',
    'PROVERBS': 'PRO', 'ECCLESIASTES': 'ECC', 'SONG OF SOLOMON': 'SNG', 'ISAIAH': 'ISA', 'JEREMIAH': 'JER',
    'LAMENTATIONS': 'LAM', 'EZEKIEL': 'EZK', 'DANIEL': 'DAN', 'HOSEA': 'HOS', 'JOEL': 'JOL',
    'AMOS': 'AMO', 'OBADIAH': 'OBA', 'JONAH': 'JON', 'MICAH': 'MIC', 'NAHUM': 'NAM',
    'HABAKKUK': 'HAB', 'ZEPHANIAH': 'ZEP', 'HAGGAI': 'HAG', 'ZECHARIAH': 'ZEC', 'MALACHI': 'MAL',
    'MATTHEW': 'MAT', 'MARK': 'MRK', 'LUKE': 'LUK', 'JOHN': 'JHN', 'ACTS': 'ACT',
    'ROMANS': 'ROM', '1 CORINTHIANS': '1CO', '2 CORINTHIANS': '2CO', 'GALATIANS': 'GAL',
    'EPHESIANS': 'EPH', 'PHILIPPIANS': 'PHP', 'COLOSSIANS': 'COL', '1 THESSALONIANS': '1TH',
    '2 THESSALONIANS': '2TH', '1 TIMOTHY': '1TI', '2 TIMOTHY': '2TI', 'TITUS': 'TIT',
    'PHILEMON': 'PHM', 'HEBREWS': 'HEB', 'JAMES': 'JAS', '1 PETER': '1PE', '2 PETER': '2PE',
    '1 JOHN': '1JN', '2 JOHN': '2JN', '3 JOHN': '3JN', 'JUDE': 'JUD', 'REVELATION': 'REV'
  };

  // Match e.g. "Ephesians 4:16" or "1 Corinthians 13:4" or "Psalms 23"
  const match = normalized.match(/^((?:[1-3]\s+)?[A-Z\s]+?)\s+(\d+)(?::(\d+))?/);
  if (!match) return null;

  const bookName = match[1].trim();
  const chapter = parseInt(match[2], 10) || 1;
  const bookId = bookMap[bookName] || 'EPH';

  return { bookId, chapter };
};

export const KINGDOM_MEDIA_CATEGORIES = [
  'All',
  'JHOW Sanctuary Sermons',
  'JHOW Sermons & Live',
  'Theology & Expository Preaching',
  'Biblical Precepts & Heritage',
  'High Praise & Worship',
  'Youth Ignition Praise',
  'Urban Gospel & Classics',
  'Deliverance & Warfare',
  'Bible Book Overviews'
] as const;

export const JHOW_OFFICIAL_CHANNEL_URL = 'https://www.youtube.com/@JoshuaHouseOfWorshipSanAntonio';

export const JHOW_SANCTUARY_SERMONS: KingdomMedia[] = [
  {
    id: 'jhow-thought-captive',
    title: 'How to Take Every Thought Captive!',
    series: 'Sanctuary Word',
    speakerOrMinistry: 'Joshua House of Worship',
    speaker: 'Joshua House of Worship',
    channel: 'Joshua House Of Worship',
    category: 'Theology & Expository Preaching',
    duration: '1:50:53',
    youtubeId: 'xLpGXQ2SmyI',
    scriptureRefs: ['2 Corinthians 10:5', 'Philippians 4:8'],
    scriptureRef: '2 Corinthians 10:5',
    thematicFocus: 'Apostolic teaching on spiritual discipline, casting down vain imaginations, and bringing every thought into the obedience of Christ.',
    description: 'Apostolic teaching on spiritual discipline, casting down vain imaginations, and bringing every thought into the obedience of Christ.',
    isJhowOfficial: true
  },
  {
    id: 'jhow-builders',
    title: 'Something For The Builders!',
    series: '2026 Annual Theme',
    speakerOrMinistry: 'Joshua House of Worship',
    speaker: 'Joshua House of Worship',
    channel: 'Joshua House Of Worship',
    category: 'Theology & Expository Preaching',
    duration: '2:07:56',
    youtubeId: 'ZmGFcS8DihI',
    scriptureRefs: ['Nehemiah 4', 'Ephesians 4:16'],
    scriptureRef: 'Nehemiah 4',
    thematicFocus: 'Rebuilding Better Together — equipping the body of Christ for corporate restoration and kingdom discipleship.',
    description: 'Rebuilding Better Together — equipping the body of Christ for corporate restoration and kingdom discipleship.',
    isJhowOfficial: true
  },
  {
    id: 'jhow-power-presence',
    title: '9 Ways to Build Up Others – "The Power of Presence"',
    series: 'Kingdom Community',
    speakerOrMinistry: 'Joshua House of Worship',
    speaker: 'Joshua House of Worship',
    channel: 'Joshua House Of Worship',
    category: 'Biblical Precepts & Heritage',
    duration: '1:36:11',
    youtubeId: 'dR6eeLFCvUw',
    scriptureRefs: ['1 Thessalonians 5:11', 'Hebrews 10:24-25'],
    scriptureRef: '1 Thessalonians 5:11',
    thematicFocus: 'Expository practical principles on showing up for the brethren, relational consecration, and walking out real fellowship.',
    description: 'Expository practical principles on showing up for the brethren, relational consecration, and walking out real fellowship.',
    isJhowOfficial: true
  }
];

export const CANONICAL_MEDIA_VAULT: VideoMediaItem[] = [
  ...JHOW_SANCTUARY_SERMONS,
  {
    id: 'jhow_annual_celebration',
    youtubeId: 'kr5zrYXXTzs',
    title: 'Rebuilding Better Together — Living in Apostolic Unity',
    speaker: 'Joshua House of Worship (San Antonio)',
    artist: 'Joshua House of Worship',
    category: 'JHOW Sermons & Live',
    duration: '1:12:45',
    thematicFocus: 'Ephesians 4:16 — Every joint supplying growth and edifying the body in love.',
    scriptureRef: 'Ephesians 4:16',
    isJhowOfficial: true,
    lyricsSnippet: 'From whom the whole body fitly joined together and compacted by that which every joint supplieth.',
    description: 'The definitive kickoff message for 2026 at Joshua House of Worship, outlining our apostolic mandate to rebuild the youth and young adult discipleship altar.'
  },
  {
    id: 'jhow_sermon_relaunch',
    youtubeId: 'jD36AIKAqp4',
    title: 'Welcome to The Relaunch — Stepping Into Divine Momentum',
    speaker: 'Joshua House of Worship',
    artist: 'Joshua House of Worship',
    category: 'JHOW Sermons & Live',
    duration: '58:30',
    thematicFocus: 'Isaiah 43:19 — Behold, I will do a new thing; now it shall spring forth.',
    scriptureRef: 'Isaiah 43:19',
    isJhowOfficial: true,
    lyricsSnippet: 'Remember ye not the former things, neither consider the things of old.',
    description: 'Pastor and facilitators declaring the season of acceleration and renewed momentum for young disciples.'
  },
  {
    id: 'jhow_sunday_worship',
    youtubeId: 'C5q1LSCTD88',
    title: 'Sunday Worship Encounter & Word of Truth',
    speaker: 'Joshua House of Worship',
    artist: 'Joshua House Worship Collective',
    category: 'JHOW Sermons & Live',
    duration: '1:25:10',
    thematicFocus: 'John 4:24 — God is a Spirit: and they that worship Him must worship in spirit and truth.',
    scriptureRef: 'John 4:24',
    isJhowOfficial: true,
    description: 'Consecrated live worship, spontaneous altar adoration, and deep systematic teaching.'
  },
  {
    id: 'jhow_altar_fire',
    youtubeId: 'uwsPRcCwZDE',
    title: 'Altar Fire: The Power of Persistent Prayer & Consecrated Fasting',
    speaker: 'Joshua House of Worship',
    artist: 'Joshua House of Worship',
    category: 'JHOW Sermons & Live',
    duration: '1:18:40',
    thematicFocus: 'Leviticus 6:13 — The fire shall ever be burning upon the altar; it shall never go out.',
    scriptureRef: 'Leviticus 6:13',
    isJhowOfficial: true,
    description: 'A clarion call to holy prayer, spiritual discipline, and uncompromising faith in daily devotion.'
  },
  {
    id: 'brandon_lake_praise',
    youtubeId: 'f2oxGYpuLkw',
    title: 'Praise (feat. Brandon Lake, Chris Brown & Chandler Moore)',
    artist: 'Elevation Worship',
    speaker: 'Brandon Lake & Chandler Moore',
    category: 'High Praise & Worship',
    duration: '5:04',
    thematicFocus: 'Psalm 150:6 — Let every thing that hath breath praise the Lord.',
    scriptureRef: 'Psalms 150:6',
    lyricsSnippet: 'Let everything that has breath praise the Lord, praise the Lord!'
  },
  {
    id: 'elevation_goodbye_yesterday',
    youtubeId: 'I41mcfilEKQ',
    title: 'Goodbye Yesterday — High Energy Praise',
    artist: 'ELEVATION RHYTHM',
    speaker: 'ELEVATION RHYTHM',
    category: 'Youth Ignition Praise',
    duration: '3:40',
    thematicFocus: '2 Corinthians 5:17 — Old things are passed away; behold, all things are become new.',
    scriptureRef: '2 Corinthians 5:17',
    lyricsSnippet: 'Goodbye yesterday, you can’t hold me back no more. I am alive in Christ!'
  },
  {
    id: 'bibleproject_ephesians',
    youtubeId: 'Y71r-T98E2Q',
    title: 'Ephesians Visual Guide: One New Humanity',
    speaker: 'BibleProject',
    category: 'Bible Book Overviews',
    duration: '9:12',
    thematicFocus: 'Ephesians 4:1-16 — Walking worthy of the calling, unity in the body, armor of God.',
    scriptureRef: 'Ephesians 4:1',
    description: 'Visual theology unfolding Paul’s message of reconciliation, unity, and the whole armor of God.'
  },
  {
    id: 'bibleproject_narrative',
    youtubeId: 'dLFCE8z__hw',
    title: 'Plot in Biblical Narrative & Divine Design',
    speaker: 'BibleProject',
    category: 'Bible Book Overviews',
    duration: '6:15',
    thematicFocus: 'The overarching tapestry of scripture and God’s kingdom redemption plot.',
    scriptureRef: 'Genesis 1:1',
    description: 'Explore how biblical authors design plot patterns pointing to Jesus Christ.'
  },
  {
    id: 'forrest_frank_god_is_good',
    youtubeId: 'q5m09rqOoxE',
    title: 'GOD IS GOOD — Joy in the Lord',
    artist: 'Forrest Frank',
    speaker: 'Forrest Frank',
    category: 'High Praise & Worship',
    duration: '3:15',
    thematicFocus: 'Psalm 100:5 — For the Lord is good; his mercy is everlasting.',
    scriptureRef: 'Psalms 100:5',
    lyricsSnippet: 'God is good all the time, and all the time God is good.'
  },
  {
    id: 'chandler_moore_jireh',
    youtubeId: 'mC-zw0zCCtg',
    title: 'Jireh — More Than Enough',
    artist: 'Elevation Worship & Maverick City Music',
    speaker: 'Chandler Moore & Naomi Raine',
    category: 'High Praise & Worship',
    duration: '9:58',
    thematicFocus: 'Philippians 4:19 — But my God shall supply all your need according to his riches in glory.',
    scriptureRef: 'Philippians 4:19',
    lyricsSnippet: 'I will be content in every circumstance, You are Jireh, You are enough.'
  },
  {
    id: 'tasha_cobbs_break_every_chain',
    youtubeId: 'ucY6NwQTI3M',
    title: 'Break Every Chain — Altar Warfare Praise',
    artist: 'Tasha Cobbs Leonard',
    speaker: 'Tasha Cobbs Leonard',
    category: 'Deliverance & Warfare',
    duration: '8:19',
    thematicFocus: 'Acts 16:26 — And immediately all the doors were opened, and every one’s bands were loosed.',
    scriptureRef: 'Acts 16:26',
    lyricsSnippet: 'There is power in the name of Jesus to break every chain, break every chain.'
  },
  {
    id: 'cece_winans_goodness_of_god',
    youtubeId: '9sE5kEnitqE',
    title: 'Goodness of God — Live Worship',
    artist: 'CeCe Winans',
    speaker: 'CeCe Winans',
    category: 'High Praise & Worship',
    duration: '4:56',
    thematicFocus: 'Psalm 23:6 — Surely goodness and mercy shall follow me all the days of my life.',
    scriptureRef: 'Psalms 23:6',
    lyricsSnippet: 'With every breath that I am able, I will sing of the goodness of God.'
  },
  {
    id: 'sinach_way_maker',
    youtubeId: 'w2pHOVKP7xo',
    title: 'Way Maker — Miracle Worker & Promise Keeper',
    artist: 'Sinach / Leeland',
    speaker: 'Sinach',
    category: 'High Praise & Worship',
    duration: '5:12',
    thematicFocus: 'Isaiah 43:16 — Which maketh a way in the sea, and a path in the mighty waters.',
    scriptureRef: 'Isaiah 43:16',
    lyricsSnippet: 'Way Maker, Miracle Worker, Promise Keeper, Light in the darkness.'
  },
  {
    id: 'brandon_lake_gratitude',
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Gratitude — Halleluiah Song',
    artist: 'Brandon Lake',
    speaker: 'Brandon Lake',
    category: 'High Praise & Worship',
    duration: '5:37',
    thematicFocus: 'Psalm 103:1 — Bless the Lord, O my soul: and all that is within me, bless his holy name.',
    scriptureRef: 'Psalms 103:1'
  },
  {
    id: 'cory_asbury_reckless_love',
    youtubeId: '6xx0d3R2LoU',
    title: 'Reckless Love — Overwhelming Love of God',
    artist: 'Cory Asbury',
    speaker: 'Cory Asbury',
    category: 'High Praise & Worship',
    duration: '5:32',
    thematicFocus: 'Luke 15:4 — What man of you, having an hundred sheep, if he lose one of them, doth not leave the ninety and nine.',
    scriptureRef: 'Luke 15:4',
    lyricsSnippet: 'Oh, the overwhelming, never-ending, reckless love of God.'
  },
  {
    id: 'bibleproject_covenants',
    youtubeId: '7_CGP-12AE0',
    title: 'The Covenants — God’s Grand Story',
    speaker: 'BibleProject',
    category: 'Bible Book Overviews',
    duration: '5:24',
    thematicFocus: 'The covenant relationships between God and humanity from Genesis to Jesus.',
    scriptureRef: 'Genesis 12:1',
    description: 'Explore the biblical covenants that unify the entire story of the Bible.'
  },
  {
    id: 'bibleproject_holyspirit',
    youtubeId: 'oNNZO9i1Gjc',
    title: 'Holy Spirit — Ruakh Breath of God',
    speaker: 'BibleProject',
    category: 'Bible Book Overviews',
    duration: '4:11',
    thematicFocus: 'The personal empowering presence of God from Genesis 1 to Acts 2.',
    scriptureRef: 'Acts 1:8',
    description: 'Visual biblical study on the Holy Spirit as the energizing breath of life.'
  },
  {
    id: 'bibleproject_messiah',
    youtubeId: '3dEh25pduQ8',
    title: 'The Messiah — The King Who Suffers & Conquers',
    speaker: 'BibleProject',
    category: 'Bible Book Overviews',
    duration: '5:50',
    thematicFocus: 'The royal seed promised in David and fulfilled in the crucified and risen Christ.',
    scriptureRef: 'Isaiah 9:6',
    description: 'Traces the theme of the Messiah through the Old Testament and the Gospels.'
  }
];

export const KINGDOM_MEDIA_ITEMS = CANONICAL_MEDIA_VAULT;

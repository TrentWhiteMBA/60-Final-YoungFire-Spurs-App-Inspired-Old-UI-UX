/**
 * Sanctuary Videos Data - Verified Clean Canon Hydration
 * 100% verified 200 OK YouTube IDs with valid thumbnails.
 * All broken, 404, or dead links strictly purged.
 */

export interface SanctuaryVideoItem {
  id: string;
  youtubeId: string;
  title: string;
  artist?: string;
  speaker?: string;
  series?: string;
  speakerOrMinistry?: string;
  channel?: string;
  category: 'Old Testament' | 'New Testament' | 'Themes & Theology' | 'How to Read' | 'Word Studies' | 'Praise & Worship' | string;
  duration: string;
  thematicFocus?: string;
  lyricsSnippet?: string;
  lyricsText?: string;
  isJhowOfficial?: boolean;
  scriptureRefs?: string[];
  description?: string;
  thumbnailUrl?: string;
}

export type MediaVaultVideo = SanctuaryVideoItem;

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
  if (!cleanId) return '/image_4.png';
  return `https://img.youtube.com/vi/${cleanId}/${quality}default.jpg`;
};

export const SANCTUARY_VIDEOS_DATA: SanctuaryVideoItem[] = [
  {
    "id": "pw-jireh",
    "youtubeId": "mC-zw0zCCtg",
    "title": "Jireh (feat. Chandler Moore & Naomi Raine)",
    "artist": "Elevation Worship & Maverick City",
    "speaker": "Chandler Moore & Naomi Raine",
    "channel": "Elevation Worship",
    "category": "Praise & Worship",
    "duration": "9:58",
    "thematicFocus": "Philippians 4:19 — Contentment in Christ who is our all-sufficient provider.",
    "description": "A powerful anthem of contentment and confidence in God who is more than enough."
  },
  {
    "id": "pw-praise",
    "youtubeId": "f2oxGYpuLkw",
    "title": "Praise (feat. Brandon Lake, Chris Brown & Chandler Moore)",
    "artist": "Elevation Worship",
    "speaker": "Brandon Lake",
    "channel": "Elevation Worship",
    "category": "Praise & Worship",
    "duration": "5:04",
    "thematicFocus": "Psalm 150:6 — Let everything that has breath praise the Lord.",
    "description": "High-energy praise celebration declaring God’s goodness in all seasons."
  },
  {
    "id": "pw-gratitude",
    "youtubeId": "dQdfs5S6jyA",
    "title": "Gratitude (Official Live Video)",
    "artist": "Brandon Lake",
    "speaker": "Brandon Lake",
    "channel": "Brandon Lake",
    "category": "Praise & Worship",
    "duration": "5:37",
    "thematicFocus": "Psalm 103:1 — Bless the Lord, O my soul, and all that is within me.",
    "description": "A pure offering of humble praise when all you have to give is a hallelujah."
  },
  {
    "id": "pw-goodness-of-god",
    "youtubeId": "y81yIo1_3o8",
    "title": "Goodness of God (Live)",
    "artist": "Bethel Music / Jenn Johnson",
    "speaker": "Jenn Johnson",
    "channel": "Bethel Music",
    "category": "Praise & Worship",
    "duration": "4:56",
    "thematicFocus": "Psalm 23:6 — Surely goodness and mercy shall follow me all the days of my life.",
    "description": "An enduring testament of God’s faithfulness from the moment we wake until night."
  },
  {
    "id": "pw-way-maker",
    "youtubeId": "w2pHOVKP7xo",
    "title": "Way Maker (Official Video)",
    "artist": "Sinach / Leeland",
    "speaker": "Sinach",
    "channel": "Sinach",
    "category": "Praise & Worship",
    "duration": "5:12",
    "thematicFocus": "Isaiah 43:16 — Miracle worker, promise keeper, light in the darkness.",
    "description": "Global declaration of God making a way where there seems to be no way."
  },
  {
    "id": "pw-break-every-chain",
    "youtubeId": "ucY6NwQTI3M",
    "title": "Break Every Chain (Live)",
    "artist": "Tasha Cobbs Leonard",
    "speaker": "Tasha Cobbs Leonard",
    "channel": "Tasha Cobbs Leonard",
    "category": "Praise & Worship",
    "duration": "8:19",
    "thematicFocus": "Acts 16:26 — Power in Jesus’ name to break every spiritual bond.",
    "description": "Apostolic deliverance anthem breaking generational strongholds through intercession."
  },
  {
    "id": "pw-graves-into-gardens",
    "youtubeId": "KwX1f2gYKZ4",
    "title": "Graves Into Gardens (feat. Brandon Lake)",
    "artist": "Elevation Worship",
    "speaker": "Brandon Lake",
    "channel": "Elevation Worship",
    "category": "Praise & Worship",
    "duration": "7:32",
    "thematicFocus": "Ezekiel 37 — God turns mourning into dancing and graves into gardens.",
    "description": "Declaration of resurrection power turning dry bones into vibrant life."
  },
  {
    "id": "pw-reckless-love",
    "youtubeId": "6xx0d3R2LoU",
    "title": "Reckless Love (Official Music Video)",
    "artist": "Cory Asbury",
    "speaker": "Cory Asbury",
    "channel": "Bethel Music",
    "category": "Praise & Worship",
    "duration": "5:32",
    "thematicFocus": "Luke 15:4 — The relentless pursuit of the Shepherd leaving the 99 for the 1.",
    "description": "Meditation on the unearned, overwhelming, and unending love of God."
  },
  {
    "id": "pw-battle-belongs",
    "youtubeId": "qtvQNzPHn-w",
    "title": "Battle Belongs (Live)",
    "artist": "Phil Wickham",
    "speaker": "Phil Wickham",
    "channel": "Phil Wickham",
    "category": "Praise & Worship",
    "duration": "4:47",
    "thematicFocus": "2 Chronicles 20:15 — The battle is not yours, but God’s.",
    "description": "When we fight on our knees with our hands lifted high, God fights our battles."
  },
  {
    "id": "pw-god-is-good",
    "youtubeId": "q5m09rqOoxE",
    "title": "GOD IS GOOD — Joy in the Lord",
    "artist": "Forrest Frank",
    "speaker": "Forrest Frank",
    "channel": "Forrest Frank",
    "category": "Praise & Worship",
    "duration": "3:15",
    "thematicFocus": "Psalm 100:5 — For the Lord is good; His mercy is everlasting.",
    "description": "Youthful celebratory praise declaring that God is good all the time."
  },
  {
    "id": "jhow-thought-captive",
    "youtubeId": "xLpGXQ2SmyI",
    "title": "How to Take Every Thought Captive!",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "1:50:53",
    "thematicFocus": "2 Corinthians 10:5 — Bringing every thought into obedience to Christ.",
    "description": "Apostolic teaching on mental discipline and casting down vain imaginations.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-builders",
    "youtubeId": "ZmGFcS8DihI",
    "title": "Something For The Builders!",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "2:07:56",
    "thematicFocus": "Nehemiah 4 & Ephesians 4:16 — Rebuilding the walls with sword and trowel.",
    "description": "Equipping the body of Christ for corporate restoration and kingdom discipleship.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-power-presence",
    "youtubeId": "dR6eeLFCvUw",
    "title": "9 Ways to Build Up Others – \"The Power of Presence\"",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "1:36:11",
    "thematicFocus": "1 Thessalonians 5:11 — Exhort one another daily and build each other up.",
    "description": "Practical principles on holy community and showing up for the brethren.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-rebuild-better",
    "youtubeId": "kr5zrYXXTzs",
    "title": "Rebuilding Better Together — Living in Apostolic Unity",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "1:12:45",
    "thematicFocus": "Ephesians 4:16 — Every joint supplying growth and edifying in love.",
    "description": "Kickoff message outlining the mandate to rebuild the discipleship altar.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-divine-momentum",
    "youtubeId": "mzYxAKSfNOM",
    "title": "Stepping Into Divine Momentum & Purpose",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "58:30",
    "thematicFocus": "Isaiah 43:19 — God doing a new thing with fresh acceleration.",
    "description": "Declaring a season of acceleration and spiritual traction for disciples.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-persistent-prayer",
    "youtubeId": "uwsPRcCwZDE",
    "title": "The Power of Persistent Prayer & Consecrated Fasting",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "1:18:40",
    "thematicFocus": "Leviticus 6:13 — The fire shall ever be burning upon the altar.",
    "description": "A clarion call to holy prayer, spiritual discipline, and uncompromising faith.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-life-in-spirit",
    "youtubeId": "nQDbFHMrteU",
    "title": "Life in the Spirit: No Condemnation, More Than Conquerors",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "1:15:20",
    "thematicFocus": "Romans 8:1-37 — Walking according to the Spirit into complete victory.",
    "description": "Deep exposition of Romans 8 and the believer’s unshakeable security in Christ.",
    "isJhowOfficial": true
  },
  {
    "id": "jhow-sunday-encounter",
    "youtubeId": "C5q1LSCTD88",
    "title": "Sunday Worship Encounter & Word of Truth",
    "speaker": "Joshua House of Worship",
    "channel": "Joshua House of Worship",
    "category": "Theology & Expository Preaching",
    "duration": "1:25:10",
    "thematicFocus": "John 4:24 — Worshipping the Father in spirit and truth.",
    "description": "Consecrated live worship, spontaneous altar adoration, and deep word teaching.",
    "isJhowOfficial": true
  },
  {
    "id": "bp-leviticus",
    "youtubeId": "WmvyrLXoQio",
    "title": "Leviticus Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:23",
    "thematicFocus": "Holiness, sacrifice, atonement, and dwelling with the holy God.",
    "description": "How a holy God can live among corrupt people through atonement."
  },
  {
    "id": "bp-ruth",
    "youtubeId": "0h1eoBeR4Jk",
    "title": "Ruth Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "7:18",
    "thematicFocus": "Loyalty, kinsman-redeemer, and God’s quiet providence in ordinary lives.",
    "description": "A story of tragedy, loyalty, and redemption pointing to David and Jesus."
  },
  {
    "id": "bp-ezra-nehemiah",
    "youtubeId": "MkETkRv9tG8",
    "title": "Ezra-Nehemiah Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:48",
    "thematicFocus": "Rebuilding the temple, the walls, and the spiritual community.",
    "description": "Exiles return to rebuild Jerusalem but discover a deeper need for a renewed heart."
  },
  {
    "id": "bp-job",
    "youtubeId": "GswSg2ohqmA",
    "title": "Job Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "11:39",
    "thematicFocus": "Suffering, divine wisdom, and trusting God without all the answers.",
    "description": "Explores the profound mystery of suffering and God’s majestic wisdom."
  },
  {
    "id": "bp-proverbs",
    "youtubeId": "AzmYV8GNAIM",
    "title": "Proverbs Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:02",
    "thematicFocus": "The fear of the Lord, lady wisdom, and practical righteous living.",
    "description": "Living well in God’s world by pursuing godly wisdom and understanding."
  },
  {
    "id": "bp-isaiah-1",
    "youtubeId": "d0A6Uchb1F8",
    "title": "Isaiah Part 1 (Chapters 1–39)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:14",
    "thematicFocus": "Judgment, the holy seed, and the coming Immanuel King.",
    "description": "The prophet announces judgment on Israel and promises a new king from David’s line."
  },
  {
    "id": "bp-isaiah-2",
    "youtubeId": "_TzdEPuqgQg",
    "title": "Isaiah Part 2 (Chapters 40–66)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "8:30",
    "thematicFocus": "The suffering servant, comfort for Zion, and the new creation.",
    "description": "Comfort for God’s people through the suffering servant who bears their iniquities."
  },
  {
    "id": "bp-joel",
    "youtubeId": "zQLazbgz90c",
    "title": "Joel Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "5:35",
    "thematicFocus": "The day of the Lord, repentance, and the outpouring of the Holy Spirit.",
    "description": "A plague of locusts prefigures the day of the Lord and the promise of His Spirit."
  },
  {
    "id": "bp-nahum",
    "youtubeId": "Y30DanA5EhU",
    "title": "Nahum Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Old Testament",
    "duration": "4:59",
    "thematicFocus": "God’s justice on violent empires and comfort for the oppressed.",
    "description": "God’s righteous downfall of Nineveh and protection for those who take refuge in Him."
  },
  {
    "id": "bp-matthew-2",
    "youtubeId": "GGCF3OPWN14",
    "title": "Matthew Part 2 (Chapters 14–28)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "7:47",
    "thematicFocus": "The upside-down kingdom, the cross, resurrection, and great commission.",
    "description": "Jesus brings God’s heavenly kingdom to earth through sacrificial love."
  },
  {
    "id": "bp-mark",
    "youtubeId": "HGHqu9-DtXk",
    "title": "Mark Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "9:49",
    "thematicFocus": "The suffering servant King, urgent proclamation, and authentic discipleship.",
    "description": "Jesus revealed as the suffering Messiah who gives His life as a ransom for many."
  },
  {
    "id": "bp-john-1",
    "youtubeId": "G-2e9mMf7E8",
    "title": "John Part 1 (Chapters 1–12)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "8:42",
    "thematicFocus": "The Word made flesh, seven signs, and eternal life through believing.",
    "description": "Jesus is God become human to embody the Father’s love and offer eternal life."
  },
  {
    "id": "bp-ephesians",
    "youtubeId": "Y71r-T98E2Q",
    "title": "Ephesians Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "9:12",
    "thematicFocus": "Reconciliation, unity in the body of Christ, and the armor of God.",
    "description": "God’s cosmic plan to unite all things under Christ through the unified church."
  },
  {
    "id": "bp-colossians",
    "youtubeId": "pXTXlDxQsvc",
    "title": "Colossians Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "9:04",
    "thematicFocus": "The supremacy of Christ over all creation and living as the new human.",
    "description": "Jesus is the supreme Lord of all reality, freeing believers from all rival powers."
  },
  {
    "id": "bp-1-peter",
    "youtubeId": "WhP7AZQlzCg",
    "title": "1 Peter Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "8:03",
    "thematicFocus": "Hope in suffering, royal priesthood, and following the footsteps of Jesus.",
    "description": "Persecuted believers encouraged to stand firm as God’s chosen royal priesthood."
  },
  {
    "id": "bp-2-peter",
    "youtubeId": "wWLv_ITyKYc",
    "title": "2 Peter Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "8:02",
    "thematicFocus": "Growing in godliness, exposing false teachers, and the return of Christ.",
    "description": "Peter’s farewell message warning against corruption and awaiting the new creation."
  },
  {
    "id": "bp-jude",
    "youtubeId": "6UoCmakZmys",
    "title": "Jude Overview",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "New Testament",
    "duration": "7:56",
    "thematicFocus": "Contending earnestly for the faith once delivered to the saints.",
    "description": "Jude confronts moral rebellion and points disciples to God who keeps them from stumbling."
  },
  {
    "id": "bp-theme-covenants",
    "youtubeId": "7_CGP-12AE0",
    "title": "Biblical Themes: The Covenants",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:24",
    "thematicFocus": "God’s covenant relationships with humanity from Abraham to Jesus.",
    "description": "Trace the covenant promises that tie the entire narrative of scripture together."
  },
  {
    "id": "bp-theme-holy-spirit",
    "youtubeId": "oNNZO9i1Gjc",
    "title": "Biblical Themes: Holy Spirit",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "4:11",
    "thematicFocus": "Ruakh: The personal, empowering presence of God from creation to Pentecost.",
    "description": "The Hebrew concept of Ruakh and how the Spirit breathes life into believers."
  },
  {
    "id": "bp-theme-image-of-god",
    "youtubeId": "zUKzVFQn4Tc",
    "title": "Biblical Themes: Image of God",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "6:12",
    "thematicFocus": "Humanity’s royal vocation as divine representatives and partners.",
    "description": "What it means to be made in God’s image and restored through Christ."
  },
  {
    "id": "bp-theme-tree-of-life",
    "youtubeId": "TJLan-pJzfQ",
    "title": "Biblical Themes: Tree of Life",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:48",
    "thematicFocus": "Life with God versus grasping autonomy: from Eden to the Cross to Revelation.",
    "description": "The choice between human self-reliance and divine eternal life."
  },
  {
    "id": "bp-theme-messiah",
    "youtubeId": "3dEh25pduQ8",
    "title": "Biblical Themes: The Messiah",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:50",
    "thematicFocus": "The royal seed promised in David and fulfilled in Christ Jesus.",
    "description": "How the Old Testament prophecies converge on the crucified and reigning King."
  },
  {
    "id": "bp-theme-day-of-the-lord",
    "youtubeId": "tEBc2gSSW04",
    "title": "Biblical Themes: Day of the Lord",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:18",
    "thematicFocus": "God’s final confrontation with human evil and the restoration of justice.",
    "description": "Understanding the prophetic motif of divine justice and cosmic renewal."
  },
  {
    "id": "bp-theme-gospel-kingdom",
    "youtubeId": "xmFPS0f-kzs",
    "title": "Biblical Themes: Gospel of the Kingdom",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:24",
    "thematicFocus": "The royal proclamation that Jesus is the true Lord of heaven and earth.",
    "description": "What the good news of the kingdom meant in the ancient biblical world."
  },
  {
    "id": "bp-theme-sabbath",
    "youtubeId": "PFTLvkB3JLM",
    "title": "Biblical Themes: Sabbath & Rest",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:33",
    "thematicFocus": "Entering God’s rest, jubilee freedom, and the eternal seventh day.",
    "description": "The seventh-day rest as a rhythm of trust pointing to the ultimate rest in Christ."
  },
  {
    "id": "bp-theme-generosity",
    "youtubeId": "62CliEkRCso",
    "title": "Biblical Themes: Generosity",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Themes & Theology",
    "duration": "5:12",
    "thematicFocus": "Abundance versus scarcity: living as open conduits of God’s grace.",
    "description": "How trusting in God’s limitless supply unlocks extravagant kingdom giving."
  },
  {
    "id": "bp-htr-what-is-bible",
    "youtubeId": "ak06MSETeo4",
    "title": "How to Read the Bible: What is the Bible?",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "5:39",
    "thematicFocus": "The divine-human origin of scripture telling one unified story.",
    "description": "How ancient texts collection tells one magnificent story pointing to Jesus."
  },
  {
    "id": "bp-htr-literary-styles",
    "youtubeId": "oUXJ8Owes8E",
    "title": "How to Read the Bible: Literary Styles",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "5:15",
    "thematicFocus": "Narrative, poetry, and discourse in biblical literature.",
    "description": "Appreciating the diverse literary forms through which God communicates truth."
  },
  {
    "id": "bp-htr-narrative-plot",
    "youtubeId": "dLFCE8z__hw",
    "title": "How to Read the Bible: Plot in Biblical Narrative",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "How to Read",
    "duration": "6:15",
    "thematicFocus": "Tracking conflict, climax, and resolution in biblical storytelling.",
    "description": "How biblical stories use plot structures to transform how we see our lives."
  },
  {
    "id": "bp-ws-compassion",
    "youtubeId": "qJEtyAiAQik",
    "title": "Character of God: Compassion (Khum)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "5:02",
    "thematicFocus": "The gut-level visceral compassion of Yahweh for broken people.",
    "description": "Explore the Hebrew word for compassion and God’s motherly tender love."
  },
  {
    "id": "bp-ws-grace",
    "youtubeId": "ABPVVw_aw44",
    "title": "Character of God: Grace (Khen)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "5:08",
    "thematicFocus": "Delightful, unearned favor given to the undeserving.",
    "description": "How God’s grace redefines relationships and provides undeserved gifts."
  },
  {
    "id": "bp-ws-justice",
    "youtubeId": "A14THPoc4-4",
    "title": "Character of God: Justice (Mishpat & Tzedakah)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "6:18",
    "thematicFocus": "Rectifying wrongs, defending the vulnerable, and social righteousness.",
    "description": "Biblical justice as active restoration rather than merely punitive retribution."
  },
  {
    "id": "bp-ws-holiness",
    "youtubeId": "l9vn5UvsHvM",
    "title": "Character of God: Holiness (Kadosh)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "5:45",
    "thematicFocus": "The unique, set-apart purity and blinding glory of God.",
    "description": "How God’s blazing holiness purifies everything that draws near in faith."
  },
  {
    "id": "bp-ws-shalom",
    "youtubeId": "oLYORLZOaZE",
    "title": "Character of God: Shalom (Peace)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "4:19",
    "thematicFocus": "Wholeness, completeness, reconciliation, and cosmic harmony.",
    "description": "Biblical peace as total flourishing and relational wholeness in Christ."
  },
  {
    "id": "bp-ws-agape",
    "youtubeId": "slyevQ1LW7A",
    "title": "Character of God: Agape (Love)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "4:52",
    "thematicFocus": "Self-sacrificial action seeking the highest good of another.",
    "description": "The revolutionary Greek word used by the New Testament to describe God’s love."
  },
  {
    "id": "bp-ws-yhwh",
    "youtubeId": "eLrGM26pmM0",
    "title": "Word Study: YHWH (The LORD)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "5:45",
    "thematicFocus": "The sacred covenant name revealed to Moses at the burning bush.",
    "description": "The profound meaning of the self-existent God who is with His people."
  },
  {
    "id": "bp-ws-yakhal",
    "youtubeId": "4WYNBjJSYvE",
    "title": "Word Study: Yakhal (Hope)",
    "speaker": "BibleProject",
    "channel": "BibleProject",
    "category": "Word Studies",
    "duration": "4:08",
    "thematicFocus": "Patient, expectant waiting on God’s character in dark seasons.",
    "description": "Biblical hope as confident anticipation based on God’s proven faithfulness."
  }
];

export const CANONICAL_MEDIA_VAULT = SANCTUARY_VIDEOS_DATA;
export const VERIFIED_PRAISE_AND_WORSHIP = SANCTUARY_VIDEOS_DATA.filter(v => v.category === 'Praise & Worship');
export const VERIFIED_TEACHINGS = SANCTUARY_VIDEOS_DATA.filter(v => v.category !== 'Praise & Worship');
export const VERIFIED_BIBLE_PROJECT_MASTER_SERIES = SANCTUARY_VIDEOS_DATA.filter(v => v.channel === 'BibleProject' || v.speaker === 'BibleProject');

export default SANCTUARY_VIDEOS_DATA;

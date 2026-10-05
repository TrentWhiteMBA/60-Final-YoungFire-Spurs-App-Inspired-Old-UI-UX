export interface BibleBook {
  id: string;
  name: string;
  testament: "OT" | "NT";
  totalChapters: number;
  order?: number;
  section?: string;
  division?: string;
  purpose?: string;
}

export type CanonCategoryFilter =
  | 'All 66 Books'
  | 'Old Testament'
  | 'New Testament'
  | 'Torah / Law'
  | 'History'
  | 'Wisdom & Poetry'
  | 'Prophets'
  | 'Gospels & Acts'
  | 'Epistles';

export const CANON_CATEGORY_FILTERS: CanonCategoryFilter[] = [
  'All 66 Books',
  'Old Testament',
  'New Testament',
  'Torah / Law',
  'History',
  'Wisdom & Poetry',
  'Prophets',
  'Gospels & Acts',
  'Epistles'
];

export const BIBLE_BOOKS: BibleBook[] = [
  // Pentateuch / Law (5)
  {
    "id": "GEN",
    "name": "Genesis",
    "testament": "OT",
    "totalChapters": 50,
    "order": 1,
    "section": "Pentateuch / Law",
    "division": "Pentateuch / Law",
    "purpose": "Chronicles creation, the fall of humanity, and the origin of God's covenant with Abraham and his descendants."
  },
  {
    "id": "EXO",
    "name": "Exodus",
    "testament": "OT",
    "totalChapters": 40,
    "order": 2,
    "section": "Pentateuch / Law",
    "division": "Pentateuch / Law",
    "purpose": "Records Israel's miraculous deliverance from Egyptian slavery, the giving of the Law at Mount Sinai, and the establishment of the Tabernacle."
  },
  {
    "id": "LEV",
    "name": "Leviticus",
    "testament": "OT",
    "totalChapters": 27,
    "order": 3,
    "section": "Pentateuch / Law",
    "division": "Pentateuch / Law",
    "purpose": "Outlines the holiness code, sacrificial offerings, and priestly duties required to dwell in communion with a holy God."
  },
  {
    "id": "NUM",
    "name": "Numbers",
    "testament": "OT",
    "totalChapters": 36,
    "order": 4,
    "section": "Pentateuch / Law",
    "division": "Pentateuch / Law",
    "purpose": "Details the census and 40-year wilderness wanderings of Israel due to unbelief, showcasing God's persistent covenant faithfulness."
  },
  {
    "id": "DEU",
    "name": "Deuteronomy",
    "testament": "OT",
    "totalChapters": 34,
    "order": 5,
    "section": "Pentateuch / Law",
    "division": "Pentateuch / Law",
    "purpose": "Moses' farewell discourses to the new generation on the plains of Moab, reiterating the Law and the choice between life and death."
  },
  // Historical Books (12)
  {
    "id": "JOS",
    "name": "Joshua",
    "testament": "OT",
    "totalChapters": 24,
    "order": 6,
    "section": "Historical Books",
    "division": "Historical Books",
    "purpose": "Narrates the military conquest, division, and settlement of the Promised Land under Joshua's godly leadership."
  },
  {
    "id": "JDG",
    "name": "Judges",
    "testament": "OT",
    "totalChapters": 21,
    "order": 7,
    "section": "Historical Books",
    "division": "Historical Books",
    "purpose": "Depicts the cyclical spiral of Israel's apostasy, oppression, repentance, and deliverance through charismatic regional judges."
  },
  {
    "id": "RUT",
    "name": "Ruth",
    "testament": "OT",
    "totalChapters": 4,
    "order": 8,
    "section": "Historical Books",
    "division": "Historical Books",
    "purpose": "A story of redemptive love and covenant loyalty (hesed) foreshadowing the kinsman-redeemer and the lineage of King David and Christ."
  },
  {
    "id": "1SA",
    "name": "1 Samuel",
    "testament": "OT",
    "totalChapters": 31,
    "order": 9,
    "section": "Historical Books",
    "division": "Historical Books",
    "purpose": "Chronicles the transition from the era of the judges to the monarchy, highlighting Samuel, King Saul's tragic reign, and the rise of David."
  },
  {
    "id": "2SA",
    "name": "2 Samuel",
    "testament": "OT",
    "totalChapters": 24,
    "order": 10,
    "section": "Historical Books",
    "division": "Historical Books",
    "purpose": "Records the sovereign triumphs, tragic sins, and domestic turmoil of King David's 40-year reign over united Israel."
  },
  {
    "id": "1KI",
    "name": "1 Kings",
    "testament": "OT",
    "totalChapters": 22,
    "order": 11,
    "section": "Historical Books",
    "division": "Historical Books",
    "purpose": "Details the golden age under King Solomon, the construction of the Temple, and the tragic fracturing of the kingdom into Israel and Judah."
  },
  {
    "id": "2KI",
    "name": "2 Kings",
    "testament": "OT",
    "totalChapters": 25,
    "order": 12,
    "section": "Historical Books",
    "division": "Historical Books",
    "purpose": "Recounts the parallel histories and eventual military exiles of the divided kingdoms (Israel to Assyria, Judah to Babylon)."
  },
  {
    "id": "1CH",
    "name": "1 Chronicles",
    "testament": "OT",
    "totalChapters": 29,
    "order": 13,
    "section": "Historical Books",
    "division": "Historical Books",
    "purpose": "Priestly retelling of Israel's history emphasizing David's royal lineage, temple worship preparations, and covenant worship."
  },
  {
    "id": "2CH",
    "name": "2 Chronicles",
    "testament": "OT",
    "totalChapters": 36,
    "order": 14,
    "section": "Historical Books",
    "division": "Historical Books",
    "purpose": "Chronicles the reigns of the Davidic kings of Judah, focusing on moments of revival, obedience, and the Babylonian captivity."
  },
  {
    "id": "EZR",
    "name": "Ezra",
    "testament": "OT",
    "totalChapters": 10,
    "order": 15,
    "section": "Historical Books",
    "division": "Historical Books",
    "purpose": "Documents the post-exilic return of the Jewish remnant from Babylon, the rebuilding of the second Temple, and the restoration of the Law."
  },
  {
    "id": "NEH",
    "name": "Nehemiah",
    "testament": "OT",
    "totalChapters": 13,
    "order": 16,
    "section": "Historical Books",
    "division": "Historical Books",
    "purpose": "Records the post-exilic rebuilding of Jerusalem's ruined walls in 52 days and the moral reform of the restored community."
  },
  {
    "id": "EST",
    "name": "Esther",
    "testament": "OT",
    "totalChapters": 10,
    "order": 17,
    "section": "Historical Books",
    "division": "Historical Books",
    "purpose": "Illustrates God's silent, providential protection of the Jewish diaspora in Persia from genocide through Queen Esther and Mordecai."
  },
  // Wisdom & Poetry (5)
  {
    "id": "JOB",
    "name": "Job",
    "testament": "OT",
    "totalChapters": 42,
    "order": 18,
    "section": "Wisdom & Poetry",
    "division": "Wisdom & Poetry",
    "purpose": "Examines the mystery of innocent human suffering, cosmic warfare, and divine sovereignty through philosophical dialogues."
  },
  {
    "id": "PSA",
    "name": "Psalms",
    "testament": "OT",
    "totalChapters": 150,
    "order": 19,
    "section": "Wisdom & Poetry",
    "division": "Wisdom & Poetry",
    "purpose": "The inspired prayer book and hymnal of ancient Israel, expressing the full spectrum of praise, lament, and messianic hope."
  },
  {
    "id": "PRO",
    "name": "Proverbs",
    "testament": "OT",
    "totalChapters": 31,
    "order": 20,
    "section": "Wisdom & Poetry",
    "division": "Wisdom & Poetry",
    "purpose": "A collection of divinely inspired aphorisms and practical wisdom for cultivating the fear of the Lord, righteousness, and prudence."
  },
  {
    "id": "ECC",
    "name": "Ecclesiastes",
    "testament": "OT",
    "totalChapters": 12,
    "order": 21,
    "section": "Wisdom & Poetry",
    "division": "Wisdom & Poetry",
    "purpose": "A philosophical exploration of the futility of life \"under the sun\" apart from the fear of God and keeping His commandments."
  },
  {
    "id": "SNG",
    "name": "Song of Solomon",
    "testament": "OT",
    "totalChapters": 8,
    "order": 22,
    "section": "Wisdom & Poetry",
    "division": "Wisdom & Poetry",
    "purpose": "An allegorical and lyrical celebration of romantic love, marital fidelity, and intimacy reflecting Christ's love for His bride."
  },
  // Major Prophets (5)
  {
    "id": "ISA",
    "name": "Isaiah",
    "testament": "OT",
    "totalChapters": 66,
    "order": 23,
    "section": "Major Prophets",
    "division": "Major Prophets",
    "purpose": "The \"Fifth Gospel\" prophesying judgment, restoration, the virgin-born Immanuel, and the redemptive suffering of the Lord's Servant."
  },
  {
    "id": "JER",
    "name": "Jeremiah",
    "testament": "OT",
    "totalChapters": 52,
    "order": 24,
    "section": "Major Prophets",
    "division": "Major Prophets",
    "purpose": "The weeping prophet's impassioned warnings to Judah regarding the Babylonian exile and the promise of a future New Covenant."
  },
  {
    "id": "LAM",
    "name": "Lamentations",
    "testament": "OT",
    "totalChapters": 5,
    "order": 25,
    "section": "Major Prophets",
    "division": "Major Prophets",
    "purpose": "Five acrostic funeral dirges grieving the destruction of Jerusalem and the Temple, anchored in God's unfailing morning mercies."
  },
  {
    "id": "EZK",
    "name": "Ezekiel",
    "testament": "OT",
    "totalChapters": 48,
    "order": 26,
    "section": "Major Prophets",
    "division": "Major Prophets",
    "purpose": "Apocalyptic visions, street theater prophecies, and promises of spiritual regeneration given to Jewish exiles by the river Chebar."
  },
  {
    "id": "DAN",
    "name": "Daniel",
    "testament": "OT",
    "totalChapters": 12,
    "order": 27,
    "section": "Major Prophets",
    "division": "Major Prophets",
    "purpose": "Chronicles the sovereign rule of God over Gentile world empires, faithfulness in exile, and eschatological visions of the Son of Man."
  },
  // Minor Prophets (12)
  {
    "id": "HOS",
    "name": "Hosea",
    "testament": "OT",
    "totalChapters": 14,
    "order": 28,
    "section": "Minor Prophets",
    "division": "Minor Prophets",
    "purpose": "A living prophetic drama of marriage to an unfaithful wife illustrating God's unyielding, jealous love for apostate Israel."
  },
  {
    "id": "JOL",
    "name": "Joel",
    "testament": "OT",
    "totalChapters": 3,
    "order": 29,
    "section": "Minor Prophets",
    "division": "Minor Prophets",
    "purpose": "Prophesies the devastating \"Day of the Lord\" through a locust plague, calling for national repentance and promising the outpouring of the Holy Spirit."
  },
  {
    "id": "AMO",
    "name": "Amos",
    "testament": "OT",
    "totalChapters": 9,
    "order": 30,
    "section": "Minor Prophets",
    "division": "Minor Prophets",
    "purpose": "A shepherd's uncompromising declaration of divine justice against social oppression and religious hypocrisy in the Northern Kingdom."
  },
  {
    "id": "OBA",
    "name": "Obadiah",
    "testament": "OT",
    "totalChapters": 1,
    "order": 31,
    "section": "Minor Prophets",
    "division": "Minor Prophets",
    "purpose": "A brief prophecy pronouncing divine judgment against Edom for arrogance and gloating over Jerusalem's fall."
  },
  {
    "id": "JON",
    "name": "Jonah",
    "testament": "OT",
    "totalChapters": 4,
    "order": 32,
    "section": "Minor Prophets",
    "division": "Minor Prophets",
    "purpose": "A reluctant prophet's mission to Nineveh revealing God's sovereign mercy toward Gentile nations and exposing human self-righteousness."
  },
  {
    "id": "MIC",
    "name": "Micah",
    "testament": "OT",
    "totalChapters": 7,
    "order": 33,
    "section": "Minor Prophets",
    "division": "Minor Prophets",
    "purpose": "Preaches against civic injustice and corrupt leadership while announcing the exact birthplace of the coming Messiah in Bethlehem."
  },
  {
    "id": "NAM",
    "name": "Nahum",
    "testament": "OT",
    "totalChapters": 3,
    "order": 34,
    "section": "Minor Prophets",
    "division": "Minor Prophets",
    "purpose": "Pronounces the irreversible judgment and complete downfall of Nineveh, the brutal capital of the Assyrian Empire."
  },
  {
    "id": "HAB",
    "name": "Habakkuk",
    "testament": "OT",
    "totalChapters": 3,
    "order": 35,
    "section": "Minor Prophets",
    "division": "Minor Prophets",
    "purpose": "A prophet's honest wrestle with God over the use of wicked Babylon as an instrument of discipline, concluding in triumphant faith."
  },
  {
    "id": "ZEP",
    "name": "Zephaniah",
    "testament": "OT",
    "totalChapters": 3,
    "order": 36,
    "section": "Minor Prophets",
    "division": "Minor Prophets",
    "purpose": "Proclaims the purifying fire of the Day of the Lord against all nations while promising joy and restoration for a humble remnant."
  },
  {
    "id": "HAG",
    "name": "Haggai",
    "testament": "OT",
    "totalChapters": 2,
    "order": 37,
    "section": "Minor Prophets",
    "division": "Minor Prophets",
    "purpose": "Exhorts the returned post-exilic remnant to stop neglecting the Lord's house and rebuild the second Temple."
  },
  {
    "id": "ZEC",
    "name": "Zechariah",
    "testament": "OT",
    "totalChapters": 14,
    "order": 38,
    "section": "Minor Prophets",
    "division": "Minor Prophets",
    "purpose": "Apocalyptic visions of the coming Priest-King, the pierced Messiah, and the global triumph of Jerusalem to encourage the temple builders."
  },
  {
    "id": "MAL",
    "name": "Malachi",
    "testament": "OT",
    "totalChapters": 4,
    "order": 39,
    "section": "Minor Prophets",
    "division": "Minor Prophets",
    "purpose": "Rebukes post-exilic religious complacency, corrupt priesthood, and marital divorce while promising the forerunner Elijah."
  },
  // Gospels & Acts (5)
  {
    "id": "MAT",
    "name": "Matthew",
    "testament": "NT",
    "totalChapters": 28,
    "order": 40,
    "section": "Gospels & Acts",
    "division": "Gospels & Acts",
    "purpose": "Presents Jesus Christ as the promised Jewish Messiah, King of Israel, and fulfillment of Old Testament covenant prophecies."
  },
  {
    "id": "MRK",
    "name": "Mark",
    "testament": "NT",
    "totalChapters": 16,
    "order": 41,
    "section": "Gospels & Acts",
    "division": "Gospels & Acts",
    "purpose": "Fast-paced Gospel presenting Jesus as the suffering Servant-King who acts with immediate divine authority and gives His life as a ransom."
  },
  {
    "id": "LUK",
    "name": "Luke",
    "testament": "NT",
    "totalChapters": 24,
    "order": 42,
    "section": "Gospels & Acts",
    "division": "Gospels & Acts",
    "purpose": "Comprehensive, historical account presenting Jesus as the compassionate Son of Man who came to seek and save the lost and marginalized."
  },
  {
    "id": "JHN",
    "name": "John",
    "testament": "NT",
    "totalChapters": 21,
    "order": 43,
    "section": "Gospels & Acts",
    "division": "Gospels & Acts",
    "purpose": "The theological Gospel portraying Jesus as the eternal Word made flesh, the \"I AM,\" and the only source of eternal life."
  },
  {
    "id": "ACT",
    "name": "Acts",
    "testament": "NT",
    "totalChapters": 28,
    "order": 44,
    "section": "Gospels & Acts",
    "division": "Gospels & Acts",
    "purpose": "The thrilling history of the birth and rapid expansion of the early Church through the power of the Holy Spirit from Jerusalem to Rome."
  },
  // Pauline Epistles (13)
  {
    "id": "ROM",
    "name": "Romans",
    "testament": "NT",
    "totalChapters": 16,
    "order": 45,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "Paul's masterwork on the theology of salvation, justification by faith alone, the righteousness of God, and Christian living."
  },
  {
    "id": "1CO",
    "name": "1 Corinthians",
    "testament": "NT",
    "totalChapters": 16,
    "order": 46,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "Pastoral correction addressing church division, sexual immorality, spiritual gifts, order in worship, and the resurrection."
  },
  {
    "id": "2CO",
    "name": "2 Corinthians",
    "testament": "NT",
    "totalChapters": 13,
    "order": 47,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "Paul's passionate defense of his scriptural authority, the ministry of reconciliation, and strength perfected in human weakness."
  },
  {
    "id": "GAL",
    "name": "Galatians",
    "testament": "NT",
    "totalChapters": 6,
    "order": 48,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "A fierce defense of the Gospel of pure grace against legalism, declaring that believers are justified by faith, not works of the Law."
  },
  {
    "id": "EPH",
    "name": "Ephesians",
    "testament": "NT",
    "totalChapters": 6,
    "order": 49,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "Unveils the cosmic mystery of the Church as the Body of Christ, spiritual blessings in heavenly places, and the whole armor of God."
  },
  {
    "id": "PHP",
    "name": "Philippians",
    "testament": "NT",
    "totalChapters": 4,
    "order": 50,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "A joyous prison epistle encouraging unity, humility modeled after Christ, and rejoicing in the Lord regardless of circumstances."
  },
  {
    "id": "COL",
    "name": "Colossians",
    "testament": "NT",
    "totalChapters": 4,
    "order": 51,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "Proclaims the supreme preeminence of Jesus Christ over all creation, the church, and unseen spiritual powers against early gnostic heresy."
  },
  {
    "id": "1TH",
    "name": "1 Thessalonians",
    "testament": "NT",
    "totalChapters": 5,
    "order": 52,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "Warm pastoral encouragement on holy living, brotherly love, and the imminent, glorious return of Jesus Christ for His saints."
  },
  {
    "id": "2TH",
    "name": "2 Thessalonians",
    "testament": "NT",
    "totalChapters": 3,
    "order": 53,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "Clarifies end-times deception, the revelation of the man of lawlessness, and the call to steadfast labor before the Day of the Lord."
  },
  {
    "id": "1TI",
    "name": "1 Timothy",
    "testament": "NT",
    "totalChapters": 6,
    "order": 54,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "Practical instructions to young pastor Timothy on sound doctrine, church leadership qualifications, order, and pastoral care."
  },
  {
    "id": "2TI",
    "name": "2 Timothy",
    "testament": "NT",
    "totalChapters": 4,
    "order": 55,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "Paul's moving final letter from Roman death row urging Timothy to guard the deposit of faith, preach the Word, and finish the race."
  },
  {
    "id": "TIT",
    "name": "Titus",
    "testament": "NT",
    "totalChapters": 3,
    "order": 56,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "Guidelines for organizing the churches in Crete, appointing sound elders, and preaching doctrine that produces good works."
  },
  {
    "id": "PHM",
    "name": "Philemon",
    "testament": "NT",
    "totalChapters": 1,
    "order": 57,
    "section": "Pauline Epistles",
    "division": "Pauline Epistles",
    "purpose": "A masterclass in Christian grace and reconciliation, pleading for the runaway slave Onesimus to be received as a beloved brother."
  },
  // General Epistles & Revelation (9)
  {
    "id": "HEB",
    "name": "Hebrews",
    "testament": "NT",
    "totalChapters": 13,
    "order": 58,
    "section": "General Epistles & Revelation",
    "division": "General Epistles & Revelation",
    "purpose": "Majestic treatise demonstrating the absolute superiority of Jesus Christ and the New Covenant over the Levitical sacrificial system."
  },
  {
    "id": "JAS",
    "name": "James",
    "testament": "NT",
    "totalChapters": 5,
    "order": 59,
    "section": "General Epistles & Revelation",
    "division": "General Epistles & Revelation",
    "purpose": "Practical, uncompromising manual on living faith, demonstrating that true saving faith produces tangible good works, endurance, and tongue control."
  },
  {
    "id": "1PE",
    "name": "1 Peter",
    "testament": "NT",
    "totalChapters": 5,
    "order": 60,
    "section": "General Epistles & Revelation",
    "division": "General Epistles & Revelation",
    "purpose": "Comfort and pastoral counsel for believers facing fiery persecution, anchoring their hope in their heavenly inheritance."
  },
  {
    "id": "2PE",
    "name": "2 Peter",
    "testament": "NT",
    "totalChapters": 3,
    "order": 61,
    "section": "General Epistles & Revelation",
    "division": "General Epistles & Revelation",
    "purpose": "Final scriptural warning against false teachers, scoffers, and apostasy, exhorting believers to grow in the grace and knowledge of Christ."
  },
  {
    "id": "1JN",
    "name": "1 John",
    "testament": "NT",
    "totalChapters": 5,
    "order": 62,
    "section": "General Epistles & Revelation",
    "division": "General Epistles & Revelation",
    "purpose": "Pastoral letter emphasizing fellowship with God, walking in the light, authentic brotherly love, and certainty of eternal salvation."
  },
  {
    "id": "2JN",
    "name": "2 John",
    "testament": "NT",
    "totalChapters": 1,
    "order": 63,
    "section": "General Epistles & Revelation",
    "division": "General Epistles & Revelation",
    "purpose": "Urgent warning to a local congregation to walk in love while guarding against deceivers who deny the incarnation of Christ."
  },
  {
    "id": "3JN",
    "name": "3 John",
    "testament": "NT",
    "totalChapters": 1,
    "order": 64,
    "section": "General Epistles & Revelation",
    "division": "General Epistles & Revelation",
    "purpose": "Commends Gaius for hospitality to traveling missionaries and warns against the authoritarian, prideful leadership of Diotrephes."
  },
  {
    "id": "JUD",
    "name": "Jude",
    "testament": "NT",
    "totalChapters": 1,
    "order": 65,
    "section": "General Epistles & Revelation",
    "division": "General Epistles & Revelation",
    "purpose": "Fiery exhortation to earnestly contend for the faith once delivered to the saints against antinomian heretics who turn grace into license."
  },
  {
    "id": "REV",
    "name": "Revelation",
    "testament": "NT",
    "totalChapters": 22,
    "order": 66,
    "section": "General Epistles & Revelation",
    "division": "General Epistles & Revelation",
    "purpose": "The climactic apocalyptic disclosure of Jesus Christ triumphant, the defeat of Satan and Babylon, the final judgment, and the New Jerusalem."
  }
];

export function filterBibleBooksByCategory(
  books: BibleBook[],
  category: CanonCategoryFilter | string
): BibleBook[] {
  const cat = category.trim();
  if (cat === 'All 66 Books' || cat === 'All' || cat === 'ALL') {
    return books;
  }
  if (cat === 'Old Testament' || cat === 'OT') {
    return books.filter(b => b.testament === 'OT'); // 39 books
  }
  if (cat === 'New Testament' || cat === 'NT') {
    return books.filter(b => b.testament === 'NT'); // 27 books
  }
  if (cat === 'Torah / Law' || cat === 'Pentateuch / Law' || cat === 'Pentateuch') {
    return books.filter(b => b.section === 'Pentateuch / Law' || (b.order && b.order >= 1 && b.order <= 5)); // 5 books
  }
  if (cat === 'History' || cat === 'Historical Books' || cat === 'Historical') {
    return books.filter(b => b.section === 'Historical Books' || (b.order && b.order >= 6 && b.order <= 17)); // 12 books
  }
  if (cat === 'Wisdom & Poetry' || cat === 'Poetry & Wisdom') {
    return books.filter(b => b.section === 'Wisdom & Poetry' || (b.order && b.order >= 18 && b.order <= 22)); // 5 books
  }
  if (cat === 'Prophets' || cat === 'Major Prophets' || cat === 'Minor Prophets') {
    if (cat === 'Major Prophets') return books.filter(b => b.section === 'Major Prophets');
    if (cat === 'Minor Prophets') return books.filter(b => b.section === 'Minor Prophets');
    return books.filter(
      b => b.section === 'Major Prophets' || b.section === 'Minor Prophets' || (b.order && b.order >= 23 && b.order <= 39)
    ); // 17 books
  }
  if (cat === 'Gospels & Acts') {
    return books.filter(b => b.section === 'Gospels & Acts' || (b.order && b.order >= 40 && b.order <= 44)); // 5 books
  }
  if (cat === 'Epistles') {
    // Combines Pauline (13) and General Epistles (8) = 21 books (orders 45 to 65)
    return books.filter(b => (b.order && b.order >= 45 && b.order <= 65) || (b.section === 'Pauline Epistles' || (b.section === 'General Epistles & Revelation' && b.id !== 'REV')));
  }
  return books.filter(b => b.section === cat || b.division === cat);
}

export function findBibleBook(query: string): BibleBook | undefined {
  if (!query) return undefined;
  const raw = query.trim();
  const q = raw.toLowerCase();

  // 1. Direct ID match
  const byId = BIBLE_BOOKS.find(b => b.id.toLowerCase() === q);
  if (byId) return byId;

  // 2. Direct Name match
  const byName = BIBLE_BOOKS.find(b => b.name.toLowerCase() === q);
  if (byName) return byName;

  // 3. Normalized alias mapping
  const ALIAS_MAP: Record<string, string> = {
    'jam': 'JAS',
    'jas': 'JAS',
    'jhn': 'JHN',
    'joh': 'JHN',
    'mat': 'MAT',
    'matt': 'MAT',
    'mt': 'MAT',
    'mrk': 'MRK',
    'mark': 'MRK',
    'mk': 'MRK',
    'luk': 'LUK',
    'luke': 'LUK',
    'lk': 'LUK',
    'act': 'ACT',
    'acts': 'ACT',
    'rom': 'ROM',
    'ro': 'ROM',
    '1co': '1CO',
    '1cor': '1CO',
    '2co': '2CO',
    '2cor': '2CO',
    'gal': 'GAL',
    'eph': 'EPH',
    'php': 'PHP',
    'phi': 'PHP',
    'phil': 'PHP',
    'col': 'COL',
    '1th': '1TH',
    '1thess': '1TH',
    '2th': '2TH',
    '2thess': '2TH',
    '1ti': '1TI',
    '1tim': '1TI',
    '2ti': '2TI',
    '2tim': '2TI',
    'tit': 'TIT',
    'phm': 'PHM',
    'philem': 'PHM',
    'heb': 'HEB',
    '1pe': '1PE',
    '1pet': '1PE',
    '2pe': '2PE',
    '2pet': '2PE',
    '1jn': '1JN',
    '1john': '1JN',
    '2jn': '2JN',
    '2john': '2JN',
    '3jn': '3JN',
    '3john': '3JN',
    'jud': 'JUD',
    'jude': 'JUD',
    'rev': 'REV',
    'psa': 'PSA',
    'ps': 'PSA',
    'psalm': 'PSA',
    'psalms': 'PSA',
    'pro': 'PRO',
    'prov': 'PRO',
    'proverbs': 'PRO',
    'isa': 'ISA',
    'jer': 'JER',
    'gen': 'GEN',
    'exo': 'EXO',
    'lev': 'LEV',
    'num': 'NUM',
    'deu': 'DEU'
  };

  const aliasKey = q.replace(/[^a-z0-9]/g, '');
  if (ALIAS_MAP[aliasKey]) {
    const targetId = ALIAS_MAP[aliasKey];
    const match = BIBLE_BOOKS.find(b => b.id.toLowerCase() === targetId.toLowerCase());
    if (match) return match;
  }

  // 4. StartsWith on book name or ID
  const byPrefix = BIBLE_BOOKS.find(b =>
    b.name.toLowerCase().startsWith(q) ||
    q.startsWith(b.name.toLowerCase()) ||
    b.id.toLowerCase().startsWith(q)
  );
  if (byPrefix) return byPrefix;

  // 5. Substring match
  return BIBLE_BOOKS.find(b => b.name.toLowerCase().includes(q));
}

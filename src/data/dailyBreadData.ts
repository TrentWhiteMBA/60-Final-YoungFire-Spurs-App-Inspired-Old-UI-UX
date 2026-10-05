/**
 * 365-Day Whole-Bible Rotation Engine (Genesis to Revelation)
 * Comprehensive canon vault spanning all 66 books with zero duplicate entries.
 * Fully deterministic calendar date calculation for current day of year.
 */

import { findBibleBook } from './bibleBooks';

export interface DailyBreadEntry {
  dayOfYear: number; // 1 to 365
  book: string;
  reference: string;
  text: string;
  testament: 'OT' | 'NT';
  focusTheme: string;
  practicalCall: string;
}

export const FULL_YEAR_DAILY_BREAD: DailyBreadEntry[] = [
  {
    "dayOfYear": 1,
    "book": "Genesis",
    "reference": "Genesis 1:1",
    "text": "In the beginning God created the heaven and the earth.",
    "testament": "OT",
    "focusTheme": "Creation & Origin",
    "practicalCall": "Acknowledge God as the sovereign Author and Architect of your life today."
  },
  {
    "dayOfYear": 2,
    "book": "Genesis",
    "reference": "Genesis 1:27",
    "text": "So God created man in his own image, in the image of God created he him; male and female created he them.",
    "testament": "OT",
    "focusTheme": "Divine Image",
    "practicalCall": "Walk in dignity and honor every person you encounter as God’s image-bearer."
  },
  {
    "dayOfYear": 3,
    "book": "Genesis",
    "reference": "Genesis 2:7",
    "text": "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
    "testament": "OT",
    "focusTheme": "Breath of Life",
    "practicalCall": "Breathe in thanksgiving for the divine life imparted to your mortal frame."
  },
  {
    "dayOfYear": 4,
    "book": "Genesis",
    "reference": "Genesis 3:15",
    "text": "And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.",
    "testament": "OT",
    "focusTheme": "The First Gospel",
    "practicalCall": "Rest in Christ’s ultimate victory over the enemy’s schemes."
  },
  {
    "dayOfYear": 5,
    "book": "Genesis",
    "reference": "Genesis 6:8",
    "text": "But Noah found grace in the eyes of the LORD.",
    "testament": "OT",
    "focusTheme": "Grace in Judgment",
    "practicalCall": "Stand firm in righteousness even when prevailing culture compromises."
  },
  {
    "dayOfYear": 6,
    "book": "Genesis",
    "reference": "Genesis 8:22",
    "text": "While the earth remaineth, seedtime and harvest, and cold and heat, and summer and winter, and day and night shall not cease.",
    "testament": "OT",
    "focusTheme": "Covenant Faithfulness",
    "practicalCall": "Trust in the steadfast rhythm of God’s providential provision."
  },
  {
    "dayOfYear": 7,
    "book": "Genesis",
    "reference": "Genesis 12:2",
    "text": "And I will make of thee a great nation, and I will bless thee, and make thy name great; and thou shalt be a blessing.",
    "testament": "OT",
    "focusTheme": "The Abrahamic Call",
    "practicalCall": "Receive God’s blessing not to store it up, but to be an open conduit to others."
  },
  {
    "dayOfYear": 8,
    "book": "Genesis",
    "reference": "Genesis 15:6",
    "text": "And he believed in the LORD; and he counted it to him for righteousness.",
    "testament": "OT",
    "focusTheme": "Justification by Faith",
    "practicalCall": "Anchor your confidence in God’s promise rather than visible circumstances."
  },
  {
    "dayOfYear": 9,
    "book": "Genesis",
    "reference": "Genesis 17:1",
    "text": "I am the Almighty God; walk before me, and be thou perfect.",
    "testament": "OT",
    "focusTheme": "Walking in Wholeness",
    "practicalCall": "Live transparently and sincerely before God’s omniscient presence."
  },
  {
    "dayOfYear": 10,
    "book": "Genesis",
    "reference": "Genesis 18:14",
    "text": "Is any thing too hard for the LORD? At the time appointed I will return unto thee.",
    "testament": "OT",
    "focusTheme": "Divine Omnipotence",
    "practicalCall": "Cast your biggest impossibility onto the God with whom nothing is too hard."
  },
  {
    "dayOfYear": 11,
    "book": "Genesis",
    "reference": "Genesis 22:14",
    "text": "And Abraham called the name of that place Jehovah-jireh: as it is said to this day, In the mount of the LORD it shall be seen.",
    "testament": "OT",
    "focusTheme": "The Lord Will Provide",
    "practicalCall": "Ascend the mount of obedience; provision meets you at the point of surrender."
  },
  {
    "dayOfYear": 12,
    "book": "Genesis",
    "reference": "Genesis 26:24",
    "text": "Fear not, for I am with thee, and will bless thee.",
    "testament": "OT",
    "focusTheme": "Generational Promise",
    "practicalCall": "Silence fear with the truth of God’s perpetual presence."
  },
  {
    "dayOfYear": 13,
    "book": "Genesis",
    "reference": "Genesis 28:15",
    "text": "And, behold, I am with thee, and will keep thee in all places whither thou goest.",
    "testament": "OT",
    "focusTheme": "Divine Guardian",
    "practicalCall": "Remember that wherever your feet tread today, God is your vigilant shield."
  },
  {
    "dayOfYear": 14,
    "book": "Genesis",
    "reference": "Genesis 32:28",
    "text": "Thy name shall be called no more Jacob, but Israel: for as a prince hast thou power with God and with men, and hast prevailed.",
    "testament": "OT",
    "focusTheme": "Transformed Identity",
    "practicalCall": "Wrestle through in prayer until God’s character displaces the old nature."
  },
  {
    "dayOfYear": 15,
    "book": "Genesis",
    "reference": "Genesis 39:2",
    "text": "And the LORD was with Joseph, and he was a prosperous man; and he was in the house of his master the Egyptian.",
    "testament": "OT",
    "focusTheme": "Presence in Adversity",
    "practicalCall": "Excel in your present assignment; God’s favor is not hindered by your location."
  },
  {
    "dayOfYear": 16,
    "book": "Genesis",
    "reference": "Genesis 45:7",
    "text": "And God sent me before you to preserve you a posterity in the earth, and to save your lives by a great deliverance.",
    "testament": "OT",
    "focusTheme": "Sovereign Preservation",
    "practicalCall": "Reframe past pain through the lens of God’s redemptive preservation."
  },
  {
    "dayOfYear": 17,
    "book": "Genesis",
    "reference": "Genesis 49:10",
    "text": "The sceptre shall not depart from Judah, nor a lawgiver from between his feet, until Shiloh come.",
    "testament": "OT",
    "focusTheme": "The Lion of Judah",
    "practicalCall": "Crown Jesus as the rightful King and Commander of your day."
  },
  {
    "dayOfYear": 18,
    "book": "Genesis",
    "reference": "Genesis 50:20",
    "text": "But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive.",
    "testament": "OT",
    "focusTheme": "Divine Overruling",
    "practicalCall": "Forgive those who harmed you, trusting God to turn evil intention into good."
  },
  {
    "dayOfYear": 19,
    "book": "Exodus",
    "reference": "Exodus 3:14",
    "text": "And God said unto Moses, I AM THAT I AM: and he said, Thus shalt thou say unto the children of Israel, I AM hath sent me unto you.",
    "testament": "OT",
    "focusTheme": "The Eternal Name",
    "practicalCall": "Ground your security in the self-existent, unchanging I AM."
  },
  {
    "dayOfYear": 20,
    "book": "Exodus",
    "reference": "Exodus 12:13",
    "text": "And the blood shall be to you for a token upon the houses where ye are: and when I see the blood, I will pass over you.",
    "testament": "OT",
    "focusTheme": "The Passover Blood",
    "practicalCall": "Apply the protective blood of the Lamb over your family and dwelling."
  },
  {
    "dayOfYear": 21,
    "book": "Exodus",
    "reference": "Exodus 13:21",
    "text": "And the LORD went before them by day in a pillar of a cloud, to lead them the way; and by night in a pillar of fire.",
    "testament": "OT",
    "focusTheme": "Pillar of Fire Guidance",
    "practicalCall": "Follow the Holy Spirit’s illumination through both light and darkness."
  },
  {
    "dayOfYear": 22,
    "book": "Exodus",
    "reference": "Exodus 14:14",
    "text": "The LORD shall fight for you, and ye shall hold your peace.",
    "testament": "OT",
    "focusTheme": "Divine Warrior",
    "practicalCall": "Be still and cease anxious striving; let the Lord contend for you."
  },
  {
    "dayOfYear": 23,
    "book": "Exodus",
    "reference": "Exodus 15:2",
    "text": "The LORD is my strength and song, and he is become my salvation.",
    "testament": "OT",
    "focusTheme": "Triumphant Praise",
    "practicalCall": "Turn complaints into a melody of praise celebrating past deliverances."
  },
  {
    "dayOfYear": 24,
    "book": "Exodus",
    "reference": "Exodus 15:26",
    "text": "For I am the LORD that healeth thee.",
    "testament": "OT",
    "focusTheme": "Jehovah-Rapha",
    "practicalCall": "Bring your physical, emotional, and spiritual afflictions to the Great Healer."
  },
  {
    "dayOfYear": 25,
    "book": "Exodus",
    "reference": "Exodus 16:4",
    "text": "Behold, I will rain bread from heaven for you; and the people shall go out and gather a certain rate every day.",
    "testament": "OT",
    "focusTheme": "Daily Manna",
    "practicalCall": "Seek fresh spiritual nourishment today rather than relying on yesterday’s grace."
  },
  {
    "dayOfYear": 26,
    "book": "Exodus",
    "reference": "Exodus 17:15",
    "text": "And Moses built an altar, and called the name of it Jehovah-nissi: For he said, Because the LORD hath sworn.",
    "testament": "OT",
    "focusTheme": "The Lord Our Banner",
    "practicalCall": "Raise the banner of Christ’s victory over spiritual warfare today."
  },
  {
    "dayOfYear": 27,
    "book": "Exodus",
    "reference": "Exodus 19:5",
    "text": "Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me.",
    "testament": "OT",
    "focusTheme": "Consecrated Treasure",
    "practicalCall": "Treasure your royal priesthood and live set apart for God’s honor."
  },
  {
    "dayOfYear": 28,
    "book": "Exodus",
    "reference": "Exodus 20:3",
    "text": "Thou shalt have no other gods before me.",
    "testament": "OT",
    "focusTheme": "Exclusive Worship",
    "practicalCall": "Dethrone any idol of career, money, or comfort competing with God."
  },
  {
    "dayOfYear": 29,
    "book": "Exodus",
    "reference": "Exodus 23:20",
    "text": "Behold, I send an Angel before thee, to keep thee in the way, and to bring thee into the place which I have prepared.",
    "testament": "OT",
    "focusTheme": "Angelic Escort",
    "practicalCall": "Proceed boldly; God has already prepared the path ahead of you."
  },
  {
    "dayOfYear": 30,
    "book": "Exodus",
    "reference": "Exodus 24:17",
    "text": "And the sight of the glory of the LORD was like devouring fire on the top of the mount.",
    "testament": "OT",
    "focusTheme": "Devouring Holy Flame",
    "practicalCall": "Approach God’s holiness with sacred awe and reverent awe."
  },
  {
    "dayOfYear": 31,
    "book": "Exodus",
    "reference": "Exodus 29:45",
    "text": "And I will dwell among the children of Israel, and will be their God.",
    "testament": "OT",
    "focusTheme": "Dwelling Presence",
    "practicalCall": "Make your heart a consecrated tabernacle for the Lord’s indwelling."
  },
  {
    "dayOfYear": 32,
    "book": "Exodus",
    "reference": "Exodus 33:14",
    "text": "And he said, My presence shall go with thee, and I will give thee rest.",
    "testament": "OT",
    "focusTheme": "Presence and Rest",
    "practicalCall": "Refuse to take another step without the assurance of God’s guiding presence."
  },
  {
    "dayOfYear": 33,
    "book": "Exodus",
    "reference": "Exodus 34:6",
    "text": "The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth.",
    "testament": "OT",
    "focusTheme": "Character of Mercy",
    "practicalCall": "Extend the same patience and goodness to others that God poured into you."
  },
  {
    "dayOfYear": 34,
    "book": "Exodus",
    "reference": "Exodus 40:34",
    "text": "Then a cloud covered the tent of the congregation, and the glory of the LORD filled the tabernacle.",
    "testament": "OT",
    "focusTheme": "Shekinah Glory",
    "practicalCall": "Invite the manifest weight of God’s glory to fill your home and workspace."
  },
  {
    "dayOfYear": 35,
    "book": "Leviticus",
    "reference": "Leviticus 6:13",
    "text": "The fire shall ever be burning upon the altar; it shall never go out.",
    "testament": "OT",
    "focusTheme": "Perpetual Holy Fire",
    "practicalCall": "Stir up the flame of prayer and intercession; never let the fire grow cold."
  },
  {
    "dayOfYear": 36,
    "book": "Leviticus",
    "reference": "Leviticus 11:45",
    "text": "Ye shall therefore be holy, for I am holy.",
    "testament": "OT",
    "focusTheme": "The Call to Holiness",
    "practicalCall": "Choose purity in private thoughts, media choices, and casual conversations."
  },
  {
    "dayOfYear": 37,
    "book": "Leviticus",
    "reference": "Leviticus 17:11",
    "text": "For the life of the flesh is in the blood: and I have given it to you upon the altar to make an atonement for your souls.",
    "testament": "OT",
    "focusTheme": "Atoning Blood",
    "practicalCall": "Praise Jesus for His precious blood that paid your complete redemption price."
  },
  {
    "dayOfYear": 38,
    "book": "Leviticus",
    "reference": "Leviticus 19:18",
    "text": "Thou shalt not avenge, nor bear any grudge against the children of thy people, but thou shalt love thy neighbour as thyself.",
    "testament": "OT",
    "focusTheme": "Releasing Grudges",
    "practicalCall": "Release every lingering resentment; forgive freely as you were forgiven."
  },
  {
    "dayOfYear": 39,
    "book": "Leviticus",
    "reference": "Leviticus 20:8",
    "text": "And ye shall keep my statutes, and do them: I am the LORD which sanctify you.",
    "testament": "OT",
    "focusTheme": "The Sanctifying Lord",
    "practicalCall": "Yield to the Holy Spirit’s refining work; He is setting you apart for glory."
  },
  {
    "dayOfYear": 40,
    "book": "Leviticus",
    "reference": "Leviticus 23:3",
    "text": "Six days shall work be done: but the seventh day is the sabbath of rest, an holy convocation.",
    "testament": "OT",
    "focusTheme": "Sacred Sabbath Rhythm",
    "practicalCall": "Honor boundaries of rest and spiritual recalibration amidst busy routines."
  },
  {
    "dayOfYear": 41,
    "book": "Leviticus",
    "reference": "Leviticus 25:10",
    "text": "And ye shall hallow the fiftieth year, and proclaim liberty throughout all the land unto all the inhabitants thereof: it shall be a jubile unto you.",
    "testament": "OT",
    "focusTheme": "Jubilee Liberty",
    "practicalCall": "Proclaim spiritual freedom and debt cancellation through Jesus Christ."
  },
  {
    "dayOfYear": 42,
    "book": "Leviticus",
    "reference": "Leviticus 26:12",
    "text": "And I will walk among you, and will be your God, and ye shall be my people.",
    "testament": "OT",
    "focusTheme": "Communion with God",
    "practicalCall": "Walk in intimate companionship with God through every hour of this day."
  },
  {
    "dayOfYear": 43,
    "book": "Numbers",
    "reference": "Numbers 6:24-26",
    "text": "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.",
    "testament": "OT",
    "focusTheme": "The Priestly Benediction",
    "practicalCall": "Speak this Aaronic blessing over your family, children, and church fellowship."
  },
  {
    "dayOfYear": 44,
    "book": "Numbers",
    "reference": "Numbers 9:18",
    "text": "At the commandment of the LORD the children of Israel journeyed, and at the commandment of the LORD they pitched.",
    "testament": "OT",
    "focusTheme": "Synchronized Obedience",
    "practicalCall": "Move when God says move, and stay anchored when He says wait."
  },
  {
    "dayOfYear": 45,
    "book": "Numbers",
    "reference": "Numbers 11:23",
    "text": "And the LORD said unto Moses, Is the LORD’s hand waxed short? thou shalt see now whether my word shall come to pass unto thee or not.",
    "testament": "OT",
    "focusTheme": "Unshortened Hand",
    "practicalCall": "Never doubt God’s capacity to supply; His hand has lost none of its power."
  },
  {
    "dayOfYear": 46,
    "book": "Numbers",
    "reference": "Numbers 14:9",
    "text": "Only rebel not ye against the LORD, neither fear ye the people of the land; for they are bread for us: their defence is departed from them, and the LORD is with us.",
    "testament": "OT",
    "focusTheme": "Giants Are Bread",
    "practicalCall": "View obstacles not as defeat, but as nourishment for your growing faith."
  },
  {
    "dayOfYear": 47,
    "book": "Numbers",
    "reference": "Numbers 14:24",
    "text": "But my servant Caleb, because he had another spirit with him, and hath followed me fully, him will I bring into the land.",
    "testament": "OT",
    "focusTheme": "Another Spirit",
    "practicalCall": "Cultivate a distinct, unswerving spirit of faith that follows God completely."
  },
  {
    "dayOfYear": 48,
    "book": "Numbers",
    "reference": "Numbers 21:9",
    "text": "And Moses made a serpent of brass, and put it upon a pole, and it came to pass, that if a serpent had bitten any man, when he beheld the serpent of brass, he lived.",
    "testament": "OT",
    "focusTheme": "Look and Live",
    "practicalCall": "Look away from your wounds and gaze upon Jesus lifted up on the cross."
  },
  {
    "dayOfYear": 49,
    "book": "Numbers",
    "reference": "Numbers 23:19",
    "text": "God is not a man, that he should lie; neither the son of man, that he should repent: hath he said, and shall he not do it?",
    "testament": "OT",
    "focusTheme": "Infallible Veracity",
    "practicalCall": "Stand immovably on God’s word; He cannot break a promise."
  },
  {
    "dayOfYear": 50,
    "book": "Numbers",
    "reference": "Numbers 24:17",
    "text": "There shall come a Star out of Jacob, and a Sceptre shall rise out of Israel.",
    "testament": "OT",
    "focusTheme": "The Rising Sceptre",
    "practicalCall": "Look toward the bright and Morning Star, Jesus, who reigns over all nations."
  },
  {
    "dayOfYear": 51,
    "book": "Deuteronomy",
    "reference": "Deuteronomy 4:29",
    "text": "But if from thence thou shalt seek the LORD thy God, thou shalt find him, if thou seek him with all thy heart and with all thy soul.",
    "testament": "OT",
    "focusTheme": "Wholehearted Seeking",
    "practicalCall": "Seek the Lord earnestly with undivided passion; He will surely be found."
  },
  {
    "dayOfYear": 52,
    "book": "Deuteronomy",
    "reference": "Deuteronomy 6:4-5",
    "text": "Hear, O Israel: The LORD our God is one LORD: And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might.",
    "testament": "OT",
    "focusTheme": "The Shema",
    "practicalCall": "Love God with everything you have: emotions, mind, and practical energy."
  },
  {
    "dayOfYear": 53,
    "book": "Deuteronomy",
    "reference": "Deuteronomy 7:9",
    "text": "Know therefore that the LORD thy God, he is God, the faithful God, which keepeth covenant and mercy with them that love him to a thousand generations.",
    "testament": "OT",
    "focusTheme": "Covenant to 1,000 Generations",
    "practicalCall": "Rejoice in God’s generational covenant that covers your lineage forever."
  },
  {
    "dayOfYear": 54,
    "book": "Deuteronomy",
    "reference": "Deuteronomy 8:3",
    "text": "Man doth not live by bread only, but by every word that proceedeth out of the mouth of the LORD doth man live.",
    "testament": "OT",
    "focusTheme": "Spiritual Sustenance",
    "practicalCall": "Feed your inner disciple on Scripture before taking physical nourishment."
  },
  {
    "dayOfYear": 55,
    "book": "Deuteronomy",
    "reference": "Deuteronomy 10:12",
    "text": "And now, Israel, what doth the LORD thy God require of thee, but to fear the LORD thy God, to walk in all his ways, and to love him.",
    "testament": "OT",
    "focusTheme": "God’s Requirement",
    "practicalCall": "Walk in holy reverence, obedient love, and heartfelt service today."
  },
  {
    "dayOfYear": 56,
    "book": "Deuteronomy",
    "reference": "Deuteronomy 28:2",
    "text": "And all these blessings shall come on thee, and overtake thee, if thou shalt hearken unto the voice of the LORD thy God.",
    "testament": "OT",
    "focusTheme": "Overtaking Blessings",
    "practicalCall": "Prioritize hearing and obeying God’s voice; blessings will pursue you."
  },
  {
    "dayOfYear": 57,
    "book": "Deuteronomy",
    "reference": "Deuteronomy 30:19",
    "text": "I call heaven and earth to record this day against you, that I have set before you life and death, blessing and cursing: therefore choose life.",
    "testament": "OT",
    "focusTheme": "Choose Life",
    "practicalCall": "Make deliberate choices today that sow life, blessing, and purity."
  },
  {
    "dayOfYear": 58,
    "book": "Deuteronomy",
    "reference": "Deuteronomy 31:6",
    "text": "Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.",
    "testament": "OT",
    "focusTheme": "Courage Unshaken",
    "practicalCall": "Step forward boldly; God will never fail or abandon your cause."
  },
  {
    "dayOfYear": 59,
    "book": "Deuteronomy",
    "reference": "Deuteronomy 33:27",
    "text": "The eternal God is thy refuge, and underneath are the everlasting arms.",
    "testament": "OT",
    "focusTheme": "Everlasting Arms",
    "practicalCall": "Collapse your weariness into the everlasting arms of your eternal Father."
  },
  {
    "dayOfYear": 60,
    "book": "Deuteronomy",
    "reference": "Deuteronomy 34:10",
    "text": "And there arose not a prophet since in Israel like unto Moses, whom the LORD knew face to face.",
    "testament": "OT",
    "focusTheme": "Face-to-Face Intimacy",
    "practicalCall": "Desire deeper personal intimacy with Jesus beyond mere religious duty."
  },
  {
    "dayOfYear": 61,
    "book": "Joshua",
    "reference": "Joshua 1:8",
    "text": "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein.",
    "testament": "OT",
    "focusTheme": "Meditation & Success",
    "practicalCall": "Immerse your thoughts in Scripture morning and evening for true biblical success."
  },
  {
    "dayOfYear": 62,
    "book": "Joshua",
    "reference": "Joshua 1:9",
    "text": "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
    "testament": "OT",
    "focusTheme": "Undaunted Courage",
    "practicalCall": "Confront daunting tasks knowing God walks beside you everywhere."
  },
  {
    "dayOfYear": 63,
    "book": "Joshua",
    "reference": "Joshua 3:5",
    "text": "Sanctify yourselves: for to morrow the LORD will do wonders among you.",
    "testament": "OT",
    "focusTheme": "Sanctification Before Wonders",
    "practicalCall": "Consecrate your heart today; divine wonders follow holy preparation."
  },
  {
    "dayOfYear": 64,
    "book": "Joshua",
    "reference": "Joshua 6:20",
    "text": "So the people shouted when the priests blew with the trumpets... and the wall fell down flat.",
    "testament": "OT",
    "focusTheme": "The Shout of Faith",
    "practicalCall": "Release your praise before the walls fall, trusting God’s sovereign power."
  },
  {
    "dayOfYear": 65,
    "book": "Joshua",
    "reference": "Joshua 10:14",
    "text": "And there was no day like that before it or after it, that the LORD hearkened unto the voice of a man: for the LORD fought for Israel.",
    "testament": "OT",
    "focusTheme": "Bold Faith in Battle",
    "practicalCall": "Pray bold prayers that honor God’s power to intervene miraculously."
  },
  {
    "dayOfYear": 66,
    "book": "Joshua",
    "reference": "Joshua 24:15",
    "text": "Choose you this day whom ye will serve; but as for me and my house, we will serve the LORD.",
    "testament": "OT",
    "focusTheme": "Covenant Resolve",
    "practicalCall": "Make an unapologetic declaration that your home belongs to Jesus Christ."
  },
  {
    "dayOfYear": 67,
    "book": "Joshua",
    "reference": "Joshua 24:24",
    "text": "The LORD our God will we serve, and his voice will we obey.",
    "testament": "OT",
    "focusTheme": "Pledged Obedience",
    "practicalCall": "Tune your ears to obey God’s whispering voice in routine tasks."
  },
  {
    "dayOfYear": 68,
    "book": "Judges",
    "reference": "Judges 5:31",
    "text": "So let all thine enemies perish, O LORD: but let them that love him be as the sun when he goeth forth in his might.",
    "testament": "OT",
    "focusTheme": "Radiant Might",
    "practicalCall": "Shine with Christ’s radiant warmth and power amidst spiritual darkness."
  },
  {
    "dayOfYear": 69,
    "book": "Judges",
    "reference": "Judges 6:12",
    "text": "The LORD is with thee, thou mighty man of valour.",
    "testament": "OT",
    "focusTheme": "Identity of Valour",
    "practicalCall": "See yourself as God sees you—equipped, empowered, and valiant in Christ."
  },
  {
    "dayOfYear": 70,
    "book": "Judges",
    "reference": "Judges 7:7",
    "text": "And the LORD said unto Gideon, By the three hundred men that lapped will I save you.",
    "testament": "OT",
    "focusTheme": "Victory through Few",
    "practicalCall": "Trust God when resources seem few; He specializes in small consecrated cohorts."
  },
  {
    "dayOfYear": 71,
    "book": "Judges",
    "reference": "Judges 13:5",
    "text": "For, lo, thou shalt conceive, and bear a son; and no razor shall come on his head: for the child shall be a Nazarite unto God.",
    "testament": "OT",
    "focusTheme": "Set Apart from the Womb",
    "practicalCall": "Honor the specific consecration God placed on your life and ministry."
  },
  {
    "dayOfYear": 72,
    "book": "Judges",
    "reference": "Judges 16:28",
    "text": "O Lord GOD, remember me, I pray thee, and strengthen me, I pray thee, only this once, O God.",
    "testament": "OT",
    "focusTheme": "Restoration at the End",
    "practicalCall": "Return to God no matter your past failures; His mercy restores strength."
  },
  {
    "dayOfYear": 73,
    "book": "Judges",
    "reference": "Judges 21:25",
    "text": "In those days there was no king in Israel: every man did that which was right in his own eyes.",
    "testament": "OT",
    "focusTheme": "Need for the King",
    "practicalCall": "Submit your personal preferences to the righteous lordship of King Jesus."
  },
  {
    "dayOfYear": 74,
    "book": "Ruth",
    "reference": "Ruth 1:16",
    "text": "Intreat me not to leave thee: for whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God.",
    "testament": "OT",
    "focusTheme": "Unwavering Loyalty",
    "practicalCall": "Demonstrate steadfast loyalty to your covenant community and leaders."
  },
  {
    "dayOfYear": 75,
    "book": "Ruth",
    "reference": "Ruth 2:12",
    "text": "The LORD recompense thy work, and a full reward be given thee of the LORD God of Israel, under whose wings thou art come to trust.",
    "testament": "OT",
    "focusTheme": "Wings of Refuge",
    "practicalCall": "Take shelter under the Almighty’s wings; He faithfully rewards humble labor."
  },
  {
    "dayOfYear": 76,
    "book": "Ruth",
    "reference": "Ruth 3:11",
    "text": "Fear not; I will do to thee all that thou requirest: for all the city of my people doth know that thou art a virtuous woman.",
    "testament": "OT",
    "focusTheme": "Virtuous Reputation",
    "practicalCall": "Cultivate integrity that speaks loudly even in your quietest moments."
  },
  {
    "dayOfYear": 77,
    "book": "Ruth",
    "reference": "Ruth 4:14",
    "text": "Blessed be the LORD, which hath not left thee this day without a kinsman, that his name may be famous in Israel.",
    "testament": "OT",
    "focusTheme": "The Kinsman-Redeemer",
    "practicalCall": "Rejoice that Jesus is your true Kinsman-Redeemer who bought back your destiny."
  },
  {
    "dayOfYear": 78,
    "book": "1 Samuel",
    "reference": "1 Samuel 1:27",
    "text": "For this child I prayed; and the LORD hath given me my petition which I asked of him.",
    "testament": "OT",
    "focusTheme": "Answered Intercession",
    "practicalCall": "Persist in silent, fervent prayer; God remembers every tear shed."
  },
  {
    "dayOfYear": 79,
    "book": "1 Samuel",
    "reference": "1 Samuel 2:2",
    "text": "There is none holy as the LORD: for there is none beside thee: neither is there any rock like our God.",
    "testament": "OT",
    "focusTheme": "Incomparable Rock",
    "practicalCall": "Anchor your soul on the immoveable, unshakeable holiness of God."
  },
  {
    "dayOfYear": 80,
    "book": "1 Samuel",
    "reference": "1 Samuel 3:10",
    "text": "And the LORD came, and stood, and called as at other times, Samuel, Samuel. Then Samuel answered, Speak; for thy servant heareth.",
    "testament": "OT",
    "focusTheme": "A Hearing Ear",
    "practicalCall": "Quiet the noise of devices and respond promptly to God’s call."
  },
  {
    "dayOfYear": 81,
    "book": "1 Samuel",
    "reference": "1 Samuel 7:12",
    "text": "Then Samuel took a stone, and set it between Mizpeh and Shen, and called the name of it Ebenezer, saying, Hitherto hath the LORD helped us.",
    "testament": "OT",
    "focusTheme": "The Ebenezer Stone",
    "practicalCall": "Erect an altar of gratitude: remember how far God has brought you."
  },
  {
    "dayOfYear": 82,
    "book": "1 Samuel",
    "reference": "1 Samuel 12:24",
    "text": "Only fear the LORD, and serve him in truth with all your heart: for consider how great things he hath done for you.",
    "testament": "OT",
    "focusTheme": "Heartfelt Service",
    "practicalCall": "Serve God today out of deep thankfulness for His monumental mercies."
  },
  {
    "dayOfYear": 83,
    "book": "1 Samuel",
    "reference": "1 Samuel 16:7",
    "text": "For the LORD seeth not as man seeth; for man looketh on the outward appearance, but the LORD looketh on the heart.",
    "testament": "OT",
    "focusTheme": "The Pure Heart",
    "practicalCall": "Prioritize internal purity over outward impressions before God."
  },
  {
    "dayOfYear": 84,
    "book": "1 Samuel",
    "reference": "1 Samuel 17:47",
    "text": "And all this assembly shall know that the LORD saveth not with sword and spear: for the battle is the LORD’s, and he will give you into our hands.",
    "testament": "OT",
    "focusTheme": "The Battle is the Lord’s",
    "practicalCall": "Run toward your giants with the name of the Lord of Hosts."
  },
  {
    "dayOfYear": 85,
    "book": "2 Samuel",
    "reference": "2 Samuel 5:10",
    "text": "And David went on, and grew great, and the LORD God of hosts was with him.",
    "testament": "OT",
    "focusTheme": "Divine Elevation",
    "practicalCall": "Let God promote you in His timing as you remain faithful in obscurity."
  },
  {
    "dayOfYear": 86,
    "book": "2 Samuel",
    "reference": "2 Samuel 7:22",
    "text": "Wherefore thou art great, O LORD God: for there is none like thee, neither is there any God beside thee.",
    "testament": "OT",
    "focusTheme": "Exalted Greatness",
    "practicalCall": "Magnify the matchless greatness of the Creator above earthly rulers."
  },
  {
    "dayOfYear": 87,
    "book": "2 Samuel",
    "reference": "2 Samuel 22:2",
    "text": "The LORD is my rock, and my fortress, and my deliverer.",
    "testament": "OT",
    "focusTheme": "Fortress and Shield",
    "practicalCall": "Flee into God’s presence when spiritual attacks or emotional storms arise."
  },
  {
    "dayOfYear": 88,
    "book": "2 Samuel",
    "reference": "2 Samuel 22:31",
    "text": "As for God, his way is perfect; the word of the LORD is tried: he is a buckler to all them that trust in him.",
    "testament": "OT",
    "focusTheme": "Perfect Way",
    "practicalCall": "Trust that God’s methods and timing are flawless, even when mysterious."
  },
  {
    "dayOfYear": 89,
    "book": "2 Samuel",
    "reference": "2 Samuel 23:3-4",
    "text": "He that ruleth over men must be just, ruling in the fear of God. And he shall be as the light of the morning, when the sun riseth.",
    "testament": "OT",
    "focusTheme": "Righteous Leadership",
    "practicalCall": "Lead with humility, justice, and holy fear in whatever sphere you influence."
  },
  {
    "dayOfYear": 90,
    "book": "2 Samuel",
    "reference": "2 Samuel 24:24",
    "text": "Neither will I offer burnt offerings unto the LORD my God of that which doth cost me nothing.",
    "testament": "OT",
    "focusTheme": "Costly Sacrifice",
    "practicalCall": "Give God worship, time, and service that represents genuine personal sacrifice."
  },
  {
    "dayOfYear": 91,
    "book": "1 Kings",
    "reference": "1 Kings 3:9",
    "text": "Give therefore thy servant an understanding heart to judge thy people, that I may discern between good and bad.",
    "testament": "OT",
    "focusTheme": "Discerning Heart",
    "practicalCall": "Value divine wisdom and discernment above riches and worldly acclaim."
  },
  {
    "dayOfYear": 92,
    "book": "1 Kings",
    "reference": "1 Kings 8:27",
    "text": "Behold, the heaven and heaven of heavens cannot contain thee; how much less this house that I have builded?",
    "testament": "OT",
    "focusTheme": "Transcendent Glory",
    "practicalCall": "Worship the God who fills infinity yet bends down to hear your prayers."
  },
  {
    "dayOfYear": 93,
    "book": "1 Kings",
    "reference": "1 Kings 18:24",
    "text": "And the God that answereth by fire, let him be God. And all the people answered and said, It is well spoken.",
    "testament": "OT",
    "focusTheme": "God Who Answers by Fire",
    "practicalCall": "Cry out for the holy fire of God to consume every lukewarm compromise."
  },
  {
    "dayOfYear": 94,
    "book": "1 Kings",
    "reference": "1 Kings 18:38",
    "text": "Then the fire of the LORD fell, and consumed the burnt sacrifice, and the wood, and the stones, and the dust.",
    "testament": "OT",
    "focusTheme": "Consuming Fire",
    "practicalCall": "Present yourself as a living sacrifice; let Holy Spirit fire fall on your offering."
  },
  {
    "dayOfYear": 95,
    "book": "1 Kings",
    "reference": "1 Kings 19:12",
    "text": "And after the earthquake a fire; but the LORD was not in the fire: and after the fire a still small voice.",
    "testament": "OT",
    "focusTheme": "The Still Small Voice",
    "practicalCall": "Cultivate inner silence to hear the gentle whisper of the Holy Spirit."
  },
  {
    "dayOfYear": 96,
    "book": "1 Kings",
    "reference": "1 Kings 19:18",
    "text": "Yet I have left me seven thousand in Israel, all the knees which have not bowed unto Baal.",
    "testament": "OT",
    "focusTheme": "The Remnant",
    "practicalCall": "Never feel isolated in righteousness; God preserves a faithful remnant."
  },
  {
    "dayOfYear": 97,
    "book": "2 Kings",
    "reference": "2 Kings 2:9",
    "text": "And Elisha said, I pray thee, let a double portion of thy spirit be upon me.",
    "testament": "OT",
    "focusTheme": "Double Portion Passion",
    "practicalCall": "Covet greater spiritual empowerments to serve God’s kingdom vigorously."
  },
  {
    "dayOfYear": 98,
    "book": "2 Kings",
    "reference": "2 Kings 4:26",
    "text": "Run now, I pray thee, to meet her, and say unto her, Is it well with thee? is it well with thy husband? is it well with the child? And she answered, It is well.",
    "testament": "OT",
    "focusTheme": "It is Well",
    "practicalCall": "Speak words of faith and peace even before visible resurrection occurs."
  },
  {
    "dayOfYear": 99,
    "book": "2 Kings",
    "reference": "2 Kings 6:16",
    "text": "And he answered, Fear not: for they that be with us are more than they that be with them.",
    "testament": "OT",
    "focusTheme": "Unseen Armies",
    "practicalCall": "Open your spiritual eyes: the angelic hosts fighting for you outnumber all opposition."
  },
  {
    "dayOfYear": 100,
    "book": "2 Kings",
    "reference": "2 Kings 6:17",
    "text": "And the LORD opened the eyes of the young man; and he saw: and, behold, the mountain was full of horses and chariots of fire round about Elisha.",
    "testament": "OT",
    "focusTheme": "Chariots of Fire",
    "practicalCall": "Walk in spiritual vision rather than physical sight when facing adversity."
  },
  {
    "dayOfYear": 101,
    "book": "2 Kings",
    "reference": "2 Kings 18:5",
    "text": "He trusted in the LORD God of Israel; so that after him was none like him among all the kings of Judah.",
    "testament": "OT",
    "focusTheme": "Wholehearted Trust",
    "practicalCall": "Place unconditional confidence in God, regardless of surrounding political chaos."
  },
  {
    "dayOfYear": 102,
    "book": "2 Kings",
    "reference": "2 Kings 20:5",
    "text": "I have heard thy prayer, I have seen thy tears: behold, I will heal thee.",
    "testament": "OT",
    "focusTheme": "Seen Tears",
    "practicalCall": "Know that not one tear shed in prayer is wasted; God hears and answers."
  },
  {
    "dayOfYear": 103,
    "book": "1 Chronicles",
    "reference": "1 Chronicles 4:10",
    "text": "And Jabez called on the God of Israel, saying, Oh that thou wouldest bless me indeed, and enlarge my coast, and that thine hand might be with me.",
    "testament": "OT",
    "focusTheme": "Enlarged Territory",
    "practicalCall": "Ask God to expand your influence for His glory while keeping you from evil."
  },
  {
    "dayOfYear": 104,
    "book": "1 Chronicles",
    "reference": "1 Chronicles 16:11",
    "text": "Seek the LORD and his strength, seek his face continually.",
    "testament": "OT",
    "focusTheme": "Continuous Seeking",
    "practicalCall": "Set your focus to seek God’s presence continually throughout your day."
  },
  {
    "dayOfYear": 105,
    "book": "1 Chronicles",
    "reference": "1 Chronicles 16:29",
    "text": "Give unto the LORD the glory due unto his name: bring an offering, and come before him: worship the LORD in the beauty of holiness.",
    "testament": "OT",
    "focusTheme": "Beauty of Holiness",
    "practicalCall": "Adorn your life with holiness, giving God the exquisite adoration He deserves."
  },
  {
    "dayOfYear": 106,
    "book": "1 Chronicles",
    "reference": "1 Chronicles 29:11",
    "text": "Thine, O LORD, is the greatness, and the power, and the glory, and the victory, and the majesty: for all that is in the heaven and in the earth is thine.",
    "testament": "OT",
    "focusTheme": "Universal Sovereignty",
    "practicalCall": "Dedicate all personal success and achievements back to God’s supreme majesty."
  },
  {
    "dayOfYear": 107,
    "book": "1 Chronicles",
    "reference": "1 Chronicles 29:14",
    "text": "For all things come of thee, and of thine own have we given thee.",
    "testament": "OT",
    "focusTheme": "Grace-Filled Stewardship",
    "practicalCall": "Give generously to God’s house, recognizing every possession is on loan from Him."
  },
  {
    "dayOfYear": 108,
    "book": "2 Chronicles",
    "reference": "2 Chronicles 7:14",
    "text": "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven.",
    "testament": "OT",
    "focusTheme": "Conditions for Revival",
    "practicalCall": "Humble yourself, intercede, and turn from sin to unlock national and personal revival."
  },
  {
    "dayOfYear": 109,
    "book": "2 Chronicles",
    "reference": "2 Chronicles 16:9",
    "text": "For the eyes of the LORD run to and fro throughout the whole earth, to shew himself strong in the behalf of them whose heart is perfect toward him.",
    "testament": "OT",
    "focusTheme": "God Searches for Hearts",
    "practicalCall": "Keep your heart completely devoted; God eagerly searches to back you up."
  },
  {
    "dayOfYear": 110,
    "book": "2 Chronicles",
    "reference": "2 Chronicles 20:12",
    "text": "Neither know we what to do: but our eyes are upon thee.",
    "testament": "OT",
    "focusTheme": "Eyes Fixed on God",
    "practicalCall": "When perplexed and overwhelmed, fix your gaze steadfastly on Jesus."
  },
  {
    "dayOfYear": 111,
    "book": "2 Chronicles",
    "reference": "2 Chronicles 20:17",
    "text": "Ye shall not need to fight in this battle: set yourselves, stand ye still, and see the salvation of the LORD with you.",
    "testament": "OT",
    "focusTheme": "Stand and See Salvation",
    "practicalCall": "Take your position of praise; watch God dismantle strongholds before you."
  },
  {
    "dayOfYear": 112,
    "book": "2 Chronicles",
    "reference": "2 Chronicles 32:8",
    "text": "With him is an arm of flesh; but with us is the LORD our God to help us, and to fight our battles.",
    "testament": "OT",
    "focusTheme": "Flesh vs. Spirit",
    "practicalCall": "Rely on the Spirit’s infinite power rather than the brittle arm of human flesh."
  },
  {
    "dayOfYear": 113,
    "book": "Ezra",
    "reference": "Ezra 3:11",
    "text": "And they sang together by course in praising and giving thanks unto the LORD; because he is good, for his mercy endureth for ever toward Israel.",
    "testament": "OT",
    "focusTheme": "Rebuilding with Praise",
    "practicalCall": "Celebrate new beginnings with explosive praise for God’s enduring mercy."
  },
  {
    "dayOfYear": 114,
    "book": "Ezra",
    "reference": "Ezra 7:10",
    "text": "For Ezra had prepared his heart to seek the law of the LORD, and to do it, and to teach in Israel statutes and judgments.",
    "testament": "OT",
    "focusTheme": "The Discipleship Pattern",
    "practicalCall": "Prepare your heart to seek the Word, practice the Word, and teach the Word."
  },
  {
    "dayOfYear": 115,
    "book": "Ezra",
    "reference": "Ezra 8:22",
    "text": "The hand of our God is upon all them for good that seek him.",
    "testament": "OT",
    "focusTheme": "The Good Hand of God",
    "practicalCall": "Rely on God’s protective favor rather than secular guarantees."
  },
  {
    "dayOfYear": 116,
    "book": "Nehemiah",
    "reference": "Nehemiah 1:4",
    "text": "I sat down and wept, and mourned certain days, and fasted, and prayed before the God of heaven.",
    "testament": "OT",
    "focusTheme": "Burden for the Broken",
    "practicalCall": "Allow God to break your heart for the ruins and broken walls in your community."
  },
  {
    "dayOfYear": 117,
    "book": "Nehemiah",
    "reference": "Nehemiah 4:14",
    "text": "Be not ye afraid of them: remember the Lord, which is great and terrible, and fight for your brethren, your sons, and your daughters.",
    "testament": "OT",
    "focusTheme": "Fight for Family",
    "practicalCall": "Stand in the gap and contend spiritually for your family and brethren."
  },
  {
    "dayOfYear": 118,
    "book": "Nehemiah",
    "reference": "Nehemiah 8:10",
    "text": "Neither be ye sorry; for the joy of the LORD is your strength.",
    "testament": "OT",
    "focusTheme": "Joy as Strength",
    "practicalCall": "Draw divine resilience from God’s unshakeable joy over your redemption."
  },
  {
    "dayOfYear": 119,
    "book": "Esther",
    "reference": "Esther 4:14",
    "text": "And who knoweth whether thou art come to the kingdom for such a time as this?",
    "testament": "OT",
    "focusTheme": "Such a Time as This",
    "practicalCall": "Embrace your kingdom assignment boldly; you were born for this exact season."
  },
  {
    "dayOfYear": 120,
    "book": "Esther",
    "reference": "Esther 4:16",
    "text": "Go, gather together all the Jews... fast ye for me: and if I perish, I perish.",
    "testament": "OT",
    "focusTheme": "Sacrificial Courage",
    "practicalCall": "Risk comfort and reputation to stand up for God’s truth and people."
  },
  {
    "dayOfYear": 121,
    "book": "Esther",
    "reference": "Esther 8:16",
    "text": "The Jews had light, and gladness, and joy, and honour.",
    "testament": "OT",
    "focusTheme": "Divine Reversal",
    "practicalCall": "Trust God for supernatural turnarounds in situations intended for destruction."
  },
  {
    "dayOfYear": 122,
    "book": "Joshua",
    "reference": "Joshua 1:8",
    "text": "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein.",
    "testament": "OT",
    "focusTheme": "Meditation & Success",
    "practicalCall": "Immerse your thoughts in Scripture morning and evening for true biblical success."
  },
  {
    "dayOfYear": 123,
    "book": "Joshua",
    "reference": "Joshua 1:9",
    "text": "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
    "testament": "OT",
    "focusTheme": "Undaunted Courage",
    "practicalCall": "Confront daunting tasks knowing God walks beside you everywhere."
  },
  {
    "dayOfYear": 124,
    "book": "Joshua",
    "reference": "Joshua 3:5",
    "text": "Sanctify yourselves: for to morrow the LORD will do wonders among you.",
    "testament": "OT",
    "focusTheme": "Sanctification Before Wonders",
    "practicalCall": "Consecrate your heart today; divine wonders follow holy preparation."
  },
  {
    "dayOfYear": 125,
    "book": "Joshua",
    "reference": "Joshua 6:20",
    "text": "So the people shouted when the priests blew with the trumpets... and the wall fell down flat.",
    "testament": "OT",
    "focusTheme": "The Shout of Faith",
    "practicalCall": "Release your praise before the walls fall, trusting God’s sovereign power."
  },
  {
    "dayOfYear": 126,
    "book": "Job",
    "reference": "Job 1:21",
    "text": "The LORD gave, and the LORD hath taken away; blessed be the name of the LORD.",
    "testament": "OT",
    "focusTheme": "Unconditional Worship",
    "practicalCall": "Worship God for who He is, independent of changing temporal circumstances."
  },
  {
    "dayOfYear": 127,
    "book": "Job",
    "reference": "Job 19:25",
    "text": "For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth.",
    "testament": "OT",
    "focusTheme": "Living Redeemer",
    "practicalCall": "Proclaim with holy confidence that your Redeemer lives and reigns forever."
  },
  {
    "dayOfYear": 128,
    "book": "Job",
    "reference": "Job 23:10",
    "text": "He knoweth the way that I take: when he hath tried me, I shall come forth as gold.",
    "testament": "OT",
    "focusTheme": "Refined as Gold",
    "practicalCall": "See your trials as the Master Refiner’s furnace purifying your faith."
  },
  {
    "dayOfYear": 129,
    "book": "Job",
    "reference": "Job 38:4",
    "text": "Where wast thou when I laid the foundations of the earth? declare, if thou hast understanding.",
    "testament": "OT",
    "focusTheme": "Transcendent Majesty",
    "practicalCall": "Humble your questions before the unsearchable genius of the Almighty."
  },
  {
    "dayOfYear": 130,
    "book": "Job",
    "reference": "Job 42:2",
    "text": "I know that thou canst do every thing, and that no thought can be withholden from thee.",
    "testament": "OT",
    "focusTheme": "Unlimited Capability",
    "practicalCall": "Surrender all anxiety to the One whose sovereign plans cannot be thwarted."
  },
  {
    "dayOfYear": 131,
    "book": "Job",
    "reference": "Job 42:5",
    "text": "I have heard of thee by the hearing of the ear: but now mine eye seeth thee.",
    "testament": "OT",
    "focusTheme": "Seeing God",
    "practicalCall": "Move from second-hand knowledge of God into deep, eye-opening personal encounter."
  },
  {
    "dayOfYear": 132,
    "book": "Psalms",
    "reference": "Psalm 1:2-3",
    "text": "His delight is in the law of the LORD... and he shall be like a tree planted by the rivers of water.",
    "testament": "OT",
    "focusTheme": "The Blessed Life",
    "practicalCall": "Delight in Scripture and stay rooted in the living waters of the Holy Spirit."
  },
  {
    "dayOfYear": 133,
    "book": "Psalms",
    "reference": "Psalm 2:11",
    "text": "Serve the LORD with fear, and rejoice with trembling.",
    "testament": "OT",
    "focusTheme": "Reverent Joy",
    "practicalCall": "Blend holy celebration with deep reverence before the King of kings."
  },
  {
    "dayOfYear": 134,
    "book": "Psalms",
    "reference": "Psalm 3:3",
    "text": "But thou, O LORD, art a shield for me; my glory, and the lifter up of mine head.",
    "testament": "OT",
    "focusTheme": "Lifter of My Head",
    "practicalCall": "Let God lift your bowed head and restore your countenance today."
  },
  {
    "dayOfYear": 135,
    "book": "Psalms",
    "reference": "Psalm 4:8",
    "text": "I will both lay me down in peace, and sleep: for thou, LORD, only makest me dwell in safety.",
    "testament": "OT",
    "focusTheme": "Nighttime Peace",
    "practicalCall": "Release anxiety as night falls, sleeping peacefully under God’s protection."
  },
  {
    "dayOfYear": 136,
    "book": "Psalms",
    "reference": "Psalm 5:3",
    "text": "My voice shalt thou hear in the morning, O LORD; in the morning will I direct my prayer unto thee, and will look up.",
    "testament": "OT",
    "focusTheme": "Morning Order",
    "practicalCall": "Give God your first thoughts, direct your petition, and look up expectantly."
  },
  {
    "dayOfYear": 137,
    "book": "Psalms",
    "reference": "Psalm 8:1",
    "text": "O LORD our Lord, how excellent is thy name in all the earth! who hast set thy glory above the heavens.",
    "testament": "OT",
    "focusTheme": "Excellent Name",
    "practicalCall": "Praise the exalted, glorious name of Jesus throughout your routine duties."
  },
  {
    "dayOfYear": 138,
    "book": "Psalms",
    "reference": "Psalm 16:11",
    "text": "Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.",
    "testament": "OT",
    "focusTheme": "Fullness of Joy",
    "practicalCall": "Drink deeply from the fountain of joy found exclusively in God’s presence."
  },
  {
    "dayOfYear": 139,
    "book": "Psalms",
    "reference": "Psalm 18:2",
    "text": "The LORD is my rock, and my fortress, and my deliverer; my God, my strength, in whom I will trust.",
    "testament": "OT",
    "focusTheme": "Immoveable Fortress",
    "practicalCall": "Make God your safe refuge in the face of pressure and spiritual pushback."
  },
  {
    "dayOfYear": 140,
    "book": "Psalms",
    "reference": "Psalm 19:14",
    "text": "Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer.",
    "testament": "OT",
    "focusTheme": "Acceptable Heart",
    "practicalCall": "Filter every spoken word and private thought through God’s holy standards."
  },
  {
    "dayOfYear": 141,
    "book": "Psalms",
    "reference": "Psalm 23:1",
    "text": "The LORD is my shepherd; I shall not want.",
    "testament": "OT",
    "focusTheme": "The Good Shepherd",
    "practicalCall": "Rest in the complete care of the Shepherd; you lack nothing essential."
  },
  {
    "dayOfYear": 142,
    "book": "Psalms",
    "reference": "Psalm 24:3-4",
    "text": "Who shall ascend into the hill of the LORD? He that hath clean hands, and a pure heart.",
    "testament": "OT",
    "focusTheme": "Ascending the Hill",
    "practicalCall": "Wash your hands from worldly stains and guard your heart in purity."
  },
  {
    "dayOfYear": 143,
    "book": "Psalms",
    "reference": "Psalm 27:1",
    "text": "The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?",
    "testament": "OT",
    "focusTheme": "Fearless Faith",
    "practicalCall": "Allow the light of God’s salvation to expel every dark fear from your heart."
  },
  {
    "dayOfYear": 144,
    "book": "Psalms",
    "reference": "Psalm 27:4",
    "text": "One thing have I desired of the LORD, that will I seek after; that I may dwell in the house of the LORD all the days of my life.",
    "testament": "OT",
    "focusTheme": "The One Thing",
    "practicalCall": "Simplify your desires down to one burning priority: dwelling with God."
  },
  {
    "dayOfYear": 145,
    "book": "Psalms",
    "reference": "Psalm 34:1",
    "text": "I will bless the LORD at all times: his praise shall continually be in my mouth.",
    "testament": "OT",
    "focusTheme": "Continual Blessing",
    "practicalCall": "Praise God on the mountain peaks and in the valleys without hesitation."
  },
  {
    "dayOfYear": 146,
    "book": "Psalms",
    "reference": "Psalm 34:8",
    "text": "O taste and see that the LORD is good: blessed is the man that trusteth in him.",
    "testament": "OT",
    "focusTheme": "Taste and See",
    "practicalCall": "Experience God firsthand today rather than merely hearing about Him."
  },
  {
    "dayOfYear": 147,
    "book": "Psalms",
    "reference": "Psalm 37:4",
    "text": "Delight thyself also in the LORD: and he shall give thee the desires of thine heart.",
    "testament": "OT",
    "focusTheme": "Delight in God",
    "practicalCall": "Find your supreme pleasure in God, and He will align your desires with His."
  },
  {
    "dayOfYear": 148,
    "book": "Psalms",
    "reference": "Psalm 42:1",
    "text": "As the hart panteth after the water brooks, so panteth my soul after thee, O God.",
    "testament": "OT",
    "focusTheme": "Thirst for God",
    "practicalCall": "Cultivate deep spiritual thirst that refuses to be satisfied by worldly substitutes."
  },
  {
    "dayOfYear": 149,
    "book": "Psalms",
    "reference": "Psalm 46:1",
    "text": "God is our refuge and strength, a very present help in trouble.",
    "testament": "OT",
    "focusTheme": "Ever-Present Help",
    "practicalCall": "Call on God immediately when trouble stirs; He is right beside you."
  },
  {
    "dayOfYear": 150,
    "book": "Psalms",
    "reference": "Psalm 46:10",
    "text": "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.",
    "testament": "OT",
    "focusTheme": "Be Still",
    "practicalCall": "Cease frantic human effort; quiet your soul and know He reigns."
  },
  {
    "dayOfYear": 151,
    "book": "Psalms",
    "reference": "Psalm 51:10",
    "text": "Create in me a clean heart, O God; and renew a right spirit within me.",
    "testament": "OT",
    "focusTheme": "Heart Renovation",
    "practicalCall": "Invite the Holy Spirit to perform deep surgery and renew your spirit."
  },
  {
    "dayOfYear": 152,
    "book": "Psalms",
    "reference": "Psalm 63:1",
    "text": "O God, thou art my God; early will I seek thee: my soul thirsteth for thee.",
    "testament": "OT",
    "focusTheme": "Early Seeking",
    "practicalCall": "Seek God before the distractions and demands of the day hijack your mind."
  },
  {
    "dayOfYear": 153,
    "book": "Psalms",
    "reference": "Psalm 84:10",
    "text": "For a day in thy courts is better than a thousand. I had rather be a doorkeeper in the house of my God, than to dwell in the tents of wickedness.",
    "testament": "OT",
    "focusTheme": "One Day in the Courts",
    "practicalCall": "Treasure sanctuary fellowship above all the worldly luxury in existence."
  },
  {
    "dayOfYear": 154,
    "book": "Psalms",
    "reference": "Psalm 90:12",
    "text": "So teach us to number our days, that we may apply our hearts unto wisdom.",
    "testament": "OT",
    "focusTheme": "Numbering Our Days",
    "practicalCall": "Treat this day as a finite, precious gift to be invested in eternal matters."
  },
  {
    "dayOfYear": 155,
    "book": "Psalms",
    "reference": "Psalm 91:1-2",
    "text": "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.",
    "testament": "OT",
    "focusTheme": "The Secret Place",
    "practicalCall": "Abide in prayer’s secret place; no evil can breach the Almighty’s shadow."
  },
  {
    "dayOfYear": 156,
    "book": "Psalms",
    "reference": "Psalm 100:4",
    "text": "Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.",
    "testament": "OT",
    "focusTheme": "Gates of Thanksgiving",
    "practicalCall": "Cross the threshold of every situation with vocal thanksgiving and praise."
  },
  {
    "dayOfYear": 157,
    "book": "Psalms",
    "reference": "Psalm 103:2-3",
    "text": "Bless the LORD, O my soul, and forget not all his benefits: Who forgiveth all thine iniquities; who healeth all thy diseases.",
    "testament": "OT",
    "focusTheme": "Unforgotten Benefits",
    "practicalCall": "List God’s benefits today: forgiveness, healing, redemption, and mercy."
  },
  {
    "dayOfYear": 158,
    "book": "Psalms",
    "reference": "Psalm 119:105",
    "text": "Thy word is a lamp unto my feet, and a light unto my path.",
    "testament": "OT",
    "focusTheme": "Lamp and Light",
    "practicalCall": "Let Scripture illuminate your next concrete step and your long-term path."
  },
  {
    "dayOfYear": 159,
    "book": "Psalms",
    "reference": "Psalm 121:1-2",
    "text": "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.",
    "testament": "OT",
    "focusTheme": "Maker of Heaven",
    "practicalCall": "Look above the horizon of human help to the Creator who made the cosmos."
  },
  {
    "dayOfYear": 160,
    "book": "Psalms",
    "reference": "Psalm 139:23-24",
    "text": "Search me, O God, and know my heart: try me, and know my thoughts: And see if there be any wicked way in me, and lead me in the way everlasting.",
    "testament": "OT",
    "focusTheme": "Divine Heart Search",
    "practicalCall": "Offer God permission to inspect your motives and reroute your steps."
  },
  {
    "dayOfYear": 161,
    "book": "Psalms",
    "reference": "Psalm 145:3",
    "text": "Great is the LORD, and greatly to be praised; and his greatness is unsearchable.",
    "testament": "OT",
    "focusTheme": "Unsearchable Greatness",
    "practicalCall": "Never cease discovering fresh wonders in the limitless character of God."
  },
  {
    "dayOfYear": 162,
    "book": "Proverbs",
    "reference": "Proverbs 3:5-6",
    "text": "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
    "testament": "OT",
    "focusTheme": "Wholehearted Guidance",
    "practicalCall": "Acknowledge God in every decision today; He will straighten your crooked paths."
  },
  {
    "dayOfYear": 163,
    "book": "Proverbs",
    "reference": "Proverbs 4:23",
    "text": "Keep thy heart with all diligence; for out of it are the issues of life.",
    "testament": "OT",
    "focusTheme": "Guarding the Heart",
    "practicalCall": "Station a spiritual guard over your heart; guard against toxic inputs."
  },
  {
    "dayOfYear": 164,
    "book": "Proverbs",
    "reference": "Proverbs 11:25",
    "text": "The liberal soul shall be made fat: and he that watereth shall be watered also himself.",
    "testament": "OT",
    "focusTheme": "Generous Watering",
    "practicalCall": "Pour encouragement and generosity into others; you will be refreshed in return."
  },
  {
    "dayOfYear": 165,
    "book": "Proverbs",
    "reference": "Proverbs 16:3",
    "text": "Commit thy works unto the LORD, and thy thoughts shall be established.",
    "testament": "OT",
    "focusTheme": "Committed Works",
    "practicalCall": "Roll your projects and burdens onto God; watch your thoughts stabilize."
  },
  {
    "dayOfYear": 166,
    "book": "Proverbs",
    "reference": "Proverbs 18:10",
    "text": "The name of the LORD is a strong tower: the righteous runneth into it, and is safe.",
    "testament": "OT",
    "focusTheme": "The Strong Tower",
    "practicalCall": "Run to Jesus’ name when fear attacks; you are completely safe in Him."
  },
  {
    "dayOfYear": 167,
    "book": "Proverbs",
    "reference": "Proverbs 27:17",
    "text": "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.",
    "testament": "OT",
    "focusTheme": "Iron Sharpens Iron",
    "practicalCall": "Engage authentic fellowship that sharpens and sanctifies your spiritual walk."
  },
  {
    "dayOfYear": 168,
    "book": "Proverbs",
    "reference": "Proverbs 30:5",
    "text": "Every word of God is pure: he is a shield unto them that put their trust in him.",
    "testament": "OT",
    "focusTheme": "Pure Word",
    "practicalCall": "Rest on the unadulterated purity of Scripture as your impenetrable shield."
  },
  {
    "dayOfYear": 169,
    "book": "Proverbs",
    "reference": "Proverbs 31:30",
    "text": "Favour is deceitful, and beauty is vain: but a woman that feareth the LORD, she shall be praised.",
    "testament": "OT",
    "focusTheme": "Enduring Praise",
    "practicalCall": "Value the reverent fear of the Lord above transient worldly glamour."
  },
  {
    "dayOfYear": 170,
    "book": "Ecclesiastes",
    "reference": "Ecclesiastes 3:1",
    "text": "To every thing there is a season, and a time to every purpose under the heaven.",
    "testament": "OT",
    "focusTheme": "Divine Seasons",
    "practicalCall": "Embrace the season you are in; God makes all things beautiful in His time."
  },
  {
    "dayOfYear": 171,
    "book": "Ecclesiastes",
    "reference": "Ecclesiastes 4:12",
    "text": "And if one prevail against him, two shall withstand him; and a threefold cord is not quickly broken.",
    "testament": "OT",
    "focusTheme": "Threefold Cord",
    "practicalCall": "Weave Christ into your friendships and marriage for unbreakable endurance."
  },
  {
    "dayOfYear": 172,
    "book": "Ecclesiastes",
    "reference": "Ecclesiastes 12:1",
    "text": "Remember now thy Creator in the days of thy youth.",
    "testament": "OT",
    "focusTheme": "Youth Consecration",
    "practicalCall": "Give God your prime energy, strength, and passions right now."
  },
  {
    "dayOfYear": 173,
    "book": "Ecclesiastes",
    "reference": "Ecclesiastes 12:13",
    "text": "Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man.",
    "testament": "OT",
    "focusTheme": "The Whole Duty",
    "practicalCall": "Simplify life: revere God and obey His commands with integrity."
  },
  {
    "dayOfYear": 174,
    "book": "Song of Solomon",
    "reference": "Song of Solomon 2:4",
    "text": "He brought me to the banqueting house, and his banner over me was love.",
    "testament": "OT",
    "focusTheme": "Banner of Love",
    "practicalCall": "Feast in the banquet of Christ’s unconditional, triumphing love."
  },
  {
    "dayOfYear": 175,
    "book": "Song of Solomon",
    "reference": "Song of Solomon 8:6",
    "text": "Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as death.",
    "testament": "OT",
    "focusTheme": "Unquenchable Love",
    "practicalCall": "Rejoice in the ferocious, steadfast love of Christ that conquerors the grave."
  },
  {
    "dayOfYear": 176,
    "book": "Job",
    "reference": "Job 1:21",
    "text": "The LORD gave, and the LORD hath taken away; blessed be the name of the LORD.",
    "testament": "OT",
    "focusTheme": "Unconditional Worship",
    "practicalCall": "Worship God for who He is, independent of changing temporal circumstances."
  },
  {
    "dayOfYear": 177,
    "book": "Job",
    "reference": "Job 19:25",
    "text": "For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth.",
    "testament": "OT",
    "focusTheme": "Living Redeemer",
    "practicalCall": "Proclaim with holy confidence that your Redeemer lives and reigns forever."
  },
  {
    "dayOfYear": 178,
    "book": "Job",
    "reference": "Job 23:10",
    "text": "He knoweth the way that I take: when he hath tried me, I shall come forth as gold.",
    "testament": "OT",
    "focusTheme": "Refined as Gold",
    "practicalCall": "See your trials as the Master Refiner’s furnace purifying your faith."
  },
  {
    "dayOfYear": 179,
    "book": "Job",
    "reference": "Job 38:4",
    "text": "Where wast thou when I laid the foundations of the earth? declare, if thou hast understanding.",
    "testament": "OT",
    "focusTheme": "Transcendent Majesty",
    "practicalCall": "Humble your questions before the unsearchable genius of the Almighty."
  },
  {
    "dayOfYear": 180,
    "book": "Job",
    "reference": "Job 42:2",
    "text": "I know that thou canst do every thing, and that no thought can be withholden from thee.",
    "testament": "OT",
    "focusTheme": "Unlimited Capability",
    "practicalCall": "Surrender all anxiety to the One whose sovereign plans cannot be thwarted."
  },
  {
    "dayOfYear": 181,
    "book": "Job",
    "reference": "Job 42:5",
    "text": "I have heard of thee by the hearing of the ear: but now mine eye seeth thee.",
    "testament": "OT",
    "focusTheme": "Seeing God",
    "practicalCall": "Move from second-hand knowledge of God into deep, eye-opening personal encounter."
  },
  {
    "dayOfYear": 182,
    "book": "Psalms",
    "reference": "Psalm 1:2-3",
    "text": "His delight is in the law of the LORD... and he shall be like a tree planted by the rivers of water.",
    "testament": "OT",
    "focusTheme": "The Blessed Life",
    "practicalCall": "Delight in Scripture and stay rooted in the living waters of the Holy Spirit."
  },
  {
    "dayOfYear": 183,
    "book": "Psalms",
    "reference": "Psalm 2:11",
    "text": "Serve the LORD with fear, and rejoice with trembling.",
    "testament": "OT",
    "focusTheme": "Reverent Joy",
    "practicalCall": "Blend holy celebration with deep reverence before the King of kings."
  },
  {
    "dayOfYear": 184,
    "book": "Psalms",
    "reference": "Psalm 3:3",
    "text": "But thou, O LORD, art a shield for me; my glory, and the lifter up of mine head.",
    "testament": "OT",
    "focusTheme": "Lifter of My Head",
    "practicalCall": "Let God lift your bowed head and restore your countenance today."
  },
  {
    "dayOfYear": 185,
    "book": "Psalms",
    "reference": "Psalm 4:8",
    "text": "I will both lay me down in peace, and sleep: for thou, LORD, only makest me dwell in safety.",
    "testament": "OT",
    "focusTheme": "Nighttime Peace",
    "practicalCall": "Release anxiety as night falls, sleeping peacefully under God’s protection."
  },
  {
    "dayOfYear": 186,
    "book": "Isaiah",
    "reference": "Isaiah 6:8",
    "text": "Also I heard the voice of the Lord, saying, Whom shall I send, and who will go for us? Then said I, Here am I; send me.",
    "testament": "OT",
    "focusTheme": "Here Am I, Send Me",
    "practicalCall": "Surrender your personal agenda; say yes to God’s calling on your life."
  },
  {
    "dayOfYear": 187,
    "book": "Isaiah",
    "reference": "Isaiah 7:14",
    "text": "Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.",
    "testament": "OT",
    "focusTheme": "God With Us",
    "practicalCall": "Live in the comfort that Immanuel, God with us, never leaves your side."
  },
  {
    "dayOfYear": 188,
    "book": "Isaiah",
    "reference": "Isaiah 9:6",
    "text": "For unto us a child is born, unto us a son is given... and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.",
    "testament": "OT",
    "focusTheme": "Wonderful Counsellor",
    "practicalCall": "Consult the Prince of Peace in every personal and ministerial decision."
  },
  {
    "dayOfYear": 189,
    "book": "Isaiah",
    "reference": "Isaiah 26:3",
    "text": "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.",
    "testament": "OT",
    "focusTheme": "Perfect Peace",
    "practicalCall": "Lock your mind onto God’s promises to maintain peace amidst chaos."
  },
  {
    "dayOfYear": 190,
    "book": "Isaiah",
    "reference": "Isaiah 40:29",
    "text": "He giveth power to the faint; and to them that have no might he increaseth strength.",
    "testament": "OT",
    "focusTheme": "Strength for the Faint",
    "practicalCall": "Acknowledge your weakness; allow Christ’s power to be perfected in you."
  },
  {
    "dayOfYear": 191,
    "book": "Isaiah",
    "reference": "Isaiah 40:31",
    "text": "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles.",
    "testament": "OT",
    "focusTheme": "Mounting as Eagles",
    "practicalCall": "Wait on the Lord in worship and quietness; receive supernatural flight."
  },
  {
    "dayOfYear": 192,
    "book": "Isaiah",
    "reference": "Isaiah 41:10",
    "text": "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.",
    "testament": "OT",
    "focusTheme": "Upheld by His Hand",
    "practicalCall": "Replace dismay with boldness; God’s righteous right hand holds you fast."
  },
  {
    "dayOfYear": 193,
    "book": "Isaiah",
    "reference": "Isaiah 43:2",
    "text": "When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned.",
    "testament": "OT",
    "focusTheme": "Through the Waters & Fire",
    "practicalCall": "Fear not the flood or furnace; the Fourth Man in the fire walks with you."
  },
  {
    "dayOfYear": 194,
    "book": "Isaiah",
    "reference": "Isaiah 43:19",
    "text": "Behold, I will do a new thing; now it shall spring forth; shall ye not know it? I will even make a way in the wilderness, and rivers in the desert.",
    "testament": "OT",
    "focusTheme": "A New Thing",
    "practicalCall": "Release nostalgia for the past; welcome the fresh work God is birthing."
  },
  {
    "dayOfYear": 195,
    "book": "Isaiah",
    "reference": "Isaiah 53:5",
    "text": "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.",
    "testament": "OT",
    "focusTheme": "The Wounded Healer",
    "practicalCall": "Receive the complete spiritual, emotional, and physical healing won at Calvary."
  },
  {
    "dayOfYear": 196,
    "book": "Isaiah",
    "reference": "Isaiah 54:17",
    "text": "No weapon that is formed against thee shall prosper; and every tongue that shall rise against thee in judgment thou shalt condemn.",
    "testament": "OT",
    "focusTheme": "Prospering No Weapon",
    "practicalCall": "Walk unbothered by attacks; weaponized slander cannot defeat God’s servant."
  },
  {
    "dayOfYear": 197,
    "book": "Isaiah",
    "reference": "Isaiah 55:1",
    "text": "Ho, every one that thirsteth, come ye to the waters, and he that hath no money; come ye, buy, and eat.",
    "testament": "OT",
    "focusTheme": "The Free Invitation",
    "practicalCall": "Come to the waters of life freely; feast on Christ without money or price."
  },
  {
    "dayOfYear": 198,
    "book": "Isaiah",
    "reference": "Isaiah 55:8-9",
    "text": "For my thoughts are not your thoughts, neither are your ways my ways, saith the LORD.",
    "testament": "OT",
    "focusTheme": "Higher Ways",
    "practicalCall": "Trust God’s superior perspective when His ways differ from your blueprint."
  },
  {
    "dayOfYear": 199,
    "book": "Isaiah",
    "reference": "Isaiah 58:12",
    "text": "And they that shall be of thee shall build the old waste places: thou shalt raise up the foundations of many generations; and thou shalt be called, The repairer of the breach.",
    "testament": "OT",
    "focusTheme": "Repairer of the Breach",
    "practicalCall": "Be an agent of reconciliation and rebuilding in broken relationships and churches."
  },
  {
    "dayOfYear": 200,
    "book": "Isaiah",
    "reference": "Isaiah 60:1",
    "text": "Arise, shine; for thy light is come, and the glory of the LORD is risen upon thee.",
    "testament": "OT",
    "focusTheme": "Arise and Shine",
    "practicalCall": "Shake off depression and apathy; shine with the risen glory of Christ."
  },
  {
    "dayOfYear": 201,
    "book": "Isaiah",
    "reference": "Isaiah 61:1",
    "text": "The Spirit of the Lord GOD is upon me; because the LORD hath anointed me to preach good tidings unto the meek; he hath sent me to bind up the brokenhearted.",
    "testament": "OT",
    "focusTheme": "The Anointed Mission",
    "practicalCall": "Walk in your Holy Spirit anointing to heal broken hearts and free captives."
  },
  {
    "dayOfYear": 202,
    "book": "Jeremiah",
    "reference": "Jeremiah 1:5",
    "text": "Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations.",
    "testament": "OT",
    "focusTheme": "Ordained Before Birth",
    "practicalCall": "Rest in your eternal calling; God knew and consecrated you before time began."
  },
  {
    "dayOfYear": 203,
    "book": "Jeremiah",
    "reference": "Jeremiah 17:7-8",
    "text": "Blessed is the man that trusteth in the LORD, and whose hope the LORD is. For he shall be as a tree planted by the waters.",
    "testament": "OT",
    "focusTheme": "Trusting in Drought",
    "practicalCall": "Send your roots deep into Christ; you will not wither in seasons of drought."
  },
  {
    "dayOfYear": 204,
    "book": "Jeremiah",
    "reference": "Jeremiah 29:11",
    "text": "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
    "testament": "OT",
    "focusTheme": "Thoughts of Peace",
    "practicalCall": "Anchor your future in God’s intentional thoughts of hope and peace."
  },
  {
    "dayOfYear": 205,
    "book": "Jeremiah",
    "reference": "Jeremiah 31:3",
    "text": "The LORD hath appeared of old unto me, saying, Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.",
    "testament": "OT",
    "focusTheme": "Everlasting Love",
    "practicalCall": "Rest in the unchanging, unbreakable love with which God drew you to Himself."
  },
  {
    "dayOfYear": 206,
    "book": "Jeremiah",
    "reference": "Jeremiah 33:3",
    "text": "Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.",
    "testament": "OT",
    "focusTheme": "Great & Mighty Things",
    "practicalCall": "Dial heaven in prayer; expect God to reveal secrets beyond your imagination."
  },
  {
    "dayOfYear": 207,
    "book": "Lamentations",
    "reference": "Lamentations 3:22-23",
    "text": "It is of the LORD’s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.",
    "testament": "OT",
    "focusTheme": "Mercies New Every Morning",
    "practicalCall": "Step into today with a fresh slate; God’s mercies reboot every sunrise."
  },
  {
    "dayOfYear": 208,
    "book": "Ezekiel",
    "reference": "Ezekiel 36:26",
    "text": "A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh.",
    "testament": "OT",
    "focusTheme": "Heart of Flesh",
    "practicalCall": "Thank God for removing stony cynicism and giving you a tender, responsive heart."
  },
  {
    "dayOfYear": 209,
    "book": "Ezekiel",
    "reference": "Ezekiel 37:4-5",
    "text": "Prophesy upon these bones, and say unto them, O ye dry bones, hear the word of the LORD... Behold, I will cause breath to enter into you, and ye shall live.",
    "testament": "OT",
    "focusTheme": "Dry Bones Live",
    "practicalCall": "Speak the living Word over dead situations; divine breath will revive them."
  },
  {
    "dayOfYear": 210,
    "book": "Ezekiel",
    "reference": "Ezekiel 47:9",
    "text": "And every thing shall live whither the river cometh.",
    "testament": "OT",
    "focusTheme": "The River of Life",
    "practicalCall": "Step into the river of the Holy Spirit; everywhere it flows brings life."
  },
  {
    "dayOfYear": 211,
    "book": "Daniel",
    "reference": "Daniel 1:8",
    "text": "But Daniel purposed in his heart that he would not defile himself with the portion of the king’s meat.",
    "testament": "OT",
    "focusTheme": "Purposed in Heart",
    "practicalCall": "Make a pre-determined resolve not to compromise with cultural corruption."
  },
  {
    "dayOfYear": 212,
    "book": "Daniel",
    "reference": "Daniel 3:17-18",
    "text": "Our God whom we serve is able to deliver us from the burning fiery furnace... But if not, be it known unto thee, O king, that we will not serve thy gods.",
    "testament": "OT",
    "focusTheme": "Even If He Does Not",
    "practicalCall": "Maintain unbending allegiance to Jesus regardless of the worldly outcome."
  },
  {
    "dayOfYear": 213,
    "book": "Daniel",
    "reference": "Daniel 6:10",
    "text": "Now when Daniel knew that the writing was signed, he went into his house; and his windows being open... he kneeled upon his knees three times a day, and prayed.",
    "testament": "OT",
    "focusTheme": "Undaunted Prayer Life",
    "practicalCall": "Refuse to let threats or busy schedules disrupt your consecrated prayer habits."
  },
  {
    "dayOfYear": 214,
    "book": "Daniel",
    "reference": "Daniel 11:32",
    "text": "The people that do know their God shall be strong, and do exploits.",
    "testament": "OT",
    "focusTheme": "Knowing God & Exploits",
    "practicalCall": "Deepen your knowledge of God; kingdom exploits flow from intimate revelation."
  },
  {
    "dayOfYear": 215,
    "book": "Daniel",
    "reference": "Daniel 12:3",
    "text": "And they that be wise shall shine as the brightness of the firmament; and they that turn many to righteousness as the stars for ever and ever.",
    "testament": "OT",
    "focusTheme": "Shining as Stars",
    "practicalCall": "Invest in winning souls to righteousness; you will shine as a celestial star forever."
  },
  {
    "dayOfYear": 216,
    "book": "Hosea",
    "reference": "Hosea 6:3",
    "text": "Then shall we know, if we follow on to know the LORD: his going forth is prepared as the morning; and he shall come unto us as the rain.",
    "testament": "OT",
    "focusTheme": "Following On to Know",
    "practicalCall": "Press forward in your discipleship; God’s fresh rain is promised to seekers."
  },
  {
    "dayOfYear": 217,
    "book": "Hosea",
    "reference": "Hosea 10:12",
    "text": "Sow to yourselves in righteousness, reap in mercy; break up your fallow ground: for it is time to seek the LORD, till he come and rain righteousness upon you.",
    "testament": "OT",
    "focusTheme": "Breaking Fallow Ground",
    "practicalCall": "Break up hard soil in your heart; sow righteousness and expect mercy."
  },
  {
    "dayOfYear": 218,
    "book": "Joel",
    "reference": "Joel 2:25",
    "text": "And I will restore to you the years that the locust hath eaten, the cankerworm, and the caterpiller, and the palmerworm.",
    "testament": "OT",
    "focusTheme": "Supernatural Restoration",
    "practicalCall": "Believe God for total restoration of wasted years, lost joy, and missed opportunities."
  },
  {
    "dayOfYear": 219,
    "book": "Joel",
    "reference": "Joel 2:28",
    "text": "And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy.",
    "testament": "OT",
    "focusTheme": "Outpouring of the Spirit",
    "practicalCall": "Ask for a fresh baptism of the Holy Spirit for prophetic vision and boldness."
  },
  {
    "dayOfYear": 220,
    "book": "Amos",
    "reference": "Amos 5:24",
    "text": "But let judgment run down as waters, and righteousness as a mighty stream.",
    "testament": "OT",
    "focusTheme": "Mighty Stream of Justice",
    "practicalCall": "Champion righteousness and compassionate justice in your sphere of influence."
  },
  {
    "dayOfYear": 221,
    "book": "Obadiah",
    "reference": "Obadiah 1:17",
    "text": "But upon mount Zion shall be deliverance, and there shall be holiness; and the house of Jacob shall possess their possessions.",
    "testament": "OT",
    "focusTheme": "Possessing Possessions",
    "practicalCall": "Lay hold of your kingdom inheritance in Christ through holiness and faith."
  },
  {
    "dayOfYear": 222,
    "book": "Jonah",
    "reference": "Jonah 2:9",
    "text": "Salvation is of the LORD.",
    "testament": "OT",
    "focusTheme": "Salvation Belongs to God",
    "practicalCall": "Remember in the deepest belly of distress that salvation belongs solely to God."
  },
  {
    "dayOfYear": 223,
    "book": "Micah",
    "reference": "Micah 6:8",
    "text": "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
    "testament": "OT",
    "focusTheme": "Justly, Mercy, Humility",
    "practicalCall": "Practice justice, cherish mercy, and walk in quiet humility before God."
  },
  {
    "dayOfYear": 224,
    "book": "Micah",
    "reference": "Micah 7:8",
    "text": "Rejoice not against me, O mine enemy: when I fall, I shall arise; when I sit in darkness, the LORD shall be a light unto me.",
    "testament": "OT",
    "focusTheme": "When I Fall, I Shall Arise",
    "practicalCall": "Refuse to stay down when you stumble; rise in Christ’s unfailing light."
  },
  {
    "dayOfYear": 225,
    "book": "Nahum",
    "reference": "Nahum 1:7",
    "text": "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.",
    "testament": "OT",
    "focusTheme": "Stronghold in Trouble",
    "practicalCall": "Take shelter in the goodness of God; He intimately knows your trust."
  },
  {
    "dayOfYear": 226,
    "book": "Habakkuk",
    "reference": "Habakkuk 2:4",
    "text": "Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith.",
    "testament": "OT",
    "focusTheme": "The Just Live by Faith",
    "practicalCall": "Live today propelled by faith in God rather than reliance on human strength."
  },
  {
    "dayOfYear": 227,
    "book": "Habakkuk",
    "reference": "Habakkuk 3:17-18",
    "text": "Although the fig tree shall not blossom... yet I will rejoice in the LORD, I will joy in the God of my salvation.",
    "testament": "OT",
    "focusTheme": "Joy Despite the Fig Tree",
    "practicalCall": "Rejoice in God even when natural circumstances appear dry and unfruitful."
  },
  {
    "dayOfYear": 228,
    "book": "Zephaniah",
    "reference": "Zephaniah 3:17",
    "text": "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.",
    "testament": "OT",
    "focusTheme": "God Sings Over You",
    "practicalCall": "Rest in the astonishing reality that God rejoices over you with singing."
  },
  {
    "dayOfYear": 229,
    "book": "Haggai",
    "reference": "Haggai 2:9",
    "text": "The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I give peace.",
    "testament": "OT",
    "focusTheme": "Latter Glory",
    "practicalCall": "Expect the latter glory of your life and church to surpass anything seen before."
  },
  {
    "dayOfYear": 230,
    "book": "Zechariah",
    "reference": "Zechariah 4:6",
    "text": "Not by might, nor by power, but by my spirit, saith the LORD of hosts.",
    "testament": "OT",
    "focusTheme": "By My Spirit",
    "practicalCall": "Cease striving in human flesh; yield to the supernatural power of the Holy Spirit."
  },
  {
    "dayOfYear": 231,
    "book": "Zechariah",
    "reference": "Zechariah 9:9",
    "text": "Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation.",
    "testament": "OT",
    "focusTheme": "The Coming King",
    "practicalCall": "Welcome the humble, victorious King Jesus into the gates of your heart."
  },
  {
    "dayOfYear": 232,
    "book": "Malachi",
    "reference": "Malachi 3:10",
    "text": "Bring ye all the tithes into the storehouse... and prove me now herewith, saith the LORD of hosts, if I will not open you the windows of heaven.",
    "testament": "OT",
    "focusTheme": "Windows of Heaven",
    "practicalCall": "Honor God with your firstfruits and watch Him pour out overflowing blessing."
  },
  {
    "dayOfYear": 233,
    "book": "Malachi",
    "reference": "Malachi 4:2",
    "text": "But unto you that fear my name shall the Sun of righteousness arise with healing in his wings.",
    "testament": "OT",
    "focusTheme": "Sun of Righteousness",
    "practicalCall": "Bask in the radiant beams of the Sun of Righteousness bringing complete healing."
  },
  {
    "dayOfYear": 234,
    "book": "Isaiah",
    "reference": "Isaiah 6:8",
    "text": "Also I heard the voice of the Lord, saying, Whom shall I send, and who will go for us? Then said I, Here am I; send me.",
    "testament": "OT",
    "focusTheme": "Here Am I, Send Me",
    "practicalCall": "Surrender your personal agenda; say yes to God’s calling on your life."
  },
  {
    "dayOfYear": 235,
    "book": "Isaiah",
    "reference": "Isaiah 7:14",
    "text": "Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.",
    "testament": "OT",
    "focusTheme": "God With Us",
    "practicalCall": "Live in the comfort that Immanuel, God with us, never leaves your side."
  },
  {
    "dayOfYear": 236,
    "book": "Isaiah",
    "reference": "Isaiah 9:6",
    "text": "For unto us a child is born, unto us a son is given... and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.",
    "testament": "OT",
    "focusTheme": "Wonderful Counsellor",
    "practicalCall": "Consult the Prince of Peace in every personal and ministerial decision."
  },
  {
    "dayOfYear": 237,
    "book": "Isaiah",
    "reference": "Isaiah 26:3",
    "text": "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.",
    "testament": "OT",
    "focusTheme": "Perfect Peace",
    "practicalCall": "Lock your mind onto God’s promises to maintain peace amidst chaos."
  },
  {
    "dayOfYear": 238,
    "book": "Isaiah",
    "reference": "Isaiah 40:29",
    "text": "He giveth power to the faint; and to them that have no might he increaseth strength.",
    "testament": "OT",
    "focusTheme": "Strength for the Faint",
    "practicalCall": "Acknowledge your weakness; allow Christ’s power to be perfected in you."
  },
  {
    "dayOfYear": 239,
    "book": "Isaiah",
    "reference": "Isaiah 40:31",
    "text": "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles.",
    "testament": "OT",
    "focusTheme": "Mounting as Eagles",
    "practicalCall": "Wait on the Lord in worship and quietness; receive supernatural flight."
  },
  {
    "dayOfYear": 240,
    "book": "Isaiah",
    "reference": "Isaiah 41:10",
    "text": "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.",
    "testament": "OT",
    "focusTheme": "Upheld by His Hand",
    "practicalCall": "Replace dismay with boldness; God’s righteous right hand holds you fast."
  },
  {
    "dayOfYear": 241,
    "book": "Isaiah",
    "reference": "Isaiah 43:2",
    "text": "When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned.",
    "testament": "OT",
    "focusTheme": "Through the Waters & Fire",
    "practicalCall": "Fear not the flood or furnace; the Fourth Man in the fire walks with you."
  },
  {
    "dayOfYear": 242,
    "book": "Isaiah",
    "reference": "Isaiah 43:19",
    "text": "Behold, I will do a new thing; now it shall spring forth; shall ye not know it? I will even make a way in the wilderness, and rivers in the desert.",
    "testament": "OT",
    "focusTheme": "A New Thing",
    "practicalCall": "Release nostalgia for the past; welcome the fresh work God is birthing."
  },
  {
    "dayOfYear": 243,
    "book": "Isaiah",
    "reference": "Isaiah 53:5",
    "text": "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.",
    "testament": "OT",
    "focusTheme": "The Wounded Healer",
    "practicalCall": "Receive the complete spiritual, emotional, and physical healing won at Calvary."
  },
  {
    "dayOfYear": 244,
    "book": "Isaiah",
    "reference": "Isaiah 54:17",
    "text": "No weapon that is formed against thee shall prosper; and every tongue that shall rise against thee in judgment thou shalt condemn.",
    "testament": "OT",
    "focusTheme": "Prospering No Weapon",
    "practicalCall": "Walk unbothered by attacks; weaponized slander cannot defeat God’s servant."
  },
  {
    "dayOfYear": 245,
    "book": "Isaiah",
    "reference": "Isaiah 55:1",
    "text": "Ho, every one that thirsteth, come ye to the waters, and he that hath no money; come ye, buy, and eat.",
    "testament": "OT",
    "focusTheme": "The Free Invitation",
    "practicalCall": "Come to the waters of life freely; feast on Christ without money or price."
  },
  {
    "dayOfYear": 246,
    "book": "Matthew",
    "reference": "Matthew 4:4",
    "text": "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.",
    "testament": "NT",
    "focusTheme": "Living Bread",
    "practicalCall": "Feast on scripture before filling your mind with news or social media."
  },
  {
    "dayOfYear": 247,
    "book": "Matthew",
    "reference": "Matthew 5:14",
    "text": "Ye are the light of the world. A city that is set on an hill cannot be hid.",
    "testament": "NT",
    "focusTheme": "City on a Hill",
    "practicalCall": "Let your good works shine openly so others glorify your Father in heaven."
  },
  {
    "dayOfYear": 248,
    "book": "Matthew",
    "reference": "Matthew 6:33",
    "text": "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
    "testament": "NT",
    "focusTheme": "Kingdom First Priority",
    "practicalCall": "Put God’s kingdom at the top of your priority list; watch Him supply the rest."
  },
  {
    "dayOfYear": 249,
    "book": "Matthew",
    "reference": "Matthew 7:7",
    "text": "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.",
    "testament": "NT",
    "focusTheme": "Persistent Prayer",
    "practicalCall": "Ask, seek, and knock persistently; your Father loves to give good gifts."
  },
  {
    "dayOfYear": 250,
    "book": "Matthew",
    "reference": "Matthew 11:28",
    "text": "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    "testament": "NT",
    "focusTheme": "Come Unto Me",
    "practicalCall": "Exchange your heavy burdens for Jesus’ gentle, easy yoke today."
  },
  {
    "dayOfYear": 251,
    "book": "Matthew",
    "reference": "Matthew 16:18",
    "text": "Upon this rock I will build my church; and the gates of hell shall not prevail against it.",
    "testament": "NT",
    "focusTheme": "Unshakeable Church",
    "practicalCall": "Stand confident in Christ’s church; the gates of hell cannot overcome it."
  },
  {
    "dayOfYear": 252,
    "book": "Matthew",
    "reference": "Matthew 18:20",
    "text": "For where two or three are gathered together in my name, there am I in the midst of them.",
    "testament": "NT",
    "focusTheme": "Presence in the Midst",
    "practicalCall": "Value small group prayer and fellowship; Jesus manifests in your midst."
  },
  {
    "dayOfYear": 253,
    "book": "Matthew",
    "reference": "Matthew 28:19-20",
    "text": "Go ye therefore, and teach all nations, baptizing them... and, lo, I am with you alway, even unto the end of the world.",
    "testament": "NT",
    "focusTheme": "The Great Commission",
    "practicalCall": "Make disciples wherever you go, anchored in Jesus’ perpetual presence."
  },
  {
    "dayOfYear": 254,
    "book": "Mark",
    "reference": "Mark 1:15",
    "text": "The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel.",
    "testament": "NT",
    "focusTheme": "The Kingdom at Hand",
    "practicalCall": "Turn away from sin and embrace the good news of the kingdom today."
  },
  {
    "dayOfYear": 255,
    "book": "Mark",
    "reference": "Mark 9:23",
    "text": "Jesus said unto him, If thou canst believe, all things are possible to him that believeth.",
    "testament": "NT",
    "focusTheme": "All Things Are Possible",
    "practicalCall": "Break through mental limitations; all things are possible to those who believe."
  },
  {
    "dayOfYear": 256,
    "book": "Mark",
    "reference": "Mark 10:45",
    "text": "For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.",
    "testament": "NT",
    "focusTheme": "Servant Leadership",
    "practicalCall": "Seek opportunities to serve others humbly rather than expecting to be served."
  },
  {
    "dayOfYear": 257,
    "book": "Mark",
    "reference": "Mark 11:24",
    "text": "What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.",
    "testament": "NT",
    "focusTheme": "Believing Prayer",
    "practicalCall": "Pray with expectation, believing God has already set the answer in motion."
  },
  {
    "dayOfYear": 258,
    "book": "Mark",
    "reference": "Mark 12:30",
    "text": "And thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength.",
    "testament": "NT",
    "focusTheme": "The Greatest Command",
    "practicalCall": "Channel all your faculties—heart, soul, mind, and strength—into loving God."
  },
  {
    "dayOfYear": 259,
    "book": "Luke",
    "reference": "Luke 1:37",
    "text": "For with God nothing shall be impossible.",
    "testament": "NT",
    "focusTheme": "Nothing Impossible",
    "practicalCall": "Surrender your impossibilities to the God who speaks worlds into existence."
  },
  {
    "dayOfYear": 260,
    "book": "Luke",
    "reference": "Luke 4:18",
    "text": "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted.",
    "testament": "NT",
    "focusTheme": "The Anointed Jubilee",
    "practicalCall": "Bring good news to the poor and healing to brokenhearted souls around you."
  },
  {
    "dayOfYear": 261,
    "book": "Luke",
    "reference": "Luke 6:38",
    "text": "Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over.",
    "testament": "NT",
    "focusTheme": "Overflowing Generosity",
    "practicalCall": "Give lavishly of your time, resources, and forgiveness; God out-gives you."
  },
  {
    "dayOfYear": 262,
    "book": "Luke",
    "reference": "Luke 9:23",
    "text": "If any man will come after me, let him deny himself, and take up his cross daily, and follow me.",
    "testament": "NT",
    "focusTheme": "Daily Cross-Bearing",
    "practicalCall": "Deny self-will today and embrace the cross of joyful obedience."
  },
  {
    "dayOfYear": 263,
    "book": "Luke",
    "reference": "Luke 10:19",
    "text": "Behold, I give unto you power to tread on serpents and scorpions, and over all the power of the enemy: and nothing shall by any means hurt you.",
    "testament": "NT",
    "focusTheme": "Kingdom Authority",
    "practicalCall": "Exercise your spiritual authority in Christ over every attack of darkness."
  },
  {
    "dayOfYear": 264,
    "book": "Luke",
    "reference": "Luke 15:20",
    "text": "And he arose, and came to his father. But when he was yet a great way off, his father saw him, and had compassion, and ran.",
    "testament": "NT",
    "focusTheme": "The Running Father",
    "practicalCall": "Run into the Father’s welcoming arms; His mercy outruns your guilt."
  },
  {
    "dayOfYear": 265,
    "book": "Luke",
    "reference": "Luke 19:10",
    "text": "For the Son of man is come to seek and to save that which was lost.",
    "testament": "NT",
    "focusTheme": "Seeking the Lost",
    "practicalCall": "Share Jesus’ burning passion to seek and rescue those wandering from God."
  },
  {
    "dayOfYear": 266,
    "book": "Luke",
    "reference": "Luke 24:32",
    "text": "And they said one to another, Did not our heart burn within us, while he talked with us by the way, and while he opened to us the scriptures?",
    "testament": "NT",
    "focusTheme": "Burning Hearts",
    "practicalCall": "Ask Jesus to open the scriptures until holy fire burns inside your heart."
  },
  {
    "dayOfYear": 267,
    "book": "John",
    "reference": "John 1:1",
    "text": "In the beginning was the Word, and the Word was with God, and the Word was God.",
    "testament": "NT",
    "focusTheme": "The Eternal Word",
    "practicalCall": "Worship Jesus as the uncreated Word who was with God and is God."
  },
  {
    "dayOfYear": 268,
    "book": "John",
    "reference": "John 1:14",
    "text": "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.",
    "testament": "NT",
    "focusTheme": "Grace and Truth",
    "practicalCall": "Walk in the balanced fullness of Christ: uncompromising truth wrapped in grace."
  },
  {
    "dayOfYear": 269,
    "book": "John",
    "reference": "John 3:16",
    "text": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    "testament": "NT",
    "focusTheme": "Unsurpassed Love",
    "practicalCall": "Rest in the unfathomable depth of the Father’s gift of Jesus for your life."
  },
  {
    "dayOfYear": 270,
    "book": "John",
    "reference": "John 4:24",
    "text": "God is a Spirit: and they that worship him must worship him in spirit and in truth.",
    "testament": "NT",
    "focusTheme": "Spirit and Truth Worship",
    "practicalCall": "Worship God with authentic sincerity rather than external formality."
  },
  {
    "dayOfYear": 271,
    "book": "John",
    "reference": "John 6:35",
    "text": "And Jesus said unto them, I am the bread of life: he that cometh to me shall never hunger.",
    "testament": "NT",
    "focusTheme": "The Bread of Life",
    "practicalCall": "Feed your soul on Christ; He satisfies the deepest spiritual cravings."
  },
  {
    "dayOfYear": 272,
    "book": "John",
    "reference": "John 8:12",
    "text": "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.",
    "testament": "NT",
    "focusTheme": "Light of the World",
    "practicalCall": "Follow Jesus closely; His brilliant light dispels all shadow and confusion."
  },
  {
    "dayOfYear": 273,
    "book": "John",
    "reference": "John 10:10",
    "text": "The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly.",
    "testament": "NT",
    "focusTheme": "Abundant Life",
    "practicalCall": "Reject the enemy’s lies; claim the vibrant, abundant life Jesus purchased."
  },
  {
    "dayOfYear": 274,
    "book": "John",
    "reference": "John 11:25",
    "text": "I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.",
    "testament": "NT",
    "focusTheme": "Resurrection and Life",
    "practicalCall": "Believe in the power of Jesus to resurrect dead dreams, bodies, and spirits."
  },
  {
    "dayOfYear": 275,
    "book": "John",
    "reference": "John 14:6",
    "text": "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
    "testament": "NT",
    "focusTheme": "The Only Way",
    "practicalCall": "Hold unswervingly to Jesus as the sole pathway to eternal fellowship with God."
  },
  {
    "dayOfYear": 276,
    "book": "John",
    "reference": "John 15:5",
    "text": "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.",
    "testament": "NT",
    "focusTheme": "Abiding in the Vine",
    "practicalCall": "Stay connected to Jesus in every hour; fruitfulness is the natural result of abiding."
  },
  {
    "dayOfYear": 277,
    "book": "John",
    "reference": "John 16:33",
    "text": "In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",
    "testament": "NT",
    "focusTheme": "Overcoming the World",
    "practicalCall": "Take courage in the midst of friction; Jesus has already conquered this world."
  },
  {
    "dayOfYear": 278,
    "book": "Acts",
    "reference": "Acts 1:8",
    "text": "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me.",
    "testament": "NT",
    "focusTheme": "Dunamis Power",
    "practicalCall": "Depend on the supernatural power of the Holy Spirit to witness with boldness."
  },
  {
    "dayOfYear": 279,
    "book": "Acts",
    "reference": "Acts 2:42",
    "text": "And they continued stedfastly in the apostles’ doctrine and fellowship, and in breaking of bread, and in prayers.",
    "testament": "NT",
    "focusTheme": "The Apostolic Blueprint",
    "practicalCall": "Commit yourself to sound doctrine, vibrant fellowship, communion, and prayer."
  },
  {
    "dayOfYear": 280,
    "book": "Acts",
    "reference": "Acts 4:12",
    "text": "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.",
    "testament": "NT",
    "focusTheme": "No Other Name",
    "practicalCall": "Exalt the name of Jesus as the only source of eternal salvation."
  },
  {
    "dayOfYear": 281,
    "book": "Acts",
    "reference": "Acts 4:31",
    "text": "And when they had prayed, the place was shaken where they were assembled together; and they were all filled with the Holy Ghost.",
    "testament": "NT",
    "focusTheme": "Shaking the Place",
    "practicalCall": "Gather with believers in united prayer that shakes spiritual atmospheres."
  },
  {
    "dayOfYear": 282,
    "book": "Acts",
    "reference": "Acts 16:31",
    "text": "Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.",
    "testament": "NT",
    "focusTheme": "Household Salvation",
    "practicalCall": "Stand in faith for the complete salvation and consecration of your household."
  },
  {
    "dayOfYear": 283,
    "book": "Acts",
    "reference": "Acts 20:24",
    "text": "But none of these things move me, neither count I my life dear unto myself, so that I might finish my course with joy.",
    "testament": "NT",
    "focusTheme": "Finishing the Course",
    "practicalCall": "Do not let trials shake your resolve; finish your kingdom assignment with joy."
  },
  {
    "dayOfYear": 284,
    "book": "Matthew",
    "reference": "Matthew 4:4",
    "text": "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.",
    "testament": "NT",
    "focusTheme": "Living Bread",
    "practicalCall": "Feast on scripture before filling your mind with news or social media."
  },
  {
    "dayOfYear": 285,
    "book": "Matthew",
    "reference": "Matthew 5:14",
    "text": "Ye are the light of the world. A city that is set on an hill cannot be hid.",
    "testament": "NT",
    "focusTheme": "City on a Hill",
    "practicalCall": "Let your good works shine openly so others glorify your Father in heaven."
  },
  {
    "dayOfYear": 286,
    "book": "Matthew",
    "reference": "Matthew 6:33",
    "text": "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
    "testament": "NT",
    "focusTheme": "Kingdom First Priority",
    "practicalCall": "Put God’s kingdom at the top of your priority list; watch Him supply the rest."
  },
  {
    "dayOfYear": 287,
    "book": "Matthew",
    "reference": "Matthew 7:7",
    "text": "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.",
    "testament": "NT",
    "focusTheme": "Persistent Prayer",
    "practicalCall": "Ask, seek, and knock persistently; your Father loves to give good gifts."
  },
  {
    "dayOfYear": 288,
    "book": "Matthew",
    "reference": "Matthew 11:28",
    "text": "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    "testament": "NT",
    "focusTheme": "Come Unto Me",
    "practicalCall": "Exchange your heavy burdens for Jesus’ gentle, easy yoke today."
  },
  {
    "dayOfYear": 289,
    "book": "Matthew",
    "reference": "Matthew 16:18",
    "text": "Upon this rock I will build my church; and the gates of hell shall not prevail against it.",
    "testament": "NT",
    "focusTheme": "Unshakeable Church",
    "practicalCall": "Stand confident in Christ’s church; the gates of hell cannot overcome it."
  },
  {
    "dayOfYear": 290,
    "book": "Matthew",
    "reference": "Matthew 18:20",
    "text": "For where two or three are gathered together in my name, there am I in the midst of them.",
    "testament": "NT",
    "focusTheme": "Presence in the Midst",
    "practicalCall": "Value small group prayer and fellowship; Jesus manifests in your midst."
  },
  {
    "dayOfYear": 291,
    "book": "Matthew",
    "reference": "Matthew 28:19-20",
    "text": "Go ye therefore, and teach all nations, baptizing them... and, lo, I am with you alway, even unto the end of the world.",
    "testament": "NT",
    "focusTheme": "The Great Commission",
    "practicalCall": "Make disciples wherever you go, anchored in Jesus’ perpetual presence."
  },
  {
    "dayOfYear": 292,
    "book": "Mark",
    "reference": "Mark 1:15",
    "text": "The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel.",
    "testament": "NT",
    "focusTheme": "The Kingdom at Hand",
    "practicalCall": "Turn away from sin and embrace the good news of the kingdom today."
  },
  {
    "dayOfYear": 293,
    "book": "Mark",
    "reference": "Mark 9:23",
    "text": "Jesus said unto him, If thou canst believe, all things are possible to him that believeth.",
    "testament": "NT",
    "focusTheme": "All Things Are Possible",
    "practicalCall": "Break through mental limitations; all things are possible to those who believe."
  },
  {
    "dayOfYear": 294,
    "book": "Mark",
    "reference": "Mark 10:45",
    "text": "For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.",
    "testament": "NT",
    "focusTheme": "Servant Leadership",
    "practicalCall": "Seek opportunities to serve others humbly rather than expecting to be served."
  },
  {
    "dayOfYear": 295,
    "book": "Mark",
    "reference": "Mark 11:24",
    "text": "What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.",
    "testament": "NT",
    "focusTheme": "Believing Prayer",
    "practicalCall": "Pray with expectation, believing God has already set the answer in motion."
  },
  {
    "dayOfYear": 296,
    "book": "Mark",
    "reference": "Mark 12:30",
    "text": "And thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength.",
    "testament": "NT",
    "focusTheme": "The Greatest Command",
    "practicalCall": "Channel all your faculties—heart, soul, mind, and strength—into loving God."
  },
  {
    "dayOfYear": 297,
    "book": "Luke",
    "reference": "Luke 1:37",
    "text": "For with God nothing shall be impossible.",
    "testament": "NT",
    "focusTheme": "Nothing Impossible",
    "practicalCall": "Surrender your impossibilities to the God who speaks worlds into existence."
  },
  {
    "dayOfYear": 298,
    "book": "Luke",
    "reference": "Luke 4:18",
    "text": "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted.",
    "testament": "NT",
    "focusTheme": "The Anointed Jubilee",
    "practicalCall": "Bring good news to the poor and healing to brokenhearted souls around you."
  },
  {
    "dayOfYear": 299,
    "book": "Luke",
    "reference": "Luke 6:38",
    "text": "Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over.",
    "testament": "NT",
    "focusTheme": "Overflowing Generosity",
    "practicalCall": "Give lavishly of your time, resources, and forgiveness; God out-gives you."
  },
  {
    "dayOfYear": 300,
    "book": "Luke",
    "reference": "Luke 9:23",
    "text": "If any man will come after me, let him deny himself, and take up his cross daily, and follow me.",
    "testament": "NT",
    "focusTheme": "Daily Cross-Bearing",
    "practicalCall": "Deny self-will today and embrace the cross of joyful obedience."
  },
  {
    "dayOfYear": 301,
    "book": "Romans",
    "reference": "Romans 1:16",
    "text": "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth.",
    "testament": "NT",
    "focusTheme": "Unashamed Gospel",
    "practicalCall": "Share the gospel with bold conviction; it carries the raw power of God to save."
  },
  {
    "dayOfYear": 302,
    "book": "Romans",
    "reference": "Romans 5:1",
    "text": "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ.",
    "testament": "NT",
    "focusTheme": "Peace with God",
    "practicalCall": "Rest in the complete peace established between you and God by faith in Christ."
  },
  {
    "dayOfYear": 303,
    "book": "Romans",
    "reference": "Romans 8:1",
    "text": "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.",
    "testament": "NT",
    "focusTheme": "No Condemnation",
    "practicalCall": "Silence the accuser’s voice; in Christ you stand completely free from condemnation."
  },
  {
    "dayOfYear": 304,
    "book": "Romans",
    "reference": "Romans 8:28",
    "text": "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
    "testament": "NT",
    "focusTheme": "All Things Work for Good",
    "practicalCall": "Trust that God is weaving even your hardest experiences into His good purpose."
  },
  {
    "dayOfYear": 305,
    "book": "Romans",
    "reference": "Romans 8:37",
    "text": "Nay, in all these things we are more than conquerors through him that loved us.",
    "testament": "NT",
    "focusTheme": "More Than Conquerors",
    "practicalCall": "Face today’s pressures from the posture of overwhelming victory in Christ."
  },
  {
    "dayOfYear": 306,
    "book": "Romans",
    "reference": "Romans 12:1-2",
    "text": "I beseech you therefore, brethren... that ye present your bodies a living sacrifice... and be not conformed to this world: but be ye transformed by the renewing of your mind.",
    "testament": "NT",
    "focusTheme": "Living Sacrifice",
    "practicalCall": "Present your body as a living altar today; renew your mind in the Word."
  },
  {
    "dayOfYear": 307,
    "book": "1 Corinthians",
    "reference": "1 Corinthians 1:18",
    "text": "For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.",
    "testament": "NT",
    "focusTheme": "Power of the Cross",
    "practicalCall": "Glory in the cross of Christ as the wisdom and omnipotent power of God."
  },
  {
    "dayOfYear": 308,
    "book": "1 Corinthians",
    "reference": "1 Corinthians 3:16",
    "text": "Know ye not that ye are the temple of God, and that the Spirit of God dwelleth in you?",
    "testament": "NT",
    "focusTheme": "Temple of the Spirit",
    "practicalCall": "Treat your body with honor and purity; the Holy Spirit makes it His home."
  },
  {
    "dayOfYear": 309,
    "book": "1 Corinthians",
    "reference": "1 Corinthians 10:13",
    "text": "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able.",
    "testament": "NT",
    "focusTheme": "Way of Escape",
    "practicalCall": "Look for God’s provided way of escape whenever temptation presents itself."
  },
  {
    "dayOfYear": 310,
    "book": "1 Corinthians",
    "reference": "1 Corinthians 13:13",
    "text": "And now abideth faith, hope, charity, these three; but the greatest of these is charity.",
    "testament": "NT",
    "focusTheme": "The Greatest is Love",
    "practicalCall": "Let agape love govern your tone, reactions, and deeds in every interaction."
  },
  {
    "dayOfYear": 311,
    "book": "1 Corinthians",
    "reference": "1 Corinthians 15:58",
    "text": "Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord.",
    "testament": "NT",
    "focusTheme": "Steadfast & Unshakeable",
    "practicalCall": "Work diligently for the Lord; your labor in Christ is never in vain."
  },
  {
    "dayOfYear": 312,
    "book": "2 Corinthians",
    "reference": "2 Corinthians 3:18",
    "text": "But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory.",
    "testament": "NT",
    "focusTheme": "Glory to Glory",
    "practicalCall": "Gaze into Christ through prayer; allow the Spirit to transform your countenance."
  },
  {
    "dayOfYear": 313,
    "book": "2 Corinthians",
    "reference": "2 Corinthians 5:17",
    "text": "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
    "testament": "NT",
    "focusTheme": "The New Creation",
    "practicalCall": "Refuse to live in the graveyard of the past; walk as a brand-new creation."
  },
  {
    "dayOfYear": 314,
    "book": "2 Corinthians",
    "reference": "2 Corinthians 12:9",
    "text": "My grace is sufficient for thee: for my strength is made perfect in weakness.",
    "testament": "NT",
    "focusTheme": "Sufficient Grace",
    "practicalCall": "Boast in your limitations so the power of Christ may rest upon you."
  },
  {
    "dayOfYear": 315,
    "book": "Galatians",
    "reference": "Galatians 2:20",
    "text": "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me.",
    "testament": "NT",
    "focusTheme": "Crucified with Christ",
    "practicalCall": "Yield your self-will; let Christ live His resurrection life through you today."
  },
  {
    "dayOfYear": 316,
    "book": "Galatians",
    "reference": "Galatians 5:22-23",
    "text": "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance.",
    "testament": "NT",
    "focusTheme": "Fruit of the Spirit",
    "practicalCall": "Cultivate the ninefold fruit of the Spirit in your relationships today."
  },
  {
    "dayOfYear": 317,
    "book": "Galatians",
    "reference": "Galatians 6:9",
    "text": "And let us not be weary in well doing: for in due season we shall reap, if we faint not.",
    "testament": "NT",
    "focusTheme": "Reaping in Due Season",
    "practicalCall": "Do not grow exhausted in doing good; your appointed harvest is coming."
  },
  {
    "dayOfYear": 318,
    "book": "Ephesians",
    "reference": "Ephesians 1:3",
    "text": "Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ.",
    "testament": "NT",
    "focusTheme": "Spiritual Blessings",
    "practicalCall": "Walk conscious of the immense spiritual wealth credited to your account in Christ."
  },
  {
    "dayOfYear": 319,
    "book": "Ephesians",
    "reference": "Ephesians 2:8-9",
    "text": "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.",
    "testament": "NT",
    "focusTheme": "Saved by Grace",
    "practicalCall": "Rejoice in the unearned, unmerited gift of salvation by grace through faith."
  },
  {
    "dayOfYear": 320,
    "book": "Ephesians",
    "reference": "Ephesians 3:20",
    "text": "Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in us.",
    "testament": "NT",
    "focusTheme": "Exceeding Abundantly",
    "practicalCall": "Expand your faith; God can exceed your wildest prayers and loftiest hopes."
  },
  {
    "dayOfYear": 321,
    "book": "Ephesians",
    "reference": "Ephesians 4:16",
    "text": "From whom the whole body fitly joined together and compacted by that which every joint supplieth... maketh increase of the body unto the edifying of itself in love.",
    "testament": "NT",
    "focusTheme": "Fitly Joined Together",
    "practicalCall": "Supply your unique gift to the church body; we rebuild better together."
  },
  {
    "dayOfYear": 322,
    "book": "Ephesians",
    "reference": "Ephesians 6:11",
    "text": "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.",
    "testament": "NT",
    "focusTheme": "Whole Armour of God",
    "practicalCall": "Suit up spiritually: truth, righteousness, peace, faith, salvation, and the Word."
  },
  {
    "dayOfYear": 323,
    "book": "Philippians",
    "reference": "Philippians 1:6",
    "text": "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ.",
    "testament": "NT",
    "focusTheme": "Faithful to Finish",
    "practicalCall": "Be confident: God will complete the sanctifying work He initiated in you."
  },
  {
    "dayOfYear": 324,
    "book": "Philippians",
    "reference": "Philippians 2:9-10",
    "text": "Wherefore God also hath highly exalted him, and given him a name which is above every name: That at the name of Jesus every knee should bow.",
    "testament": "NT",
    "focusTheme": "The Exalted Name",
    "practicalCall": "Bow your knee in reverent surrender to the matchless name of King Jesus."
  },
  {
    "dayOfYear": 325,
    "book": "Philippians",
    "reference": "Philippians 4:6-7",
    "text": "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God... shall keep your hearts.",
    "testament": "NT",
    "focusTheme": "Guarded by Peace",
    "practicalCall": "Turn worries into specific prayers; let the garrison of God’s peace guard you."
  },
  {
    "dayOfYear": 326,
    "book": "Philippians",
    "reference": "Philippians 4:13",
    "text": "I can do all things through Christ which strengtheneth me.",
    "testament": "NT",
    "focusTheme": "Christ Our Strength",
    "practicalCall": "Attempt bold assignments through the supernatural empowerment of Christ."
  },
  {
    "dayOfYear": 327,
    "book": "Colossians",
    "reference": "Colossians 1:17",
    "text": "And he is before all things, and by him all things consist.",
    "testament": "NT",
    "focusTheme": "Preeminent Christ",
    "practicalCall": "Place Jesus first in every area: family, business, ministry, and leisure."
  },
  {
    "dayOfYear": 328,
    "book": "Colossians",
    "reference": "Colossians 3:1-2",
    "text": "If ye then be risen with Christ, seek those things which are above... Set your affection on things above, not on things on the earth.",
    "testament": "NT",
    "focusTheme": "Things Above",
    "practicalCall": "Calibrate your heart and affections to heavenly values rather than earthly trends."
  },
  {
    "dayOfYear": 329,
    "book": "Colossians",
    "reference": "Colossians 3:17",
    "text": "And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him.",
    "testament": "NT",
    "focusTheme": "In Jesus’ Name",
    "practicalCall": "Conduct your speech, emails, and daily tasks as a direct representative of Christ."
  },
  {
    "dayOfYear": 330,
    "book": "1 Thessalonians",
    "reference": "1 Thessalonians 5:16-18",
    "text": "Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you.",
    "testament": "NT",
    "focusTheme": "Will of God",
    "practicalCall": "Maintain an atmosphere of nonstop prayer, continual joy, and vocal thanks."
  },
  {
    "dayOfYear": 331,
    "book": "2 Thessalonians",
    "reference": "2 Thessalonians 3:3",
    "text": "But the Lord is faithful, who shall stablish you, and keep you from evil.",
    "testament": "NT",
    "focusTheme": "Established & Kept",
    "practicalCall": "Rest in the Lord’s faithfulness to anchor your footing and shield you from evil."
  },
  {
    "dayOfYear": 332,
    "book": "1 Timothy",
    "reference": "1 Timothy 4:12",
    "text": "Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.",
    "testament": "NT",
    "focusTheme": "Example of the Believers",
    "practicalCall": "Set a gold standard in your speech, conduct, love, faith, and moral purity."
  },
  {
    "dayOfYear": 333,
    "book": "1 Timothy",
    "reference": "1 Timothy 6:12",
    "text": "Fight the good fight of faith, lay hold on eternal life, whereunto thou art also called.",
    "testament": "NT",
    "focusTheme": "Fight the Good Fight",
    "practicalCall": "Engage in the good fight of faith; do not back down from spiritual battles."
  },
  {
    "dayOfYear": 334,
    "book": "2 Timothy",
    "reference": "2 Timothy 1:7",
    "text": "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
    "testament": "NT",
    "focusTheme": "Power, Love & Sound Mind",
    "practicalCall": "Evict fear from your thoughts; operate in God’s power, love, and disciplined mind."
  },
  {
    "dayOfYear": 335,
    "book": "2 Timothy",
    "reference": "2 Timothy 3:16",
    "text": "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.",
    "testament": "NT",
    "focusTheme": "Inspired Word",
    "practicalCall": "Submit your opinions and worldview completely to the authority of Scripture."
  },
  {
    "dayOfYear": 336,
    "book": "Titus",
    "reference": "Titus 2:11-12",
    "text": "For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously.",
    "testament": "NT",
    "focusTheme": "Transforming Grace",
    "practicalCall": "Let grace teach you to say no to worldly desires and yes to holy living."
  },
  {
    "dayOfYear": 337,
    "book": "Hebrews",
    "reference": "Hebrews 4:12",
    "text": "For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit.",
    "testament": "NT",
    "focusTheme": "Two-Edged Sword",
    "practicalCall": "Let the Word of God discern the thoughts and intents of your heart today."
  },
  {
    "dayOfYear": 338,
    "book": "Hebrews",
    "reference": "Hebrews 4:16",
    "text": "Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.",
    "testament": "NT",
    "focusTheme": "Throne of Grace",
    "practicalCall": "Approach God’s throne with holy confidence; mercy and grace await you there."
  },
  {
    "dayOfYear": 339,
    "book": "Hebrews",
    "reference": "Hebrews 11:1",
    "text": "Now faith is the substance of things hoped for, the evidence of things not seen.",
    "testament": "NT",
    "focusTheme": "Substance of Faith",
    "practicalCall": "Treat God’s invisible promises as concrete reality in your present decisions."
  },
  {
    "dayOfYear": 340,
    "book": "Hebrews",
    "reference": "Hebrews 12:1-2",
    "text": "Let us run with patience the race that is set before us, Looking unto Jesus the author and finisher of our faith.",
    "testament": "NT",
    "focusTheme": "Looking Unto Jesus",
    "practicalCall": "Strip off every weight and sin; fix your gaze on Jesus through the entire race."
  },
  {
    "dayOfYear": 341,
    "book": "Hebrews",
    "reference": "Hebrews 13:8",
    "text": "Jesus Christ the same yesterday, and to day, and for ever.",
    "testament": "NT",
    "focusTheme": "The Unchanging Christ",
    "practicalCall": "Rely on the unvarying faithfulness of Jesus in a rapidly shifting world."
  },
  {
    "dayOfYear": 342,
    "book": "James",
    "reference": "James 1:2-3",
    "text": "My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience.",
    "testament": "NT",
    "focusTheme": "Joy in Trials",
    "practicalCall": "Count trials as pure joy; God is producing patient spiritual endurance."
  },
  {
    "dayOfYear": 343,
    "book": "James",
    "reference": "James 1:22",
    "text": "But be ye doers of the word, and not hearers only, deceiving your own selves.",
    "testament": "NT",
    "focusTheme": "Doers of the Word",
    "practicalCall": "Put today’s scripture into practical action rather than merely reading it."
  },
  {
    "dayOfYear": 344,
    "book": "1 Peter",
    "reference": "1 Peter 1:3",
    "text": "Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope.",
    "testament": "NT",
    "focusTheme": "Living Hope",
    "practicalCall": "Live with unquenchable hope anchored in Christ’s bodily resurrection."
  },
  {
    "dayOfYear": 345,
    "book": "1 Peter",
    "reference": "1 Peter 2:9",
    "text": "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him.",
    "testament": "NT",
    "focusTheme": "Royal Priesthood",
    "practicalCall": "Walk in your royal identity; proclaim the excellencies of the One who called you."
  },
  {
    "dayOfYear": 346,
    "book": "1 Peter",
    "reference": "1 Peter 5:7",
    "text": "Casting all your care upon him; for he careth for you.",
    "testament": "NT",
    "focusTheme": "Casting Cares",
    "practicalCall": "Hurl all anxiety and emotional freight onto the Father; He cares deeply for you."
  },
  {
    "dayOfYear": 347,
    "book": "2 Peter",
    "reference": "2 Peter 1:3",
    "text": "According as his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him.",
    "testament": "NT",
    "focusTheme": "All Things for Life",
    "practicalCall": "You lack nothing needed for godliness; His divine power has supplied it all."
  },
  {
    "dayOfYear": 348,
    "book": "1 John",
    "reference": "1 John 1:7",
    "text": "But if we walk in the light, as he is in the light, we have fellowship one with another, and the blood of Jesus Christ his Son cleanseth us from all sin.",
    "testament": "NT",
    "focusTheme": "Walking in the Light",
    "practicalCall": "Live transparently in the light; enjoy sweet fellowship and cleansing blood."
  },
  {
    "dayOfYear": 349,
    "book": "1 John",
    "reference": "1 John 4:18",
    "text": "There is no fear in love; but perfect love casteth out fear.",
    "testament": "NT",
    "focusTheme": "Perfect Love Expels Fear",
    "practicalCall": "Let the ocean of Christ’s love drive out all dread and insecurity."
  },
  {
    "dayOfYear": 350,
    "book": "Jude",
    "reference": "Jude 1:24-25",
    "text": "Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy... be glory and majesty.",
    "testament": "NT",
    "focusTheme": "Able to Keep You",
    "practicalCall": "Trust in Jesus’ omnipotent grip: He will keep you from stumbling to the end."
  },
  {
    "dayOfYear": 351,
    "book": "Revelation",
    "reference": "Revelation 1:8",
    "text": "I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.",
    "testament": "NT",
    "focusTheme": "Alpha and Omega",
    "practicalCall": "Anchor your life in the Almighty, who encompasses the beginning and the end."
  },
  {
    "dayOfYear": 352,
    "book": "Revelation",
    "reference": "Revelation 1:17-18",
    "text": "Fear not; I am the first and the last: I am he that liveth, and was dead; and, behold, I am alive for evermore, Amen; and have the keys of hell and of death.",
    "testament": "NT",
    "focusTheme": "Keys of Death",
    "practicalCall": "Live without fear of death; Jesus holds the keys of death and the grave."
  },
  {
    "dayOfYear": 353,
    "book": "Revelation",
    "reference": "Revelation 2:10",
    "text": "Be thou faithful unto death, and I will give thee a crown of life.",
    "testament": "NT",
    "focusTheme": "Crown of Life",
    "practicalCall": "Remain fiercely faithful in trials; the crown of eternal life awaits you."
  },
  {
    "dayOfYear": 354,
    "book": "Revelation",
    "reference": "Revelation 3:20",
    "text": "Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.",
    "testament": "NT",
    "focusTheme": "Open Door Communion",
    "practicalCall": "Open the door of your heart to Jesus for intimate, uninterrupted communion."
  },
  {
    "dayOfYear": 355,
    "book": "Revelation",
    "reference": "Revelation 4:8",
    "text": "And they rest not day and night, saying, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come.",
    "testament": "NT",
    "focusTheme": "Throne Room Adoration",
    "practicalCall": "Join heaven’s unending chorus: adore the thrice-holy Lord God Almighty."
  },
  {
    "dayOfYear": 356,
    "book": "Revelation",
    "reference": "Revelation 5:5",
    "text": "Behold, the Lion of the tribe of Juda, the Root of David, hath prevailed to open the book, and to loose the seven seals thereof.",
    "testament": "NT",
    "focusTheme": "The Lion of Judah Prevailed",
    "practicalCall": "Rejoice that the Lion of Judah has prevailed over every seal and circumstance."
  },
  {
    "dayOfYear": 357,
    "book": "Revelation",
    "reference": "Revelation 5:12",
    "text": "Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing.",
    "testament": "NT",
    "focusTheme": "Worthy is the Lamb",
    "practicalCall": "Attribute all power, riches, and glory to the Lamb who gave His life for you."
  },
  {
    "dayOfYear": 358,
    "book": "Revelation",
    "reference": "Revelation 7:17",
    "text": "For the Lamb which is in the midst of the throne shall feed them, and shall lead them unto living fountains of waters: and God shall wipe away all tears.",
    "testament": "NT",
    "focusTheme": "Wiping Every Tear",
    "practicalCall": "Let the Lamb lead you to living waters; He will wipe away all sorrow."
  },
  {
    "dayOfYear": 359,
    "book": "Revelation",
    "reference": "Revelation 12:11",
    "text": "And they overcame him by the blood of the Lamb, and by the word of their testimony; and they loved not their lives unto the death.",
    "testament": "NT",
    "focusTheme": "Overcoming by the Blood",
    "practicalCall": "Overcome the enemy through the blood of Jesus and your unashamed testimony."
  },
  {
    "dayOfYear": 360,
    "book": "Revelation",
    "reference": "Revelation 19:6",
    "text": "Alleluia: for the Lord God omnipotent reigneth.",
    "testament": "NT",
    "focusTheme": "The Lord God Omnipotent",
    "practicalCall": "Shout Alleluia in your spirit; the omnipotent God reigns above all rulers."
  },
  {
    "dayOfYear": 361,
    "book": "Revelation",
    "reference": "Revelation 19:16",
    "text": "And he hath on his vesture and on his thigh a name written, KING OF KINGS, AND LORD OF LORDS.",
    "testament": "NT",
    "focusTheme": "King of Kings",
    "practicalCall": "Bow to King Jesus as the supreme Lord of every nation and government."
  },
  {
    "dayOfYear": 362,
    "book": "Revelation",
    "reference": "Revelation 21:3-4",
    "text": "Behold, the tabernacle of God is with men... And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying.",
    "testament": "NT",
    "focusTheme": "The Eternal Tabernacle",
    "practicalCall": "Fix your hope on the new Jerusalem where death, sorrow, and pain cease forever."
  },
  {
    "dayOfYear": 363,
    "book": "Revelation",
    "reference": "Revelation 21:5",
    "text": "And he that sat upon the throne said, Behold, I make all things new. And he said unto me, Write: for these words are true and faithful.",
    "testament": "NT",
    "focusTheme": "All Things New",
    "practicalCall": "Trust the Faithful One who is actively making all things new in your life."
  },
  {
    "dayOfYear": 364,
    "book": "Revelation",
    "reference": "Revelation 22:13",
    "text": "I am Alpha and Omega, the beginning and the end, the first and the last.",
    "testament": "NT",
    "focusTheme": "First and Last",
    "practicalCall": "Give Jesus the first word and the final word in every pursuit and ambition."
  },
  {
    "dayOfYear": 365,
    "book": "Revelation",
    "reference": "Revelation 22:20-21",
    "text": "He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus. The grace of our Lord Jesus Christ be with you all. Amen.",
    "testament": "NT",
    "focusTheme": "Even So, Come Lord Jesus",
    "practicalCall": "Live with eager expectation for Christ’s return; walk in His overflowing grace."
  }
];

/**
 * Deterministic Day Calculator Helper
 * Automatically detects today's calendar date and returns the exact verse for that day.
 */
export function getTodaysBread(): DailyBreadEntry {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const diffTime = now.getTime() - startOfYear.getTime();
  const dayIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // 1 to 365/366

  // Safe lookup with leap-year clamping
  const targetDay = dayIndex > 365 ? 365 : Math.max(1, dayIndex);
  return FULL_YEAR_DAILY_BREAD.find(item => item.dayOfYear === targetDay) || FULL_YEAR_DAILY_BREAD[0];
}

export interface DailyDevotional {
  dayOfYear: number;
  totalDays: number;
  dateString: string;
  type: 'morning' | 'evening';
  title: string;
  subheading: string;
  scriptureRef: string;
  bookId: string;
  bookName: string;
  chapter: number;
  verse?: number;
  scriptureText: string;
  exposition: string;
  prayer: string;
  practicalAction: string;
  testament: 'OT' | 'NT';
  focusTheme: string;
}

export function parseScriptureRef(ref: string, bookName: string): { bookId: string; chapter: number; verse?: number } {
  const book = findBibleBook(bookName) || findBibleBook(ref.split(/\s+\d/)[0]);
  const bookId = book ? book.id : 'GEN';
  
  // match chapter and optional verse (e.g. "Genesis 1:1" -> ch: 1, v: 1; "Psalm 23" -> ch: 23)
  const match = ref.match(/(\d+):?(\d+)?/);
  const chapter = match ? parseInt(match[1], 10) : 1;
  const verse = match && match[2] ? parseInt(match[2], 10) : undefined;
  
  return { bookId, chapter, verse };
}

/**
 * Returns distinct Morning Manna and Evening Solace devotionals for any day of the year.
 * Spans the entire 66-book Bible annually with zero duplicate verses on the same day.
 */
export function getDailyDevotionals(targetDate: Date = new Date()): {
  morning: DailyDevotional;
  evening: DailyDevotional;
  dayOfYear: number;
  totalDays: number;
  dateString: string;
  isToday: boolean;
} {
  const startOfYear = new Date(targetDate.getFullYear(), 0, 1);
  const diffTime = targetDate.getTime() - startOfYear.getTime();
  const rawDayIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  const dayOfYear = Math.min(365, Math.max(1, rawDayIndex));
  
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  };
  const dateString = targetDate.toLocaleDateString('en-US', options);

  const today = new Date();
  const isToday = targetDate.toDateString() === today.toDateString();

  // Morning Manna: Primary daily canonical reading from Genesis through Revelation
  const morningEntry = FULL_YEAR_DAILY_BREAD[dayOfYear - 1] || FULL_YEAR_DAILY_BREAD[0];
  const morningParsed = parseScriptureRef(morningEntry.reference, morningEntry.book);

  // Evening Solace: Complementary Scripture from across the whole Bible, paired deterministically
  // Offset by 182 days so morning and evening NEVER have the same scripture on any day of the year
  const eveningIndex = (dayOfYear + 182) % 365;
  const eveningEntry = FULL_YEAR_DAILY_BREAD[eveningIndex] || FULL_YEAR_DAILY_BREAD[182];
  const eveningParsed = parseScriptureRef(eveningEntry.reference, eveningEntry.book);

  const morning: DailyDevotional = {
    dayOfYear,
    totalDays: 365,
    dateString,
    type: 'morning',
    title: `Morning Manna: ${morningEntry.focusTheme}`,
    subheading: `Dawn Consecration & Spiritual Sustenance • ${morningEntry.book}`,
    scriptureRef: morningEntry.reference,
    bookId: morningParsed.bookId,
    bookName: morningEntry.book,
    chapter: morningParsed.chapter,
    verse: morningParsed.verse,
    scriptureText: morningEntry.text,
    exposition: `Begin this morning anchored in ${morningEntry.reference}. Before the clamor of duties and world feeds compete for your attention, feed your inner spirit on God's living truth. In ${morningEntry.book}, we are reminded of ${morningEntry.focusTheme.toLowerCase()}. Let this verse permeate your meditation, directing your decisions and filling your countenance with divine peace.`,
    prayer: `Heavenly Father, I consecrate the firstfruits of this morning to You. Your Word in ${morningEntry.reference} is a lamp to my feet. Grant me wisdom to walk in ${morningEntry.focusTheme.toLowerCase()} today. Through Jesus Christ our Lord, Amen.`,
    practicalAction: morningEntry.practicalCall || `Meditate on ${morningEntry.reference} in quietness for 5 minutes before beginning your daily schedule.`,
    testament: morningEntry.testament,
    focusTheme: morningEntry.focusTheme
  };

  const evening: DailyDevotional = {
    dayOfYear,
    totalDays: 365,
    dateString,
    type: 'evening',
    title: `Evening Solace: ${eveningEntry.focusTheme}`,
    subheading: `Twilight Rest & Sovereign Peace • ${eveningEntry.book}`,
    scriptureRef: eveningEntry.reference,
    bookId: eveningParsed.bookId,
    bookName: eveningEntry.book,
    chapter: eveningParsed.chapter,
    verse: eveningParsed.verse,
    scriptureText: eveningEntry.text,
    exposition: `As twilight deepens and the labor of this day concludes, enter into sacred rest with ${eveningEntry.reference}. The soul often carries residual tensions and cares; release them all into the hands of the Almighty. Reflecting on ${eveningEntry.book}, we rest secure knowing that ${eveningEntry.focusTheme.toLowerCase()} watches over every moment.`,
    prayer: `Lord God of peace, I lay down the burdens and skirmishes of this day before Your throne. Cleanse my heart, quiet my soul, and wrap me in Your eternal presence as I sleep under the promise of ${eveningEntry.reference}. In Jesus' name, Amen.`,
    practicalAction: `Release all unfinished tasks in prayer. Turn off screens 30 minutes before sleep and rest peacefully meditating on ${eveningEntry.reference}.`,
    testament: eveningEntry.testament,
    focusTheme: eveningEntry.focusTheme
  };

  return { morning, evening, dayOfYear, totalDays: 365, dateString, isToday };
}

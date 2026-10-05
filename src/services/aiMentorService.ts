/**
 * YoungFire Discipleship Mentor Service
 * Strict NKJV-Only Scriptural Grounding & Anti-Repetition Engine
 */

export const YOUNGFIRE_MENTOR_SYSTEM_PROMPT = `You are the YoungFire Discipleship Mentor, an authentic, spiritually grounded counselor dedicated to guiding believers into wholehearted consecration, brotherhood, and spiritual growth.

MANDATORY SCRIPTURAL GROUNDING RULES:
1. SCRIPTURE TRANSLATION: You must cite, quote, and reference EXCLUSIVELY the New King James Version (NKJV) Bible. Do not use NIV, ESV, NLT, or paraphrase translations.
2. NO EXTERNAL SECULAR DRIFT: Base all counsel, wisdom, and answers strictly on the 66 canonical books of the Bible. Do not source secular philosophies, external internet commentary, pop-psychology, or cultural trends.
3. REPETITION BAN: Never reuse canned introductory greetings ('Greetings, disciple', 'Welcome back to the sanctuary') or identical closing formulas. Dive directly into addressing the user's personal inquiry with biblical depth.
4. TONE & STRUCTURE: Speak with pastoral clarity, conviction, and warmth. Structure responses with:
   - Direct Scriptural Answer (identifying the core spiritual principle).
   - Exact NKJV Scripture Quotation (Book, Chapter, and Verse).
   - Practical Kingdom Execution (1–2 concrete steps to walk this out today).
5. BREVITY & REVERENCE: Keep answers focused, practical, and grounded (under 250 words unless doing an in-depth verse-by-verse breakdown).`;

export const YOUNGFIRE_MENTOR_GENERATION_CONFIG = {
  systemInstruction: YOUNGFIRE_MENTOR_SYSTEM_PROMPT,
  temperature: 0.7,
  topP: 0.85,
  presencePenalty: 0.6,
  frequencyPenalty: 0.5
};

export interface MentorTurn {
  role: 'user' | 'model';
  text: string;
}

export interface MentorResponsePayload {
  text: string;
  scriptures: string[];
}

interface NKJVCounselEntry {
  id: string;
  keywords: string[];
  scriptures: string[];
  directAnswer: string;
  nkjvQuotation: string;
  kingdomExecution: string[];
}

const NKJV_COUNSEL_BANK: NKJVCounselEntry[] = [
  {
    id: 'work_stewardship',
    keywords: ['work', 'career', 'job', 'busy', 'balance', 'discipline', 'schedule', 'burnout', 'exhausted', 'profession'],
    scriptures: ['Colossians 3:23–24', 'Daniel 6:3'],
    directAnswer: 'Biblical stewardship does not separate secular labor from sacred devotion; rather, every task performed unto the Lord becomes an act of worship, while your daily time in the Word remains non-negotiable.',
    nkjvQuotation: '"And whatever you do, do it heartily, as to the Lord and not to men, knowing that from the Lord you will receive the reward of the inheritance; for you serve the Lord Christ." — Colossians 3:23–24 (NKJV)',
    kingdomExecution: [
      'Consecrate the first 15 minutes of your morning in the NKJV Word and prayer before checking any work messages.',
      'Establish a fixed evening cutoff hour where labor ceases so your spirit can rest in the Lord.'
    ]
  },
  {
    id: 'purity_dating',
    keywords: ['dating', 'purity', 'relationship', 'marriage', 'spouse', 'single', 'lust', 'sexual', 'courtship', 'partner'],
    scriptures: ['1 Thessalonians 4:3–4', '2 Corinthians 6:14'],
    directAnswer: 'God’s standard for relationships is wholehearted sanctification—honoring your body as the temple of the Holy Spirit and refusing to be unequally yoked with anyone who does not walk in covenant obedience to Christ.',
    nkjvQuotation: '"For this is the will of God, your sanctification: that you should abstain from sexual immorality; that each of you should know how to possess his own vessel in sanctification and honor." — 1 Thessalonians 4:3–4 (NKJV)',
    kingdomExecution: [
      'Set explicit boundaries on time, place, and physical conduct before entering any dating environment.',
      'Submit your relationship desires to godly accountability with mature believers in the fellowship.'
    ]
  },
  {
    id: 'calling_gifts',
    keywords: ['calling', 'gift', 'purpose', 'ministry', 'serve', 'talent', 'destiny', 'youngfire', 'vision', 'direction'],
    scriptures: ['Romans 12:4–6', '1 Peter 4:10'],
    directAnswer: 'Spiritual gifts are given by the Holy Spirit not for personal elevation, but for the edification of the Body of Christ; clarity of calling comes as you faithfully steward the immediate service placed before you.',
    nkjvQuotation: '"As each one has received a gift, minister it to one another, as good stewards of the manifold grace of God." — 1 Peter 4:10 (NKJV)',
    kingdomExecution: [
      'Identify one concrete need in the local church body this week—intercession, hospitality, or teaching—and step in to serve.',
      'Ask two spiritually mature brethren what scriptural fruit they observe in your walk.'
    ]
  },
  {
    id: 'anxiety_peace',
    keywords: ['anxious', 'anxiety', 'worry', 'fear', 'future', 'overwhelmed', 'panic', 'stress', 'uncertain', 'afraid'],
    scriptures: ['Philippians 4:6–7', '2 Timothy 1:7'],
    directAnswer: 'Anxiety loses its grip when silent worry is replaced with specific, vocal supplication and thanksgiving before the throne of God, trusting His sovereign rule over your future.',
    nkjvQuotation: '"Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus." — Philippians 4:6–7 (NKJV)',
    kingdomExecution: [
      'Write down the exact matters troubling your mind and pray over each one aloud with thanksgiving.',
      'Speak 2 Timothy 1:7 (NKJV) whenever fearful thoughts arise today.'
    ]
  },
  {
    id: 'warfare_temptation',
    keywords: ['warfare', 'temptation', 'sin', 'struggle', 'devil', 'enemy', 'attack', 'flesh', 'habit', 'addiction'],
    scriptures: ['1 Corinthians 10:13', 'James 4:7'],
    directAnswer: 'Victory over temptation requires active submission to God first, followed by steadfast resistance against the adversary using the spoken Word of God and the way of escape He faithfully provides.',
    nkjvQuotation: '"No temptation has overtaken you except such as is common to man; but God is faithful, who will not allow you to be tempted beyond what you are able, but with the temptation will also make the way of escape, that you may be able to bear it." — 1 Corinthians 10:13 (NKJV)',
    kingdomExecution: [
      'Cut off the immediate access point that feeds the temptation today (Matthew 5:29–30).',
      'Confess the struggle honestly to a trusted brother or sister for fervent prayer (James 5:16).'
    ]
  },
  {
    id: 'loneliness_fellowship',
    keywords: ['alone', 'lonely', 'isolated', 'friends', 'brotherhood', 'sisterhood', 'community', 'fellowship', 'belong'],
    scriptures: ['Hebrews 10:24–25', 'Proverbs 27:17'],
    directAnswer: 'Isolation is a tactic of the enemy to weaken a believer’s resolve; God designed your spiritual growth to flourish inside covenant fellowship where iron sharpens iron.',
    nkjvQuotation: '"And let us consider one another in order to stir up love and good works, not forsaking the assembling of ourselves together, as is the manner of some, but exhorting one another, and so much the more as you see the Day approaching." — Hebrews 10:24–25 (NKJV)',
    kingdomExecution: [
      'Reach out to one member of the YoungFire fellowship today to encourage them and pray together.',
      'Commit to attending the next Small Group or Open Bible gathering in person.'
    ]
  },
  {
    id: 'forgiveness_bitterness',
    keywords: ['forgive', 'forgiveness', 'bitter', 'anger', 'offense', 'hurt', 'resentment', 'betrayal', 'grudge'],
    scriptures: ['Ephesians 4:31–32', 'Colossians 3:13'],
    directAnswer: 'Unforgiveness imprisons the soul and gives a foothold to the adversary; as recipients of Christ’s blood-bought pardon, we are commanded to release every debt to the righteous Judge.',
    nkjvQuotation: '"And be kind to one another, tenderhearted, forgiving one another, even as God in Christ forgave you." — Ephesians 4:32 (NKJV)',
    kingdomExecution: [
      'Name the person who wronged you before the Lord in prayer today and verbally release them from debt.',
      'Pray a sincere blessing over their spiritual welfare as Christ commanded in Matthew 5:44.'
    ]
  },
  {
    id: 'doubt_faith',
    keywords: ['doubt', 'unbelief', 'dry', 'distant', 'feel', 'silence', 'waiting', 'patience', 'trust', 'faith'],
    scriptures: ['Romans 10:17', 'Hebrews 11:1, 6'],
    directAnswer: 'Biblical faith does not rest on shifting emotions, but on the immutable character and spoken promises of God; when seasons feel dry, hearing the Word of Christ rekindles conviction.',
    nkjvQuotation: '"So then faith comes by hearing, and hearing by the word of God." — Romans 10:17 (NKJV)',
    kingdomExecution: [
      'Read one chapter of the Gospels aloud today so your ears physically hear the words of Christ.',
      'Record three past instances where the Lord proved faithful in your life.'
    ]
  },
  {
    id: 'prayer_intercession',
    keywords: ['pray', 'prayer', 'fasting', 'fast', 'intercession', 'seek', 'devotion', 'quiet time'],
    scriptures: ['Matthew 6:6', '1 John 5:14–15'],
    directAnswer: 'Secret consecration before the Father is the powerhouse of a believer’s life; when we pray according to His revealed Word, we have confidence that He hears and answers.',
    nkjvQuotation: '"Now this is the confidence that we have in Him, that if we ask anything according to His will, He hears us." — 1 John 5:14 (NKJV)',
    kingdomExecution: [
      'Shut the door to distractions for 20 minutes today and pray directly through a Psalm in the NKJV.',
      'Intercede by name for three fellow disciples in the Prayer Dock.'
    ]
  },
  {
    id: 'wisdom_decisions',
    keywords: ['decision', 'choice', 'wisdom', 'discernment', 'guidance', 'path', 'move', 'next step', 'proverbs'],
    scriptures: ['James 1:5–6', 'Proverbs 3:5–6'],
    directAnswer: 'God promises generous wisdom to every believer who asks in unwavering faith without leaning on mere human calculation.',
    nkjvQuotation: '"If any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him." — James 1:5 (NKJV)',
    kingdomExecution: [
      'Test every option before you against the clear commands of Scripture—never violate a biblical principle for convenience.',
      'Seek counsel from godly leaders before finalizing your decision (Proverbs 11:14).'
    ]
  },
  {
    id: 'finances_generosity',
    keywords: ['money', 'finance', 'debt', 'tithe', 'giving', 'generosity', 'provision', 'wealth', 'steward'],
    scriptures: ['2 Corinthians 9:6–8', 'Matthew 6:33'],
    directAnswer: 'All resources belong to the Lord; when you seek His kingdom first and walk in cheerful generosity and disciplined stewardship, He supplies every need.',
    nkjvQuotation: '"And God is able to make all grace abound toward you, that you, always having all sufficiency in all things, may have an abundance for every good work." — 2 Corinthians 9:8 (NKJV)',
    kingdomExecution: [
      'Honor the Lord with the firstfruits of your income before allocating personal spending.',
      'Review your current obligations and eliminate one unnecessary expense to walk in financial freedom.'
    ]
  },
  {
    id: 'identity_christ',
    keywords: ['identity', 'worth', 'shame', 'guilt', 'condemnation', 'past', 'failure', 'inadequate', 'new creation'],
    scriptures: ['2 Corinthians 5:17', 'Romans 8:1'],
    directAnswer: 'Your past sins and failures no longer define you once you are united with Christ; His atoning blood has removed condemnation and made you a new creation.',
    nkjvQuotation: '"Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new." — 2 Corinthians 5:17 (NKJV)',
    kingdomExecution: [
      'Reject every accusing thought that contradicts Romans 8:1 by answering it aloud with NKJV Scripture.',
      'Walk today in the boldness of a redeemed son or daughter of God.'
    ]
  },
  {
    id: 'scripture_word',
    keywords: ['bible', 'scripture', 'study', 'read', 'understand', 'memorize', 'meditate', 'word'],
    scriptures: ['2 Timothy 3:16–17', 'Joshua 1:8'],
    directAnswer: 'Every book of Scripture is God-breathed and profitable to equip you thoroughly for righteous living; meditation on the Word transforms the renewal of your mind.',
    nkjvQuotation: '"All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, that the man of God may be complete, thoroughly equipped for every good work." — 2 Timothy 3:16–17 (NKJV)',
    kingdomExecution: [
      'Read one full chapter in context today, asking: What does this reveal about God’s character, and what command must I obey?',
      'Commit one key NKJV verse from your reading to memory today.'
    ]
  },
  {
    id: 'endurance_trials',
    keywords: ['trial', 'suffering', 'hardship', 'pain', 'grief', 'loss', 'storm', 'perseverance', 'weary'],
    scriptures: ['James 1:2–4', 'Galatians 6:9'],
    directAnswer: 'Fiery trials are not evidence of God’s absence; under His sovereign hand, testing produces steadfast endurance and spiritual maturity that lacks nothing.',
    nkjvQuotation: '"My brethren, count it all joy when you fall into various trials, knowing that the testing of your faith produces patience. But let patience have its perfect work, that you may be perfect and complete, lacking nothing." — James 1:2–4 (NKJV)',
    kingdomExecution: [
      'Anchor your heart in worship today rather than complaint, thanking God that He is refining your faith.',
      'Continue doing good without growing weary, knowing that in due season you shall reap (Galatians 6:9).'
    ]
  }
];

export async function generateDiscipleshipCounsel(
  prompt: string,
  history: MentorTurn[] = []
): Promise<MentorResponsePayload> {
  // 1. Attempt server-side Gemini endpoint with strict NKJV system instructions and anti-repetition parameters
  try {
    const res = await fetch('/api/counselor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        history,
        systemInstruction: YOUNGFIRE_MENTOR_SYSTEM_PROMPT,
        config: YOUNGFIRE_MENTOR_GENERATION_CONFIG
      })
    });

    if (res.ok) {
      const data = await res.json();
      if (data?.response && typeof data.response === 'string') {
        const matches: string[] = data.response.match(/([1-3]?\s?[A-Za-z]+\s+\d+:\d+(?:[–-]\d+)?)/g) || ['2 Timothy 3:16–17'];
        return {
          text: data.response.trim(),
          scriptures: Array.from(new Set<string>(matches.map((s: string) => s.trim()))).slice(0, 3)
        };
      }
    }
  } catch {
    // Proceed to deterministic NKJV grounded counsel engine when offline or in static preview
  }

  // 2. Deterministic NKJV-Only Grounded Counsel with Anti-Repetition Turn Tracking
  const qLower = prompt.toLowerCase();
  const recentAssistantTexts = history
    .filter(h => h.role === 'model')
    .map(h => h.text);

  // Score each entry by keyword overlap, heavily penalizing any entry whose scripture was already used in recent turns
  const scored = NKJV_COUNSEL_BANK.map((entry, idx) => {
    let score = 0;
    for (const kw of entry.keywords) {
      if (qLower.includes(kw)) {
        score += 10;
      }
    }
    const alreadyUsed = recentAssistantTexts.some(prev =>
      prev.includes(entry.nkjvQuotation) || entry.scriptures.some(sc => prev.includes(sc))
    );
    if (alreadyUsed) {
      score -= 100; // Enforce repetition ban across turns
    }
    return { entry, score, idx };
  });

  scored.sort((a, b) => b.score - a.score);

  // Pick top match; if no keywords matched, rotate deterministically through unused entries based on turn count + prompt hash
  let chosen = scored[0].entry;
  if (scored[0].score <= 0) {
    const unused = NKJV_COUNSEL_BANK.filter(e =>
      !recentAssistantTexts.some(prev => prev.includes(e.nkjvQuotation))
    );
    const pool = unused.length > 0 ? unused : NKJV_COUNSEL_BANK;
    const hash = Array.from(prompt).reduce((acc, ch) => acc + ch.charCodeAt(0), history.length * 17);
    chosen = pool[hash % pool.length];
  }

  const formattedText = [
    `**Direct Scriptural Answer:**\n${chosen.directAnswer}`,
    `**NKJV Scripture Foundation:**\n${chosen.nkjvQuotation}`,
    `**Practical Kingdom Execution:**\n1. ${chosen.kingdomExecution[0]}\n2. ${chosen.kingdomExecution[1]}`
  ].join('\n\n');

  return {
    text: formattedText,
    scriptures: chosen.scriptures
  };
}

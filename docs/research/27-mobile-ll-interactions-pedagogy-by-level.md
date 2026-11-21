# Mobile language-learning interactions and pedagogy by CEFR level

Date: 2026-09-17  
Ticket: [Davio #48](https://github.com/David-Ernstsson/Davio/issues/48) (`wayfinder:research`)  
Scope: mobile language-learning apps and closely related mobile pedagogy. Interaction mechanisms, how they are presented, and whether those change from A1 to B2. Not pricing, not competitor strategy, not a replacement of Davio’s Interaction catalog.

Adjacent notes (do not duplicate): Path/mobile evidence lives in Davio-content `docs/research/language-learning-and-mobile.md`; metaphor vs mechanic in [24](24-exploration-adjacent-products.md); situated/story/culture in [23](23-situated-narrative-cultural-learning.md); app outcomes vs spoken interaction in [02](02-app-outcomes-gap.md); streaks as retention, not learning, in [22](22-streaks-habits-gamification.md). This note is the **interaction / pedagogy survey** for Excursion play and Combined Writer’s mobile-first picker.

**Finding** = what the owning source claims. **Inference** = a product reading the source does not itself test. **Proposal** at the end is not an ADR.

## Question

What interaction and pedagogy patterns do strong mobile language-learning apps use, and how (if at all) do they change by CEFR level — especially A1 vs B2 (for example, more open vs controlled produce, versus only longer or more complex language in the same taps)? What works, what does not, which out-of-the-box Presentations and mechanics are worth knowing, and what is a useful general register for Davio Excursion play?

## The one-paragraph answer

Strong mobile language-learning apps mostly keep the **same interaction types** from A1 through B2 — tap, match, gap-fill, listen-and-repeat, scripted dialogue, then a side-quest AI chat — and change the **language job**, the prompt difficulty, and how much help they give, more often than they switch from controlled to open produce. The Council of Europe’s CEFR Companion Volume (2020) is explicit that A1 oral interaction is “totally dependent on repetition… rephrasing and repair,” while B2 is fluent, spontaneous interaction “without imposing strain on either party”; online, A1 is formulaic posts with a translation tool, B2 is threading an argument in a discussion. That is a change of communicative job, not merely longer sentences. First-party products that own a level split of *mechanic* are rare: Babbel’s help copy restricts Guided Conversations (listen, then speak a scripted part) to A1/A2; Duolingo keeps word-bank writing until “you’re ready,” and only “advanced Stories” ask for full-sentence writing; Busuu Community Corrections “get gradually more challenging” with a suggested word count; Duolingo Roleplay and Busuu Conversations inject CEFR level into the same chat skin so the *bot’s language* scales while the *tap-or-talk* skin does not. What works, on the pedagogy owners rather than the apps’ marketing, is a balance of meaning-focused input, meaning-focused output, language-focused noticing, and fluency on already-known language (Nation, 2007), plus the chance to produce freely as well as in constrained items (Ellis, 2005/2008, Principle 10). What does not: treating selected-response tiles as conversation; an unguided chatbot with no scenario, level, or close; five-minute visual vocab games as B2 interaction; headset VR as a substitute for a lived situation. A useful register for Davio Excursion play is therefore: keep `read` / `select` / `complete` / `produce`; vary Presentation (SMS thread, scene, cards, tap-to-gloss) not the catalog; at B1–B2 increase how much of the sitting is real produce *and* what the produce has to do (account for a view, repair a misunderstanding), not only how long the target sentence is; keep A1-style controlled complete as noticing inside a lived scene, not as the whole Activity.

## How to read this

Three different objects get sold as “interaction”:

| Object | What it is | Typical skin |
| --- | --- | --- |
| **Mechanism** | What the Learner physically does (tap a tile, type a gap, speak a line, send a chat turn). | Word bank, mic, SMS, cards |
| **Presentation** | How that mechanism is drawn (bubbles, transcript, board, video). Davio already separates this from Interaction ids. | Chat, scene, flashcard, karaoke |
| **Communicative job** | What the CEFR says the language user can *do* (ask a simple question vs sustain a view). | “Order coffee,” “discuss a film” |

Apps routinely change Presentation and job while keeping Mechanism. Mixing those three is the main error this note is written to prevent.

Davio already names four operator Interaction ids — `read`, `select`, `complete`, `produce` — and says `produce` is **controlled** production of a determinate answer, not open free writing; `dialogue` is Presentation of `read` or `produce` ([ADR 0008](../product-pack/docs/adr/0008-operator-interaction-catalog.md); product pack `CONTEXT.md`). This note does not replace that catalog.

---

## 1. What A1 vs B2 actually changes (CEFR, not apps)

The 2020 Companion Volume is the owner of the levels consumer apps now claim. It treats **interaction** as two or more parties co-constructing discourse, distinct from production (monologue) and reception. It added **online interaction** as its own category because “written interaction (= writing much as you would speak, in a slowed-down dialogue)” had become central, including chat, blogging, and embedding media.

Source: Council of Europe, *Common European Framework of Reference for Languages: Learning, teaching, assessment — Companion volume* (2020), §§3.3–3.3.1.3, pp. 70–86. Official PDF: <https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4>

**Overall oral interaction**

- **A1:** “Can interact in a simple way but communication is totally dependent on repetition at a slower rate, rephrasing and repair. Can ask and answer simple questions, initiate and respond to simple statements in areas of immediate need or on very familiar topics.”
- **B2:** “Can interact with a degree of fluency and spontaneity that makes regular interaction, and sustained relationships with users of the target language, quite possible without imposing strain on either party. Can highlight the personal significance of events and experiences, and account for and sustain views clearly by providing relevant explanations and arguments.” Also: fluent, accurate, effective use on a wide range of topics, “without much sign of having to restrict what they want to say.”

Source: Companion Volume, Overall oral interaction, p. 72.

**Overall oral production** (monologue, not chat)

- **A1:** “Can produce simple, mainly isolated phrases about people and places.”
- **B2:** clear, detailed descriptions and presentations on a wide range of subjects, “expanding and supporting ideas with subsidiary points and relevant examples.”

Source: Companion Volume, Overall oral production, p. 62.

**Online conversation and discussion** (the official scale closest to SMS / chat / Moments)

Progression is characterised as a shift from simple social exchanges toward professional/educational discursive interaction, with real-time and group interaction from B1+. The authors’ own café/classroom metaphor: a user “maybe can communicate only very superficially at A1 when posting and chatting in the ‘café’,” can interact in a virtual classroom at A2 “only if carefully guided,” and “will struggle to interact successfully in an online meeting until they reach the B levels.” B2 is “participate actively in discussion and argument, linking a contribution effectively to others in the thread, and repairing misunderstandings appropriately.”

- **A1:** very simple messages and personal postings as a series of very short sentences about hobbies and likes/dislikes, “relying on the aid of a translation tool”; formulaic positive/negative reactions; thanks and apology.
- **B2:** engage in online exchanges, linking contributions to previous ones; participate actively in discussion “stating and responding to opinions on topics of interest at some length, provided contributors avoid unusual or complex language and allow time for responses”; recognise and deal with misunderstandings if others co-operate.

Source: Companion Volume, Online conversation and discussion, pp. 84–85 (scale intro and A1/B2 bands).

**Interaction strategies** also change in kind, not only in length. Compensating at A1 is “use gestures to support simple words/signs”; at B2 it is circumlocution and paraphrase to cover gaps. Monitoring and repair has **no A1 descriptors**; at B2 the user can correct slips they become conscious of, or that have led to misunderstandings, and can “make a note of their recurring mistakes and consciously monitor for them.”

Source: Companion Volume, Compensating p. 69; Monitoring and repair p. 70.

**Inference (not a CEFR claim).** If an app’s B2 unit still only asks the Learner to tap the right tile or speak a prompted sentence, it has changed *content difficulty* while leaving the Learner at an A1 *job*: answering with help, not co-constructing discourse. Lengthening the target sentence is not the B2 move. The B2 moves are: less dependence on the interlocutor’s repair, more spontaneity, accounting for a view, linking to a prior turn, repairing a misunderstanding.

---

## 2. Pedagogy owners (what “works” is allowed to mean)

### Nation’s four strands (2007)

A balanced course gives roughly equal time to (1) **meaning-focused input** (listen/read for understanding, 95–98% known vocabulary), (2) **meaning-focused output** (speak/write to convey a message, mostly familiar language), (3) **language-focused learning** (deliberate study of form; not more than about a quarter of course time), (4) **fluency development** (use *already known* language faster; no new items; some time pressure). Meaning-focused output is not the same as a gap-fill: typical activities are conversations, letters, notes, telling someone how to do something. Fluency is not “harder items”: if there is unknown vocabulary or a focus on language features, it is not a fluency activity.

Source: Nation, I. S. P. (2007). The four strands. *Innovation in Language Learning and Teaching, 1*(1), 2–13. Author PDF: <https://www.wgtn.ac.nz/lals/resources/paul-nations-resources/paul-nations-publications/publications/documents/2007-Four-strands.pdf>

Swain’s output functions, as Nation restates them: noticing a hole, hypothesis testing, metalinguistic reflection. Izumi (2002), cited there, found noticing a gap through output had a significantly greater acquisition effect than noticing through input.

Source: Nation (2007), citing Swain (1985, 1995, 2005) and Izumi (2002).

### Ellis’s instructed-SLA principles (2005 / 2008 digest)

Ellis offers these as “provisional specifications,” not prescriptions. Directly relevant here:

- **Principle 1.** Formulaic chunks *and* rule-based competence. Early stages can foreground formulaic sequences (a notional-functional syllabus); a complete curriculum still needs generative rules.
- **Principle 2.** Focus predominantly on meaning (real communication). DeKeyser (1998) is cited: true fluency needs opportunities for real communication.
- **Principle 7.** Output, including Swain’s “pushed output.” “Controlled practice exercises typically result in output that is limited in terms of length and complexity. They do not afford students opportunities for the kind of sustained output that theorists argue is necessary for second language development.”
- **Principle 8.** Interaction is central (Long’s Interaction Hypothesis, 1996): negotiating meaning makes input comprehensible, provides corrective feedback, and pushes modified output. Acquisition-rich interaction needs a reason to attend to language, learner-initiated topics, personal meanings, and a full performance of the language.
- **Principle 10.** Assess **free** as well as controlled production. Norris and Ortega (2000) found instructional effects largest on selected-response and constrained constructed response, smallest on free constructed response — yet free production “corresponds most closely to the kind of language use found outside the classroom.”

Source: Ellis, R. (2005). Principles of instructed language learning. *System, 33*(2), 209–224. Digest: Ellis (2008), Center for Applied Linguistics, <https://www.cal.org/wp-content/uploads/2022/05/PrinciplesofInstructedSecondLanguageAcquisition-1.pdf>

**Finding for this ticket.** The SLA owners do **not** say “at B2, switch from tap to chat.” They say: formulaic language is an A-level *resource*; B-level use still needs meaning-focused output and free production; constrained items overstate learning if they are the only evidence.

### Mobile-assisted language learning (MALL)

Kukulska-Hulme and Shield (2008) reviewed MALL publications specifically for speaking, listening, and collaboration. Early MALL was mostly **content delivery** (SMS vocab, quizzes). They found “very little published MALL research in the areas of speaking and listening,” and that reported speaking/listening work was mostly **asynchronous**; many synchronous attempts were text-based or abandoned on scheduling. Language learning is “essentially, a social activity”; lack of oral interaction disadvantages distance learners.

Source: Kukulska-Hulme, A., & Shield, L. (2008). An overview of mobile assisted language learning: From content delivery to supported collaboration and interaction. *ReCALL, 20*(3), 271–289. <https://doi.org/10.1017/S0958344008000335>

Stockwell and Hubbard (2013) propose ten design principles. The ones that still bite for Excursion play: (1) use the device’s affordances *and* connect them to SLA, don’t port a desktop drill; (2) limit multitasking and environmental distraction; (7) keep mobile tasks short and interruptible, or chunk longer ones; (8) **fit the task to the environment** — dead-time on a phone is not a 30-minute typed essay; a 20–30 minute reading-and-response sitting wants a quieter place and a larger screen. Using a phone for language learning is not intuitive even if using the phone is.

Source: Stockwell, G., & Hubbard, P. (2013). Some emerging principles for mobile-assisted language learning. TIRF. <https://www.tirfonline.org/wp-content/uploads/2013/11/TIRF_MALL_Papers_StockwellHubbard.pdf>

**Inference.** A five-minute tap session is a good *mobile affordance*. It is not, by itself, B2 interaction. Pimsleur’s 30-minute aural lesson is a different mobile affordance (hands-free, driving mode), still mostly controlled oral recall.

---

## 3. App catalog: mechanism, Presentation, level behaviour

Each row is first-party unless marked. Outcomes evidence is owned by [02](02-app-outcomes-gap.md); this section is **what the Learner does**.

### Duolingo — path tiles + gated Stories + AI side quests

**Core lesson mechanism.** Interactive exercises from the first lesson: repeat words, translate sentences out loud, bite-sized dialogues, word banks, type-what-you-hear, optional mic on writing items. Writing is scaffolded “so that you start with words, short phrases, and exercises with word banks until you’re ready for longer writing on your own.” Tapping word-bank tokens is claimed as “training your writing muscles.” Learners can switch a translation item from word bank to keyboard.

Sources: <https://blog.duolingo.com/covering-all-the-bases-duolingos-approach-to-speaking-skills/> (9 Feb 2026); <https://blog.duolingo.com/covering-all-the-bases-duolingos-approach-to-writing-skills/> (2 Jul 2026); <https://blog.duolingo.com/duolingo-teaching-method/> (2 Feb 2023).

**Stories Presentation.** “Quirky, bite-sized tales” the Learner reads and listens to, “checking their comprehension with intermittent questions.” Longer than typical lessons. 2020 first-party: covered **A1, A2, and B1**. Not open reading: questions gate progress. Android A/B: +3% active learners, +4.6% time spent for languages with Stories. **Advanced Stories** add reorder, choose-the-logical-word, and “write out full sentences about what happened”; an intern write-up called the Stories writing exercise “currently the only opportunity for a learner to freely generate long responses to a prompt.”

Sources: <https://blog.duolingo.com/duolingo-stories-the-journey-to-android/> (21 Feb 2020); writing-skills post above; intern post <https://blog.duolingo.com/why-i-interned-at-duolingo-rebecca-hu-product-management-intern/>.

**Adventures Presentation.** Video-game-like path nodes. Play as a character; complete a task (order coffee, grocery shop, ask directions); move around an on-screen board; tap objects, read signs. **Immersive feedback:** characters redirect rather than grade (“Oh, did you mean…?”). Formal/informal register is taught as character relationships. Launch: English→French and Spanish→English.

Source: <https://blog.duolingo.com/adventures/> (24 Sep 2024).

**Roleplay (Max).** Scenario + character + **learning objective appropriate for CEFR level**. Humans write the scenario, the first chat line, and “where to take the conversation.” After the chat: AI feedback on accuracy and complexity. The LLM is not one free conversation: each turn is a different prompt (question, entice, change subject, close), with a **narrator** who sets the scene, restates the objective, and ties a beginning–middle–end. CEFR is injected as language constraint (example they publish: “You must use A1 CEFR Level language… Only use simple present tense”).

Sources: <https://blog.duolingo.com/duolingo-max/> (14 Mar 2023); <https://blog.duolingo.com/chatbot-language-practice/> (20 Mar 2024).

**Video Call.** Lily: unguided, “chat about anything,” remembers prior calls, transcript after. Falstaff (2026): **guided** — questions by language level, suggested phrases and translations, real-time feedback in the Learner’s own language, stay-on-track everyday conversations. Duolingo’s own contrast: Falstaff = structured coaching; Lily = unguided. Rolling out “across all Duolingo Scores (and CEFR levels)” for nine languages — **not** an A1-only lock. Plan: guided and unguided calls in every unit.

Sources: Max post above; <https://blog.duolingo.com/beginner-video-call-with-falstaff/> (14 Jan 2026).

**Score vs CEFR (content claim, not a speaking claim).** Score 0–29 ≈ A1 can-dos (simple questions, daily routine, order food); 100–129 ≈ B2 (deep discussions / professional and academic scenarios). Most advanced courses “currently cover content through 120 (the end of the CEFR level B2).” That is how much *course material* exists, not evidence that typical completers *do* B2 interaction. Efficacy in [02](02-app-outcomes-gap.md) still tops out around A2 recognition / mixed A2 speaking on Versant.

Source: <https://blog.duolingo.com/duolingo-score/> (23 Oct 2024). Video-call RCT (Japanese learners of English, 30 days): adding AI conversation improved Versant speaking vs lessons alone; **both groups remained at A1** on speaking — cited in [02](02-app-outcomes-gap.md). The 2025 white paper URL did not fetch (HTTP 500) for this note; treat the numeric claim as owned by that paper via [02], not re-verified here.

**Level behaviour.** Same tile/mic/chat skins. Documented mechanic changes: writing scaffold (word bank → type → advanced-Story free sentences); Roleplay CEFR in the prompt; Falstaff vs Lily as **modes of the same Video Call Presentation**, not a hard A1/B2 split.

### Babbel — dialogue lessons + scripted Guided Conversations + AI Speak

**Core.** Expert-written short lessons (~6 minutes on the method page) around real-life situations, CEFR-aligned “can do” goals, native-speaker audio, grammar in the lesson, speech recognition, Review Manager. Varied exercises; review inside and at end of lesson.

Source: <https://www.babbel.com/the-babbel-method>

**Guided Conversations (mobile only).** Scripted everyday scenarios. Listen first (or skip to speaking); tap mic to speak “your part.” Help centre (as indexed): available in French, German, Italian, Mexican and European Spanish **on A1/A2 levels**. Live fetch of that article hit Cloudflare; treat the A1/A2 restriction as first-party help copy that could not be re-read as HTML in this session.

Source: <https://support.babbel.com/hc/en-us/articles/19188554247186-Guided-Conversations>

**Babbel Speak (2025, mobile beta).** AI conversation partner. Press: “completes Babbel’s progressive speaking practice from **structured to natural conversation**”; “clear objectives upfront and feedback”; “pedagogy defining how learners progress through the scenarios while AI handles the natural conversational flow.” Search-indexed help: choose a scenario, see tasks, take turns, post-chat feedback on completed tasks and vocabulary; mid-turn you can repeat, slow down, translate, or get a hint; the AI does **not** interrupt to correct mid-response, but will guide back to the scenario. First languages: English, Spanish, French, Italian, German.

Sources: <https://www.babbel.com/press/en-us/releases/babbel-speak> (16 Sep 2025); help <https://support.babbel.com/hc/en-us/articles/25875402999826-Babbel-Speak> (Cloudflare-blocked on fetch; body as indexed in search). Method page also describes Speak.

**Level behaviour.** The one first-party **mechanic lock** found in this survey: Guided Conversations at A1/A2. Speak is sold as the next rung (structured → natural), not as a different CEFR Interaction type. Courses themselves are sold Beginner / Intermediate / Advanced; Spanish is claimed to C1, Turkish only to A2 (method FAQ). Efficacy in [02](02-app-outcomes-gap.md) is novice Spanish OPIc, not B2 German.

### Busuu — bite-sized four-skills + Community Corrections + AI Conversations

**Core.** CEFR-aligned courses A1–B2 (English also C1). Help: 3–5 minute lessons; reading, writing, listening, speaking; videos of real people. Completing A1 = introduce yourself, order a drink, simple questions, short texts and forms. Completing B2 = discuss important issues, news, extended conversations on familiar and new topics, narrate or write a story, describe a film/book plot.

Sources: <https://www.busuu.com/en/it-works/courses>; help “What is Busuu?” <https://help.busuu.com/hc/en-us/articles/15936615354641-What-is-Busuu>

**Community Corrections.** End of lesson or Community tab: **Write** or **Speak** a unique answer, send to natives / other learners. “As you progress through the lessons, Community Correction exercises will get gradually more challenging. We always give you a tip and a suggested **word count**.” Recommendation: construct answers without looking at the tip. Spoken corrections: pick one or two significant mistakes; for more advanced speakers, stress, intonation, word choice, grammar. Premium: unlimited sends.

Source: <https://www.busuu.com/en/how-to/corrections>

**Conversations (AI).** Topic + goal at the top; improvised partner; post-chat feedback on grammar and word choice. First-party: **leveled to the learner’s CEFR (A1–C1)**; built around lesson content; role-play scenarios (doctor’s office, manager at work). Timeline Conversations: the AI “automatically communicates with you at your CEFR proficiency level as determined by your current lesson level.” Explicit contrast with “set script or fill-in-the-blanks”: they claim unplanned speaking builds fluency that scripts do not. Scaffolding ladder they own: (1) repeat/speak in lessons, (2) unique Community Corrections “in small doses,” (3) Conversations.

Source: <https://www.busuu.com/en/languages/language-learning-with-busuu-conversations>

**Level behaviour.** Same Write/Speak/Conversations skins. Documented scaling: word count and challenge on Corrections; CEFR-constrained AI language and topics. B2 can-do copy includes “narrate or write a story” — that is a **job** claim for course completion, not a screenshot of a different Interaction type.

### Memrise — Learn / Immerse / Communicate

**Method they own.** Three-legged stool: teach useful vocab → show it in native-speaker videos → converse with MemBot (GPT-era chatbot) as barista, interviewer, friend. “Learn with Locals” is no longer a standalone mode; those videos live in a Videos tab and inside Learn/Review. Later: AI Buddies (grammar, role-play, translator, culture, conjugation, assistant) — Pro, rolling language list.

Sources: <https://www.memrise.com/blog/the-memrise-story> (17 Mar 2023); Zendesk “The New Memrise Experience” <https://memrise.zendesk.com/hc/en-us/articles/4410491464593-The-New-Memrise-Experience>; AI buddies <https://memrisebeta.zendesk.com/hc/en-us/articles/29222065964817-Introducing-AI-buddies>

**Level behaviour.** First-party does not describe a different Interaction type by CEFR. Immerse content is “filtered exactly to your skill level” (YouTube method video / site copy). “MemBot is actually proven to significantly lower the stress…” is a first-party claim **without a cited study in that post** — UNVERIFIED as an independent finding.

### LingQ — tap-to-gloss extensive reading/listening

**Mechanism.** Read + listen authentic (or imported) content. Unknown words are blue; tap for translations; saved items become yellow LingQs and recur. Sentence mode, karaoke-style listening, playlists, review activities. Beginner path they recommend: sentence mode, native audio, mini-stories — same reader, smaller chunks. Speaking is not the opening move: “You learn more by getting more exposure… primarily through reading and listening.”

Sources: <https://www.lingq.com/en/>; iOS support <https://www.lingq.com/en/ios-app-support/>; beginner blog <https://www.lingq.com/blog/how-to-use-lingq-as-a-beginner/>

**Level behaviour.** Same tap-to-gloss reader from day one. What changes is **text difficulty and sentence vs full-text view**, not a new produce type. This is the closest mass-market mobile analogue to Davio `read` + Noticing. It is input-heavy; meaning-focused output is not the product.

### HelloTalk / Tandem — SMS-like exchange with inline correction

**HelloTalk.** Text, voice, video, Voicerooms, Moments. Built-in translation, pronunciation, transliteration, **corrections**. Chat correction: long-press → Correction → edit the sentence. Voice messages can be re-recorded; speech-to-text; playback speed. Language-exchange voice calls of 10/15/20/30 minutes, taking turns.

Sources: <https://www.hellotalk.com/en>; chat features <https://www.hellotalk.com/features/chat>; FAQ correction <https://www.hellotalk.com/en/faq/general/1734>; language exchange <https://www.hellotalk.com/faq/chats-learning-features/293>

**Tandem.** After an application/acceptance gate: 1:1 text, voice note, audio or video. Long-press → Correct; edit sentence; optional comment. Learning Preferences: correct every mistake / repeated errors / general feedback. Their own etiquette: for **low-level** partners, focus on basic grammar and spelling; for **advanced**, “the most natural way… slang and idioms.” During calls, type corrections in the chat box rather than interrupting.

Sources: <https://tandem.net/>; <https://tandem.net/pages/faq>; <https://tandem.net/blog/how-to-correct-mistakes-en>; <https://tandem.net/blog/app-advice-correct>

**Level behaviour.** The *channel* (SMS/voice/video) does not change by CEFR. Correction **policy** and what gets corrected does — by partner preference and, in Tandem’s advice, by level. That is human scaffolding, not an app-authored Interaction split. This is also the CEFR “online conversation” object in the wild: A1 users will lean on translation tools (the scale says so); B2 users can thread and repair.

### Speak / ELSA — speak-first and phoneme-level produce

**Speak.com.** First-party method: **Learn** (phrases natives use) → **Practice** (repeat patterns in new situations until automatic) → **Apply** (back-and-forth with Speak Tutor AI). Contrast they own vs Duolingo: Duo trains recognise-and-translate; Speak trains spoken use. They insist Speak is “not a chatbot”: curriculum, level-based lessons, pronunciation/phrasing feedback, personalization from mistakes. Sold as good for beginners *and* people who freeze despite prior study. Languages for English speakers: Spanish, French, Korean, Japanese, Italian, Simplified Chinese — **not German** as of this fetch. OpenAI partnership is first-party.

Source: <https://www.speak.com/>

**ELSA Speak.** Scripted: speak a word/sentence, phoneme-level pronunciation, intonation, fluency. Later: Speech Analyzer for **spontaneous** speech (interviews, presentations, tests); ELSA AI (Sep 2023) for scenario role-play, system-suggested or user-created. Their own paper: the original app “lacks the spontaneity… that spontaneous speech and person-to-person communication bring,” which is why Analyzer exists.

Sources: <https://elsaspeak.com/en/new-homepage/>; <https://elsaspeak.com/en/faqs/elsa-ai-feature>; Anguera et al., *ELSA Speech Analyzer…*, SLaTE 2023, <https://www.isca-archive.org/slate_2023/anguera23_slate.pdf>

**Level behaviour.** ELSA’s owned split is **scripted vs spontaneous**, not A1 vs B2. Speak’s owned split is Learn / Practice / Apply inside every lesson, claimed for all levels. No first-party German Speak course to inspect.

### Drops — five-minute visual tap games

**Mechanism.** Image–word matching mini-games, spaced repetition, visual association, ~five minutes. Quiz Mode: contextual questions (match phrase to situation, describe a picture, odd-one-out) on already-learned terms. Audio Mode: listen to previously seen terms. First-party: “Whatever your level… short, daily lessons.” Grammar “swipe” tips exist for a subset of languages including German.

Sources: <https://languagedrops.com/>; Quiz Mode <https://languagedrops.com/blog/introducing-quiz-mode-drops>; Audio Mode <https://languagedrops.com/blog/audio-mode-the-new-way-to-learn-a-language>

**Level behaviour.** Same tap games. They do not claim a produce type change by CEFR. “Progress 2x faster with Premium” is marketing, not a cited trial. This is Nation’s language-focused / vocab strand with a strong mobile affordance — not interaction.

### Pimsleur — 30-minute aural recall

**Mechanism.** Daily ~30-minute conversational audio: listen, recall, respond aloud; no notes. They contrast this explicitly with “matching images and words on a screen.” Premium: Voice Coach (given the phrase vs cued from English), Speak Easy role-play on transcripts, flash cards, driving mode.

Source: <https://www.pimsleur.com/pimsleur-faq/>

**Level behaviour.** Levels are numbered course levels, not a change from recall-to-open-chat in the core lesson. Speak Easy is role-play of the **same** conversation, written transcript — still controlled.

### Rosetta Stone — picture immersion + TruAccent + Chat Missions

**Core.** Dynamic Immersion (meaning from pictures, little L1); TruAccent on “nearly every lesson”; Milestone conversations with a pre-recorded native speaker at the end of some units.

Source: <https://blog.rosettastone.com/truaccent-learning-with-rosetta-stone/>

**Chat Missions.** Pick a scenario; **three goals** to accomplish; virtual partner; sidekick suggestions; real-time “hitting the mark”; replay “adapt[s] to your level and unlock[s] new challenges.” 25 scenarios.

Source: <https://www.rosettastone.com/chat-missions>

**Level behaviour.** Chat Missions claim level-adaptive replay of the **same** three-goal mission skin. Live tutoring is a separate 30-minute human session, not a CEFR Interaction catalog.

### Mondly VR — headset chatbot (know it, don’t copy the headset)

First-party: “first language learning experience with chatbot and speech recognition” in VR (2017). Scenarios: hotel, taxi, dinner; pronunciation feedback; claim that VR can reduce foreign-language anxiety. Headset list: Quest, Rift, Vive, Index, etc. This is Presentation as immersion, mechanism still prompted speech in a scenario.

Sources: <https://www.mondly.com/vr>; FAQ <https://www.mondly.com/faq/what-is-mondly-vr>

### Seedlang / Easy German — authentic video flashcards

Seedlang: video flashcards from Easy German street interviews; tap word in subtitles; pause a sentence to practise pronunciation; some cards speaking, some listening, some gender. Claimed A1–B2 in the app. Easy German *membership* (separate) adds A1–C1 learning paths, transcripts, worksheets; Conversation Membership is **daily Zoom**, not an in-app produce type. Super Easy German / Slow Easy German = slower A1 video, not a different mechanic.

Sources: <https://www.easygerman.org/app>; <https://www.easygerman.org/membership>; help <https://help.easygerman.org/en/articles/1756321271-learning-paths-and-levels>

### Beelinguapp — bilingual side-by-side read/listen

Read and listen to audiobooks with L1 and L2 side by side; native voice actors. Born from dictionary-lookup friction while learning German. Reception only.

Source: <https://beelinguapp.com/about>

### AnkiMobile

Distinctive pattern is **self-rated spaced recall** on user decks, not a language-teaching Interaction catalog. Not surveyed further.

---

## 4. A1 vs B2: what actually changes

| What might change | Evidence it *does* | Evidence it *does not* |
| --- | --- | --- |
| **Communicative job** (CEFR) | A1: formulaic, help-dependent, immediate needs. B2: spontaneous, sustain a view, repair misunderstanding, thread a discussion. Companion Volume pp. 62, 72, 84–85. Busuu course can-dos match that ladder. Duolingo Score can-do table matches it as *content labels*. | Apps still sell “order coffee” at every level. |
| **Interaction type (tap vs produce vs chat)** | Rare. Babbel Guided Conversations **A1/A2 only** (help copy). Duolingo free long writing only in **advanced Stories**. ELSA: scripted → spontaneous as a product evolution, not a CEFR lock. | Duolingo, Drops, LingQ reader, Memrise Learn, Pimsleur core, Seedlang cards: same skins across advertised levels. Falstaff/Lily and Speak Learn–Practice–Apply are **modes**, rolled across scores/levels. |
| **How much produce, how constrained** | Busuu: Corrections “gradually more challenging” + word count. Duolingo: word bank → type → full sentences. Babbel: structured Guided Conversations → Speak “natural conversation.” Tandem advice: correct basics at low level, idiom/naturalness at advanced. | No first-party table of “% open produce by unit” was published. UNVERIFIED as a measured mix. |
| **Input difficulty / chunking** | LingQ sentence mode for beginners; Easy German Super/Slow series; Duolingo Roleplay and Busuu Conversations inject CEFR into the bot’s language; Memrise videos “filtered to skill level.” | Mechanism (tap word, watch clip) stays. |
| **Help / scaffolding** | Falstaff: phrases, L1 feedback, stay on track. Babbel Speak: hints, slow, translate, no mid-turn interrupt. Rosetta Chat Missions: sidekick + three goals. CEFR online: A2 classroom “only if carefully guided.” | Lily Video Call and generic chatbots are sold as *less* scaffolded, including to beginners — a product choice, not a CEFR requirement. |

**Direct answer to the ticket’s example.** Apps do **not**, as a rule, replace controlled produce with open produce at B2. They keep the controlled loop and (sometimes) add a second, more open skin on the side (Roleplay, Speak, Conversations, Community Corrections). When they *do* change produce, it is usually **amount, constraint, and job** together: more words, fewer banks, a can-do that requires accounting for a view — not length alone.

---

## 5. What works, what does not

### What the owners actually measured or specified

- **Constrained items overstate transfer.** Norris and Ortega (2000), as used by Ellis Principle 10: biggest instructional effects on selected-response and gap-fill, smallest on free production. Duolingo’s own speaking study after A2 content: about half met A2 on Versant (listen-and-repeat, short answers, story retell — not unscripted conversation); the video-call add-on still left an RCT sample at **A1** speaking ([02](02-app-outcomes-gap.md)).
- **Meaning-focused input at the right coverage works as a strand**, not as a five-minute tile. Nation (2007): 95–98% known words, large quantity. LingQ/Beelinguapp/Seedlang/Easy German are the mobile products that actually sit in that strand. Duolingo Stories are a **gated** cousin: longer input than tiles, but questions interrupt (first-party).
- **Output that conveys a message is a different strand from drills.** Nation’s meaning-focused output conditions (familiar topic, goal is the message, strategies allowed) match Busuu Corrections “construct without the tip,” HelloTalk/Tandem real partners, and scenario AI with a goal (Duolingo Roleplay, Rosetta three goals, Babbel Speak tasks). They do not match word-bank translation.
- **Interaction needs a problem to repair.** Long (1996) via Ellis: acquisition-rich when meaning is negotiated. Duolingo Adventures’ “Oh, did you mean…?” is a designed, in-world version of that. HelloTalk/Tandem inline correction is the human version. CEFR B2 explicitly includes dealing with misunderstandings.
- **Mobile tasks should match the moment.** Stockwell and Hubbard: short and interruptible on a phone in dead time; longer reading-and-response in a quieter setting. Pimsleur owns the hands-free 30-minute aural sitting. Drops owns the five-minute visual burst. Neither is B2 discussion.
- **Formulaic language is an A-level feature, not a B2 ceiling.** Ellis Principle 1: chunks first can be rational; B-level still needs generative, personal meaning (Principle 8: “express their own personal meanings”).

### What first-party marketing claims that the evidence does not carry

- **“Chatbot = conversation class.”** Duolingo’s own Roleplay post is the rebuttal: a naive “practice Spanish with me” prompt is not enough; they needed scenario, CEFR constraint, character, narrator arc, and turn-typed prompts. Speak.com says the same in different words (curriculum vs open chat).
- **“B2 content on the path = B2 interaction.”** Duolingo Score 100–129 is a *course coverage* label. [02](02-app-outcomes-gap.md) found no published first-party study of typical app-only learners reaching CEFR B2 spoken interaction.
- **VR/AR as pedagogy.** Mondly owns an early VR chatbot; that is a Presentation. No primary study in this pass showed VR beats an equivalent phone scenario for acquisition. Treat headset immersion as optional chrome.
- **Five minutes a day as fluency.** Drops’ own method is spaced visual vocab. Nation’s fluency strand requires already-known language and time pressure, not new picture–word pairs.
- **Memrise “proven” stress reduction; Drops “2× faster.”** First-party slogans without the owning trial in the cited posts — UNVERIFIED.

### What routinely fails as a learner experience (sources + inference)

- **Desktop drills on a phone.** Stockwell and Hubbard: porting CALL without mobile affordances. Tiny keyboards for long free writing in a noisy commute is the anti-pattern; SMS-length produce and tap-to-gloss are the fit.
- **Open produce with no goal, no close, no level.** Opposite of every careful AI implementation in this survey (Roleplay narrator, Babbel tasks, Busuu topic+goal, Rosetta three goals).
- **Correcting every error in flight.** Babbel Speak: no mid-response interrupt, goal is being understood. Busuu spoken corrections: one or two significant mistakes. Tandem: don’t interrupt the call. CEFR A-level users are “totally dependent” on repair; flooding them with form feedback fights the job. Adventures redirect in character instead of grading.
- **Calling a situation catalogue “B2.”** [24](24-exploration-adjacent-products.md): hotel/café/airport is an A1 topic list. B2 jobs in the Companion Volume are extended conversation, news, argument, professional/academic scenarios (Busuu’s own B2 can-dos).

---

## 6. Out-of-the-box Presentations / mechanics worth knowing

Steal the **pattern**, not the mascot. Reject where the pattern fights Davio’s lived Activity.

| Pattern | Who ships it | Why it is interesting | Risk for Davio |
| --- | --- | --- | --- |
| **Gated story with intermittent checks** | Duolingo Stories | Longer input than tiles; mobile-proven engagement (+time, +actives). | Not open reading; questions can smash transportation ([23](23-situated-narrative-cultural-learning.md)). Use as *optional* checks after a lived scene, not as the scene. |
| **Advanced-story free sentence** | Duolingo writing in advanced Stories | First-party admission that free long produce was otherwise missing. | Fits B-level job; still a determinate prompt, closer to Davio `produce` than to a blank page. |
| **In-world redirect, not a red X** | Duolingo Adventures | Feedback as interlocutor confusion — CEFR repair, Long negotiation. | Adventures board is a cartoon path ([24](24-exploration-adjacent-products.md)). Put the redirect in the *scene*, not on a pawn. |
| **Narrated roleplay with a job and a close** | Duolingo Roleplay; Rosetta 3 goals; Babbel Speak tasks; Busuu topic+goal | Stops aimless chatbot; bite-sized arc. CEFR level in the *language*, not a new widget. | Runtime must not author new Target-language sentences ([ADR 0005](../adr/0005-runtime-does-not-author.md)). Author the scenario and acceptable produce; don’t live-generate the world. |
| **Guided vs unguided talk as two modes** | Falstaff vs Lily | Scaffolding as a Presentation choice, reusable at every score. | Don’t lock “guided” to A1 forever; B2 still wants a coach *and* an unguided turn. |
| **Scripted part in a dialogue (listen, then speak your line)** | Babbel Guided Conversations A1/A2; Pimsleur Speak Easy | Formulaic, Ellis Principle 1, low anxiety. | Right as a *step* inside an Excursion, wrong as the whole B1–B2 sitting. |
| **Unique write/speak + delayed human correction** | Busuu Community; HelloTalk/Tandem inline correct; Easy German Zoom (off-app) | Real meaning-focused output; word-count as the level dial. | Community is a product; Davio v1 is one Learner. Delayed Feedback/Repair is the in-app analogue, not a social network. |
| **Tap-to-gloss on authentic text/video** | LingQ; Seedlang; Beelinguapp (side-by-side) | Mobile `read` that is actually input. Sentence mode = A-level chunking of the same mechanism. | Side-by-side translation can prevent Noticing; tap-unknown is closer to Davio. |
| **SMS / Moments as the canvas** | HelloTalk, Tandem, CEFR online scale | The official B-level job is threading and repairing in slowed-down dialogue. | Presentation of `read`/`produce`, not a new Interaction id. |
| **Phoneme-level repeat** | ELSA; TruAccent; Voice Coach | Useful language-focused strand for pronunciation. | Not Excursion play; belongs in Practice if anywhere. |
| **Visual five-minute vocab** | Drops | Excellent dead-time affordance. | Reject as Excursion; it is not a lived Activity. |
| **30-minute aural recall, no screen** | Pimsleur | Hands-free mobile sitting they contrast with matching pictures. | Controlled output; not a Destination scene. |
| **Video flashcards from street speech** | Seedlang / Easy German | Authentic input, A1–B2 claimed, pronunciation compare. | Content comes from a street corpus, not from generating a café. |
| **Headset VR scenario** | Mondly VR | Know it exists. | Reject for v1. Phone scene + speech is the transferable bit. |

---

## 7. Proposal — register for Davio Excursion play

**This section is a proposal for mockup work, not an ADR, and not a change to the Interaction catalog.**

Davio already has the right split: **Interaction** (`read` / `select` / `complete` / `produce`) vs **Presentation** (bubbles, transcript, pager, scroll; `dialogue` is a look). Competitor apps that feel “new” almost always changed Presentation and job, then marketed it as a new mechanic. Combined Writer’s mobile-first picker should therefore pick **Presentations and jobs**, not mint a fifth Interaction type for chat or SMS.

**Default register (B1–B2 Excursion, the live product):**

1. **Open on `read`.** A lived scene the Learner can listen to and return to — LingQ/Seedlang’s lesson, not Drops’ first tap. Stockwell and Hubbard: this sitting wants a quieter moment than a commute tile. Keep a way back to the source on later Items ([core-flow](../product-experience/core-flow.md) already leans this way).
2. **Noticing as `select` / `complete`, short.** Language-focused strand, Nation’s quarter, Ellis focus on form. Word banks and gaps are legitimate *here*, as retrieval of a form that just occurred in the scene — not as the whole Activity.
3. **Close the sitting with `produce` that has a B-level job.** Not a longer gap-fill. A job from the Companion Volume’s B bands: account for a view, explain why something is a problem, link to what someone just said, repair a misunderstanding, leave a message that a sympathetic stranger could act on. Constraint can remain (determinate acceptable answers, per current `produce`) so runtime does not author. Amount should be **more than one isolated phrase** (A1 production) even if it is not a blank essay.
4. **Present that produce as slowed-down dialogue when the scene is social.** SMS thread, voice-note, café counter, group chat — CEFR online interaction, HelloTalk’s canvas, Duolingo’s narrator-arc without the LLM. The same `produce` can look like a card or a spoken turn.
5. **Feedback in character, then Repair out of band.** Adventures-style redirect in the scene (“Did you mean…?”); Busuu/Tandem-style delayed form comment in Feedback/Repair. Do not grade every token mid-turn (Babbel Speak, Busuu spoken-correction guidance).
6. **Do not save open chatbot for v1 Excursion.** Every careful AI product in this survey had to add scenario, level, goal, and close. Davio’s runtime must not generate Target-language prose. If a later slice wants AI talk, it is a Practice or Max-like side quest with authored scenarios, not the Excursion body.

**If the same register is ever used at A1 (Studio / other Target languages):** keep the Presentations, change the **job and the constraint**. A1 produce is formulaic, help-allowed, immediate need (CEFR; Ellis chunks; Babbel Guided Conversations). More `complete`, shorter `produce`, more repetition and repair as the *point* of the Item, not a failure. Do not invent a separate A1 widget set.

**What not to copy into Excursion play:** path pebbles and streaks as Progress ([22](22-streaks-habits-gamification.md), [24](24-exploration-adjacent-products.md)); five-minute vocab as the sitting; VR headset; live language-exchange as a v1 dependency; treating “B2” as longer tiles.

---

## 8. Gaps this pass could not verify

- **Mix tables.** No first-party public breakdown of tap vs type vs speak vs free-produce *by unit or CEFR band* for Duolingo, Babbel, or Busuu. The “same skins, harder language” claim is inferred from their method posts plus the few mechanic locks they advertise.
- **Babbel help HTML.** Guided Conversations and Speak help articles were Cloudflare-blocked; A1/A2 restriction and mid-turn behaviour are from official URLs as indexed / from the Speak press release.
- **Duolingo 2025 Video Call white paper.** S3 URL returned HTTP 500 here; numeric RCT result is carried from [02](02-app-outcomes-gap.md), not re-fetched.
- **Memrise stress claim; Drops 2× Premium.** Uncited first-party slogans.
- **In-app German B2 play.** This note did not run the live apps through a B2 German unit to count Items. Seedlang A1–B2 and Duolingo German-through-B2 are coverage claims.
- **Speak for German.** Not offered to English speakers on speak.com at fetch time.
- **AnkiMobile, Clozemaster, Influent, Busuu certificates vs Complete course.** Out of scope or already in [24](24-exploration-adjacent-products.md).
- **Classroom TBLT vs app.** Ellis and Nation are classroom/course frameworks; applying them to a 5–8 minute authored Activity is an inference, labelled as proposal above.

---

## Sources (primary)

**CEFR and pedagogy**

- Council of Europe (2020). CEFR Companion Volume. <https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4>
- Nation, I. S. P. (2007). The four strands. *Innovation in Language Learning and Teaching, 1*(1). <https://www.wgtn.ac.nz/lals/resources/paul-nations-resources/paul-nations-publications/publications/documents/2007-Four-strands.pdf>
- Ellis, R. (2005). Principles of instructed language learning. *System, 33*(2), 209–224; digest (2008) <https://www.cal.org/wp-content/uploads/2022/05/PrinciplesofInstructedSecondLanguageAcquisition-1.pdf>
- Kukulska-Hulme, A., & Shield, L. (2008). *ReCALL, 20*(3), 271–289. <https://doi.org/10.1017/S0958344008000335>
- Stockwell, G., & Hubbard, P. (2013). TIRF MALL principles. <https://www.tirfonline.org/wp-content/uploads/2013/11/TIRF_MALL_Papers_StockwellHubbard.pdf>

**Apps (first-party)**

- Duolingo: teaching method, speaking, writing, Stories (Android), Max/Roleplay, chatbot prompts, Adventures, Falstaff Video Call, Score — URLs inline above.
- Babbel: method page; Speak press release 16 Sep 2025; Guided Conversations / Speak help (see §8).
- Busuu: courses, Community Corrections, Conversations.
- Memrise: “The Memrise Story”; Zendesk New Experience; AI Buddies.
- LingQ: home, iOS support, beginner guide.
- HelloTalk / Tandem: home, FAQ, correction guides.
- Speak.com home/FAQ. ELSA homepage, AI FAQ, Anguera et al. SLaTE 2023.
- Drops home + Quiz/Audio mode blogs. Pimsleur FAQ. Rosetta TruAccent blog + Chat Missions. Mondly VR + FAQ. Seedlang/Easy German app and membership/help. Beelinguapp about.

**In-repo**

- [02](02-app-outcomes-gap.md), [22](22-streaks-habits-gamification.md), [23](23-situated-narrative-cultural-learning.md), [24](24-exploration-adjacent-products.md)
- Product pack `CONTEXT.md` (Interaction / Presentation); [ADR 0008](../product-pack/docs/adr/0008-operator-interaction-catalog.md); [ADR 0005](../adr/0005-runtime-does-not-author.md)

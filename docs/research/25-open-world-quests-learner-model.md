# Open-world quests, learner models, and “the world becomes readable”

Written for a senior engineer who is not a linguist or a game designer. Every claim traces to the paper, designer talk, first-party product post, or institute document that owns it. This is **discovery research**, not a product spec. It does not recommend shipping a map.

**Product frame.** Davio is a hobby German Gym. v1 is curated reading/listening with Noticing and a Grammar-only Gap map. The Learner already lives in Germany; Immersion is free. An exploration / RPG-shaped later product has been sketched as: main quest + side quests + free explore; a map of real cities; difficulty colours per location; recurring characters; mystery layers; capability-based unlocks; “the world becomes understandable as you improve.” This note asks what high-trust sources actually say about those *objects*. It does not decide whether to build them.

SLA, Noticing, Focus on Form, four strands, spacing, and “personalization ≠ skill tree” are owned in [01](01-sla-adult-self-directed.md) and [14](14-linguistic-learning-content-application-domains.md). Situated learning, stories, culture, place, MDA/Bartle/Yee at overview depth, and adaptive-session claims are owned in [23](23-situated-narrative-cultural-learning.md). Streaks vs learning are owned in [22](22-streaks-habits-gamification.md). Metaphor vs mechanic in language products is owned in [24](24-exploration-adjacent-products.md). Product-direction synthesis (not a spec): [exploration-concept.md](../product-experience/exploration-concept.md). Quests / colours / unlocking / characters as a later-product investigation: [exploration-progression-concept.md](../product-experience/exploration-progression-concept.md). This note **extends** those files. It does not re-litigate them and must not be read as contradicting them.

## How to read this

| Tag | Meaning |
| --- | --- |
| **FINDING** | What the owning source claims, with its sample and measure. |
| **INFERENCE** | A reasonable product reading the owning source does not itself test. |

Psychology, psychometrics, game design, and SLA are four literatures. They use “progress,” “mastery,” “exploration,” and “character” for different objects. Mixing those objects is the error this note is written to prevent.

German and learning claims stay split ([linguistics skill](../../.agents/skills/linguistics/SKILL.md); [14](14-linguistic-learning-content-application-domains.md)):

| Layer | Question |
| --- | --- |
| **Language** | What is true of German with no Learner in the picture? |
| **Pedagogy** | What is worth this Learner noticing, in this Study band? |
| **Application** | How a sitting is framed (map, quest, colour, XP) |

A café tile is not a Language fact. “This Learner can order coffee” is a Pedagogy/assessment claim. Painting the tile green is an Application claim about a *model*. Those three can disagree.

Where a famous paper could not be opened in full, that is stated and the authors’ later restatement is used.

---

## The one-paragraph answer

An open-world *shape* (main quest, side quests, free roam) is a **content-architecture** pattern from games, not a learning method. Designers who own it treat main-quest / side-quest / roam as different *player jobs*, warn that one system cannot equally serve Bartle types, and use **soft locks** (you can walk there and die, or the systems will not yet compose) rather than honest “you may go anywhere and succeed.” Choice overload is real in some consumer experiments and **not robust** in meta-analysis; “open-world fatigue” is industry slang, not a named theory — the closest designer-primary object is *fake* openness (heatmaps on the critical path). Knowledge tracing, IRT, and DKT can estimate **item-level** mastery given many independent skills and many responses; they cannot honestly paint café=green / workplace=red for one hobby Learner. Recurring characters create parasocial *intimacy at a distance* (entertainment); that is not an L2-intake finding. Layered mystery is environmental storytelling plus investigation *mechanics*; rereading the same story as you improve is closer to Krashen’s **narrow reading** and graded-reader practice than to a unique game gimmick — and transportation can fight Noticing ([23](23-situated-narrative-cultural-learning.md)). Collection motivates Achievement and Discovery differently (Yee); a museum loop retains *gatherers*, not necessarily *noticers*. “You can now do X” is Bandura mastery experience + CEFR can-do + Hattie task/process feedback; XP is a different object ([22](22-streaks-habits-gamification.md)). Variable sitting length is still not spacing ([23](23-situated-narrative-cultural-learning.md)); Cepeda 2008 adds that the *optimal gap* grows with the desired retention interval. Adjacent products that [24](24-exploration-adjacent-products.md) did not fully cover (Discovery Tour, GeoGuessr, Heaven’s Vault, 80 Days, Ingress / Pokémon GO, Birdbrain) almost all sell a **world** and ship a **different mechanic**.

---

## 1. Open-world / quest game design

### 1.1 Main quest, side quests, free roam — what designers actually separate

**FINDING (Hunicke, LeBlanc, & Zubek, 2004, MDA).** Games decompose into **Mechanics** (data, algorithms, actions afforded), **Dynamics** (run-time behaviour given player input), and **Aesthetics** (desirable emotional responses). Their non-exhaustive aesthetic list includes **Discovery** (“game as uncharted territory”), distinct from Narrative, Challenge, Fantasy, and Submission. MDA was taught at GDC 2001–2004. It does **not** claim Discovery retains players after novelty fades; the Monopoly worked example is about **runaway feedback** *killing* late-game investment. PDF: https://users.cs.northwestern.edu/~rob/publications/MDA.pdf — AAAI: https://aaai.org/papers/ws04-04-001-mda-a-formal-approach-to-game-design-and-game-research/

**FINDING (Jenkins, “Game Design as Narrative Architecture”).** Game designers are **narrative architects**: they sculpt spaces more than they plot novels. Environmental storytelling works in four ways: **evocative** spaces (borrowed genre associations); **enacted** narratives (movement across a map stages the plot); **embedded** narratives (mise-en-scène as a memory palace the player reconstructs); **emergent** narratives (sandbox resources). Spatial stories “are held together by broadly defined goals and conflicts and pushed forward by the character’s movement across the map.” He is explicit that not all games tell stories, and that play cannot be reduced to story. Primary HTML: https://web.mit.edu/~21fms/People/henry3/games&narrative.html (also circulated as the *First Person* chapter PDF).

**INFERENCE.** In Jenkins’s terms, a “main quest” is enacted narrative with a destination; “side quests” are micronarratives / optional enacted loops; “free roam” is mostly evocative + embedded + emergent. Those are **different jobs**. One map UI can host all three. That does not make them one learning system.

**FINDING (Bartle, 1996).** From a wizards’ debate on a commercial UK MUD, Bartle abstracted four player types on two axes (acting vs interacting; players vs world): **Achievers, Explorers, Socialisers, Killers**. The paper’s job is **balancing a multiplayer population**, not designing a single-player learning app. He is explicit that if too many players gravitate to one style, others leave, and that administrators must **choose** an equilibrium — there is no universal mix. Explorers “dig around for information”; they are not “fog-of-war learners.” Primary: https://mud.co.uk/richard/hcds.htm

**FINDING (Yee, 2006/2007).** Factor analysis of ~3,000 MMORPG players. Bartle’s Explorer **splits**: geographical exploration and tinkering with mechanics did not load together. Motivations are **scores, not exclusive types**; Bartle’s assumption that being more Achiever means being less Socialiser was not supported (correlations among Achievement, Social, and Immersion components *r* < .10). Ten subcomponents group into Achievement (Advancement, Mechanics, Competition), Social (Socializing, Relationship, Teamwork), and Immersion (Discovery, Role-Playing, Customization, Escapism). Self-report importance ratings, not behavioural retention curves, and not language-learning outcomes. https://doi.org/10.1089/cpb.2006.9.772 — author PDF used: https://www.nickyee.com/pubs/Yee%20-%20Motivations%20(2007).pdf

**FINDING (Quantic Foundry / Yee, 2015).** Gamer Motivation Profile on large survey samples. Early version: **no coherent Exploration factor**; map exploration loaded on Fantasy, mechanics exploration on Mastery. v2 added **Discovery** — “experimenting with the game world… constantly asking ‘what if?’” — clustered with Design under Creativity, **not** as “uncover the map.” Completion (“discover hidden things”) sits under **Achievement**. First-party: https://quanticfoundry.com/2015/06/18/how-we-created-the-gamer-motivation-profile/ ; chart: https://quanticfoundry.com/2015/12/15/handy-reference/

**INFERENCE.** One quest-and-map system cannot “serve all player types.” Bartle’s own claim is that types **trade off** in a shared world. Yee’s claim is stronger for a solo app: people are **mixtures**, so a single loop will over-serve Advancement (clear next objective) and under-serve Discovery-as-what-if, or vice versa. [23](23-situated-narrative-cultural-learning.md) already owns this at overview depth; the load-bearing add here is: **main quest vs side quest vs roam is a Bartle/Yee *mixture* problem**, not a syllabus.

### 1.2 Decision paralysis / choice overload

**FINDING (Iyengar & Lepper, 2000).** Three experiments. Field: gourmet-jam tasting booth, 6 vs 24 flavours. Extensive display attracted more stoppers; **subsequent purchase** was ~30% (limited) vs ~3% (extensive). Lab: chocolates and optional class essays — limited arrays produced more choosing, more satisfaction, better essays. *Journal of Personality and Social Psychology, 79*(6), 995–1006. https://doi.org/10.1037/0022-3514.79.6.995

**FINDING (Scheibehenne, Greifeneder, & Todd, 2010).** Meta-analysis of 63 conditions from 50 experiments (*N* = 5,036). Mean effect size of choice overload was **virtually zero**, with **considerable between-study variance**. No sufficient conditions for a reliable overload effect were identified. *Journal of Consumer Research, 37*(3), 409–425. https://doi.org/10.1086/651235 — author PDF: https://scheibehenne.com/ScheibehenneGreifenederTodd2010.pdf

**INFERENCE.** “Open a map of Germany and freeze” is a **plausible Application risk**, not a law. Iyengar shows overload *can* happen when options are poorly differentiated and the choice is low-stakes consumer goods or optional homework. Scheibehenne shows it is **not** a robust main effect. Game-design practice that *does* have designer-primary support is **reducing undifferentiated options** (see BotW “gravity” below), not “never give choice.”

**FINDING (Nintendo, GDC 2017 / CEDEC 2017, Breath of the Wild).** Fujibayashi, Takizawa, and Dohta: the design goal was to move Zelda from a **passive, guided** experience to an **active** one by removing conventional progression gates (unclimbable walls) and letting systems interact (“chemistry”). CEDEC (Fujibayashi & Yonezu), as archived by working level designers from the talk: late in development, **heatmaps showed players concentrating on a few paths**; when they left the critical path they got lost *badly*. The team aimed for **dispersed flow** using landscape “gravity” (bowls/funnels) and a **triangle** topography rule — landmarks that invite “over or around” without a quest marker. GDC video: https://www.youtube.com/watch?v=QyMsF31NdNc — Gamasutra write-up of GDC: https://www.gamedeveloper.com/design/video-designing-i-zelda-breath-of-the-wild-i-s-unconventional-mechanics — CEDEC summary used: http://www.blog.radiator.debacle.us/2017/10/open-world-level-design-spatial.html (secondary archive of a designer talk; the claims about heatmaps and triangles are attributed to Nintendo, not invented here).

**INFERENCE.** BotW’s lesson for a language map is not “open world.” It is: **if you draw a world and then funnel everyone onto a path, you built a linear course with extra art.** That is already [24](24-exploration-adjacent-products.md)’s Duolingo-path finding.

### 1.3 Soft vs hard locks (BotW / Dark Souls vs gated levels)

**FINDING (Miyazaki / FromSoftware, Dark Souls, first-party interviews).** Difficulty is a tool for **sense of achievement** and **surprise of discovery**, not a content lock. PlayStation Blog Q&A (2011): they did not intend to make the game easier; they intended to let players “strategize freely and conquer that difficulty.” Death should leave “maybe if I try a different strategy I can succeed.” Difficulty is **not** framed as reflex speed. Game Informer Afterwords (2011): concepts are “sense of achievement” and “surprise of discovery”; high challenge exists to produce accomplishment, “not to simply make players suffer”; “Prepare to Die” was a **publisher tagline**. https://blog.playstation.com/2011/02/04/dark-souls-qa-variety-is-the-spice-of-death/ — https://www.gameinformer.com/b/features/archive/2011/11/12/afterwords-dark-souls.aspx

**FINDING (BotW, GDC 2017).** Hard gates (unclimbable walls, “get the item in dungeon N”) were **removed**. Soft constraints remain: stamina, enemy strength, weather, chemistry. You can walk to Hyrule Castle early and **die**. That is a **skill/resource soft lock**, not a greyed-out node.

**INFERENCE.** “Capability-based unlocks” in a language app is ambiguous. A **hard lock** (“you may not open the workplace text until the café skill is 80%”) is a gated level — Focus on Forms with a map skin ([14](14-linguistic-learning-content-application-domains.md); Long via [23](23-situated-narrative-cultural-learning.md)). A **soft lock** (“you may open the workplace text; coverage will be ugly; Noticing will be miserable”) is Dark Souls / BotW. Soft locks still require the Learner to **know they are allowed to leave**. They are not a proficiency colour.

### 1.4 “Open-world fatigue”

No designer-primary paper found here names a construct “open-world fatigue” with a measure. Industry talk (Ubisoft-formula checklists, collectible fatigue) is **secondary**. The designer-primary object that *is* owned: **players experience a big map as a guided path** (BotW heatmaps) or as **completion chores** (Yee Completion under Achievement; MDA Submission). [23](23-situated-narrative-cultural-learning.md) already: Hunicke et al. do not report longitudinal retention for Discovery.

**INFERENCE.** Fatigue is more likely when the map’s remaining work is **undifferentiated collectibles** than when remaining work is **new messages**. That is a content problem, not a fog problem ([exploration-concept.md](../product-experience/exploration-concept.md): “The map is decoration unless it changes what is noticed”).

---

## 2. Knowledge tracing / mastery / proficiency estimation

[14](14-linguistic-learning-content-application-domains.md) §2.8 and [23](23-situated-narrative-cultural-learning.md) §8 already own: IRT and BKT live in the **learning** domain; v1 cannot identify them; do not build them. This section adds what those models **need**, what DKT adds, what Pelánek’s review actually says, and what a green/red city is.

### 2.1 BKT (Corbett & Anderson)

**FINDING (Corbett & Anderson, 1995).** *Knowledge tracing: Modeling the acquisition of procedural knowledge.* *User Modeling and User-Adapted Interaction, 4*, 253–278. https://doi.org/10.1007/BF01099821

The 1995 PDF timed out when fetched for this note. The owning abstract (Springer) and the authors’ setup, as restated in Pelánek (2017) and in every subsequent BKT paper: students learn to write short programs in the **ACT Programming Tutor**. The tutor has an **ideal student model** of **production rules**. As the student works, the tutor estimates the probability that each rule has been learned (knowledge tracing) and sequences exercises until each rule is “mastered.” Parameters: *p*(L0) initial learned, *p*(T) learn on a step, *p*(G) guess, *p*(S) slip.

**What it needs (from the same literature, not a product blog):**

- **Fine-grained, relatively independent skills** (production rules / knowledge components), not “German” or “the café.”
- **Many practice opportunities per skill** (binary correct/incorrect on steps).
- **Guess and slip** so a lucky hit is not mastery and a slip is not unlearning.

**What it is not.** A colour on a city. “Mastered the dative” as one skill is the SAT/Focus-on-forms error at measurement scale ([14](14-linguistic-learning-content-application-domains.md)). Reception + explanation sittings are the wrong data.

### 2.2 IRT

**FINDING (already in [14](14-linguistic-learning-content-application-domains.md)).** Lord (1980); Rasch (1960). Person ability θ and item difficulty on one scale, estimated from **many persons × many items**. A hard item is not “advanced German.” With one Learner and 10–20 pieces, you cannot fit IRT.

### 2.3 DKT (Piech et al., 2015)

**FINDING (Piech, Bassen, Huang, Ganguli, Sahami, Guibas, & Sohl-Dickstein, 2015).** *Deep Knowledge Tracing.* NeurIPS 2015. https://papers.nips.cc/paper_files/paper/2015/file/bac9162b47c56fc8a4d2a519803d51b3-Paper.pdf — arXiv: https://arxiv.org/abs/1506.05908

RNNs / LSTMs model the knowledge-tracing **prediction** problem (will the student get the next item right?) **without** a human-encoded Q-matrix of skills. Gains reported on **Khan Academy** and **ASSISTments** scale logs (AUC 0.85 vs BKT 0.68 on Khan in their table). They advertise “no explicit encoding of human domain knowledge.”

**What it needs.** Large sequential interaction logs. A hidden state that is **not** a labelled skill. Interpretation of *why* café went green is **not** the model’s output unless you add a separate probing layer.

**INFERENCE.** DKT is worse, not better, for a one-Learner hobby: you have neither the labelled skills of BKT nor the data volume of DKT.

### 2.4 Pelánek (2017) — if you read one review

**FINDING (Pelánek, 2017).** *Bayesian knowledge tracing, logistic models, and beyond: an overview of learner modeling techniques.* *User Modeling and User-Adapted Interaction, 27*, 313–350. https://doi.org/10.1007/s11257-017-9193-2 — author PDF used: https://www.fi.muni.cz/~xpelanek/publications/umuai-overview.pdf

Load-bearing claims from the opened preprint:

1. **Context first.** There is no universal best model. A model for sequencing L2 vocabulary is a different object from a model for discovering the structure of high-school algebra.
2. **Knowledge components (KCs)** are the grain. Finer KCs are more precise and **worse estimated** (more parameters, less data per KC). Coarse KCs (“workplace German”) are identifiable and **pedagogically fake**.
3. **KLI (Koedinger et al., 2012)** split: facts (fluency-building), categories (induction), rules/principles (sense-making). BKT-style tracing fits **outer-loop item sequences** on relatively discrete KCs. German case in a B1 text is closer to **sense-making + redundant morphology** than to a fact KC ([01](01-sla-adult-self-directed.md); Schmidt noticing).
4. **Purpose changes the model.** Inner loop (hints on one problem) vs outer loop (which item next) vs **open learner model** (what you show the human) vs discovery-with-models. Identifiability may not matter for item selection and **does** matter if you paint a map.
5. **Mastery policies** (e.g. “95% chance the learner knows the next item”) are an **instructional policy on top of a model**, not the model. “k correct in a row” is a policy **without** a psychometric engine.

### 2.5 Can a one-Learner hobby honestly paint café=green / workplace=red?

**FINDING.** No owner above supports this. BKT needs many items per independent KC. IRT needs a population. DKT needs industrial logs. Pelánek: coarse KCs that match “café / workplace” are the wrong grain for German.

**What *can* be estimated (Pedagogy, honest):**

- **Coverage of a text** (unknown-word rate; Hu & Nation via [01](01-sla-adult-self-directed.md)) — a property of *this piece × this lexicon*, not of a city.
- **Self-mark / Gap-map chip** on a **form** the Learner explained ([14](14-linguistic-learning-content-application-domains.md)) — learner-state evidence, high uncertainty, no café colour.
- **CEFR can-do self-positioning** (Council of Europe, 2020, via [14](14-linguistic-learning-content-application-domains.md)) — “I can follow the main points of a work meeting in standard German” is a **descriptor**, not a calibrated θ.

**What is marketing:**

- A traffic-light Germany.
- “The system knows you are B1 in shops and A2 at work” from Gym sittings that are reading/noticing, not domain tests.
- Treating interest (“I opened three Berlin pieces”) as proficiency.

**Confidence / uncertainty.** BKT’s output *is* a probability — but that probability is only as honest as the KC definition and the item count. Showing a probability on a fake KC is **false precision**. Pelánek: for an open learner model, identifiability matters; do not display a point estimate you cannot defend.

**Skill-specific assessment.** Possible when the **item** isolates the skill (VanPatten structured input via [21](21-pattern-practice-later-slice.md); a dative cloze; a can-do interview). A “workplace location” mixes lexicon, register, genre, and world knowledge. Colouring it is a **domain average**, not skill-specific assessment.

---

## 3. Recurring characters

### 3.1 Parasocial (Horton & Wohl, 1956)

**FINDING (Horton & Wohl, 1956).** *Mass Communication and Para-Social Interaction: Observations on Intimacy at a Distance.* *Psychiatry, 19*(3), 215–229. https://doi.org/10.1080/00332747.1956.11023049 — open reprint used: http://visual-memory.co.uk/daniel/Documents/short/horton_and_wohl_1956.html

They name a **seeming face-to-face relationship** between spectator and performer a **para-social relationship**. The persona uses direct address and informal style to simulate conversation. The spectator is free to withdraw; the relation has **little obligation**. The **crucial difference** from ordinary social life is **lack of effective reciprocity**: the interaction is one-sided, non-dialectical, controlled by the performer. *Personae* (quiz-masters, announcers) may exist for the audience **only** in that relation.

**Limits they own:** 1950s radio/TV; observations, not an experiment; not education, not L2.

**INFERENCE.** A Gym character who “speaks” the sentence you translate is a Horton–Wohl persona. Attachment is **entertainment intimacy**, not evidence the Learner acquired *dem*. Duolingo first-party already says characters exist so learners “spend time within our product” ([24](24-exploration-adjacent-products.md)). That is a **retention** claim. It is not an SLA claim.

### 3.2 Narrative transportation (Green & Brock)

Already owned in [23](23-situated-narrative-cultural-learning.md): Green & Brock (2000), https://doi.org/10.1037/0022-3514.79.5.701 — transportation → story-consistent **beliefs**, fewer “false notes.” Dependent variable is **persuasion**, not L2 intake. Deep absorption can **suppress** anomaly detection — the opposite of Schmidt-noticing.

Recurring characters can **increase** transportation (familiar protagonists). That is a **risk to Noticing**, not a free retention lunch.

### 3.3 Educational TV characters

**FINDING (Fisch & Truglio, eds., 2001; Fisch, 2004 — CTW / Sesame).** *“G” is for Growing* and *Children’s Learning from Educational Television* collect **formative + summative** research on Sesame Street: curriculum baked into production (the CTW model: producers + content specialists + researchers), effects on **school readiness** and some social behaviour in **children**. Fisch, Truglio, & Cole (1999) review. This is **children’s educational television**, often L1 literacy/numeracy, not adult B1–B2 German.

The 2001/2004 volumes were not opened cover-to-cover here (preview PDFs only). Do not upgrade “Big Bird teaches letters” into “a recurring Berlin WG will teach case.”

**INFERENCE.** Continuity of characters can support **recognition and parasocial return** (Horton & Wohl + CTW’s own practice of stable personae). No primary source opened here shows that character continuity **increases L2 proficiency** in adults. Distinguish:

| Object | Owner | Measure |
| --- | --- | --- |
| Want to see the persona again | Horton & Wohl; Duolingo “building character” | Time-in-product |
| Transported by the plot | Green & Brock | Beliefs, missed false notes |
| Learn a letter/number | Sesame / CTW | Child school-readiness tests |
| Notice *dem* in a sentence | Schmidt ([01](01-sla-adult-self-directed.md)) | Conscious registration of a form |

---

## 4. Mystery / layered meaning

### 4.1 Environmental storytelling and investigation *mechanics*

**FINDING (Jenkins, as §1).** Embedded narrative: the space is a **memory palace**; the player reconstructs a story that already happened (detective plot as the classic). Environmental cues (broken door, crashed vehicle) let the player infer off-screen events. This is **comprehension of spatial clues**, not L2 grammar.

**FINDING (Barlow, Her Story, GDC 2016 — designer-primary).** Mechanic: a **searchable database** of ~300 live-action interview clips. No chronological scrubber. Query a word → clips whose transcript contains it. Barlow: the game **revolves around subtext**; “the player’s brain is the world’s most powerful game engine”; he **balanced keyword connectivity** in a spreadsheet so discovery order would still be satisfying. GDC Vault: https://www.gdcvault.com/play/1023430/Making-Her-Story-Telling-a — Gamasutra: https://www.gamedeveloper.com/design/-powerful-stories-require-ambiguity-a-story-about-i-her-story-i-

**FINDING (Pope, Return of the Obra Dinn — designer-primary).** Mechanic: freeze a moment of death; fill a **logbook** of identity + fate. To block brute force, **correct fates validate only in sets of three** (designer interviews / GDC Twitch, as reported in first-party-adjacent designer coverage). Pope: he treats design as **engineering problems** (dithering, 60 fates, localization of the sentence builder). https://www.gamedeveloper.com/design/for-lucas-pope-i-return-of-the-obra-dinn-i-was-a-bunch-of-appealing-design-problems

**FINDING (Ingold / Humfrey, Heaven’s Vault — inkle first-party).** Mechanic: a constructed **Ancient** language of glyphs. Player picks a gloss; the game **does not confirm** correctness (so players cannot brute-force). Translations **feed the narrative** (Aliya theorizes from *your* gloss). Ingold (IGF): confirming translations would make players never look at word construction; “you’re never really finished with Ancient.” inkle Medium (first-party): **translations do not unlock sites**; you can skip or mistranslate and still finish the plot — only **understanding** changes. Replay: later runs get **longer inscriptions**. https://www.gamedeveloper.com/business/road-to-the-igf-inkle-s-i-heaven-s-vault-i- — https://medium.com/@inklestudios/why-does-translation-unlock-sites-in-heavens-vault-e05c4ccadf62

**INFERENCE.** These are **search, deduction, and unconfirmed translation** loops. They are not “a map of Köln.” Heaven’s Vault is the closest **mechanic** to “the same writing means more later” — and inkle’s own claim is that this is **archaeology / interpretation**, and that translation is **not a gate**. That is the opposite of a capability hard-lock.

### 4.2 “You understand more of the same story later” — pedagogy, not a gimmick

**FINDING (Krashen, 2004, *The Case for Narrow Reading*).** *Language Magazine, 3*(5), 17–19. https://www.sdkrashen.com/content/articles/narrow.pdf (also 2004_case_for_narrow_reading_lang_mag.pdf)

He argues against survey anthologies that jump topic every chapter. **Narrow reading** = several books by one author or on one topic of interest. Reasons he owns: (1) each writer/topic has recurring lexicon and style → **built-in review**; (2) **background knowledge** makes later texts more comprehensible (the “first few pages” effect: the start of a new author is hard, then it eases — short varied selections never get past that); (3) **motivation**. He cites Cho & Krashen Sweet Valley studies (adult L2 acquirers) and L1 series-book habits (Lamme, 1976). This is a **comprehensible-input conjecture with case-study evidence**, same epistemic status as compelling input in [01](01-sla-adult-self-directed.md). It is **not** an RCT that a mystery plot teaches case.

**FINDING (already in [23](23-situated-narrative-cultural-learning.md)).** Elley & Mangubhai (1983) book flood: **many** high-interest stories vs a structural programme — children, ESL, not adult German. StoryLearning® writes a syllabus into one story (structure-trapping). Green & Brock: rereading while transported still may not produce Noticing.

**INFERENCE.** “Mystery layers” as **the same owned text, returned to, with more forms now controllable** is a legitimate **Pedagogy** object: narrow reading + Focus on Form on a second pass. “Fog lifts on the map when your BKT dative probability exceeds 0.95” is an **Application** gimmick the models in §2 cannot support. Do not conflate them.

---

## 5. Collection / museum / build-a-world

**FINDING (Yee, 2007; Quantic Foundry, 2015).** **Advancement** (power, status, accumulation) and **Discovery** (what-if, lore, hidden things) are **different** components. Completion of collections sits closer to **Achievement** than to Discovery-as-experiment. They do not suppress each other in Yee’s correlations, but they are **not the same motive**.

**FINDING (Nintendo, Iwata Asks: *Animal Crossing: New Leaf*).** First-party theme of that title: the player as mayor who **arranges the town** (lamps, benches, bridges) — “make a whole town.” That is **build-a-world as the product fantasy**, not a museum paper. https://www.nintendo.com/en-gb/Iwata-Asks/Iwata-Asks-Animal-Crossing-New-Leaf/Animal-Crossing-New-Leaf/1-A-Fresh-Start-for-Animal-Crossing/1-A-Fresh-Start-for-Animal-Crossing-738583.html

The **museum + Blathers** loop (donate fish/bugs/fossils/art → exhibit) is a shipped mechanic across the series. No Nintendo paper opened here reports a retention A/B test of “museum vs no museum.” Secondary museum-studies write-ups (Play the Past; Polygon interviewing Field Museum staff) describe the loop as a **daily gather reason** and a **trophy hall**. Treat those as **mechanic description**, not as a learning trial.

**INFERENCE.** A museum is a **sink for collection** that converts random daily finds into a persistent, visible world. That can retain **Achievers** (complete the set) and some **Discovery** (oh, this fossil exists). Risk Yee already named: Completion without Discovery is **checklist homework**. Superficial collectibles (stamp the Bahnhof, +10 XP) are [22](22-streaks-habits-gamification.md)’s attendance metric with geography. A collection that is **owned sentences you can reread** is closer to Krashen narrow reading than to Korok seeds.

---

## 6. Progress as “you can now do X”

### 6.1 Self-efficacy (Bandura, 1977)

**FINDING (Bandura, 1977).** *Self-efficacy: Toward a unifying theory of behavioral change.* *Psychological Review, 84*(2), 191–215. https://doi.org/10.1037/0033-295X.84.2.191 — PDF used: https://educational-innovation.sydney.edu.au/news/pdfs/Bandura%201977.pdf

Perceived self-efficacy = belief that one can **execute the behaviour required** to produce outcomes. It determines whether coping is initiated, how much effort, how long in the face of obstacles. Four sources, **performance accomplishments** strongest, then vicarious experience, verbal persuasion, physiological states. His evidence is **microanalysis of treatments for snake phobia**, not L2.

**INFERENCE.** “You can now follow a work email” is a **mastery experience** if the Learner actually did it. “You unlocked Leipzig” is verbal persuasion / a badge. Bandura: persuasion is the **weaker** source.

### 6.2 CEFR can-do

**FINDING (already in [14](14-linguistic-learning-content-application-domains.md)).** Council of Europe (2001/2020): proficiency perspective, **can-do descriptors**, not a linear structural syllabus, **not** a German construct list. Uneven profiles are first-class. A B1 badge is not a Gap-map chip.

**INFERENCE.** Can-do is the honest **language** of “you can now do X.” It is **self- or exam-referenced**, not painted from Gym taps.

### 6.3 Feedback (Hattie & Timperley, 2007)

**FINDING.** *The Power of Feedback.* *Review of Educational Research, 77*(1), 81–112. https://doi.org/10.3102/003465430298487

Feedback = information from an agent about **aspects of performance or understanding** — a **consequence** of performance. Average effect in their synthesis of feedback meta-analyses ~**0.79** (large vs Hattie’s 0.40 schooling benchmark), but **type matters**: praise *d* ≈ 0.12; some feedback harms. Effective feedback answers: **Where am I going? How am I going? Where to next?** at task, process, self-regulation, and (weakest) self levels. Feedback is powerless in a vacuum; it needs a learning context. It is **not** a reinforcer the learner must accept (Kulhavy, 1977, cited therein).

**INFERENCE.** XP answers none of the three questions. A can-do plus a noticed form (“you explained *dem* after *helfen*”) is task/process feedback. “Great job, +15” is self-level praise, the weak kind.

### 6.4 Goals (Locke & Latham, 2002)

**FINDING.** *Building a practically useful theory of goal setting and task motivation.* *American Psychologist, 57*(9), 705–717. https://doi.org/10.1037/0003-066X.57.9.705 — PDF used: https://goal-lab.psych.umn.edu/orgPsych/readings/5.%20Motivation/Locke%20%26%20Latham%20(2002).pdf

Core: **specific, difficult** goals beat “do your best” (*d* ≈ 0.42–0.80 in their meta-analyses). Mechanisms: direction, effort, persistence, strategy arousal. Moderators: **commitment**, **summary feedback** toward the goal, task complexity. On complex tasks, a specific **performance** goal can hurt until strategies exist; then set **learning goals** (discover N strategies). Satisfaction paradox: high goals produce more **and** make people less easily satisfied.

Limits they own: mostly **work/organizational** tasks, conscious performance goals, not implicit L2 grammar.

**INFERENCE.** “Keep a 200-day streak” is a specific difficult goal about **opens** ([22](22-streaks-habits-gamification.md)). “Explain dative after *helfen* in tomorrow’s piece” is a specific difficult **learning** goal. XP is usually a **do-your-best points** goal with a number attached to the wrong object.

### 6.5 Dynamic assessment (Lantolf & Poehner)

**FINDING (Lantolf & Poehner, 2004).** *Dynamic assessment of L2 development: bringing the past into the future.* *Journal of Applied Linguistics, 1*(1), 49–72. https://doi.org/10.1558/japl.1.1.49.55872

**FINDING (Poehner & Lantolf, 2005).** *Dynamic assessment in the language classroom.* *Language Teaching Research, 9*(3), 233–265. https://doi.org/10.1191/1362168805lr166oa

DA is grounded in Vygotsky’s **ZPD**. The load-bearing contrast: standard tests treat mediation during the test as **contamination**; DA **insists** on mediation during assessment because the aim is to see what the learner can do **with** support and to **promote development in the assessment itself**. They review Feuerstein-style DA; they compare DA to formative assessment and argue FA can be reconceived along DA lines. Classroom paper: worked examples of **graduated prompts**, not a map engine.

The 2004 article was opened via a circulated PDF; the 2005 classroom paper via abstract + ERIC. Not a full book-length DA manual.

**INFERENCE.** DA is a **dialogic procedure** (how much hinting until the Learner notices *dem*). It is the opposite of a silent traffic-light. If a later Gym ever “assesses” in-world, the honest DA move is **mediated Noticing**, not a colour.

### 6.6 Contrast with XP

Already owned in [22](22-streaks-habits-gamification.md): Duolingo itself separates fun/return from outside-the-app use; later admitted XP and leaderboards get gamed. XP is an **Application** counter. Can-do + Gap chip + Bandura mastery experience are **Pedagogy / learner-state**. Do not let the counter impersonate the can-do.

---

## 7. Variable-length sessions

[23](23-situated-narrative-cultural-learning.md) §8 already owns the three-way split: (1) spacing vs massing, (2) time-on-task / quantity of input, (3) consumer “microlearning” as a product format. Do not duplicate. One primary [23] missed:

**FINDING (Cepeda, Vul, Rohrer, Wixted, & Pashler, 2008).** *Spacing effects in learning: A temporal ridgeline of optimal retention.* *Psychological Science, 19*(11), 1095–1102. https://doi.org/10.1111/j.1467-9280.2008.02209.x — PDF: https://www.yorku.ca/ncepeda/publications/CVRWP2008.pdf

>1,350 people studied facts, gap up to 3.5 months, final test up to 1 year. At any retention interval, final performance **rises then falls** as the gap grows (a ridgeline). **Optimal gap increases as test delay increases**, but as a **proportion** of delay it **shrinks** (~20–40% of a 1-week delay → ~5–10% of a 1-year delay). Optimal vs zero-day gap: large effects (they report ~64% recall increase, *d* = 1.1, in one comparison). Discrete **facts**, not B1 German texts.

**INFERENCE (additive to [23](23-situated-narrative-cultural-learning.md), not a replacement).** Variable sitting *length* (8 vs 25 minutes) is still not this finding. This finding is about **when you return to the same items**. A commute sitting plus a desk sitting can be legitimate **spacing** if they hit the same forms/texts days apart. A 4-minute Birdbrain snack every day can be spacing of **tiles** and still not be Nation meaning-focused quantity.

No additional microlearning *primary* that [23] missed was found that would licence grammar snacks as a B1–B2 Gym.

---

## 8. Adjacent products not fully covered in [24](24-exploration-adjacent-products.md)

[24](24-exploration-adjacent-products.md) owns language apps’ map/journey/character skins. This section is **non-language or hybrid** products the exploration sketch actually rhymes with. Mechanic vs metaphor.

### Assassin’s Creed Discovery Tour (Ubisoft first-party)

**Metaphor sold.** Living museum; “making history everyone’s playground”; combat-free Ancient Egypt / Greece / Viking Age / Baghdad.

**Mechanic.** Strip conflict and main narrative. **75 guided tours** (Origins Egypt): walk a lit path, stations with **scripted cameras + audio guide + museum artefact photos**. Tours aimed at **~5–20 minutes** because teachers asked for classroom-fit (Durand Q&A). Full map still explorable; fast-travel from menu / “passport” completion page. Historians wrote long copy, then it was **cut down** for accessibility. Behind-the-scenes stations admit **inaccuracy**. Not a language tutor. https://news.ubisoft.com/en-us/article/46PlC3yAeikjDI652TayLm/assassins-creed-origins-discovery-tour-qa-with-historian-maxime-durand — hub: https://www.ubisoft.com/en-gb/game/assassins-creed/discovery-tour

**INFERENCE.** Closest analogue to “real places + optional guided sitting.” The learning object is **history content at stations**, not German. Geography is a **reconstructed past**, not the Learner’s commute.

### GeoGuessr

**Metaphor sold.** Guess where you are in the world.

**Mechanic (designer-primary origin).** Anton Wallén, 2013: random **Google Street View** + drop a pin on a map; competitive rounds. Visual inference from signs, vegetation, driving side, UI chrome. **Not** a language curriculum. First-party about page 404’d when fetched; origin is consistently attributed to Wallén’s own Chrome Experiment / Reddit post (2013). Treat later “education mode” marketing as **secondary** unless a first-party lesson-plan page is opened.

**INFERENCE.** The skill is **geovisual inference**, not L2. A German-sign round could be a **Noticing toy** (why *dem* on that plaque). That is still not a city proficiency colour.

### Heaven’s Vault (inkle)

Covered as mechanic in §4. **Metaphor:** archaeologist of a lost language. **Mechanic:** unconfirmed translation + narrative uptake; translation **does not gate** travel (inkle Medium). Replay lengthens inscriptions. **Not** CEFR German.

### 80 Days (inkle)

**Metaphor sold.** Around the world in a steampunk 1872; you are Passepartout.

**Mechanic (Ingold / Jayanth, GDC and postmortems).** A **map of cities** where each route choice is already flavourful (“Delhi or Moscow?”). Resource/time pressure (Blackjack-like: another card, riskier). ~500,000 words of branching text; research-heavy; anti-Verne colonial default (Jayanth on Aouda). The map is **choice architecture for a branching narrative**, not a skill tree. https://www.gamedeveloper.com/business/postmortem-inkle-s-i-80-days-i- — https://www.gamedeveloper.com/design/road-to-the-igf-inkle-s-i-80-days-i-

**INFERENCE.** This is Hypothesis B/E’s honest cousin: **place names as interesting choices among texts**, not “Lesson 37 is now a café.” It does not estimate proficiency.

### Ingress / Pokémon GO (Niantic first-party)

**Metaphor sold.** AR overlay; Pokémon in *your* street; Ingress factions and “portals.”

**Mechanic.** GPS + **user-submitted points of interest** (Hanke: procedurally scraped POIs felt fake — “insipid” vs interesting real places). Ingress portals became PokéStops/Gyms. Design goals Hanke has stated: **exercise, see the world with new eyes, break the ice** (social clustering at gyms). GDC: *Pokémon GO & Designing Interactive Games for the Real World*; later AR/VPS work. The map is the **real city as spawn table**, not a syllabus. https://www.gamedeveloper.com/design/designing-a-planet-scale-real-world-ar-platform — GDC Vault listing: https://www.gdcvault.com/play/1024376/-Pokemon-GO-Designing-Interactive

**INFERENCE.** For a Learner who **already lives in Germany**, this mechanic is **already free** (walking). Re-skinning Immersion as PokéStops is slogan 1 ([exploration-concept.md](../product-experience/exploration-concept.md)) — geography as curriculum. Niantic’s own lesson: **interesting real places beat generated ones**. That supports **owned life-ish pieces**, not a fog engine.

### Duolingo Birdbrain (first-party only)

**Metaphor sold.** “A great teacher knows what you know.” Personalization.

**Mechanic (Bicknell, Brust, & Settles, *IEEE Spectrum*, 5 Feb 2023; blog 7 Oct 2020).** v1: **logistic / IRT-inspired** model — *p*(correct) from learner ability + exercise difficulty (sum of features: type, words, …); **Elo-like** SGD updates after each exercise. Scale: on the order of **10⁸–10⁹ exercises/day**. v2 (2022): **LSTM** compresses history into a **40-D vector**; near-real-time updates; streams partial lessons because ~**20% of lessons are abandoned** (non-random, often at hard items). Session generator picks items at “right difficulty.” A/B tests claimed **both** engagement and “learning” (advancing to harder material) rose. First-party is explicit they are **not** replacing a great teacher; they are approximating **item difficulty matching**. https://spectrum.ieee.org/duolingo — https://blog.duolingo.com/learning-how-to-help-you-learn-introducing-birdbrain/

Settles et al. (2018) SLAM shared task is the academic cousin: IRT/additive-factor baselines vs sequence models on Duolingo traces. https://research.duolingo.com/papers/settles.slam18.pdf

**INFERENCE.** Birdbrain is the existence proof of **industrial IRT+KT on tiles**. It is also the existence proof of what v1 **cannot** copy: population, item bank, binary graded exercises, 24/7 updates. Using it as a reason to paint German cities is a **category error** ([14](14-linguistic-learning-content-application-domains.md)).

---

## Collision with locked work (do not “fix” these by shipping a quest layer)

| Locked object | What this note must not override |
| --- | --- |
| Gym spec Progress | Gap-map chip, not XP/streak/path pebble ([22](22-streaks-habits-gamification.md); `CONTEXT.md`) |
| ADR-0002 | LLM draft ≠ published Gym text. Infinite places multiply the approval bottleneck ([19](19-other-languages.md); exploration-concept) |
| Four kinds of object | Language ≠ learner model ≠ Activity ≠ UI ([14](14-linguistic-learning-content-application-domains.md)) |
| Hypothesis A vs B/D/E | Destinations-as-syllabus is the tourism failure mode; place as *setting* is the cheap test ([exploration-concept.md](../product-experience/exploration-concept.md)) |
| “B1–B2 app” | Yardstick for current texts, not TAM (Hypothesis F) |

---

## What this does **not** say

- It does not recommend a map, a quest log, or difficulty colours.
- It does not say open worlds “don’t work.” It says the **owners** of open-world design do not claim they teach languages or retain after novelty without **new messages**.
- It does not say characters are forbidden. It says parasocial return ≠ L2 intake.
- It does not say mystery or reread is a gimmick. It says the **pedagogy** owner is narrow reading / second-pass Noticing, not fog.
- It does not say proficiency cannot be estimated. It says the **honest** estimates for this hobby are coverage, Gap chips, and can-dos — not café=green.

---

## Sources

### Game design

Bartle, R. (1996). Hearts, clubs, diamonds, spades: Players who suit MUDs. https://mud.co.uk/richard/hcds.htm

Hunicke, R., LeBlanc, M., & Zubek, R. (2004). MDA: A formal approach to game design and game research. AAAI Workshop. https://users.cs.northwestern.edu/~rob/publications/MDA.pdf

Jenkins, H. Game design as narrative architecture. https://web.mit.edu/~21fms/People/henry3/games&narrative.html

Yee, N. (2006/2007). Motivations of play in online games. *CyberPsychology & Behavior, 9*, 772–775. https://doi.org/10.1089/cpb.2006.9.772

Yee, N. / Quantic Foundry (2015). Gamer Motivation Profile. https://quanticfoundry.com/2015/06/18/how-we-created-the-gamer-motivation-profile/

Iyengar, S. S., & Lepper, M. R. (2000). When choice is demotivating. *JPSP, 79*(6), 995–1006. https://doi.org/10.1037/0022-3514.79.6.995

Scheibehenne, B., Greifeneder, R., & Todd, P. M. (2010). Can there ever be too many options? *JCR, 37*(3), 409–425. https://doi.org/10.1086/651235

Nintendo (Fujibayashi, Takizawa, Dohta). GDC 2017: Breaking conventions with *Breath of the Wild*. https://www.youtube.com/watch?v=QyMsF31NdNc

Miyazaki, H. Dark Souls Q&A. PlayStation Blog, 4 Feb 2011. https://blog.playstation.com/2011/02/04/dark-souls-qa-variety-is-the-spice-of-death/

Miyazaki, H. Dark Souls Afterwords. Game Informer, 12 Nov 2011. https://www.gameinformer.com/b/features/archive/2011/11/12/afterwords-dark-souls.aspx

### Learner modelling

Corbett, A. T., & Anderson, J. R. (1995). Knowledge tracing. *UMUAI, 4*, 253–278. https://doi.org/10.1007/BF01099821 — full PDF not opened this session; abstract + Pelánek restatement used.

Lord, F. M. (1980). *Applications of item response theory to practical testing problems.* Erlbaum. (via [14](14-linguistic-learning-content-application-domains.md))

Pelánek, R. (2017). Bayesian knowledge tracing, logistic models, and beyond. *UMUAI, 27*, 313–350. https://doi.org/10.1007/s11257-017-9193-2 — https://www.fi.muni.cz/~xpelanek/publications/umuai-overview.pdf

Piech, C., et al. (2015). Deep knowledge tracing. NeurIPS. https://arxiv.org/abs/1506.05908

Koedinger, K. R., Corbett, A. T., & Perfetti, C. (2012). The Knowledge-Learning-Instruction framework. *Cognitive Science, 36*(5), 757–798. (as used inside Pelánek)

### Characters, story, mystery pedagogy

Horton, D., & Wohl, R. R. (1956). Mass communication and para-social interaction. *Psychiatry, 19*, 215–229. https://doi.org/10.1080/00332747.1956.11023049

Green, M. C., & Brock, T. C. (2000). The role of transportation in the persuasiveness of public narratives. *JPSP, 79*(5), 701–721. https://doi.org/10.1037/0022-3514.79.5.701 (via [23](23-situated-narrative-cultural-learning.md))

Fisch, S. M., & Truglio, R. T. (Eds.). (2001). *“G” is for growing.* Erlbaum. Preview only this session.

Krashen, S. (2004). The case for narrow reading. *Language Magazine, 3*(5), 17–19. https://www.sdkrashen.com/content/articles/narrow.pdf

Barlow, S. GDC 2016. Making *Her Story*. https://www.gdcvault.com/play/1023430/Making-Her-Story-Telling-a

inkle. Why does translation unlock sites in *Heaven’s Vault*? https://medium.com/@inklestudios/why-does-translation-unlock-sites-in-heavens-vault-e05c4ccadf62

Ingold, J., & Humfrey, J. Road to the IGF: *Heaven’s Vault*. https://www.gamedeveloper.com/business/road-to-the-igf-inkle-s-i-heaven-s-vault-i-

### Progress, goals, DA

Bandura, A. (1977). Self-efficacy. *Psychological Review, 84*(2), 191–215. https://doi.org/10.1037/0033-295X.84.2.191

Council of Europe. (2020). *CEFR Companion Volume.* https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4 (via [14](14-linguistic-learning-content-application-domains.md))

Hattie, J., & Timperley, H. (2007). The power of feedback. *RER, 77*(1), 81–112. https://doi.org/10.3102/003465430298487

Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting. *American Psychologist, 57*(9), 705–717. https://doi.org/10.1037/0003-066X.57.9.705

Lantolf, J. P., & Poehner, M. E. (2004). Dynamic assessment of L2 development. *JALP, 1*(1), 49–72. https://doi.org/10.1558/japl.1.1.49.55872

Poehner, M. E., & Lantolf, J. P. (2005). Dynamic assessment in the language classroom. *Language Teaching Research, 9*(3), 233–265. https://doi.org/10.1191/1362168805lr166oa

### Spacing add-on

Cepeda, N. J., Vul, E., Rohrer, D., Wixted, J. T., & Pashler, H. (2008). Spacing effects in learning: A temporal ridgeline of optimal retention. *Psychological Science, 19*, 1095–1102. https://doi.org/10.1111/j.1467-9280.2008.02209.x

### Adjacent products (first-party)

Durand, M. / Ubisoft. *Assassin’s Creed Origins* Discovery Tour Q&A. https://news.ubisoft.com/en-us/article/46PlC3yAeikjDI652TayLm/assassins-creed-origins-discovery-tour-qa-with-historian-maxime-durand

Ingold, J., & Humfrey, J. Postmortem: inkle’s *80 Days*. https://www.gamedeveloper.com/business/postmortem-inkle-s-i-80-days-i-

Bicknell, K., Brust, C., & Settles, B. (2023). How Duolingo’s AI learns what you need to learn. *IEEE Spectrum*. https://spectrum.ieee.org/duolingo

Duolingo (2020). Introducing Birdbrain. https://blog.duolingo.com/learning-how-to-help-you-learn-introducing-birdbrain/

Niantic. Designing a planet-scale real-world AR platform. https://www.gamedeveloper.com/design/designing-a-planet-scale-real-world-ar-platform

Nintendo. Iwata Asks: *Animal Crossing: New Leaf*. https://www.nintendo.com/en-gb/Iwata-Asks/Iwata-Asks-Animal-Crossing-New-Leaf/Animal-Crossing-New-Leaf/1-A-Fresh-Start-for-Animal-Crossing/1-A-Fresh-Start-for-Animal-Crossing-738583.html

### Already in this repo (do not contradict)

[14](14-linguistic-learning-content-application-domains.md) — four objects; IRT/BKT; CEFR can-do.

[22](22-streaks-habits-gamification.md) — streaks/XP ≠ competence.

[23](23-situated-narrative-cultural-learning.md) — situated learning, stories, MDA/Bartle/Yee overview, Cepeda 2006 / Serrano, adaptive claims.

[24](24-exploration-adjacent-products.md) — language-app metaphor vs mechanic.

[exploration-concept.md](../product-experience/exploration-concept.md) — Hypotheses A/B/D/E/F; map is decoration unless it changes Noticing.

### Not opened / stopped

Corbett & Anderson (1995) full PDF — timeout; Springer abstract + Pelánek used.

Green & Brock (2000) — not re-fetched; claims follow [23](23-situated-narrative-cultural-learning.md).

Fisch (2004) monograph — preview only.

GeoGuessr official About — 404 this session; Wallén-origin mechanic described from consistent designer attribution, not from a live first-party body.

“Open-world fatigue” — no named primary construct found.

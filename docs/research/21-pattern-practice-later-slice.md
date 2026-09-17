# What a later “one Pattern” sitting should look like

Written for a senior engineer who is not a linguist. Every claim traces to the paper, book, or institute document that owns it. Recommendations are labelled.

**Product frame.** Davio v1 is a B1–B2 German **Gym**: Focus on Form in owned texts (Noticing + Gap map). Isolated drills are out of v1 ([01](01-sla-adult-self-directed.md); [03](03-mvp-activity-feasibility.md); `CONTEXT.md`). This note is **not** a spec for that loop. It answers a later-slice question: if the Learner later opens a sitting that practises **one** grammatical **Pattern** (Focus on Forms / “drill this concept”), what does research say that sitting should be so that (1) the brain actually retains something that shows up in use, (2) an adult will open it on a phone, (3) the UI works on mobile, and (4) a “detail grammar page” is in the loop, optional, first, or absent.

Worked example: catalog id `partizipialattribut` (appendix, band C1) — *die vom Regen durchnässte Jacke* ([20](20-gap-map-pattern-catalog.md)). That id is **Pedagogy**, not UD, not a lemma, not a CEFR tag.

Throwaway UI to react to: [prototype/pattern-practice.html](../../prototype/pattern-practice.html) (A textbook · B structured input · C unpack). Ticket: [.scratch/language-intelligence/issues/06-pattern-practice-sitting.md](../../.scratch/language-intelligence/issues/06-pattern-practice-sitting.md).

SLA background already in [01](01-sla-adult-self-directed.md) (Ellis 2006; Lightbown 2000; Long Focus on Form vs Forms; Cepeda; Roediger; Nation four strands; Krashen Monitor) is **extended** here, not restated.

## How to read this

Second language acquisition (SLA) still treats pedagogical advice as provisional (Ellis, 2005, pp. 209–211). Where researchers disagree, the disagreement is the finding.

**Load.** Start at **The one-paragraph answer**. Named later-slice questions: §§7–9. Open other sections only for a claim that lives there. Sources at the end are citations, not a first read.

German claims are split:

| Layer | Question |
| --- | --- |
| **Language** | What is true of German with no Learner in the picture? |
| **Analysis** | What structure does *this string* have? |
| **Pedagogy** | What is worth this Learner noticing, in this sitting? |

`CONTEXT.md` terms (Learner, Pattern, Gym, Noticing, Gap map, Study band) are used on purpose. “Input” in the SLA literature is broader than Davio’s **Immersion**.

---

## The one-paragraph answer

A later one-Pattern sitting can help **if** it trains the processing problem the Pattern actually creates — for `partizipialattribut`, finding the delayed head noun and recovering who-did-what — and **not** if it is a 10/10 cloze of adjective endings. Mechanical pattern practice does not build the implicit system used in real messages (Wong & VanPatten, 2003; Lightbown, 2000; Ellis, 2006). The research object that does move interpretation, and often production as a side effect, is **structured input / Processing Instruction**: meaning-bearing items that cannot be solved unless the Learner uses the form (VanPatten & Cadierno, 1993; VanPatten, 2002; Wong & VanPatten, 2003). Consciousness-raising (induce the bracket from data) is the other legitimate shape; isolated production drills are the rejected one (Ellis, 2006; Fotos & Ellis, 1991). Explicit rule pages are **not** the learning event: explanation-only groups do not gain; structured input does (VanPatten & Oikkenon, 1996). A short processing tip can speed German case-like problems (Henry, Culman, & VanPatten, 2009); a Duden-length page belongs as optional lookup under Monitor conditions (time, form-focus, knowing the rule — Krashen, 1982), not as screen one. This slice is Nation’s language-focused learning strand (≤ ~25% of contact time) and must dump the Learner back into Gym texts and Immersion, or the 10/10 never shows up in use (Nation, 2007). **Recommendation:** do not make this the v1 Gym.

---

## 1. What `partizipialattribut` actually is

### Language (IDS grammis)

A **Partizipialattribut** is a participle used as a verbal adjective in attributive position: it declines like an adjective and describes a noun. Both Partizip I (*das lachende Kind*) and Partizip II (*der verlorene Schlüssel*) do this. The attribute can be **extended** from the valency frame of the underlying verb: *der hohes Ansehen genießende Politiker*; *der mit Lametta festlich geschmückte Baum* (Leibniz-Institut für Deutsche Sprache, grammis, “Partizipien,” https://grammis.ids-mannheim.de/sgt/2240; “Attribut,” https://grammis.ids-mannheim.de/sgt/2267).

Two Language facts that matter for a sitting:

1. **Not every Partizip II may be attributive.** Grammis: the Partizip II of an agentive “waiting” verb cannot modify the waiter — *\*der gewartete Mann* vs *die verblühte Blume* (grammis, “Partizipien”). A sitting that generates random “turn this verb into an attribute” items will invent ungrammatical German. **Judgement: grammaticality. Owner: IDS.**
2. **Heavy expansion is a written-register fact.** Grammis on style: strongly expanded noun groups contribute to *Nominalstil*, typical of Fach-, Wissenschafts-, juristische and Behördensprache (grammis, “Attribut,” Variation/Stil). Spoken German usually unpacks the same content as a relative clause. The Immersion job for this Pattern is overwhelmingly **reading**, not producing *die vom Regen durchnässte Jacke* in the supermarket.

Grammis also distinguishes attributive participles from **infinite participle clauses** used adverbially (*Den Gästen zuwinkend, …*; *Durchnässt vom Regen, …*) — that is catalog `partizipialsatz`, a different Pattern (grammis, “Partizipien,” examples 10–11). Do not mix the two in one sitting.

IDS terminology notes a classification split: some descriptions (including the Duden-Grammatik, cited by grammis) treat Partizip I/II as infinite **verb** forms used adjectivally; grammis’s own terminology entry treats Partizip I as an adjective formed from a verb, still carrying verbal valency (*eine in Berlin wohnende Frau*) (grammis, “Partizip I,” https://grammis.ids-mannheim.de/terminologie/180). **The Duden volume itself was not opened here;** the split is owned by the IDS page.

### Analysis (UD)

UD does **not** have a label `partizipialattribut`. A declined prenominal participle is typically an adjectival modifier of the noun (`amod`); its own complements attach to the participle, not to the head noun (UD `amod`; German UD morphology/syntax — see [17](17-universal-dependencies-german.md)). That tree is useful for search and for checking agreement. It is not a teaching object. Mapping UD → Gap-map id is Pedagogy, not something a parser emits ([20](20-gap-map-pattern-catalog.md); hub [language-intelligence-domain.md](language-intelligence-domain.md)).

Exact POS (`ADJ` vs `VERB`) for a given token is treebank-dependent. **UNVERIFIED** without opening a specific German treebank row for *durchnässte*.

### Pedagogy (catalog + CEFR + Goethe)

Catalog: `partizipialattribut`, band C1, tiny example *die vom Regen durchnässte Jacke*. Band is an authoring hint, not a skill-tree unlock ([20](20-gap-map-pattern-catalog.md)). Gym Activities stay in the Study band (B1–B2). This Pattern is appendix: later attach.

CEFR does not list “extended participle attributes.” What it does own:

- **C1 reading:** understand in detail lengthy, complex texts, with rereading; newspaper/magazine and specialised publications, with rereading and **access to reference tools** (Council of Europe, 2020, Overall reading comprehension, C1).
- **C1 range:** “a broad range of complex grammatical structures” with considerable flexibility (Council of Europe, 2020, General linguistic range, C1).
- **B2 range:** “some complex sentence forms,” sometimes used rigidly (same scale).
- **C1 accuracy:** errors rare and hard to spot — a *control* descriptor, not a construction list (Grammatical accuracy, C1).

Goethe-Institut B2.1 online materials already teach **Partizip I/II as adjective**, including short expansions (*der von den Verlagen erwartete Erfolg*) and the relative-clause paraphrase (Goethe-Institut, *Deutsch Online B2.1*, Grammatik “Partizip I und II als Adjektiv,” https://lernen.goethe.de/deutschonline/B2/PDF/DT-online_B2.1_K01-06_GR-RM_Rueckschau_de.pdf). So “first contact with a participle in front of a noun” is not uniquely C1. What the catalog’s C1 hint reasonably tracks is the **dense prenominal block** that makes journalistic/academic German grind to a halt — the processing problem, not the first adjective-like participle.

Goethe-Zertifikat C1 uses *Profile Deutsch* as a German-specific inventory when writing items (Goethe-Institut, *Prüfungsziele, Testbeschreibung Goethe-Zertifikat C1*, ch. 2, https://www.goethe.de/pro/relaunch/prf/kk/Handbuch_Pruefungsziele_Testbeschreibung_C1.pdf). **UNVERIFIED:** whether *Profile Deutsch* itself lists extended Partizipialattribute at C1 — the book was not opened.

**Pedagogical usefulness (judgement):** for this Learner, the first job is **unpacking** (article → expansion → declined participle → head noun → relative-clause equivalent), not writing Nominalstil. Production of short attributes can be a later micro-step. Production of ministry-length blocks is the wrong success bar.

---

## 2. Why “drills until automatic” will not show up in use

[01](01-sla-adult-self-directed.md) already owns Ellis (2006, pp. 101–102): explicit explanation plus drill-like practice is unlikely to yield the implicit knowledge needed for fluent communication; Lightbown (2000) generalisation 4: isolated pattern drill is the “practice does not make perfect” object; Long (1991/1998): Focus on Forms is a synthetic syllabus of items to reassemble, typically dry and short on communicative use.

This section adds the owning **drill** paper and the alternative that replaced them in the experimental literature.

### Wong & VanPatten (2003): mechanical drills are out

Wong and VanPatten (2003), *Foreign Language Annals* 36(3), 403–423, https://doi.org/10.1111/j.1944-9720.2003.tb02123.x (open scan: https://web.pdx.edu/~fischerw/courses/advanced/methods_docs/pdf_doc/wbf_collection/0351_0400/0385_FLA_Wong_DrillsAreOUT.pdf).

They use Paulston’s (1972/1976) three-way split:

- **Mechanical drill:** one correct response; can be completed **without understanding** (nonsense words still “work”).
- **Meaningful drill:** one correct response, but the stimulus must be understood.
- **Communicative drill:** the Learner supplies new information; well-formedness is the only “right answer.”

Their target of attack is **mechanical** drills (and “contextualized” drills that still pass the nonsense-word test). Conclusions they own:

1. Creating an implicit linguistic system is **input-dependent**. Drills ask for production of a form in order to learn it — “cart before the horse.”
2. Input for acquisition must be meaning-based. Mechanical drills are not.
3. In PI vs traditional-instruction experiments, groups that never produced the form during treatment matched or beat drill groups on **production** tests, and beat them on **interpretation**. Traditional instruction can teach a test-taking strategy (over-apply the form) rather than the form–meaning pairing (VanPatten & Wong, 2003, on French *faire* causative, reviewed in the 2003 FLA paper).
4. Lightbown (1983): intensive drilling of English *’s* led to overuse (*He’s have three balloons*), then a year later learners were back at baseline — “setting up barriers which have to be broken down.”
5. Skill-theory “practice until automatic” does not license drills: chess players get better by **playing chess**, not by drilling moves out of a game. Fluency/accuracy in communication comes from using the system in communicative contexts, which **relies on** the system; it does not build it (Wong & VanPatten, 2003, “Development of Automaticity”).

They are **not** Krashen: they advocate a form of explicit, interventionist Focus on Form (Processing Instruction). They are against mechanical pattern practice as the means.

**Translation for Davio.** A sitting that blanks *durchnässte* and offers four adjective endings is Paulston-mechanical if the Learner can score 10/10 without recovering “the jacket that the rain soaked.” That score will not predict unpacking the next *FAZ* noun phrase.

### Processing Instruction / structured input

Processing Instruction (PI) was introduced in VanPatten & Cadierno (1993), *Studies in Second Language Acquisition* 15, 225–243, https://doi.org/10.1017/S0272263100011979. VanPatten (2002) is the later review: *Language Learning* 52, 755–803, https://doi.org/10.1111/1467-9922.00203.

Three components (Wong & VanPatten, 2003):

1. Brief information about the form.
2. Information about a **processing strategy** that makes learners miss the form.
3. **Structured input** activities: the Learner must use the form to get meaning. They do **not** produce the form during these activities.

Two activity types:

- **Referential:** right/wrong; form is necessary to decide (picture match, who-did-what).
- **Affective:** opinion/belief about a real-world sentence that still contains the form.

Input-processing principles that map onto this Pattern (Wong & VanPatten, 2003, Appendix A, from VanPatten, 2003b):

- **Primacy of content words:** learners grab nouns and verbs before grammar.
- **Sentence Location Principle (P1f):** initial > final > **medial**. The declined participle and its expansion sit in the **middle** of the noun phrase, between article and head — a low-salience zone.
- **First Noun Principle:** first noun tends to be read as subject/agent. Inside *die vom Regen durchnässte Jacke*, *Regen* is an early noun and is **not** the head.

**Recommendation:** the later sitting should be built as structured input against those strategies: “tap the head noun,” “who/what is being described,” “which relative clause matches,” mixing Partizip I vs II so the Learner cannot click a rote pattern. That is Focus on Forms in Long’s **intensive** sense (one structure, many times) without being a mechanical drill.

DeKeyser & Sokalski (1996) and later DeKeyser (2010) dispute that production practice is useless; they do **not** defend nonsense-word drills. See §3.

---

## 3. Weak vs strong interface — as it applies to a *later* slice

[01](01-sla-adult-self-directed.md) §2 owns the three positions (Krashen non-interface; DeKeyser strong; Ellis weak). Davio v1 Grammar is the weak-interface bet. A later practice slice does not force a conversion to strong-interface PPP. It changes the **dose** (intensive on one Pattern), not the **theory of transfer**.

### What DeKeyser actually wants

DeKeyser (2007, p. 1) defines practice as “specific activities in the second language, engaged in systematically, deliberately, with the goal of developing knowledge of and skills in the second language” — and immediately separates that from “mind-numbing drills” (*Practice in a Second Language*, Cambridge). DeKeyser (2010), *International Journal of English Studies* 10(1), https://doi.org/10.6018/ijes/2010/1/114021:

- Rejects audiolingual “drill and kill.”
- Holds the strong-interface claim in this form: declarative knowledge can play a **causal role** in developing procedural skill; it is a misunderstanding to require one representation to “turn into” another.
- Useful practice keeps **form–meaning links** and sequences declarative knowledge → proceduralization → partial automatization.
- Communicative drills (Paulston) *do* practise linking form to meaning, “pace Wong and VanPatten (2003).”
- Even then, move quickly into tasks where the form is useful or essential (Loschky & Bley-Vroman, 1993, task-usefulness / task-essentialness — cited by DeKeyser, 2010).
- Quotes Lightbown (2000, p. 443): practice is essential when defined as “opportunities for meaningful language use (both receptive and productive) and for thoughtful, effortful practice of difficult linguistic features.”
- Agrees with Nation that language-focused learning should not dominate contact time.

DeKeyser (1997), *SSLA* 19(2), 195–221, https://doi.org/10.1017/S0272263197002040: morphosyntactic skill after explicit rule learning was **skill-specific** — comprehension practice did not automatically yield production skill, and vice versa, following a power-function practice curve like other cognitive skills.

### Honest product implication

| If you believe… | A later `partizipialattribut` sitting should… | It still should not… |
| --- | --- | --- |
| **Weak interface** (Ellis) | Raise explicit knowledge and force noticing of the bracket, then return the form in Gym texts | Treat 10/10 as “acquired” |
| **Strong interface** (DeKeyser) | Proceduralize the **skill Immersion needs** (unpacking in reading), with meaning-bearing items, then maybe a little production | Mechanical ending drills; assume comprehension practice = spoken fluency |
| **Non-interface** (Krashen) | Skip this slice; more compelling input | — |

**Recommendation:** keep the weak-interface story for transfer into use (Gym + Immersion). Borrow PI’s **method** (structured input) even if you never adopt DeKeyser’s theory. Both camps reject the cloze-until-automatic product. Skill-specificity is a warning: a sitting that only *writes* attributes will not automatically create the reading reflex, and vice versa. For this Pattern, **comprehension is the skill that pays**.

---

## 4. Consciousness-raising vs production drills

Ellis (2006, p. 84) already in [01](01-sla-adult-self-directed.md): grammar teaching includes presentation without practice, practice without presentation, **learners discovering rules**, input flood, and feedback during a communicative task. Consciousness-raising (C-R) tasks (Fotos & Ellis, 1991, *TESOL Quarterly* 25(4), 605–628, https://doi.org/10.2307/3587079) put data in front of the Learner and ask them to induce the pattern. Ellis (2002), in Richards & Renandya (Eds.), *Methodology in Language Teaching* (Cambridge), pp. 167–174, contrasts that with repetitive production practice; C-R aims at **explicit** knowledge (concept-forming), which may later facilitate acquisition, not at automatizing a drill. (Chapter confirmed via Cambridge anthology listing; page-level five-feature list commonly cited from p. 168 was not re-checked in a publisher PDF — treat the five-feature enumeration as **UNVERIFIED** at page level, the contrast with practice as owned by the chapter title and Ellis 2006.)

**Recommendation for this Pattern:** a C-R block is a good *first* minute: three owned NPs, “tap the word that names the thing,” “tap the participle,” “which relative clause is the same message.” Stating the rule out loud is optional (Ellis: not obligatory). A ten-item transformation drill (*Mache einen Relativsatz zu einem Partizipialattribut*) is the DaF worksheet shape; it can be a **check** after structured input, not the sitting.

---

## 5. Spacing and retrieval — grammar items, not word cards

[01](01-sla-adult-self-directed.md) §4 owns Cepeda et al. (2006) and Roediger & Karpicke (2006): spacing and testing beat massed restudy for discrete verbal recall; most of that evidence is paired associates, not “the case system.” Expanding vs equal intervals is a small extra (Nakata, 2015, vocab).

**Extension for grammar:**

- Bird (2010), *Applied Psycholinguistics* 31(4), 635–650, https://doi.org/10.1017/S0142716410000172: distributed vs massed practice of English tense/aspect. Short-term tests looked similar; **distributed practice won on long-term tests**. Syntax can show a spacing effect *on the kind of test used* (here, instructed tense/aspect). It is not evidence that an SRS of cloze items *is* implicit grammar.
- VanPatten & Fernández (2003), in VanPatten (Ed.), *Processing Instruction* (Erlbaum): PI gains on Spanish object pronouns were still above pretest **eight months** later, with some drop-off (reviewed in Wong & VanPatten, 2003).
- Lightbown (2000) generalisation 6: feedback/help works when **sustained over time**, not as a one-shot correction.

**Recommendation:** space **return to the Pattern in a new owned text** (Gym Noticing, Gap map chip) across days. Do not Leitner-box adjective endings. A second PI sitting a few days later is Bird-shaped; ten massed clozes tonight is Cepeda’s cramming condition.

---

## 6. Nation’s four strands: this slice is at most a quarter

Nation (2007), *Innovation in Language Learning and Teaching* 1(1), 2–13, https://doi.org/10.2167/illt039.0; PDF: https://www.wgtn.ac.nz/lals/resources/paul-nations-resources/paul-nations-publications/publications/documents/2007-Four-strands.pdf.

- Four strands, roughly equal time: meaning-focused input, meaning-focused output, **language-focused learning**, fluency development.
- “In total, the language-focused learning strand should not make up more than one-quarter of the time spent on the whole course” (Nation, 2007, p. 6 of the uncorrected proof).
- Conditions for that strand: deliberate attention; **deep, thoughtful** processing; **spaced, repeated** attention; features simple enough for the Learner’s stage; the same features must also occur in the other three strands.
- Language-focused learning can add to implicit knowledge, **raise consciousness for later learning**, focus on systematic aspects, or train strategies — it is not only drills. Typical listed activities include substitution tables **and** intensive reading and feedback.
- Meaning-focused input requires interest and 95–98% known words (Hu & Nation, 2000, cited there).

DeKeyser (2010) cites the same 25% cap and notes that for a Learner with lots of Immersion, classroom language-focused work can be a **larger** share of *class* time because total contact is already meaning-heavy. Davio’s Learner lives in Germany: Immersion is already free. A Pattern sitting that ate the whole app would violate Nation even more than it would for a classroom-only student.

**Recommendation:** one short PI/C-R sitting, then back to the Gym (meaning-focused input + Noticing). Optional easy re-read of a text that contains the Pattern is fluency-on-known-language ([03](03-mvp-activity-feasibility.md)), not a second drill pack. Do not invent a skill tree or XP to keep the Learner inside language-focused learning.

---

## 7. Should a “detail grammar page” be in the loop?

### What the experiments say

VanPatten & Oikkenon (1996), *SSLA* 18, 495–510, https://doi.org/10.1017/S0272263100015394: three groups on Spanish object pronouns — full PI (explanation + structured input), **explanation only**, **structured input only**. Gains came from structured input. Explanation-only did not produce the beneficial effects.

Replications in the same direction: Benati, Farley, Sanz & Morgan-Short, Wong (reviewed in Wong & VanPatten, 2003). Sanz & Morgan-Short (2004 computer study, reviewed there): crossing ±explanation and ±explicit feedback, **all groups who received structured input improved**; neither explanation nor explicit feedback was crucial.

**German-specific caveat.** Henry, Culman, & VanPatten (2009), *SSLA* 31, 559–575, https://doi.org/10.1017/S0272263109990027 (and Culman, Henry, & VanPatten, 2009, *Die Unterrichtspraxis* 42(1), 19–31, https://doi.org/10.1111/j.1756-1221.2009.00032.x): for German accusative articles and OVS word order, a group given explicit information **before** structured input reached criterion **sooner**, and more learners reached criterion, than structured input without that information. Offline PI studies had often found no EI effect; this online (item-by-item) German study found a **speed** effect. They attribute the difference to the structure, not to a general “always lecture first” rule.

### Monitor conditions (lookup vs fluency)

Krashen (1982, ch. II, Monitor Hypothesis), http://www.sdkrashen.com/content/books/principles_and_practice.pdf: conscious rules edit output only when **three** conditions hold — time, focus on form, and knowledge of the rule. Even then the acquired system initiates fluent production; learning is an editor. “Anything less than a real grammar test will not bring out the conscious grammar in any force.”

Ellis weak interface: explicit knowledge as a **primer** for later noticing (Ellis, 2006, p. 97) — not as the compiler of fluency.

CEFR C1 reading explicitly allows “access to reference tools” while rereading difficult sections (Council of Europe, 2020). That is lookup during a hard text, not a lesson that starts with the reference.

### Verdict (recommendation)

| Placement | Verdict |
| --- | --- |
| **Required first screen** (read the rule, then practise) | **No.** Explanation-only does not cause the PI effect; it burns phone time and invites “I read it, therefore I know it” (Roediger & Karpicke, 2006: restudy inflates confidence). |
| **Short processing tip before or between items** | **Optional, useful.** One screen: “The thing being described is the **last** noun in the bracket; *Regen* is not the jacket.” That is VanPatten component (2), and it is the kind of EI that sped German case processing (Henry et al., 2009). |
| **Detail grammar page (full rule, exceptions, *\*gewartet* vs *verblüht*)** | **Optional drawer / after items / from the Gap map.** Monitor-compatible: the Learner has time and is focused on form. Do not gate the sitting on opening it. Do not put it in the required loop. |
| **Absent from the product** | **Too strong.** C1 reading descriptors assume reference tools; weak-interface priming still wants *some* explicit handle; the Learner asked for a later grammar reference in `CONTEXT.md`. Ship it as a library page, not as the sitting. |

**The learning event is structured input + C-R retrieval, not the page.**

---

## 8. Interesting enough to open on a phone — and UI that fits

Interest in the research is about **messages**, not skins.

- Nation (2007): meaning-focused input **does not exist** unless learners are interested and want to understand.
- Ellis (2005) Principle 2 (cited in Nation, 2007, and in [01](01-sla-adult-self-directed.md)): creating pragmatic meaning is intrinsically motivating.
- Krashen (2011) “compelling input” is a conjecture with case-study evidence; it is a design pressure, not a licence to drop form ([01](01-sla-adult-self-directed.md)).
- Long (1998): Focus on Forms lessons tend to be dry.
- Wong & VanPatten (2003): affective structured input asks for opinions about real-world content, not “complete the paradigm.”
- [02](02-app-outcomes-gap.md): varying the *game skin* is the streak-app failure; varying interesting Study-band texts is what successful self-learners do.

**Recommendation:** each item is a **real NP from an adult topic** (housing, work, local bureaucracy, a crime-story fragment — owned text, not scraped news). The puzzle is “what is this thing and what happened to it?” — the same interestingness hypothesis as Gym Noticing, narrowed to one Pattern. Score-as-motivation and XP are out (`CONTEXT.md` Progress).

### Mobile-feasible loop (recommendation)

Phone-first, thumb-first, almost no typing:

1. **One NP on screen**, article and head visually far apart (the actual German problem).
2. **Referential, tap:** “Which word is the thing being talked about?” (head noun). Immediate right/wrong.
3. **Referential, tap:** “Which relative clause is the same meaning?” Two or three paraphrases (Partizip I vs II; wrong head).
4. **Affective, tap:** “Would you hang this jacket to dry / buy this flat / trust this report?” — still reading the form, now with an opinion.
5. Mix **Partizip I / II** and at least one **non-example** (ordinary adjective, or `partizipialsatz`) so a rote “always the last -e word” strategy fails — the PI mixing move from the *faire* materials.
6. Optional: one **C-R** “say the pattern in one line” (typed or tapped stems: *article … participle … noun*).
7. **Do not** require producing a long attribute. If production appears, keep it to choosing among two short NPs, not generating ministry German.

That is PI + C-R on a phone. It is not a cloze worksheet and not the Gym.

---

## 9. Concrete sitting shape for `partizipialattribut`

**When:** later slice, after the Gym exists; Learner (or Gap map) has marked this Pattern as a gap. Not a v1 daily recommendation.

**Length:** ~5–8 minutes. Language-focused learning, then stop.

**Materials:** 6–10 owned noun phrases, adult topics, Study-band vocabulary with **one** C1-ish bracket. Example family (owned, not sourced from a newspaper):

- *die vom Regen durchnässte Jacke* → the jacket that got soaked by the rain  
- *der vor der Tür wartende Nachbar* → the neighbour who is waiting at the door  
- *die gestern beschlossene Regelung* → the regulation that was decided yesterday  

**Sequence (recommendation):**

| Step | On the phone | Research job |
| --- | --- | --- |
| 0 | Optional 1-screen tip: “Hold the article; the **noun is last**; the middle is a compressed clause.” Skip-able. | EI as processing hint (Henry et al., 2009), not a lecture |
| 1 | 3 C-R items: tap head, tap participle | Ellis C-R / Fotos & Ellis |
| 2 | 4–6 referential SI items: meaning paraphrase; I vs II | VanPatten structured input |
| 3 | 2 affective SI items: opinion | Keeps meaning in focus; adult interest |
| 4 | Gap map: still a gap / I hold this in reading | Holec monitoring; Lightbown sustained |
| 5 | Drawer: “full page” (I vs II, expansion from valency, *\*gewartet*, vs `partizipialsatz`) | Optional Monitor lookup |
| Next days | Same Pattern inside a Gym text, not another cloze pack | Nation condition (5); spacing; weak-interface priming |

**Success signal:** the Learner unpacks a *new* NP without the tip — not 10/10 on endings.

---

## Recommendations (labelled)

1. **Do not make this the v1 Gym loop.** v1 remains Read → Notice → Gap map on owned Study-band pieces ([03](03-mvp-activity-feasibility.md)). This is a later language-focused sitting.
2. **Build the sitting as Processing Instruction + a short C-R opener**, not as production drills. Target the processing problem: delayed head, medial participle, first-noun trap.
3. **Comprehension first** for this Pattern. Spoken/written Nominalstil is a different skill (DeKeyser, 1997, skill-specificity).
4. **Grammar page: optional, not first, not required.** A skippable processing tip is justified; a detail page is a drawer.
5. **Cap the slice.** It is ≤ ~25% of language contact in Nation’s framework; Immersion + Gym are the other three-quarters.
6. **Space returns in new texts**, not in massed clozes (Cepeda; Bird, 2010; Lightbown, 2000).
7. **Interest = adult NPs worth unpacking**, not a new mini-game. No XP, no skill tree.
8. **Author owned examples; do not generate illegal Partizip II attributes** (grammis valency restriction). Keep `partizipialsatz` out of the item mix except as a foil.
9. **Do not treat a later slice as proof of the strong interface.** Intensive practice of one Pattern is compatible with Ellis’s intensive FFI; it does not license “drills until automatic = fluency.”

---

## What would falsify this sitting

- The Learner scores high on in-app paraphrases but still cannot unpack the Pattern in a Gym text a week later → the sitting is still a test-taking strategy (VanPatten & Wong, 2003, TI over-application).
- The Learner never opens it twice → failed the interestingness bar; do not “fix” that with streaks.
- Items are solvable without reading the middle of the NP → it has collapsed into a mechanical drill (Paulston nonsense-word test).

---

## Sources

Primary and institute sources. Page numbers refer to the owning edition cited.

Bird, S. (2010). Effects of distributed practice on the acquisition of second language English syntax. *Applied Psycholinguistics, 31*(4), 635–650. https://doi.org/10.1017/S0142716410000172

Council of Europe. (2020). *Common European Framework of Reference for Languages: Companion volume*. Council of Europe Publishing. https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4 — C1 reading (rereading + reference tools); General linguistic range; Grammatical accuracy.

Culman, H., Henry, N., & VanPatten, B. (2009). The role of explicit information in instructed SLA: An on-line study with processing instruction and German accusative case inflections. *Die Unterrichtspraxis / Teaching German, 42*(1), 19–31. https://doi.org/10.1111/j.1756-1221.2009.00032.x

DeKeyser, R. M. (1997). Beyond explicit rule learning: Automatizing second language morphosyntax. *Studies in Second Language Acquisition, 19*(2), 195–221. https://doi.org/10.1017/S0272263197002040 — skill-specificity of comprehension vs production practice.

DeKeyser, R. M. (2007). Introduction: Situating the concept of practice. In R. M. DeKeyser (Ed.), *Practice in a second language* (pp. 1–18). Cambridge University Press. Preview: https://api.pageplace.de/preview/DT0400.9780511500497_A25086123/preview-9780511500497_A25086123.pdf

DeKeyser, R. (2010). Practice for second language learning: Don’t throw out the baby with the bathwater. *International Journal of English Studies, 10*(1), 155–165. https://doi.org/10.6018/ijes/2010/1/114021

Ellis, R. (2002). Grammar teaching: Practice or consciousness-raising? In J. C. Richards & W. A. Renandya (Eds.), *Methodology in language teaching* (pp. 167–174). Cambridge University Press.

Ellis, R. (2006). Current issues in the teaching of grammar: An SLA perspective. *TESOL Quarterly, 40*(1), 83–107. https://doi.org/10.2307/40264512

Fotos, S., & Ellis, R. (1991). Communicating about grammar: A task-based approach. *TESOL Quarterly, 25*(4), 605–628. https://doi.org/10.2307/3587079

Goethe-Institut. (n.d.). *Deutsch Online B2.1 — Übersicht Redemittel und Grammatik*. “Partizip I und II als Adjektiv.” https://lernen.goethe.de/deutschonline/B2/PDF/DT-online_B2.1_K01-06_GR-RM_Rueckschau_de.pdf

Goethe-Institut. *Goethe-Zertifikat C1: Prüfungsziele, Testbeschreibung*. https://www.goethe.de/pro/relaunch/prf/kk/Handbuch_Pruefungsziele_Testbeschreibung_C1.pdf — C1 construct; use of *Profile Deutsch* as inventory (**the Profile Deutsch book was not opened**).

Henry, N., Culman, H., & VanPatten, B. (2009). More on the effects of explicit information in instructed SLA: A partial replication and a response to Fernández (2008). *Studies in Second Language Acquisition, 31*(4), 559–575. https://doi.org/10.1017/S0272263109990027

Krashen, S. D. (1982). *Principles and practice in second language acquisition*. Pergamon. http://www.sdkrashen.com/content/books/principles_and_practice.pdf — Monitor Hypothesis.

Leibniz-Institut für Deutsche Sprache. grammis. “Partizipien.” https://grammis.ids-mannheim.de/sgt/2240 — last change 7 Feb 2024.

Leibniz-Institut für Deutsche Sprache. grammis. “Attribut.” https://grammis.ids-mannheim.de/sgt/2267 — last change 25 Aug 2023. Extended Partizipialattribut; Nominalstil.

Leibniz-Institut für Deutsche Sprache. grammis. “Partizip I.” https://grammis.ids-mannheim.de/terminologie/180 — DOI 10.14618/terminologie.

Lightbown, P. M. (1983). Exploring relationships between developmental and instructional sequences in L2 acquisition. In H. Seliger & M. Long (Eds.), *Classroom-oriented research in second language acquisition* (pp. 217–243). Newbury House. (Overlearning of drilled *’s*; cited via Wong & VanPatten, 2003.)

Lightbown, P. M. (2000). Anniversary article: Classroom SLA research and second language teaching. *Applied Linguistics, 21*(4), 431–462. https://doi.org/10.1093/applin/21.4.431

Long, M. H. (1998). Focus on form in task-based language teaching. *University of Hawai‘i Working Papers in ESL, 16*(2), 35–49.

Nation, P. (2007). The four strands. *Innovation in Language Learning and Teaching, 1*(1), 2–13. https://doi.org/10.2167/illt039.0 — language-focused learning ≤ one-quarter.

Paulston, C. B. (1970). Structural pattern drills: A classification. *Foreign Language Annals, 4*(2), 187–193. https://doi.org/10.1111/j.1944-9720.1970.tb02033.x — mechanical / meaningful / communicative. Wong & VanPatten (2003) cite the 1972 reprint in Allen & Campbell and Paulston (1976).

VanPatten, B. (2002). Processing instruction: An update. *Language Learning, 52*(4), 755–803. https://doi.org/10.1111/1467-9922.00203

VanPatten, B., & Cadierno, T. (1993). Explicit instruction and input processing. *Studies in Second Language Acquisition, 15*(2), 225–243. https://doi.org/10.1017/S0272263100011979

VanPatten, B., & Oikkenon, S. (1996). Explanation versus structured input in processing instruction. *Studies in Second Language Acquisition, 18*(4), 495–510. https://doi.org/10.1017/S0272263100015394

Wong, W., & VanPatten, B. (2003). The evidence is IN: Drills are OUT. *Foreign Language Annals, 36*(3), 403–423. https://doi.org/10.1111/j.1944-9720.2003.tb02123.x — open PDF: https://web.pdx.edu/~fischerw/courses/advanced/methods_docs/pdf_doc/wbf_collection/0351_0400/0385_FLA_Wong_DrillsAreOUT.pdf

### Already owned in [01](01-sla-adult-self-directed.md), not duplicated

Cepeda et al. (2006); Ellis (1993, 2005); Krashen (2011); Nakata (2015); Norris & Ortega (2000); Roediger & Karpicke (2006); Schmidt (1990, 2001).

### Secondary citations used as pointers, not as owners

DeKeyser, R. (1998). Beyond focus on form. In C. Doughty & J. Williams (Eds.), *Focus on form in classroom second language acquisition*. Cambridge. (Strong interface; cited via Ellis, 2006, and DeKeyser, 2010.)

Loschky, L., & Bley-Vroman, R. (1993). Grammar and task-based methodology. In G. Crookes & S. Gass (Eds.), *Tasks and language learning*. (Task-essentialness; cited via DeKeyser, 2010.)

*Profile Deutsch* (Glaboniat et al., as used by Goethe-Institut C1 handbook). **UNVERIFIED** as to the C1 grammar inventory row for Partizipialattribute — book not opened.

Duden-Grammatik classification of participles as infinite verb forms. **UNVERIFIED** in the Duden volume; reported via grammis “Partizip I.”

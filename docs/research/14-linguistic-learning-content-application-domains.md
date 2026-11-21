# Linguistic vs learning vs content vs application: what belongs where

SLA / domain-kinds companion to the language-intelligence synthesis ([hub](language-intelligence-domain.md)). This note owns the *why* of the four kinds of object. The hub owns UD, tools, licences, and the product recommendation.

Written for a senior engineer who is not a linguist. Every claim traces to the paper, book, or institute document that owns it.

**Product frame.** Davio is a hobby **B1–B2 German Gym**: curated reading/listening with **Noticing** and a Grammar-only **Gap map**. The founder hypothesizes a distinct “language intelligence” layer: given a sentence such as *Der kleine Junge sieht den großen Hund.*, identify tokens, lemmas, POS, gender, number, case, tense, morphology, syntax, constructions, vocabulary, CEFR, grammatical concepts — independent of UI.

**This note’s job** is to explain that hypothesis *and* challenge it. The question is: useful conceptual split, or over-engineering a platform?

---

## The one-paragraph answer

The founder is right that **language facts, learner state, published Activities, and the Gym sitting are four different kinds of thing**. Mixing them into one “German ontology” is a category error that SLA, educational measurement, and NLP all independently warn against. The founder is wrong if that insight is taken as a licence to **build a standalone language-intelligence service** for a 10–20-piece hobby corpus. Native-text parsers do not equal constructions, CEFR, or pedagogical usefulness. They fail on learner writing for principled reasons. Successful consumer apps (Anki, Duolingo) do not ship Universal Dependencies as a product layer. For this Gym, the useful move is a **thin conceptual boundary** (do not store “the Learner has mastered dative” inside a German lemma table) plus **hand-tagged Noticing items** on owned texts. Call Stanza or LanguageTool later as *tools*, not as a platform. A German constructicon is a funded research career (Boas & Ziem; HHU FrameNet-Konstruktikon), not a v1 module.

---

## 0. Worked example: four readings of one sentence

Take the founder’s sentence:

> Der kleine Junge sieht den großen Hund.

| Domain | What is true of this string | What is *not* true of this string |
| --- | --- | --- |
| **Language** | German morphology and syntax: masc. sg. nom. *der kleine Junge*; masc. sg. acc. *den großen Hund*; present 3sg *sieht*; transitive clause; adjective–noun agreement. These facts do not change if a Learner never sees the sentence. | Whether it is *worth teaching*; whether *this* Learner controls accusative; whether it is B1. |
| **Learning** | If the Gym later records that this Learner explained *den* vs *dem* here, that is evidence about **this person**. Interlanguage, gaps, retrieval, automatization. | The case system of German. |
| **Content** | A toy example (or, in v1, a sentence inside an **Activity** with rights, audio, topic, length). Pedagogical overlay: “notice accusative after *sehen*.” | A UD tree. A UD tree is an analysis *of* the text, not the Activity. |
| **Application** | A sitting: Orient → Read → Notice → Gap chip. Navigation, phone layout, TTS player. | German, the Learner, or the story as objects. |

The founder’s list (tokens, lemmas, POS, gender, number, case, tense, morphology, syntax) is a **language-domain** list, close to what Universal Dependencies actually annotates ([UD introduction](https://universaldependencies.org/introduction.html); de Marneffe et al., 2021). Constructions, CEFR labels, and “grammatical concepts worth teaching” are **not** the same layer. That conflation is the over-engineering risk.

---

## 1. Linguistic concepts that are properties of the LANGUAGE (not the Learner)

### 1.1 Grammaticality ≠ naturalness ≠ frequency ≠ pedagogical usefulness

These four are routinely collapsed in product talk (“the AI said it’s correct German”). They are not the same object.

**Grammaticality (competence) vs acceptability (performance).** Chomsky (1965, ch. 1) owns the distinction: *acceptable* is a performance concept (natural, immediately comprehensible, not bizarre); *grammaticalness* belongs to competence. The scales do not coincide. Grammaticalness is only one factor in acceptability; memory limits, style, and discourse order also matter. There is no operational test that is necessary and sufficient for grammaticalness. **Product translation:** a LanguageTool flag, an LLM “this is fine,” and a native-speaker “I’d never say that” are three different measurements.

**Naturalness / nativelike selection.** Pawley and Syder (1983) own the puzzle: natives routinely pick an expression that is **not only grammatical but nativelike**, from a range of grammatically correct paraphrases that are “non-nativelike or highly marked.” Grammaticality does not ensure idiomaticity. Their explanation is a large store of lexicalized sentence stems, not a complete generative grammar. **Product translation:** an LLM can generate a grammatical German sentence that no B1 text should teach because nobody says it that way.

**Frequency.** Biber and Reppen (2002) compared six ESL grammar textbooks with corpus frequencies from the *Longman Grammar of Spoken and Written English* (Biber et al., 1999). Textbook coverage, order, and example verbs systematically mismatch what is frequent in use. They are explicit: frequency “can never be the sole factor used to design materials,” but it beats “intuitions and accepted practice” when the question is *what actually occurs*. **Product translation:** “this structure is in the grammar book” ≠ “this structure is common in the Study band.”

**Pedagogical usefulness.** Ellis (2006, beliefs 2–3) owns the teaching criterion: focus on structures **known to be problematic**, not the whole grammar; grammar-in-context pays *after* learners already have some ability to use the language. Lightbown (2000): isolated drill accuracy is not spontaneous use. Harley (1989, via Ellis, 2005): French tense/aspect stayed unacquired after massive immersion until intensive instruction — high frequency did not make it pedagogically “done.” **Product translation:** a frequent, grammatical, natural pattern can still be a bad Gym puzzle (too easy, too redundant, or not a gap for *this* Learner). A rare pattern can be worth Noticing if it is a documented B1–B2 problem (German case/gender; see [01-sla-adult-self-directed.md](./01-sla-adult-self-directed.md) on low-salience morphology).

Worked contrast on the founder sentence:

| Judgement | Rough verdict | Owner of the concept |
| --- | --- | --- |
| Grammatical | Yes | Chomsky (1965) |
| Natural / nativelike | Yes, textbook-plain | Pawley & Syder (1983) |
| Frequent | High (basic transitive + agreement) | Corpus linguistics (Biber et al., 1999) |
| Pedagogically useful as a B1–B2 Gym puzzle | Probably **weak** — closer to A2 control of a repertoire (Council of Europe, 2020, grammatical accuracy notes) | Ellis (2006); CEFR descriptors |

If a language-intelligence layer stores one boolean `is_good_example`, it has already mixed the four.

### 1.2 Interlanguage (Selinker): learner language is a system

Selinker (1972, *IRAL* 10, pp. 209–232) coined **interlanguage**: in a given situation, learner utterances attempting the same meaning as a native speaker’s differ systematically. That comparison implies a **separate linguistic system**, observable in meaningful communication — not only in drills. He hypothesized five processes (L1 transfer, overgeneralization, transfer of training, communication strategies, learning strategies) and **fossilization**: some items, rules, and subsystems can persist short of target norms. His “5% reach native-like competence” figure is a 1972 hypothesis, not a modern pass-rate; Han (2013) updates fossilization as **selective**, not global. [01](./01-sla-adult-self-directed.md) already flags the 5% number as an app-founder myth.

**Product translation:** the Gap map is a picture of *this Learner’s system*, not a checklist of “German minus errors.” Treating interlanguage as defective German is the LanguageTool move (see §1.4).

### 1.3 Error analysis (Corder) vs contrastive analysis (Lado / Fries)

**Contrastive analysis (CA).** Fries (1945, p. 9): the most effective materials rest on a scientific description of the language to be learned, compared with the learner’s native language. Lado (1957, *Linguistics Across Cultures*) owns the strong claim: compare L1 and L2 systematically and **predict** which patterns will be difficult; similar elements will be easy, different ones difficult.

**Error analysis (EA).** Corder (1967, *IRAL* 5, pp. 161–170; ERIC ED019903) owns the shift. Errors (not performance *mistakes*) are evidence that the Learner has a definite system at every stage — a **built-in syllabus** that may be more efficient than the instructor’s sequence. Errors are “evidence of his strategies of learning,” not “signs of inhibition.” L1 is **facilitative** as well as a source of difference; many errors are *not* L1 interference. Corder distinguishes **errors** (competence / current system) from **mistakes** (performance slips).

CA failed as a complete predictor (especially beyond phonology). EA then over-taxonomized “error types.” Neither is a licence to invent a convenient German-error enum for an app.

**Product translation:** “English speaker, therefore accusative will be hard” is CA. “This Learner just produced *dem Hund* after *sehen*” is data about interlanguage. The second belongs in the **learning** domain. Mapping every deviation onto a German grammar node is CA-shaped ontology.

### 1.4 Why native-text NLP pipelines mis-analyze learner writing

Native taggers and parsers are trained on edited standard text. Learner language violates their assumptions at three independent points.

**POS evidence splits.** Díaz-Negrillo, Meurers, Valera, and Wunsch (2010) own the interlanguage-POS argument: native POS schemes assume morphology, distribution, and lexical identity line up. In learner language they systematically do not. Example: *I have see a movie* — *see* is morphologically a base form and distributionally a past participle. A single native tag cannot encode both. They argue for **layered** annotation (morphological vs distributional vs lexical). Dickinson and Ragheb (2012, COLING) extend the same idea to dependencies: mismatches between layers often *are* the “error,” without treating error as the primary entity.

**Tagger accuracy drops.** van Rooy and Schäfer (2002) evaluated TOSCA-ICLE, Brill, and CLAWS on Tswana Learner English. Spelling errors contributed substantially; after spelling correction, **other learner errors still caused** 38% of remaining CLAWS tag errors (19% TOSCA, 14% Brill). Not all learner errors break tags (wrong article can still be tagged DET); conjugation and clause-pattern errors do more damage.

**Parsers are robust in the wrong direction.** Meurers (2012/2019 encyclopedia article) owns the goal mismatch: mainstream NLP is made **robust** so it still returns *some* tree or translation when the input is noisy. An intelligent tutor needs the opposite: **errors are the target of analysis**, not noise to gloss over. Writer’s aids (spell/grammar checkers) assume **native** error types. Rimrott and Heift (2008, cited in Meurers, 2019): many L2 misspellings are multiple-edit errors that native spellcheckers miss. LanguageTool (Naber, 2003) is a native-oriented pattern grammar checker; Meurers notes it was “not developed with language learners in mind.” Berzak, Kenney, Straughn, and Levy (2016, ACL) built a learner-English UD treebank with **two layers** (original vs corrected) because a single native UD analysis is not well-defined for ungrammatical strings. Huang et al. (IJCL) and Krivanek and Meurers (2011, German) document the same for parsing.

**Davio-specific cut.** v1 is **reception-primary** (read/listen owned Study-band text), not a writing tutor. Native NLP on **owner-approved German** is a much easier problem than NLP on the Learner’s production. That does *not* resurrect a learner-error taxonomy or a GEC model as v1 infrastructure. It does mean: if you ever parse Gym texts, parse the **content**, not the Learner.

---

## 2. Learning-domain concepts that must not be stuffed into a linguistic ontology

Each subsection: what it is / what it is not. Primary source first.

### 2.1 Learning objectives / can-do statements (CEFR; Bloom with care)

**What it is.** The CEFR is a **framework of reference**, “a common basis for the elaboration of language syllabuses, curriculum guidelines, examinations, textbooks, etc.” (Council of Europe, 2001, p. 1). The 2020 Companion Volume is explicit: it promotes a **proficiency** perspective guided by **can-do** descriptors rather than a deficiency perspective; it is a tool to **assist planning** by working backwards from what users need to do; it is **not** a linear structural syllabus (Council of Europe, 2020, ch. 2). Descriptors are language-neutral. Language-specific **Reference Level Descriptions** (e.g. *Profile deutsch*, Glaboniat et al., 2005; [ÖSD overview](https://www.osd.at/en/profile-deutsch/overview-profile-deutsch/)) try to inventory forms per level; those inventories are **pedagogical overlays**, still not “the grammar of German.” [01](./01-sla-adult-self-directed.md) already uses CEFR this way: B1 accuracy can dip as independent use starts; a B1 badge is not a Gap map.

**What it is not.** A curriculum, a German construct list, or a skill tree. Bloom’s taxonomy (Bloom et al., 1956; Anderson & Krathwohl, 2001 revision) is a hierarchy of **cognitive operations** on subject-matter (remember → understand → apply → analyze → evaluate → create). It is a general education instrument. It does **not** describe L2 implicit knowledge, interlanguage stages, or CEFR action-oriented can-dos. Mapping “dative = apply” and “subordinate clause = create” is a category error. Use Bloom, if at all, only for *metalinguistic* tasks (can the Learner *explain* this sentence?) — which is already Davio **Noticing**, owned by Schmidt (1990), not by Bloom.

### 2.2 Learner proficiency vs item difficulty

**What it is.** Item Response Theory models the probability of a correct response as a function of **person ability** (θ) and **item parameters** (difficulty, sometimes discrimination, guessing). Lord (1980) is the classic applied statement; Rasch (1960) owns the one-parameter form in which person ability and item difficulty live on one logit scale and are separable. A hard item is not “advanced German.” It is an item on which people with higher θ succeed more often.

**What it is not.** A property of a lemma, a case, or a CEFR level. The same dative sentence can be easy (recognition, strong context) or hard (production, no article cue). Difficulty is estimated from **people answering items**. With one Learner and 10–20 pieces, you cannot fit IRT. Do not encode `difficulty=B2` on a linguistic node and call it measurement.

### 2.3 Mastery / automatization vs “knows the rule”

**What it is.** Skill Acquisition Theory (DeKeyser, 1998, 2007; DeKeyser & Suzuki, 2025 handbook chapter): declarative knowledge (“knowledge that”) can, through practice, become procedural (“knowledge how”) and then **automatized** (faster, more accurate, less interference). Automatization is gradual, not a boolean. DeKeyser’s **strong interface** is one of three live positions; Davio’s Grammar job is the **weak interface** bet (Ellis, 1993/2006): explicit knowledge **primes noticing**, it does not compile into fluency by itself ([01](./01-sla-adult-self-directed.md) §2).

**What it is not.** A field `mastered=true` on “the dative case” in a German ontology. Even SAT is **item- and skill-specific**; Logan’s instance theory (cited in SAT discussions) stores episodes, not abstract case. Krashen’s Monitor (1982): knowing the rule is neither necessary nor sufficient for fluent use. Lightbown (2000): “practice does not make perfect” when practice means isolated drill.

### 2.4 Learner errors as interlanguage evidence, not LanguageTool flags

**What it is.** Corder (1967) + Selinker (1972): a deviation can be a window on the current system (overgeneralization, transfer, communication strategy). Richards (2008) on the plateau: fossilized errors persist despite correction; the pedagogical question is how learners **notice** them in their own use.

**What it is not.** A grammar-checker match. Meurers (2019): native writer’s aids target native error types and optimize for a clean document, not for acquisition. LanguageTool flags are **application-layer** hints on a string, useful at most as a review aid on **draft content**, never as the Gap map’s schema.

### 2.5 Spaced practice / retrieval — applies to ITEMS in memory

**What it is.** Cepeda, Pashler, Vul, Wixted, and Rohrer (2006, *Psychological Bulletin* 132(3), 354–380): spacing beats massing for verbal recall; optimal gap grows with desired retention interval. Roediger and Karpicke (2006, *Psychological Science* 17(3), 249–255): retrieval beats restudy on delayed tests; restudy inflates confidence. Nakata (2015, *SSLA* 37(4), 677–711): for L2 vocabulary, **amount** of spacing is the large effect; expanding vs equal intervals is a small extra.

**What it is not.** A scheduler for “the dative case” as a monolith. [01](./01-sla-adult-self-directed.md) §4 already owns this for Davio: evidence is paired associates, word lists, short prose — discrete items. Spaced return to a **noticed sentence** or a **new contextual example** is a reasonable extrapolation. Leitner-boxing article paradigms as the Gym loop is Focus on Forms plus SRS, which Ellis (2006, pp. 101–102) says is unlikely to yield implicit knowledge for fluent use.

### 2.6 Activity selection / Focus on Form

Do not contradict [01](./01-sla-adult-self-directed.md). Summary with the same owners:

- Schmidt (1990, 2001): **noticing** = conscious registration of specific form–meaning pairings in input; not “understood the paragraph”; not “knows the rule.”
- Long (1991, 1998): **Focus on form** (singular) = brief attention to a code feature **during** meaning-focused activity, in an order closer to the Learner’s internal syllabus. **Focus on forms** = synthetic skill tree. Meaning-only is insufficient for adult native-like grammar.
- Ellis (2001/2006): planned vs incidental FFI; extensive incidental FonF treats many forms as they come up.

**What it is not.** An algorithm that picks the next node in a German constructicon. Krashen (1982, Input Hypothesis part 3) and Ellis (2005, Principle 9 / impracticality of exact `i+1` targeting) argue against fine-grained adaptive structure-of-the-day. Activity selection in v1 is: interesting owned text + a Noticing puzzle in that text + Gap-map re-meet later ([03-mvp-activity-feasibility.md](./03-mvp-activity-feasibility.md)).

### 2.7 Personalization (gaps and interest, not an AI skill tree)

**What it is.** Holec (1981): autonomy = **take charge** of objectives, content, methods, monitoring, evaluation. Ellis (2005, Principle 9): individual differences; Dörnyei via Ellis: the best motivational intervention is quality of teaching. [01](./01-sla-adult-self-directed.md) §5 already maps this to the Gap map, not a placement tree.

**What it is not.** A language-intelligence graph that “unlocks” constructions. Matching interest is a **content** and **application** problem (what piece to show). Matching gaps is a **learning** problem (what this person does not control). Neither is a property of German.

### 2.8 Knowledge tracing / IRT — about the LEARNER

**What it is.** Corbett and Anderson (1995, *User Modeling and User-Adapted Interaction*): **knowledge tracing** estimates the probability that a student has learned each production rule in an *ideal student model* (originally ACT programming tutors), using guess/slip parameters, and sequences exercises until “mastery.” It assumes **fine-grained, relatively independent skills**. IRT (Lord, 1980; Rasch, 1960) estimates **person ability** from item responses. Pelánek / Deonovic-type work (e.g. Deonovic et al., 2018) relates BKT and IRT formally; both remain models of **learners**, not of languages.

**What it is not.** A morphological feature. BKT on “dative” as one skill is the SAT/Focus-on-forms error at measurement scale: too coarse, and v1 has the wrong data (one Learner, few items, reception + explanation, not hundreds of production opportunities). Do not build BKT. If a later product has many Learners and many items, IRT/BKT still sit in the **learning** domain.

---

## 3. Content domain

### 3.1 A story or exercise is not a linguistic analysis of its sentences

An **Activity** (CONTEXT.md) is a bounded sitting object: owned text/audio, topic mix, length, Noticing puzzle, probes. A **linguistic analysis** is a description of strings (tokens, trees, constructions). You can have:

- a published piece with **no** parse;
- a parse of a sentence that is **not** an Activity;
- two Activities that share a sentence and **different** pedagogical overlays (notice case vs notice word order).

Meurers (2019) splits NLP-for-learning into **ILTS** (analyze *learner* language) and **ATICALL** (analyze *authentic native* texts to search, enhance, or generate activities). Even ATICALL treats analysis as a **pipeline over content**, not as the content. Visual Input Enhancement of the Web (Meurers et al., 2010) is the existence proof: you can highlight forms in a page without owning a language platform.

Nation (2007) four strands: the reading/listening **object** is meaning-focused input. The language-focused strand is a **use** of that object, capped at about a quarter of time. Collapsing the story into “a bag of UD features” destroys the meaning-focused Activity.

### 3.2 Generated vs validated vs approved — and why LLM output ≠ grammaticality ≠ pedagogy

The founder’s pipeline (generate → analyze → validate → resource-check → independent review → escalate → approve → store) is the right **content** instinct. German copyright research already says the stored Gym corpus must be **owner-authored or owner-rewritten**; models are typists, not authors ([08-b1-b2-german-content-sources.md](./08-b1-b2-german-content-sources.md); ADR-0002). Raw model output is not a *persönliche geistige Schöpfung* if fully machine-made (DPMA, cited in 08).

Map the four judgements from §1.1 onto that pipeline:

| Stage | What it can catch | What it cannot |
| --- | --- | --- |
| Generate | Draft prose, seeded patterns | Truth, idiom, band, interest |
| Linguistic analysis (optional tool) | Some agreement/case inconsistencies on **canonical** German | Naturalness; “worth noticing”; learner difficulty; constructions UD does not encode |
| Deterministic validation | Schema, length, required pattern present, banned licence | Pedagogical usefulness |
| Language-specific resources | Frequency lists, Wiktionary gender, a human grammar note | Interlanguage |
| Independent model review | A second opinion, still not grammaticality | Shared LLM failure modes |
| Human approve | The only stage that can currently own “this is Gym-worthy German” | Scale |

**LLM output ≠ grammaticality** (Chomsky: no operational test; LLMs optimize likelihood, not competence). **≠ naturalness** (Pawley & Syder). **≠ pedagogical usefulness** (Ellis). Analysis can be a **reviewer’s assistant** on owned drafts. It is not an approval oracle and not a reason to store a parallel “language graph” as the product.

### 3.3 German copyright (already researched)

Do not re-litigate 08. Stored Activities: generate-and-review. Third-party news: link-out. Quotation (§ 51 UrhG) can support a short Noticing cite, not a hosted corpus. Classroom (§ 60a) and TDM (§ 44b) are not a product licence.

---

## 4. Challenge the “language intelligence platform”

### 4.1 Steel-man

A reusable analysis layer is attractive because the *same* facts about a sentence could feed:

- **generation** (seed “dative after *helfen*”);
- **validation** (article–adjective–noun agreement);
- **exercise making** (cloze the accusative article — even if v1 rejects cloze-as-sitting);
- **assessment** (did the probe hit the form that is in the text?);
- **search** (find another piece with verb-final subordinate clauses);
- **progress** (re-meet the same form).

Independence from UI is real: a phone sitting, a later desk library, and a future tutor could share **content + annotations**. UD exists exactly so many tools can consume one morphosyntactic representation (de Marneffe et al., 2021: habitable for learners *and* engineers — note: habitable as a **notation**, not as a pedagogy). Meurers’s ATICALL is the research name for “NLP on native text to support learning materials.” ICALL labs spent decades on this because unconstrained learner input explodes combinatorially (Nagata, 2009, cited in Meurers, 2019: thousands of correct variants, ~10^6 if you add particle/conjugation errors).

If Davio ever had **thousands** of texts, **many** Learners, and **generation at scale**, some shared analysis of *approved German* would stop humans from re-tagging the same agreement pattern. That is the honest steel-man.

### 4.2 Attack

**Successful apps do not ship this as a product layer.** Anki is SM-2 on **cards**. Duolingo’s published learner-modeling work is spaced-repetition / half-life regression on **items** (Settles & Meeder, 2016, ACL), not a UD service. That is not an argument that linguistics is fake. It is an argument that **item + learner state** is the profitable boundary, and a full language graph is optional.

**v1 volume is 10–20 owned texts** ([03](./03-mvp-activity-feasibility.md); [08](./08-b1-b2-german-content-sources.md)). Hand-tag the Noticing target on each piece. A parser will cost more than the tagging and will still not tell you what is worth noticing.

**UD ≠ constructions ≠ CEFR.** UD annotates POS, morphological features, and typed dependencies ([UD guidelines](https://universaldependencies.org/guidelines.html)). Constructions are **form–meaning pairings**, including argument-structure patterns that are not predictable from the verb alone (Goldberg, 1995, p. 1; Fillmore, Kay & O’Connor, 1988). A German **constructicon** is an ongoing academic project: HHU FrameNet-Konstruktikon since 2015, still building families of constructions and frames ([project about](https://framenet-constructicon.hhu.de/project/about); Boas & Ziem, 2018; Ziem, Flick & Sandkühler, 2019). CEFR can-dos are **language-neutral acts**. *Profile deutsch* is a separate RLD overlay. Storing `cefr=B1` on a UD `case=Acc` feature is three theories in one cell.

**Parsers fail on learner text** (§1.4). Even on native text they are fallible; on interlanguage they are the wrong instrument. v1 is mostly native-ish owned text — so this objection is weaker for Gym **content** and fatal if the platform is sold as analyzing the **Learner**.

**A German constructicon is a research career.** Fillmore’s FrameNet + Berkeley constructicon, then parallel projects for German, Swedish, Japanese, Portuguese, Russian (Lyngfelt et al., 2018). Do not reimplement HHU’s database.

**Premature ontology is a known failure mode.** Lenat’s Cyc spent decades encoding “common sense” as a reusable AI substrate; the reusable substrate rarely became the product. In language technology, WordNet (Miller, 1995) and GermaNet (Hamp & Feldweg, 1997) are useful **lexical** resources and still are not a teaching syllabus. Building Davio’s own “grammatical concept graph” before the Gym has been opened on a phone for two days is Cyc-shaped: invert the dependency (platform first, use later).

**Davio’s own SLA note already rejects the skill tree.** Exact `i+1` targeting is impractical (Krashen, 1982; Ellis, 2005). Personalization is Gap map + interest, not an AI path ([01](./01-sla-adult-self-directed.md) §5). A language-intelligence platform is the skill tree with better types.

### 4.3 Three things people conflate

| | (a) Representation of German | (b) Runtime analysis of a string | (c) Pedagogical overlay |
| --- | --- | --- | --- |
| **Question** | What distinctions does the language make? | What structure does *this* token sequence have? | What is worth teaching / noticing for *this* Gym and Learner? |
| **Owners** | Reference grammars; UD feature inventories; FrameNet/constructicon; Wiktionary gender | Stanza (Qi et al., 2020), UDPipe, SMOR (Schmid, Fitschen & Heid, 2004), LanguageTool | Ellis; Long; Schmidt; CEFR/RLD; the owner’s Gap map |
| **Stability** | Slow (the language) | Model/version dependent; fails on interlanguage | Changes with Learner, band, Activity goal |
| **Hobby now** | Do not build. Consult. | Optional tool on **approved** drafts | Hand-written Noticing notes |

The founder’s list mixes (a)+(b) and then smuggles (c) as “CEFR” and “grammatical concepts.”

---

## Recommendation

Labeled as recommendations, not as requirements.

### Conceptual boundary: YES

Keep four **kinds** of object distinct in CONTEXT.md, tickets, and any future schema:

1. **Language** — facts about German (and analyses of strings).
2. **Learning** — this Learner’s gaps, marks, retrieval events, felt Progress.
3. **Content** — owned Activities, rights, audio, approval state.
4. **Application** — Gym sitting, Orient, navigation, phone UI.

Do not put `mastered`, `cefrLevel`, `nextReview`, or `errorType` on a lemma. Do not put `lemma` on a Gap-map chip as if the chip *were* German.

### Standalone language-intelligence service / platform: NO for the hobby now

For 10–20 pieces and one Learner, a UD microservice, constructicon, GEC model, or CEFR grammar ontology is over-engineering. It does not serve the two-week bar (voluntary phone openings). It fights [01](./01-sla-adult-self-directed.md) (FonF in texts, not a tree) and [03](./03-mvp-activity-feasibility.md) (few and deep).

**Hobby now (recommended):**

- Author/rewrite pieces; attach **one explicit Noticing target** per piece (human).
- Gap map stores **forms this Learner marked or missed**, in the Gym’s own coarse labels (whatever 05 already uses), not UD `Case=Dat`.
- If a draft looks wrong, the owner (and optionally LanguageTool / a second model) reviews the **content**. That is a writing desk, not a platform.

**Product later (recommended only if volume or generation actually hurts):**

- Treat analysis as **ATICALL**: run an existing parser (Stanza/UDPipe) on **approved** German to search “other sentences with verb-final” or to sanity-check agreement. Consume UD; do not invent a Davio dependency scheme.
- Keep pedagogical overlay in content + learning stores.
- Revisit a service boundary only when a second client (e.g. a generator worker) would otherwise duplicate the same **content** analysis — still not a “language brain” for the Learner.

**Founder approval needed:** whether “language intelligence” stays a **vocabulary warning** in docs, or becomes a **build ticket**. This note recommends: **docs/glossary only, no build ticket**, until the Gym sitting exists in the world.

---

## 5. What NOT to build ourselves

| Do not build | Why | Use instead if ever needed |
| --- | --- | --- |
| Morphological analyzer | SMOR already covers German derivation, compounding, inflection (Schmid et al., 2004, LREC). Rebuilding finite-state morphology is a CL lab. | SMOR / RFTagger / parser morphology layer |
| Dependency parser | UD + Stanza/UDPipe exist for German; accuracy on **learner** text is a research problem (Berzak et al., 2016; Krivanek & Meurers, 2011). | Stanza (Qi et al., 2020); UDPipe |
| WordNet / GermaNet clone | Miller (1995) WordNet; Hamp & Feldweg (1997) GermaNet. Lexical-semantic nets are not Gym Activities. | Query GermaNet/Wiktionary if a writer needs a synonym — rare in v1 |
| CEFR grammar ontology | CEFR is can-do, not a form list (Council of Europe, 2001/2020). German RLD is *Profile deutsch* (Glaboniat et al., 2005), a published inventory, still not “the” grammar. | Hand-picked Noticing targets; optionally consult Profile deutsch as a **book** |
| GEC model | Grammatical error correction is a research/eval industry (CoNLL shared tasks, etc.). Optimizes native-like rewrites, not noticing. Wrong job for a reception Gym. | Human rewrite of drafts |
| Speech recognizer | Out of v1 speaking spec; ASR is its own field. Immersion already supplies talk. | — |
| Full constructicon | HHU/Boas–Ziem career project. Goldberg/Fillmore theory is not a weekend schema. | Cite constructions in Noticing prose when the owner can explain them |
| Invented learner-error taxonomy | Repeats 1970s EA taxonomies; ignores Corder’s built-in syllabus and Díaz-Negrillo layered evidence. Convenience enums become the skill tree. | Gap map as Learner-marked forms + probes |
| Knowledge-tracing engine | Corbett & Anderson (1995) needs fine-grained production practice and many opportunities. One adult, explanations-in-context, 10–20 texts: no identifiability. | Gap chip + re-meet in a new text |
| IRT calibrated item bank | Lord (1980) needs a population of persons and items. | — |
| “Language intelligence” microservice | Premature platform; conflates (a)(b)(c) in §4.3. | Conceptual boundary + optional off-the-shelf tools |

---

## Implications for Davio

- **The hypothesis is half-right.** A distinct language/domain *concept* prevents stuffing mastery, SRS, and CEFR into a German dictionary. That is worth keeping in the glossary.
- **The hypothesis is over-built as architecture.** For this Gym, language intelligence is not a layer you deploy. It is a warning not to mix kinds.
- **v1 work stays where 01/03/08 put it:** owned texts, Noticing, Gap map, phone sitting. Analysis, if any, is a **content-review tool** on canonical German.
- **Do not start a learner-model / adaptive-next map** from this note. RESUME.md already forbids rediscovering that destination unless the owner changes it.

---

## Sources

Primary and institute sources. Page numbers refer to the owning edition cited.

Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). *A taxonomy for learning, teaching, and assessing: A revision of Bloom’s taxonomy of educational objectives*. Longman.

Berzak, Y., Kenney, J., Straughn, C., & Levy, R. (2016). Universal Dependencies for learner English. *Proceedings of ACL 2016*. https://doi.org/10.18653/v1/p16-1070 — https://aclanthology.org/P16-1070/

Biber, D., Johansson, S., Leech, G., Conrad, S., & Finegan, E. (1999). *Longman grammar of spoken and written English*. Longman.

Biber, D., & Reppen, R. (2002). What does frequency have to do with grammar teaching? *Studies in Second Language Acquisition, 24*(2), 199–208. PDF: https://jan.ucc.nau.edu/~biber/Biber/Biber_Reppen_2002.PDF

Bloom, B. S., Engelhart, M. D., Furst, E. J., Hill, W. H., & Krathwohl, D. R. (1956). *Taxonomy of educational objectives: The classification of educational goals. Handbook I: Cognitive domain*. Longmans, Green.

Boas, H. C., & Ziem, A. (2018). Constructing a constructicon for German. In B. Lyngfelt et al. (Eds.), *Constructicography* (pp. 183–228). John Benjamins.

Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. *Psychological Bulletin, 132*(3), 354–380. https://doi.org/10.1037/0033-2909.132.3.354

Chomsky, N. (1965). *Aspects of the theory of syntax*. MIT Press. Ch. 1: grammaticalness vs acceptability. Open excerpt: https://www.colinphillips.net/wp-content/uploads/2015/09/chomsky1965-ch1.pdf

Corbett, A. T., & Anderson, J. R. (1995). Knowledge tracing: Modeling the acquisition of procedural knowledge. *User Modeling and User-Adapted Interaction, 4*(4), 253–278. https://doi.org/10.1007/BF01099821

Corder, S. P. (1967). The significance of learner’s errors. *IRAL, 5*(1–4), 161–170. https://doi.org/10.1515/iral.1967.5.1-4.161 — ERIC PDF: https://files.eric.ed.gov/fulltext/ED019903.pdf

Council of Europe. (2001). *Common European Framework of Reference for Languages: Learning, teaching, assessment*. Cambridge University Press. Opening: common basis for syllabuses, not a method. https://rm.coe.int/1680459f97

Council of Europe. (2020). *CEFR Companion Volume*. https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4 — can-do / proficiency perspective; not a linear structural syllabus; B1 accuracy notes.

de Marneffe, M.-C., Manning, C. D., Nivre, J., & Zeman, D. (2021). Universal Dependencies. *Computational Linguistics, 47*(2), 255–308. https://universaldependencies.org/introduction.html

DeKeyser, R. (1998). Beyond focus on form: Cognitive perspectives on learning and practicing second language grammar. In C. Doughty & J. Williams (Eds.), *Focus on form in classroom second language acquisition*. Cambridge University Press.

DeKeyser, R. (Ed.). (2007). *Practice in a second language: Perspectives from applied linguistics and cognitive psychology*. Cambridge University Press. Introduction: declarative / procedural / automatization.

Deonovic, B., Yudelson, M., Bolsinova, M., Attali, M., & Maris, G. (2018). Learning meets assessment: On the relation between item response theory and Bayesian knowledge tracing. *Behaviormetrika*. Preprint: https://arxiv.org/pdf/1803.05926

Díaz-Negrillo, A., Meurers, D., Valera, S., & Wunsch, H. (2010). Towards interlanguage POS annotation for effective learner corpora in SLA and FLT. *Language Forum, 36*(1–2), 139–154. http://purl.org/dm/papers/diaz-negrillo-et-al-09.html

Dickinson, M., & Ragheb, M. (2012). Defining syntax for learner language annotation. *COLING 2012*. https://aclanthology.org/C12-2094.pdf

Ellis, R. (2005). Principles of instructed language learning. *System, 33*(2), 209–224.

Ellis, R. (2006). Current issues in the teaching of grammar: An SLA perspective. *TESOL Quarterly, 40*(1), 83–107.

Fillmore, C. J., Kay, P., & O’Connor, M. C. (1988). Regularity and idiomaticity in grammatical constructions: The case of *let alone*. *Language, 64*(3), 501–538.

Fries, C. C. (1945). *Teaching and learning English as a foreign language*. University of Michigan Press. (CA materials claim, p. 9.)

Glaboniat, M., Müller, M., Rusch, P., Schmitz, H., & Wertenschlag, L. (2005). *Profile deutsch*. Langenscheidt / Council of Europe RLD for German. Overview: https://www.osd.at/en/profile-deutsch/overview-profile-deutsch/

Goldberg, A. E. (1995). *Constructions: A construction grammar approach to argument structure*. University of Chicago Press.

Hamp, B., & Feldweg, H. (1997). GermaNet — a lexical-semantic net for German. *Proceedings of ACL workshop on automatic information extraction and building of lexical semantic resources*.

Han, Z.-H. (2013). Forty years later: Updating the fossilization hypothesis. *Language Teaching, 46*(2). https://doi.org/10.1017/S0261444812000511

HHU. FrameNet-Konstruktikon des Deutschen. https://framenet-constructicon.hhu.de/project/about

Holec, H. (1981). *Autonomy and foreign language learning*. Pergamon / Council of Europe.

Krivanek, J., & Meurers, D. (2011). Comparing rule-based and data-driven dependency parsing of learner language. https://doi.org/10.5281/zenodo.8100424

Lado, R. (1957). *Linguistics across cultures: Applied linguistics for language teachers*. University of Michigan Press. Archive: https://archive.org/details/linguisticsacros0000lado

Lightbown, P. M. (2000). Anniversary article: Classroom SLA research and second language teaching. *Applied Linguistics, 21*(4), 431–462.

Long, M. H. (1991). Focus on form: A design feature in language teaching methodology. In K. de Bot et al. (Eds.), *Foreign language research in cross-cultural perspective* (pp. 39–52). John Benjamins.

Long, M. H. (1998). Focus on form in task-based language teaching. *University of Hawai‘i Working Papers in ESL, 16*(2), 35–49.

Lord, F. M. (1980). *Applications of item response theory to practical testing problems*. Erlbaum. ETS record: https://www.ets.org/research/policy_research_reports/publications/book/1980/jexj.html

Meurers, D. (2012/2019). Natural language processing and language learning. In C. A. Chapelle (Ed.), *The encyclopedia / concise encyclopedia of applied linguistics*. Wiley. https://sifnos.iwm-tuebingen.de/dm/papers/Meurers-19.pdf — ILTS vs ATICALL; robustness vs error-as-goal; LanguageTool not learner-designed.

Miller, G. A. (1995). WordNet: A lexical database for English. *Communications of the ACM, 38*(11), 39–41.

Naber, D. (2003). *A rule-based style and grammar checker* (Master’s thesis). Universität Bielefeld. LanguageTool origin.

Nakata, T. (2015). Effects of expanding and equal spacing on second language vocabulary learning. *Studies in Second Language Acquisition, 37*(4), 677–711. https://doi.org/10.1017/S0272263114000825

Nation, P. (2007). The four strands. *Innovation in Language Learning and Teaching, 1*(1), 2–13.

Pawley, A., & Syder, F. H. (1983). Two puzzles for linguistic theory: Nativelike selection and nativelike fluency. In J. C. Richards & R. W. Schmidt (Eds.), *Language and communication* (pp. 191–226). Longman. PDF: https://lextutor.ca/rt/pawley_syder_83.pdf

Qi, P., Zhang, Y., Zhang, Y., Bolton, J., & Manning, C. D. (2020). Stanza: A Python natural language processing toolkit for many human languages. *ACL 2020 system demonstrations*, 101–108. https://aclanthology.org/2020.acl-demos.14/

Rasch, G. (1960). *Probabilistic models for some intelligence and attainment tests*. Danish Institute for Educational Research.

Richards, J. C. (2008). *Moving beyond the plateau*. Cambridge University Press.

Roediger, H. L., III, & Karpicke, J. D. (2006). Test-enhanced learning. *Psychological Science, 17*(3), 249–255. https://doi.org/10.1111/j.1467-9280.2006.01693.x

Schmid, H., Fitschen, A., & Heid, U. (2004). SMOR: A German computational morphology covering derivation, composition and inflection. *LREC 2004*, 1263–1266. https://aclanthology.org/L04-1275/

Schmidt, R. W. (1990). The role of consciousness in second language learning. *Applied Linguistics, 11*(2), 129–158.

Selinker, L. (1972). Interlanguage. *IRAL, 10*(1–4), 209–232. https://doi.org/10.1515/iral.1972.10.1-4.209

Settles, B., & Meeder, B. (2016). A trainable spaced repetition model for language learning. *ACL 2016*. (Duolingo item scheduling, not a UD layer.)

Universal Dependencies. Guidelines and introduction. https://universaldependencies.org/

van Rooy, B., & Schäfer, L. (2002). The effect of learner errors on POS tag errors during automatic POS tagging. *Southern African Linguistics and Applied Language Studies, 20*(4). https://doi.org/10.2989/16073610209486319

Ziem, A., Flick, J., & Sandkühler, P. (2019). Constructicography at work: Implementation and application of the German Constructicon. *Yearbook of the German Cognitive Linguistics Association*. https://doi.org/10.1515/gcla-2019-0012

### Already in this repo (do not contradict)

[01-sla-adult-self-directed.md](./01-sla-adult-self-directed.md) — FonF, noticing, spacing-on-items, personalization, B1 plateau.

[03-mvp-activity-feasibility.md](./03-mvp-activity-feasibility.md) — 10–20 pieces; Noticing + Gap map; no drill carnival.

[08-b1-b2-german-content-sources.md](./08-b1-b2-german-content-sources.md) — own the corpus; generate-and-review; German copyright.

### Secondary pointers, not owners

Han (2013) updates Selinker fossilization. Rimrott & Heift (2008) on L2 spellcheck, cited via Meurers (2019). Nagata (2009) combinatorics of learner answers, cited via Meurers (2019). Lenat/Cyc as the cautionary “encode the world first” AI programme — analogy, not a linguistics result.

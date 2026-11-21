# Is a distinct linguistic / “language intelligence” layer useful?

**Ticket:** [.scratch/language-intelligence/issues/01-is-a-linguistic-layer-useful.md](../../.scratch/language-intelligence/issues/01-is-a-linguistic-layer-useful.md)  
**Date:** 2026-08-22  
**Scope:** Discovery only. No stack choice, no schema, no MVP spec, no application code. German is the language under discussion because that is Davio’s Target language. Whether that work transfers to another Target language: [19](19-other-languages.md).

Written for a senior engineer who is not a linguist. Factual claims cite the document or project that owns them. Recommendations are labelled as such.

**Product frame.** Parallel to the approved Gym sitting. This note asks whether *German itself* (lemmas, case, syntax, constructions) is a domain worth separating from UI, lessons, and the Learner’s Gap map — and whether that separation should become software.

## How to read this

**Load.** Start at **The one-paragraph answer**, then the companion-notes table. Open a companion only when that job is the ask.

Computational linguistics already has a representation for “what is in this sentence.” It is **Universal Dependencies (UD)**: tokens, lemmas, parts of speech, morphological features, and a dependency tree. UD is a *morphosyntactic* standard. It is not a teaching syllabus, not CEFR, not a catalogue of “grammar points,” and not a model of the Learner.

Three things are routinely conflated. Keeping them apart is the whole finding:

| Layer | Question it answers | Example |
| --- | --- | --- |
| **(A) Language representation** | What is true of German, independent of any user? | *Hund* is a masculine noun; *sehen* takes a nominative perceiver and an accusative perceived |
| **(B) Runtime analysis** | What structure does *this string* have? | In “Der kleine Junge sieht den großen Hund,” *den* is `DET`, `Case=Acc`, `Gender=Masc` |
| **(C) Pedagogical overlay** | What is worth this Learner noticing, at this Study band? | “Why *den*, not *dem*?” as a Noticing item; Gap-map chip for accusative of masculine definite article |

**(A)** is mostly already built by other people (lexica, UD guidelines, valency dictionaries). **(B)** is already built as ML/rule tools (spaCy, Stanza, LanguageTool). **(C)** is Davio’s actual product knowledge, and **nothing in (A) or (B) computes it.**

**Companion notes** (depth, not a second conclusion):

| Note | Job |
| --- | --- |
| [14 SLA / domain kinds](14-linguistic-learning-content-application-domains.md) | Grammaticality vs naturalness vs frequency vs pedagogy; interlanguage; why native parsers miss learner language; IRT/BKT/spacing as *learner* objects |
| [15 NLP tools](15-nlp-tools-german.md) | spaCy, Stanza, LanguageTool, morph analyzers, GEC, UDPipe — licences and German numbers |
| [16 lexica / CEFR artefacts](16-german-lexical-resources-corpora-cefr.md) | Wiktionary, Wikidata, UniMorph, GermaNet, corpora, Goethe lists, Profile Deutsch |
| [17 UD / German treebanks](17-universal-dependencies-german.md) | CoNLL-U, German morphology/syntax guidelines, treebanks, construction gap |
| [18 persist / interchange](18-linguistic-data-to-persist.md) | What CL actually stores; lookup vs local; CoNLL-U vs lexemes vs standoff; ATICALL overlay vs UI |
| [19 other Target languages](19-other-languages.md) | German notes as thinking vs a second Gym; sitting/UD interchange vs Gap map, corpus, approver |
| [20 Pattern catalog](20-gap-map-pattern-catalog.md) | Curated teaching Pattern ids; B1–B2 core + C1 appendix |
| [21 later Pattern sitting](21-pattern-practice-later-slice.md) | One-Pattern practice as a later slice: PI, not mechanical drills; grammar page as optional drawer |

---

## The one-paragraph answer

A distinct *conceptual* linguistic domain is real and useful: German’s morphology, lexicon, and syntax do not belong in the UI, and they do not belong in the Learner’s Gap map. A distinct *software platform* called “language intelligence” that owns tokens, lemmas, UD trees, constructions, CEFR tags, and pedagogical concepts as one ontology is over-engineering for a hobby Gym, and would still be the wrong shape for a later product. Adopt UD as the *vocabulary* for analyzed sentences if/when you analyze them; call existing analyzers; keep a small, curated list of teaching constructions in the learning/content domain; do not invent a German WordNet, parser, constructicon, or CEFR grammar tree.

---

## 1. How computational linguistics represents language

### 1.1 Morphology (form of words)

**Lemma** = the dictionary headword (*sehen*, *Hund*, *groß*). **Word form** = what appears in the sentence (*sieht*, *Hund*, *großen*). **Features** = the grammatical properties of that form (person, number, case, tense, mood, degree, definiteness). UD stores these as three fields on each syntactic word: `LEMMA`, `UPOS` (universal part of speech), `FEATS` (`Case=Acc|Gender=Masc|Number=Sing`). ([UD Morphology](https://universaldependencies.org/u/overview/morphology.html); [CoNLL-U format](https://universaldependencies.org/format.html))

UD lemmas **do not strip derivational morphology**: the lemma of English *organizations* is *organization*, not *organize*. Inflection is collapsed; derivation is kept. ([UD Morphology, Lemmas](https://universaldependencies.org/u/overview/morphology.html))

**German-specific facts the UD German guidelines own** ([UD for German](https://universaldependencies.org/de/index.html)):

- Four cases (`Nom`, `Gen`, `Dat`, `Acc`); three genders; number on nouns, adjectives, determiners, and finite verbs.
- “Case forms of nouns are extremely ambiguous and most of the time the case is distinguished only by the form of the article.” This is why “I noticed *dem*” is often more informative than “I noticed the noun’s case.”
- Contractions are **multi-word tokens**: *zum* = *zu* + *dem*. Compounds are **not** split (*Haustür* stays one word).
- Separable verb prefixes are a syntactic relation (`compound:prt`), not a morphological feature of the verb token alone.
- German UD **does not** use `Aspect` or `Voice` features, because perfect and passive are **periphrastic** (auxiliaries + participle: *wurde gegessen*), not a single inflected form. The passive is visible in the *tree* (`aux:pass`, `nsubj:pass`), not as `Voice=Pass` on one verb.
- Syncretism is normal: *der* can be masculine nominative or feminine dative/genitive. The feature bundle is disambiguated by context, not by the string.

**Syncretism** means two paradigm slots share a spelling. A tagger that outputs `Case=Nom` on *der* is making an analysis, not reading a label off the letters. That analysis can be wrong on messy or learner text.

**Inflection vs derivation, for architecture.** Inflection (*groß → großen*) is what UD `FEATS` is for. Derivation (*Lehrer → Lehrerin*, *sehen → unübersehbar*) and compounding are morphological processes that finite-state analyzers like SMOR were built to cover ([SMOR, Schmid et al.](https://cis.lmu.de/~schmid/tools/SMOR/)). A language-learning Gym almost never needs a full derivational analyzer. It needs: lemma, gender of nouns, and the inflectional features that Noticing cares about (case, adjective endings, verb position as syntax).

### 1.2 Syntax (how words relate)

Two families of sentence structure:

- **Constituency / phrase structure:** nested phrases (*[der [kleine Junge]]* is a noun phrase). Classic German treebanks TIGER and TüBa-D/Z started here.
- **Dependency:** each word except the root attaches to a **head** with a labelled relation (`nsubj`, `obj`, `det`, `amod`). UD chose dependencies. ([UD Introduction](https://universaldependencies.org/introduction.html))

A dependency tree answers: *who is the subject of *sieht*?* (*Junge*, `nsubj`); *what is the object?* (*Hund*, `obj`); *which adjective modifies *Hund*?* (*großen*, `amod`). It does **not** name a teaching construction such as “accusative of the direct object after *sehen*” or “verb-second in main clauses.” Those are patterns you *infer* from the tree plus lexical knowledge, or that you store separately.

**A German UD decision that surprises teachers.** Bare accusative objects are core (`obj`). Bare **dative and genitive** objects, and all prepositional objects, are **oblique** (`obl:arg`). “This means that verbs of giving are not ditransitive predicates in German UD, as they have one oblique dative argument and only one core object.” ([UD for German, Syntax](https://universaldependencies.org/de/index.html))

So *Ich gebe dem Kind den Ball* is **not** “two objects” in UD. Pedagogically it *is* a ditransitive / dative-object pattern. **UD labels ≠ DaF grammar labels.** Mapping between them is a product decision, not something the parser emits.

Verb-second and verb-final in subordinates are facts of German word order. UD encodes them only as the linear order of tokens plus attachment. There is no `V2=Yes` feature.

### 1.3 Lexical information

A **lexicon** stores facts about lemmas that are not computed from one sentence: gender of *Hund*, that *sehen* takes accusative, that *geben* takes dative recipient + accusative theme, sense distinctions (*Schloss* = castle vs lock), frequency, examples. UD treebanks contain *instances* of words in sentences; they are not a dictionary.

Valency (which complements a verb requires) is the missing piece between “this token is dative” and “this is the dative object of *geben*.” IDS Mannheim’s **E-VALBU** is an electronic valency dictionary of German verbs, originally aligned with the *Zertifikat Deutsch* word list, with sentence-pattern search. ([IDS VALBU / E-VALBU](https://www.ids-mannheim.de/gra/abgeschlosseneprojekte/valbu/); [LINDAT record](http://hdl.handle.net/11372/LRT-1162))

### 1.4 Grammatical constructions

**Construction Grammar** (Fillmore; Goldberg) treats a construction as a conventional pairing of form and meaning, from words up to patterns like the English *X let alone Y* or German *es gibt* + accusative. UD does not have a `CONSTRUCTION` field. The computationally native overlay is **UCxn**: construction tags in CoNLL-U `MISC` (`Cxn=…`), already on HDT from UD 2.15 for a small family (interrogatives, conditionals, existentials, NPN) — not DaF “weil-verb-final” ([UCxn](https://github.com/LeonieWeissweiler/UCxn); [17](17-universal-dependencies-german.md)). German constructicon work (Ziem & Boas; HHU FrameNet-Konstruktikon) is an academic programme, not a finished open database of teaching points.

**Recommendation (labelled).** For Davio, a “construction” should mean a **curated teaching object** (weil-verb-final, masculine accusative *den*, separable prefix, *es gibt* + Acc), stored in the learning/content domain, optionally *detected* later by rules over a UD/TIGER parse. Do not wait for a complete German constructicon, and do not treat UCxn’s five families as the Gap map.

### 1.5 Linguistic annotation

The interchange format is **CoNLL-U**: one word per line, ten tab-separated fields (`ID FORM LEMMA UPOS XPOS FEATS HEAD DEPREL DEPS MISC`), blank line between sentences. ([CoNLL-U format](https://universaldependencies.org/format.html))

UD’s own design goals include being “easily comprehended and used by a non-linguist, whether a language learner or an engineer” *and* being good for parsers and typology. Those goals pull in different directions; the result is a habitable compromise, not a teaching method. (de Marneffe et al. 2021, cited from [UD Introduction](https://universaldependencies.org/introduction.html))

### 1.6 Semantics (where relevant)

UD is morphosyntax. It does not encode word sense, semantic roles (Agent/Patient as FrameNet frames), entailment, or discourse beyond basic relations. Semantic role resources for German exist (SALSA was a German FrameNet-style effort; GermaNet is a WordNet-style synset network). None of these is needed to ship Noticing on owned texts. They become interesting only if you want “find all sentences where someone *gives* something to someone” independent of the verb chosen — a search problem, not a Gym-sitting problem.

---

## 2. Universal Dependencies and German treebanks

UD is an open community project: treebanks + guidelines for ~200 languages, released twice a year, requiring an **open license** (mostly Creative Commons). ([UD Introduction](https://universaldependencies.org/introduction.html); [universaldependencies.org](https://universaldependencies.org/))

Recommended starting tools on the UD site itself: Stanza or UDPipe to parse into UD; CoNLL-U as the file format.

### German treebanks (verified)

| Treebank | What it is | License (owning files) | Caution |
| --- | --- | --- | --- |
| **UD German-GSD** | Converted Google UD / TIGER-news / reviews / web; ~15k sentences | [CC BY-SA 4.0](https://github.com/UniversalDependencies/UD_German-GSD/blob/master/LICENSE.txt) | Older conversion; UD site notes some pre-UD annotation residue |
| **UD German-HDT** | Hamburg Dependency Treebank, heise.de 1996–2001; ~207k sentences converted | **Annotations** CC BY-SA 4.0; **text “can be distributed for academic use”** ([LICENSE.txt](https://github.com/UniversalDependencies/UD_German-HDT/blob/master/LICENSE.txt); [Hennig et al. HDT-UD](https://aclanthology.org/W19-8006/)) | Do not republish HDT text in a product. Training-data vs model-weight licensing is messy (see Stanza, below) |
| **UD German-PUD** | Parallel UD; 1k sentences; much of the German is **translationese** (via English) | **CC BY-SA 3.0** ([de_pud](https://universaldependencies.org/treebanks/de_pud/index.html)) | Entire treebank is a test set; not a learner corpus |
| **UD German-LIT** | Early Romantic fragments (~1.9k) | **CC BY-NC-SA 4.0** ([de_lit](https://universaldependencies.org/treebanks/de_lit/index.html)) | **Non-commercial.** Not contemporary standard German. Details: [17](17-universal-dependencies-german.md) |

**What treebanks are not.** They are overwhelmingly **edited native** German. They do not represent learner interlanguage, spoken disfluency, or Gym-authored B1–B2 narrative. A model trained on them will be strongest on similar news/web prose.

**Recommendation (labelled).** If Davio ever stores analyses, store **CoNLL-U** (or an equivalent JSON mapping of those ten fields). Do not invent a parallel tagset. If a tool emits TIGER dependencies (spaCy German does — see §4), either convert or record which scheme you stored. Do not mix `nsubj` and `sb` in one column.

---

## 3. Existing tools (evaluation)

Axes used below: what it provides; German; license / commercial; self-host; deterministic vs ML; hobby fit; .NET/Azure *integration reality* (not a stack decision).

### 3.1 spaCy (Explosion)

**Provides.** Tokenization, POS (STTS `XPOS` + UD `UPOS`), morphological features, lemmatization, dependency parse, sentence boundaries, NER on the `de_core_news_*` family. ([spaCy linguistic features](https://spacy.io/usage/linguistic-features); [German models](https://spacy.io/models/de))

**German quality (owning model card, `de_core_news_lg` 3.7.0).** POS 98.41, morph 92.06, lemma 97.91, UAS 92.66, LAS 90.78, NER F 84.85 — measured on the model’s news/TIGER-style evaluation, **not** on learner German. ([Hugging Face `spacy/de_core_news_lg`](https://huggingface.co/spacy/de_core_news_lg)) Transformer pipeline `de_dep_news_trf` is higher (POS 99.18, morph 97.01, LAS 94.74) and **has no NER**. ([`spacy/de_dep_news_trf`](https://huggingface.co/spacy/de_dep_news_trf))

**Critical format fact.** The German `parser` labels on `de_core_news_lg` are **TIGER** (`sb`, `oa`, `da`, `nk`, …), not UD (`nsubj`, `obj`, `obl`). Morphologizer features *are* UD-like. You do not get a UD tree “for free” from the default German spaCy models.

**License.** spaCy and the published German pipelines on Hugging Face: **MIT**. ([model card](https://huggingface.co/spacy/de_core_news_lg)) Underlying TIGER training corpus has its own academic-era terms; model *weights* are what Explosion ships as MIT. **Unknown if commercialising:** whether TIGER’s original licence constrains the weights. Hobby use of the MIT artifacts is the practical path.

**Self-host / ML.** Python, CPU-ok for `lg`; transformer model wants more RAM/GPU for speed. Not deterministic.

**.NET reality.** No first-class spaCy for .NET. Realistic pattern: Python HTTP/gRPC sidecar, or a batch job that writes CoNLL-U. ONNX Runtime has .NET bindings; exporting a *full* spaCy pipeline to ONNX is not Explosion’s supported product path (unverified as of this note — treat as “don’t bet the architecture on it”).

**Hobby.** Yes, as a library behind a fence, not as a platform.

### 3.2 Stanza (Stanford NLP Group)

**Provides.** End-to-end neural pipeline into **UD / CoNLL-U**: tokenize, MWT (*zum*), lemma, UPOS/XPOS/UFeats, dependency parse, NER. Explicitly UD-native. Python + PyTorch. ([Stanza overview](https://stanfordnlp.github.io/stanza/)) Apache 2.0 for the **software**.

**German quality (Stanza’s own table, v1.5.1, UD 2.12, end-to-end from raw text).** GSD: UPOS 95.61, UFeats 89.78, lemmas 97.23, UAS 85.80, LAS 81.80. HDT: UPOS 98.30, UFeats 92.57, UAS 95.59, LAS 93.56. ([Stanza performance](https://stanfordnlp.github.io/stanza/performance.html)) HDT looks “better” partly because HDT is huge and more consistent; it is still heise.de news, not learner text.

**License warning, owned by Stanza.** “License information for models built from the UD data is unclear, but users are encouraged to click on the git links below and check the license for the relevant data.” Language packs: ODC-By 1.0 *to the extent Stanford has rights*. ([same page](https://stanfordnlp.github.io/stanza/performance.html)) Combined with HDT’s **academic-only text**, this is not a clean commercial story.

**Hobby.** Excellent if you want UD out of the box. Heavier than spaCy `lg` (PyTorch). Same .NET sidecar pattern.

### 3.3 LanguageTool

**Provides.** Proofreading: spelling, grammar, style. **Rule-based** core (XML/Java rules), plus n-grams and, in the cloud product, AI rules. It flags *violations*, with rule IDs and suggested replacements. It does not produce a UD tree and does not name DaF constructions.

**License.** Core: **LGPL 2.1 or later**. ([GitHub languagetool-org/languagetool](https://github.com/languagetool-org/languagetool/)) Self-host via embedded HTTP server. Official caveat: self-host “will give you a basic LanguageTool server **without AI-based rules**. The AI-based rules are only available in the cloud.” ([HTTP server docs](https://dev.languagetool.org/http-server.html)) Maintainer: the downloadable server “lacks all the premium rules (several thousand rules for English, German, …) and AI-based rules.” ([issue #6750](https://github.com/languagetool-org/languagetool/issues/6750))

**German.** One of LanguageTool’s strongest languages (large volunteer rule set). Still a **native-style checker**, not a learner-error taxonomy. A B1 text can be grammatical and still be the wrong register, or ungrammatical in ways no rule covers.

**Hobby / .NET.** Best integration story of this list: Java process + HTTP, trivial from ASP.NET. LGPL: linking via HTTP is the usual interpretation that keeps your app’s licence independent (not legal advice). Do not copy-paste rule XML into a proprietary ontology without reading LGPL.

**What it is not.** GEC (grammatical error *correction* as a seq2seq rewrite of learner essays), CEFR tagging, or Noticing. Using it to validate *owner-authored* Gym texts for typos is in-scope. Using it as the Gap map is a category error.

### 3.4 German morphological analyzers

| Tool | Provides | License | Hobby/product |
| --- | --- | --- | --- |
| **SMOR** (Schmid / IMS Stuttgart) | Finite-state inflection + derivation + compounding | Free for **non-commercial** research/education; **commercial requires purchase** ([SMOR page](https://cis.lmu.de/~schmid/tools/SMOR/)) | Do not build the Gym on SMOR if a product path must stay open |
| **Zmorge** (Sennrich / Zurich) | SMOR-style grammar + Wiktionary-extracted lexicon | Lexicon **CC BY-SA 3.0**; grammar/scripts **GPL v2** ([Zmorge](https://pub.cl.uzh.ch/users/sennrich/zmorge/)) | Share-alike + GPL: copyleft. Fine to *study*; awkward as a hidden core of a later product |
| spaCy/Stanza morphologizers | Inflectional features on running text | See those tools | Prefer these for sentence analysis |

**Recommendation (labelled).** Do not integrate SMOR or Zmorge into Davio. If you need gender/lemma, use Wikidata lexemes / a small owned table / the analyzer you already call for (B).

### 3.5 Grammatical error correction (GEC)

English GEC is a mature shared-task field (BEA). German GEC is smaller and typically trained on **learner corpora** (Falko, MERLIN), not on LanguageTool rules. A native parser *assumes* something close to grammatical input; learner sentences need **target hypotheses** (what the learner probably meant) before native annotation applies — that is why Falko is annotated that way ([Falko Handbuch v2](https://www.linguistik.hu-berlin.de/de/institut/professuren/korpuslinguistik/forschung/falko/FalkoHandbuchV2)).

Davio v1 does not take learner writing as the job. **Do not train or wrap a GEC model.** If writing feedback ever appears, LanguageTool on the Learner’s output is a starting heuristic, not an interlanguage analysis.

### 3.6 Hugging Face / UDPipe / JVM

- **UDPipe:** library **MPL 2.0**, documented **C# bindings** — but ÚFAL’s packaged **models are CC BY-NC-SA** (non-commercial), even when the underlying GSD/HDT treebanks are CC BY-SA. Attractive for a .NET hobby, a trap if a product path must stay open. Details: [15](15-nlp-tools-german.md).
- **Hugging Face German token classifiers:** plenty of POS/NER models; each card has its own licence (often MIT/Apache *for weights*, training data varies).
- **Stanford CoreNLP:** Java; **GPL v3+** (commercial licence from Stanford). Avoid as product infrastructure. Stanza is the UD-era successor for multilingual parse.
- **OpenNLP:** Apache, Java; German models exist but are not the UD state of the art.

---

## 4. Lexica, corpora, frequency

### 4.1 Dictionaries and knowledge graphs

| Resource | Provides | License / commercial | Use for Davio? |
| --- | --- | --- | --- |
| **Wiktionary** (esp. de.wiktionary) | Gender, inflections, senses, examples, etymology — **human-readable wiki**, inconsistent structure | Dual **CC BY-SA 4.0 + GFDL**. Share-alike: derived *lexicon dumps* you ship may have to be SA. ([Wiktionary:Copyrights](https://en.wiktionary.org/wiki/Wiktionary:Copyrights)) | Parse dumps only with eyes open on SA. Prefer structured siblings |
| **Wikidata lexemes** | Structured lexemes, forms, grammatical features; dumpable | **CC0** on structured data in lexeme namespace ([Wikidata:Licensing](https://www.wikidata.org/wiki/Wikidata:Licensing); [dumps legal](https://dumps.wikimedia.org/legal.html)) | **Best “don’t invent a gender table” candidate** for a later lexicon. Coverage and quality for German forms need a dedicated check (unknown: completeness vs de.wiktionary) |
| **UniMorph `deu`** | Lemma–form–feature triples (~519k forms from English Wiktionary) | **CC BY-SA 3.0** ([unimorph/deu](https://github.com/unimorph/deu)) | Usable if share-alike is acceptable; not cleaner than Wikidata CC0. Details: [16](16-german-lexical-resources-corpora-cefr.md) |
| **GermaNet** (Tübingen) | German WordNet: synsets, semantic relations | Academic free with signed licence; **R&D and commercial are separate paid agreements**; academic licence **forbids distributing derived products** ([Tübingen licences](https://uni-tuebingen.de/en/faculties/faculty-of-humanities/departments/modern-languages/department-of-linguistics/chairs/general-and-computational-linguistics/ressources/lexica/germanet/licenses/); [academic PDF](https://hinrichs.sfs.uni-tuebingen.de/files/GermaNet/licenses/academic_license_20.0.pdf)) | **Do not build on GermaNet** for a hobby-with-product-path |
| **OpenThesaurus** | German synonyms | Free API with attribution + rate limits; DB dumps exist ([API terms](https://www.openthesaurus.de/about/api)) | Optional synonym help; not morphology |
| **DWDS** (BBAW) | Reference dictionary + corpora, excellent quality | Free interactive use; **BBAW reserves § 44b UrhG**; crawling/TDM/reuse of contents needs permission; web corpora research-only except a CC BY-SA blog corpus ([Nutzungsbedingungen](https://zwei.dwds.de/d/nutzungsbedingungen)) | **Look up, don’t ingest** |
| **Duden** | Commercial dictionary | Don’t scrape | Link-out at most |
| **E-VALBU** | Verb valency / Satzbaupläne | Online from IDS; LINDAT record exists; **commercial dump rights not verified here** | Consult as a human/authoring aid; don’t assume a redistributable DB |
| **Goethe-Zertifikat B1 Wortliste** | ~2400 lexical units exam-takers should know **at least receptively**; explicitly “weniger geeignet” for practising/fixing vocabulary; use course materials for that | **Copyright Goethe-Institut / ÖSD / Hueber** ([official PDF](https://www.goethe.de/pro/relaunch/prf/en/Goethe-Zertifikat_B1_Wortliste.pdf)). DWDS republishes entries with a copyright notice ([DWDS Goethe B1](https://www.dwds.de/lemma/wortschatz-goethe-zertifikat/B1)) | Orientation for authors. **Not** a shippable vocab engine |

### 4.2 Corpora, frequency, learner data

Frequency (Leipzig Wortschatz, dlexDB, SUBTLEX-DE, DeReKo) tells you **how often a form occurs in some collection**, not how hard it is, not its CEFR level, and not whether it is worth Noticing. High-frequency German articles are hard precisely because they are redundant (see [docs/research/01-sla-adult-self-directed.md](01-sla-adult-self-directed.md) on low-salience morphology).

**Learner corpora (the right evidence for “what B1 writers do,” not for Gym texts):**

- **MERLIN:** written learner German (also Czech, Italian) from standardised exams, **CEFR-rated by trained assessors**, error-annotated, **CC BY-SA 4.0**, ~2.3k texts / 340k tokens. ([merlin-platform.eu](https://merlin-platform.eu/C_about.php); [CLARIN handle](https://clarin.eurac.edu/repository/xmlui/handle/20.500.12124/6)) This is the honest German analogue of “CEFR-linked learner evidence.” It is **not** a vocabulary API.
- **Falko** (Humboldt): L2 German essays, target hypotheses, multi-layer annotation; searchable; raw data historically **non-commercial licence agreement**. ([Falko Handbuch v2](https://www.linguistik.hu-berlin.de/de/institut/professuren/korpuslinguistik/forschung/falko/FalkoHandbuchV2))

---

## 5. CEFR — what it is and is not

**Owning documents:** Council of Europe, *Common European Framework of Reference for Languages* (2001) and *CEFR Companion Volume* (2020). [PDF](https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4)

**Facts the Companion Volume owns:**

- The learner is a **social agent**. The approach is **action-oriented**.
- It is a **shift away from syllabuses based on a linear progression through language structures**, or a pre-determined set of notions and functions, toward needs analysis, real-life tasks, and **“can do” descriptors** rather than a deficiency list of what has not been acquired. (Companion Volume, §2.1 Aims)
- Subtitle order is *Learning, teaching, assessment*: “The CEFR is not focused on assessment.”
- Illustrative descriptors are **independent, stand-alone, not primarily for assessment, non-mandatory examples, not comprehensive.** (North/Goodier presentations of the Companion Volume, Council of Europe)
- Language-specific **Reference Level Descriptions (RLDs)** are *associated content specifications published separately* — not the CEFR itself. (Companion Volume §2.1, note 22)

Council of Europe language-policy text used the mirror metaphor: the Framework is “a mirror for reflection and **not a straitjacket** that users must fit into”; it is “a descriptive scheme and is not intended to be prescriptive.” ([Languages of schooling, CoE](https://rm.coe.int/16805c73d5))

**What “B1 German” therefore is not.** It is not a unique list of grammar rules or a unique 2400-word lexicon. Goethe’s B1 Wortliste is *one exam’s* receptive inventory, and the PDF says it is a poor tool for drilling vocab. Profile Deutsch (Glaboniat, Müller, Rusch, Schmitz, Wertenschlag; Goethe-Institut / ÖSD / Switzerland; Klett-Langenscheidt) **is** an RLD-style operationalization: Kannbeschreibungen **plus** vocab and grammar lists per level, sold as book+CD-ROM. ([Goethe on Profile Deutsch](https://www.goethe.de/de/spr/sbp/prd.html); [ÖSD overview](https://www.osd.at/das-oesd/profile-deutsch/ueberblick-profile-deutsch/)) It is a **published curriculum aid**, copyrighted, not an open API, and still “open and flexible,” not a law of German.

**English contrast.** The **English Vocabulary Profile** documents what learners *typically know* at each CEFR level from learner-corpus evidence (Cambridge). ([Capel, English Profile Journal](https://www.cambridge.org/core/journals/english-profile-journal/article/completing-the-english-vocabulary-profile-c1-and-c2-vocabulary/418955FC7ED2455E98A499BC40C2C816)) German has **no public equivalent** of EVP. Do not fake one by attaching A1–C2 tags to Wiktionary lemmas.

**Legitimate uses of CEFR in Davio (recommendation):**

- **Study band** as a reception target (already in `CONTEXT.md`): texts a B1–B2 user can mostly understand.
- Optional alignment of *activities* to can-do statements (“can understand the main points of…”).
- Exam wordlists as **authoring heuristics**, not as the Gap map.

**Illegitimate uses:** auto-tagging every token with a CEFR level; a skill tree named after CEFR grammar; treating Profile Deutsch lists as “the” German grammar.

---

## 6. Concepts that sit *above* the linguistic layer

These are learning-science / product objects. Putting them inside a parser or a UD feature column is a domain error.

| Concept | What it is | What it is not | Home |
| --- | --- | --- | --- |
| **Learning objective / can-do** | A communicative target (CEFR) | A UD relation; a grammar rule | Learning (and CEFR overlay) |
| **Proficiency** | What this person can do across tasks | Difficulty of one item; one sitting’s score | Learning |
| **Mastery / automatization** | Skill-acquisition: accurate *and* available under time pressure (DeKeyser SAT) | “Can explain the rule on a Grammar check” | Learning |
| **Learner error** | Evidence of **interlanguage** (Selinker), often systematic; Falko/MERLIN annotate it against a target hypothesis | LanguageTool flag; “German is `Case=Acc` here so the learner is wrong” | Learning (analysis of *learner* text is a different NLP problem than analysis of Gym texts) |
| **Spaced practice** | Memory: retrieval of **items** over time (Cepeda et al.; Roediger & Karpicke; Nakata on L2 vocab) | A property of “the dative case” as one card | Learning |
| **Activity selection / Focus on Form** | What to notice *in this text* (Schmidt, Long, Ellis) — see [01 SLA note](01-sla-adult-self-directed.md) | An NLP pipeline stage | Learning + application |
| **Personalization** | This Learner’s gaps and interests | An adaptive CEFR tree | Learning; still a hypothesis in `CONTEXT.md` |
| **Story / exercise / audio** | Content artifacts, with rights and editorial status (generated → reviewed → approved — [08 content note](08-b1-b2-german-content-sources.md)) | The linguistic analysis of their sentences | Content |
| **Sitting, UI, games** | How the Learner meets the content | German | Application |

**Grammaticality ≠ naturalness ≠ frequency ≠ comprehensibility ≠ learner difficulty ≠ pedagogical usefulness.** A sentence can be UD-perfect, rare, and useless for Noticing; or slightly marked, frequent, and perfect for a Gap-map probe. Only humans (or a separately trained pedagogical model) judge the last two.

---

## 7. Conceptual boundaries (recommendation)

```
┌─────────────────────────────────────────────────────────────┐
│ Application / presentation                                  │
│ sittings, phone UI, Orient, chips, later library            │
└──────────────────────────▲──────────────────────────────────┘
                           │ uses
┌──────────────────────────┴──────────────────────────────────┐
│ Learning                                                     │
│ Learner, Gap map, Noticing items, mastery, spacing,          │
│ activity choice, personalization                             │
└────────────▲───────────────────────────────▲────────────────┘
             │ tags / probes                 │ texts
┌────────────┴──────────────┐   ┌────────────┴────────────────┐
│ Linguistic (thin)         │   │ Content                       │
│ (A) facts about German    │   │ owned pieces, audio,          │
│ (B) optional analysis of  │   │ editorial state, purpose      │
│     a string (UD/TIGER)   │   │                               │
│ NOT: CEFR, constructions- │   │ constructions-as-taught live  │
│ as-taught, Gap map        │   │ here + in Learning            │
└───────────────────────────┘   └───────────────────────────────┘
```

**Steel-man for a fat “language intelligence” service.** One analyzer would feed generation, validation, exercise making, search (“all weil-clauses”), and progress. That is the architecture of a *content factory* or a research lab, not of a Gym with tens of owned texts.

**Attack.** (1) The Gym’s Noticing items can be authored by hand; they already must be, because pedagogical usefulness is not in the parse. (2) UD ≠ DaF constructions ≠ CEFR. (3) spaCy/Stanza quality numbers are on news, not on learner German or on Gym narrative. (4) Building a German constructicon is a multi-year academic project (Ziem & Boas). (5) Licence traps (HDT text, GermaNet, SMOR, Wiktionary SA, Goethe lists) make a “unified linguistic platform” a legal object, not just a code object. (6) Premature ontology is a known failure mode: you freeze the wrong distinctions (UD `obl:arg` vs “dative object”) into every screen.

**Recommendation.** Keep the **conceptual** split (linguistic facts ≠ learner ≠ content ≠ UI). Implement linguistic *software* only as a **replaceable analyzer adapter** when a concrete job appears (e.g. “validate that this owned sentence’s article features match the Noticing answer key,” or “search the corpus for masculine accusative *den*”). Until that job exists, author the key by hand.

---

## 8. What we should explicitly NOT build

| Do not build | Why |
| --- | --- |
| A new morphological analyzer / FST | SMOR/Zmorge/spaCy already exist; SMOR isn’t clean commercially |
| A new dependency parser | spaCy/Stanza/UDPipe exist |
| A German WordNet | GermaNet is licensed; OpenThesaurus covers casual synonyms |
| A universal linguistic ontology / “all grammatical concepts” graph | UD + a short curated construction list beat a homemade ontology |
| A CEFR-tagged German lexicon meant to rival EVP | German EVP does not exist; Goethe lists are copyright; CEFR is not a wordlist |
| A German constructicon | Academic, incomplete; curate 20–50 Gym constructions instead |
| A GEC / learner-writing model for v1 | Wrong job; Falko/MERLIN are research corpora |
| LanguageTool-as-Gap-map | Different object (native proofreading vs interlanguage vs Noticing) |
| Scrapers for DWDS / Duden / Goethe PDFs as a database | Rights; already documented for content in ticket 08 |
| Speech recognition / TTS as “linguistics” | Application services, separate licences |
| An invented learner-error taxonomy of convenience | Use MERLIN/Falko schemes if you ever annotate learner text |

---

## 9. .NET / Azure (facts, not a decision)

- Linguistic **libraries that matter are Python or Java**. A .NET-only NLP stack will be a worse parser, not a cleaner architecture.
- **LanguageTool** is the odd one that already speaks HTTP from Java.
- **spaCy/Stanza** as a sidecar (container) that returns CoNLL-U or JSON is the boring integration. That can live on the owner’s machine for a hobby and in a container later.
- Do not select Azure service SKUs in this discovery.

---

## 10. Unknowns that still need investigation

1. **Wikidata lexeme coverage for German** (forms, gender, comparatives) vs de.wiktionary — whether CC0 is actually enough to stop maintaining a gender table.
2. **E-VALBU redistribution** for a later product (online use vs dump).
3. **TIGER / spaCy model-weight** commercial cleanliness (legal, not linguistic).
4. **Stanza default German pack** which treebank it tracks, and whether that pack is usable if Davio commercialises.
5. **Pattern catalog** — decided: research-typical German teaching Patterns, not owner fossils. Owning list [20](20-gap-map-pattern-catalog.md). Not UCxn, not UD.
6. **Whether any analysis job will exist in the Gym** (auto-check of Noticing keys, corpus search, LLM-output validation). If none, the adapter can wait indefinitely.
7. **Profile Deutsch** as a purchased reference for the owner vs any attempt to encode it — licence of the CD-ROM database is not open.

---

## 11. Decisions that need the founder

1. **Is this track allowed to spend time while Gym-sitting dogfood is still the product test?** (This note assumed yes: parallel discovery.)
2. **If an analyzer is ever added, UD-out (Stanza/UDPipe) vs spaCy-TIGER-out?** Recommendation: prefer **UD as the stored scheme**; treat spaCy as an implementation that may need conversion.
3. **Copyleft appetite:** Wiktionary SA, Zmorge GPL, LanguageTool LGPL-via-HTTP — which are acceptable if a product appears?
4. **Is “validate LLM-drafted Gym texts linguistically” a job we want?** If yes, a thin (B) adapter earns its keep. If no (owner rewrites everything), skip analyzers.
5. **Gap map labels:** DaF-teacher terms (*Wem-Fall nach geben*) vs UD terms (`obl:arg` of `geben`). Recommendation: **DaF terms in the UI**; UD only in logs/storage if present at all.
6. **Another Target language** is a later product, not an architecture job now. Documented: [19](19-other-languages.md).

---

## Sources (fetched or first-party)

- Universal Dependencies: [introduction](https://universaldependencies.org/introduction.html), [CoNLL-U](https://universaldependencies.org/format.html), [morphology](https://universaldependencies.org/u/overview/morphology.html), [German](https://universaldependencies.org/de/index.html), [GSD licence](https://github.com/UniversalDependencies/UD_German-GSD/blob/master/LICENSE.txt), [HDT repo / licence](https://github.com/UniversalDependencies/UD_German-HDT), [HDT-UD paper](https://aclanthology.org/W19-8006/)
- spaCy: [linguistic features](https://spacy.io/usage/linguistic-features), [de models](https://spacy.io/models/de), [de_core_news_lg card](https://huggingface.co/spacy/de_core_news_lg), [de_dep_news_trf card](https://huggingface.co/spacy/de_dep_news_trf)
- Stanza: [overview](https://stanfordnlp.github.io/stanza/), [performance / licence note](https://stanfordnlp.github.io/stanza/performance.html)
- LanguageTool: [GitHub / LGPL](https://github.com/languagetool-org/languagetool/), [HTTP server](https://dev.languagetool.org/http-server.html), [premium vs self-host](https://github.com/languagetool-org/languagetool/issues/6750)
- SMOR: [cis.lmu.de](https://cis.lmu.de/~schmid/tools/SMOR/); Zmorge: [UZH](https://pub.cl.uzh.ch/users/sennrich/zmorge/)
- Wiktionary: [Copyrights](https://en.wiktionary.org/wiki/Wiktionary:Copyrights); Wikidata: [Licensing](https://www.wikidata.org/wiki/Wikidata:Licensing); [Wikimedia dumps legal](https://dumps.wikimedia.org/legal.html)
- GermaNet: [Tübingen licences](https://uni-tuebingen.de/en/faculties/faculty-of-humanities/departments/modern-languages/department-of-linguistics/chairs/general-and-computational-linguistics/ressources/lexica/germanet/licenses/)
- OpenThesaurus: [API](https://www.openthesaurus.de/about/api); DWDS: [Nutzungsbedingungen](https://zwei.dwds.de/d/nutzungsbedingungen)
- E-VALBU: [IDS](https://www.ids-mannheim.de/gra/abgeschlosseneprojekte/valbu/)
- CEFR Companion Volume (2020): [rm.coe.int PDF](https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4); [CoE “not a straitjacket”](https://rm.coe.int/16805c73d5)
- Profile Deutsch: [Goethe](https://www.goethe.de/de/spr/sbp/prd.html); [ÖSD](https://www.osd.at/das-oesd/profile-deutsch/ueberblick-profile-deutsch/)
- Goethe B1 Wortliste: [PDF](https://www.goethe.de/pro/relaunch/prf/en/Goethe-Zertifikat_B1_Wortliste.pdf)
- MERLIN: [about](https://merlin-platform.eu/C_about.php); [CLARIN](https://clarin.eurac.edu/repository/xmlui/handle/20.500.12124/6)
- Falko: [Handbuch v2](https://www.linguistik.hu-berlin.de/de/institut/professuren/korpuslinguistik/forschung/falko/FalkoHandbuchV2)
- English Vocabulary Profile: Capel, *English Profile Journal*
- Ziem & Boas (2017), *Towards a Constructicon for German*
- Prior Davio notes: [01 SLA](01-sla-adult-self-directed.md), [08 content](08-b1-b2-german-content-sources.md)

**Not fully verified in this pass:** OpenThesaurus dump licence beyond API terms; TIGER corpus vs spaCy weights; Wikidata German lexeme completeness; E-VALBU bulk licence. (UDPipe model NC-SA, UniMorph German CC BY-SA 3.0, PUD CC BY-SA 3.0, and LIT CC BY-NC-SA 4.0 are in [15](15-nlp-tools-german.md), [16](16-german-lexical-resources-corpora-cefr.md), and [17](17-universal-dependencies-german.md).)
# What linguistic data computational linguistics actually persists

Persistence / interchange annex to the language-intelligence synthesis ([hub](language-intelligence-domain.md)). Companions: [14](14-linguistic-learning-content-application-domains.md) (kinds of object), [15](15-nlp-tools-german.md) (tools), [16](16-german-lexical-resources-corpora-cefr.md) (lexica / CEFR artefacts), [17](17-universal-dependencies-german.md) (UD / German treebanks), [19](19-other-languages.md) (other Target languages).

**Date:** 2026-08-22  
**Scope:** What kinds of linguistic object existing projects store, in which interchange formats, and which of those objects are *looked up* vs *kept locally*. How ICALL/ATICALL systems attach analysis to learning content without treating the UI as the linguistic database.  
**This note is research, not an architecture or stack decision.** No database schema, no Azure SKUs, no invented taxonomy. Every factual claim traces to an owning page. Claims that could not be opened on the owner this session are marked **UNVERIFIED**.

This note is not legal advice. Licence implications are read from the deeds and owner pages cited.

**Audience:** a senior engineer who is not a linguist. Recommendations are labelled as such.

---

## How to read this

Four kinds of object are routinely dumped into one “linguistic database.” They are not the same persistence problem:

| Kind | Question | Typical interchange | Lookup vs local |
| --- | --- | --- | --- |
| **Language fact** | What is true of German with no Learner and no particular sentence? | Lexeme dumps, valency dictionaries, paradigm tables | Prefer **lookup** (or a *derived slice* you are allowed to keep) |
| **Analysis of a string** | What structure does *this* sentence have? | CoNLL-U; optionally standoff graphs | Local **only for texts you own** (or a parser call you do not archive as “German”) |
| **Pedagogical overlay** | What is worth this Learner noticing, in this Study band? | Not a UD column; a content/learning object | Local, **curated**, small |
| **Learner state** | What did *this person* mark, miss, or retrieve? | Not a treebank; not a lexicon | Local, **per Learner** |

A mixed sentence is several claims. “Store German” is not a storage requirement until you say which row.

**Recommendation (labelled).** Treat interchange formats as *contracts for a named job* (export a parse; query a lexeme; highlight a form on a page). Do not treat any of them as a product ontology.

---

## The one-paragraph answer

Computational linguistics already persists **sentence analysis** as CoNLL-U (Universal Dependencies’ interchange: ten tab-separated fields, blank line between sentences) and **reusable lexical facts** as lexeme/form/sense records or lemma–form–feature triples, queried or dumped from projects such as Wikidata and UniMorph. UD is for treebanks and parsers; it is not a curriculum, not CEFR, and not a constructicon. Construction tags (UCxn) and teaching points sit *beside* the tree, usually in `MISC` or in a separate overlay. ICALL splits in two: **ATICALL** analyses *authentic/native* text to enhance materials the learner did not write; **ILTS** analyses *learner* language. Visual Input Enhancement (WERTi / VIEW) highlights forms *in the page* with standoff-style annotation — the UI is a transform of someone else’s text, not the linguistic database. A learning app that copies a whole treebank, WordNet, morphology lexicon, or exam wordlist into its own store is duplicating a resource it does not own, often under a licence that forbids that.

---

## 1. Canonical morphosyntactic analysis as stored data

### 1.1 CoNLL-U (owner: UD format spec)

UD stores treebank sentences in **CoNLL-U**: UTF-8 NFC text, LF line breaks, three line types — **word lines** (ten fields, single tabs), **blank lines** as sentence boundaries (exactly one blank line after every sentence, including the last; empty sentences disallowed), and **`#` comments** only *before* the word lines of a sentence ([CoNLL-U format](https://universaldependencies.org/format.html)).

The ten fields, in order:

| # | Field | What is stored |
| --- | --- | --- |
| 1 | **ID** | Word index from 1; range (`1-2`) for a multiword token; decimal (`5.1`) for an empty node in the enhanced graph |
| 2 | **FORM** | Surface form or punctuation |
| 3 | **LEMMA** | Lemma or stem |
| 4 | **UPOS** | Universal POS (fixed inventory) |
| 5 | **XPOS** | Optional language-/treebank-specific tag, else `_` |
| 6 | **FEATS** | `Name=Value` pairs, `\|`-separated, alphabetically sorted; `_` if none |
| 7 | **HEAD** | Head word ID, or `0` for root |
| 8 | **DEPREL** | Universal (or language-specific subtype) relation to HEAD |
| 9 | **DEPS** | Optional **enhanced** graph: `head:rel` list (a graph, not necessarily a tree) |
| 10 | **MISC** | Anything else as a `\|`-separated list (`SpaceAfter=No`, glosses, treebank keys, …) |

From v2, every sentence must have exactly one `# sent_id = …` and one `# text = …` ([CoNLL-U format](https://universaldependencies.org/format.html)). `HEAD`+`DEPREL` must be a **tree**. `DEPS` is optional; if unused it is `_`. Morphosyntactic annotation applies to **syntactic words**; contractions are **multiword tokens** (range line holds the orthographic string; integer lines hold the syntactic words).

**What this is, as data.** One file is a sequence of analysed sentences. It is not a dictionary of lemmas. It is not a list of teaching constructions. `MISC` is an escape hatch (“any additional information that does not fit into any of the other fields, such as language-specific annotation, any information about other linguistic levels such as discourse”), not a second standard ([CoNLL-U format](https://universaldependencies.org/format.html)).

There is **no CEFR field**, no `CONSTRUCTION` field, and no learner-error taxonomy in the ten columns. `Typo=Yes` in `FEATS` is documented elsewhere as accidental misspelling, not nonnative grammar ([17](17-universal-dependencies-german.md); morphology overview cited there).

### 1.2 What UD says it is for (and is not)

Owner: [UD Short Introduction](https://universaldependencies.org/introduction.html).

UD “develops **treebanks**, collections of sentences annotated for word morphology and sentence syntax,” aiming at “cross-linguistically consistent treebanks, with the goal of facilitating **multilingual parser development, language analysis, psycholinguistics, and language typology**.” Data live in CoNLL-U. Treebanks must pass a validator and specify an open licence. Recommended starting tools for *using* UD include ArboratorGrew (query / hand-annotate), Stanza or UDPipe (parse plain text into UD), and `conllu` (read/write).

Six design dimensions UD tries to balance include linguistic analysis per language, typology, rapid human annotation, comprehension by a non-linguist (“whether a **language learner** or an engineer”), computer parsing accuracy, and downstream language-understanding tasks. “Language learner” here is a *reader of the annotation scheme*, not a claim that UD is a syllabus.

**What it is not (absence in the owning spec, not a slogan).** The introduction does not mention CEFR, DaF curricula, Gap maps, or constructicons as UD deliverables. Related projects (Universal PropBank, UMR, CorefUD, UCxn, UDer) are listed as *related*, not as CoNLL-U columns ([UD homepage](https://universaldependencies.org/); [17](17-universal-dependencies-german.md)).

**Layer.** A CoNLL-U sentence is **Analysis** of a string. A treebank as a collection is still analyses of strings, plus a licence on those strings. It is not a **Language** lexicon and not **Pedagogy**.

### 1.3 UCxn: construction tags in `MISC`

Owner: [UCxn README](https://raw.githubusercontent.com/LeonieWeissweiler/UCxn/main/README.md); paper [Weissweiler et al., LREC-COLING 2024](https://aclanthology.org/2024.lrec-main.1471/) ([PDF](https://aclanthology.org/2024.lrec-main.1471.pdf)).

UCxn is “an approach to annotating constructions as a **layer on top of UD**,” with Grew rules to infer tags. The paper’s explicit motive: UD annotates “the individual components of a construction … but not the larger whole: **there is no ‘interrogative clause’ label in UD**.”

**What is actually stored.** Keys in CoNLL-U `MISC`:

- `Cxn=…` on the syntactic head of the construction (possibly hierarchical names, e.g. `Interrogative-Polar-Direct`)
- `CxnElt=headId:Construction.Role` on construction elements

**What the case study covers — five families, ten languages (including German):** Interrogative, Existential, Conditional, Resultative, NPN (noun–adposition–noun with repeated noun). Not DaF “weil-verb-final,” not masculine accusative *den*, not separable-prefix teaching points. The authors define constructions **by function** for cross-linguistic comparison, then search UD trees for morphosyntactic strategies. They note some Constructicons (including German work, citing Ziem et al. 2019) “may select individual attestations from corpora to exemplify a construction”; UCxn instead labels **as many instances as possible** in the treebank.

**Does it replace CoNLL-U?** No. It **sits in `MISC`**. Official UD treebanks may incorporate it; the 2.13 release was input for the paper’s automatic annotations.

**Layer.** UCxn is still **Analysis** (a graph pattern on a treebank sentence), not a teaching object. Mapping UCxn families onto a Gym Gap map would be an explicit product mapping, not something the overlay emits.

### 1.4 Alternatives people confuse with UD

Each paragraph: what is stored, licence if obvious, replace vs beside CoNLL-U.

#### TIGER (IMS) — constituency/syntax graphs, TIGER-XML

Owner: [IMS TIGER corpus page](https://www.ims.uni-stuttgart.de/en/research/resources/corpora/tiger/); format: [TIGER-XML encoding](https://www.ims.uni-stuttgart.de/documents/ressourcen/werkzeuge/tigersearch/doc/html/TigerXML.html); academic licence: [TIGER academic licence](https://www.ims.uni-stuttgart.de/documents/ressourcen/korpora/tiger-corpus/license/htmlicense.html).

**Stored.** ~50,000 sentences / ~900,000 tokens of *Frankfurter Rundschau* newspaper, POS, syntactic structure, morphology and lemmas on terminals (v2.1/2.2). Delivery formats: **Negra export** (text; not for 2.2) and **TIGER-XML**. TIGER-XML is an XML *interface* format for TIGERSearch: corpus header (meta + feature declaration) plus body of **syntax graphs** — DAGs with a single root; terminals (`word`, `pos`, `morph`, …) and nonterminals (`cat`) listed separately; edges as explicit elements with labels such as `SB`, `OA`, `NK`, `HD` (the example sentence in the format walkthrough). That label inventory is **TIGER/Negra**, not UD `nsubj`/`obj`. IMS also ships a **CoNLL-2009 dependency** conversion of TIGER 2.2 (Tiger2Dep) as a *derived* resource on the same page — conversion, not identity.

**Licence (obvious from the academic deed).** Academic/educational licensees only; **non-commercial, non-profit research**; no changes to the corpus; acknowledge use; **do not disclose** the treebank to third parties except parts marked public and example sentences in publications; commercial use needs written agreement. Raw *Frankfurter Rundschau* text remains copyright of Druck- und Verlagshaus Frankfurt am Main GmbH. Commercial licence “under review” since Sept. 2020 (IMS page).

**Replace or beside?** **Beside.** German spaCy pipelines are trained on TIGER and emit TIGER-style deps (`sb`/`oa`), not UD trees ([15](15-nlp-tools-german.md)). Storing TIGER graphs next to UD CoNLL-U without conversion mixes two relation inventories.

#### ISO LAF / GrAF — standoff pivot, not a tagset

Owners: ISO catalogue abstract for [ISO 24612:2012](https://www.iso.org/standard/37326.html) (this session: ISO.org returned a Cloudflare interstitial; abstract also in the [CLARIN SIS LAF entry](https://standards.clarin.eu/sis/views/view-spec.xq?id=SpecLaf)); technical description in Ide’s LAF draft ([LAF.pdf](https://www.cs.vassar.edu/~ide/papers/LAF.pdf)) and the [iteh.ai ISO 24612 sample](https://cdn.standards.iteh.ai/samples/37326/769fb707977c40efbcd31dff39974e36/ISO-24612-2012.pdf) (sample of the standard, not a substitute for buying ISO).

**Stored.** An **abstract data model** plus XML serialization (**GrAF**) as a **pivot**: annotations of corpora, speech, video. **Stand-off:** annotation documents are separate from primary data; they point at character offsets / regions. Multiple annotation documents can overlay the same primary text (including overlapping hierarchies). GrAF: directed graph of nodes and edges; an annotation is a label plus optional feature structure on a node or edge. LAF “recommends representing each of the linguistic layers … in a separate annotation document for the purposes of exchange.” It does **not** standardise POS/dependency inventories (those are other ISO data-category work).

**Licence.** ISO standards are copyright-protected (the committee draft says so explicitly). Not an open dump.

**Replace or beside?** **Beside / underneath.** CoNLL-U is an **inline, word-per-line** treebank format. LAF/GrAF is a **standoff graph pivot** for merging and mapping formats. You might *transduce* CoNLL-U into GrAF; you do not replace UD’s tag inventory with LAF.

#### WebAnno / INCEpTION — annotation workbench, many export formats

Owners: [INCEpTION user guide (formats)](https://inception-project.github.io/releases/36.4/docs/user-guide.html) (Appendix A); [WebAnno TSV 3.2](https://webanno.github.io/webanno/releases/3.5.7/docs/user-guide.html); software licence [Apache 2.0](https://raw.githubusercontent.com/inception-project/inception/main/LICENSE.txt).

**Stored.** Internally: **UIMA CAS** (serialized in project export). What you *persist as interchange* depends on export: WebAnno TSV 3.x (header declares span/chain/relation layers; body: sentence-token id, **character offsets**, token, then feature columns), UIMA XMI / CAS JSON, **CoNLL-U** (`conllu` format id), brat, TEI, HTML, PDF (import), etc. CoNLL-U import/export in INCEpTION maps **built-in** layers only (POS, lemma, morph, dependency, text normalization). The guide is explicit: CoNLL-U **MISC is unused** on their mapping table; **custom layers** are not what CoNLL-U is for; some formats cannot encode stacked/overlapping spans.

**Licence (software).** Apache 2.0 on the INCEpTION codebase. That is not a licence on *your* annotated texts or on TIGER/UD data you import.

**Replace or beside?** **Beside.** INCEpTION is a **place to create** annotations and a **hub of formats**. CoNLL-U is one export among many, lossy for custom layers. Standoff offsets in TSV/XMI are the LAF-like pattern; CoNLL-U is the UD-shaped slice.

---

## 2. Reusable LANGUAGE facts (lexicon) vs sentence ANALYSIS

A **UD token** is an occurrence: this form, in this sentence, with this head, these features (an analysis that can be wrong under syncretism). A **lexicon record** is about a lemma (or lexeme) *across* sentences: gender, full paradigm, senses, valency. Mixing them is how products grow a fake “word table with CEFR and a parse.”

### 2.1 Wikidata lexicographical data

Owners: [Wikidata:Lexicographical data](https://www.wikidata.org/wiki/Wikidata:Lexicographical_data); data model [WikibaseLexeme Data Model](https://www.mediawiki.org/wiki/Extension:WikibaseLexeme/Data_Model); licence [Wikidata:Licensing](https://www.wikidata.org/wiki/Wikidata:Licensing) and [dumps.wikimedia.org/legal.html](https://dumps.wikimedia.org/legal.html); dumps [Wikidata:Database download](https://www.wikidata.org/wiki/Wikidata:Database_download); SPARQL [Wikidata:SPARQL query service](https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service) (lexeme examples live under the same query-examples tree, section “Lexeme queries”).

**What a lexeme record contains.** Since 2018 Wikidata stores **Lexemes (L), Forms (F), Senses (S)** — “words, phrases and sentences,” not Q-items for concepts. The conceptual model (not a file schema):

- **Lexeme:** id `L…`, **lemma** (multilingual text), **language** (Q-item), **lexical category** (Q-item), **statements** on the lexeme as a whole (the model’s editorial note: grammatical gender is typically a statement here), **forms**, **senses**.
- **Form:** id `L…-F…`, **representation** (spelling), **grammatical features** (Q-items, combinable, e.g. present + first person + plural), statements (audio, region, …).
- **Sense:** id `L…-S…`, **gloss** (natural-language definition, multilingual), statements (item for this sense, synonym, …).

Lemmas are **not unique**; two German nouns *See* (masculine lake vs feminine sea) are two lexemes because they differ in gender and forms.

**Licence.** “All structured data in the main, property and **lexeme** namespaces is made available under the Creative Commons **CC0** License (Public domain); text in other namespaces” is CC BY-SA 4.0 ([Wikidata:Licensing](https://www.wikidata.org/wiki/Wikidata:Licensing)). Wikimedia dump legal page repeats: structured data in main, Property, **Lexeme**, and EntitySchema is **CC0**; unstructured wiki text is BY-SA ([legal.html](https://dumps.wikimedia.org/legal.html)).

**Lookup vs shipping a closed lexicon.** First-party uses Wikidata documents:

1. **SPARQL** against WDQS (`query.wikidata.org`), including lexeme queries (`ontolex:sense`, `ontolex:lexicalForm`, `wikibase:lexicalCategory`, …).
2. **Dumps** — JSON (recommended), RDF, and dedicated **lexeme** Turtle/N-Triples (`lexemes` suffix). “These databases can be used for personal or **commercial** use, **backups or offline use**” ([Database download](https://www.wikidata.org/wiki/Wikidata:Database_download)).

Wikidata’s own pitch is reuse by “multiple tools and queries” and support for Wiktionary — **not** “this is your app’s shipped dictionary.” Offline/commercial reuse of **CC0 structured lexeme data** is in scope. Copying **BY-SA prose** (glosses you treat as wiki text, Wiktionary pages) is a different licence. Completeness of German senses/features is community-uneven ([16](16-german-lexical-resources-corpora-cefr.md)).

| Wikidata lexeme has, UD token does not | UD token has, lexeme record does not |
| --- | --- |
| Stable L/F/S ids; language and lexical category as Q-items; **senses/glosses**; statements (gender, examples, audio); **full form inventory** with feature bundles as items | **This sentence’s** `HEAD`/`DEPREL`/`DEPS`; linear order; `sent_id`/`text`; tokenisation decisions (`zum` as multiword token); contextual disambiguation of syncretic *der* |
| Independent of any one string | An analysis that can be wrong |

**Layer.** Lexeme = **Language**. Token row = **Analysis**.

### 2.2 E-VALBU (valency, online IDS)

Owners: [IDS VALBU / E-VALBU project](https://www.ids-mannheim.de/gra/abgeschlosseneprojekte/valbu/); online dictionary [grammis Verbvalenz / E-VALBU](https://grammis.ids-mannheim.de/verbvalenz) (DOI 10.14618/evalbu).

**What it stores (as a dictionary, not a parse).** IDS: a **didactically oriented valency dictionary of German verbs** — semantic and syntactic description of verbs and their environments, morphology/word-formation, passivizability, phraseology, style, examples. Print VALBU (Schumacher et al. 2004, Narr) selected **638 verbs** leaning on the *Zertifikat Deutsch* word list, aimed at DaF teachers and textbook authors. **E-VALBU** is not a page-scan of the book: examples checked against DeReKo, ~30 extra lemmas, GRAMMIS terminology (Komplemente, Satzbaupläne, Belegungsregeln). Grammis: “knapp 700” selected verbs; structure examples, sentence patterns, realisation rules; conjugation, passive, meaning, style, stress.

**Access pattern.** **Online lookup** on grammis (browse and filter). Grammis login copy: after login you can access “**rechtlich geschützte Korpusdaten**,” merklists, PDFs — i.e. some corpus material is rights-restricted even on the site.

**Redistribution.** **UNVERIFIED.** No dump deed, CC licence, or “you may ship a copy” statement was found on the IDS project page or the grammis dictionary landing page this session. Print VALBU is a Narr monograph (ordinary book copyright). Treat E-VALBU as an **authoring aid you query**, not as a file you ingest, until IDS publishes a redistribution licence.

**Layer.** Verb complementation patterns = **Language** (lexical). A UD `obj`/`obl:arg` on one token = **Analysis**. They are not interchangeable ([UD German](https://universaldependencies.org/de/index.html) on dative as oblique; hub / [17](17-universal-dependencies-german.md)).

### 2.3 UniMorph `deu`

Owners: [unimorph/deu README](https://raw.githubusercontent.com/unimorph/deu/master/README.md); schema [UniMorph site](https://unimorph.github.io/) and [Sylak-Glassman 2016 schema PDF](https://unimorph.github.io/doc/unimorph-schema.pdf); format discussion [McCarthy et al. 2020, UniMorph 3.0](https://aclanthology.org/2020.lrec-1.483/) ([PDF](https://aclanthology.org/2020.lrec-1.483.pdf)); sample rows from [the `deu` data file](https://raw.githubusercontent.com/unimorph/deu/master/deu).

**What it stores.** UniMorph’s goal: an inflected word is defined by **lemma** (lexical meaning) plus a **bundle of morphological features** from a universal schema ([unimorph.github.io](https://unimorph.github.io/)). UniMorph 3.0 describes a “regular, **three-column** format”; the CLI analyses a word-form into lemma + features. The `deu` file is TSV with **no header**: `lemma`, `form`, `features` (semicolon-separated), e.g. `Spanner	Spannern	N;DAT;MASC;PL`. German README: nouns, adjectives, verbs; source **English Wiktionary**; counts (noun lemmas 28 989, adjective 4 857, verb 6 810, inflectional forms 519 143).

That is **paradigm data** (type-level), not a sentence parse. Gender on nouns appears as a feature on forms (`N;NOM;MASC;SG`). UniMorph 3.0 also discusses **inherent** lexical features (e.g. noun gender) as separately extractable files in some languages — still lexicon, not syntax.

**Licence.** README: **CC BY-SA 3.0** ([deed](https://creativecommons.org/licenses/by-sa/3.0/)). Source is Wiktionary, so share-alike is the expected trap for a **derived closed** morphology table ([16](16-german-lexical-resources-corpora-cefr.md)).

**Lookup vs local.** The project ships **downloadable language repos** and a pip-installable tool that downloads and searches paradigms ([UniMorph 3.0](https://aclanthology.org/2020.lrec-1.483.pdf)). Shipping a local copy of `deu` is what the resource is *for*; shipping it inside a proprietary lexicon without BY-SA on the adaptation is the licence conflict.

---

## 3. Pedagogy as a separate overlay

### 3.1 Meurers: ATICALL vs ILTS (encyclopedia)

Owner: Meurers, “Natural Language Processing and Language Learning,” *Encyclopedia of Applied Linguistics* (Chapelle, ed.), author preprint [purl.org/dm/papers/meurers-13.pdf](https://purl.org/dm/papers/meurers-13.pdf) (card: [meurers-13.html](https://purl.org/dm/papers/meurers-13.html) / `http://purl.org/dm/papers/meurers-13.html`). Wiley’s typeset pages may differ; the preprint is what this session opened.

Two uses of NLP for language learning:

1. **Learner language** — “words, sentences, or texts produced by language learners”: ICALL tutoring, automated scoring, learner-corpus annotation. **Intelligent Language Tutoring Systems (ILTS)** “use NLP to provide individualized feedback to learners working on activities, usually … workbook-style exercises” (E-Tutor, Robo-Sensei, TAGARELA). The NLP goal is to identify how the response **diverges from expected targets** — errors are the *target* of analysis, not noise to gloss over (unlike general parsers).
2. **Native language for learners** — search and **enhanced presentation** of native reading material, examples from native corpora, generation of exercises from native materials. “In contrast to the ILTS side of ICALL … the NLP … is used to process native language in Authentic Texts, hence referred to as **ATICALL**.”

ATICALL is motivated by on-demand authentic text vs prefabricated textbooks. NLP for ATICALL is the native-text stack parsers were trained on; the open question is *which properties matter for learning*, not whether a news parser exists.

**Product translation (recommendation, labelled).** Davio’s Gym sitting on **owned published German** is ATICALL-shaped (analyse *the piece*, overlay Noticing). Analysing what the Learner *typed* would be ILTS and a different annotation scheme (MERLIN/Falko, not a native UD parse as a Gap map — [linguistics skill](../../.agents/skills/linguistics/SKILL.md) / [14](14-linguistic-learning-content-application-domains.md)).

### 3.2 Visual Input Enhancement of the Web (Meurers et al. 2010)

Owner: Meurers, Ziai, Amaral, Boyd, Dimitrov, Metcalf, Ott, “Enhancing Authentic Web Pages for Language Learners,” BEA 2010 ([ACL Anthology](https://aclanthology.org/W10-1002/); [PDF](https://aclanthology.org/W10-1002.pdf)). Later literature calls the international/browser-extension line **VIEW** (Visual Input Enhancement of the Web); this paper’s system name is **WERTi** (Working with English Real Texts interactively).

**What they actually built.** Learners **choose any web page** (search or URL). The system fetches it, finds text, **identifies targeted patterns**, **annotates the page**, then the browser **transforms** the annotated HTML into color highlighting, click-identification, or cloze — **keeping the page intact** (links, multimedia). Server NLP; client is a normal browser. Architecture: **UIMA**, “referential annotation,” “an NLP analysis counterpart to current **stand-off** encoding standards for annotated corpora (cf., e.g., Ide et al. 2000).” Enrichment is **monotonic** — original text stays, annotations accrue. That is the persistence idea: **offsets/annotations over someone else’s document**, not “the app owns English.”

Patterns in that paper are ESL (determiners, prepositions, gerund vs *to*-infinitive, *wh*-questions, conditionals, phrasal verbs). ATICALL precision > recall: unidentified instances are not harmful; false highlights are.

**ATICALL vs ILTS in this paper.** NLP in ILTS “needs to be able to handle learner language.” Visual input enhancement “makes use of NLP analysis of **authentic, native-speaker text**” — tools used on the language they were built for.

**What this is not.** A language-intelligence platform. A UD database. A constructicon. The linguistic knowledge is **pattern modules + NLP**; the learning content is **the web page the learner picked**; the UI is a **view**.

### 3.3 Goldberg / Fillmore: construction as form–meaning pairing vs UD tree

Owners opened this session:

- Goldberg (2019), *Explain Me This*, ch. 1 ([Princeton chapter PDF](https://assets.press.princeton.edu/chapters/s13271.pdf)): speakers “must learn the ways in which **forms and functions are paired**”; “These learned pairings of forms and functions are referred to here as **grammatical constructions**.”
- Weissweiler et al. 2024 ([PDF](https://aclanthology.org/2024.lrec-main.1471.pdf)): Construction Grammar takes the basic unit to be “a **pairing of form and meaning**” in which meaning-bearing units can have multiple parts, citing Fillmore, Kay, O’Connor (1988); Goldberg (1995, 2006); Fillmore et al. (2012); Croft (2001). A **Constructicon** is a network of such constructions. UD is “two layers: morphological … and syntactic … dependency tree.” Holistic constructions “are often not reflected in syntactic labels.”

**Fillmore, Kay, O’Connor 1988** (Language, “Let Alone”) is the usual owner for CxG’s early English case study. **UNVERIFIED this session:** the ACL Anthology id guessed for that paper resolved to a different 1988 ACL paper (Weir & Joshi on CCGs), not Fillmore. Do not treat that PDF as Fillmore. Cite Goldberg 2019 + UCxn’s citation of Fillmore et al. 1988 until the Language article is opened.

**Vs a UD tree.** A UD tree stores **grammatical relations among words** in one sentence (`nsubj`, `obj`, `obl`, …). A construction in the Goldberg/Fillmore sense is a **conventional pairing** that may span several words and is **identified by function** (or by a language-specific form). UCxn is the computational overlay that *names* some of those pairings **on top of** the tree. A DaF “weil-clause, verb final” teaching point is a **Pedagogy** object; it is not `DEPREL=mark` and not `Cxn=Conditional-…` unless you write the mapping.

### 3.4 CEFR Companion Volume: can-do, not a form list; no CEFR field in CoNLL-U

**CoNLL-U (opened):** the format spec lists ten fields and comment keys (`sent_id`, `text`, `newdoc`, `newpar`, …). None is CEFR, ILR, or “B1” ([format.html](https://universaldependencies.org/format.html)).

**Companion Volume owner URL:** [rm.coe.int/…/16809ea0d4](https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4). **UNVERIFIED this session:** fetch of that PDF timed out; `www.coe.int` descriptors page was Cloudflare-blocked. The reading that CEFR is **action-oriented can-do descriptors**, not a linear grammar/vocab syllabus, is owned by that volume and was opened for [16](16-german-lexical-resources-corpora-cefr.md). This note does not re-quote it without a fresh open.

**Layer.** Study-band can-do = **Pedagogy** / curriculum metalanguage. Not a feature on a lemma and not a CoNLL-U column.

---

## 4. Persistence patterns (conceptual, not schema)

What a learning app would be **duplicating** if it stored “its own copy of the whole resource” is the third column.

### (a) Lemma gender (*Hund* is masculine)

| | |
| --- | --- |
| **Kind** | **Language fact** (true with no Learner and no particular sentence). Not an analysis of a string; not a teaching point (though DaF cares about it). |
| **Typical interchange / resource** | Wikidata lexeme **statement** on the lexeme (CC0 structured data); UniMorph `deu` feature `N;…;MASC;…` (CC BY-SA 3.0, Wiktionary-derived); de.Wiktionary genus templates (BY-SA — [16](16-german-lexical-resources-corpora-cefr.md)). A UD `Gender=Masc` on one token is **Analysis** of that token in context (syncretism: the tagger guessed). |
| **Duplicating if you store the whole resource** | All of Wikidata lexemes, or all of UniMorph `deu`, or Wiktionary. For a Gym, the duplicate that matters is **a closed gender table of “all German nouns.”** **Recommendation (labelled):** look up or keep a **small owned table** of lemmas that appear in *your* pieces; do not ingest GermaNet or Duden ([SOURCE-LADDER](../../.agents/skills/linguistics/SOURCE-LADDER.md)). |

### (b) One sentence’s parse

| | |
| --- | --- |
| **Kind** | **Analysis of a string.** Judgement if you evaluate it: usually none until someone claims grammaticality — a parse is not a grammaticality verdict. |
| **Typical interchange / resource** | CoNLL-U (UD); TIGER-XML / Negra (TIGER); UIMA CAS / WebAnno TSV (workbench); parser output from Stanza/UDPipe/spaCy ([15](15-nlp-tools-german.md)). |
| **Duplicating if you store the whole resource** | A **treebank** (GSD, HDT, TIGER, …) or a **trained model** as if it were “the German grammar.” Storing CoNLL-U for **sentences you own and published** is storing *your* analyses (or a tool’s), not duplicating UD. Storing HDT/TIGER wholesale is duplicating a **licensed corpus** (see §5). |

### (c) “This is a weil-verb-final teaching point”

| | |
| --- | --- |
| **Kind** | **Pedagogical object** (Noticing / Gap-map / Activity overlay). Not a Language fact about *weil*; not a UD label; not UCxn’s five families. |
| **Typical interchange / resource** | None standard. Closest computational overlay is a **query over a parse** (WERTi-style pattern; Grew/UCxn-style graph pattern) **plus** a human-authored teaching name. Constructicon papers are background, not a dump ([hub](language-intelligence-domain.md) §1.4). |
| **Duplicating if you store the whole resource** | A **German constructicon** or “all UD constructions.” **Recommendation (labelled):** store the teaching point as **content/learning**, optionally with offsets into *your* sentence; detect later with rules. Do not wait for UCxn to grow *weil*-final. |

### (d) “This Learner marked a gap”

| | |
| --- | --- |
| **Kind** | **Learner state** (evidence about a person). Not German; not a parse; not a construction inventory. |
| **Typical interchange / resource** | ILTS learner models (Meurers encyclopedia: sequencing and learner-model updates from NLP on **learner** input). No linguistic interchange format owns this. MERLIN/Falko are **learner corpora** (other people’s exam scripts), not a Gym user’s Gap chip ([16](16-german-lexical-resources-corpora-cefr.md)). |
| **Duplicating if you store the whole resource** | A **learner corpus** or an IRT/BKT research dataset as if it were *this* user. Store the mark on the Learner/Activity; do not file it under `FEATS`. |

---

## 5. What not to persist as “the linguistic database”

Licence traps. Owner pages below. This is not a recommendation to pirate around them.

| Resource | Why it is a trap if you treat it as your DB | Owner |
| --- | --- | --- |
| **GermaNet** | Academic research licence: **non-commercial, non-profit**; **no distribution or marketing of derived products**; no making a substantial part public; no form that allows reconstructing original data; commercial use needs a separate agreement. WordNet-style synsets ≠ pedagogy. | [GermaNet](https://uni-tuebingen.de/en/142806); [academic licence 20.0 PDF](https://hinrichs.sfs.uni-tuebingen.de/files/GermaNet/licenses/academic_license_20.0.pdf) |
| **HDT text** | Annotations **CC BY-SA 4.0**; **“The text can be distributed for academic use.”** heise.de text is not a CC news dump for a commercial Gym corpus. | [UD_German-HDT LICENSE.txt](https://github.com/UniversalDependencies/UD_German-HDT/blob/master/LICENSE.txt); [HDT project](https://nats.gitlab.io/hdt/) |
| **SMOR** | “Freely available for **non-commercial** purposes such as research, education, and evaluation. Before using SMOR for **commercial** purposes, you must **purchase a licence**.” Morphology covering inflection, derivation, compounding + IMSLex stems. | [SMOR (Schmid / CIS)](https://cis.lmu.de/~schmid/tools/SMOR/) |
| **Wiktionary-derived lexica** | Original textual content **CC BY-SA** (and GFDL) — commercial use allowed **if** share-alike, attribution, no extra DRM blocking the licence ([dumps legal.html](https://dumps.wikimedia.org/legal.html)). A closed proprietary lexicon **adapted from** Wiktionary (or UniMorph `deu`, which is Wiktionary-sourced BY-SA) is the failure mode. CC0 Wikidata **structured lexemes** are the cleaner structured dump. | [legal.html](https://dumps.wikimedia.org/legal.html); [UniMorph deu](https://raw.githubusercontent.com/unimorph/deu/master/README.md) |
| **Goethe Wortliste** | Excerpt from Hueber *Zertifikat B1: Prüfungsziele, Testbeschreibung*; **© 2016 Goethe-Institut und ÖSD**. “Das Werk und seine Teile sind **urheberrechtlich geschützt**.” Any use other than statutory exceptions needs **prior written consent**. Explicit **§ 52a UrhG** note: neither the work nor parts may be stored and put on a network (including **intranets** of firms, schools, education institutions) without that consent. Reference-for-interested-parties, not a dump. | [B1 Wortliste PDF](https://www.goethe.de/pro/relaunch/prf/kk/Goethe-Zertifikat_B1_Wortliste.pdf) (Impressum / copyright pages) |
| **UDPipe models (NC)** | Software **MPL 2.0**; **linguistic models CC BY-NC-SA** (non-commercial); some models have extra conditions from training data. LINDAT service: “explicit written permission of the authors is required for any **commercial** exploitation.” | [ufal/udpipe README](https://raw.githubusercontent.com/ufal/udpipe/master/README.md); [LINDAT UDPipe info](https://lindat.mff.cuni.cz/services/udpipe/info.php) |

**TIGER** is in the same family as HDT text: academic treebank, newspaper copyright, not a Gym corpus ([academic licence](https://www.ims.uni-stuttgart.de/documents/ressourcen/korpora/tiger-corpus/license/htmlicense.html)).

**E-VALBU dump:** redistribution **UNVERIFIED** (§2.2). Online lookup ≠ a right to copy the dictionary into your database.

---

## How ICALL attaches analysis without making the UI the database

WERTi/VIEW and Meurers’ ATICALL write-up are the existence proof:

1. **Primary data stays primary data** — the web page, the authentic text, the owned Gym piece. UIMA/LAF-style **referential / standoff** annotation points at spans; the original string is not rewritten into a “linguistic CMS.”
2. **Analysis is a layer** — POS, chunks, pattern ids — computed for a **named job** (highlight prepositions; make a cloze). ATICALL accepts incomplete recall.
3. **Pedagogy is a transform** — color, click, gap — applied in the client from annotations. “Teacher knowledge” about *which* forms to enhance is **not** stored as extra CoNLL-U columns in the page; it is module configuration (Meurers et al. 2010; encyclopedia ATICALL vs DDL).
4. **ILTS is a different pipeline** — learner strings, expected targets, feedback, learner model. Do not reuse a native parse as that model.

**Recommendation (labelled).** If Davio stores analysis at all: CoNLL-U (or a throwaway parser call) **on owned Gym sentences**; Noticing keys as **content objects** with offsets; gender/valency as **lookup**; Learner marks as **learner state**. That is the WERTi shape scaled down to a 10–20 piece corpus, not a language platform.

---

## Recommendations (labelled, not a build)

1. **Use CoNLL-U as the interchange for sentence analysis** if/when you analyse owned text. Do not extend it with CEFR or Gap-map fields; use `MISC` only for documented overlays (e.g. UCxn) or private keys you do not pretend are UD.
2. **Look up language facts** (Wikidata lexemes CC0; E-VALBU in the browser; UniMorph only if you accept BY-SA). Keep a **tiny owned table** for lemmas in published pieces rather than a private WordNet.
3. **Keep teaching constructions in the learning/content domain.** UCxn’s five families are not the Gap map.
4. **Do not ingest** GermaNet, HDT/TIGER text, SMOR for a later commercial product, Wiktionary/UniMorph as a closed lexicon, Goethe lists as a database, or UDPipe NC models for commercial parsing — unless the deed you re-read that day says otherwise.
5. **Do not build a linguistic database that is the UI.** Attach analysis to **owned strings** (standoff or CoNLL-U beside the piece). The sitting is Application; German is Language; the parse is Analysis; the chip is Learner or Pedagogy.

---

## UNVERIFIED / fetch failures this session

- **CEFR Companion Volume PDF** and CoE descriptors HTML (timeout / Cloudflare). Owner URL recorded; body not re-quoted here.
- **ISO 24612:2012** full text on iso.org (Cloudflare). Description from Ide LAF draft, CLARIN SIS, iteh.ai sample, and ISO catalogue abstract.
- **E-VALBU / grammis redistribution deed.** No dump licence found.
- **Fillmore, Kay, O’Connor 1988** full text (wrong ACL PDF resolved). Goldberg 2019 chapter and UCxn’s citations used instead.
- **Wikidata German lexeme counts** (not counted).
- **UCxn on official UD German-HDT in a given release** — paper uses UD 2.13 + Grew; incorporation into official releases is encouraged, not verified here per treebank file.

---

## Sources (owners)

- https://universaldependencies.org/format.html  
- https://universaldependencies.org/introduction.html  
- https://universaldependencies.org/  
- https://raw.githubusercontent.com/LeonieWeissweiler/UCxn/main/README.md  
- https://aclanthology.org/2024.lrec-main.1471.pdf  
- https://www.ims.uni-stuttgart.de/en/research/resources/corpora/tiger/  
- https://www.ims.uni-stuttgart.de/documents/ressourcen/werkzeuge/tigersearch/doc/html/TigerXML.html  
- https://www.ims.uni-stuttgart.de/documents/ressourcen/korpora/tiger-corpus/license/htmlicense.html  
- https://www.iso.org/standard/37326.html  
- https://www.cs.vassar.edu/~ide/papers/LAF.pdf  
- https://standards.clarin.eu/sis/views/view-spec.xq?id=SpecLaf  
- https://inception-project.github.io/releases/36.4/docs/user-guide.html  
- https://webanno.github.io/webanno/releases/3.5.7/docs/user-guide.html  
- https://raw.githubusercontent.com/inception-project/inception/main/LICENSE.txt  
- https://www.wikidata.org/wiki/Wikidata:Lexicographical_data  
- https://www.mediawiki.org/wiki/Extension:WikibaseLexeme/Data_Model  
- https://www.wikidata.org/wiki/Wikidata:Licensing  
- https://dumps.wikimedia.org/legal.html  
- https://www.wikidata.org/wiki/Wikidata:Database_download  
- https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service  
- https://www.ids-mannheim.de/gra/abgeschlosseneprojekte/valbu/  
- https://grammis.ids-mannheim.de/verbvalenz  
- https://raw.githubusercontent.com/unimorph/deu/master/README.md  
- https://unimorph.github.io/  
- https://unimorph.github.io/doc/unimorph-schema.pdf  
- https://aclanthology.org/2020.lrec-1.483.pdf  
- https://raw.githubusercontent.com/unimorph/deu/master/deu  
- https://purl.org/dm/papers/meurers-13.pdf  
- https://aclanthology.org/W10-1002.pdf  
- https://assets.press.princeton.edu/chapters/s13271.pdf  
- https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4  
- https://uni-tuebingen.de/en/142806  
- https://hinrichs.sfs.uni-tuebingen.de/files/GermaNet/licenses/academic_license_20.0.pdf  
- https://github.com/UniversalDependencies/UD_German-HDT/blob/master/LICENSE.txt  
- https://nats.gitlab.io/hdt/  
- https://cis.lmu.de/~schmid/tools/SMOR/  
- https://www.goethe.de/pro/relaunch/prf/kk/Goethe-Zertifikat_B1_Wortliste.pdf  
- https://raw.githubusercontent.com/ufal/udpipe/master/README.md  
- https://lindat.mff.cuni.cz/services/udpipe/info.php  
- https://creativecommons.org/licenses/by-sa/3.0/  
- https://creativecommons.org/licenses/by-nc-sa/4.0/  
- https://creativecommons.org/licenses/by-sa/4.0/legalcode  

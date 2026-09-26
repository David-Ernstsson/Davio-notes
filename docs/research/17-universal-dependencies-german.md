# Universal Dependencies, German morphology/syntax, and the construction gap

UD / treebank annex to the language-intelligence synthesis ([hub](language-intelligence-domain.md)).

**Date:** 2026-08-22  
**Scope:** What Universal Dependencies (UD) actually annotates, how that maps to German, which German treebanks exist in the current UD release, how related standards differ, and what is still missing if a language-learning product used UD as an *internal sentence representation*.  
**This note is research, not an architecture or stack decision.** It does not invent a linguistic taxonomy. Every factual claim below traces to a source that owns it.

**Current UD release used below:** UD 2.18 (15 May 2026), as stated on the UD homepage and on each German treebank hub page ([universaldependencies.org](https://universaldependencies.org/); [de_gsd](https://universaldependencies.org/treebanks/de_gsd/index.html)).

---

## How to read this

UD is a **morphosyntactic annotation standard**: parts of speech, inflectional features, and typed head–dependent links. It is not a curriculum, not a constructicon, and not a semantic theory. A senior engineer can treat a UD sentence as a **graph over words** plus a **feature bundle per word**. That is useful. It is also a different object from “the dative after *geben*,” “verb-second,” or “B1 grammar.”

Davio-relevant gaps are called out in §7. They are product implications, labeled as such; they are not extra UD features.

---

## 1. What UD actually is

### Official definition

UD’s own homepage: “Universal Dependencies (UD) is a framework for consistent annotation of grammar (parts of speech, morphological features, and syntactic dependencies) across different human languages.” It is “an open community effort with over 600 contributors producing over 200 treebanks in over 150 languages” ([UD homepage](https://universaldependencies.org/)).

The short introduction (UD version 2): the project “develops treebanks, collections of sentences annotated for word morphology and sentence syntax, for many languages. It seeks to build cross-linguistically consistent treebanks, with the goal of facilitating multilingual parser development, language analysis, psycholinguistics, and language typology.” After “over a decade of development, UD provides treebanks and annotation guidelines (of varying size and quality) for nearly 200 human languages.” “The general philosophy of UD is to propose a universal inventory of categories and guidelines to facilitate consistent annotation of similar constructions across languages, while allowing for typological differences and using language-specific extensions when necessary.” UD “adopts a dependency representation of syntax, marking dependents of head words,” is “a lexicalist framework that differentiates morphology from syntax, and it emphasizes dependencies between content words to increase crosslinguistic parallelism” ([UD Short Introduction](https://universaldependencies.org/introduction.html)).

The same page lists six design dimensions UD tries to balance: linguistic analysis per language; typology; rapid consistent human annotation; comprehension by non-linguists; computer parsing accuracy; downstream language-understanding tasks ([UD Short Introduction](https://universaldependencies.org/introduction.html)).

The owning theory paper: de Marneffe, Manning, Nivre, and Zeman (2021), *Computational Linguistics* 47(2). Abstract: UD is “a framework for morphosyntactic annotation of human language”; “Grammatical relations between words are centrally used to explain how predicate–argument structures are encoded morphosyntactically in different languages while morphological features and part-of-speech classes give the properties of words” ([ACL Anthology 2021.cl-2.11](https://aclanthology.org/2021.cl-2.11/); [PDF](https://aclanthology.org/2021.cl-2.11.pdf)).

### The problem it solves

Cross-lingual **consistent** morphosyntactic annotation: the same inventory of POS tags, features, and dependency relations, so that (for example) a passive with a demoted agent can be labeled `nsubj:pass` / `obl` in English, Bulgarian, Czech, Swedish, and Kʼicheʼ even when the surface realization differs ([UD Short Introduction](https://universaldependencies.org/introduction.html), parallel examples).

Treebanks “are minimally required to conform to the UD technical standard as enforced by the validator script, and to specify an open license (most data has a Creative Commons license).” Releases are a twice-yearly “bundle of all the conformant treebanks” ([UD Short Introduction](https://universaldependencies.org/introduction.html)).

### CoNLL-U: the ten fields

UD stores data in **CoNLL-U**: UTF-8 text, one word per line, ten tab-separated fields, blank line between sentences, `#` comments before a sentence ([CoNLL-U format](https://universaldependencies.org/format.html)).

| # | Field | What it is |
| --- | --- | --- |
| 1 | **ID** | Word index (1, 2, 3…); a range (`1-2`) for a multiword token; a decimal (`5.1`) for an empty node used in enhanced graphs |
| 2 | **FORM** | Surface word form or punctuation |
| 3 | **LEMMA** | Lemma or stem of the word form |
| 4 | **UPOS** | Universal part-of-speech tag (fixed inventory of 17 tags) |
| 5 | **XPOS** | Optional language- or treebank-specific tag; `_` if unused |
| 6 | **FEATS** | Morphological features as `Name=Value` pairs, `|`-separated, alphabetically sorted; `_` if empty. Multiple values allowed: `Case=Acc,Dat` |
| 7 | **HEAD** | Head word’s ID, or `0` for the sentence root |
| 8 | **DEPREL** | Universal dependency relation to HEAD (or a language-specific subtype `rel:subtype`) |
| 9 | **DEPS** | Optional **enhanced** dependency graph: list of `head:rel` pairs (a graph, not necessarily a tree) |
| 10 | **MISC** | Anything else, `|`-separated (`SpaceAfter=No`, `Typo=Yes`, glosses, treebank-specific keys, …) |

Compulsory sentence comments in v2: `# sent_id = …` and `# text = …` ([CoNLL-U format](https://universaldependencies.org/format.html)).

**Words vs tokens.** Morphosyntactic annotation applies to **syntactic words**. Contractions are **multiword tokens**: a range line holds the orthographic token (`zum`); the following integer lines hold the syntactic words (`zu`, `dem`) with lemmas, POS, features, and heads. Empty nodes exist only in the enhanced graph (ellipsis) ([CoNLL-U format](https://universaldependencies.org/format.html); [Tokenization](https://universaldependencies.org/u/overview/tokenization.html)).

**Basic vs enhanced syntax.** HEAD+DEPREL must form a **tree**. DEPS may add extra edges (e.g. shared subjects in coordination) and is then a **graph**. If a treebank has no enhanced layer, DEPS is `_` ([CoNLL-U format](https://universaldependencies.org/format.html); [Syntax overview](https://universaldependencies.org/u/overview/syntax.html)).

### What UD does **not** represent (as first-class objects)

These absences are by design of the morphosyntax-only standard, not oversights to “fix” inside UPOS/DEPREL.

| Not a native UD type | What UD actually has | Source |
| --- | --- | --- |
| **Lexical / compositional semantics** (who did what to whom as roles like Agent/Theme; word sense; frames) | Grammatical relations (`nsubj`, `obj`, `obl`, …) that are a “middle ground” between surface coding and “underlying semantic predicate–argument structure,” not FrameNet/PropBank roles ([de Marneffe et al. 2021](https://aclanthology.org/2021.cl-2.11.pdf) §2.3.1). Enhanced deps are “a more complete basis for semantic interpretation,” still dependency edges, not a meaning language ([Syntax overview](https://universaldependencies.org/u/overview/syntax.html)). The homepage lists **Universal PropBank**, **UMR**, **CorefUD** as *related* projects, not as UD columns ([UD homepage](https://universaldependencies.org/)). |
| **Grammatical constructions as catalogued objects** (passive, *weil*-clause, ditransitive *geben*, modal-particle patterns) | Token+dependency graphs. Named constructions are a **separate overlay** (UCxn), listed as related ([UD homepage](https://universaldependencies.org/); [UCxn README](https://raw.githubusercontent.com/LeonieWeissweiler/UCxn/main/README.md)). |
| **Pedagogy / CEFR / “this is a B1 item”** | Not in the UD guidelines, CoNLL-U spec, or German UD pages fetched for this note. **Unverified as an explicit “UD does not do CEFR” sentence** — it is an absence: no CEFR field exists in [CoNLL-U](https://universaldependencies.org/format.html) or [German UD](https://universaldependencies.org/de/index.html). |
| **Learner errors as an error taxonomy** | Optional `Typo=Yes` for “clear accidental misspellings,” with an instruction **not** to use it for “nonnative grammar” ([Morphology overview](https://universaldependencies.org/u/overview/morphology.html)). German UD treebanks are native/edited text (see §4). |
| **Discourse structure** (RST, coherence relations, information structure beyond a couple of relation types) | `discourse` is a **word-level** relation (“discourse element”); `parataxis` is side-by-side clauses without explicit coordination/subordination ([Universal relations](https://universaldependencies.org/u/dep/index.html); [de Marneffe et al. 2021](https://aclanthology.org/2021.cl-2.11.pdf) §3.3.3). MISC *may* store “information about other linguistic levels such as discourse” if a treebank chooses to ([CoNLL-U format](https://universaldependencies.org/format.html)) — that is an escape hatch, not a discourse standard. |
| **Derivational morphology as a graph** (Lehrer → Lehrerin) | Lemma keeps derivation; UD does not strip it. Derivational *networks* are a related project (**UDer**), listed on the homepage, not a CoNLL-U column ([Morphology overview](https://universaldependencies.org/u/overview/morphology.html); [UD homepage](https://universaldependencies.org/)). |
| **Morpheme segmentation** | “there is no attempt at segmenting words into morphemes” ([Tokenization](https://universaldependencies.org/u/overview/tokenization.html)). Optional MISC `MSeg` / `MGloss` exist for interlinear-style segmentation if a treebank adds them ([CoNLL-U format](https://universaldependencies.org/format.html)). |
| **Internal structure of German compounds** | “German compounds are written as one word and we do not split them” ([German UD](https://universaldependencies.org/de/index.html)). |

---

## 2. Morphology in UD

### Lemma vs word-form vs feature bundle (plain language)

UD’s morphological specification of a syntactic word has **three levels** ([Morphology overview](https://universaldependencies.org/u/overview/morphology.html)):

1. **LEMMA** — the dictionary / canonical form. “If a language is agglutinative, this is typically the form with no inflectional affixes; in fusional languages, the lemma is usually the result of a language-particular convention.”
2. **UPOS** — one of 17 abstract lexical categories (NOUN, VERB, DET, …). Not mixed with language-specific tags (those go in XPOS).
3. **FEATS** — a **bundle** of `Name=Value` properties of **this word form** (and some lexical properties of the lemma), e.g. `Case=Nom|Gender=Masc|Number=Sing`.

Engineer’s picture: `FORM` is the string in the sentence; `LEMMA` is the lookup key; `FEATS` is the inflectional (and some lexical) coordinates of that form; `UPOS` is the coarse word class.

**Inflection vs derivation.** “The lemma does not remove derivational morphology, so the lemma of [en] organizations is organization not organize (nor organ)” ([Morphology overview](https://universaldependencies.org/u/overview/morphology.html)). So:

- **Inflectional** variation (der / dem / den; gehe / gehst / ging) is the same lemma plus different FEATS (and sometimes different FORM).
- **Derivational** pairs (*Lehrer* vs *Lehrerin*, *schön* vs *Schönheit*) are **different lemmas**. UD does not encode “X is derived from Y” in the ten columns. That is what related resources such as UDer target ([UD homepage](https://universaldependencies.org/) lists UDer).

Features may be **lexical** (noun gender: all forms of one lemma share it) or **inflectional** (adjective gender agreeing with a noun) ([Morphology overview](https://universaldependencies.org/u/overview/morphology.html)).

**Syncretism.** Homonymous forms are disambiguated **by context** when the treebank chooses a single slot: Czech *píseň* is Nom or Acc and “has to be disambiguated by context.” Alternatively CoNLL-U allows **underspecification**: `Case=Acc,Dat` means “one of these, we cannot decide.” Multivalues “should be used sparingly” and must not be the entire value space ([Morphology overview](https://universaldependencies.org/u/overview/morphology.html); [CoNLL-U format](https://universaldependencies.org/format.html)). German-specific consequence is in the next subsection.

### German-relevant features (from German UD, not a homemade list)

German UD documents these (UD v2) ([German UD](https://universaldependencies.org/de/index.html)):

**Nominal**

- **Gender:** `Masc`, `Fem`, `Neut` on NOUN, PROPN, PRON (inherent). ADJ, DET, and participles (VERB/AUX) inflect for Gender to agree. Finite verbs do not.
- **Number:** `Sing`, `Plur` on NOUN, PROPN, PRON, ADJ, DET, VERB, AUX.
- **Case:** `Nom`, `Gen`, `Dat`, `Acc` on NOUN, PROPN, PRON, ADJ, DET. “Case forms of nouns are extremely ambiguous and most of the time the case is distinguished only by the form of the article.”
- **Definite:** `Ind`, `Def` on articles (DET).

**Degree / polarity**

- **Degree:** `Pos`, `Cmp`, `Sup` on ADJ and ADV.
- **Polarity:** `Neg` on the particle *nicht*.

**Verbal**

- **VerbForm:** Infinitive `Inf`; finite `Fin`; participle `Part`; verbal noun `Vnoun` (capitalized infinitive with article, tagged NOUN).
- **Mood** (finite): `Ind`, `Imp`, `Sub` (Konjunktiv).
- **Tense:** `Past`, `Pres` on indicative/subjunctive and to distinguish present vs past participles (*kommend* vs *gekommen*). Imperative has no Tense. In subjunctive, Tense distinguishes Konjunktiv I (`Pres`) vs II (`Past`).
- **Aspect** and **Voice** “are not used in German because both the perfect aspect and the passive voice are expressed periphrastically.”

**Pronouns / determiners**

- **PronType**, **NumType**, **Poss**, **Reflex**, **Person** (`1`/`2`/`3`), **Polite** (`Infm` vs `Form` for *du*/*ihr* vs *Sie*).
- Layered **Gender[psor]** and **Number[psor]** on some possessives (possessor vs possessed).

**Not used in German UD:** Animacy, Evident ([German UD](https://universaldependencies.org/de/index.html)).

The universal Case feature page uses German as an example of morphological case: nominative *der Mann*, genitive *des Mannes*, dative *dem Mann*, accusative *den Mann* ([u-feat/Case](https://universaldependencies.org/u/feat/Case.html)).

**XPOS in German treebanks** is typically STTS or a parser-specific tag (see §5), not a second universal tagset ([CoNLL-U](https://universaldependencies.org/format.html); GSD/HDT READMEs).

### German-specific morphology issues

**1. Contractions (`zum` = *zu*+*dem*).**  
German UD: “There is one class of multi-word tokens: the contractions of prepositions and definite articles. Example: zum = zu + dem ‘to the’.” Compounds are **not** split ([German UD](https://universaldependencies.org/de/index.html)).  
This matches the universal rule: fused words are not given a single POS; they are split into syntactic words ([Morphology overview](https://universaldependencies.org/u/overview/morphology.html); Spanish `al` / German `zum` listed as examples). GSD’s hub statistics list multi-word token types including *im, zum, am, zur, vom, beim, ins, ans, ums, aufs, übers, fürs* ([de_gsd](https://universaldependencies.org/treebanks/de_gsd/index.html)). CoNLL-U’s own detokenization example uses German *fürs* = *für*+*das* ([CoNLL-U format](https://universaldependencies.org/format.html)).

**2. Compound nouns.**  
Written as one word; **not split** ([German UD](https://universaldependencies.org/de/index.html)). Universal tokenization: particle verbs and compounds should **not** be fused into one syntactic word via “multitoken words”; they get dependency relations instead ([Tokenization](https://universaldependencies.org/u/overview/tokenization.html)). HDT changelog for v2.16: “Lemmas for compound words now include more than just the headword” ([HDT README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-HDT/dev/README.md)) — still one token, richer lemma string, not an internal compound tree.

**3. Separable verbs (*aufschlagen*).**  
German-specific relation **`compound:prt`**: “Depending on the clause type in German, particles and verb stems of particle verbs either stand together or separate.” In **main clauses**, particle is sentence-final, stem in second position: `compound:prt(schlägt, auf)`. In **subordinate clauses**, they form **one token** (*aufschlägt*) ([compound:prt](https://universaldependencies.org/de/dep/compound-prt.html)).  
So UD does **not** give you a single stable “lexeme ID” for the particle verb across clause types: sometimes one FORM (`aufschlägt`), sometimes two nodes linked by `compound:prt`. Infinitives written apart (*sauber machen*) may be `xcomp`, not `compound:prt` ([compound:prt](https://universaldependencies.org/de/dep/compound-prt.html)).

**4. Syncretism (*der*).**  
German UD states noun case is “extremely ambiguous” and usually read off the article ([German UD](https://universaldependencies.org/de/index.html)). The form *der* is a classic syncretic article/pronoun (masc nom vs fem dat/gen vs plural gen, etc.). UD does **not** store “all possible parses of *der*” unless a treebank uses a multivalue `Case=…`. A parser/treebank typically **picks one** analysis from context (same principle as Czech *píseň* in the morphology overview). GSD’s morphology history is explicit that Gender/Number/Case of nouns and their det/amod children were often **inferred from syntax** (e.g. `nsubj` ⇒ nominative), “high precision but lower recall,” and later Mate+TüBa tagging still found Case and Gender “the least accurate of the frequent features” ([GSD README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-GSD/master/README.md)).

**5. Periphrastic perfect and passive.**  
Not encoded as Aspect/Voice on the participle. Perfect uses AUX *sein*/*haben*; passive uses AUX *werden* with `aux:pass` and `nsubj:pass` ([German UD](https://universaldependencies.org/de/index.html)). The universal morphology page uses German *verkauft* as the example where the **same participle form** appears in active perfect and passive, so Voice is not a morphological feature of that form ([Morphology overview](https://universaldependencies.org/u/overview/morphology.html)).

---

## 3. Syntax in UD

### Dependency vs constituency

**Constituency (phrase structure):** the sentence is a nested tree of **phrases** (NP, VP, S, …). A node is a constituent; children are its parts. TIGER and TüBa-D/Z are primarily this kind of resource (with extra machinery: TIGER allows crossing branches and secondary edges; TüBa adds **topological fields**) — see §5.

**Dependency:** “A phrase has a head and other things that it contains are dependents of that head. Dependency is a binary asymmetrical relation” represented as an arrow from head to dependent. Words form a **tree** with the main predicate as root; edges are **typed** grammatical relations ([de Marneffe et al. 2021](https://aclanthology.org/2021.cl-2.11.pdf) §2).

**Why UD chose dependencies.** de Marneffe et al.: “A key choice was between dependency representations and constituency representations (also known as phrase structure grammar, context-free grammar, or immediate constituency representations). One motivation here was simply the direction of the field of computational linguistics.” Early famous treebanks were constituency (Lancaster/IBM, Penn Treebank); “by the early 2000s, there had been a huge shift to the use of dependency treebanks.” The shift was “driven by several of the ideas that underlie our design principles, such as simplicity, easy cross-linguistic applicability, interpretability by non-linguists, and usefulness for downstream applications” ([de Marneffe et al. 2021](https://aclanthology.org/2021.cl-2.11.pdf) §5).  
Content-word heads also increase cross-language parallelism: the same grammatical relation may be morphology in one language and a function word in another ([Syntax overview](https://universaldependencies.org/u/overview/syntax.html); [UD Short Introduction](https://universaldependencies.org/introduction.html)).

UD is **lexicalist**: relations hold between **words**, not morphemes ([Tokenization](https://universaldependencies.org/u/overview/tokenization.html)).

Not every UD “dependency” is a linguistic head in the narrow sense: “Not all grammatical relations can be reduced to binary asymmetric relations between a syntactic head and a subordinate element,” and some typed relations are “convenient encodings of other relations without implications about syntactic headedness” ([Syntax overview](https://universaldependencies.org/u/overview/syntax.html)). Function words are attached as dependents of content words even though many classical dependency grammars reverse that; UD treats those as “functional relations” comparable to morphology ([Syntax overview](https://universaldependencies.org/u/overview/syntax.html)).

### What a dependency tree gives you

Universal v2 inventory: **37** relation types ([Universal relations](https://universaldependencies.org/u/dep/index.html)). German uses the core set plus documented subtypes ([German UD](https://universaldependencies.org/de/index.html); [German relations](https://universaldependencies.org/de/dep/index.html)).

For an engineer, the tree answers: **which word is the head of which**, and **what grammatical relation** holds.

German core vs oblique (this is a UD policy, not traditional Schulgrammatik) ([German UD](https://universaldependencies.org/de/index.html)):

- **`nsubj`:** nominative NP (no preposition). Clausal subject: `csubj`. Passive: `nsubj:pass` / `csubj:pass`.
- **`obj`:** **bare accusative** objects only (core).
- **`obl:arg`:** bare **dative and genitive** objects, and **all prepositional objects**. “This means that verbs of giving are not ditransitive predicates in German UD, as they have one oblique dative argument and only one core object.”
- **`iobj`:** only the rare two-accusative pattern.
- **`obl`:** adjuncts (including some bare accusative time NPs: *jeden Tag*).
- **`obl:agent`:** demoted passive agent (PP).
- **`xcomp`:** infinitival complement of control/phasal verbs.
- **`ccomp`:** finite clausal complement alternating with some accusative objects.
- **`aux` / `aux:pass` / `cop`:** *haben/sein/werden* and modals as documented; *sein* as copula.
- **`expl:pv`:** inherently reflexive *sich* (not a real object).
- **`compound:prt`:** split particle.
- **`mark`:** subordinators such as *weil* (relation type in the universal table; German uses `mark` under “Special clausal dependents”).
- **`case`:** preposition as dependent of the noun ([German `case`](https://universaldependencies.org/de/dep/case.html)).

Existential *es gibt* is **not** a copula clause: *geben* with accusative object ([German UD](https://universaldependencies.org/de/index.html)).

### What the tree does **not** give you

- A **named construction** (“dative after *geben*,” “V2,” “*weil* + verb-final,” “passive,” “modal particle cluster”). You can **often recover evidence** of those patterns by querying the graph + linear order, but they are not types in DEPREL.
- **Constituent spans as first-class phrases.** You can *induce* an NP as “a noun plus everything that depends on it,” but UD does not store an NP node. TüBa’s topological fields (Vorfeld, left/right sentence bracket, Mittelfeld, …) are **not** UD relations ([TüBa-D/Z Tübingen page](https://uni-tuebingen.de/en/134290)).
- **Valency dictionaries.** `obl:arg` vs `obl` is annotated per sentence, not a lexical entry “geben requires Dat+Acc.”
- **Word-order constructions as objects.** Linear order is the sequence of IDs / the `# text` string, not a feature `Position=V2`.

### German word order: encoded only indirectly

UD does not have relations named V2 or verb-final. Recoverability:

- **V2 (verb-second) in main clauses:** the finite verb is typically the clausal head (often `root` or a finite verb with dependents). The first constituent is whatever is attached to that verb and happens to precede it in token order. Particle verbs: stem in second position, particle final — documented under `compound:prt` ([compound:prt](https://universaldependencies.org/de/dep/compound-prt.html)).
- **Verb-final subordinates:** *weil*-clause: subordinator `mark` on the subordinate predicate; the finite verb (or particle+verb as one token) appears **later in the linear string**. The example on the particle page is exactly this: *…, weil der Koch die Eier aufschlägt* ([compound:prt](https://universaldependencies.org/de/dep/compound-prt.html)).
- **Topological fields** (the descriptive device German linguists use for V2/VF) are a TüBa annotation **level**, not UD ([TüBa-D/Z](https://uni-tuebingen.de/en/134290)).

You can write queries over order+relations. You do not get a node `Cxn=VerbSecond`.

---

## 4. German UD treebanks (UD 2.18)

German UD’s own index: **“There are four German UD treebanks”** ([German UD](https://universaldependencies.org/de/index.html)). The four hub pages and GitHub READMEs below are those four. A 2024 LREC paper also lists **tweeDe** (12K tokens, native UD-style Twitter annotation) as an existing modern-German UD-style resource **outside** this four-treebank UD-index list ([Blaschke et al. 2024, Table 1](https://aclanthology.org/2024.lrec-main.1485.pdf)). tweeDe is **not** described as part of the official four on [German UD](https://universaldependencies.org/de/index.html).

TüBa-D/Z has an **automatically converted CoNLL-U v2** in its own Release 11, with the Tübingen team hoping for later manual correction — that conversion is **not** one of the four UD-release German treebanks ([TüBa-D/Z](https://uni-tuebingen.de/en/134290); contrast [German UD](https://universaldependencies.org/de/index.html)).

Sizes below are from each treebank’s **UD 2.18 hub “Statistics”** section (sentence / token / syntactic-word counts).

### 4.1 UD_German-GSD

| | |
| --- | --- |
| **Since** | UD v1.0 ([de_gsd](https://universaldependencies.org/treebanks/de_gsd/index.html)) |
| **Size (2.18)** | 15,589 sentences; 287,708 tokens; 292,756 syntactic words ([de_gsd](https://universaldependencies.org/treebanks/de_gsd/index.html)) |
| **Genre** | news, reviews, wiki ([de_gsd](https://universaldependencies.org/treebanks/de_gsd/index.html)). README: v1 Reviews+News (news from TIGER); later web/Wikipedia-like sentences ([GSD README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-GSD/master/README.md)) |
| **License** | Annotations: **CC BY-SA 4.0**. Google “asserts no ownership” of underlying text; some sentences may be copyrighted in some jurisdictions. Portions from CoNLL 2006 TIGER with Hans Uszkoreit’s permission for the sentences. NC restriction on annotations was dropped in 2019 ([GSD README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-GSD/master/README.md); [de_gsd](https://universaldependencies.org/treebanks/de_gsd/index.html)) |
| **Gold vs automatic** | UPOS and relations: “annotated manually in non-UD style, automatically converted to UD.” Lemmas, XPOS, Features: “assigned by a program, not checked manually” ([de_gsd](https://universaldependencies.org/treebanks/de_gsd/index.html) annotation table). README: original UPOS manual; LEMMA/XPOS TreeTagger then Mate; FEATS rules then Mate; some gold overlay from TIGER where aligned ([GSD README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-GSD/master/README.md)) |
| **Quality notes** | Converted from Google Universal Dependency Treebank v2.0 (legacy). Duplicate-split issues fixed over time. Morphology weaker on user-generated content than on older newspaper text because the Mate model was trained on TüBa-D/Z ([GSD README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-GSD/master/README.md)). HDT paper (2019): GSD’s original annotation “still stems from the pre-UD time,” “interesting syntactic constructs are often not annotated in accordance to the UDv2 guidelines” ([Borges Völker et al. 2019](https://aclanthology.org/W19-8006.pdf)) — later GSD changelogs (through 2.18) record many guideline fixes ([GSD README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-GSD/master/README.md)) |

### 4.2 UD_German-HDT

| | |
| --- | --- |
| **Since** | UD v2.4 ([de_hdt](https://universaldependencies.org/treebanks/de_hdt/index.html)) |
| **Size (2.18)** | 189,928 sentences; 3,399,390 tokens; 3,455,580 syntactic words ([de_hdt](https://universaldependencies.org/treebanks/de_hdt/index.html)) |
| **Genre** | news, nonfiction, web; all from **heise.de** 1996–2001 (tech news, company earnings, cyberspace politics/editorials) ([de_hdt](https://universaldependencies.org/treebanks/de_hdt/index.html); [HDT README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-HDT/dev/README.md)) |
| **License** | UD hub: **CC BY-SA 4.0** ([de_hdt](https://universaldependencies.org/treebanks/de_hdt/index.html)). README: “Heise gave permission to distribute the text for **academic use**; the annotations are licensed under a Creative Commons share-alike license.” Metadata block also says `License: CC BY-SA 4.0` ([HDT README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-HDT/dev/README.md)). **Product caution:** academic-use wording for **text** vs CC BY-SA for **annotations** is a real split; do not treat “CC BY-SA 4.0 on the hub” as a commercial licence to republish Heise articles. |
| **Gold vs automatic** | Original HDT: parts A+B **manually** annotated (A consistency-checked with DECCA); part C automatic WCDG parse **not** in the UD release ([HDT README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-HDT/dev/README.md)). UD conversion via TrUDucer: “very high accuracy of **97%** (checked on a manually converted subset).” Hub: lemmas/UPOS/features converted from manual; XPOS automatic with some corrections; relations converted with some manual corrections ([de_hdt](https://universaldependencies.org/treebanks/de_hdt/index.html)) |
| **Quality notes** | Morphology sometimes underspecified in the source (“not-fem”); NN vs NE mix-ups carry over ([HDT README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-HDT/dev/README.md)). From v2.15, **UCxn** construction tags in MISC (interrogatives, conditionals, existentials, NPN) ([HDT README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-HDT/dev/README.md)). README’s older split counts (173,247 sentences “currently included”) **do not match** the 2.18 hub total 189,928 — use the hub for 2.18 size; the README split table may lag. |

### 4.3 UD_German-PUD

| | |
| --- | --- |
| **Since** | UD v2.1 ([de_pud](https://universaldependencies.org/treebanks/de_pud/index.html)) |
| **Size (2.18)** | 1,000 sentences; 21,001 tokens; 21,332 syntactic words ([de_pud](https://universaldependencies.org/treebanks/de_pud/index.html)) |
| **Genre** | news + Wikipedia; **parallel** across PUD languages ([de_pud](https://universaldependencies.org/treebanks/de_pud/index.html)) |
| **License** | **CC BY-SA 3.0** ([de_pud](https://universaldependencies.org/treebanks/de_pud/index.html)). README: underlying Wikipedia text under CC BY-SA 3.0; Google asserts no copyright; annotations provided “AS IS” ([PUD README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-PUD/master/README.md)) |
| **Gold vs automatic** | Annotated by Google to Google universal guidelines, then converted to UD v2 by the UD community. Hub: lemmas “annotated manually”; UPOS/features/relations “manually in non-UD style, automatically converted”; **XPOS not available** ([de_pud](https://universaldependencies.org/treebanks/de_pud/index.html)). Entire treebank is a **test set**; training should use 10-fold CV ([PUD README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-PUD/master/README.md)) |
| **Quality notes** | First 750 sentences originally English; remaining 250 originally German/French/Italian/Spanish and translated **via English**. German translation: DFKI; “performed (**except for German**) by professional translators” ([PUD README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-PUD/master/README.md)) — i.e. much of the German is **translationese**, not independently authored German. |

### 4.4 UD_German-LIT

| | |
| --- | --- |
| **Since** | UD v2.4 ([de_lit](https://universaldependencies.org/treebanks/de_lit/index.html)) |
| **Size (2.18)** | 1,920 sentences; 40,340 tokens; 40,450 syntactic words ([de_lit](https://universaldependencies.org/treebanks/de_lit/index.html)) |
| **Genre** | nonfiction; **early Romantic fragments** (Schlegel Lyceum & Athenäum fragments; Novalis *Blüthenstaub*), late 18th c. modern German, philosophical/aesthetic aphorisms ([LIT README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-LIT/master/README.md)) |
| **License** | **CC BY-NC-SA 4.0** ([de_lit](https://universaldependencies.org/treebanks/de_lit/index.html); [LIT README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-LIT/master/README.md)) — **non-commercial** |
| **Gold vs automatic** | Relations: “annotated manually, natively in UD style.” Lemmas/XPOS: automatic with some corrections. UPOS: converted with corrections. Metadata: **`Features: not available`** ([LIT README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-LIT/master/README.md); [de_lit](https://universaldependencies.org/treebanks/de_lit/index.html) table). **Flag:** the 2.18 hub statistics pages still list Case/Gender/etc. examples — I could not independently verify completeness vs the “not available” metadata. Treat features as **not a reliable gold layer** unless you re-check the CoNLL-U files. |
| **Quality notes** | Built for **stylistic** analysis of literary fragments, not contemporary standard German or learner language ([LIT README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-LIT/master/README.md)). |

### Limitations for learner / educational use (all four)

None of the four is a **learner corpus**. Genres are native or edited adult text: news, reviews, Wikipedia, 1990s tech journalism, 1790s literary fragments, translationese news/wiki. They will over-represent long, information-dense clauses and under-represent A1–B1 classroom German, spoken hesitation, and **errorful** interlanguage.

UD’s `Typo=Yes` is explicitly **not** for nonnative grammar ([Morphology overview](https://universaldependencies.org/u/overview/morphology.html)). German learner corpora such as **Falko** annotate non-canonical learner sentences against a **target hypothesis** (a reconstructed grammatical version) rather than forcing the raw learner string into a native treebank scheme ([doi:10.18452/13442](https://doi.org/10.18452/13442)). Falko is **not** one of the four UD German treebanks.

HDT/GSD/PUD dative policy (`obl:arg` not `iobj`) is the opposite of many DaF textbooks’ “dative object” label ([German UD](https://universaldependencies.org/de/index.html); GSD/HDT/PUD changelogs v2.12). An educational UI that says “indirect object” must **not** naively print `iobj`.

---

## 5. Related annotation standards (brief, cited)

### TIGER

IMS Stuttgart: TIGER 2.1/2.2 ≈ **900,000 tokens / 50,000 sentences** of *Frankfurter Rundschau* newspaper. Semi-automatic POS plus syntactic structure; morphology and lemmas on terminals in v2. Formats: Negra export (not for 2.2) and TIGER-XML. Also a CoNLL-2009 **dependency** conversion (Tiger2Dep) and a TiGer Dependency Bank gold subset ([IMS TIGER page](https://www.ims.uni-stuttgart.de/en/research/resources/corpora/tiger/)).  
Version 1 intro: ~700k tokens / 40k sentences; POS = STTS with minor variations; syntax = graphs with **possibly crossing branches** and labeled edges, plus secondary edges; scheme builds on NEGRA ([Smith 2003 TIGER intro PDF](https://www.ims.uni-stuttgart.de/documents/ressourcen/korpora/tiger-corpus/annotation/tiger_introduction.pdf)).  
Licence: free for **research/evaluation** under a non-commercial agreement; commercial licence “under review” since Sept 2020 ([IMS TIGER page](https://www.ims.uni-stuttgart.de/en/research/resources/corpora/tiger/)).  
GSD’s news portion is sampled from TIGER/CoNLL 2006 ([GSD README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-GSD/master/README.md)).

### TüBa-D/Z

University of Tübingen: newspaper *die tageszeitung* (*taz*). Release 11 (final): **3,816 articles; 104,787 sentences; 1,959,474 tokens**; **manual** syntactic annotation. Levels: inflectional morphology, lemmas, **syntactic constituency**, grammatical functions, named entities, anaphora/coreference, selected GermaNet senses, **automatically created** dependencies and chunks. Constituency uses four levels including **topological fields** (the standard descriptive model of German clause order). Surface-oriented, context-free backbone, **no crossing branches or traces**. Academic licence free; other uses contact Hinrichs; no licences to individuals ([TüBa-D/Z](https://uni-tuebingen.de/en/134290); [Stylebook 2017](https://hinrichs.sfs.uni-tuebingen.de/files/tbs/tuebadz-stylebook-1707.pdf)).  
Çöltekin, Björkelund, et al. (2017) describe **automatic conversion** of TüBa-D/Z to UD ([ACL W17-0404](https://aclanthology.org/W17-0404.pdf)). That conversion is **not** listed among the four official German UD treebanks ([German UD](https://universaldependencies.org/de/index.html)). Release 11 includes automatic CoNLL-U v2 from Tübingen ([TüBa-D/Z](https://uni-tuebingen.de/en/134290)).

TüBa’s topological fields are the linguists’ native encoding of V2/verb-final; UD encodes those facts only as word order + `mark`/`root` (see §3).

### STTS (Stuttgart-Tübingen Tagset)

Schiller, Teufel, Stöckert, Thielen (1999): guidelines for tagging German corpora with STTS. “Insgesamt enthält STTS **54 tags**. Davon sind 48 reine POS-tags und 6 zusätzliche tags” (FM, TRUNC, XY, and three punctuation tags) ([STTS 1999 PDF via DWDS](https://www.dwds.de/dwds_static/publications/pdf/stts-1999.pdf)). Hierarchical letter codes from German grammatical terminology (VVFIN, NN, ART, …). TIGER uses STTS with listed deviations ([Smith 2003](https://www.ims.uni-stuttgart.de/documents/ressourcen/korpora/tiger-corpus/annotation/tiger_introduction.pdf)). TüBa uses STTS at the lexical level ([TüBa-D/Z](https://uni-tuebingen.de/en/134290); [Stylebook](https://hinrichs.sfs.uni-tuebingen.de/files/tbs/tuebadz-stylebook-1707.pdf)).  
In UD German, STTS-like tags typically occupy **XPOS**; the 17 **UPOS** tags are the universal column ([CoNLL-U](https://universaldependencies.org/format.html); GSD/HDT READMEs). UPOS is coarser (e.g. STTS VVFIN/VVINF/VVPP vs UPOS VERB + `VerbForm`).

### UniMorph

UniMorph annotates **inflected word ↔ lemma + universal inflectional feature bundle**, for paradigm tables, not running-text syntax. “The goal of UniMorph is to annotate morphological data in a universal schema that allows an inflected word from any language to be defined by its lexical meaning, typically carried by the lemma, and by a rendering of its inflectional form in terms of a bundle of morphological features” ([unimorph.github.io](https://unimorph.github.io/)). Schema: **23 dimensions**, **212+ features** (Sylak-Glassman 2016 / 2015) ([schema page](https://unimorph.github.io/schema/); [schema PDF](https://unimorph.github.io/doc/unimorph-schema.pdf); [Sylak-Glassman et al. 2015](https://aclanthology.org/P15-2111.pdf)). Similar in spirit to UD features but “designed specifically for typological completeness for **inflectional** morphology” ([UniMorph 2.0](https://aclanthology.org/L18-1293.pdf)).  
German (`deu`) is in the language table: **179,339 forms / 15,060 paradigms**; nouns and verbs checked; adjectives column empty in the table as rendered ([unimorph.github.io](https://unimorph.github.io/)). UniMorph does not annotate sentences or constructions.

### OntoNotes / PropBank / FrameNet — German?

**OntoNotes 5.0** (LDC documentation): “a large corpus comprising various genres … in **three languages (English, Chinese, and Arabic)**” with syntax (Penn Treebank-style), PropBank predicate-argument structure, word sense, coreference. “OntoNotes includes roughly 1.5 million words of English, 800 K of Chinese, and 300 K of Arabic.” **German is not a language of OntoNotes 5.0** ([OntoNotes Release 5.0 PDF](https://catalog.ldc.upenn.edu/docs/LDC2013T19/OntoNotes-Release-5.0.pdf)).

**PropBank** (project site): original resource adds predicate-argument roles to Penn Treebank English. “Propbanks in Other Languages” listed: Hindi, Chinese, Arabic, Finnish, Portuguese, Basque, Turkish, plus IBM “Universal Proposition Banks.” **German is not in that list** ([propbank.github.io](https://propbank.github.io/)).  
German **PropBank-style** annotation exists in other pipelines: Heidelberg SR3de documents parallel FrameNet / VerbNet / PropBank-style labels on the **CoNLL 2009 German** dataset (TIGER-derived), with PropBank from the CoNLL 2009 ST corpus ([SR3de](https://www.cl.uni-heidelberg.de/projects/SR3de/data.mhtml)). That is not the English PropBank lexicon applied as a first-class German PropBank on the PropBank homepage.

**FrameNet (Berkeley):** Baker, Fillmore, Lowe (1998), *The Berkeley FrameNet Project* ([C98-1013](https://aclanthology.org/C98-1013/)). Frames = schematic situations; lexical units evoke frames; frame elements are role labels. English-centric original resource.

**German FrameNet / SALSA / Düsseldorf:**

- **SALSA** (Saarbrücken): aim “creating a semantically annotated corpus”; “Annotating the German 1.5M word **TIGER** corpus by hand with **FrameNet semantic roles**” and a German “FrameNet light” ([SALSA project page](https://www.coli.uni-saarland.de/projects/salsa/page.php?id=index-salsa1) — page returned mostly template PHP in this fetch; the **owning task list** was still visible in the converted extract). Burchardt et al. LREC 2006: SALSA corpus is TIGER plus manual role-semantic annotation; first release “about 20,000 annotated predicate instances (about half the TIGER corpus)” ([ACL L06-1195](https://aclanthology.org/L06-1195/)).
- **German FrameNet at UT Austin** (Boas): online lexical resource for German verbs/nouns/adjectives on Frame Semantics; collaborates with Berkeley FrameNet and SALSA; intended also for foreign-language education ([laits.utexas.edu/gframenet](https://laits.utexas.edu/gframenet/)).
- **FrameNet-Konstruktikon des Deutschen (HHU Düsseldorf):** integrated FrameNet + constructicon for contemporary German; sources include E-VALBU and SALSA; also DWDS and DeReKo ([HHU about](https://framenet-constructicon.hhu.de/project/about)).

These are **semantic / construction** layers on top of (or beside) syntax, not UD columns.

---

## 6. The construction gap

### Construction grammar (Goldberg / Fillmore tradition)

Goldberg (2003): constructions are “**stored pairings of form and function**, including morphemes, words, idioms, partially lexically filled and fully general linguistic patterns.” Tenet 1: “All levels of description are understood to involve pairings of form with semantic or discourse function.” Tenet 7: “The totality of our knowledge of language is captured by a network of constructions: a ‘construct-i-con.’” ([Goldberg, *Trends in Cognitive Sciences* 2003](https://legacy.cs.indiana.edu/~port/teach/sem05/Goldberg.constrctns.TrCgSci.03.pdf)).

Goldberg (1995) book page: “the syntactic patterns associated with simple sentences are imbued with meaning—that the **constructions themselves carry meaning independently of the words** in a sentence” (ditransitive, caused-motion, resultative, *way* construction as case studies) ([University of Chicago Press](https://press.uchicago.edu/ucp/books/book/chicago/C/bo3683810.html)).

Berkeley FrameNet (Fillmore and colleagues) is the computational lexicon of **frames** (situation types and their roles), not a full constructicon, but FrameNet and Construction Grammar share Fillmore’s frame-semantic heritage ([Baker, Fillmore, Lowe 1998](https://aclanthology.org/C98-1013/)). The Düsseldorf project treats FrameNet and constructicon as **one** resource: “Form-Bedeutungsstrukturen … im Kontinuum von Lexikon und Grammatik”; “alle Einheiten in diesem Kontinuum – von Wörtern bis zu abstrakten grammatischen Kategorien … einheitlich zu erfassen”; example: the **Doppelobjekt-Konstruktion** (*Er gab ihr einen Keks*) is “nur durch strukturelle Eigenschaften und ohne lexikalischen ‘Anker’ definiert” ([HHU about](https://framenet-constructicon.hhu.de/project/about)).

### Why a teaching object is not a UD type

A DaF “construction” (passive, dative object of *geben*, *weil*-clauses, modal particles *doch*/*mal*) is typically a **form–function bundle** you want to name, explain, and drill/notice:

| Teaching object | What UD stores | Why that is not the same type |
| --- | --- | --- |
| Passive | `nsubj:pass` + `aux:pass` (*werden*) + optional `obl:agent` ([German UD](https://universaldependencies.org/de/index.html)) | A **configuration** of several relations, not an ID `Cxn=Passive`. Periphrastic; Voice feature unused in German. |
| “Dative object after *geben*” | `obl:arg` (dative) + `obj` (accusative) ([German UD](https://universaldependencies.org/de/index.html)) | UD **denies** German ditransitivity (`iobj`). The construction-grammar **Doppelobjekt** is a first-class object in the Düsseldorf constructicon ([HHU about](https://framenet-constructicon.hhu.de/project/about)), not a UD relation. |
| *weil* + verb-final | `mark` + `advcl`/`ccomp` + linear order with finite verb late ([compound:prt](https://universaldependencies.org/de/dep/compound-prt.html) example; [German relations](https://universaldependencies.org/de/dep/index.html)) | No type `Cxn=WeilVerbFinal`. TüBa would put this in **topological fields** ([TüBa-D/Z](https://uni-tuebingen.de/en/134290)). |
| Modal particles | Often `advmod` or similar modifier relations (universal `advmod` / `discourse` depending on analysis) ([Universal relations](https://universaldependencies.org/u/dep/index.html)) | HHU treats some particles as **Korrelierendes Element** of a construction (e.g. exclamatives), not as the construction itself ([HHU about](https://framenet-constructicon.hhu.de/project/about)). UD has no particle-construction inventory. |

UD can **detect instances** of these patterns with rules (that is what UCxn Grew rules do). Detection ≠ making constructions a native UD node type.

### Academic projects that catalog German constructions

1. **FrameNet-Konstruktikon des Deutschen** (HHU, Alexander Ziem and team). Constructicon entries + German FrameNet + metaphor net; corpus-based; explicitly mentions **foreign-language didactic** use as a possible exploitation path ([HHU about](https://framenet-constructicon.hhu.de/project/about)). Ziem, Flick, Sandkühler (2019), *Lexicographica*: German Constructicon Project, dictionary-like online repository, example family *geschweige denn* / negating_connector ([DOI 10.1515/lex-2019-0003](https://doi.org/10.1515/lex-2019-0003) — metadata/abstract fetched via web search; full PDF not fetched). Public site historically `german-constructicon.de` / current `framenet-constructicon.hhu.de`.

2. **UCxn** (Weissweiler et al., LREC-COLING 2024): constructions as a **layer on top of UD**, stored in MISC (`Cxn=…`, `CxnElt=…`). Five families in the paper/README: Interrogative, Existential, Conditional, Resultative, NPN; **German is one of ten languages**. Grew rules infer annotations. HDT 2.15+ includes a subset (interrogatives, conditionals, existentials, NPN) ([UCxn README](https://raw.githubusercontent.com/LeonieWeissweiler/UCxn/main/README.md); [HDT README](https://raw.githubusercontent.com/UniversalDependencies/UD_German-HDT/dev/README.md); paper [2024.lrec-main.1471](https://aclanthology.org/2024.lrec-main.1471)). This is the computationally native way to name constructions **without forking UD**.

3. **Berkeley FrameNet Constructicon** (English prototype) is the model Düsseldorf cites ([HHU about](https://framenet-constructicon.hhu.de/project/about); [Baker et al. 1998](https://aclanthology.org/C98-1013/)).

4. **SALSA** catalogs **frames/roles** on TIGER predicates, not a full grammatical constructicon ([L06-1195](https://aclanthology.org/L06-1195/)).

**Not verified in this pass:** a complete public dump of how many German constructicon entries exist today, or whether modal particles have full construction entries. The HHU about page describes methodology and examples, not a live entry count.

---

## 7. Architectural implication (recommendation)

**Recommendation (labeled as such, not a stack choice):**  
Treat **UD / CoNLL-U as a good default internal representation for “this sentence, analyzed”** — lemma, UPOS, inflectional features, and a typed dependency tree — **instead of inventing a parallel morphosyntactic schema.** The owning standard is public, German-specific guidelines already exist, four treebanks plus mature conversion history exist, and the representation is designed to be readable by engineers ([UD Short Introduction](https://universaldependencies.org/introduction.html) design dimension 4; [de Marneffe et al. 2021](https://aclanthology.org/2021.cl-2.11.pdf) §5).

**Do not treat UD as the language-learning domain model.** A product still needs other objects. Map:

| Product need | UD enough? | Still missing (owned elsewhere or product-owned) |
| --- | --- | --- |
| Tokenize, lemmatize, POS, case/gender/number on a published sentence | Yes, as the interchange format | Parser quality on *your* genre; syncretism errors |
| “What is the subject / accusative object?” | Mostly (`nsubj` / `obj`) | Dative “object” is `obl:arg`, not `obj`/`iobj` ([German UD](https://universaldependencies.org/de/index.html)) |
| Named grammar points (passive, *weil*-VF, V2, *geben*+Dat) | Only as **queries / overlays** | Constructicon or UCxn-like layer; pedagogical labels; CEFR |
| Vocabulary item = lemma | Yes for inflectional paradigms | Senses, collocations, CEFR vocab lists, derivation (*-in*), particle-verb identity across split/unsplit forms |
| Compound transparency (*Haustür*) | No split ([German UD](https://universaldependencies.org/de/index.html)) | Separate compound analyzer or lexicon |
| Learner utterance diagnosis | `Typo=Yes` is the wrong tool ([Morphology](https://universaldependencies.org/u/overview/morphology.html)) | Target hypothesis + error taxonomy (Falko-style), not GSD/HDT |
| “Why this article?” | FEATS on DET help if the parse is right | Teaching copy; syncretism; agreement explanation |
| Meaning / “who gives what to whom” | Grammatical relations only | FrameNet/SALSA/PropBank-style roles, or a small product-owned frame list |
| Discourse / information structure | `discourse` / `parataxis` only | RST/connectives (TüBa has a small connective layer ([TüBa-D/Z](https://uni-tuebingen.de/en/134290))) |
| Curriculum progress | No | CEFR / course design — Council of Europe, not UD |

**Practical consequence:** store or generate **CoNLL-U (or an isomorphic structure)** for analyzed content you own. Add **separate** layers for (a) teaching constructions, (b) lexical/sense info, (c) CEFR or skill tags, (d) learner-error analysis if you ever annotate learner text. Related research already layers constructions (UCxn MISC), MWEs (PARSEME, listed on the UD homepage), derivation (UDer, listed), and semantics (PropBank/UMR/FrameNet) **on or beside** UD rather than replacing it ([UD homepage](https://universaldependencies.org/)).

**Do not** fork a private “UD-like but with V2 nodes and CEFR on every token.” That would drop interchange with parsers and treebanks for a taxonomy UD was never meant to be.

Founder approval is needed only if Davio were to **redistribute** treebank text (HDT academic-use wording; LIT NC; GSD/TIGER underlying text; TIGER/TüBa research licences) or to **treat textbook “dative object” as `iobj`** against German UD. Using UD as an analysis format for **your own** sentences does not require those corpora.

---

## Unverified / fetch failures

| Item | Status |
| --- | --- |
| Exact live entry count of the German Constructicon | Not in the fetched HHU about page |
| UniMorph German adjective coverage (table showed adjectives unchecked) | Table as rendered on [unimorph.github.io](https://unimorph.github.io/); not independently counted |
| UDer German resources (DErivBase, G-CELEX) details | UD homepage lists UDer; dedicated ÚFAL page **timed out**; do not treat sizes as verified here |
| SALSA homepage | Fetch returned PHP wrapper; tasks cited from the extracted content + [L06-1195](https://aclanthology.org/L06-1195/) |
| Berkeley FrameNet “about” HTML | Timed out; used [Baker et al. 1998](https://aclanthology.org/C98-1013/) instead |
| LIT morphological features in 2.18 files vs README “not available” | Conflict flagged in §4.4 |
| HDT 2.18 sentence count vs README split table | Hub 189,928 vs README 173,247 — hub used |
| tweeDe in UD 2.18 bundle | Not on [German UD](https://universaldependencies.org/de/index.html) four-treebank list; existence from [Blaschke et al. 2024](https://aclanthology.org/2024.lrec-main.1485.pdf) |
| An explicit UD sentence “we do not annotate CEFR” | Absence in fetched specs, not a denial quote |
| Fillmore, Kay & O’Connor 1988 *let alone* paper | Not fetched; Goldberg 2003 and HHU used as construction-grammar primaries |
| PropBank homepage list completeness for German experimental corpora | German PropBank-style via CoNLL 2009/SR3de cited; not on [propbank.github.io](https://propbank.github.io/) language list |

---

## Sources

URLs actually fetched (or whose full page/PDF was retrieved into this research pass):

1. https://universaldependencies.org/  
2. https://universaldependencies.org/introduction.html  
3. https://universaldependencies.org/format.html  
4. https://universaldependencies.org/de/index.html  
5. https://universaldependencies.org/u/overview/morphology.html  
6. https://universaldependencies.org/u/overview/syntax.html  
7. https://universaldependencies.org/u/overview/tokenization.html  
8. https://universaldependencies.org/u/dep/index.html  
9. https://universaldependencies.org/u/feat/Case.html  
10. https://universaldependencies.org/de/dep/index.html  
11. https://universaldependencies.org/de/dep/case.html  
12. https://universaldependencies.org/de/dep/compound-prt.html  
13. https://universaldependencies.org/treebanks/de_gsd/index.html  
14. https://universaldependencies.org/treebanks/de_hdt/index.html  
15. https://universaldependencies.org/treebanks/de_pud/index.html  
16. https://universaldependencies.org/treebanks/de_lit/index.html  
17. https://raw.githubusercontent.com/UniversalDependencies/UD_German-GSD/master/README.md  
18. https://raw.githubusercontent.com/UniversalDependencies/UD_German-HDT/dev/README.md  
19. https://raw.githubusercontent.com/UniversalDependencies/UD_German-PUD/master/README.md  
20. https://raw.githubusercontent.com/UniversalDependencies/UD_German-LIT/master/README.md  
21. https://aclanthology.org/2021.cl-2.11/  
22. https://aclanthology.org/2021.cl-2.11.pdf  
23. https://aclanthology.org/W19-8006.pdf  
24. https://aclanthology.org/W17-0404.pdf  
25. https://aclanthology.org/2024.lrec-main.1485.pdf  
26. https://aclanthology.org/C98-1013/  
27. https://aclanthology.org/L06-1195/  
28. https://aclanthology.org/L18-1293.pdf  
29. https://aclanthology.org/P15-2111.pdf  
30. https://unimorph.github.io/  
31. https://unimorph.github.io/schema/  
32. https://unimorph.github.io/doc/unimorph-schema.pdf  
33. https://www.ims.uni-stuttgart.de/en/research/resources/corpora/tiger/  
34. https://www.ims.uni-stuttgart.de/documents/ressourcen/korpora/tiger-corpus/annotation/tiger_introduction.pdf  
35. https://www.dwds.de/dwds_static/publications/pdf/stts-1999.pdf  
36. https://uni-tuebingen.de/en/134290  
37. https://hinrichs.sfs.uni-tuebingen.de/files/tbs/tuebadz-stylebook-1707.pdf  
38. https://catalog.ldc.upenn.edu/docs/LDC2013T19/OntoNotes-Release-5.0.pdf  
39. https://propbank.github.io/  
40. https://framenet-constructicon.hhu.de/project/about  
41. https://laits.utexas.edu/gframenet/  
42. https://legacy.cs.indiana.edu/~port/teach/sem05/Goldberg.constrctns.TrCgSci.03.pdf  
43. https://press.uchicago.edu/ucp/books/book/chicago/C/bo3683810.html  
44. https://raw.githubusercontent.com/LeonieWeissweiler/UCxn/main/README.md  
45. https://www.coli.uni-saarland.de/projects/salsa/page.php?id=index-salsa1  
46. https://www.cl.uni-heidelberg.de/projects/SR3de/data.mhtml  
47. https://doi.org/10.18452/13442  

Cited with URL but only abstract/landing (not full PDF body) in this pass:

- https://aclanthology.org/2024.lrec-main.1471 (UCxn paper; README quotes it)  
- https://doi.org/10.1515/lex-2019-0003 (Ziem et al. 2019; abstract via search)  
- https://arxiv.org/abs/2403.17748 (UCxn preprint listed in README)  

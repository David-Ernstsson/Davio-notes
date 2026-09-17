# Existing NLP tools for German (hobby now, commercial later)

Tool-by-tool annex to the language-intelligence synthesis ([hub](language-intelligence-domain.md)).

**Date:** 2026-08-22  
**Scope:** Evaluate off-the-shelf linguistic tools against primary sources. Not a stack choice. No application code.

This note is research, not legal advice. Licences can change per model version; always re-read the owning `LICENSE` / model card before shipping. Claims below are cited to pages that own them. Items that could not be confirmed from those pages are marked **UNVERIFIED**.

## How to read this note

Each tool uses the same fields:

| Field | Meaning |
| --- | --- |
| **Provides** | What the *owning docs* say it outputs |
| **Quality / German** | Numbers from official model pages / papers that own the evaluation |
| **License** | Software vs models vs training corpora (these are often different) |
| **Self-host** | Can it run on your machine without a vendor API |
| **Deterministic vs ML** | Rules / FSTs vs statistical/neural; same input can still yield different outputs across versions |
| **Hobby ops** | Size, CPU vs GPU, moving parts |
| **.NET/Azure reality** | Facts about runtimes and integration seams — not a recommendation |

**Product context.** Davio’s v1 Gym is curated B1–B2 *owned* text plus Noticing, not live learner-essay correction ([03](03-mvp-activity-feasibility.md), [08](08-b1-b2-german-content-sources.md)). Many tools below are still relevant later for analysis of *published* sentences, not as a tutor that “fixes” the Learner.

---

## Cross-cutting answers (read these first)

### Do these tools work on ungrammatical learner German?

**Parsers, taggers, morphologizers (spaCy, Stanza, UDPipe, Trankit, TreeTagger, RFTagger, CoreNLP, OpenNLP) assume text in the genre they were trained on** — typically edited news, Wikipedia, or reviews — not interlanguage.

Evidence:

- spaCy German pipelines are labelled **genre: news** (written news/media) and are trained on the **TIGER** newspaper treebank plus WikiNER ([`de_core_news_sm` 3.8.0 release](https://github.com/explosion/spacy-models/releases/tag/de_core_news_sm-3.8.0); TIGER is “~50,000 sentences of German newspaper text, taken from the *Frankfurter Rundschau*” — [IMS TIGER page](https://www.ims.uni-stuttgart.de/en/research/resources/corpora/tiger/), [TIGER academic licence](https://www.ims.uni-stuttgart.de/documents/ressourcen/korpora/tiger-corpus/license/htmlicense.html)).
- Stanza’s own FAQ: models are statistical; reported scores hold “**as long as the genre of your text is similar to what the models are trained on**” ([Stanza FAQ](https://stanfordnlp.github.io/stanza/faq.html)). German UD scores are on **UD German-GSD** (genres: news, reviews, wiki — [UD German-GSD](https://universaldependencies.org/treebanks/de_gsd/index.html)) and **UD German-HDT**.
- Stanza (and UDPipe/Trankit) morphological and dependency scores are **end-to-end on official UD *test* sets of edited treebank text**, using the CoNLL 2018 UD evaluation script ([Stanza performance](https://stanfordnlp.github.io/stanza/performance.html)). That is not a learner-corpus evaluation.

**GEC systems are the exception by design:** they are trained on *erroneous → corrected* pairs from learner corpora (English BEA; German Falko–MERLIN). They still do not “understand” the intended construction; they propose a rewritten sentence ([Bryant et al. 2019](https://aclanthology.org/W19-4406/); [Boyd 2018](https://aclanthology.org/W18-6111/); [Náplava & Straka 2019](https://aclanthology.org/D19-5545/)).

**LanguageTool is also an exception of a different kind:** it is a **proofreader** that fires error/style *rules* on analysed tokens. It is built to find mistakes in writing, including many German-specific patterns, but it is not a learner-interlanguage parser and not a full GEC rewriter ([LanguageTool README](https://github.com/languagetool-org/languagetool/blob/master/README.md); [development overview](https://dev.languagetool.org/development-overview)).

**UNVERIFIED:** no owning spaCy/Stanza/UDPipe page was found that publishes German *learner-corpus* POS/LAS numbers. Do not treat news/UD F1 as “accuracy on B1 essays.”

### Can they identify pedagogical constructions (“dative after *geben*”, “verb-final *weil*-clause”)?

**No, not as named pedagogical objects.** They emit **low-level annotations**:

| Layer | Typical output | Example for *Ich gebe dem Kind den Ball* / *… weil ich müde bin* |
| --- | --- | --- |
| UD morph | `Case=Dat` on *dem Kind* | Feature on a token, not “dative object of *geben*” as a construction |
| UD syntax | `iobj` / `obl` / `obj`; `SCONJ` *weil* + `advcl` | Relation inventory is UD, not a teaching syllabus ([UD docs](https://universaldependencies.org/guidelines.html)) |
| spaCy German **parser** | **TIGER** labels, not UD: `da` (dative), `oa` (accusative object), `oc`, `mo`, … ([sm 3.8.0 label scheme](https://github.com/explosion/spacy-models/releases/tag/de_core_news_sm-3.8.0); Explosion discussion of TIGER inventory: [spaCy #12558](https://github.com/explosion/spaCy/discussions/12558)) |
| spaCy **morphologizer** | UD-like `Case`/`Gender`/`Number` bundles on the same pipeline | Still token-level, not CxG |
| LanguageTool | Rule IDs + messages if a *pattern* matches an *error* | Can fire on *weil* + V2 as a *mistake* if a rule exists; that is not “this sentence contains a well-formed verb-final *weil*-clause for teaching” |
| spaCy **Matcher / DependencyMatcher** | **You** write token/dep patterns ([rule-based matching](https://spacy.io/usage/rule-based-matching)) | Possible to *encode* “LEMMA=geben + dative NP” yourself; the library does not ship a German construction inventory |

Identifying “this sentence is a good *geben*+DAT example” is a **product/content layer** (owned corpus + human or scripted tags), optionally *helped* by token Case/lemma/`da`/`iobj`. Wrapping UD as a construction ontology would invent terminology the tools do not provide ([hub](language-intelligence-domain.md): grammaticality ≠ pedagogical usefulness).

### What a hobby project should **not** wrap into a “platform”

Do not build a general “language intelligence platform” around:

1. **TreeTagger, RFTagger, SMOR (IMS)** — research/education licences; **commercial use requires a purchased/contact licence** ([TreeTagger](https://www.cis.uni-muenchen.de/~schmid/tools/TreeTagger/); [SMOR](https://www.cis.uni-muenchen.de/~schmid/tools/SMOR/); [RFTagger](https://www.cis.uni-muenchen.de/~schmid/tools/RFTagger/)).
2. **UDPipe pretrained *models*** — library MPL-2.0, **models CC BY-NC-SA** (non-commercial) ([UDPipe info](https://lindat.mff.cuni.cz/services/udpipe/info.php); [UDPipe 2.12 LINDAT record](https://lindat.cz/repository/xmlui/handle/11234/1-5200)).
3. **Stanford CoreNLP** as a proprietary product dependency — **GPL v3+** composite; “does not allow its use in proprietary software which is distributed to others” without a Stanford commercial licence ([CoreNLP overview](https://stanfordnlp.github.io/CoreNLP/)).
4. **LanguageTool’s public cloud API** as product backend — **no automated requests**; self-host or paid Enterprise; cloud may include **non-OSS rules** ([public HTTP API](https://dev.languagetool.org/public-http-api.html)). Learneo/LanguageTool **Terms** restrict free/personal cloud use and forbid using the Service to build a competing product ([LanguageTool terms](https://languagetool.org/legal/terms)).
5. **TIGER corpus itself** as a redistributed dataset — academic licence is **non-commercial**; commercial use of the corpus or data derived from it needs written agreement ([TIGER licence](https://www.ims.uni-stuttgart.de/documents/ressourcen/korpora/tiger-corpus/license/htmlicense.html)). Explosion’s **trained MIT models** are a different artefact (see spaCy).
6. **Spark NLP as a cluster product** — OSS library is Apache-2.0, but Spark + GPU/CPU cluster ops are disproportionate to a hobby Gym; Healthcare/Finance/Legal packs are **separate EULAs** ([Spark NLP licence page](https://nlp.johnsnowlabs.com/license.html); [JSL EULA](https://www.johnsnowlabs.com/health-nlp-spark-ocr-libraries-eula/)).
7. **GEC-as-tutor** (rewrite the Learner’s German on the fly) — English-centric shared-task science, thin German model cards, Llama-2-based checkpoints inherit **Llama 2 Community License** ([LeoLM card](https://huggingface.co/LeoLM/leo-hessianai-7b)); pedagogically it *erases* the error instead of supporting Noticing in a curated text.
8. **GPU transformer pipelines as always-on Azure spend** for v1 — `de_dep_news_trf` is ~391 MB plus BERT runtime ([trf 3.8.0](https://github.com/explosion/spacy-models/releases/tag/de_dep_news_trf-3.8.0)); Stanza recommends GPU for speed ([Stanza overview](https://stanfordnlp.github.io/stanza/)). v1 does not need live parsing of the Learner.

Safe *later* uses of a **thin** sidecar (optional, not a platform): analyse *your own approved sentences* for Case/lemma sanity checks; run LanguageTool **self-hosted OSS** on drafts; match **hand-written** patterns. That is tooling, not architecture.

---

## 1. spaCy (Explosion)

| Field | Finding |
| --- | --- |
| **Provides** | Industrial Python NLP: tokenizer, trainable **tagger** (STTS XPOS), **morphologizer** (morph features + coarse POS), **parser** (deps), **lemmatizer**, sentence splitter, **NER** (PER/LOC/ORG/MISC on `core` models). Linguistic feature docs: [spaCy linguistic features](https://spacy.io/usage/linguistic-features). Matcher for user-defined token patterns: [rule-based matching](https://spacy.io/usage/rule-based-matching). |
| **Quality / German** | Official **v3.8.0** scores on Explosion’s model releases (in-domain TIGER/WikiNER eval — **not learner text**): |

**`de_core_news_sm`** — 13 MB, CPU, MIT ([release](https://github.com/explosion/spacy-models/releases/tag/de_core_news_sm-3.8.0)): TAG 97.39, POS 98.01, MORPH_ACC 90.69, DEP UAS 92.05 / LAS 89.88, LEMMA 97.50, NER F 82.10.

**`de_core_news_md`** — 42 MB ([release](https://github.com/explosion/spacy-models/releases/tag/de_core_news_md-3.8.0)): TAG 97.79, POS 98.29, MORPH_ACC 91.57, UAS 92.56 / LAS 90.61, LEMMA 97.73, NER F 83.81.

**`de_core_news_lg`** — 541 MB, 500k 300-d vectors ([release](https://github.com/explosion/spacy-models/releases/tag/de_core_news_lg-3.8.0)): TAG 97.97, POS 98.42, MORPH_ACC 92.16, UAS 92.70 / LAS 90.79, LEMMA 97.94, NER F 84.93.

**`de_dep_news_trf`** — 391 MB, **no NER**, BERT `bert-base-german-cased` ([release](https://github.com/explosion/spacy-models/releases/tag/de_dep_news_trf-3.8.0)): TAG 99.06, POS 99.15, MORPH_ACC 97.00, UAS 95.60 / LAS 94.39, LEMMA 98.42.

Parser labels are **TIGER** (`sb`, `oa`, `da`, `nk`, …), not Universal Dependencies. Morph/POS on the same models use UD-style feature names in the morphologizer label scheme (same releases).

| Field | Finding |
| --- | --- |
| **License** | **Library:** MIT ([raw LICENSE](https://raw.githubusercontent.com/explosion/spaCy/master/LICENSE)). **These German models 3.8.0:** MIT on the release pages above. Explosion: library MIT; **each model has its own terms** from source corpora ([issue #5394](https://github.com/explosion/spaCy/issues/5394)). Training sources listed: TIGER, Tiger2Dep, WikiNER (CC BY 4.0 on WikiNER in [LICENSES_SOURCES](https://huggingface.co/spacy/de_core_news_md/blob/main/LICENSES_SOURCES)); Explosion states TIGER commercial terms allow distributing trained models that cannot reconstruct the corpus ([issue #1800](https://github.com/explosion/spaCy/issues/1800)). **UNVERIFIED for a court:** whether *your* counsel accepts that chain; IMS still says commercial use of *the corpus or data derived from the corpus* needs written agreement ([TIGER licence](https://www.ims.uni-stuttgart.de/documents/ressourcen/korpora/tiger-corpus/license/htmlicense.html)). IMS also notes the commercial TIGER licence has been “under review” since 2020 ([TIGER corpus page](https://www.ims.uni-stuttgart.de/en/research/resources/corpora/tiger/)). |
| **Self-host** | Yes. `pip install spacy` + `python -m spacy download de_core_news_*`. No vendor API required. |
| **Deterministic vs ML** | **ML** (CNN/tok2vec or transformer) plus **rule** components (`attribute_ruler`). Same text can differ across model versions. Matcher patterns are deterministic given tokens. |
| **Hobby ops** | `sm` is the hobby default (13 MB, CPU). `lg` is 541 MB RAM/disk. `trf` wants a GPU for comfort, CPU possible but slow. Python 3 environment to maintain. |
| **.NET/Azure** | **Official runtime is Python/Cython**, not .NET. Community **SpacyDotNet** wraps spaCy via **Python.NET** (Python 3.12 + spaCy 3.8.5 in the README) and is explicitly **not** a complete API ([AMArostegui/SpacyDotNet](https://github.com/AMArostegui/SpacyDotNet)). Practical Azure shapes: **Python worker/sidecar** or **HTTP** around spaCy; not a first-party ONNX-.NET pipeline. **UNVERIFIED:** full official ONNX export of the German `core` pipelines for .NET. |

---

## 2. Stanza (Stanford NLP)

| Field | Finding |
| --- | --- |
| **Provides** | Python neural pipeline: tokenize, **MWT** expansion (needed for German contractions like *im*), lemma, **UPOS/XPOS/UFeats**, **UD dependency parse**, NER; optional CoreNLP client ([Stanza overview](https://stanfordnlp.github.io/stanza/); [Getting started](https://stanfordnlp.github.io/stanza/getting_started.html)). Output is **UD-native** (CoNLL-U-like). |
| **Quality / German** | Stanza **v1.5.1**, UD **2.12**, **charlm not transformers**, **end-to-end from raw text** ([performance page](https://stanfordnlp.github.io/stanza/performance.html)): **German GSD:** Tokens 99.62, UPOS 95.61, XPOS 97.36, UFeats 89.78, Lemmas 97.23, UAS 85.80, LAS 81.80. **German HDT:** UPOS 98.30, UFeats 92.57, Lemmas 98.04, UAS 95.59, LAS 93.56. NER (ACL demo paper Table 3, micro F1): **CoNLL03 German 81.9**, **GermEval2014 85.2** ([Qi et al. 2020](https://aclanthology.org/2020.acl-demos.14/); [NER models page](https://stanfordnlp.github.io/stanza/ner_models.html)). |
| **License** | **Code:** Apache 2.0 ([raw LICENSE](https://raw.githubusercontent.com/stanfordnlp/stanza/main/LICENSE); [overview License section](https://stanfordnlp.github.io/stanza/)). **Models:** “License information for models built from the UD data is **unclear**”; Stanford grants **ODC-By 1.0** on language packs *to the extent Stanford has rights*; **users must check each treebank licence** ([performance page](https://stanfordnlp.github.io/stanza/performance.html)). UD German-GSD / HDT treebanks: **CC BY-SA 4.0** ([UD 2.17 licence overview](https://lindat.mff.cuni.cz/repository/static/license-ud-2.17.html); [GSD](https://universaldependencies.org/treebanks/de_gsd/index.html)). |
| **Self-host** | Yes (`pip install stanza`; `stanza.download('de')`). PyTorch. GPU optional, recommended for bulk ([overview](https://stanfordnlp.github.io/stanza/); [getting started](https://stanfordnlp.github.io/stanza/getting_started.html)). |
| **Deterministic vs ML** | Fully **neural** (PyTorch). |
| **Hobby ops** | Heavier than spaCy `sm`. Downloads per language package; transformer `default_accurate` packages are larger ([Models](https://stanfordnlp.github.io/stanza/models.html)). Fine on CPU for occasional sentences; GPU if you batch a corpus. |
| **.NET/Azure** | Official **Python**. HTTP sidecar is the boring integration. CoreNLP (Java, GPL) is a *separate* optional client ([overview](https://stanfordnlp.github.io/stanza/)). |

---

## 3. LanguageTool

| Field | Finding |
| --- | --- |
| **Provides** | **Proofreading:** spelling, grammar, and style **error detection** with messages and suggestions. Process: split sentences → words → POS tags → match **Java rules** and **`grammar.xml` patterns** ([development overview](https://dev.languagetool.org/development-overview)). This is **not** GEC (no sequence-to-sequence rewrite of a whole learner sentence as the primary model). Premium/cloud may add **non-open-source** rules ([public API](https://dev.languagetool.org/public-http-api.html)). |
| **Quality / German** | German is a **first-class** language on the project README ([README](https://raw.githubusercontent.com/languagetool-org/languagetool/master/README.md)). Official **rough** quality proxy: **rule counts per language** for **LanguageTool 6.6 (2025-03-27)** on [Supported languages](https://dev.languagetool.org/languages). **UNVERIFIED:** exact German XML/Java counts — the table did not survive automated HTML extraction in this research pass; re-open that page for the current integers. Rule count ≠ precision/recall on learner essays. |
| **License** | **Core:** **LGPL 2.1 or later** ([README](https://raw.githubusercontent.com/languagetool-org/languagetool/master/README.md); [COPYING.txt](https://github.com/languagetool-org/languagetool/blob/master/languagetool-standalone/COPYING.txt); GitHub licence badge LGPL-2.1). **Third-party libraries/resources may differ** (same COPYING note). **LGPL commercial implication:** you may use the library from proprietary code if you meet LGPL conditions (dynamic linking / offering object files for the LT portion — **have counsel read LGPL 2.1**; this note is not that reading). **Cloud product Terms** are a different contract (Learneo): free Service is **personal, non-commercial** except Team/written exceptions; **do not build a competing product** from the Service ([terms](https://languagetool.org/legal/terms)). |
| **Self-host** | Yes: Java 8+ (build needs Java 17) **embedded HTTP server** ([HTTP server](https://dev.languagetool.org/http-server.html)); Java API ([java-api](https://dev.languagetool.org/java-api)). Public cloud: `https://api.languagetool.org/v2/check` — **no automated requests**; 20 req/IP/min, 20 KB/request ([public API](https://dev.languagetool.org/public-http-api.html)). |
| **Deterministic vs ML** | Primarily **rule-based** (XML + Java). Some n-gram/language-model style features exist in the ecosystem; **UNVERIFIED** how much of OSS 6.6 German checking is neural vs rules without reading those modules. |
| **Hobby ops** | One JVM process; memory is the cost (hundreds of MB **UNVERIFIED** exact heap for German-only). No GPU. Docker community images exist (not first-party). |
| **.NET/Azure** | **HTTP** to self-hosted Java is the documented integration ([HTTP server](https://dev.languagetool.org/http-server.html), [JSON API](https://languagetool.org/http-api/swagger-ui/#!/default/post_check)). Or run Java next to ASP.NET. Do **not** point a production app at the public API. |

---

## 4. German morphological analysers

| Tool | Provides | Quality / German | License | Self-host | Det vs ML | Hobby | .NET/Azure |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **SMOR** (IMS / Schmid) | Finite-state **inflection, derivation, compounding**; analyses like `Haus<+NN>` Case/Num ([SMOR page](https://www.cis.uni-muenchen.de/~schmid/tools/SMOR/); [LREC 2004](https://aclanthology.org/L04-1271/)). Not a dependency parser. | Classic gold-standard FST coverage for **canonical** word forms; fails or overgenerates on typos/learner forms (inherent to lexicon FSTs — **UNVERIFIED** published learner-corpus numbers on the SMOR page). | **Non-commercial free; commercial licence must be purchased** ([SMOR page](https://www.cis.uni-muenchen.de/~schmid/tools/SMOR/)). | Yes (SFST), after obtaining the package. | **Deterministic FST** (ambiguous analyses possible). | Research install; not a product default. | Native C/SFST binary or process; not .NET. |
| **Zmorge / SMORLemma** | Wiktionary-extracted lexicon + **modified SMOR grammar**; compiled analysers historically at UZH ([zmorge README](https://raw.githubusercontent.com/rsennrich/zmorge/master/README.md); [SMORLemma](https://github.com/rsennrich/SMORLemma); LREC 2014). Project page also stated: lexicon **CC BY-SA 3.0**; scripts/grammar **GPL v2** ([Zmorge page — may 403](https://pub.cl.uzh.ch/users/sennrich/zmorge/)). | Coverage grows with Wiktionary; quality is “extracted lexicon + SMOR,” not a UD F1. | **GPL v2** for zmorge scripts ([README LICENSE section](https://raw.githubusercontent.com/rsennrich/zmorge/master/README.md)); SMORLemma GitHub: **GPL-2.0**. GPL is **copyleft** — wrapping in a closed product is a legal event. | Yes (Python + SFST). | FST / lexicon. | SFST toolchain; Python 2-era scripts in README — ops smell. | Process wrapper. |
| **Morphisto** | Historically an open SMOR-compatible German analyser (different lexicon). | **UNVERIFIED** current home/quality: original Google Code project is archival; do not treat as maintained without a live upstream. | **UNVERIFIED** in this pass (commonly described as GPL; **do not rely without the current LICENSE file**). | If you can still obtain a build. | FST. | Avoid as a platform dependency. | — |
| **RFTagger** | **Fine-grained POS** (e.g. `ART.Indef.Nom.Sg.Masc`) ([RFTagger](https://www.cis.uni-muenchen.de/~schmid/tools/RFTagger/); [Schmid & Laws, COLING 2008](https://aclanthology.org/C08-1091/)). German among trained languages. | Decision-tree tagger; numbers in the paper, not re-evaluated here. **News/treebank trained**, not learner. | Source “**freely available for education, research and other non-commercial purposes**” ([RFTagger](https://www.cis.uni-muenchen.de/~schmid/tools/RFTagger/)). | Yes (Linux binaries in package). | ML (decision trees) over a rich tagset. | Small; licence blocks casual commercial wrap. | Native binary. |
| **TreeTagger** | **POS + lemma**; German parameter file and **chunker** ([TreeTagger](https://www.cis.uni-muenchen.de/~schmid/tools/TreeTagger/)). | Widely used in corpus linguistics; **not** a modern SOTA claim on the homepage. German STTS-style tags. | “**Freely available for research, education and evaluation.** For commercial and other licenses, contact the developer.” Download = agree to terms ([TreeTagger](https://www.cis.uni-muenchen.de/~schmid/tools/TreeTagger/)). | Yes (Linux/Windows/Mac binaries). | ML (decision trees) + lexicon. | Easy CLI; **licence is the blocker** for a later product. | CLI / Java wrappers exist (third party); still bound by TreeTagger terms. |
| **spaCy morphologizer** | Neural morph feature tagging in the German pipelines (see §1 scores). | MORPH_ACC 90.69 (`sm`) … 97.00 (`trf`) on Explosion’s eval ([releases](https://github.com/explosion/spacy-models/releases/tag/de_core_news_sm-3.8.0)). | MIT models as in §1. | Yes. | ML. | Best “just works” morph for a hobby **if** TIGER-trained news morph is enough. | Python sidecar. |
| **Stanza morph (UFeats)** | UD `feats` on each word after MWT expansion. | GSD UFeats **89.78**; HDT **92.57** ([performance](https://stanfordnlp.github.io/stanza/performance.html)). | Apache code + treebank/ODC-By caveats (§2). | Yes. | ML. | Fine; UD-native. | Python sidecar. |

**FST vs tagger:** SMOR/Zmorge **analyse** a form into stem+features (can be **ambiguous**). spaCy/Stanza **predict one** morph bundle from context. Learner *\*dem Frau* may get a confident **wrong** Case from an ML tagger; an FST may refuse or list analyses. Neither *explains* the pedagogical rule.

---

## 5. Grammatical Error Correction (GEC)

### BEA shared task (English, but it defines the field)

The **BEA-2019 Shared Task on GEC** required systems to **correct all grammatical, lexical and orthographic errors** in written English. New data: **Write & Improve + LOCNESS**. Metric: **ERRANT F0.5**. Tracks: Restricted / Unrestricted / Low Resource ([Bryant, Felice, Andersen, Briscoe 2019](https://aclanthology.org/W19-4406/); [PDF](https://aclanthology.org/W19-4406.pdf)). This continues HOO / **CoNLL-2013/2014** GEC tasks. **It is English.** German was not a BEA-2019 track.

### Why GEC ≠ parsing native text

| Parsing (UD/spaCy) | GEC |
| --- | --- |
| Assign structure to a sentence treated as **already grammatical** (training: treebanks of edited text) | Map **ill-formed** text to a **corrected** string (training: parallel error/correction) |
| Evaluation: UAS/LAS/POS on gold trees | Evaluation: F0.5 vs gold **edits** (ERRANT / M2) |
| A learner error often yields a **plausible but wrong** tree | A GEC system may **rewrite away** the form you wanted the Learner to notice |
| No notion of “target hypothesis” | Requires a target hypothesis (annotator’s correction) |

Falko–MERLIN construction of German GEC data: original `ctok` vs correction layers `ZH1`/`TH1` ([Boyd WNUT 2018 README](https://raw.githubusercontent.com/adrianeboyd/boyd-wnut2018/master/README.md)).

### German GEC systems / data

| Resource | What | Licence (owning page) |
| --- | --- | --- |
| **Falko** learner corpus | HU Berlin L2 German | **CC BY 3.0** ([Boyd README](https://raw.githubusercontent.com/adrianeboyd/boyd-wnut2018/master/README.md); [Falko](https://www.linguistik.hu-berlin.de/de/institut/professuren/korpuslinguistik/forschung/falko/zugang)) |
| **MERLIN** | Learner texts, CEFR-linked | **CC BY-SA 4.0** (same README; [MERLIN HDL](http://hdl.handle.net/20.500.12124/6)) |
| **Boyd 2018** | Low-resource German GEC using Wikipedia edits + Falko–MERLIN | Paper [W18-6111](https://aclanthology.org/W18-6111/) |
| **Náplava & Straka 2019** | Transformer GEC; experiments **Czech, German, Russian**; synthetic bitext | [D19-5545](https://aclanthology.org/D19-5545/); code [ufal/low-resource-gec-wnut2019](https://github.com/ufal/low-resource-gec-wnut2019). AKCES-GEC (Czech) **CC BY-NC-SA 4.0** — **NC**. |
| **HF `0qln/mbart-german-grammar-corrector`** | Duplicate of `MRNH/mbart-german-grammar-corrector`; mBART fine-tuned on **Falko-MERLIN** ([card](https://huggingface.co/0qln/mbart-german-grammar-corrector)) | **UNVERIFIED licence on card** (no licence field in the fetched card). ~610M seq2seq. |
| **HF `tartuNLP/leo-hessianai-7b-p1-llama-errors-p2-GEC`** | 7B GEC fine-tune of LeoLM ([card](https://huggingface.co/tartuNLP/leo-hessianai-7b-p1-llama-errors-p2-GEC)) | Base **LeoLM/leo-hessianai-7b** is **Llama 2 Community License** ([LeoLM card](https://huggingface.co/LeoLM/leo-hessianai-7b)). Fine-tune licence **UNVERIFIED** if not restated; **Llama 2 has a commercial use policy** (Meta’s agreement — read before any product). GPU-class model. |

**Hobby:** German GEC is a **research task**, not a v1 Gym feature. Do not wrap a 7B rewriter as “the app’s language intelligence.”

---

## 6. Hugging Face German models (POS / dep / morph / NER / GEC)

HF is a **host**, not a licence. Read each **model card**. Sample of cards actually opened:

| Model | Task | Licence on card | Notes |
| --- | --- | --- | --- |
| [google-bert / bert-base-german-cased](https://huggingface.co/bert-base-german-cased) (deepset German BERT) | Fill-mask / backbone | **MIT** | Trained on Wiki, OpenLegalData, news (~12 GB). Used inside spaCy `de_dep_news_trf`. |
| [dbmdz/bert-base-german-cased](https://huggingface.co/dbmdz/bert-base-german-cased) | Fill-mask / backbone | **MIT** | Wiki + EU Bookshop + OpenSubtitles + crawls. Downstream POS/NER referred off-card. |
| [spacy/de_core_news_sm](https://huggingface.co/spacy/de_core_news_sm) | spaCy pipeline | **MIT** (card + Explosion release) | Same as §1. |
| [flair/ner-german](https://huggingface.co/flair/ner-german) | 4-class NER | **UNVERIFIED on fetched card** (no licence line). Flair **library** is **MIT** ([LICENSE](https://raw.githubusercontent.com/flairNLP/flair/master/LICENSE)). | Claims **F1 87.94** on “CoNLL-03 German revised” ([card](https://huggingface.co/flair/ner-german)). CoNLL-03 **dataset** terms may constrain commercial redistribution of models trained on it — **UNVERIFIED** here; check CoNLL-03 / LDC. |
| German GEC checkpoints | seq2seq / LLM | See §5 | Cards are thin; treat as research artefacts. |

**POS/dep/morph on HF** are usually **fine-tunes of BERT/GBERT on UD or TIGER** uploaded by third parties. **UNVERIFIED** unless you open that specific card’s `license:` YAML. Prefer Explosion/Stanza/UDPipe *official* packages over random Hub POS models.

**NER** is the weakest pedagogical signal for a grammar Gym (named entities ≠ Case).

---

## 7. UDPipe and Trankit

### UDPipe (ÚFAL)

| Field | Finding |
| --- | --- |
| **Provides** | Trainable **tokenize, tag, lemmatize, dependency parse** of CoNLL-U; models for nearly all UD treebanks. Binary + **C++ / Python / Perl / Java / C#** library + web service ([UDPipe info](https://lindat.mff.cuni.cz/services/udpipe/info.php)). UDPipe 2 uses neural models + optional mBERT ([UDPipe 2 models](https://ufal.mff.cuni.cz/udpipe/2/models)). |
| **Quality / German** | UDPipe **2** UD 2.17 models page (raw text): **german-gsd** UPOS 96.87, XPOS 97.71, UFeats 91.17, Lemmas 97.19, UAS 87.44, LAS 84.36; **german-hdt** UPOS 98.54, UFeats 94.20, UAS 96.90, LAS 96.04 ([models table](https://ufal.mff.cuni.cz/udpipe/2/models)). |
| **License** | **Library: MPL 2.0.** **Models: CC BY-NC-SA** (non-commercial), plus original treebank conditions ([info.php](https://lindat.mff.cuni.cz/services/udpipe/info.php); [2.12 handle](https://lindat.cz/repository/xmlui/handle/11234/1-5200)). German GSD/HDT data are CC BY-SA, but **ÚFAL’s packaged UDPipe 2 model licence is still NC-SA** on the pages cited. |
| **Self-host** | Yes (local models + REST). |
| **Det vs ML** | UDPipe 1: neural+; UDPipe 2: neural. |
| **Hobby** | Attractive C# binding **until** NC models block later commercialisation. |
| **.NET/Azure** | **Documented C# library** ([info.php](https://lindat.mff.cuni.cz/services/udpipe/info.php)). Still Python/C++/HTTP otherwise. |

### Trankit (U Oregon)

| Field | Finding |
| --- | --- |
| **Provides** | “Light-weight transformer-based” multilingual pipeline (tokenize, POS, dep, NER, etc.) ([GitHub](https://github.com/nlp-uoregon/trankit)). |
| **Quality / German** | Paper/docs claim competitive UD scores; **UNVERIFIED German numbers in this pass** (did not extract a German row from a first-party table). |
| **License** | **Apache 2.0** ([LICENSE](https://raw.githubusercontent.com/nlp-uoregon/trankit/master/LICENSE)). **Models:** check each download; often UD-derived — same treebank hygiene as Stanza. |
| **Self-host** | Yes, Python + PyTorch. |
| **Det vs ML** | Transformer ML. |
| **Hobby** | GPU-friendly; another Python stack overlap with Stanza. Maintenance is quieter than spaCy/Stanza. |
| **.NET/Azure** | Python sidecar. |

---

## 8. JVM / .NET-adjacent libraries

| Tool | Provides | German | License | Self-host | Det vs ML | Hobby | .NET/Azure |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Apache OpenNLP** | Java ML: tokenize, sentence, POS, NER, etc. ([manual](https://opennlp.apache.org/docs/2.5.4/manual/opennlp.html)) | UD-trained models including German GSD POS, e.g. filename pattern `opennlp-de-ud-gsd-pos-…` ([models README](https://downloads.apache.org/opennlp/models/ud-models-1.3/README)) | **Apache 2.0** (library + those UD models README) | Yes | ML (MaxEnt/perceptron-style classic models) | JVM, small models, **no GPU required**. Quality below current neural SOTA (no owning “beats Stanza” claim found). | Java process or IKVM; official is **Java**. |
| **Stanford CoreNLP** | Java pipeline: POS, NER, dep/constituency, coref, … **German among 8 languages** ([overview](https://stanfordnlp.github.io/CoreNLP/)) | Models distributed as language JARs (Maven/HF). **UNVERIFIED** current German LAS on the overview page. | **GPL v3+** composite; commercial licence from Stanford for proprietary distribution ([same page](https://stanfordnlp.github.io/CoreNLP/)). Stanza neural models are **not** interchangeable with CoreNLP ([FAQ](https://stanfordnlp.github.io/stanza/faq.html)). | Yes (Java 8+) | Mix of ML annotators | Heavy JARs; GPU not the CoreNLP story. | HTTP / Java; **Stanford.NLP.NET NuGet is deprecated** — use Maven + **IKVM.Maven.Sdk** if you insist ([Stanford.NLP.NET README](https://github.com/sergey-tihon/stanford.nlp.net)). GPL still applies to CoreNLP. |
| **Spark NLP** (John Snow Labs) | Scala/Python annotators on Apache Spark ([licence page](https://nlp.johnsnowlabs.com/license.html)) | Pretrained `xx_de` models exist on JSL Hub; **UNVERIFIED** specific German POS F1 without opening a live model page (one lemma URL 404’d). | **Library Apache 2.0** ([GitHub LICENSE](https://github.com/JohnSnowLabs/spark-nlp/blob/master/LICENSE)). **Healthcare/Finance/Legal: commercial EULA** ([EULA](https://www.johnsnowlabs.com/health-nlp-spark-ocr-libraries-eula/)). Individual Hub models: read each card. | Yes, but **Spark** | ML | **Wrong ops shape** for a solo Gym. | JVM; Azure Databricks would be the “native” cloud — overkill. |

---

## Comparison snapshot (not a choice)

| Tool | German linguistic depth | Commercial-path licence (software+typical models) | Learner text | Pedagogical constructions | Hobby fit |
| --- | --- | --- | --- | --- | --- |
| spaCy `de_core_news_sm` | High (STTS + TIGER deps + morph) | MIT library+models; TIGER *corpus* still legally subtle | No (news) | Only via your Matchers | **Best casual analyser** |
| Stanza `de` | High, **UD-native** | Apache + check UD/ODC-By | No (UD genre) | UD tags only | Good; heavier |
| LanguageTool OSS | Error **rules**, not a parse tree | LGPL core; self-host | Partial (proofreading) | Error rules ≠ CxG | Good **draft checker**, not Gym core |
| SMOR / TreeTagger / RFTagger | Morph / STTS | **Non-commercial defaults** | No | No | Research only |
| UDPipe 2 models | UD | **CC BY-NC-SA models** | No | UD only | C# yes, **NC no** for product |
| Trankit | UD-ish neural | Apache code | No | UD only | Optional Python |
| OpenNLP UD models | Shallow POS etc. | Apache 2.0 | No | No | Simple JVM |
| CoreNLP | Broad Java NLP | **GPL** | No | No | Avoid in closed product |
| Spark NLP | Broad | Apache lib; extra EULAs | No | No | Ops trap |
| German GEC HF | Rewrites | Mixed / Llama-2 / missing cards | **Yes (task)** | No (erases form) | Not v1 |

---

## Implications for Davio (no architecture decision)

1. **v1 Gym content is owner-authored, edited German.** A parser trained on news/UD is *closer* to that than to free learner production — still not a construction tagger. Prefer **human tags on owned pieces** for Noticing targets (already the product direction in [03](03-mvp-activity-feasibility.md)).
2. If a later experiment needs automatic Case/lemma on *your* sentences, **spaCy `sm` (MIT) or Stanza (Apache + UD hygiene)** are the two first-party, self-hosted, well-documented options. That experiment is not a platform.
3. **LanguageTool self-hosted** can help the *owner* proof drafts. It is not GEC and not a Gap map.
4. **Do not** standardise on TreeTagger/SMOR/UDPipe-NC/CoreNLP-GPL if the founder wants a clean later commercial path.
5. **GEC** is a different scientific object from “explain this *dem*.” Keep it out of the Gym loop unless a future ticket is explicitly “correct my writing.”

**Founder approval not required** for this research note. **Founder approval would be required** before adding any of these as a production dependency or before treating Explosion’s MIT German models as legally independent of TIGER (counsel).

---

## Sources (owning pages)

- spaCy library MIT: https://raw.githubusercontent.com/explosion/spaCy/master/LICENSE  
- spaCy linguistic features: https://spacy.io/usage/linguistic-features  
- spaCy matching: https://spacy.io/usage/rule-based-matching  
- spaCy German models hub: https://spacy.io/models/de  
- Releases: https://github.com/explosion/spacy-models/releases/tag/de_core_news_sm-3.8.0 (and `md`, `lg`, `de_dep_news_trf-3.8.0`)  
- Explosion on model vs library licences: https://github.com/explosion/spaCy/issues/5394  
- Explosion on TIGER vs model licence: https://github.com/explosion/spaCy/issues/1800  
- TIGER: https://www.ims.uni-stuttgart.de/en/research/resources/corpora/tiger/  
- TIGER academic licence: https://www.ims.uni-stuttgart.de/documents/ressourcen/korpora/tiger-corpus/license/htmlicense.html  
- Stanza: https://stanfordnlp.github.io/stanza/  
- Stanza Apache LICENSE: https://raw.githubusercontent.com/stanfordnlp/stanza/main/LICENSE  
- Stanza performance: https://stanfordnlp.github.io/stanza/performance.html  
- Stanza FAQ (genre): https://stanfordnlp.github.io/stanza/faq.html  
- Stanza NER: https://stanfordnlp.github.io/stanza/ner_models.html  
- Qi et al. 2020: https://aclanthology.org/2020.acl-demos.14/  
- UD German-GSD: https://universaldependencies.org/treebanks/de_gsd/index.html  
- UD 2.17 treebank licences: https://lindat.mff.cuni.cz/repository/static/license-ud-2.17.html  
- LanguageTool README: https://raw.githubusercontent.com/languagetool-org/languagetool/master/README.md  
- LanguageTool languages: https://dev.languagetool.org/languages  
- LanguageTool rules intro: https://dev.languagetool.org/development-overview  
- LanguageTool HTTP server: https://dev.languagetool.org/http-server.html  
- LanguageTool public API: https://dev.languagetool.org/public-http-api.html  
- LanguageTool terms: https://languagetool.org/legal/terms  
- SMOR: https://www.cis.uni-muenchen.de/~schmid/tools/SMOR/  
- TreeTagger: https://www.cis.uni-muenchen.de/~schmid/tools/TreeTagger/  
- RFTagger: https://www.cis.uni-muenchen.de/~schmid/tools/RFTagger/  
- Zmorge README: https://raw.githubusercontent.com/rsennrich/zmorge/master/README.md  
- SMORLemma: https://github.com/rsennrich/SMORLemma  
- BEA-2019: https://aclanthology.org/W19-4406/  
- Boyd 2018 / Falko-MERLIN GEC: https://github.com/adrianeboyd/boyd-wnut2018  
- Náplava & Straka 2019: https://aclanthology.org/D19-5545/  
- UDPipe licences: https://lindat.mff.cuni.cz/services/udpipe/info.php  
- UDPipe 2 models: https://ufal.mff.cuni.cz/udpipe/2/models  
- Trankit: https://github.com/nlp-uoregon/trankit  
- CoreNLP: https://stanfordnlp.github.io/CoreNLP/  
- OpenNLP UD models: https://downloads.apache.org/opennlp/models/ud-models-1.3/README  
- Spark NLP licence: https://nlp.johnsnowlabs.com/license.html  
- SpacyDotNet: https://github.com/AMArostegui/SpacyDotNet  
- German BERT: https://huggingface.co/bert-base-german-cased  
- dbmdz German BERT: https://huggingface.co/dbmdz/bert-base-german-cased  
- Flair NER German: https://huggingface.co/flair/ner-german  
- LeoLM 7B licence: https://huggingface.co/LeoLM/leo-hessianai-7b  

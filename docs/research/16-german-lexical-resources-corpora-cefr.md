# German lexical resources, corpora, frequency, and CEFR

Lexica / CEFR annex to the language-intelligence synthesis ([hub](language-intelligence-domain.md)).

**Date:** 2026-08-22  
**Scope:** What existing lexical knowledge bases, corpora, frequency lists, and Council of Europe / exam-board artefacts actually are, and what they can and cannot do for a German language-learning product. Primary sources (owning institutions, licences, dumps, CoE documents). No architecture, no code, no stack choice.

This note is research, not legal advice. Licence implications are read from the deeds and owner pages cited. Claims that could not be verified on an owning page are marked **UNVERIFIED**.

**Audience:** a founder who is a strong engineer, not a linguist. The linguistic point of this note is: **do not treat “B1 German” as one grammar-plus-vocabulary list**, and **do not rebuild WordNet / FrameNet / a CEFR-tagged lexicon from scratch** when the useful pieces already exist under licences that either help or block a later commercial product.

---

## How to read this note

For each resource, the same axes:

| Axis | Question |
| --- | --- |
| **Provides** | What kind of linguistic object (lemmas, synsets, valency, frequencies, can-do descriptors)? |
| **German coverage** | Breadth and known holes |
| **Licence + commercial** | Can a hobby that later charges money keep using it? |
| **Self-host / dump** | Official dump vs web-only vs signed licence |
| **Quality caveats** | Grammaticality ≠ naturalness ≠ frequency ≠ learner difficulty |
| **Hobby fit** | Use as lookup / validation / human desk research vs embed in the product |

**Share-alike in one sentence.** Creative Commons Attribution-ShareAlike (CC BY-SA) lets you copy, adapt, and use **even commercially**, but if you *remix, transform, or build upon* the material you must release **your contributions under the same licence** and you may not add legal terms or DRM that block what the licence allows ([CC BY-SA 4.0 deed](https://creativecommons.org/licenses/by-sa/4.0/deed.en)). That is the main trap for a closed proprietary lexicon derived from Wiktionary or OpenThesaurus.

**Facts vs creative text (legal uncertainty, not a finding).** The CC deed itself says you need not comply with the licence “for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.” Isolated grammatical facts (e.g. that *Hund* is masculine) are often treated as uncopyrightable facts in many jurisdictions; **definitions, example sentences, and the editorial arrangement of an entry are typically copyrightable**. Whether a derived machine lexicon is an “adaptation” is a lawyer question. Do not assume “we only took gender tags, so share-alike does not apply.”

---

## A. Lexical / knowledge resources

### A.1 Wiktionary (especially German Wiktionary)

**What it provides.** A collaboratively edited dictionary. German Wiktionary entries for German lemmas typically include: part of speech, **genus** in the heading (`{{m}}` / `{{f}}` / `{{n}}` etc.), **Flexionstabellen** (noun declension / verb conjugation templates), numbered **Bedeutungen** (senses), **Beispiele**, pronunciation (IPA), hyphenation, and often synonyms, translations, and references. Entry structure is specified by the project itself ([Hilfe:Allgemeines zu Einträgen](https://de.wiktionary.org/wiki/Hilfe:Allgemeines_zu_Eintr%C3%A4gen); [Hilfe:Formatvorlage](https://de.wiktionary.org/wiki/Hilfe:Formatvorlage); [Hilfe:Flexionstabellen](https://de.wiktionary.org/wiki/Hilfe:Flexionstabellen)). A single page can hold several languages and several parts of speech; inflected forms may be separate pages that point back to a lemma.

English Wiktionary also has German lemmas and is the stated source of UniMorph German (below). For German-specific inflection tables and genus conventions, **de.wiktionary is the richer first-party template system**.

**German coverage.** Very large and continuously updated; quality is volunteer-uneven. Coverage of rare compounds, Austrian/Swiss variants, and dated senses varies by entry. **UNVERIFIED:** live lemma count for German-in-German-Wiktionary as of this date (dumps exist; counting is an extraction task).

**Licence + commercial.** Wikimedia dump legal page: original textual content is **GFDL and CC BY-SA 4.0**; commercial reuse is explicitly in scope (“including commercial purposes!”) if licence terms are followed ([dumps.wikimedia.org/legal.html](https://dumps.wikimedia.org/legal.html)). German Wiktionary’s own licence page still describes **CC BY-SA 3.0 + GFDL** and states that commercial use is allowed if the licence is followed ([Wiktionary:Lizenzbestimmungen](https://de.wiktionary.org/wiki/Wiktionary:Lizenzbestimmungen)) — that page’s wording still talks about “Wikipedia-Text”; treat **Wikimedia Terms of Use / dump legal.html as controlling**, and expect mixed 3.0/4.0 history as on other Wikimedia projects.

**Share-alike implication for a derived lexicon.** If Davio’s stored lexicon is an adaptation of Wiktionary text (definitions, examples, compiled inflection tables copied from templates), **that derived lexicon is likely BY-SA**: you can sell the app, but you cannot keep the derived lexical database closed. Attribution, licence notice, and “indicate if changes were made” apply. Mixing BY-SA definitions into a proprietary “Davio WordNet” and refusing to share the derived data is the failure mode.

**Self-host / dump.** Official XML/wikitext dumps: [https://dumps.wikimedia.org/dewiktionary/latest/](https://dumps.wikimedia.org/dewiktionary/latest/). Parsing wikitext is non-trivial (templates, not a clean API). Third-party extractors (e.g. wiktextract / kaikki.org) restate that extracted data remains under **the same Wiktionary licences** ([kaikki.org dewiktionary](https://kaikki.org/dewiktionary/index.html)).

**Quality caveats.** Crowd-edited: senses can be incomplete, examples invented or stilted, inflection tables wrong on low-traffic lemmas. Grammaticality of a cited example ≠ what a native speaker would say. Not CEFR-tagged. Not a valency dictionary: you will not reliably learn “dative after *geben*” from a noun page.

**Hobby fit.** **Best open dump for gender + inflections + senses + examples** if you can live with BY-SA (or use it only as a *human* reference and write original examples). Poor fit as a closed commercial lexicon without legal review.

---

### A.2 Wikidata (lexemes)

**What it provides.** Since 2018 Wikidata stores **Lexemes (L), Forms (F), and Senses (S)** — structured words, not just Q-items for concepts ([Wikidata:Lexicographical data](https://www.wikidata.org/wiki/Wikidata:Lexicographical_data)). Forms can carry grammatical features; senses can link to Q-items. This is the Wikimedia project that is actually designed as a **queryable lexical database**.

**German coverage.** German is among the better-covered languages, but completeness of senses, examples, and audio is uneven (community statistics pages exist; **UNVERIFIED** exact live counts here because Listeria/Ordia tables did not render as numbers in the fetch). Treat as: **usable for lemmas/forms, not a substitute for a dictionary**.

**Licence + commercial.** Structured data in the **Lexeme** namespace is **CC0** (public domain dedication), same as items and properties. Unstructured wiki text in other namespaces remains BY-SA ([dumps.wikimedia.org/legal.html](https://dumps.wikimedia.org/legal.html); [Wikidata:Database download](https://www.wikidata.org/wiki/Wikidata:Database_download)). CC0 is the cleanest Wikimedia licence for a later closed product **as long as you take structured lexeme data, not BY-SA prose**.

**Self-host / dump.** Dedicated dumps, e.g. `latest-lexemes.json.bz2` under [https://dumps.wikimedia.org/wikidatawiki/entities/](https://dumps.wikimedia.org/wikidatawiki/entities/). Query Service also exposes lexemes.

**Quality caveats.** Sparser glosses than Wiktionary. Feature inventories follow Wikibase, not a pedagogical grammar. Links to concepts help disambiguation; they do not encode German case government.

**Hobby fit.** **Preferred structured dump if the goal is inflected forms without share-alike.** Combine with human-written or other-licensed glosses if you need learner-facing definitions.

---

### A.3 GermaNet (Universität Tübingen)

**What it provides.** A **lexical-semantic net** for German nouns, verbs, and adjectives: **synsets**, conceptual and lexical relations — explicitly compared to Princeton WordNet, “on-line thesaurus or a light-weight ontology,” integrated into EuroWordNet ([GermaNet, Tübingen](https://uni-tuebingen.de/en/142806)). Release **20.0 (Nov 2025)** size published by Tübingen: 179 438 synsets, 231 500 lexical units, 216 517 literals, 194 367 conceptual relations (same page).

**German coverage.** Broad contemporary German open-class lexicon; not a full-form morphological analyser; not learner-graded.

**Licence + commercial.** **Restrictive, as expected.** Three tracks ([Tübingen licences page, search-indexed](https://uni-tuebingen.de/en/faculties/faculty-of-humanities/departments/modern-languages/department-of-linguistics/chairs/general-and-computational-linguistics/ressources/lexica/germanet/licenses/); academic PDF [academic_license_20.0.pdf](https://hinrichs.sfs.uni-tuebingen.de/files/GermaNet/licenses/academic_license_20.0.pdf)):

1. **Academic Research** — free, academic institutions only, **non-commercial, non-profit research**; **no distribution or marketing of derived products**; yearly reporting of use; commercial use needs a separate agreement.
2. **R&D** — non-academic / consortia, **internal** research and technology development only; contact Tübingen.
3. **Commercial** — internal use **plus** non-exclusive right to distribute/market derived products; **contact Tübingen for terms (fee UNVERIFIED on public page)**.

Licences are **not given to individual students**; an authorised institutional signature is required (same pattern as TüBa-D/Z).

**Self-host / dump.** After signed licence, Tübingen supplies data. Not a public CC dump. Java/Python APIs and GermaNet Rover (academic affiliation) exist ([GermaNet page](https://uni-tuebingen.de/en/142806)).

**Quality caveats.** High expert quality relative to crowd thesauri. WordNet-style synsets are **lexical semantics**, not pedagogy: synonymy ≠ “same difficulty,” hypernymy ≠ CEFR.

**Hobby fit.** **Do not build the product on the academic licence** if commercialisation is a later goal. Commercial licence may be viable later but is not “download and go.” **Do not clone GermaNet** (that is exactly what OdeNet exists to avoid; see D).

---

### A.4 OpenThesaurus

**What it provides.** A **crowd German synonym thesaurus** (synsets of near-synonyms), not a full WordNet (limited taxonomic relations). Web search + API + dumps ([openthesaurus.de](https://www.openthesaurus.de/); [API](https://www.openthesaurus.de/about/api)).

**German coverage.** Large everyday synonym coverage; weak on scientific taxonomy, antonymy structure, and verb frames.

**Licence + commercial.** Data dual-licensed: **CC BY-SA 4.0 *or* LGPL** (licensee chooses). Commercial use is allowed if you follow the chosen licence. The project’s own summary: data may be used, processed, changed, and redistributed if redistributed data stay recognisably under **LGPL** (their simplified German text emphasises LGPL + link to openthesaurus.de) ([Download](https://www.openthesaurus.de/about/download); [Über](https://www.openthesaurus.de/about)). **If you pick BY-SA, share-alike on adaptations applies.** LGPL is often chosen so thesaurus *data* stay open while surrounding software can be proprietary — **still not legal advice**.

API extra conditions (not a substitute for the data licence): visible link (or imprint if background-only), User-Agent with contact, **60 req/min**, prefer dump for bulk, notify for permanent API use ([API page](https://www.openthesaurus.de/about/api)).

**Self-host / dump.** MySQL dump, text export, LibreOffice .oxt; regularly dated on the download page.

**Quality caveats.** Crowd synonyms: sense-mixing (one synset lumps different readings). No CEFR, no valency.

**Hobby fit.** **Good for “another way to say X” and for OdeNet-style open wordnets.** Same share-alike/LGPL discipline as Wiktionary if you *embed* the data.

Related: the download page points at a **Deutsches Vollformen-Wörterbuch** (full-form list with grammatical properties) — historically associated with Morphy/Naber morphology work. Treat as a separate artefact; **confirm its licence on the linked page before shipping** (**UNVERIFIED** here).

---

### A.5 DWDS (Digitales Wörterbuch der deutschen Sprache, BBAW)

**What it provides.** A **lexical information platform**: dictionary articles, corpora, frequency views, IPA via limited API. High-quality contemporary German lexicography, with third-party articles mixed in.

**German coverage.** Excellent for lookup of modern standard German; corpora include restricted newspaper sources.

**Licence + commercial.** **Not an open lexicon dump.** Nutzung der Website/App for querying selected information is free. BBAW **reserves TDM rights under § 44b UrhG**. **Automated querying, crawling, parsing, TDM** (except where § 60d UrhG allows) and **any other exploitation of contents in whole or part** require **express permission**. Results used must stay within normal quotation size and credit DWDS. Web corpora: research-only except the blog corpus (CC BY-SA). FAZ/Zeit/Spiegel concordances: dictionary-traceability + quotation right, not a corpus download ([DWDS Nutzungsbedingungen](https://www.dwds.de/d/nutzungsbedingungen); [Korpussuche FAQ](https://www.dwds.de/d/korpussuche): **no corpus download**, crawling the search engine forbidden).

Duden GWDS 1999 sense texts displayed in DWDS remain **Bibliographisches Institut / Duden copyright; not for commercial use** ([Urheberrechte im DWDS](https://zwei.dwds.de/d/urheberrechte) — same policy family as production DWDS).

Limited public API: snippet/POS existence and IPA, not full articles ([API](https://www.dwds.de/d/api)). API page: many data cannot be opened for legal reasons.

**Self-host / dump.** No. Exception: some web-corpus reproducibility notes; blog corpus CC BY-SA.

**Quality caveats.** Excellent as a **human authority**. Mixing Duden-derived senses into a product is a rights landmine.

**Hobby fit.** **Desk reference and quotation**, not a database to ingest. Ask BBAW before any bulk or productised use.

---

### A.6 Duden (Bibliographisches Institut)

**What it provides.** The culturally dominant commercial dictionary of German: spelling, grammar notes, meanings, examples; apps; **Duden-Mentor** writing assistant; **correction/synonym APIs**; Duden-Bibliothek desktop titles ([digitale Angebote](https://www.duden.de/service); [Duden für Unternehmen](https://www.duden.de/unternehmen); [Duden-API / Mentor](https://www.duden.de/api)).

**German coverage.** Broad standard German; the brand is the quality ceiling many learners expect.

**Licence + commercial.** **Commercial product.** Do **not** scrape duden.de. Official routes: consumer subscriptions, school/enterprise licences, Mentor API packages (published price list on the API page includes a free tier with a small daily request cap and paid Pro tiers), OEM/Business API via `kundenservice@duden.de`. Spellcheck API docs live at [api.duden.io](https://api.duden.io/) (spellcheck + synonyms) — this is **text correction**, not a licensed machine-readable *Wörterbuch dump*.

**Self-host / dump.** No public lexicon dump.

**Quality caveats.** Gold-standard for many native-speaker judgements; still not a CEFR inventory; still not freely redistributable.

**Hobby fit.** Optional paid API for spelling later. **Not** a v1 lexical brain. Scraping would be both legally and reputationally stupid.

---

### A.7 UniMorph German (`deu`)

**What it provides.** Lemma–form–feature triples in a **universal morphological schema** (nouns, adjectives, verbs). Project goal: inflected form = lemma + feature bundle ([UniMorph](https://unimorph.github.io/); schema: Sylak-Glassman 2016, linked from that site).

**German coverage.** GitHub `unimorph/deu` README (fetched 2026-08): source **English Wiktionary**; **28 989 noun lemmas, 4 857 adjective lemmas, 6 810 verb lemmas, 519 143 inflectional forms**; licence **CC BY-SA 3.0** ([github.com/unimorph/deu](https://github.com/unimorph/deu)). The UniMorph website table also lists German with a different form count in a summary table (**UNVERIFIED** which snapshot the HTML table reflects — prefer the `deu` repo README as first-party for that dump).

**Licence + commercial.** **CC BY-SA 3.0** because of Wiktionary lineage. Same share-alike discipline as Wiktionary.

**Self-host / dump.** Yes: GitHub TSV.

**Quality caveats.** Automatic extraction from Wiktionary: defective paradigms, missing rare forms, English-Wiktionary bias vs de.wiktionary tables. Features are **inflectional**, not syntactic valency (you get *gab* as 3sg past of *geben*, not “takes dative object”).

**Hobby fit.** **Best open, schema-stable full-form list** if BY-SA is acceptable. Do not treat it as ground truth without spot-checks against de.wiktionary / a native speaker.

---

### A.8 Morphy and CELEX

**Morphy** (Lezius et al., Universität Paderborn, late 1990s). Integrated German **morphology + statistical POS tagger + context-sensitive lemmatiser**; lexicon reported as **>320 000 word forms / ~50 000 stems**, compounds handled; “freely available” Windows package; UNIX export of full forms ([COLING-ACL 1998 / arXiv cs/9809050](https://arxiv.org/abs/cs/9809050); [EURALEX 2000 demo](https://euralex.org/elx_proceedings/Euralex2000/071_Wolfgang%20LEZIUS_Software%20Demonstration_Morphy%20German%20Morphology,%20Part-of-Speech%20Tagging%20and%20Applications.pdf)). OLAC registry: academic **free**, commercial **to negotiate**; original URL `http://www-psycho.uni-paderborn.de/lezius/` ([OLAC Morphy](http://www.language-archives.org/item/oai:dfki.de:Morphy)).

**Hobby fit.** Historical. **Original host is gone.** Not a maintained dependency. If a full-form list circulating today descends from Morphy, **re-verify licence**. Useful as a reminder that German full-form lists have existed for 25+ years — you do not need to invent one.

**CELEX-2** (Centre for Lexical Information / MPI Psycholinguistics; LDC **LDC96L14**). English, Dutch, **German** lexical databases: lemmas, wordforms, morphology, frequencies, etc. German 2.5: **51 728 lemmas, 365 530 inflected forms** ([LDC catalogue](https://catalog.ldc.upenn.edu/LDC96L14)). German frequencies from **~5.4M written + 0.6M spoken** tokens, IDS corpora 1949–1975, **ill-balanced** (whole novels included) ([CELEX readme](https://catalog.ldc.upenn.edu/docs/LDC96L14/celex.readme.html)).

**Licence + commercial.** User agreement: **research purposes only**; **no redistribution** outside the research group ([CELEX 2 User Agreement](https://catalog.ldc.upenn.edu/license/celex-user-agreement.pdf)). Paid LDC distribution.

**Hobby fit.** **Do not use** for a product that may commercialise. Frequencies are outdated and weaker predictors of lexical-decision times than later lists (Brysbaert et al. 2011, below).

---

### A.9 FrameNet and SALSA (German frame semantics)

**Berkeley FrameNet (English).** Frame-semantic lexicon + annotated sentences (Fillmore-style frames and roles). ICSI historically offered **separate commercial vs non-commercial licences** (older DataHub summary: commercial fee listed; **current ICSI licence page did not load — UNVERIFIED present fee**). NLTK’s dataset licence notes distinguish FrameNet 1.5 (non-commercial) vs 1.7 (CC BY 3.0 in their inventory) ([nltk DATASET-LICENSES.md](https://raw.githubusercontent.com/nltk/nltk_data/refs/heads/gh-pages/DATASET-LICENSES.md)). **Do not ingest FrameNet until you read the live ICSI licence for the version you want.**

**SALSA** (Saarland University). German **role-semantic annotation on TIGER** newspaper text, using FrameNet 1.2 frames plus **proto-frames** where FrameNet lacked coverage. Release 2.0: ~24 000 sentences; ~20 000 verbal + >17 000 nominal annotated instances ([SALSA corpus](https://www.coli.uni-saarland.de/projects/salsa/corpus/); [LREC 2006](http://www.lrec-conf.org/proceedings/lrec2006/pdf/339_pdf.pdf)).

**Licence + commercial.** Explicitly **non-commercial, non-profit research**, academic/educational licensee, **no changes to the corpus**, no disclosure except example sentences in papers; **commercial use of the corpus or data derived from it requires written agreement**; also bound by **TIGER** licence ([SALSA licence](https://www.coli.uni-saarland.de/projects/salsa/corpus/doc/license.html)).

**Hobby fit.** Excellent **linguistic** resource for “who did what to whom” in newspaper German. **Unusable as a shipped product database** on the public licence. Do not rebuild a proprietary German FrameNet; if you ever need frames, negotiate or stay at human-consulted examples.

---

### A.10 Valency dictionaries (E-VALBU / VALBU, IDS Mannheim)

**What it provides.** **Verb complementation**: for each reading, how many complements, their semantics, **Satzbaupläne**, realisation rules (NP in which case, PP, clause, etc.), plus conjugation class, passivisation, meaning, style. This is the resource class that actually encodes *geben* + **dative recipient** vs other patterns.

**Coverage.** **E-VALBU**: “knapp 700” selected verbs ([grammis Verbvalenz](https://grammis.ids-mannheim.de/verbvalenz/)). Print **VALBU** verb choice was aligned with the **Zertifikat Deutsch** word list; E-VALBU took that list plus ~30 extra lemmas (academic/general-scientific and IDS enquiry verbs). Statements based on IDS corpora; most examples from those corpora ([IDS VALBU project page](https://www.ids-mannheim.de/gra/abgeschlosseneprojekte/valbu/)).

**Licence + commercial.** The **website is freely consultable**. That is **not** a dump licence. Grammis/IDS content is generally **not** a blanket CC licence; DeReKo-related services are scientific/non-commercial. **UNVERIFIED:** a machine-readable E-VALBU dump licence for commercial embedding. Treat as **look-up / quotation** unless IDS grants otherwise.

**Self-host / dump.** No official open dump found on the grammis verb pages.

**Quality caveats.** Expert, corpus-based, sense-differentiated — gold for government/valency. Only hundreds of verbs, not the whole lexicon. Terminology is IDS/grammis (Komplemente, Ksub, …), not UD.

**Hobby fit.** **The right kind of knowledge** for “why *dem* after *geben*.” Use as **editorial authority** (and short quotes). Do not scrape into a closed lexicon. Do not assume 700 verbs are “all German valency.”

---

## B. Corpora and frequency

### B.1 Leipzig Wortschatz / Leipzig Corpora Collection

**What it provides.** Very large **crawled corpora** in many languages; dictionary portal; **frequency class** (relative to the most frequent word); cooccurrences, example sentences, web services ([Wortschatz Leipzig](https://wortschatz.uni-leipzig.de/en); [Downloads](https://wortschatz.uni-leipzig.de/en/download/)).

**Licence + commercial.** Split:

- Project data/applications: **CC BY-NC**, free for **private and scientific** use; **automated queries outside their web services** and **commercial use** forbidden without **written consent** ([Terms of Usage](https://www.wortschatz.uni-leipzig.de/en/usage)).
- **Downloadable text corpora: CC BY** (attribution; commercial reuse of *those files* is allowed under BY, which is **not** NC).

SentiWS (sentiment list) on the same download page is **CC BY-NC-SA 4.0**.

**Hobby fit.** CC BY **corpus files** can feed frequency estimates if you compute them yourself and respect source-text rights. The **interactive thesaurus/frequency portal and SOAP-style services** are NC + consent for commercial. Do not build a product on silent API scraping.

---

### B.2 dlexDB (Potsdam + DWDS)

**What it provides.** Lexical statistics from the **DWDS Kernkorpus** (20th-century German, balanced-ish across fiction, newspapers, academic, Gebrauchstexte; ~100M tokens in the online characterisation used by later papers). Types, lemmas, syllables, characters, similarity measures — built for **psycholinguistics** (processing-relevant norms), not DaF ([Zenodo record](https://zenodo.org/records/15097664); [doi:10.5281/zenodo.15097663](https://doi.org/10.5281/zenodo.15097663)). Live frequency view: [DWDS lexdb kern](https://www.dwds.de/r/lexdb#kern).

**Licence + commercial.** Dataset archived on Zenodo for reuse. **Exact Creative Commons variant on the Zenodo record was not visible in the page fetch — UNVERIFIED.** Do not assume commercial-clean until the record’s licence badge is checked. DWDS site terms still govern anything you pull from dwds.de itself.

**Hobby fit.** Strong **written, balanced, 20th-century** frequencies. Not spoken; not learner; not “subtitle German.”

---

### B.3 SUBTLEX-DE

**What it provides.** Word frequencies from **German film/TV subtitles** (~25.4M tokens, ~319k types in later citations of the resource). In a head-to-head for **native lexical-decision times**, subtitle frequencies beat CELEX, and beat or match Leipzig / dlexDB / Google Books for German ([Brysbaert et al., *Experimental Psychology* 2011](https://doi.org/10.1027/1618-3169/a000123)). Files: [OSF py9ba](https://osf.io/py9ba/).

**Licence + commercial.** The **paper** says the files are **“free for educational purposes.”** OSF licence metadata is **“Other”** plus a `license.txt` added 2024-05-07 (**exact text of that file not retrieved — UNVERIFIED**). A third-party redistributor (wordfreq) reports **email permission from Brysbaert** for non-academic use with credit and keeping SUBTLEX clearly free — **that email is not a primary licence you can rely on without reading `license.txt`**.

**Hobby fit.** Best **predictor of how fast natives recognise a word**, not of CEFR, not of grammar difficulty. Subtitle register ≠ textbooks ≠ news.

---

### B.4 DeReKo / COSMAS / KorAP (IDS) and DeReWo

**DeReKo** is the **German Reference Corpus**: huge contemporary written German, licensed from publishers to IDS for **scientific, non-commercial** querying ([COSMAS end-user agreement](https://www2.ids-mannheim.de/cosmas2/projekt/register/license_agreement.html); [Verfügbarkeit](https://www.ids-mannheim.de/digspra/pb-s1/projekte/korpora/verfuegbarkeit/)). Access: register, COSMAS II / KorAP. **Most of DeReKo is not a download.** A few historical/Wikipedia-derived slices can be obtained under separate agreements.

**DeReWo** frequency lists derived from DeReKo: lemma and wordform rank lists, documented obsessively because “the most frequent German words” is not a well-posed request ([IDS DeReWo](http://www.ids-mannheim.de/digspra/pb-s1/projekte/methoden/derewo/); [general remarks PDF](https://www.ids-mannheim.de/fileadmin/kl/derewo/derewo-general-remarks.pdf)). Licence: **CC BY-NC 3.0**; **commercial use not allowed**; lists must be cited **with documentation**; passing on without documentation forbidden (IDS page + PDF).

**DeReKoGram:** 1-/2-/3-gram frequencies on a ~43B-token DeReKo subset, with lemma/POS ([OWIDplus](https://www.owid.de/plus/derekogram); [Wolfer et al. 2023, *Data*](https://doi.org/10.3390/data8110170)). **Licence for commercial productisation: check OWIDplus — UNVERIFIED here.**

**Hobby fit.** Gold **native written usage** for human editorial checks (does anyone actually say this?). **Cannot** be the in-app corpus. DeReWo **cannot** be the commercial frequency backbone (NC).

---

### B.5 TIGER and TüBa-D/Z (treebanks)

**TIGER** (Stuttgart / Saarbrücken / Potsdam). ~900 000 tokens / ~50 000 sentences, **Frankfurter Rundschau**, POS + syntax + morphology/lemmas ([IMS TIGER](https://www.ims.uni-stuttgart.de/en/research/resources/corpora/tiger/)). Licence: **non-commercial, non-profit research**; no changes; commercial use of corpus **or derived data** needs written agreement ([TIGER academic licence](https://www.ims.uni-stuttgart.de/documents/ressourcen/korpora/tiger-corpus/license/htmlicense.html)). **Commercial licence “under review” since Sept 2020** (IMS page still said so when fetched).

**TüBa-D/Z** (Tübingen). *die tageszeitung*: **3 816 articles, 104 787 sentences, 1 959 474 tokens**, manual syntax ([TüBa-D/Z](https://uni-tuebingen.de/en/134290)). Academic licence free; **no licences to individuals**; other uses contact Hinrichs.

**Hobby fit.** How German **newspaper syntax** is annotated (including case on NPs). Research-only on public terms. SALSA sits on TIGER, so the same wall.

---

### B.6 Learner corpora: Falko and MERLIN

**Falko** (Humboldt-Universität zu Berlin). Family of **annotated L2 German** written corpora (essays etc.), L1 and L2 comparison, rich annotation (target hypotheses, errors). Handbook v2: searchable online; **raw data + annotations free for non-commercial use after a signed licence** ([Falko-Handbuch v2.01](https://www.linguistik.hu-berlin.de/de/institut/professuren/korpuslinguistik/forschung/falko/FalkoHandbuchV2)). Later essay corpus versions described as freely available to researchers ([Hirschmann et al. 2022](https://doi.org/10.48694/kordaf.3552)). **Confirm current download licence on the live HU page before any product use — versions differ.**

**MERLIN** (LLP project 2012–2014: TU Dresden, Eurac, Tübingen, Charles University, **telc**, BFI OÖ, …). **2 286 written exam texts**, German / Italian / Czech, **A1–C1**, ratings **methodologically related to CEFR** (CoE 2001, 2020). Error annotation + target hypotheses. **CC BY-SA 4.0**, dump via Eurac CLARIN ([merlin-platform.eu](https://www.merlin-platform.eu/); [C_data.php](https://www.merlin-platform.eu/C_data.php); [CLARIN handle](https://clarin.eurac.edu/repository/xmlui/handle/20.500.12124/6)). Partners explicitly include **telc**. ~1 000 German texts in a CLARIN overview ([CLARIN ERIC blog](https://www.clarin.eu/blog/clarin-it-presents-merlin-written-learner-corpus-czech-german-and-italian)).

**Hobby fit.** MERLIN is the **only major open, CEFR-linked German learner text dump**. Share-alike if you adapt texts. It shows **what exam candidates produced at a rated level**, not a vocabulary syllabus, and not spoken German. Falko is richer linguistically, licence tighter.

---

### B.7 What frequency lists can and cannot tell you about learner difficulty

**What they measure.** How often a **string or lemma** occurs in **that corpus** (newspapers, 20th-century books, subtitles, web crawl). IDS warns that “the most frequent German words” is not a unique object: tokenisation, lemmatisation, text type, time, and region change the ranking ([DeReWo page](http://www.ids-mannheim.de/digspra/pb-s1/projekte/methoden/derewo/)).

**What they predict well.** **Native processing**: rarer words → slower lexical decision, if the corpus matches exposure (Brysbaert et al. 2011). That is psycholinguistics, not DaF.

**What they do not measure (keep these distinct — AGENTS.md):**

| Concept | Frequency list? |
| --- | --- |
| Grammaticality | No |
| Naturalness / idiomaticity | Only a weak proxy (high frequency collocations tend to be conventional) |
| Comprehensibility for an L2 user | No (depends on L1, morphology, context, teaching) |
| Pedagogical usefulness | No |
| Construction difficulty (case after *geben*, verb-final, *da*-compounds) | **Lemma frequency of *geben* is high; the dative pattern is still hard** |
| Polysemy | A frequent form may hide a rare sense (EVP for English tries to level **senses**; German has no public equivalent — § C) |
| Productive vs receptive knowledge | No (GerVLPro exists as academic work on productive CEFR vocab; it is not a CoE standard) |

**CEFR does not define levels as frequency ranks.** Frequency can **inform** which words are worth teaching early (coverage of running text) but cannot **assign** a CEFR level. High-frequency function words are “A1” in exams and still morphologically complex (*der/dem/den*). Low-frequency specialised words can be easy if they are internationalisms.

**Legitimate uses in a learning product:** prefer frequent, attested examples; avoid hapax textbookese; detect that a generated sentence is packed with rare lemmas. **Illegitimate uses:** auto-tagging every lemma with A1–C2 from a rank list; calling a text “B1” because 95% of tokens are in the top 2 000.

---

## C. CEFR — owning documents, then German artefacts

### C.1 What CEFR actually is (Council of Europe)

**Primary documents**

- *Common European Framework of Reference for Languages: Learning, teaching, assessment* (2001). CoE still quotes its **Notes to the User** in 2020.
- *CEFR Companion Volume* (2020): [https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4](https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4)

**Action-oriented “can-do”, not a grammar syllabus.** The Companion Volume: the CEFR presents the learner as a **social agent**; the **action-oriented approach** is a shift **away from syllabuses based on a linear progression through language structures, or a pre-determined set of notions and functions**, toward needs analysis, real-life tasks, and **“can do” descriptors** rather than a deficiency list of unacquired structures (Companion Volume, Chapter 2, “Aims of the CEFR”). Language learning should enable learners **to act in real-life situations**; Chapter 4 descriptors are **activities (“the what”)**, Chapter 5 **competences (“the how”)** (same chapter, “Implementing the action-oriented approach”).

**Common Reference Levels A1–C2.** A shared metalanguage of proficiency bands, defined by **illustrative descriptor scales**, including plus levels and Pre-A1 in the 2020 update. **C2 is not native-speaker mastery** (Companion Volume, Common Reference Levels discussion). Levels are **not absolute**; profiles (uneven skills) are first-class (same volume).

**Illustrative descriptors vs inventories / curricula**

- Descriptors are **independent criterion statements**, mainly used **off-scale**; their aim is **input for curriculum development**, not a mandated syllabus (Companion Volume § 2.8).
- They are **illustrative**: **non-mandatory examples**, **incomplete**, **open-ended**; they **do not attempt to describe everything**; they are **not primarily assessment scales** (same section).
- Association of a descriptor with a level is **not exclusive or mandatory** (same).
- **Language-specific content** (grammar/vocab lists) lives in separate **Reference Level Descriptions (RLDs)**, “associated content specifications published separately for different languages” — linked from the Companion Volume (footnote to [CoE RLD page](https://www.coe.int/en/web/common-european-framework-reference-languages/reference-level-descriptions)). Profile Deutsch is the German RLD-like project (below), **not** the CEFR itself.

**Explicit stance: not a curriculum, not a standardisation tool.** Companion Volume quotes CEFR 2001 Notes to the User:

> We have NOT set out to tell practitioners what to do, or how to do it. We are raising questions, not answering them. It is not the function of the Common European Framework to lay down the objectives that users should pursue or the methods they should employ.

And: the CEFR is **“a tool to facilitate educational reform projects, not a standardisation tool”**; **“there is no body monitoring or even co-ordinating its use”** (Companion Volume, after the 2001 aims list).

**2001 Framework** still matters for the descriptive scheme (Ch. 4–5), tasks (Ch. 7), curriculum options (Ch. 8), assessment approaches (Ch. 9). The 2020 volume is the user-facing update of descriptors (mediation, online interaction, plurilingualism, etc.).

---

### C.2 German-specific CEFR-related resources

**Profile Deutsch**

- **What:** A **German implementation / RLD-style toolkit**: can-do descriptions, **vocabulary and grammar assigned to levels**, communicative strategies, text types, plus Langenscheidt e-dictionary material for C1–C2 on the CD. Goethe-Institut: it describes **handlungsorientierte Anforderungen** of CEFR levels **with concrete examples** for DaF/DaZ; developed **on the initiative of the Council of Europe** in **trinational** DE/AT/CH cooperation; refers to the CEFR and the European Language Portfolio ([Goethe, Profile deutsch](https://www.goethe.de/de/spr/sbp/prd.html) — page fetch was forbidden from this environment; URL and wording confirmed via search snippets and [ÖSD overview](https://www.osd.at/en/profile-deutsch/overview-profile-deutsch/)).
- **Who:** Europarat initiative; Goethe-Institut, ÖSD, Swiss partners; **published by Langenscheidt** (now Klett-Langenscheidt), ISBN **3-468-49410-6** (book + CD-ROM).
- **Is it a grammar/vocab inventory?** **Yes, among other things** — ÖSD: “vocabulary & grammar (according to the different CEFR levels)” plus can-dos. It is **a** language-specific specification, **not** the CEFR, **not unique**, **not open data**. Academic NLP work notes the format is **unsuitable for computational tagging** and that **C1/C2 lexical coverage in the older Profile Deutsch wordlists is weak** ([François DAFLex slides](https://cental.uclouvain.be/team/seminaires/gr4l2_2021/francois_daflex.pdf) summarising Glaboniat et al. 2005 — secondary for the “no C1/C2 list” claim; the publication itself is the 2005 Langenscheidt volume).
- **Licence:** **Commercial book + CD.** Not a CC lexicon. You buy it; you do not dump it into an app.

**Goethe-Institut Wortlisten (exam reference lists)**

Official PDFs (excerpts from Hueber *Prüfungsziele, Testbeschreibung*):

| List | What Goethe says it is | Size (their figure) | URL |
| --- | --- | --- | --- |
| A1 Start Deutsch 1 | Exam vocab; **information and reference**; **less suitable for practising vocabulary**; ~**650** words, **all should be understood receptively**; **about half** as active vocab | ~650 | [A1_SD1_Wortliste](https://www.goethe.de/pro/relaunch/prf/de/A1_SD1_Wortliste_02.pdf) |
| A1 Fit in Deutsch 1 | Same “reference not drill” framing; compared with Profile Deutsch 2005 | — | [Fit1 Wortliste](https://www.goethe.de/pro/relaunch/prf/sw/Goethe-Zertifikat_A1_Fit1_Wortliste.pdf) |
| A2 | ~**1300** lexical units learners at A2 “kennen sollten”; **at least receptive** in exam texts; items in texts **not needed for the task** are omitted | ~1300 | [A2 Wortliste](https://www.goethe.de/pro/relaunch/prf/ka/Goethe-Zertifikat_A2_Wortliste.pdf) |
| B1 | Joint Goethe / Freiburg (CH) / **ÖSD** exam; ~**2400** units; same receptive-exam logic | ~2400 | [B1 Wortliste](https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf) |

They **do not claim** to be the German language, nor all of B1, nor a generative lexicon. Words **outside** the list appear in exams when not required to complete the task. **No comparable public Goethe Wortliste for B2–C2 was found** on the same pattern (**UNVERIFIED** that none exists behind a paywall).

**telc / ÖSD**

- **ÖSD:** co-developer of **Zertifikat B1** (see Goethe B1 list preface) and co-publisher/promoter of **Profile Deutsch**.
- **telc:** historically co-published **Start Deutsch** test specs (Goethe A1 list: first edition Goethe + Weiterbildungs-Testsysteme, **today telc GmbH**, 2004). **telc is a MERLIN consortium partner** — exam scripts in MERLIN include telc-type tests. telc also sells course-tied vocab materials; those are **publisher products**, not CoE inventories.

**English Profile / English Vocabulary Profile (contrast)**

EVP is a **corpus-informed, sense-level** resource: which **words, phrases, phrasal verbs, idioms** learners **typically know and use** at each CEFR level, **can-do rationale** (“what learners actually know rather than prescribing what they should know”), underpinned by the **Cambridge Learner Corpus** and L1 corpora (Capel 2012, *English Profile Journal*; [Cambridge excerpt “What is English Profile?”](https://assets.cambridge.org/97811074/93988/excerpt/9781107493988_excerpt.pdf)). It is **computable** (Text Inspector and others tag running English text against EVP).

**German does not have a public, maintained, sense-level EVP equivalent.** Profile Deutsch and Goethe lists are **prescriptive/exam inventories**, mostly A1–B1, not learner-corpus sense tagging. Academic attempts (DAFLex, GerVLPro, etc.) are research artefacts, not CoE or Goethe standards. **Do not fake an EVP by assigning DeReWo ranks to CEFR bands.**

---

### C.3 How CEFR can legitimately relate to a product (without a fake taxonomy)

| Layer | Legitimate use | Illegitimate use |
| --- | --- | --- |
| **Proficiency** | Self-positioning with **can-do** statements; uneven **profiles** (strong reading, weak speaking) | One global “user is B1” as a complete model of ability |
| **Vocabulary** | Goethe/Profile lists as **exam-oriented coverage checks**; frequency as **text coverage**; MERLIN as **what learners wrote** | “This lemma is B1” as a universal fact; generating a full A1–C2 lexicon in-house |
| **Grammar** | Descriptors of **what the learner can do** (e.g. relate a story, explain a viewpoint); E-VALBU / grammis for **how German actually codes** those meanings | A single official “B1 grammar list” as if CoE published one |
| **Activities** | Companion Volume scales for **reception, production, interaction, mediation** as activity types | Forcing every sitting through the same CEFR checklist |
| **Objectives** | Negotiable **menu of descriptors** with an adult learner (CoE’s own suggested use) | Treating the Companion Volume as Davio’s curriculum |
| **Progression** | Backward planning from **real-life tasks**; plus-levels and profiles | Linear structure syllabus labelled A1→C2 |

**Warning, restated.** “B1 German” in the wild means **a family of exam constructs and teaching traditions** that **gesture at** the same illustrative band. Goethe B1 vocab ≠ Profile Deutsch’s assignment ≠ a telc paper ≠ what a MERLIN B1 text contains ≠ what a native B1-level *user* needs at work. Using CEFR as a **shared language for goals** is aligned with CoE. Using it as a **fixed grammar+vocab database** contradicts the Framework’s own Notes to the User.

---

## D. What we should not build

Arguments from **existence + licence**, not from taste.

1. **A proprietary German WordNet.** GermaNet already is the expert WordNet-like net; **academic licence forbids derived commercial products**. OdeNet/Open-de-WordNet already exists as an **open (CC BY-SA) merge of OpenThesaurus + Princeton WordNet**, precisely because GermaNet cannot join Open Multilingual Wordnet ([OdeNet GWC 2021](https://aclanthology.org/2021.gwc-1.22.pdf); [odenet GitHub](https://github.com/hdaSprachtechnologie/odenet/)). Building a third, closed WordNet duplicates labour and, if seeded from GermaNet, **violates Tübingen’s licence**. If you need synsets, **use OpenThesaurus/OdeNet under their share-alike/LGPL rules**, or **pay for GermaNet commercial**.

2. **A full CEFR-tagged German lexicon from scratch.** English needed Cambridge’s learner corpus + lexicographers for EVP. German has **no public EVP**. Inventing A1–C2 tags with an LLM or a frequency cutoff would be a **fake taxonomy** the CoE documents do not authorise. Existing artefacts (Goethe A1–B1 lists, Profile Deutsch book, MERLIN texts) are **partial, exam- or RLD-shaped**. A hobby cannot out-lexicograph Cambridge and should not pretend to.

3. **A universal linguistic ontology.** UD treebanks, UniMorph, FrameNet/SALSA, GermaNet, Wikidata lexemes, and valency dictionaries **already partition** morphology, syntax, lexical semantics, and frames — under **incompatible licences**. Unifying them into one Davio ontology is a research career, not an MVP, and **would still not be CEFR**.

4. **Ingesting DWDS, Duden, DeReKo, TIGER, SALSA, or GermaNet academic data into the product.** Their owners already said **no** (or “ask us and pay”) to scraping, TDM, or commercial derived services.

5. **A Morphy/CELEX revival as secret sauce.** Full-form German morphology is a **solved, published** problem (Wiktionary/UniMorph/Wikidata). CELEX is **research-only** and obsolete as a frequency source.

**What is worth doing instead (still not a stack):** human-facing lookup against **open dumps** (Wikidata CC0 forms, Wiktionary/UniMorph if share-alike is acceptable); **editorial** use of E-VALBU/DWDS/Duden in the browser; **can-do** goals from the Companion Volume; **exam lists** as optional coverage hints; **MERLIN** as illustrations of learner language; **frequency** as a check on generated text — never as a proficiency oracle.

---

## Source list (URLs)

**CEFR / CoE**

- https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4
- https://www.coe.int/en/web/common-european-framework-reference-languages/reference-level-descriptions
- https://creativecommons.org/licenses/by-sa/4.0/deed.en

**Wikimedia**

- https://dumps.wikimedia.org/legal.html
- https://dumps.wikimedia.org/dewiktionary/latest/
- https://dumps.wikimedia.org/wikidatawiki/entities/
- https://www.wikidata.org/wiki/Wikidata:Lexicographical_data
- https://www.wikidata.org/wiki/Wikidata:Database_download
- https://de.wiktionary.org/wiki/Hilfe:Allgemeines_zu_Eintr%C3%A4gen
- https://de.wiktionary.org/wiki/Hilfe:Flexionstabellen
- https://de.wiktionary.org/wiki/Wiktionary:Lizenzbestimmungen

**Tübingen / Saarbrücken / Stuttgart**

- https://uni-tuebingen.de/en/142806
- https://hinrichs.sfs.uni-tuebingen.de/files/GermaNet/licenses/academic_license_20.0.pdf
- https://uni-tuebingen.de/en/134290
- https://www.ims.uni-stuttgart.de/en/research/resources/corpora/tiger/
- https://www.coli.uni-saarland.de/projects/salsa/corpus/doc/license.html

**IDS / BBAW / Leipzig / LDC**

- https://grammis.ids-mannheim.de/verbvalenz/
- https://www.ids-mannheim.de/gra/abgeschlosseneprojekte/valbu/
- https://www.ids-mannheim.de/digspra/pb-s1/projekte/korpora/verfuegbarkeit/
- https://www2.ids-mannheim.de/cosmas2/projekt/register/license_agreement.html
- http://www.ids-mannheim.de/digspra/pb-s1/projekte/methoden/derewo/
- https://www.dwds.de/d/nutzungsbedingungen
- https://www.dwds.de/d/api
- https://www.wortschatz.uni-leipzig.de/en/usage
- https://catalog.ldc.upenn.edu/LDC96L14
- https://catalog.ldc.upenn.edu/license/celex-user-agreement.pdf

**Other lexica / frequency / learners**

- https://www.openthesaurus.de/about/download
- https://www.duden.de/api
- https://github.com/unimorph/deu
- https://unimorph.github.io/
- https://osf.io/py9ba/
- https://doi.org/10.1027/1618-3169/a000123
- https://zenodo.org/records/15097664
- https://www.merlin-platform.eu/
- https://clarin.eurac.edu/repository/xmlui/handle/20.500.12124/6
- https://www.linguistik.hu-berlin.de/de/institut/professuren/korpuslinguistik/forschung/falko/FalkoHandbuchV2
- https://github.com/hdaSprachtechnologie/odenet/

**German CEFR artefacts / English contrast**

- https://www.goethe.de/de/spr/sbp/prd.html
- https://www.osd.at/en/profile-deutsch/overview-profile-deutsch/
- https://www.goethe.de/pro/relaunch/prf/de/A1_SD1_Wortliste_02.pdf
- https://www.goethe.de/pro/relaunch/prf/ka/Goethe-Zertifikat_A2_Wortliste.pdf
- https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf
- https://assets.cambridge.org/97811074/93988/excerpt/9781107493988_excerpt.pdf
- Capel, A. (2012), Completing the English Vocabulary Profile, *English Profile Journal* https://doi.org/10.1017/S204153621200004X *(DOI from publisher; confirm if citation tools differ)*

---

## Flagged UNVERIFIED

- Live counts of German Wikidata lexemes / de.wiktionary German lemmas
- GermaNet commercial fee
- Current Berkeley FrameNet licence and fee (ICSI page timed out)
- Exact Zenodo licence badge for dlexDB
- Exact OSF `license.txt` for SUBTLEX-DE (paper says educational; OSF says Other)
- DeReKoGram commercial terms
- E-VALBU / grammis bulk-reuse licence
- Vollformen-Wörterbuch licence linked from OpenThesaurus
- Whether a public Goethe B2+ Wortliste exists
- Whether German Wiktionary’s wiki licence page (CC BY-SA 3.0 wording) or dump legal.html (4.0) governs a given dump file — follow dump legal + Terms of Use
- Falko current download licence vs 2012 handbook
- OdeNet quality vs GermaNet (authors call early versions experimental/automatic)

Capel 2012 DOI in the source list should be checked against Cambridge Core if cited in a paper; the article title and journal are first-party.
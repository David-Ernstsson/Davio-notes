# Does German-centric research scale to other Target languages?

**Ticket:** [.scratch/language-intelligence/issues/04-does-german-research-scale.md](../../.scratch/language-intelligence/issues/04-does-german-research-scale.md)  
**Date:** 2026-08-22  
**Scope:** Synthesis of existing owners. No second-language product, no i18n architecture, no new tool survey. German remains Davio’s Target language.

Written for a senior engineer who is not a linguist. Product claims cite Davio artefacts. Linguistic and SLA claims cite the same owners as the language-intelligence hub. Recommendations are labelled as such.

**Product frame.** The owner asked whether research that is mostly German still “stands up” for other languages — specifically, whether the app could be scaled later by generating content from other sources. This note answers that. It does not reopen the approved Gym spec (German only in v1).

---

## How to read this

Three layers are still the whole finding ([hub](language-intelligence-domain.md)):

| Layer | Question | Transfers to language X? |
| --- | --- | --- |
| **(A) Language** | What is true of *this* language with no Learner? | No. New facts, lexicon, valency, typology. |
| **(B) Analysis** | What structure does *this string* have? | The **interchange** (UD / CoNLL-U) yes. Model quality and language-specific guidelines are per language. |
| **(C) Pedagogy** | What is worth *this* Learner noticing, in this Study band? | No. New Gap map. The *sitting* that hosts (C) can be reused. |

SLA findings about Noticing and CEFR-as-can-do are **theory**, not a German grammar. They transfer as a way of thinking. They do not transfer as “why *dem*” puzzles.

---

## The one-paragraph answer

The German notes transfer as **kinds of object** (Language ≠ Analysis ≠ Pedagogy ≠ Learner ≠ UI) and as a **Gym sitting**. They do not transfer as a second-language Gym you switch on by generating Spanish or French from Wikipedia, DW-class news, or an LLM. A later Target language reuses Orient → Read → Notice → Gap map and, if analysis ever exists, UD as the stored scheme. It redo Language facts, teaching constructions, owned pieces, rights research, and the human who can judge Gym-worthiness. Generating drafts is easy in any language; **approval** is the bottleneck (ADR-0002), and the owner is that judge only for German.

---

## 1. What carries (thinking and sitting, not German)

**Four kinds of object.** Language facts, learner state, published Activities, and the sitting are different things ([14](14-linguistic-learning-content-application-domains.md); `CONTEXT.md`). Mixing them into one ontology is still a category error in French. A parser still does not compute pedagogical usefulness.

**The sitting.** Orient → read/listen → Notice → Gap map chip is a product loop ([spec](../../.scratch/discovery/spec.md)). It can host another Target language without being redesigned. That is the cheap layer.

**CEFR as Study band.** Descriptors are language-neutral can-dos, not a grammar list. Language-specific inventories are separate **Reference Level Descriptions** (Companion Volume §2.1 note 22; [hub §5](language-intelligence-domain.md)). Profile Deutsch does not become a Spanish API. English Vocabulary Profile does not become a German one. The *use* of CEFR (reception target, not token tags) transfers. The *lists* do not.

**UD as analysis vocabulary.** UD’s own goal is cross-linguistically consistent treebanks for multilingual parsers, typology, and analysis — “nearly 200 human languages,” quality varying ([UD Short Introduction](https://universaldependencies.org/introduction.html); [17](17-universal-dependencies-german.md)). If Davio ever stores analyses, CoNLL-U stays the interchange ([18](18-linguistic-data-to-persist.md)). That is the one technical decision that avoids inventing a second tagset later. It is not a Gap map.

**SLA principle.** Adults often fail to pick up **redundant** grammatical features without noticing them (Schmidt, 1990, p. 149, via [01](01-sla-adult-self-directed.md)). German articles and case are that kind of feature: you can understand a B1 text without encoding *dem*. French gender marking is the same *kind* of problem (Harley via Lightbown, in [01](01-sla-adult-self-directed.md)). The principle transfers. The forms to notice do not.

**Own the corpus.** Ready-made graded news is usually the wrong licence and often the wrong syntax (flattened “easy” language) ([08](08-b1-b2-german-content-sources.md); [ADR-0002](../adr/0002-own-the-corpus.md)). That rule is not German-specific.

---

## 2. What is German-specific (must redo)

**Language (A).** Four cases, three genders, article syncretism, V2, separable prefixes, adjective endings, UD German’s `obl:arg` for dative objects of *geben* vs DaF “dative object” ([hub](language-intelligence-domain.md); [UD for German](https://universaldependencies.org/de/index.html)). Spanish subjunctive, Russian aspect, Japanese particles are different Language objects. A gender table and E-VALBU do not locale.

**Pedagogy (C).** “Why *dem*, not *den*?” is a curated teaching construction. Ticket 03 is still the empty grilling list of 20–50 **German** patterns. Nothing in spaCy or Stanza emits a Gap map ([hub §1.4](language-intelligence-domain.md)). Romance is not “German minus case.” A language whose hard parts are honorifics or aspect may not even want this Grammar-chip Gym.

**Content sources.** DW, Nachrichtenleicht, bpb CC variants, Goethe Wortliste, Einfache vs Leichte Sprache are a German hunt ([08](08-b1-b2-german-content-sources.md)). Each language has its own rights landscape and its own “too flat vs too native” trap.

**Tools (B), quality not interchange.** German is a well-resourced NLP language ([15](15-nlp-tools-german.md)). Stanza, LanguageTool, and Wikidata lexemes exist for many languages; **coverage and scores are uneven**. Even German numbers are news/treebank genre, not Gym narrative, and still do not produce (C). Swapping `lang=es` is the cheap part of a job the hub already said not to platform.

**UNVERIFIED in this note:** Stanza/LanguageTool/Wikidata quality for any specific non-German language. Do not treat “UD exists for X” as “Davio can ship X.”

---

## 3. “Generate content from other sources”

This is the scaling story that fails the existing bar.

LLM output is a **draft** in every language. Grammaticality, naturalness, and Gym-worthiness are later checks; the last is human ([linguistics skill](../../.agents/skills/linguistics/SKILL.md); ADR-0002). A second model is not independent grammaticality.

For German, the owner *is* the approver (the Learner, living in Germany, B1–B2). For a language the owner does not control at the Study band, generating text is easy and publishing it as Gym German-equivalent is dishonest: there is no one to name the four judgements ([14 §1.1](14-linguistic-learning-content-application-domains.md)).

Third-party sources still have rights. Quotation, classroom exceptions, and NC/ND Creative Commons fail the hobby-to-product path the same way they failed for German ([08](08-b1-b2-german-content-sources.md)). “Other sources” is not a pipeline; it is usually a licence plus an editorial rewrite.

---

## 4. What “scale the app” actually costs

| Layer | Second Target language |
| --- | --- |
| Phone sitting, Orient / Notice / chip UI | Cheap |
| UD adapter, *if* that language has a decent treebank/model and a named analysis job | Cheap interchange; quality not guaranteed |
| Rights-clean owned pieces at B1–B2 | Same grind as German, plus you may lack an approver |
| Gap map worth returning to | New product knowledge (grilling), not a locale file |
| SLA rationale (notice low-salience form in understood text) | Transfers as principle; **what** is low-salience is typology-specific |

Relatedness is a false saving. Dutch is closer than Japanese; you still rewrite constructions, lexicon, and sources. Japanese is not Davio with a different RSS feed.

Consumer apps that look multilingual still rebuild teaching points and content per language. The code frame is the small cost.

---

## 5. Recommendation (labelled)

1. **Do not** generalize the German notes into a multi-language platform while the Gym sitting is the product test. v1 German-only ([spec](../../.scratch/discovery/spec.md); `CONTEXT.md` Target language) is honesty, not leftover German-centrism.
2. Keep the **thin split** already decided: UD if you analyze; hand-authored Noticing; no linguistic ontology ([hub](language-intelligence-domain.md); [18](18-linguistic-data-to-persist.md)). That preserves option value without paying for N languages.
3. If a second Target language ever appears, pick one the owner can **approve**, with open-ish content and usable UD/proofreading, and treat it as a new Gap map plus a new owned corpus.
4. Generating from other sources does not remove editorial work. It usually adds a licence problem.

**Founder approval already given for documenting this.** A later language is still a product decision after the German Gym sitting is proven. It is not an architecture ticket now.

---

## 6. What this note is not

- A requirement to add languages.
- Permission to i18n the Gap map or to store `lang` on German lemmas as if that were scaling.
- A survey of which language is “easiest” after German. That would be a new `/research` ticket with owning tool cards and licences.

---

## Sources

- Davio: [`CONTEXT.md`](../../CONTEXT.md) Target language; [spec](../../.scratch/discovery/spec.md) (German only; other languages out of scope); [ADR-0002](../adr/0002-own-the-corpus.md); language-intelligence [hub](language-intelligence-domain.md) and companions [14](14-linguistic-learning-content-application-domains.md), [15](15-nlp-tools-german.md), [08](08-b1-b2-german-content-sources.md), [17](17-universal-dependencies-german.md), [18](18-linguistic-data-to-persist.md); [01 SLA](01-sla-adult-self-directed.md) (Schmidt 1990; Harley / Lightbown on French gender)
- UD Short Introduction: [universaldependencies.org/introduction.html](https://universaldependencies.org/introduction.html)
- UD for German: [universaldependencies.org/de](https://universaldependencies.org/de/index.html)
- CEFR Companion Volume (2020): [rm.coe.int PDF](https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4) (can-dos vs RLDs)

**Not verified here:** per-language Stanza, LanguageTool, or Wikidata lexeme coverage outside German.

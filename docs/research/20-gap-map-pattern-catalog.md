# Gap-map Pattern catalog (German)

**Ticket:** [.scratch/language-intelligence/issues/03-gap-map-construction-list.md](../../.scratch/language-intelligence/issues/03-gap-map-construction-list.md)  
**Date:** 2026-08-22  
**Layer:** Pedagogy. Not Language facts, not Analysis, not the Gym sitting.

Written for a senior engineer who is not a linguist. This is a **curated teaching inventory**, not a German grammar, not UD, not UCxn, not CEFR-on-lemmas.

## How to read this

Each **Pattern** is a reusable Noticing target with a stable id. A later owned piece *attaches* to an id instead of inventing a new chip name. Family headings are not chips.

`band` is an authoring hint (typical first use in Study-band-ish text). It is not a tag on a lemma and not a skill-tree unlock.

**v1 Gym** still uses the six live pieces and their current chip ids. Do not retarget those files until the owner says so. Aliases below record the fold.

**Out:** per-noun gender (Language fact); modal particles as a textbook; “the dative” as one chip; UD `DEPREL`s.

---

## Gym chip aliases (live corpus frozen)

| Live Gym `chip.id` | Catalog id |
| --- | --- |
| `helfen-dativ` | `verb-dativobjekt` |
| `weil-verb-end` | `verb-end-nebensatz` |
| `werden-passive` | `werden-passiv` |
| `seit-zeitraum` | `seit-vor-fuer` |
| `wegen-genitiv` | `praep-genitiv` |

---

## Core (B1–B2)

### NP / case

| id | band | Tiny example |
| --- | --- | --- |
| `den-mask-akk` | B1 | *sieht den Hund* |
| `verb-dativobjekt` | B1 | *hilft dem Nachbarn* / *gefällt mir* |
| `geben-dat-akk` | B1 | *gibt dem Kind den Ball* |
| `pronomen-akk-dat` | B1 | *mich/mir*, *ihn/ihm* |
| `possessiv-endung` | B1 | *meinen Freund* vs *meinem Freund* |

### Prepositions

| id | band | Tiny example |
| --- | --- | --- |
| `wechselpraep` | B1 | *im Büro* vs *ins Büro* |
| `praep-fest-dat` | B1 | *mit dem, bei der, zum* |
| `praep-fest-akk` | B1 | *für den, ohne die, um das* |
| `praep-genitiv` | B2 | *wegen des Regens* |
| `verb-praepobjekt` | B1 | *warten auf + Akk*, *denken an* |
| `wo-wohin` | B1 | *Wo bist du?* vs *Wohin gehst du?* |

### Word order / verbs

| id | band | Tiny example |
| --- | --- | --- |
| `verb-end-nebensatz` | B1 | *weil ich warten will* |
| `weil-vs-denn` | B1 | *weil* verb-last; *denn* stays V2 |
| `v2-nach-vorfeld` | B1 | *Deshalb gehe ich* |
| `trennbares-verb` | B1 | *steht … auf* |
| `indirekte-frage` | B1 | *Ich weiß nicht, wann er kommt* |
| `infinitiv-zu` | B1 | *versuchen zu helfen* |
| `um-zu-vs-damit` | B1 | *um den Bus zu kriegen* vs *damit er kommt* |
| `legen-liegen` | B1 | *legen/stellen/setzen* vs *liegen/stehen/sitzen* |

### Voice / mood / tense

| id | band | Tiny example |
| --- | --- | --- |
| `werden-passiv` | B1 | *wird repariert* |
| `haben-sein-perfekt` | B1 | *ist gegangen* vs *hat gegessen* |
| `praeteritum-perfekt` | B1 | spoken Perfekt vs narrative Präteritum |
| `plusquamperfekt` | B2 | *hatte schon gegessen, als…* |
| `konjunktiv2-hoeflich` | B1 | *Könnte ich…?* |
| `konjunktiv2-irreal` | B2 | *Wenn ich Zeit hätte, würde ich…* |

### Adjective / negation / other

| id | band | Tiny example |
| --- | --- | --- |
| `adj-schwach` | B1 | *der kleine Junge* |
| `adj-stark` | B1 | *guter Kaffee* |
| `adj-gemischt` | B1 | *ein kleiner Junge* |
| `kein-vs-nicht` | B1 | *kein Brot* vs *nicht hier* |
| `seit-vor-fuer` | B1 | *seit einer Woche / vor einer Woche / für eine Woche* |
| `es-gibt-akk` | B1 | *Es gibt einen Automaten* |
| `komparativ-als` | B1 | *größer als* (not *wie*) |
| `reflexiv-akk-dat` | B2 | *ich wasche mich* vs *ich wasche mir die Hände* |
| `da-komposita` | B1 | *warten darauf* |
| `relativ-kasus` | B2 | *der Mann, den/dem ich…* |
| `relativ-praep` | B2 | *der Freund, mit dem…* |

36 core ids.

---

## Appendix (B2+/C1)

Same catalog, later attach. Gym Activities stay Study band B1–B2.

| id | band | Tiny example |
| --- | --- | --- |
| `zustandspassiv` | B2 | *ist geöffnet* vs *wird geöffnet* |
| `passiv-mit-modal` | B2 | *muss repariert werden* |
| `bekommen-passiv` | C1 | *bekam die Haare geschnitten* |
| `konjunktiv1` | C1 | *Er sagte, er habe keine Zeit* |
| `subjektive-modalverben` | C1 | *Er soll reich sein* (hearsay) |
| `partizipialattribut` | C1 | *die vom Regen durchnässte Jacke* |
| `partizipialsatz` | C1 | *Den Kopf schüttelnd, ging er* |
| `nominalstil` | C1 | *nach Abschluss der Prüfung* |
| `funktionsverb` | C1 | *zur Anwendung kommen* |
| `dessen-deren` | B2 | *der Mann, dessen Auto…* |
| `sein-zu-inf` | C1 | *Das ist leicht zu machen* |
| `als-ob` | B2 | *als ob er nichts wüsste* |

12 appendix ids. **48 total.**

---

## How a later piece uses this

Content owns the paragraph. Pedagogy points at a Pattern id (and later a span into `body`). Learning stores gap/held on that id. Language facts and CoNLL-U stay optional overlays.

Tiny: a new owned text with *Deshalb bleibe ich in der Schlange* attaches to `v2-nach-vorfeld`, not a new chip `deshalb-v2-pfand`.

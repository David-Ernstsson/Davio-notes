# The rule that moves a Learner up a band

Date: 2026-11-15  
Ticket: [Davio #250](https://github.com/David-Ernstsson/Davio/issues/250) (`wayfinder:research`)  
Scope: the automatic rule that raises a Learner's band, how much harder text to mix in to feed it, and how to check it after launch. The settled rules in [progress-unlock.md](../product-experience/progress-unlock.md) are inputs, not questions: band is a running estimate that sets text difficulty; evidence is one stream of Item results tagged with the band of the text; reading is mostly at band with occasional unlabelled harder texts; the rule errs late; band goes down only when the Learner asks; content is effectively endless; no Capability scores.

Adjacent notes (do not duplicate): [25](25-open-world-quests-learner-model.md) §2 already rejects BKT, IRT and DKT as v1 learner models; [26](26-goals-progression-retention.md) owns goal layers and why band is not the main progress.

**Finding** = what the owning source claims. **Inference** = a product reading the source does not itself test. **Recommendation** is a starting design, not an ADR.

## The one-paragraph answer

Use a simple, explainable two-gate rule over the Item stream, not a fitted learner model: move a Learner up one band when, over a rolling window spanning at least 14 days and 8 sittings, they get **at least 85%** of their own-band Items right and **at least 75%** of Items on harder (next-band) texts right, with enough Items behind each share that the lower confidence bound still clears a floor, and when the same verdict held on an earlier day as well. Count only the **first, unassisted Response** to an Item the Learner has **not seen before**; help halves the credit, recognition (`select`) Items are corrected for guessing and count half, and texts below the band count for nothing. Mix in harder text at about **one text in five**, rising to **one in three** once the own-band gate is already met, and pausing when the Learner is struggling. The numbers are anchored in the sources that actually decide promotion in reading products (Renaissance Accelerated Reader's 85% quiz average, Raz-Kids' 80% per-book quiz pass, MetaMetrics' 75% "targeted" comprehension at the reader's own measure) and in the mastery-learning finding that the threshold and what evidence counts matter more than the modelling technique (Pelánek & Řihák, 2017). Every threshold is a versioned setting; after launch the rule is judged mainly by how Learners do in the first 50 Items after a move and by how often they press "too hard" within 14 days of it.

## 1. What the sources say

### 1.1 How reading products decide a level

| Product or source | What moves the reader | Numbers |
| --- | --- | --- |
| Renaissance Accelerated Reader | Teacher moves the book-level range (ZPD); a computer-adaptive test (Star Reading) sets the start | Keep the quiz average at **85%** or above; the strongest gainers average over 90%; Analytics uses 85% over the past **28 days** as "quiz proficiency" (Renaissance guide; Renaissance Analytics help) |
| Raz-Kids "Level Up!" | Automatic promotion | Read every book in the level's set and pass each comprehension quiz at **80%** or higher (Raz-Kids student portal) |
| MetaMetrics Lexile | Re-testing, no practice-driven rule | A reader at the text's measure is forecast to understand **75%** ("targeted"); a text 250L easier gives **90%**; 250L harder gives **50%**; recommended range 100L below to 50L above (MetaMetrics, *What does the Lexile measure mean?*) |
| Betts reading levels | Teacher placement | About 95% word accuracy for instruction; the three-level scheme was never validated and later work found readers learn from harder text with support (Shanahan, *Rejecting instructional level theory*) |
| Duolingo placement and Birdbrain | Adaptive test at start; Birdbrain estimates learner ability and exercise difficulty together and avoids exercises that are too easy or too hard | No published target success rate; partial credit by mistake type in placement (Duolingo blog, 2020; Duolingo blog, *Birdbrain*) |
| NWEA MAP Growth, i-Ready | Periodic adaptive test, several times a year | (NWEA MAP Growth technical report, 2025) |

**Inference.** Practice-driven promotion in reading products clusters around **80–85% right on the reader's current level**, judged over weeks rather than one session. The Lexile chart gives a useful bridge: if a reader understands about 90% of text a step below them and about 75% at their own level, then a reader who is ready for the next band should score about 75% on next-band text while scoring close to 90% on their own band. That is the shape of the two gates below.

### 1.2 Mastery rules in adaptive learning

- **Finding.** Across simulated and real data, simple rules (N correct in a row, an exponential moving average) matched Bayesian Knowledge Tracing as mastery criteria; even BKT with ideal parameters gave no significant gain. What data counts and where the threshold sits mattered more than the technique. Their Czech grammar system uses a moving average with α = 0.9 and mastery at 0.95 (Pelánek & Řihák, 2017).
- **Finding.** ASSISTments Skill Builders use 3 correct in a row, and a hint resets the streak like a wrong answer (ASSISTments). Of students reaching 3 in a row, 80% got the next two right; 5 in a row predicted a transfer question best, about 73% against 57% for 3 in a row and 54% for BKT above 0.95 (Kelly, Wang, Thompson & Heffernan, 2015).
- **Finding.** Khan Academy moves skills through Familiar (70–99% on an exercise), Proficient (100%) and Mastered (a unit test or course challenge), and moves them down on an imperfect result (Khan Academy help).
- **Finding.** Elo-style rating models the chance of a correct answer from learner skill minus item difficulty, handles multiple choice with a 1/k guessing floor, and supports partial credit (Pelánek, 2016).
- **Finding.** Sequential mastery testing (Wald's sequential probability ratio test) sets two ability points either side of the cut and stops when the likelihood ratio passes bounds fixed by the chosen error rates; the error rates and the width of the gap decide how many items are needed (Spray & Reckase, 1996; Eggen, 1999).

**Inference.** "N in a row" is a per-skill rule over short drills. Band is a whole-level estimate over weeks of mixed texts, so a share over a window, with a minimum count, is the analogue. A confidence bound on that share is the cheap form of the sequential-testing idea: it says how many Items are enough at a given error rate without fitting a model.

### 1.3 Optimal difficulty and the harder-text mix

- **Finding.** For simple gradient-descent learning, the optimal accuracy is about 85%; the authors say educational difficulty has to be found empirically (Wilson et al., 2019).
- **Finding.** In a fact-practice system with about 85,000 learners, ratings pointed to a target success rate near 65% (Papoušek & Pelánek, 2017).
- **Finding.** 98% known-word coverage is needed for adequate unassisted reading of fiction, 95% for minimal comprehension (Hu & Nation, 2000); the figure rests on 66 learners and was not fully replicated (Kremmel et al., 2023).

**Inference.** Comfortable reading for a language learner sits higher than the optimum for drill learning. Most of a sitting should stay at band (where 80–90% is normal), and harder text should be a minority: enough to gather evidence, rare enough that the sitting does not feel hard.

### 1.4 Help, repeats and easy Item types

- **Finding.** ASSISTments treats a hint as a wrong answer for mastery; Wang & Heffernan (2013) showed partial credit for hinted answers predicts better than right/wrong.
- **Finding.** BKT has a guess parameter and Elo a 1/k floor so a lucky hit on a choice item is not mastery (Corbett & Anderson, 1995; Pelánek, 2016). Two-option items need a slower moving average (Pelánek & Řihák, 2017).
- **Davio rule.** Correct after help is supported evidence, correct right after correction is repair evidence, and an encounter proves nothing ([learning philosophy](../product-experience/learning-philosophy.md#evidence-rules)).

### 1.5 Learner control

- **Finding.** In a randomised trial, a "much easier … much harder" choice lowered engagement and gave no learning gain; some struggling learners asked for harder items. The authors recommend automatic tuning (Papoušek & Pelánek, 2017). Self-assessment correlates only moderately with measured L2 performance, r ≈ .47 across 67 studies (Li & Zhang, 2021).

**Inference.** This supports the settled shape: the automatic rule does the moving up, and "too easy" / "too hard" are corrections. It is also why "too hard" soon after a move is a strong signal that the move was early.

### 1.6 Checking a rule after launch

- **Finding.** Mastery criteria can be compared by effort to reach mastery and by success after it; dropout skews both (Pelánek & Řihák, 2017). A randomised test of two ALEKS mastery thresholds found the higher one cost more practice for a small retention gain that shrank over weeks (Matayoshi et al., JEDM).

## 2. Recommended rule

### 2.1 Inputs

Each graded Item result from any feature carries:

| Field | Use |
| --- | --- |
| Learner band at the time, band of the text | Classifies the result as **own band** (equal), **harder** (one band above) or **easier** (below) |
| Interaction type (`select`, `complete`, `produce`, `compose`) | Weight and guessing correction |
| Number of choices for `select` | Guessing correction |
| First Response or a later attempt | Only the first counts |
| Item-level help shown before the first Response (hint, reveal, model) | Halves credit |
| Whether the Learner has had an Evaluation on this Item before | Repeats do not count |
| Sitting id, timestamp | Spread over time |
| Feature | Per-feature weight (all 1.0 at start) |

`encounter` produces no Evaluation and no result. Text glosses (tap a word) are part of reading at band and do not count as Item help; their rate is logged for later tuning.

### 2.2 Scoring one result

1. Drop it if it is not the first Response, if the Learner has been evaluated on this Item before (recall and rehearsal are recall evidence, not level evidence), if it comes from an easier text, or if the capture is invalid.
2. **Credit** c: right = 1, wrong = 0, a structured partial Evaluation keeps its share. For `select` with k choices, correct for guessing: c ← (c − 1/k) / (1 − 1/k), floored at 0.
3. Correct after Item-level help: c ← c × 0.5.
4. **Weight** w: `select` 0.5, `complete` / `produce` / `compose` 1.0, times the feature weight.

A share is Σ w·c / Σ w over the results in a window; its size n is Σ w.

### 2.3 The two gates

Check at the end of each sitting.

| Gate | Window | Starting value |
| --- | --- | --- |
| **Own band** | The most recent own-band results, up to n = 100 | n ≥ 60 and share ≥ **0.85** |
| **Harder** | All harder results since the last band change (or the last 60 days, whichever is shorter), up to the most recent n = 80 | n ≥ 30, from at least 4 different texts, and share ≥ **0.75** |
| **Confidence** | Both windows | One-sided 90% Wilson lower bound ≥ 0.79 (own band) and ≥ 0.64 (harder) |
| **Spread** | The results feeding both gates | At least **8 sittings** on at least **6 different days**, spanning at least **14 days** |
| **Held twice** | — | The gates also passed at the end of a sitting on an earlier day, at least 3 days before |
| **Quiet** | — | At least 21 days since the last band change of any kind, and no "too hard" press in the last 14 days |

All of these pass → band rises by one; the message and **NEW** follow [What the Learner is told](../product-experience/progress-unlock.md#what-the-learner-is-told). The confidence floor means a Learner who just reaches the minimum counts needs shares a little above the point thresholds (about 0.86 at n = 60, about 0.76 at n = 30); a Learner with full windows (n = 100 and n = 80) moves at the point thresholds.

**After a move.** Harder results from the old band become own-band evidence at the new band; old own-band results leave both windows. So a Learner arrives with a partly filled own-band window instead of an empty one, and the next move still needs fresh evidence from the new next band.

**After "too easy" or "too hard".** The Learner's band changes at once as settled. Both windows restart from results at the new band, using any already tagged with it.

### 2.4 Harder-text mix

| State | Share of texts one band above |
| --- | --- |
| Normal | About **1 in 5** |
| Own-band gate already met (probe) | About **1 in 3** |
| Struggling: own-band share < 0.70 over the last n = 30, or a "too hard" press in the last 14 days | **None** |

Rules: never two harder texts in a row in one sitting; never a harder text as the first text of a sitting; harder texts carry no label and look like any other. Where a Destination has no text at the next band, take it from another open Destination or wait.

**Inference on pace.** With about 6 graded Items per text and 1 harder text in 5, reaching n = 30 harder takes roughly 25 texts; the probe step shortens that. A Learner doing two texts a day reaches the gates in about two to three weeks, which matches the 14-day spread. A slower Learner moves later, which is the intended error direction.

### 2.5 What is fixed and what is tuned

**Fixed by this design:** one band at a time; first unassisted Responses on new Items only; two gates (own band and harder) plus spread and held-twice; harder texts unlabelled; no automatic move down.

**Tuned later, all versioned settings:** the four shares (0.85, 0.75, 0.70 struggling, the confidence floors); the counts (60, 30, 4 texts); the spread (8 sittings, 6 days, 14 days, 3 days, 21 days); the help factor (0.5); the `select` weight (0.5); feature weights; the mix ratios (1 in 5, 1 in 3). Store the rule version with every band change so outcomes can be compared by version.

## 3. Checking the rule after launch

Log every check, not only moves: the gate values, which gate failed, and the rule version. Then watch:

| Signal | What it says | Starting alarm |
| --- | --- | --- |
| Share right in the first 50 own-band results after a move | The rule predicted about 0.75; well below means early moves | Median < 0.70 |
| "Too hard" within 14 days of a move | The move was early | Over 10% of moves, or over twice the base rate of "too hard" among Learners not recently moved |
| "Too easy" presses and their timing | The rule is late, or onboarding placed low | Rising share of "too easy" from Learners who passed the own-band gate weeks ago |
| Days and texts from band start to move | Pace | Learners who pass the own-band gate but never get enough harder evidence (mix too thin) |
| Sitting abandonment on harder texts against own-band texts | Harder texts feel hard | Clearly higher on harder texts |
| Return rate in the week after a move | The move feels bad | Below matched unmoved Learners |

Tuning method: replay the logged stream offline under candidate settings to see who would have moved when (shadow mode), then randomise Learners between two settings for one threshold at a time, as Matayoshi et al. did for ALEKS. Judge by the first two signals, not by how many Learners moved.

## 4. Alternatives rejected

| Alternative | Why not |
| --- | --- |
| **Fitted learner model (BKT, IRT, DKT)** | Needs labelled skills, a calibrated item population, or industrial logs; none exist at launch and no Capability scores may be assumed ([25](25-open-world-quests-learner-model.md) §2). Pelánek & Řihák found no gain over simple rules as a mastery criterion. Can replace the gates later on the same inputs once logs exist. |
| **Elo-style continuous rating of Learner against text band** | Attractive later, but needs calibrated difficulty per Item, where today only the band tag is reliable. A run of good days moves it, which conflicts with "sustained, errs late", and "you moved up" is harder to explain than two shares over weeks. Good candidate once item difficulty is estimated from logs. |
| **N correct in a row** | A per-skill drill rule. Over mixed texts it rewards one good day and ignores spread over time. |
| **Own-band share only** | High scores at band can mean easy Items, not readiness. The settled rule requires success on harder texts. |
| **Completion count (read N texts at a level, Raz-Kids style)** | Completion is product history, not learning evidence ([learning philosophy](../product-experience/learning-philosophy.md#evidence-rules)), and it would make band predictable, which is the world counter's job. Raz-Kids also needs every quiz passed, which is the part that matters. |
| **Periodic level test or "jump ahead" test** | Turns band into a goal and a sitting into an exam; the settled rule reports band when it has happened. A test is also one good day. |
| **Suggest a move the Learner accepts** | Superseded: band moves up automatically ([progress-unlock](../product-experience/progress-unlock.md#band)). The older line in [v1-product-foundation](../product-experience/v1-product-foundation.md) ("suggest a one-level change they can accept") predates it. |
| **Self-report only** | Self-assessment is only moderately accurate and learner-chosen difficulty did not help in a randomised trial (§1.5). It stays a correction, not the driver. |
| **Sequential probability ratio test per band** | Principled and could need fewer Items, but it assumes calibrated item difficulty and independent items. The Wilson bound gives the same "enough evidence" protection without either. |

## Sources

- Corbett, A. T., & Anderson, J. R. (1995). Knowledge tracing. *User Modeling and User-Adapted Interaction, 4*, 253–278. https://doi.org/10.1007/BF01099821
- Duolingo. (2020). *Partial credit improvements to Duolingo's placement test.* https://blog.duolingo.com/partial-credit-improvements-to-duolingos-placement-test/
- Duolingo. *Learning how to help you learn: introducing Birdbrain.* https://blog.duolingo.com/learning-how-to-help-you-learn-introducing-birdbrain
- Eggen, T. J. H. M. (1999). Item selection in adaptive testing with the sequential probability ratio test. *Applied Psychological Measurement, 23*, 249–261. Report: https://cito.nl/media/j5tczwrk/1998-item-selection-in-adaptive-testing-with-the-sequential-probability-ratio-test.pdf
- Hu, M., & Nation, I. S. P. (2000). Unknown vocabulary density and reading comprehension. *Reading in a Foreign Language, 13*(1), 403–430. https://nflrc.hawaii.edu/rfl/item/43
- Kelly, K., Wang, Y., Thompson, T., & Heffernan, N. (2015). Defining mastery: knowledge tracing versus N-consecutive correct responses. *EDM 2015.* https://www.educationaldatamining.org/EDM2015/proceedings/poster630-631.pdf
- Khan Academy Help Center. Mastery levels. https://support.khanacademy.org/hc/en-us/articles/5548760867853
- Kremmel, B., et al. (2023). Replication of Hu & Nation (2000). *Language Learning.* https://eprints.lancs.ac.uk/id/eprint/210922
- Li, M., & Zhang, X. (2021). A meta-analysis of self-assessment and language performance. *Language Testing, 38*(2). https://doi.org/10.1177/0265532220932481
- Matayoshi, J., et al. Mastery thresholds in ALEKS. *Journal of Educational Data Mining.* https://jedm.educationaldatamining.org/index.php/JEDM/article/view/900
- MetaMetrics. *What does the Lexile measure mean?* https://lexile.com/wp-content/uploads/2017/08/What-does-the-LM-mean.pdf
- NWEA. (2025). *MAP Growth technical report.* https://www.nwea.org/uploads/MAP-Growth-Technical-Report-2025.pdf
- Papoušek, J., & Pelánek, R. (2017). Should we give learners control over item difficulty? *UMAP '17 Adjunct.* https://doi.org/10.1145/3099023.3099080 · https://www.fi.muni.cz/~xpelanek/publications/difficulty-adjustment.pdf
- Pelánek, R. (2016). Applications of the Elo rating system in adaptive educational systems. *Computers & Education, 98*, 169–179. https://doi.org/10.1016/j.compedu.2016.03.017
- Pelánek, R., & Řihák, J. (2017). Experimental analysis of mastery learning criteria. *UMAP '17.* https://doi.org/10.1145/3079628.3079667 · https://www.fi.muni.cz/~xpelanek/publications/mastery-detection.pdf
- Raz-Kids. Student portal, Level Up! https://www.raz-kids.com/main/ViewPage/name/student-portal/
- Renaissance. *Getting results with Accelerated Reader* (2008). https://www.scribd.com/document/507717642/GIRP2008 · Renaissance Analytics help, AR data: https://star-help.zendesk.com/hc/en-us/articles/12694580961947-Accelerated-Reader-Data-in-Renaissance-Analytics
- Shanahan, T. *Rejecting instructional level theory.* https://www.shanahanonliteracy.com/blog/rejecting-instructional-level-theory
- Spray, J. A., & Reckase, M. D. (1996). Comparison of SPRT and sequential Bayes procedures for classifying examinees into two categories. *Journal of Educational and Behavioral Statistics, 21*, 405–414.
- ASSISTments. Skill Builders. https://www.assistments.org/individual-resource/skillbuilders
- Wang, Y., & Heffernan, N. (2013). Extending knowledge tracing to allow partial credit. *AIED 2013.* https://doi.org/10.1007/978-3-642-39112-5_19
- Wilson, R. C., Shenhav, A., Straccia, M., & Cohen, J. D. (2019). The eighty five percent rule for optimal learning. *Nature Communications, 10*, 4646. https://doi.org/10.1038/s41467-019-12552-4

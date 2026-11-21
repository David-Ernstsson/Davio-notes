# Do daily streaks measure learning, or only daily opens?

Written for a senior engineer who is not a psychologist. Every claim traces to the paper, book, first-party product doc, or institute document that owns it. Product blogs that cite psychology without owning the finding are labelled **inference**.

**Product frame.** Davio is a hobby **B1–B2 German Gym**. `CONTEXT.md` already sets Progress as the Gap map chip changing, not streaks or XP. This note is discovery only: it does not specify a sitting, a UI, or a Progress widget. Adjacent outcomes evidence lives in [02](02-app-outcomes-gap.md).

## How to read this

Psychology, consumer-behaviour research, and second-language-acquisition (SLA) motivation are three different literatures. They use the word “motivation” for different objects. A paper that measures *whether someone opens an app tomorrow* is not measuring *whether they are becoming a German speaker*. Mixing those objects is the main error this note is written to prevent.

Where a product blog cites a psychology paper, the owning claim is the paper’s. The blog’s application is an inference unless the paper itself studied streaks, language apps, or learning outcomes.

**Finding** = what the owning source claims, with its sample and measure. **Inference** = a reasonable product reading that the owning source does not itself test.

---

## The one-paragraph answer

Daily streaks work as **retention devices**. They make consecutive daily opens into a visible, fragile number; people treat keeping that number as a goal in its own right; losing it feels worse than gaining the next day feels good. That is what consumer-behaviour experiments and first-party A/B tests actually show (Silverman & Barasch, 2023; Duolingo, 2022, 2023, 2024). It is **not** what habit-formation papers, Self-Determination Theory, or SLA motivation theories claim. Habits form from repetition in a stable context until the cue fires the action with less thought; Lally and colleagues found a median of 66 days to a plateau of automaticity, a huge range, and that missing one day did **not** wreck the process (Lally, van Jaarsveld, Potts, & Wardle, 2010). Self-Determination Theory says expected tangible rewards for interesting activities undermine later free-choice interest, and that guilt-driven (“introjected”) regulation produces effort plus anxiety (Deci, Koestner, & Ryan, 1999; Ryan & Deci, 2000). L2 motivation, in Gardner and Dörnyei, is about wanting to become a person who uses the language, plus the quality of the learning experience — not about protecting a counter (Gardner, 1985/2001; Dörnyei, 2009; Ellis, 2005, quoting Dörnyei, 2001). Duolingo itself separates “fun and returning day after day” from “can they use the language outside the app,” and later admitted that XP and leaderboards get gamed (Duolingo, 2022; Duolingo, 2024). A streak counts calendar days with a qualifying open. It does not count noticing, retrieval, or German you can actually use.

---

## 1. Why daily streaks work in consumer apps

Separate the psychology papers from the product inferences.

### What habit papers actually claim

**Finding (Lally et al., 2010).** Ninety-six volunteers chose a new daily eating, drinking, or exercise behaviour in a stable context (for example “after breakfast”) and rated automaticity for 12 weeks. No extrinsic rewards were given. For the 39 people whose data fitted an asymptotic curve well, time to 95% of the automaticity plateau ranged from **18 to 254 days**, **median 66**. Missing one opportunity after three consecutive performances dropped the automaticity score by 0.29 points the next day — “a very small decrease” — with no longer-term cost of a single omission. About half the sample never performed the behaviour consistently enough for the curve to look like a formed habit.

Source: Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. *European Journal of Social Psychology, 40*(6), 998–1009. https://doi.org/10.1002/ejsp.674 — open PDF: https://repositorio.ispa.pt/server/api/core/bitstreams/370f1dca-cc04-4d3d-a0f0-36d16109ec37/content

Limits they own: self-report automaticity (a subset of the Self-Report Habit Index), student-heavy sample, self-chosen health behaviours, not language study. They did not study streaks, notifications, or learning outcomes.

**Finding (Wood & Neal, 2007).** Habits are context–response associations learned slowly. Once formed, perceiving the context triggers the response **without a mediating goal**. Goals help by getting you to repeat the action in that context in the first place. Infrequent misses do not rewrite the association. Overriding a habit takes effortful self-control.

Source: Wood, W., & Neal, D. T. (2007). A new look at habits and the habit–goal interface. *Psychological Review, 114*(4), 843–863. https://doi.org/10.1037/0033-295X.114.4.843 — author PDF: https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2023/10/wood.neal_.2007psychrev_a_new_look_at_habits_and_the_interface_between_habits_and_goals.pdf

**Finding (Fogg, 2009).** For a target behaviour to occur *this moment*, three things must coincide: motivation, ability, and a trigger (later: prompt). If ability is low, the behaviour fails even with high motivation. The model is a design heuristic for persuasive technology, not a learning theory.

Source: Fogg, B. J. (2009). A behavior model for persuasive design. In *Proceedings of the 4th International Conference on Persuasive Technology*. https://doi.org/10.1145/1541948.1541999 — lab page: https://behaviordesign.stanford.edu/resources/fogg-behavior-model

**Inference (product blogs).** A five-minute lesson plus a nightly notification is a Fogg move: raise ability (tiny sitting), add a prompt. That is about *getting the open to happen*, not about what the open contains.

### What consumer-behaviour papers actually claim about streaks

**Finding (Silverman & Barasch, 2023).** A streak here is three or more consecutive logged behaviours. Across seven studies, highlighting an **intact** streak in a log increased later engagement relative to highlighting a **broken** streak — **even when actual past behaviour was held constant**. People treated maintaining the logged streak as a goal in itself. Self-blame for a break amplified the drop; being able to “repair” the log attenuated it. The authors’ own practical warning: companies can benefit from highlighting streaks, and they incur a cost (reduced engagement or abandonment) when streaks break.

Source: Silverman, J., & Barasch, A. (2023). On or off track: How (broken) streaks affect consumer decisions. *Journal of Consumer Research, 49*(6), 1095–1117. https://doi.org/10.1093/jcr/ucac029 — author PDF: https://www.jackiesilverman.com/_files/ugd/0399b5_58713e2052ca4148891dbb00b30a8597.pdf

This is the closest primary source to “streaks work.” It measures **subsequent engagement with the tracked behaviour**, not L2 proficiency. Duolingo’s method white paper cites this paper as evidence that streaks are “highly motivating” and that awareness of streak length increases desire to keep it going (Freeman, Kittredge, Wilson, & Pajak, 2023, citing Silverman & Barasch, 2022 advance access).

### What Duolingo infers, and which of those inferences they measured

**Finding (Duolingo first-party, 31 Jan 2022).** Duolingo writes that repeating an action in the same context makes it feel automatic (habit research, unnamed in that post); that a new streak’s percentage growth feels bigger than a long streak’s; that later the streak taps “loss aversion”; that a broken streak is demotivating; that Streak Freeze is “slack” that aids persistence. **What they actually A/B-tested and report as numbers:** a new streak-extension animation raised 7-day retention by **+1.7%**; allowing two equipped freezes (vs one) raised relative daily actives by **+0.38%**; learners who reach a **7-day streak are 3.6 times more likely to complete their course**.

Source: Duolingo, “The habit-building research behind your Duolingo streak,” 31 Jan 2022, https://blog.duolingo.com/how-duolingo-streak-builds-habit/

**Inference vs finding on the 3.6× figure.** Duolingo presents a correlation: people who already have a 7-day streak are more likely to finish a course. Completers are a selected group. The post does not report a randomised test that *assigning* a 7-day streak causes course completion, and it does not report a proficiency test. Treat “3.6×” as a retention/completion association, not as a learning effect.

**Finding (Sharif & Shu, 2017) — the paper Duolingo’s freeze post is pointing at.** Consumers prefer goals that include an “emergency reserve” (slack with a cost) over rigid hard goals and easy goals, and they persist more, in part because they try **not** to spend the reserve. Duolingo names “University of Pennsylvania and UCLA” without a citation; Sharif (then Wharton/Penn) and Shu (UCLA Anderson) are the matching first-party research object.

Source: Sharif, M. A., & Shu, S. B. (2017). The benefits of emergency reserves: Greater preference and persistence for goals that have slack with a cost. *Journal of Marketing Research, 54*(3), 495–509. https://doi.org/10.1509/jmr.15.0231 — author PDF: https://marketing.wharton.upenn.edu/wp-content/uploads/2016/10/The-Benefits-of-Emergency-Reserves-Greater-Preference-and-Performance-for-Goals-having-Slack-with-a-Cost.pdf

**Inference.** Streak Freeze is a plausible application of emergency reserves (flexibility with a cost: you spend a freeze). It is not a test of whether frozen days still produce language learning.

### Consistency, identity, visible progress, momentum, low daily commitment

Map the usual product slogans onto owners:

| Slogan | Owning research object | What the owner measured | Product-blog leap |
| --- | --- | --- | --- |
| Consistency / habit | Lally et al. (2010); Wood & Neal (2007) | Automaticity of a cued daily action; context–response links | A calendar streak *is* the habit. Papers require a stable cue, not a fragile counter. |
| Loss aversion | Kahneman & Tversky (1979); Tversky & Kahneman (1991, 1992) | Risky/riskless choice; value function steeper for losses | A digital counter is a “possession” whose loss is like losing money. See §7. |
| Identity | Dörnyei (2009) Ideal L2 Self; Markus & Nurius (1986) possible selves | Future self as L2 user | “I am a 400-day person.” That is streak-identity, not L2-identity. James Clear’s identity-based habits are secondary (§6). |
| Visible progress | Locke & Latham goal-setting (cited inside Silverman & Barasch, not re-tested here) | Feedback toward a goal | The streak is *the* progress signal. SLA Progress is control of forms in use ([01](01-sla-adult-self-directed.md)). |
| Momentum | Silverman & Barasch (2023) | Intact log → more of the same behaviour | Momentum of *opens*, not of competence. |
| Low daily commitment | Fogg (2009) ability; Duolingo “bite-sized” (Freeman et al., 2023) | Easier behaviours fire more often | Five minutes of tiles ≠ five minutes of B1 Noticing. |
| Retention | Duolingo A/B tests (2022, 2024) | DAU, 7-day return, TSLW | Successful for Q1 of Duolingo’s own efficacy framework (engagement), by design. |

---

## 2. Downsides: anxiety, guilt, burnout, gaming, attendance-not-learning

Primary sources exist. They are thinner than the retention literature, and several are qualitative or first-party admissions rather than randomised harm trials.

### Guilt and introjection (theory owner)

**Finding (Ryan & Deci, 2000).** Introjected regulation is extrinsic motivation taken in but not accepted as one’s own. Behaviours are performed “to avoid guilt or anxiety or to attain ego enhancements such as pride.” Introjection is internally driven and still controlled. In school data they review, introjection related to more effort **and** more anxiety and worse coping with failure; identified/intrinsic regulation related to interest and better coping.

Source: Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. *American Psychologist, 55*(1), 68–78. https://doi.org/10.1037/0003-066X.55.1.68 — PDF: https://digitalwellbeing.org/wp-content/uploads/2020/03/Ryan-and-Deci-2000-Self-Determination-Theory-and-the-Facilitation-of-Intrinsic-Motivation-Social-Development-and-Well-Being.pdf

**Inference.** A mechanic whose job is “don’t lose the number” is a textbook introjection design. SDT did not run that experiment on Duolingo.

### Overjustification / undermining (theory owner)

**Finding (Deci, Koestner, & Ryan, 1999).** Meta-analysis of 128 experiments. Expected **engagement-contingent**, **completion-contingent**, and **performance-contingent** tangible rewards undermined free-choice intrinsic motivation (*d* = −0.40, −0.36, −0.28). Positive verbal feedback enhanced it (*d* = 0.33 free-choice; 0.31 self-reported interest). Unexpected rewards did not show the same undermining.

Source: Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. *Psychological Bulletin, 125*(6), 627–668. https://doi.org/10.1037/0033-2909.125.6.627

The earlier naming paper is Lepper, Greene, and Nisbett (1973), “overjustification”: preschoolers given an expected “Good Player” award for drawing later drew less in free play than controls. https://doi.org/10.1037/h0035519

**Inference, with a real limit.** Streaks, XP, and leagues are expected, engagement-contingent tokens. CET/overjustification predict they can become the reason you open the app, after which removing them (or breaking the streak) leaves less interest than you started with. Almost none of the 128 studies were language apps; many were short laboratory tasks that people already found interesting. Applying the *d*s to a B1 Gym sitting is an inference. The direction (expected tokens can crowd out interest in the activity itself) is the finding.

### First-party admission that the metric gets gamed

**Finding (Duolingo, 13 Jun 2024).** Duolingo built “Time Spent Learning Well” because earlier metrics rewarded the wrong behaviour:

- Total Sessions was “biased towards people who were grinding on shorter, easier sessions.”
- Leaderboards grew total time mostly among already-heavy users.
- Monthly Challenges that were XP-based let learners “spend the last few days of the month gaming the system to earn XP in bulk.”
- Leaderboards are “another area where XP grinding can happen.”
- Explicit product philosophy: “they can’t learn if they churn”; “If all a learner can do on one day is extend their streak, that’s OK!”; a “quick Ramp Up Challenge is better than missing a day.”

Source: Duolingo, “Behind the metric: how we developed ‘Time Spent Learning Well’,” 13 Jun 2024, https://blog.duolingo.com/time-spent-learning-well/

That is first-party evidence of **optimising attendance** and of **gaming XP**. It is also first-party evidence that they know path lessons predict learning better than miscellaneous sessions — they cite an independent study (Northern Arizona / East Carolina: Sudina & Plonsky; see §8).

### Independent qualitative / small-n evidence

**Finding (Loewen et al., 2019).** Nine true-beginner researchers used Duolingo Turkish ≥1 hour/week for 12 weeks. They liked flexibility and gamification; motivation varied; materials frustrated them. After ~29 hours only one reached 70% on a first-semester university test. This is a learning-outcome study with a gamification *perception* note, not a streak-harm trial.

Source: Loewen, S., Crowther, D., Isbell, D., Kim, K., Maloney, J., Miller, Z., & Rawal, H. (2019). Mobile-assisted language learning: A Duolingo case study. *ReCALL, 31*(3), 293–311. https://doi.org/10.1017/S0958344019000065

**Finding (submitted HCI paper, 2026, not a journal article).** Parent–child interviews on Duolingo describe **goal drift** (engagement shifts from mastery to protecting the streak; children pick easier content) and **gamified obligation** (guilt / “Duo will be sad”). The authors frame exit friction as a dark pattern. Sample: North American parent–child dyads; children 6–12. **Not peer-reviewed as of this note; not adult B1 learners.** Use as a qualitative existence proof that the mechanism can produce anxiety and attendance-not-learning, not as a prevalence estimate for Davio’s Learner.

Source: Anonymous. (2026). The evil bird and the right to disconnect: Children’s vulnerability to exit dark patterns in gamified educational apps. Manuscript submitted to ACM IDC. Copy fetched from University of Waterloo CSL: https://csl.uwaterloo.ca/download/documents/reportsarticles/idc26a_sub2151_i6pdf

**Finding (Memrise first-party FAQ).** Memrise themselves write: “Traditional streaks and point systems can sometimes feel like pressure or guilt-trips.” Their “My Activities” tracker is framed as a “quiet, guilt-free space” without streak/point pressure or reminder notifications.

Source: Memrise Help, “What is My Activities?” / “How is it different from streaks or points?”, https://explore.memrise.com/help

That is a competitor admitting the guilt failure mode in their own help centre.

**Unverified as primary (do not treat as evidence).** Anecdotal Medium/LinkedIn posts about streak anxiety. They match SDT introjection and Silverman & Barasch’s “abandonment when broken,” but they are not studies.

**Burnout.** No primary paper was found that measures clinical burnout from language-app streaks. Do not cite a burnout claim as established. Closest owning objects: introjection → anxiety (Ryan & Deci, 2000); broken-streak demotivation (Silverman & Barasch, 2023; Duolingo, 2022).

---

## 3. Intrinsic vs extrinsic motivation (SDT and overjustification)

### What Deci and Ryan actually claimed

**Finding (Ryan & Deci, 2000).** Intrinsic motivation is doing an activity for inherent satisfaction. Extrinsic motivation is doing it for a separable outcome. Extrinsic is not one thing. From least to most autonomous:

1. **External regulation** — rewards and punishments.
2. **Introjection** — guilt, anxiety, pride, contingent self-esteem.
3. **Identification** — the goal is personally important.
4. **Integration** — the goal is congruent with other values.

Need satisfaction (autonomy, competence, relatedness) supports intrinsic motivation and fuller internalization of extrinsic goals. Controlling contexts (expected tangible rewards, threats, deadlines, pressured evaluation) undermine intrinsic motivation. People are intrinsically motivated **only** for activities that already have novelty, challenge, or aesthetic value; CET does not apply to boring tasks.

Same source as §2.

**Finding (Deci et al., 1999).** See undermining effect sizes in §2. Verbal informational feedback can help; controlling “you should keep it up” praise can hurt (Ryan, 1982, reviewed there).

### How this applies to language-learning apps (labelled)

**Finding in L2 (Noels, Pelletier, Clément, & Vallerand, 2000).** SDT orientations form a simplex in language learners (intrinsic and identified cluster; external and amotivation sit at the other end). The paper maps Deci/Ryan onto L2 reasons for learning; it does not study streaks.

Source: Noels, K. A., Pelletier, L. G., Clément, R., & Vallerand, R. J. (2000). Why are you learning a second language? Motivational orientations and self-determination theory. *Language Learning, 50*(1), 57–85. Author PDF: https://www.psych.ualberta.ca/~knoels/personal/Kim's%20publications/NoelsPelletierClementVallerand2000.pdf

**Inference for apps.**

| App object | Closest SDT category | Likely effect if it becomes the reason you open |
| --- | --- | --- |
| Interesting Study-band text, “explain this sentence” | Intrinsic / identified (if the Learner cares about the message and the puzzle) | Persistence with the *activity* |
| “I need German at work / I live here” | Identified / integrated | Persistence with *German*, including Immersion |
| XP, gems, leagues | External | Opens while the contingency runs; grinding; drop when the league resets |
| Streak protection | Introjection (avoid guilt/loss of a pride object) | Daily opens; anxiety; easier content to keep the number |
| Path completion as “I am getting better at German” | Competence support *if* the path is actually German you can use | Can help; false if the path is tiles that do not transfer ([02](02-app-outcomes-gap.md)) |

**The overjustification risk in one sentence.** If the Learner already finds the sitting interesting, wrapping it in expected tokens can shift the perceived cause from “I wanted the German” to “I wanted the number,” which is exactly the attribution CET and Lepper describe. If the sitting is *not* interesting, tokens may be the only reason it happens — until they are not.

---

## 4. Language-learning motivation is not app engagement

Do not confuse “came back tomorrow” with L2 motivation.

### Gardner: socio-educational model

**Finding (Gardner, 1985/2001).** L2 motivation is not a points balance. The major operative construct is **motivation** (effort + desire + affect toward learning). It is supported by **integrativeness** (openness to the other language community; in the extreme, identification with it) and **attitudes toward the learning situation** (teacher, course, materials). Instrumental reasons (jobs, exams) also appear. Language is tied to identity; aptitude and motivation both matter.

Source: Gardner, R. C. (1985). *Social psychology and second language learning: The role of attitudes and motivation*. Edward Arnold. Concise restatement: Gardner, R. C. (2001). Language learning motivation: The student, the teacher, and the researcher. *Texas Papers in Foreign Language Education* / ERIC ED262624, https://files.eric.ed.gov/fulltext/ED262624.pdf

Gardner’s “attitudes toward the learning situation” is the piece that *can* include whether the app sitting is any good. It is still about the **language course**, not about a streak.

### Dörnyei: L2 Motivational Self System

**Finding (Dörnyei, 2009).** Three components:

1. **Ideal L2 Self** — the L2-speaking person you want to become; desire to close the gap with that self. Absorbs much of what used to be called integrativeness, plus promotion-focused instrumentality (career English as part of the desired self).
2. **Ought-to L2 Self** — attributes you believe you ought to have to meet others’ expectations and avoid negative outcomes (prevention-focused instrumentality: don’t fail the exam, don’t disappoint parents).
3. **L2 Learning Experience** — situated motives from the immediate environment: teacher, curriculum, peers, experience of success.

Possible selves work when the image is vivid, plausible, regularly activated, paired with a roadmap of strategies, and (often) balanced by a feared self. Empty fantasy without procedural plans does not move behaviour.

Source: Dörnyei, Z. (2009). The L2 Motivational Self System. In Z. Dörnyei & E. Ushioda (Eds.), *Motivation, language identity and the L2 self* (pp. 9–42). Multilingual Matters. https://doi.org/10.21832/9781847691293-003 — chapter PDF: https://docs.wixstatic.com/ugd/ba734f_08e57fb081864ecd9b98274bf24e23c6.pdf

**Inference.** A 400-day streak is not an Ideal L2 Self. The Ideal L2 Self for Davio’s Learner is closer to “I can follow and explain the German I actually meet in Germany.” An Ought-to L2 Self that has been captured by the app is “I must not break the streak.” Those can pull in opposite directions (harder German vs easier lesson to save the flame).

### Ellis / Dörnyei: quality of teaching is the motivational intervention

**Finding (Ellis, 2005 / 2008 digest, Principle 9).** Instruction must take account of individual differences; learning goes better when students are motivated. Teachers can do little to change **extrinsic** motivation; they can enhance **intrinsic** motivation. Ellis quotes Dörnyei:

> the best motivational intervention is simply to improve the quality of our teaching (Dörnyei, 2001, p. 26)

Instructional clarity (explain simply; pace that is not too fast or too slow) is the example. Teachers should not complain that students “bring no motivation.”

Sources: Ellis, R. (2005). Principles of instructed language learning. *System, 33*(2), 209–224. https://doi.org/10.1016/j.system.2004.12.006 — CAL digest: Ellis, R. (2008). Principles of instructed second language acquisition. Center for Applied Linguistics, https://www.cal.org/adultspeak/pdfs/digests/principles-of-instructed-second-language-acquisition.pdf — quoting Dörnyei, Z. (2001). *Motivational strategies in the language classroom*. Cambridge University Press, p. 26.

**This is the SLA owner for “don’t fix motivation with a wrapper.”** The research object is the quality of the learning experience (Dörnyei’s third component), not a gamification layer on a weak sitting.

### Meta-analytic caution (L2MSS)

**Finding (Al-Hoorie, 2018).** Meta-analysis of 32 reports / 39 samples (*n* = 32,078). Ideal L2 Self, Ought-to L2 Self, and L2 Learning Experience predicted **intended effort** (*r* = .61, .38, .41) much better than **objective achievement** (*r* = .20, −.05, .17). Intended effort is not proficiency.

Source: Al-Hoorie, A. H. (2018). The L2 motivational self system: A meta-analysis. *Studies in Second Language Learning and Teaching, 8*(4), 721–754. https://pressto.amu.edu.pl/index.php/ssllt/article/view/12295

Even inside SLA, “motivation” questionnaires over-predict “I will try hard” relative to test scores. App DAU is one more step removed.

---

## 5. What the four apps themselves say

First-party blogs, help centres, and research reports only, plus independent studies that actually measure streaks or engagement vs learning.

### Duolingo

**Engagement is question 1 of 4.** Fun, returning day after day, time in app, lesson types liked. Question 3 is transfer to real-life communication. Question 4 is CEFR/proficiency. “Most people aren’t learning just to earn XP.”

Source: Duolingo, “How does Duolingo evaluate effectiveness?” 17 Oct 2022, https://blog.duolingo.com/duolingo-efficacy-research-framework/

**Streaks, XP, gems, leaderboards exist to bring people back.** Jiang et al. (2020) state that those features “encourage Duolingo learners to return to their lessons,” in the same paragraph as bite-sized distributed practice. They then measure ACTFL **reading and listening**, not streak length as a predictor. Completers of beginning Spanish/French: Intermediate Low reading, Novice High listening; median ~112 hours; hours–score correlations “very small and nonsignificant.”

Source: Jiang, X., Rollinson, J., Plonsky, L., & Pajak, B. (2020). *Duolingo efficacy study* (DRR-20-04). https://duolingo-papers.s3.amazonaws.com/reports/duolingo-efficacy-whitepaper.pdf — peer-reviewed: Jiang, X., Rollinson, J., Plonsky, L., Gustafson, E., & Pajak, B. (2021). Evaluating the reading and listening outcomes of beginning-level Duolingo courses. *Foreign Language Annals, 54*(4). https://doi.org/10.1111/flan.12600

**Method white paper (2023).** Streaks as a “reward for daily app use”; notifications for salience/urgency; leaderboards cited via Landers et al. (2017) as more motivating than “do your best”; XP and in-game currency as post-session reinforcement. Philosophy: more time on task → more learning. That last clause is time-on-task for *whatever the task is* (Nation’s warning in [02](02-app-outcomes-gap.md)).

Source: Freeman, C., Kittredge, A., Wilson, H., & Pajak, B. (2023). *The Duolingo Method for app-based teaching and learning*. https://duolingo-papers.s3.amazonaws.com/reports/Duolingo_whitepaper_duolingo_method_2023.pdf

**TSLW (2024).** See §2: they measured XP grinding and decided a Ramp-Up to save a streak is acceptable.

No Duolingo first-party report was found that uses **streak length as an independent variable predicting ACTFL/CEFR scores**. Independent Sudina & Plonsky (2024) use frequency, duration, intensity, lessons — not streak days as the learning outcome (see §8).

### Babbel

**Help centre (first-party).** “A streak is a feature designed to help you build and maintain a consistent learning habit.” It counts consecutive days with **any** learning activity (lessons, vocab workout, podcasts, AI conversation, grammar guide, audio recap). Miss a day → reset at midnight. **Two Streak Freezes per week**, auto-applied, do not accumulate; refresh Monday. Device local time; VPN/time-zone changes can break it.

Source: Babbel Help, “Streak,” https://support.babbel.com/hc/en-us/articles/17020978582162-Streak (fetch of this URL timed out in this session; content confirmed via search snippet of the same help article. Treat URL as the owner; wording above matches the public help page as indexed.)

**Magazine (first-party, habit features).** Start small (~15 minutes); reminders at a chosen time; Learning Path; “My Activity” weekly visualisation; progress bars. Framed as habit-building so you can “stay focused on why you set out to learn.” Does not report A/B numbers.

Source: Babbel Magazine, “New from Babbel: Features to help you finally get into a learning habit,” https://www.babbel.com/en/magazine/build-a-language-habit

**Efficacy (commissioned, not a streak study).** Vesselinov & Grego (2016) WebCAPE gains after two months of Spanish; ~12.7 points/hour; 81% *said* communication improved. See [02](02-app-outcomes-gap.md). No streak vs learning analysis.

Source: Vesselinov, R., & Grego, J. (2016). *The Babbel Efficacy Study*. https://assets.ctfassets.net/zuzqvf4m2o58/qoYE4HHG3xeejHGbk0cCU/975d7456a85542a38e17aa4d842b47fe/Babbel2016_Efficacy_Study.pdf

### Busuu

**First-party product blog (CEO, 9 Dec 2022).** After a course-path redesign: “We have introduced **streaks** (to help you keep building the habit of learning), **points**, **leaderboards** and many other features to make using Busuu as fun as possible.” Checkpoints are described as mastery gates before the next chapter — a different object from streaks.

Source: Niesner, B. (2022). New version of Busuu provides a whole upgrade… https://blog.busuu.com/busuu-new-features/

**Efficacy (commissioned).** Vesselinov & Grego (May 2016), *The busuu Efficacy Study*: 196 Spanish users, two months, WebCAPE + OPIc. Busuu’s own summary: 84% improved written; 75% of oral-test sitters improved a level; ~22.5 hours ≈ one college semester on their conversion. This is the same commissioned-WebCAPE genre Jiang et al. (2021) call hard to interpret. **No streak variable.**

Sources: https://comparelanguageapps.com/reports/The_busuu_Study2016.pdf ; Busuu summary: https://www.busuu.com/en/research/university-study

### Memrise

**First-party, two different products.**

- **Classic / migration:** streaks existed; “What happened to my streak?” on migration — longest classic streak ports; new-experience streak is per language, not per course. https://explore.memrise.com/migrating-to-the-new-memrise
- **Current help centre:** no friend-following or **leaderboards in the app**. “My Activities” tracks words learned/reviewed, videos, conversations “**without the pressure of maintaining streaks or earning points**.” Explicit contrast: streaks/points can feel like “pressure or guilt-trips.” https://explore.memrise.com/help
- **Discord (2023 blog):** `/leaderboard` and XP for Discord servers — a side channel, not the core app. https://www.memrise.com/blog/memrise-discord-app-leaderboards
- **Progress blog:** a points table mapped to “proficiency levels” (videos, conversations). Points here are a progress ladder, not a daily streak. https://www.memrise.com/blog/new-progress-tracking-for-language-learning

**Finding.** Memrise is the one of the four that **first-party documents a retreat from streak/point pressure** in the main app, while still using points as a proficiency-ladder metric and XP on Discord.

### Independent studies that pit streaks/XP against learning

| Study | What it measured | Streak vs learning? |
| --- | --- | --- |
| Jiang et al. (2020/2021) | ACTFL reading/listening after finishing A2 content | No. Hours weakly related to scores among completers. |
| Sudina & Plonsky (2024) | 287 Duolingo Spanish/French users, 6 months, written + oral (EIT) | **No streak length IV.** Total **minutes** correlated with written, not oral, gains. **Lessons completed** and frequency/curriculum measures were more dependable. L2 grit/motivation only weakly–moderately related to in-app behaviour. https://doi.org/10.1075/jsls.00021.plo — Duolingo-hosted report: https://duolingo-papers.s3.amazonaws.com/reports/Plonsky_etal_whitepaper_language_learning_grit_motivation_2023.pdf |
| Loewen et al. (2019) | Turkish beginners, 12 weeks | Gamification liked; outcomes poor. Not a streak experiment. |
| Shortt et al. (2023) | Systematic review of Duolingo research 2012–early 2020 | Literature measures the **game/design** more than fluency. https://doi.org/10.1080/09588221.2021.1933540 |
| Silverman & Barasch (2023) | Engagement after intact vs broken logs | Learning not measured. |

**Finding.** There is still no identified randomised or even clean correlational study whose independent variable is streak length and whose dependent variable is L2 proficiency. The honest independent result is: **what you do in the app** (lessons on the path, not bulk minutes or XP) predicts gains better than raw time; oral gains are weakly coupled to minutes (Sudina & Plonsky, 2024). That is compatible with a long streak of easy opens.

---

## 6. Habit formation: time-to-habit, cue–routine–reward, identity

### Lally (primary): there is no 21-day rule

The 21-day figure is pop psychology (often traced to Maltz’s *Psycho-Cybernetics*, not a habit experiment). Lally et al. (2010) is the primary real-world automaticity study. Recap: **median 66 days** to 95% of asymptote, **18–254** range, **one miss is not catastrophic**, no extrinsic rewards required when the person chose a wanted behaviour. Complex behaviours (exercise) tended to take longer, not significantly in their underpowered subgroup test.

**Inference against streak theology.** If missing one day does not unwind automaticity, a product that **zeros a 400-day identity object** after one miss is not implementing Lally. It is implementing Silverman & Barasch’s *logged-streak-as-goal*, which is a different mechanism (a fragile score), and it fights Lally’s finding that a lapse is cheap.

### Wood (primary): cue, not trophy

Wood & Neal (2007): the habit is the **context–response** link. Rewards/goals matter while you are installing the repetition. Once habitual, the cue is enough. A streak number is not a context cue (kitchen, commute, “after coffee”); it is a **goal object**. Wood’s model predicts that when you travel, get sick, or the app is down, the habit may fail because the **cue context** changed — not because a flame went out. It also predicts that a sitting that is a different action every day (new game skin) will form a weaker habit than a stable “open this text after breakfast.”

Wood, Quinn, and Kashy (2002), *Habits in everyday life* (*Journal of Personality and Social Psychology, 83*, 1281–1297, https://doi.org/10.1037/0022-3514.83.6.1281): everyday habits ran with **less thought and affect** than non-habits. That is automaticity, not “this is who I am.”

### Fogg (primary for tiny behaviours)

Fogg (2009): B = motivation × ability × prompt at one moment. Tiny Habits (Fogg, 2020, trade book) is a later popularisation of “make it easy, anchor to an existing routine, celebrate.” **Primary for the model = 2009 paper.** The 2020 book is secondary.

**Inference.** “One small Gym sitting after an existing cue” is Fogg-compatible. “You must not miss a calendar day or the identity object dies” is not.

### Cue–routine–reward

**Secondary.** Charles Duhigg, *The Power of Habit* (2012), popularised a cue–routine–reward “habit loop,” drawing on journalism about basal-ganglia research and industry practice. It is not a peer-reviewed owner for language learning. The academic owner for cue-triggered action is Wood (and before that, behaviourist S–R with a different theory of reward). Do not cite Duhigg as if he measured L2 habits.

### Identity-based habits

**Secondary.** James Clear, *Atomic Habits* (2018): “every action is a vote for the type of person you wish to become.” Useful as a slogan; **not a primary experiment**.

**Primary nearby:**

- Verplanken and Orbell’s Self-Report Habit Index includes identity items (“that’s typically me”). Lally et al. (2010) **excluded** those items because of controversy over whether habits are more identity-defining than non-habits.
- Dörnyei’s Ideal L2 Self **is** an identity theory, and it is about speaking the language, not about being a streak-keeper (§4).
- Silverman & Barasch (2023) cite self-concept / consistency as *why people value streaks* — that is “I am consistent,” which can attach to the log rather than to German.

**Inference.** If identity is the lever you want, SLA already named it: Ideal L2 Self + a roadmap. A streak can hijack identity onto the counter (Ought-to / introjection). Clear’s vote-for-your-identity line, applied to “I am someone who notices *dem*,” is a product inference, not a finding in Clear.

---

## 7. Loss aversion: what the papers claim vs streak freeze

### What Kahneman and Tversky actually wrote

**Finding (Kahneman & Tversky, 1979).** Prospect theory is a descriptive model of **choice under risk** (gambles with stated probabilities). People evaluate **gains and losses relative to a reference point**, not final wealth. The value function is “normally concave for gains, commonly convex for losses, and is **generally steeper for losses than for gains**.” They also describe a certainty effect and an isolation effect. Experiments: hypothetical monetary prospects (Israeli pounds), students and faculty.

Source: Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. *Econometrica, 47*(2), 263–291. https://doi.org/10.2307/1914185 — PDF: https://www.dmi-ida.org/download-pdf/pdf/Kahneman-ProspectTheoryAnalysis-1979.pdf

The 1979 paper does **not** study streaks, insurance products called “freezes,” or learning. It does **not** state a single “losses are twice as powerful” law; steepness is qualitative there.

**Finding (Tversky & Kahneman, 1991).** They name **loss aversion** as the central assumption of a reference-dependent model of **riskless** consumer choice: “losses and disadvantages have greater impact on preferences than gains and advantages.” Status-quo / reference-point shifts can reverse preference.

Source: Tversky, A., & Kahneman, D. (1991). Loss aversion in riskless choice: A reference-dependent model. *Quarterly Journal of Economics, 106*(4), 1039–1061. https://doi.org/10.2307/2937956

**Finding (Tversky & Kahneman, 1992).** Cumulative prospect theory; median estimated λ (loss-aversion parameter) = **2.25** in their parametric fit to risky choice. That is the origin of the popular “about twice.” A later meta-analysis of λ estimates from mixed gambles reports a smaller average (λ ≈ 1.31, 95% CI [1.10, 1.53]) and warns that many datasets are poor quality (Walasek, Mullett, & Stewart, 2024).

Source: Tversky, A., & Kahneman, D. (1992). Advances in prospect theory: Cumulative representation of uncertainty. *Journal of Risk and Uncertainty, 5*(4), 297–323. https://doi.org/10.1007/BF00122574 — PDF: http://media.longnow.org/files/2/REVIVE/Advances%20in%20prospect%20theory.pdf

### Is “streak freeze” a valid application?

**Valid as analogy, not as a deduction from 1979.**

| Prospect-theory object | Streak object | Match? |
| --- | --- | --- |
| Reference point | Yesterday’s streak length | Loose. The flame is a made-up reference the product chose to display. |
| Loss vs gain of money/goods | Reset of a counter to zero | The “endowment” is fictional and fully controlled by the firm (freezes, BRB, repairs). Kahneman/Tversky studied real or hypothetical money, mugs, etc. |
| Risky prospect (p, x) | “If I skip tonight, I might lose 200 days” | There is no probability in the 1979 sense; the loss is **certain** if you miss and have no freeze. Certain losses in prospect theory produce **risk-seeking** (gambling to avoid a sure loss) — not obviously “do a 30-second lesson.” |
| Insurance / overweighting low p | Buy/equip a freeze | Closer to **insurance** (overweighted small chance of a bad day) than to λ = 2.25. Duolingo’s own better citation is Sharif & Shu **emergency reserves**, not 1979. |
| Steeper for losses | Notifications that say “save your streak” | Product inference. Matches introjection and Silverman & Barasch more cleanly than it matches gambles. |

**Finding (Duolingo, 2022).** They say they “tap into loss aversion” once the streak is long, and that Freeze prevents demotivating breaks. They measured DAU, not λ, and not German case control.

**Finding (Silverman & Barasch, 2023).** A repair option after a break restores engagement. That is a closer owner for Freeze/repair than Kahneman 1979.

**Inference.** Calling Freeze “applied prospect theory” is marketing. Calling it “slack with a cost so a made-up goal does not kill retention when life happens” is what Sharif & Shu and Silverman & Barasch actually support. Lally still says the underlying habit (if any) did not need the theatre.

---

## 8. Does a streak measure learning or merely daily opens?

**Finding (operational).** Duolingo: a streak tracks days with a practiced lesson; a gap is a missed calendar day; a freeze fills the gap (Duolingo engineering blog on protecting streaks during outages: https://blog.duolingo.com/protecting-streaks-from-site-issues/). Babbel: any qualifying learning activity that day. In both cases the unit is **a day with a check**, not an item learned, a form noticed, or a CEFR band.

**Finding (Duolingo efficacy framework, 2022).** Returning day after day is question 1 (engagement). Transfer and CEFR are questions 3–4. They are different questions **in Duolingo’s own document**.

**Finding (Jiang et al., 2020/2021).** Among people who finished A2 content, time in app barely predicted ACTFL scores. You can put in very different hours and land in the same reading/listening band. A streak of those hours is even coarser.

**Finding (Sudina & Plonsky, 2024).** Minutes ≠ oral gains. Lesson/curriculum counts do better. Independent confirmation that **what the open contains** matters more than how many days you opened.

**Finding (Duolingo TSLW, 2024).** They discovered internally that session counts and XP can be maximised without “learning well,” and they still endorse a streak-save sitting that may not be a path lesson.

**Finding (Silverman & Barasch, 2023).** The log’s representation of an intact streak drives the next open **even when the underlying behaviour history is the same**. So the streak is not even a faithful summary of past behaviour; it is a **goal display**.

**Inference (for a B1–B2 Gym).** A Learner can extend a streak by opening, tapping, and leaving. That sitting does not have to include Noticing, a Gap-map probe, or a message they understood. The streak cannot tell you whether *dem* after *helfen* moved. Progress in `CONTEXT.md` is the Gap map chip; that is a different instrument, aimed at a different construct (control of Patterns), which [01](01-sla-adult-self-directed.md) and [20](20-gap-map-pattern-catalog.md) already own.

---

## What this is not

This note is not a sitting spec, not a recommendation to add or remove a widget, and not a moral verdict on Duolingo. Retention mechanics do what they are built to do: they raise the chance of a qualified open tomorrow. SLA motivation research, habit automaticity research, and proficiency tests are about other objects. Mixing them is how a hobby Gym accidentally becomes another streak app ([02](02-app-outcomes-gap.md)).

---

## Sources

### Primary — psychology / consumer behaviour

Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. *Psychological Bulletin, 125*(6), 627–668. https://doi.org/10.1037/0033-2909.125.6.627

Fogg, B. J. (2009). A behavior model for persuasive design. *Proceedings of Persuasive 2009*. https://doi.org/10.1145/1541948.1541999

Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. *Econometrica, 47*(2), 263–291. https://doi.org/10.2307/1914185

Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. *European Journal of Social Psychology, 40*(6), 998–1009. https://doi.org/10.1002/ejsp.674

Lepper, M. R., Greene, D., & Nisbett, R. E. (1973). Undermining children’s intrinsic interest with extrinsic reward: A test of the “overjustification” hypothesis. *Journal of Personality and Social Psychology, 28*(1), 129–137. https://doi.org/10.1037/h0035519

Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. *American Psychologist, 55*(1), 68–78. https://doi.org/10.1037/0003-066X.55.1.68

Sharif, M. A., & Shu, S. B. (2017). The benefits of emergency reserves: Greater preference and persistence for goals that have slack with a cost. *Journal of Marketing Research, 54*(3), 495–509. https://doi.org/10.1509/jmr.15.0231

Silverman, J., & Barasch, A. (2023). On or off track: How (broken) streaks affect consumer decisions. *Journal of Consumer Research, 49*(6), 1095–1117. https://doi.org/10.1093/jcr/ucac029

Tversky, A., & Kahneman, D. (1991). Loss aversion in riskless choice: A reference-dependent model. *Quarterly Journal of Economics, 106*(4), 1039–1061. https://doi.org/10.2307/2937956

Tversky, A., & Kahneman, D. (1992). Advances in prospect theory: Cumulative representation of uncertainty. *Journal of Risk and Uncertainty, 5*(4), 297–323. https://doi.org/10.1007/BF00122574

Wood, W., & Neal, D. T. (2007). A new look at habits and the habit–goal interface. *Psychological Review, 114*(4), 843–863. https://doi.org/10.1037/0033-295X.114.4.843

Wood, W., Quinn, J. M., & Kashy, D. A. (2002). Habits in everyday life: Thought, emotion, and action. *Journal of Personality and Social Psychology, 83*(6), 1281–1297. https://doi.org/10.1037/0022-3514.83.6.1281

### Primary — SLA motivation

Al-Hoorie, A. H. (2018). The L2 motivational self system: A meta-analysis. *Studies in Second Language Learning and Teaching, 8*(4), 721–754. https://pressto.amu.edu.pl/index.php/ssllt/article/view/12295

Dörnyei, Z. (2001). *Motivational strategies in the language classroom*. Cambridge University Press. (p. 26 quoted in Ellis, 2005/2008.)

Dörnyei, Z. (2009). The L2 Motivational Self System. In Z. Dörnyei & E. Ushioda (Eds.), *Motivation, language identity and the L2 self* (pp. 9–42). Multilingual Matters. https://doi.org/10.21832/9781847691293-003

Ellis, R. (2005). Principles of instructed language learning. *System, 33*(2), 209–224. https://doi.org/10.1016/j.system.2004.12.006 — CAL digest (2008): https://www.cal.org/adultspeak/pdfs/digests/principles-of-instructed-second-language-acquisition.pdf

Gardner, R. C. (1985). *Social psychology and second language learning*. Edward Arnold. Restatement: Gardner (2001), ERIC ED262624, https://files.eric.ed.gov/fulltext/ED262624.pdf

Noels, K. A., Pelletier, L. G., Clément, R., & Vallerand, R. J. (2000). Why are you learning a second language? Motivational orientations and self-determination theory. *Language Learning, 50*(1), 57–85.

### Primary — first-party product

Babbel Help. Streak. https://support.babbel.com/hc/en-us/articles/17020978582162-Streak

Babbel Magazine. Features to help you finally get into a learning habit. https://www.babbel.com/en/magazine/build-a-language-habit

Busuu / Niesner, B. (2022). New version of Busuu… https://blog.busuu.com/busuu-new-features/

Duolingo (2022, 17 Oct). How does Duolingo evaluate effectiveness? https://blog.duolingo.com/duolingo-efficacy-research-framework/

Duolingo (2022, 31 Jan). The habit-building research behind your Duolingo streak. https://blog.duolingo.com/how-duolingo-streak-builds-habit/

Duolingo (2024, 13 Jun). Time Spent Learning Well. https://blog.duolingo.com/time-spent-learning-well/

Freeman, C., Kittredge, A., Wilson, H., & Pajak, B. (2023). *The Duolingo Method*. https://duolingo-papers.s3.amazonaws.com/reports/Duolingo_whitepaper_duolingo_method_2023.pdf

Jiang, X., Rollinson, J., Plonsky, L., & Pajak, B. (2020). *Duolingo efficacy study* (DRR-20-04). https://duolingo-papers.s3.amazonaws.com/reports/duolingo-efficacy-whitepaper.pdf

Memrise Help. My Activities / streaks and points. https://explore.memrise.com/help

Vesselinov, R., & Grego, J. (2016). *The Babbel Efficacy Study*. https://assets.ctfassets.net/zuzqvf4m2o58/qoYE4HHG3xeejHGbk0cCU/975d7456a85542a38e17aa4d842b47fe/Babbel2016_Efficacy_Study.pdf

Vesselinov, R., & Grego, J. (2016). *The busuu Efficacy Study*. https://comparelanguageapps.com/reports/The_busuu_Study2016.pdf

### Primary — independent app/learning studies

Jiang, X., Rollinson, J., Plonsky, L., Gustafson, E., & Pajak, B. (2021). *Foreign Language Annals, 54*(4). https://doi.org/10.1111/flan.12600

Loewen, S., et al. (2019). *ReCALL, 31*(3), 293–311. https://doi.org/10.1017/S0958344019000065

Shortt, M., Tilak, S., Kuznetcova, I., Martens, B., & Akinkuolie, B. (2023). Gamification in mobile-assisted language learning: A systematic review of Duolingo literature from 2012 to early 2020. *Computer Assisted Language Learning, 36*(3). https://doi.org/10.1080/09588221.2021.1933540

Sudina, E., & Plonsky, L. (2024). The effects of frequency, duration, and intensity on L2 learning through Duolingo. *Journal of Second Language Studies, 7*(1), 1–43. https://doi.org/10.1075/jsls.00021.plo

### Secondary (used as pointers, not as owners)

Clear, J. (2018). *Atomic Habits*. Avery. (Identity-based habits slogan.)

Duhigg, C. (2012). *The Power of Habit*. Random House. (Cue–routine–reward popularisation.)

Fogg, B. J. (2020). *Tiny Habits*. Houghton Mifflin Harcourt. (Trade expansion of Fogg, 2009.)

Walasek, L., Mullett, T. L., & Stewart, N. (2024). A meta-analysis of loss aversion in risky contexts. *Journal of Economic Psychology*. https://doi.org/10.1016/j.joep.2024.102740 (re-estimates λ; does not study streaks.)

### Marked: not journal-primary

Anonymous (2026). The evil bird and the right to disconnect… ACM IDC submission (qualitative parent–child Duolingo study; not yet a journal article). https://csl.uwaterloo.ca/download/documents/reportsarticles/idc26a_sub2151_i6pdf

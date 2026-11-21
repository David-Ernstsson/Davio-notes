# Onboarding needs across Davio starting levels

**Answer.** The evidence favours a short onboarding that asks only what Davio cannot learn from use (Support language and starting point), then proves the world-first promise by putting the Learner inside a place, not by explaining it. Official platform guidance converges on this: teach by doing, postpone nonessential setup, let people use the app without an account, and ask for purchases and permissions after people have seen the app's value ([Apple HIG, Onboarding](#s-hig-onboarding); [Material, Onboarding](#s-material); [Android, permissions](#s-android-perm)). The strongest research input concerns starting level. Learners' self-assessment correlates only moderately with measured performance (pooled r ≈ .47 across 67 studies), and it is more accurate with concrete criteria ([Li & Zhang, 2021](#s-li-zhang)). So the four-option choice should be expected to misplace learners in both directions. It works best when each option describes a recognisable situation and the first Activities are the real placement evidence, with the one-level change the foundation already provides. Guidance that helps novices can hinder experienced learners ([Kalyuga et al., 2003](#s-kalyuga)). For that reason, orientation and support should depend on the chosen level rather than be one tutorial for everyone; up-front tutorials paid off only in a complex game ([Andersen et al., 2012](#s-andersen)). Notifications measurably raise short-term engagement, but by small amounts, and no source here shows a learning effect ([Bidargaddi et al., 2018](#s-bidargaddi); [Yancey & Settles, 2020](#s-yancey)). Android 13+ also makes the one permission ask costly to waste ([Android, notification permission](#s-android-notif)). Success is a completed meaningful first Activity, starter completion, and return the following week. Finishing setup is a diagnostic, not a success. Most implications below are inferences for Davio, not tested rules. The checks in [Uncertainties and checks](#uncertainties-and-checks) would settle them.

Researched 2026-10-24 for [Research general onboarding needs across Davio starting levels](https://github.com/David-Ernstsson/Davio/issues/157). The flow record is #158's. This note does not specify screens, copy, or layout. Official pages were read on that date; papers were checked against their abstract or full text as noted in [Sources](#sources).

## Scope and baseline

**Baseline (owner-approved; not changed here).** From the [V1 foundation](../product-experience/v1-product-foundation.md#onboarding-account-and-difficulty) and [identity brief](../product-experience/what-davio-is.md):

- The welcome screen gives **Continue with Google** and **Continue without an account** equal visual legitimacy. V1 has no email/password. Later Google sign-in merges anonymous local progress.
- Onboarding confirms Support language. The device language is a suggestion the Learner explicitly confirms. English is always the fallback, and Support language can change at any time ([Support languages](../product-experience/v1-product-foundation.md#support-languages)).
- The starting point is self-selected, not a placement test: *completely new*, *know the basics*, *handle simple German*, *read or converse reasonably*. Davio briefly helps, then takes the Learner directly into the first world Activity. Repeated evidence may suggest a one-level change they can accept; they can change level at any time.
- A free Learner hears the free day after the hall, on the [free-day](../product-experience/free-day.md) screens, after every real lesson finish. A bounded starter sequence may run past the ordinary allowance.
- Notification permission is requested only after the starter sequence, as an optional gentle daily reminder. Ask once.
- The [accessibility baseline](../product-experience/v1-product-foundation.md#accessibility-baseline) is part of the free product. Arabic needs right-to-left support from the baseline.
- The primary measure is weekly learners who complete meaningful Activities and return the following week ([Measurement](../product-experience/v1-product-foundation.md#measurement-support-and-ai-operation)).

**Out of scope.** The current Swedish first tryable journey deliberately starts at Explore ([journey index](../product-experience/README.md#current-swedish-first-tryable-journey)). This note concerns the later public onboarding and does not propose adding onboarding to that loop. It does not inherit #105's assumptions. #144 owns production account and progress recovery; only the Learner-facing consequences appear here.

## How to read this

Each claim is tagged:

- **Direct.** The source studied or governs this object: official platform guidance about onboarding, sign-in, permissions, or accessibility; research on language self-assessment.
- **Limited / indirect.** Adjacent domain (games, mobile health), a first-party study that measures engagement rather than learning, or an abstract-level reading.
- **Inferred for Davio.** A recommendation that applies those findings to Davio. No source tested it on Davio or on this kind of product.

Engagement and learning are different outcomes. A source that shows more opens, or more setup completion, does not show more German learned ([note 22](22-streaks-habits-gamification.md); [note 02](02-app-outcomes-gap.md)). Competitor products appear only as illustrations, never as evidence.

## What the evidence says

### Official platform guidance

| Source | What it says | Tier |
| --- | --- | --- |
| [Apple HIG, Onboarding](#s-hig-onboarding) | People should ideally understand an app by experiencing it. "Teach through interactivity"; prefer context-specific tips to one onboarding flow. Keep any required flow brief and do not "teach too much". "Postpone nonessential setup flows"; provide reasonable defaults. Ask for a permission when people first reach the function that needs it. "Prefer letting people experience your app or game before prompting them for ratings or purchases." Don't let large downloads hinder onboarding. | Direct (iOS guidance; platform-neutral reasoning) |
| [Material 1, Onboarding](#s-material) (archived; I found no Material 3 onboarding pattern) | Self-select: choices must be meaningful and noticeable. "Don't ask for preferences that can be garnered from normal usage". Keep to one screen, with fewer than ten choices. Land the user where they can act on their choices. Quickstart: "Don't force education upfront"; offer learning later if the user seems unsure. Don't combine self-select with a benefits carousel. | Direct but superseded |
| [Android, notification permission](#s-android-notif) | On Android 13+, notifications are off by default for new installs. "Let them familiarize themselves with your app" before asking. Ask in a context that makes the use clear, or after a few launches. Explain why before the system dialog. | Direct |
| [Android, requesting permissions](#s-android-perm) | Ask in context and don't block the user. If the user taps Deny more than once, the system treats it as permanent and stops showing the dialog. "Persistent nagging to reconsider is not respectful of their choice." | Direct |
| [Apple, managing notifications](#s-hig-notif) and [App Review 4.5.4, 5.1.2(i)](#s-apple-review) | Provide in-app settings for notification choices. Notifications must not be required to use the app. | Direct (iOS) |
| [App Review 5.1.1(v)](#s-apple-review) | "If your app doesn't include significant account-based features, let people use it without a login." | Direct (iOS) |
| [Google, Sign in with Google branding](#s-google-brand) | The Google button must be at least as prominent as other *third-party* sign-in options. "Continue with Google" is a recommended label. It should be clear the user is signing in to *your* app. | Direct |
| [Google Play, account deletion](#s-play-deletion) | Apps that let users create accounts must offer account deletion both in the app and on the web. | Direct |
| [Google Play, subscriptions policy](#s-play-subs) and [App Review 3.1.2(c)](#s-apple-review) | Disclose offer terms, cost, and billing frequency. A dismiss button that is missing or hard to see is listed as a violation. Describe what the user gets for the price before asking. | Direct |
| [Android, per-app languages](#s-android-lang) | Android 13+ lets users set a per-app language in system settings. An in-app picker built on the public APIs keeps system settings in sync. | Direct |
| [Android, supporting languages](#s-android-rtl) | `supportsRtl` and start/end layout attributes mirror the UI for RTL locales. Keep locale-specific resources separate. | Direct |
| [Android, saving UI state](#s-android-state) | The system may kill a backgrounded process. Users still expect the screen as they left it, so persist minimal state. After a user-initiated dismissal they expect a clean screen. | Direct |
| [Android, accessibility](#s-android-a11y) and [WCAG 2.2](#s-wcag) | Touch targets of at least 48 dp; contrast of 4.5:1 for body text. WCAG: 1.4.4 Resize Text; 1.4.10 Reflow; 2.2.1 Timing Adjustable; 2.5.8 Target Size; 3.1.2 Language of Parts; 3.3.7 Redundant Entry; 3.3.8 Accessible Authentication; 2.3.3 Animation from Interactions (AAA). | Direct |

### Primary research

| Source | Sample and measure | Finding | Tier for Davio |
| --- | --- | --- | --- |
| [Li & Zhang, 2021](#s-li-zhang) | Meta-analysis, 67 studies, 97 samples, >68,500 participants | Self-assessment correlates with language performance at r = .466. Significant moderators include the type and presence of self-assessment criteria, the instrument, and training. Language skill was not a significant moderator. | Direct for self-selected level (abstract-level) |
| [Trofimovich et al., 2016](#s-trofimovich) | Two experiments, N = 134, L2 speech | Self-assessment was mostly inaccurate; higher-proficiency speakers rated themselves worse than listeners did. | Limited (speech only) |
| [Council of Europe, CEFR self-assessment grid](#s-cefr) | Official instrument | A can-do grid helps learners profile their skills and choose a level to look at more closely. | Direct for descriptor design; not tested on Davio |
| [Kalyuga et al., 2003](#s-kalyuga) | Review, cognitive-load research | Guidance that is highly effective for inexperienced learners can lose its effect, and even harm, for more experienced ones (the expertise reversal effect). | Indirect (not language apps) |
| [Andersen et al., 2012](#s-andersen) | Multivariate experiment, >45,000 players, three games | Tutorials raised play time by up to 29% only in the most complex game, with no significant gain in the two simpler ones. Context-sensitive instruction helped in the complex game. On-demand help reduced progress by 12% in one simple game. | Indirect (games, engagement) |
| [Patall et al., 2008](#s-patall) | Meta-analysis, 41 studies | Choice raised intrinsic motivation, effort, and performance. Effects were stronger for 2–4 successive choices, and weaker for adults than for children. | Indirect |
| [Yanagisawa et al., 2020](#s-yanagisawa) | Meta-analysis, 42 studies, glossed reading | Glossed reading increased word learning. L1 glosses outperformed L2 glosses, with no reported interaction with proficiency. | Indirect (supports the value of Support-language help) |
| [Bonné et al., 2017](#s-bonne) | 157 Android users, 6 weeks, in-context surveys | 84% of requests were granted. A main reason for the decision was whether users *expected* the app to need the permission. Some users denied because they knew they could change it later. | Direct for permission asks |
| [Bidargaddi et al., 2018](#s-bidargaddi) | Micro-randomised trial, 1,255 users, 89 days, health app | A tailored notification made in-app engagement within 24 h 3.9% more likely (RR 1.039). Effects were larger at midday on weekends. | Limited (health, proximal engagement) |
| [Yancey & Settles, 2020](#s-yancey) | Duolingo, ~200 million practice reminders | Choosing reminder content with a bandit algorithm gave +0.5% daily active users and +2% new-user retention over a strong baseline. | Limited (first-party, engagement not learning) |
| [Gollwitzer & Sheeran, 2006](#s-gollwitzer) | Meta-analysis, 94 tests | If-then plans that name when and where to act improved goal attainment (d = .65). | Indirect |
| [Oulasvirta et al., 2005](#s-oulasvirta) | Field study, mobile use in urban settings | Continuous attention to the phone fell from over 16 s in the lab to bursts of a few seconds in demanding mobile situations. | Direct for phone context |
| [Leiva et al., 2012](#s-leiva) | Large observational study, app switching and calls | Interruptions are rare (at most about 10% of daily app use) but can delay task completion by up to four times. | Direct for phone context |

## Onboarding moments

Each moment lists the evidence first, then implications. Implications are **inferred for Davio** unless marked otherwise.

### First open and promise

Evidence: Apple says people should ideally understand an app by experiencing it; any splash should be brief ([HIG](#s-hig-onboarding)). Material reserves benefit carousels for apps with a new kind of benefit, at most three benefits, and says not to combine them with self-select ([Material](#s-material)). Davio onboarding is already self-select (language, level).

- Carry the promise on the welcome screen in one line: the foundation's "Learn a language by exploring its world" or its German V1 line. Don't add a carousel. The first Activity, set in a real place, is the proof.
- First screen, then the place, quickly. Prefetch the first Activity for the chosen level while the Learner answers the remaining questions, so the first impression is not a download wait ([HIG](#s-hig-onboarding); [free-day](../product-experience/free-day.md#ready-before-the-tap) already fetches ahead).
- The commercial wedge has outgrown beginner apps ([what-davio-is](../product-experience/what-davio-is.md#who-it-is-for)). A first open that looks like a beginner course risks losing them before the level question. The promise should read as for all levels.

### Google or guest entry

Evidence: Let people use the app without a login when accounts aren't central (direct; [App Review 5.1.1(v)](#s-apple-review)); postpone nonessential setup ([HIG](#s-hig-onboarding)). Google's prominence rule compares the Google button with other third-party providers only ([branding](#s-google-brand)), so equal weight for the guest choice is permitted. Google sign-in avoids password recall, which meets WCAG 3.3.8 ([WCAG](#s-wcag)). Account creation brings in-app and web deletion duties ([Play](#s-play-deletion)).

- Equal legitimacy (baseline) is consistent with this guidance. Neither choice should carry warning tone or a "recommended" badge.
- A guest needs one plain, non-threatening sentence somewhere they will read it: progress lives on this phone, and signing in later keeps it. Placement and wording are #158's; the mechanism is #144's.
- Returning from the Google account chooser is an interruption point. The app may be killed while the chooser is open ([Android state](#s-android-state)), so the answers given so far must survive it.
- Once accounts exist, Profile needs a findable delete-account route, and a web route must exist ([Play](#s-play-deletion)). The later public Profile already anticipates this ([profile](../product-experience/profile.md#what-it-shows)).

### Support-language confirmation

Evidence: Android 13+ users can set a per-app language in system settings, and in-app pickers on the public APIs keep it in sync (direct; [Android languages](#s-android-lang)). L1 glosses outperform L2 glosses for vocabulary learning from reading (indirect; [Yanagisawa et al., 2020](#s-yanagisawa)).

- Suggest a language using this precedence: a per-app language the Learner already set for Davio, then the device language, then English. Confirm explicitly (baseline). Many Davio Learners are multilingual (Polish, Ukrainian, Russian, Turkish, Arabic Support languages), so the device language can be wrong.
- Show each choice in its own name and script, so a Learner can recognise their language even when the current UI language is not theirs. Mark each name with its language for screen readers ([WCAG 3.1.2](#s-wcag)).
- Explain once what the Support language changes: explanations and help. Activities stay in German. This prevents a Learner from expecting a translated lesson.
- Arabic must mirror correctly from this screen onward ([Android RTL](#s-android-rtl)). AI-reviewed languages carry their label and report route (baseline). A confirmation screen is the first place a weak translation is seen.

### Self-selected starting level and recovery

Evidence: Self-assessment correlates with performance at about r = .47, and is more accurate when criteria are present and concrete (direct; [Li & Zhang, 2021](#s-li-zhang)). Proficient speakers underrate themselves (limited; [Trofimovich et al., 2016](#s-trofimovich)). The CEFR's own self-assessment tool uses can-do descriptors ([CEFR](#s-cefr)). Choice supports motivation, most clearly with a few choices ([Patall et al., 2008](#s-patall)). Self-select screens should offer meaningful choices that use can't reveal (direct; [Material](#s-material)). Davio's [learning philosophy](../product-experience/learning-philosophy.md#challenge-outcomes-and-unlocks) already says self-reports adjust support and recommendations, while evaluated performance changes learning estimates.

- Expect misplacement in both directions. Treat the choice as a starting point, not a measurement. The first Activities are the placement evidence.
- Give each of the four options one concrete situation the Learner can recognise ("I can order at a café and understand the price"), not only a label. Concrete criteria are the strongest lever on accuracy in the meta-analysis. Keep the situation examples in the Support language; any German phrase is marked as German.
- Say on the same screen that the level can be changed at any time (baseline). This lowers the cost of choosing for an unsure Learner.
- Misplacement costs differ by direction. Too hard for a complete beginner risks early failure. Too easy for a post-beginner confirms "another beginner app", the reason the wedge left its last app. The first Activity at each level should let a misplaced Learner both succeed and show what they can do.
- Recovery stays within the baseline. Suggest a one-level change after repeated evidence; the Learner can accept or decline. The open question is how soon "repeated" can be. Two or three Activities inside the starter sequence may be enough when evidence is consistent (see [checks](#uncertainties-and-checks)).
- A light "too easy / too hard" signal at a close may adjust support and recommendations, as the philosophy already allows. It must not silently move the level.
- **Explicit challenge, not a change:** the four options have no "not sure". A Learner who can't decide may freeze or guess low. The copy can say "pick the closest". Whether to add a fifth option or default an unsure Learner to a band is the owner's call.

### Complete beginners and Learners with existing knowledge

Evidence: Guidance that helps novices can hinder experienced learners (indirect; [Kalyuga et al., 2003](#s-kalyuga)). In the language domain, how much help an app gives changes by level more often than the interaction mechanism does ([note 27](27-mobile-ll-interactions-pedagogy-by-level.md#the-one-paragraph-answer)).

- One onboarding, level-dependent support. *Completely new* needs Support-language framing, audio with text, and a first Activity that can be completed with zero German. *Read or converse reasonably* needs the least framing and an early chance to do something demanding.
- Skip what the chosen level makes redundant. Don't make an upper-intermediate Learner sit through beginner orientation.
- Beginners benefit most from Support-language help in the first sittings (indirect; [Yanagisawa et al., 2020](#s-yanagisawa)). Where the Activity design allows, that help should be most generous at the start.

### Orientation and the first world Activity

Evidence: Teach through interactivity; prefer context-specific tips (direct; [HIG](#s-hig-onboarding)). Don't force education up front (direct; [Material](#s-material)). Tutorials justified their cost only in a complex game; context-sensitive instruction beat up-front instruction there; on-demand help reduced progress in a simple game (indirect; [Andersen et al., 2012](#s-andersen)). Phone attention arrives in short bursts (direct; [Oulasvirta et al., 2005](#s-oulasvirta)).

- Don't add a separate tutorial before the first Activity. Davio's interactions (read, select, complete, produce) are familiar app mechanics. The novel part is being in a place, which a tutorial can't convey.
- Explain an interaction the first time it appears, at that point, briefly: for example, the first typed answer or the first Compose. Don't explain it again on later occasions.
- The companion may orient once at the threshold of the first place, within [brand-world](../product-experience/brand-world.md) restraint. Play itself stays full-screen without the companion (baseline).
- The first Activity is a real world Activity at the chosen level, not a demo. Its close names what the Learner managed. The next place is their choice, which models the return.
- Tell the Learner early, in the flow, that leaving keeps their place, so a phone interruption doesn't feel like a loss ([sitting](../product-experience/sitting.md) governs the behaviour).

### Free day, allowance, and Plus timing

Evidence: Let people experience the app before prompting for purchases (direct; [HIG](#s-hig-onboarding)). Describe what Plus gives for the price, disclose terms, and make dismissal clearly visible (direct; [Play subscriptions](#s-play-subs); [App Review 3.1.2(c)](#s-apple-review)). No primary research reviewed here establishes the learning effect of paywall timing; conversion studies would not establish it either.

- The baseline keeps Plus out of onboarding and puts the free day after the hall. That matches the guidance.
- The starter sequence and the normal free day must not contradict each other. If the starter runs past two starts, a post-hall screen saying "no starts left" would be false. The flow needs one honest statement of what the first days include, and when the normal day begins. This is a #158 design question; the [free-day](../product-experience/free-day.md#the-day) record already says its screens describe the normal day.
- The first allowance message should come after the Learner has completed something meaningful. Under the baseline it does.
- The full-day screen's Plus promotion has a visible close (baseline), which meets the Play policy example.

### Reminder permission and return invitations

Evidence: On Android 13+, notifications are off by default. Ask after familiarity, in a context that makes the use clear, and explain before the system dialog; two denials end the system prompt (direct; [Android](#s-android-notif), [permissions](#s-android-perm)). Users grant when they expect the app to need the permission (direct; [Bonné et al., 2017](#s-bonne)). Notifications raise short-term engagement modestly (limited; [Bidargaddi et al., 2018](#s-bidargaddi); [Yancey & Settles, 2020](#s-yancey)). If-then plans help people act on intentions (indirect; [Gollwitzer & Sheeran, 2006](#s-gollwitzer)). Streak pressure measures opens, not learning ([note 22](22-streaks-habits-gamification.md)).

- Asking after the starter sequence, once, matches Android's guidance. One in-app explanation screen saying what the reminder is (gentle, daily, the Learner's chosen time) should come before the system dialog. The system dialog then appears only for a Learner who said yes, and the single ask isn't spent on someone who would deny.
- Letting the Learner choose a time turns the reminder into an if-then plan. The research supports plans in general, not this reminder, and is indirect.
- Reminder content should name the next place or what is waiting, not loss or guilt (consistent with [note 22](22-streaks-habits-gamification.md)).
- In-app return invitations need no permission: the hall naming the next place, and the free day's "two more at midnight". They reach every Learner, including those who decline.
- A Learner who declines should be able to turn reminders on later from Profile or settings, at their own initiative ([Apple](#s-hig-notif)). This reads as consistent with "ask once" because Davio isn't asking. The owner should confirm that reading.
- **Explicit challenge, not a change:** the starter sequence may end days after install, so Learners who stop before then never see the ask. Whether that matters depends on how many reach the end (see [checks](#uncertainties-and-checks)).

### Accessibility

Evidence: [Accessibility baseline](../product-experience/v1-product-foundation.md#accessibility-baseline); [WCAG 2.2](#s-wcag); [Android accessibility](#s-android-a11y).

- Onboarding screens must work at 200% text without loss (1.4.4, 1.4.10). Level descriptions with concrete situations are long, so they need to wrap and scroll, not truncate.
- Nothing in onboarding is timed or auto-advancing (2.2.1). No autoplay carousel.
- Mark German inside Support-language text with its language, so TalkBack pronounces it in German (3.1.2). This matters more in a language app than elsewhere.
- Sign-in uses no password or puzzle (3.3.8); never ask again for what was already answered (3.3.7).
- Targets are at least 48 dp, and the guest and Google choices are equally reachable. Companion art needs a description or is marked decorative. Reduced motion covers welcome animation.
- The first Activity's audio needs full text or transcripts (baseline). A Learner without sound must be able to complete the first experience.

### Localization

Evidence: [Android languages and RTL](#s-android-rtl); [per-app languages](#s-android-lang); [Support languages](../product-experience/v1-product-foundation.md#support-languages).

- Every onboarding string ships in every launch Support language before that language ships. A partially translated first screen is the worst place for English fallback.
- Concrete level examples need cultural review per Support language, not just translation. The situation must be recognisable to the Learner, while the German example stays German.
- Arabic RTL covers welcome, entry, language, level, the first-Activity frame, and the reminder explanation. Test with Android's Force RTL option ([Android RTL](#s-android-rtl)).
- Support-language changes made during onboarding must take effect immediately, including on the screen they were made on.

### Interruption and resume on a phone

Evidence: Mobile attention comes in short bursts (direct; [Oulasvirta et al., 2005](#s-oulasvirta)). Interruptions are rare but costly (direct; [Leiva et al., 2012](#s-leiva)). After process death users expect the screen as they left it; after a user dismissal they expect a clean screen (direct; [Android state](#s-android-state)). Don't ask again for information already given (direct; [WCAG 3.3.7](#s-wcag)).

- Save each onboarding answer as soon as it is given. Reopening goes to the next unanswered step, or to the first Activity if setup is done.
- Process death during the Google chooser, a phone call during level choice, or a swipe-away should never restart onboarding from the welcome screen. A swiped-away app may reopen at the start of the step, with the answers kept.
- One decision per screen suits short attention bursts.
- An interrupted first Activity resumes where it was (baseline: the current Activity is resumable). A technical failure leaves the allowance and starter count intact (baseline). If the first Activity fails to load, the Learner stays at the last completed step, with a retry, not a restart.

## Success measures

Keep these separate from setup completion. Setup completion rises when questions are removed, even if fewer Learners then reach a fitting first experience. Engagement studies count opens, not language gained ([Bidargaddi et al., 2018](#s-bidargaddi); [Yancey & Settles, 2020](#s-yancey); [note 22](22-streaks-habits-gamification.md)).

**Success (inferred for Davio, within the [foundation measures](../product-experience/v1-product-foundation.md#measurement-support-and-ai-operation)):**

1. **First meaningful Activity completed.** Share of first opens that complete a world Activity with recorded Evaluations, and median time from first open to the first Activity Step (the real setup cost).
2. **Level fit.** First-three-Activity Evaluation outcomes against a band the content team calls appropriate, per starting level. Also count accepted and self-initiated level changes in the first week, in each direction.
3. **Starter completion.** Share of new Learners who finish the starter sequence, per level.
4. **Return.** D1 and D7 return *with a completed Activity*. Ultimately the primary measure: completes meaningful Activities and returns the following week.

**Diagnostics, not success:** onboarding completion and step drop-off, Google vs guest split, Support-language switches in the first session, notification opt-in rate, and allowance encounters during the starter sequence. These say where onboarding loses people, not whether it served them.

Per the foundation, change one major variable at a time.

## Uncertainties and checks

| Uncertainty | Why it matters | Check that would settle it |
| --- | --- | --- |
| How often the four-option choice misplaces German Learners, and in which direction | Determines how soon the one-level suggestion should come, and whether concrete descriptors suffice | In the test group, compare chosen level with first-three-Activity Evaluations; count level changes by direction in week 1. Then A/B labels only vs labels plus a concrete situation. |
| Whether "pick the closest" is enough for unsure Learners | A missing "not sure" path may push guesses low | Watch time on the level screen and early upward changes; five-Learner moderated sessions with mixed experience |
| How many Learners reach the end of the starter sequence | If few do, an ask after the starter reaches few people | Measure starter completion before launch; if it is low, bring the owner the evidence before changing the ask point |
| Whether the device-language suggestion is right for multilingual Learners | A wrong suggestion that is confirmed by default costs comprehension | Rate of Support-language switches in sessions 1–3, by device language |
| How the starter sequence's extra starts and the free-day screen fit together | A wrong count on the first post-hall screen damages trust | Design question for #158; verify the copy against starter state in a click-through |
| Whether guests understand where their progress lives | Uninstall or device loss can lose progress; #144 owns recovery | Comprehension check in moderated sessions; report and support volume about lost progress |
| Whether a first world Activity is completable from zero German | *Completely new* is a designed path; one failed first sitting may end the relationship | Five complete beginners, unmoderated, on the first Activity; completion and Evaluation outcomes |
| Interruption recovery on real devices | Process death and Google chooser behaviour vary by device and wrapper ([platform note](production-platform-options.md#play-packaging)) | Scripted device test: kill at each onboarding step and inside the Google chooser; enable "Don't keep activities" |
| Accessibility of the full onboarding | Baseline commitment; language-of-parts is easy to miss | TalkBack walkthrough at 200% text, Force RTL, and reduced motion, in English, Arabic, and one Cyrillic Support language |
| Notification effect on learning | Evidence here covers engagement only | Compare week-2 completed Activities, not opens, between Learners who opted in and those who did not. Correlational only; treat with care. |

## Sources

Official guidance:

- <a id="s-hig-onboarding"></a>Apple, Human Interface Guidelines: [Onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding) (change log through 2024-06-10).
- <a id="s-hig-notif"></a>Apple, Human Interface Guidelines: [Managing notifications](https://developer.apple.com/design/human-interface-guidelines/managing-notifications).
- <a id="s-apple-review"></a>Apple, [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/): 3.1.2(c), 3.2.2(x), 4.5.4, 5.1.1(v), 5.1.2(i).
- <a id="s-material"></a>Material Design 1 (archived), [Onboarding](https://m1.material.io/growth-communications/onboarding.html). The site says Material 1 is no longer maintained.
- <a id="s-android-notif"></a>Android Developers, [Notification runtime permission](https://developer.android.com/develop/ui/views/notifications/notification-permission).
- <a id="s-android-perm"></a>Android Developers, [Request runtime permissions](https://developer.android.com/training/permissions/requesting).
- <a id="s-android-lang"></a>Android Developers, [Per-app language preferences](https://developer.android.com/guide/topics/resources/app-languages).
- <a id="s-android-rtl"></a>Android Developers, [Support different languages and cultures](https://developer.android.com/training/basics/supporting-devices/languages).
- <a id="s-android-state"></a>Android Developers, [Save UI states](https://developer.android.com/topic/libraries/architecture/saving-states).
- <a id="s-android-a11y"></a>Android Developers, [Make apps more accessible](https://developer.android.com/guide/topics/ui/accessibility/apps).
- <a id="s-google-brand"></a>Google Identity, [Sign in with Google branding guidelines](https://developers.google.com/identity/branding-guidelines).
- <a id="s-play-deletion"></a>Google Play Console Help, [Understanding Google Play's app account deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111).
- <a id="s-play-subs"></a>Google Play Console Help, [Subscriptions policy](https://support.google.com/googleplay/android-developer/answer/9900533).
- <a id="s-wcag"></a>W3C, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).
- <a id="s-cefr"></a>Council of Europe, [CEFR level descriptions and self-assessment grid](https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions).

Research (read level in brackets):

- <a id="s-andersen"></a>Andersen, E., O'Rourke, E., Liu, Y.-E., Snider, R., Lowdermilk, J., Truong, D., Cooper, S., & Popović, Z. (2012). [The impact of tutorials on games of varying complexity](https://grail.cs.washington.edu/projects/game-abtesting/chi2012/chi2012.pdf). *CHI 2012*, 59–68. [full text]
- <a id="s-bidargaddi"></a>Bidargaddi, N., et al. (2018). [To prompt or not to prompt? A microrandomized trial of time-varying push notifications to increase proximal engagement with a mobile health app](https://pmc.ncbi.nlm.nih.gov/articles/PMC6293241/). *JMIR mHealth and uHealth*, 6(11), e10123. [abstract]
- <a id="s-bonne"></a>Bonné, B., Peddinti, S. T., Bilogrevic, I., & Taft, N. (2017). [Exploring decision making with Android's runtime permission dialogs using in-context surveys](https://www.usenix.org/conference/soups2017/technical-sessions/presentation/bonne). *SOUPS 2017*, 195–210. [abstract]
- <a id="s-gollwitzer"></a>Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. *Advances in Experimental Social Psychology*, 38, 69–119. [secondary summaries; effect size widely reported, chapter not read]
- <a id="s-kalyuga"></a>Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). [The expertise reversal effect](https://ro.uow.edu.au/edupapers/136). *Educational Psychologist*, 38(1), 23–31. [abstract]
- <a id="s-leiva"></a>Leiva, L., Böhmer, M., Gehring, S., & Krüger, A. (2012). [Back to the app: The costs of mobile application interruptions](https://interruptions.net/literature/Leiva-MobileHCI12.pdf). *MobileHCI 2012*, 291–294. [abstract]
- <a id="s-li-zhang"></a>Li, M., & Zhang, X. (2021). [A meta-analysis of self-assessment and language performance in language testing and assessment](https://sage.figshare.com/collections/A_meta-analysis_of_self-assessment_and_language_performance_in_language_testing_and_assessment/5021492). *Language Testing*, 38(2), 189–218. [abstract]
- <a id="s-oulasvirta"></a>Oulasvirta, A., Tamminen, S., Roto, V., & Kuorelahti, J. (2005). [Interaction in 4-second bursts: The fragmented nature of attentional resources in mobile HCI](https://www.interruptions.net/literature/Oulasvirta-CHI05-p919-oulasvirta.pdf). *CHI 2005*, 919–928. [abstract]
- <a id="s-patall"></a>Patall, E. A., Cooper, H., & Robinson, J. C. (2008). [The effects of choice on intrinsic motivation and related outcomes: A meta-analysis of research findings](https://selfdeterminationtheory.org/wp-content/uploads/2019/10/2008_PatallCooperRobinson_PsychBulletin.pdf). *Psychological Bulletin*, 134(2), 270–300. [abstract]
- <a id="s-trofimovich"></a>Trofimovich, P., Isaacs, T., Kennedy, S., Saito, K., & Crowther, D. (2016). [Flawed self-assessment: Investigating self- and other-perception of second language speech](https://discovery-pp.ucl.ac.uk/id/eprint/1525231). *Bilingualism: Language and Cognition*, 19(1), 122–140. [abstract]
- <a id="s-yanagisawa"></a>Yanagisawa, A., Webb, S., & Uchihara, T. (2020). [How do different forms of glossing contribute to L2 vocabulary learning from reading? A meta-regression analysis](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/how-do-different-forms-of-glossing-contribute-to-l2-vocabulary-learning-from-reading/38124150D59DF3039EE1FF5AE88FE922). *Studies in Second Language Acquisition*, 42(2). [abstract-level summary; full text not read]
- <a id="s-yancey"></a>Yancey, K. P., & Settles, B. (2020). [A sleeping, recovering bandit algorithm for optimizing recurring notifications](https://research.duolingo.com/papers/yancey.kdd20.pdf). *KDD 2020*, 3008–3016. [abstract]

Davio records: [V1 foundation](../product-experience/v1-product-foundation.md), [what Davio is](../product-experience/what-davio-is.md), [journey index](../product-experience/README.md), [free day](../product-experience/free-day.md), [learning philosophy](../product-experience/learning-philosophy.md), [profile](../product-experience/profile.md), [note 02](02-app-outcomes-gap.md), [note 22](22-streaks-habits-gamification.md), [note 27](27-mobile-ll-interactions-pedagogy-by-level.md), [production platform options](production-platform-options.md).

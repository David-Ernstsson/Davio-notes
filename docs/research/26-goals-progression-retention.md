# Goals, Progression & Long-Term Motivation

**Research date:** 24 August 2026

Discovery note (not a product spec). Adjacent ownership: streaks vs learning [22](22-streaks-habits-gamification.md); quests / locks / learner models [25](25-open-world-quests-learner-model.md); product-direction synthesis [exploration-concept.md](../product-experience/exploration-concept.md) and [exploration-progression-concept.md](../product-experience/exploration-progression-concept.md). Founder product handoff (capability gates / can-do journal): [capability-progression-concept.md](../product-experience/capability-progression-concept.md).

**Research question**

> How can we create a nested goal/progression system where the learner always has something meaningful to work toward, while progression remains tied to genuine language learning rather than arbitrary gamification?

## 1. The problem

A language-learning activity has an obvious short-term objective: listen, answer, speak, read, or complete a conversation. The harder product problem is giving the learner a compelling reason to return tomorrow, continue after a session, and persist for months.

Games solve this by nesting goals. A player can simultaneously care about the next action, the current quest, a chapter or region, character progression, and an eventual campaign outcome. Importantly, the goals are usually not just counters: they create **purpose, competence, curiosity, agency, and visible consequences**.

Language learning is different. The underlying outcome is gradual, multidimensional, and vulnerable to forgetting. A learner can "win" an app while still being unable to handle a real conversation. Therefore the central design constraint should be:

> **Game progression may motivate practice, but genuine language capability must remain the source of meaningful progression.**

This is consistent with the CEFR's action-oriented approach, which frames objectives around real-world tasks and "can do" descriptors rather than abstract completion alone.

**Research finding:** Goal setting and feedback can improve effort and self-efficacy, but game elements do not have a uniformly positive effect. A 2023 systematic review of 21 empirical studies of gamified foreign-language-learning tools found mixed effectiveness; another review of 40 EFL/ESL studies found benefits alongside short-lived effects and problems with competition.

**Decision:** Do not design a large gamification layer first. Design a meaningful progression model first, then use only the game mechanics that make that progression easier to understand and pursue.

---

## 2. What games teach us

A useful abstraction is:

**Long-term purpose → medium-term destination → meaningful objective → immediate action → feedback → consequence**

The strongest systems make each level answer a different question:

| Timescale | Learner question | Product equivalent |
|---|---|---|
| Seconds/minutes | What do I do now? | Listen/respond/read/speak |
| Activity | What am I trying to accomplish? | Complete a communicative task |
| Session | What am I finishing today? | Advance a quest / practice a target capability |
| Several sessions | What am I working toward? | Complete a quest or prepare for a story challenge |
| Days | Why return tomorrow? | Continue an unfinished quest + maintain practice habit |
| Weeks | Where am I going? | Complete a chapter/region |
| Months | What am I becoming? | Demonstrate a broader capability |
| Long term | Why learn this language? | Become independently capable in desired real-world situations |

### The key game pattern: nested goals, not nested currencies

Successful games often have many goals but do **not** require the player to think about every system simultaneously. World of Warcraft explicitly distinguishes campaign, local-story, repeatable, important, and other quest types in its quest UI. This is useful because it separates *what matters to the main journey* from *what is available in the world*.

The lesson is not "add more quest types." It is:

> **Keep the underlying goal graph rich, but expose only the small slice relevant to the learner right now.**

### Main quest + side quest + exploration

This combination is powerful because it serves different motivational styles:

- **Main quest:** supplies direction and narrative continuity.
- **Side quests:** supply choice, variety, and personal relevance.
- **Exploration:** supplies discovery without obligation.

Open-world research also highlights the tension: freedom can increase exploration, mastery, and sense of purpose, but an open world without clear objectives can leave players without direction.

**Recommendation:** Build a **guided open world**, not an unrestricted one. The system should always offer a recommended next step, while making alternative meaningful activities easy to choose.

---

## 3. Game goal/progression patterns

| Game | Immediate goal | Medium-term goal | Long-term structure | Useful transfer | Do not copy |
|---|---|---|---|---|---|
| **World of Warcraft** | Complete an objective | Finish a quest chain / local story | Campaign, zones, character progression | Clear hierarchy, quest chains, main-vs-side distinction, visible next objective | Huge quest logs, grind, XP as the primary meaning of progress |
| **The Legend of Zelda: Breath of the Wild** | Solve a local problem / shrine | Free a Divine Beast / explore a region | Save Hyrule, discover the world | Strong destination + freedom of route; exploration creates self-chosen goals | Assuming a learner will happily self-direct without scaffolding |
| **Skyrim** | Follow a lead or investigate a place | Complete a questline / faction arc | Multiple overlapping storylines and character development | Persistent world, optional storylines, player-authored priorities | Too many simultaneous objectives; narrative sprawl |
| **Pokémon** | Catch/train/battle | Complete a gym/path/story objective | Become Champion; complete broader collection | Capability gates can make mastery meaningful; multiple routes can coexist | Turning language into a grindable "level" detached from ability |
| **Stardew Valley** | Choose a small daily task | Repair/build relationships, farm, explore | Multiple self-defined life goals | Excellent example of optionality and self-authored goals | Lack of direction for some learners; not everyone enjoys open-ended play |
| **Genshin Impact** | Complete a quest/domain/activity | Advance regional story and character progression | Large world and continuing narrative | Short loops feed into a persistent world and character/story attachment | Daily-task treadmill, resource optimization, and FOMO |

### Strongest transferable mechanisms

1. **Quest chains create narrative momentum.**
2. **Unlocks make progress consequential.**
3. **Clear next objectives reduce decision cost.**
4. **Optional content supports autonomy.**
5. **World changes make progress visible.**
6. **Capability gates make advancement feel earned.**
7. **Multiple time horizons let the same action feel useful now and later.**
8. **A good game can contain many systems without asking the player to monitor all of them.**

---

## 4. Language-learning evidence

### 4.1 Gamification works inconsistently

Systematic reviews do not support "more gamification = more learning."

A 2023 systematic review of 21 gamified foreign-language-learning studies found mixed outcomes: some positive, some negative, and some null. It specifically identifies "pointsification"—adding points, badges, and leaderboards to otherwise conventional learning—as a weak form of gamification that may fail to create meaningful learning experiences.

A separate review of 40 EFL/ESL studies found common use of feedback, points, quizzes, badges, leaderboards, rewards, progress bars, stories, and challenges. It reported benefits for language skills and attitudes, but also short-lived effects and negative effects from competition.

**Research finding:** The evidence supports **purposeful game design**, not an inventory of game mechanics.

### 4.2 Meaningful progress matters

Research on learner experiences with language apps finds that memorable positive experiences often involve:

- noticing real improvement;
- completing something difficult;
- successfully applying language in a real-life context;
- seeing a meaningful level or streak milestone.

This is especially important for the proposed product. "67% chapter complete" is useful only if the learner understands what that completion *means*.

The CEFR's action-oriented approach is a strong model: define outcomes as things a learner can actually do in real contexts.

Examples:

- "Can understand the main point of a short everyday conversation."
- "Can order food and handle a follow-up question."
- "Can ask for clarification when I do not understand."
- "Can participate in a short workplace conversation."

These are stronger long-term anchors than "Listening 64%."

### 4.3 The capability hypothesis is strong, but needs care

**Hypothesis:** If completing a meaningful language capability unlocks new narrative/world content, learners will perceive progression as more authentic and motivating.

This has strong conceptual support because it combines:

- **competence:** "I can actually do this now."
- **purpose:** "That ability lets me go somewhere new."
- **feedback:** "The system recognized what I can do."
- **autonomy:** "I can choose which capability/story to pursue."

But capability must not be reduced to a single binary test. Language ability is multidimensional and context-dependent.

**Recommendation:** Treat capability as a **demonstrated threshold**, not a permanent "level." Use repeated evidence across comprehension, production, interaction, and retention before declaring a capability stable.

---

## 5. Existing language-app patterns

### Duolingo

Duolingo demonstrates the strength of the **habit layer**. Its own A/B testing reports that separating the streak requirement from the daily goal increased Day-14 retention by 3.3% and increased the share of daily learners maintaining a streak. Another experiment with a streak wager increased Day-7 retention by 14%.

Duolingo also reports that making streak extension easier improved consistency, and its resurrection work recognizes that returning after a long absence can be intimidating.

**Research finding:** Streaks can materially change return behavior.

**Important limitation:** Return behavior is not the same thing as learning. A 2026 study of Duolingo usage and self-perceived speaking proficiency adds to the evidence that usage patterns matter, but the broader literature still does not justify treating streak length as a proxy for proficiency.

### Babbel

Babbel is a useful counterexample to pure pointsification. Its current product combines:

- structured courses;
- practical goals;
- progress tracking;
- streaks;
- speaking practice;
- vocabulary review using spaced repetition;
- themed real-world units.

Babbel explicitly encourages learners to define language goals and connects course units to practical objectives such as travel, work, and everyday situations.

**Transferable lesson:** A language app can make progress legible without turning the entire experience into a competitive game.

### Busuu / Memrise

These products reinforce the broader market pattern: structured learning paths, review, streaks, milestones, and practical content are more durable foundations than a pure leaderboard loop.

**Decision:** The proposed product should sit closer to **"real-world capability + narrative progression"** than to "language course + points."

---

## 6. Goal hierarchy options

### Option A — Many visible goals

- Streak
- Daily goal
- Current activity
- Quest
- Chapter
- Capability
- World completion
- Achievements

**Benefit:** Maximum transparency.

**Risk:** The learner experiences eight obligations rather than one journey.

**Decision:** Reject as the default UI.

### Option B — One dominant goal

Example:

> **Current Quest: Find out what Anna saw.**

Everything else is secondary.

**Benefit:** Very low cognitive load.

**Risk:** Long-term direction can disappear. Learners may not understand how today's task relates to their language development.

**Decision:** Strong candidate for the primary experience, but not enough by itself.

### Option C — One dominant goal + quiet supporting layers

Example:

> **Current Quest**  
> Find out what Anna saw.  
> 3/5 clues

Underneath:

> **You are becoming able to:**  
> Follow everyday conversations

And elsewhere:

> **Journey:** Frankfurt → Berlin → Munich

Streak remains a small habit indicator.

**Recommendation:** **Choose Option C.**

The architecture can contain many layers, but the learner should normally perceive:

1. **What am I doing now?**
2. **Why does it matter?**
3. **What am I becoming able to do?**

---

## 7. Recommended goal architecture

### Layer 1 — Action

The smallest unit.

> Listen and respond.

The action should always be connected to a communicative purpose.

### Layer 2 — Quest

A meaningful short arc.

> Find out what Anna saw.

A quest should require several language activities, not simply five arbitrary lessons.

### Layer 3 — Chapter / Journey

A set of quests that changes the learner's world.

> Frankfurt Mystery

Completion should reveal something: a new location, character, story branch, or capability.

### Layer 4 — Capability

The educational spine.

> Understand everyday conversations.

Capabilities should be expressed as real-world "can do" outcomes and supported by evidence.

### Layer 5 — Personal destination

The learner's own reason for learning.

> Travel independently in Germany.  
> Work in German.  
> Talk with my partner's family.  
> Reach conversational confidence.

This layer should be selectable and revisable.

### Habit layer — Streak

The streak is **not** a destination.

It is a lightweight mechanism for making practice easier to remember and easier to resume.

**Decision:** The product hierarchy should therefore be:

> **Personal purpose → capability → journey/chapter → quest → action**

with **streak running alongside the hierarchy as the habit mechanism**.

---

## 8. Main Quest / Side Quest / Free Explore

### Main Quest

The main quest should be the default route through the curriculum.

It provides:

- sequencing;
- appropriate difficulty;
- narrative momentum;
- a clear next action;
- guaranteed coverage of core capabilities.

### Side Quests

Side quests should not be "extra lessons."

They should be alternative reasons to use the same language:

- help a character;
- understand a cultural event;
- solve a small mystery;
- handle a practical situation;
- explore a topic of interest;
- practice a weak capability.

**Key rule:** Side quests should still produce language-learning evidence.

### Free Explore

Free exploration should let learners choose content without requiring them to understand the whole curriculum.

The system can quietly evaluate whether the chosen activity supports a capability and suggest it later.

**Recommendation:** Free exploration should be **bounded autonomy**: learners choose *where to go and what to care about*, while the system manages pedagogical sequencing and difficulty underneath.

---

## 9. Streak analysis

### Why streaks work

Streaks create:

- a concrete behavioral target;
- visible continuity;
- loss aversion;
- identity ("I am someone who practices");
- low decision cost;
- a reason to return today.

Duolingo's experiments provide unusually strong product evidence that streak mechanics can increase retention and usage.

Independent research also finds that highlighting intact streaks can increase subsequent engagement, while highlighting broken streaks can reduce it.

### Why streaks are dangerous

A streak can become the goal itself.

The learner may think:

> "I need to protect 200 days."

instead of:

> "I want to become able to understand German."

That is particularly dangerous when the minimum action required to preserve the streak becomes easier than meaningful learning.

Streak anxiety is also real. Duolingo's own research acknowledges that breaking a streak can be discouraging and that flexibility can improve longer-run return behavior.

### Recommendation

Keep the streak, but demote it.

- It should be visible.
- It should be emotionally positive.
- It should not determine access to meaningful content.
- It should be forgiving.
- It should never imply that missing a day erases learning.
- It should never compete with capability progress.

**Decision:** Streak = **habit infrastructure**, not long-term purpose.

---

## 10. Rewards and progression

Prefer rewards that have **semantic meaning**.

### Strong

- New story chapter
- New location
- New character relationship
- New kind of conversation
- Previously locked real-world situation
- Visible change in the world
- Demonstrated capability
- Access to more difficult content

### Useful but secondary

- Milestone celebrations
- Collections
- Achievements
- Cosmetic customization

### Weak as primary progression

- XP
- arbitrary points
- gems/currencies
- endless levels
- leaderboard position

XP can still be useful as an internal measurement, but it should not be the main explanation for why the learner progressed.

**Recommendation:** Use **unlockable meaning** rather than **accumulated numbers**.

The ideal feedback is:

> "You can now handle a café conversation, so the next part of the story is available."

not:

> "+500 XP. Level 12."

---

## 11. What should be visible vs system-level

### Visible

At any moment, show roughly:

**1. Current objective**
> Find out what Anna saw.

**2. Immediate progress**
> 3/5 clues

**3. Meaning**
> You're practicing following everyday conversations.

**4. Optional next choices**
> Continue the mystery  
> Explore a café conversation  
> Review yesterday's difficult phrases

**5. Habit signal**
> 34-day streak

### Mostly system-level

Hide or minimize:

- XP calculations;
- detailed mastery algorithms;
- spaced-repetition scheduling;
- internal skill weights;
- prerequisite graphs;
- hidden proficiency estimates;
- content optimization;
- reward economy;
- most achievements.

The learner should not need to operate the curriculum engine.

---

## 12. Risks of gamification

### 1. The proxy becomes the goal

If XP is easier to optimize than learning, learners optimize XP.

**Mitigation:** Reward demonstrated capability and meaningful content access.

### 2. Completionism crowds out learning

A learner may chase 100% completion of easy material.

**Mitigation:** Make progression depend on demonstrated competence, not completion alone.

### 3. Streak anxiety

Missing a day can feel like losing months of identity.

**Mitigation:** streak freezes, grace periods, recovery language, and no loss of capability progress.

### 4. Competition harms autonomy

Language-learning reviews report negative effects from competition for some learners.

**Mitigation:** Do not make leaderboards central. Prefer personal mastery and optional cooperation.

### 5. Too much choice creates paralysis

Open-world freedom without direction can be demotivating.

**Mitigation:** always provide a recommended next step.

### 6. Narrative becomes a distraction

A compelling story can cause learners to click through without processing language.

**Mitigation:** story progression must require meaningful comprehension/production.

### 7. False mastery

Unlocking a location can imply "you know German now."

**Mitigation:** capability claims must be narrow, evidence-based, and contextual.

### 8. Reward inflation

If everything produces a badge, nothing matters.

**Mitigation:** reserve major rewards for meaningful milestones.

### 9. Engagement mistaken for learning

DAU, streaks, sessions, and XP are product metrics—not language outcomes.

**Decision:** Every retention metric should be paired with at least one learning-quality metric.

---

## 13. How many simultaneous goals?

The research does not establish a universal numeric limit. The more defensible principle is **limited visible concurrency**.

A player can have many underlying goals, but only a few should demand attention.

**Recommendation:**

- **1 dominant current goal**
- **1 visible longer-term capability**
- **1 optional alternative**
- **1 quiet habit indicator**

Everything else can exist in the system without becoming a competing obligation.

This preserves the richness of a game while keeping the learner's cognitive interface simple.

---

## 14. Different learner motivations

A single hierarchy can serve different motivations if the learner can change what is foregrounded.

| Learner | Primary motivation | Best foreground |
|---|---|---|
| Casual | Consistency / enjoyment | Small quest + low-pressure streak |
| Highly motivated | Capability | Capability roadmap + harder challenges |
| Completionist | Collection / mastery | Optional completion layer |
| Explorer | Curiosity | Map + optional discoveries |
| Story-driven | Narrative | Main quest + characters |
| Optimizer | Efficiency | Capability targets + evidence |
| Practical learner | Real-world outcome | Situation-based capability |
| Conversational learner | Interaction | Conversation milestones |

**Recommendation:** Do not create eight separate progression systems. Create one underlying architecture and allow the learner to choose which dimension is emphasized.

---

## 15. Answers to the critical questions

1. **Primary long-term goal:** Genuine, personally relevant language capability.

2. **Streak vs story vs capability:** Capability should be primary; story is the motivational vehicle; streak is the habit mechanism.

3. **Return tomorrow:** An unfinished meaningful quest plus an easy, low-friction practice opportunity.

4. **Continue after one activity:** The activity should reveal the next step in a quest or unlock a meaningful consequence.

5. **Continue after a chapter:** A new capability, location, character relationship, or story problem becomes available.

6. **Continue after months:** The learner can see an accumulating set of real-world capabilities and a coherent journey toward their personal purpose.

7. **Narrative vs measurable vs capability:** Combine them, but give each a different job: narrative = meaning, measurable progress = orientation, capability = truth.

8. **What should unlock:** Prefer content, situations, locations, characters, and challenge levels; occasionally unlock capabilities as *demonstrated outcomes*, not arbitrary prizes.

9. **Should the next goal always be known:** The learner should always know the recommended next step, but not necessarily every future step.

10. **Optionality:** Enough to create agency; not enough to create a blank canvas.

11. **Main/side quests:** Main quests guarantee pedagogical progression; side quests provide relevance and autonomy; both should generate meaningful practice.

12. **Slow progress:** Show concrete "can do" moments, successful real-world tasks, before/after examples, and capability milestones.

13. **Prevent reward optimization:** Do not let arbitrary points determine major progression. Tie important unlocks to evidence of learning.

14. **Streak interaction:** Keep it independent from capability and story progression.

15. **Missed day:** Nothing important should be lost. Preserve capability progress; offer a calm re-entry point.

16. **Stuck learner:** Reduce difficulty, offer a targeted practice route, provide hints, and temporarily change the quest objective without making failure feel like a dead end.

17. **Strongest transferable game mechanisms:** Quest chains, meaningful unlocks, clear next objectives, bounded autonomy, world consequences, capability gates, and multiple time horizons.

18. **Do not copy:** grind, XP-first progression, compulsory daily chores, aggressive loss aversion, central leaderboards, currencies, FOMO, or hundreds of simultaneous objectives.

19. **Smallest MVP:** One main journey, one active quest, one capability statement, activity-level objectives, meaningful unlocks, optional side exploration, and a lightweight forgiving streak.

---

## 16. Recommended product concept

The current concept is directionally right, but the hierarchy should be simplified.

Instead of showing:

> 🔥 Streak  
> 🎯 Daily goal  
> 🧩 Quest  
> 🗺️ Chapter  
> 🧠 Capability  
> 🏆 Achievements  
> 📈 Skill progress

the learner's primary experience should be closer to:

> **YOUR JOURNEY**
>
> **Current quest**  
> Find out what Anna saw.  
> 3/5 clues
>
> **Why this matters**  
> Practice understanding everyday conversations.
>
> **Next capability**  
> Follow a short everyday conversation and identify the important details.
>
> **After this**  
> The next part of Frankfurt becomes available.
>
> *34-day streak*

The important design shift is that **the quest is the visible goal, while capability is the meaning behind it**.

---

## 17. MVP goal system

The smallest credible system to test is:

### 1. One main journey

A sequence of story chapters representing the curriculum.

### 2. One active quest

A short, meaningful objective composed of several learning activities.

### 3. One capability statement

Every quest explicitly states the language capability it is building or testing.

### 4. Capability-gated progression

Major story/world unlocks require evidence that the learner can perform the relevant capability.

### 5. Optional side quests

A small number of alternatives connected to interests or weak skills.

### 6. Free exploration

Allow learners to browse the world, but always provide a recommended path.

### 7. Lightweight streak

One practice action can maintain the streak. Missing a day does not remove story or capability progress.

### 8. No XP economy in the first test

Do not add gems, currencies, leagues, or a large achievement system until there is evidence they solve a real problem.

---

## 18. What should be measured in the MVP

Do not evaluate the goal system only on retention.

Measure four layers:

### Behavioral

- return rate;
- sessions/week;
- quest continuation;
- voluntary side-quest usage.

### Learning

- capability assessment;
- retention after delay;
- transfer to novel conversations;
- comprehension/production performance.

### Motivational

- perceived progress;
- sense of competence;
- autonomy;
- perceived meaningfulness;
- "I know why I'm doing this."

### Failure modes

- streak anxiety;
- goal overload;
- confusion about what to do next;
- reward chasing;
- skipping practice to advance the story;
- abandoning after getting stuck.

**Decision:** A goal mechanic is successful only if it improves **continued meaningful practice**, not merely app opens.

---

## 19. Open questions

1. How should capability be assessed reliably enough to gate story progression without making the app feel like a test?
2. How often should a capability be revisited to account for forgetting?
3. Should story unlocks ever be delayed by weak skills, or should the narrative continue while practice branches adapt?
4. How much learner choice is optimal before pedagogical sequencing deteriorates?
5. Should learners choose a personal long-term goal at onboarding, or discover it through use?
6. Can a single narrative support very different proficiency levels without becoming artificial?
7. How should the product represent multidimensional capability: listening, speaking, interaction, reading, writing, pragmatic skill?
8. What is the best recovery experience after a learner disappears for weeks?
9. How should side quests avoid becoming a source of endless distraction?
10. Can world changes provide enough reward without introducing currencies and XP?
11. Which capabilities are motivating enough to serve as major milestones?
12. How should the product communicate uncertainty around capability claims?
13. Does narrative progression increase actual retention and learning compared with an equivalent non-narrative capability path?
14. Does capability-gated progression improve perceived progress compared with completion-based unlocking?
15. Which learner motivations are best served by the same underlying architecture versus different presentations?

---

## 20. Final recommendation

**Recommendation:** Build a **capability-driven guided open world**.

The core loop should be:

> **Meaningful purpose → current quest → language practice → demonstrated capability → meaningful unlock → next quest**

with:

> **Streak = habit support**

and:

> **Side quests + exploration = autonomy and curiosity**

The strongest version of the concept is therefore not "Duolingo with a map" and not "an RPG that happens to contain language exercises."

It is:

> **A language journey in which the world advances because the learner becomes more capable in the language.**

That distinction is the central product opportunity.

The research supports using game design to create autonomy, competence, curiosity, feedback, and continuity. It does **not** support assuming that points, badges, streaks, or competition automatically create durable learning. The product should make the learner's real achievement—the ability to do more in the language—the thing that ultimately unlocks the world.

### Evidence base

- Zhang & Hasim (2023), *Gamification in EFL/ESL instruction: A systematic review of empirical research*, Frontiers in Psychology.
- Khaldi et al. / systematic review (2023), *The Effectiveness of Gamified Tools for Foreign Language Learning*, Behavioral Sciences.
- Shortt et al. (2023), *Gamification in mobile-assisted language learning: A systematic review of Duolingo literature*.
- Sailer et al. (2017), *How gamification motivates: An experimental study of the effects of specific game design elements on psychological need satisfaction*.
- Ryan, Rigby & Przybylski (2006), *The motivational pull of video games: A self-determination theory approach*.
- Przybylski, Rigby & Ryan (2010), *A Motivational Model of Video Game Engagement*.
- Sheldon & Filak (2008), *Manipulating autonomy, competence, and relatedness support in a game-learning context*.
- Council of Europe, CEFR Companion Volume and action-oriented "can do" descriptors.
- Duolingo product experiments on streaks, retention, and re-engagement.
- Yuen & Schlote (2024), *Learner Experiences of Mobile Apps and Artificial Intelligence to Support Additional Language Learning in Education*.
- Recent 2026 systematic review of competitive digital gamification in adult ESL vocabulary learning.

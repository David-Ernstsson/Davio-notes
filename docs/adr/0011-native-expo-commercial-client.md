# A native Expo app is the commercial client

Owner-decided 2026-11-16. **Native is decided, not an open choice.** The device trial in [#284](https://github.com/David-Ernstsson/Davio/issues/284) does not choose between native and web. It only checks the three conditions under **Reversal** below, and the decision stands unless one of them is met. Stage 2 of that trial was parked on 2026-11-17 until it is needed; it must still finish before ADR-0008's implementation go. Until then, all client work assumes native. Supersedes [ADR-0007](0007-phone-web-commercial-client.md). The commercial learner client is one React Native app built with Expo (managed workflow, EAS Build for store builds, EAS Update for over-the-air updates). V1 launches it on Android through Google Play, with Swedish and German together ([V1 foundation](../product-experience/v1-product-foundation.md#audience-range-and-claims)). It is not a web app wrapped for Play. A desk, if it happens, is still the phone layout stretched ([ADR-0003](0003-mobile-first-phone.md)).

**Native from the start, because native is the destination.** [ADR-0001](0001-responsive-web-v1.md) put a native app after the Core loop, and the owner confirms it is firm. ADR-0007 rejected native because the flows would be built twice. [ADR-0008](0008-commercial-implementation-gate.md) has since made production a rewrite of the approved journey, so a wrapped web V1 followed by native would write the production client twice and move installed Learners between them. Building it once in Expo is ADR-0007's own argument, applied now. That holds only while native is certain, and the owner's three reasons are not equally strong:

- **Feel on mid-range Android.** Plausible, not yet measured. Text, pictures and audio clips are a WebView's easy case. #284 measures it.
- **iOS after Android.** A TWA has no iOS route. A Capacitor app with bundled files, offline use and native billing can usually pass Apple's review, so this favours native without requiring it.
- **The later speaking features.** Server-side pronunciation scoring and conversation work from a WebView with microphone access. On-device models and low-latency audio favour native, and need custom native modules in Expo as well. These are "later, if they earn a place" in the [V1 foundation](../product-experience/v1-product-foundation.md#v1-ships).

**The cost is checking, not writing.** With AI writing the code, writing either client is cheap. Checking it is the scarce resource, because the owner reviews no app code and cloud sessions cannot run an Android emulator. A wrapped web app runs the same Chromium engine that Playwright tests. Expo's web render is a different renderer from the one Learners use: it cannot show native fonts and text scaling, the keyboard, screen-edge insets, gestures, back navigation, TalkBack or audio, and billing, native sign-in and file storage have no web version. Native therefore moves checking onto devices. So:

- Agents use Expo's web render for layout and flow logic only. Screen approval under ADR-0008's kit process is confirmed on a phone.
- Automated device checks (scripted flows on a built APK in an Android emulator in CI) run before milestone 1 of [#148](https://github.com/David-Ernstsson/Davio/issues/148), not later.
- The owner checks a build on an Android phone per milestone and for any PR that touches audio, billing, offline, or navigation; such a PR waits for that check before it merges.
- The web build is for testing only. No public web version.

**Reversal.** Return to a phone-first web client wrapped with Capacitor (ADR-0007's client, Capacitor's packaging) if #284 shows any of:

- agents cannot check the core flows on an Android build without the owner on the phone more often than per milestone, because automated device checks do not work in CI;
- an approved kit screen cannot be built natively to match its still, at the largest system text size and with TalkBack, without reopening the kit;
- a V1 job (billing, offline audio, over-the-air updates, sign-in) fails on the device in a way no maintained Expo module solves.

**Decided before the implementation go, in #284:** the `com.davio` question, before the trial's first upload to Play, because the package name and signing key are fixed at that point; the device-check approach; the billing route and the list of allowed native modules; and whether the kit's reference moves from CSS stills to native renders.

**Superseded in part by [ADR-0012](0012-one-learner-app.md), 19 November 2026:** the Davio Test app is not throwaway and there is no separate production rewrite; it is the one learner app and becomes the product. The two paragraphs below are kept as the record.

**The Davio Test app is where screens are checked.** The trial's Expo app (`src/app`, installed on the owner's phone as Davio Test) is the device build for checking learner screens. It is throwaway only in ADR-0008's sense: production rewrites the approved journey, so its code does not carry over. Approved screens are ported into it so they can be checked on a phone. A part is left out only while something it needs is not built yet, such as the model judge, sign-in or Plus ([#362](https://github.com/David-Ernstsson/Davio/issues/362)).

**What stays.** The journeys and screen records remain the spec. ADR-0008's gate holds: no production code before the kit, then the owner's go. [ADR-0010](0010-learner-state-authority.md) is unchanged. The web prototypes in `src/web` stay a design bench and get no production investment. The production app lives in `src/app`, a workspace that reuses `src/packages`.

**Considered Options:** keep ADR-0007 and ship the web client wrapped with Capacitor or TWA, then rebuild natively after V1. Not chosen: two production clients and a migration of installed Learners, while there is no deadline and no production client to protect. Its real strength, that agents test the engine that ships, is why it is the reversal target. Native only if a trigger appears: not chosen, because the owner treats native as firm.

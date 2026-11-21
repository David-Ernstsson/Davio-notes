# One learner app, and it is the product

Owner-decided 2026-11-19. The learner journey is built and kept in one place: the Expo app (`src/app` since #383, before that `prototypes/expo-trial/expo-app`; installed as Davio Test). There is no second playable beside it, and it is not thrown away: it becomes the commercial client of [ADR-0011](0011-native-expo-commercial-client.md). This replaces two parts of earlier decisions: ADR-0011's "throwaway" Davio Test app with a later production app written fresh in `src/app`, and [ADR-0008](0008-commercial-implementation-gate.md)'s "implementation is a rewrite of the approved journey". Native, Android first, the kit and the owner's approval of each screen all stand.

**Why.** On 19 November 2026 the journey existed twice: the web playable (`prototypes/explore-hall`, plain HTML and JavaScript, the hosted demo) and the Expo app. The web playable ran ahead and the Expo app followed by porting ([#362](https://github.com/David-Ernstsson/Davio/issues/362)), so every approved change was written twice and the two drifted. The planned production rewrite would have made it three times. The web playable existed for three things, and the Expo app gives all three from its own code through its web render: agents check flows and layout in a browser with Playwright, a link can be shared, and a change shows in seconds without an APK. A second implementation buys nothing more.

**How the app is checked.** Three layers, each for what it can see:

- Unit tests on `src/packages` and the app's own modules: rules and logic.
- Playwright on the app's web render: flows and layout, by agents, on every change. The web render is not the renderer Learners use (ADR-0011, "The cost is checking"), so it never approves a screen.
- The Android build, on an emulator (Maestro) and on the owner's phone: fonts and text size, the keyboard, screen edges, Back, audio, TalkBack. Screen approval is confirmed here, as ADR-0011 says.

The web render is for checking and for the shared demo link only. There is still no public web version.

**Mockups are stills.** `src/web` stays the design bench where a screen's look is approved as a still, with the kit. A still is not made playable. Once approved, a screen is built once, in the app.

**From this decision on:**

- New learner behaviour is built in the Expo app only. The web playable gets no new features; a fix that keeps it working until it is archived is allowed.
- The web playable is archived once the app has what it has and its checks and the demo link have moved to the app's web render. The older leftovers (`prototype/`, `src/Davio.Web`, `publish/`, the Capacitor twin in `prototypes/expo-trial/web-app`) are removed, unless #284's reversal check still needs the twin.
- The app moves to `src/app` when that work is done, and keeps its history.

**Open.** What ADR-0008's go gates now that the app's code is no longer a rewrite: the owner has not said. Until they do, the go is still required before anything is prepared for release (the `com.davio` package, Play, billing, sign-in). The model judge's small server stays as it is; the app calls it.

**Considered Options:** keep both playables, the web one for agents and the Expo one for the phone: rejected, it is the double writing described above. Keep only the web playable and wrap it for Android: that is ADR-0011's reversal target, and nothing here triggers it. Keep the Expo app throwaway and write production fresh: rejected, a third writing of screens the owner has already approved on a phone, with no gain the owner asked for.

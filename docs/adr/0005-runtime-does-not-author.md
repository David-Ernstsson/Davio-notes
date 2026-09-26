# Runtime does not author Target-language content

ADR-0002: learner-facing German is owned, pipeline-quality text. This ADR is the companion boundary: **where** that text may be created.

The app may **compose** a Practice Activity at runtime from already-approved Steps, Interactions, and Items (Learner state, Skill need, Destination, exposure, retrieval). It must not send Learner state to a model and expose new Target-language sentences. Story Chapters and Excursions are authored in the content pipeline; retries vary approved Items around a fixed narrative, they do not regenerate the scene.

The rejected alternative is runtime LLM authoring for personalization. It bypasses QA, provenance, and gym-copy, and would make every session an unreviewed draft.

**Consequence:** composition constraints (what may be mixed, what must stay together) are part of quality, not a later optimisation. A legal mix of approved Items can still be a bad sitting if the engine did not encode those constraints.

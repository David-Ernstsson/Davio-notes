# How a commercial phone app keeps its screens as one product

## The one-paragraph answer

A new picture for every screen will not become a consistent app. Apple’s Human Interface Guidelines say that once an element has an appearance and a behaviour, that same appearance and behaviour is what you use everywhere, and that familiar components are how people learn the product. Material’s design tokens exist so colour, type, and measurement have one source, and a change propagates instead of being redrawn. GOV.UK’s rule is to start from what already exists and to add a component only when it does not duplicate one. Basecamp’s Shape Up says a high-fidelity drawing is the wrong tool while you are still deciding the elements, because it freezes incidental layout. Davio already decided the elements of Explore, play, and the close. The working process is therefore a small kit of those parts, with one visual surface, and every later screen assembled from the kit. A generated still is not that kit. It invents the parts again.

## What we have been doing

The route written on 2026-09-21 put approved stills first, then a visual territory, then tokens and a written spec ([ADR-0008](../adr/0008-commercial-implementation-gate.md) as first locked). The prototype skill told an agent to generate a phone picture. Each generation chooses type, spacing, colour, and chrome on its own. The Explore structure, the close, and the tab set already exist as prose ([Swedish Explore](../product-experience/swedish-explore-screen-decision.md), [Activity close](../product-experience/swedish-activity-close-decision.md), [First tryable set](../product-experience/v1-product-foundation.md)). Prose does not constrain a picture. That is why every still arrived as a different product.

## What the sources actually require

Apple: “Keep visuals and interactions consistent. Once you establish a behavior or appearance for an element, apply it throughout your design.” Components exist “to give people a familiar and consistent experience.” ([Design principles](https://developer.apple.com/design/human-interface-guidelines/design-principles), [Components](https://developer.apple.com/design/human-interface-guidelines/components))

Material: tokens are “the building blocks of all UI elements.” Use them “instead of hardcoded values.” They are “a single source of truth,” and “style updates propagate consistently through an entire product.” ([Design tokens](https://m3.material.io/foundations/design-tokens/overview))

GOV.UK: “Start with what exists. Reuse as much as possible.” A new component has to be unique, and before it is published it has to be consistent, meaning it “reuses existing styles and components.” ([Community principles](https://design-system.service.gov.uk/community/community-principles/), [Contribution criteria](https://design-system.service.gov.uk/community/contribution-criteria/))

Shape Up: wireframes are too concrete and words are too abstract while the elements are still being found. Fat-marker sketches exist so a team does not “jump ahead to detail” before the elements are settled. ([Principles of Shaping](https://basecamp.com/shapeup/1.1-chapter-02), [Find the Elements](https://basecamp.com/shapeup/1.3-chapter-04))

## What we should do

The elements for this journey are already settled. The next artifact is a kit: the header, the row, the one action, the tab bar, play’s X and ticks, and the close’s two controls, each built once, in one surface. A screen is those parts plus its content and states. A part that does not exist yet is a decision to add it to the kit, once, and then every screen can use it. The founder approves the kit, then approves a screen because the job and the content are right and the chrome is the same chrome.

Tokens are the values inside that kit, not a document written after a pile of unrelated pictures. A full specification of every later screen is still the wrong thickness. The kit stays small.

This contradicts the stills-first order in the original ADR-0008. That order is what produced a new picture every time. The kit replaces it.

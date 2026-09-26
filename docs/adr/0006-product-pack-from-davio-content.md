# Product terms live in Davio-content

Two repositories stay. Learner-facing product types are defined in David-Ernstsson/Davio-content; this app loads that pack through an AGENTS pointer and a vendored pin (`docs/product-pack/`). Brand, business, and runtime stay here. Davio-content does not import this repo.

**Considered Options:** merge the repos; import Davio into Davio-content; restate Activity, Item, or Edition here; submodule the whole content repo. Rejected so generator and learner app stay different domains and app agents load product terms only.

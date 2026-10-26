# `authorizeSandSecureFillDomain`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: browser-computer](../../components/browser-computer/README.en.md) · [Index](../../README.en.md)

**Primary source:** [host-main.cjs:766673-766716](../../../reference/runtime/host-main.cjs#L766673-L766716). Static analysis of the original snapshot; names preserved from the bundle.

## Contract

`authorizeSandSecureFillDomain(metadata,target,options={})` validates the destination of a secure fill and returns a decision with a frame classification. This function neither receives nor exposes the secret value to the model.

## Algorithm

Parses the frame URL and top-level page URL as HTTPS sites. Classifies the frame as top, same_origin, or cross_origin. If either site is invalid, it rejects with the scheme rule. Computes the registrable domain or top-level hostname. The anySite exception requires an enabled option and a compatible value type. Without the exception, at least one metadata domain must match the top-level site; otherwise, it rejects with top_origin.

## Important nuance

Cross-origin is a classification; it does not cause automatic rejection in this function. Card rules are separate and authorize the top-level/frame URLs. Field types also pass through `sandSecureFillFieldAccepts`: contentEditable is rejected, a password requires a password input, and a textarea is accepted only for values originating from the vault.

## Engineering implication

Do not simplify the rule to “every iframe is prohibited” or “any HTTPS site is allowed.” The policy depends on metadata, value type, the top-level page, and gates. Actual execution and secret storage belong to the secure-fill ports outside this helper.

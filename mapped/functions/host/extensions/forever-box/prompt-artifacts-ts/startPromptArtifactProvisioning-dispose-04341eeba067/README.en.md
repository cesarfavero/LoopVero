# `startPromptArtifactProvisioning/dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `host/extensions/forever-box/prompt-artifacts.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/prompt-artifacts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680845-680849](../../../../../../../reference/runtime/host-main.cjs#L680845-L680849) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680845-680849](../../../../../../../reference/runtime/host-main.cjs#L680845-L680849) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:680845

Calls written directly in this body: `clearRetry`, `unsubscribe`.

Assignment or increment targets: `disposed`.

SHA-256 of the source span: `edd0a41a0f7f92ac5365b2935d53a5214cd3e4886f9f6d5e37281ad4cb565629`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

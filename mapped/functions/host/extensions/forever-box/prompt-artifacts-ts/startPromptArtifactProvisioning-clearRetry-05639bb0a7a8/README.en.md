# `startPromptArtifactProvisioning/clearRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `host/extensions/forever-box/prompt-artifacts.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/prompt-artifacts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680799-680802](../../../../../../../reference/runtime/host-main.cjs#L680799-L680802) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680799-680802](../../../../../../../reference/runtime/host-main.cjs#L680799-L680802) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:680799

Calls written directly in this body: `pendingRetry.dispose`.

Assignment or increment targets: `pendingRetry`.

SHA-256 of the source span: `3c767e3512b201377fd8e9399ad99bc1c70ee77fe544a5f6601a123eeaecb9a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

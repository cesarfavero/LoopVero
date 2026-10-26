# `shouldUseSandSelfSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529682-529687](../../../../../../reference/runtime/sand-eval-runner.cjs#L529682-L529687) | `FunctionDeclaration` | no | `modelId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529682-529687](../../../../../../reference/runtime/sand-eval-runner.cjs#L529682-L529687) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529682

Calls written directly in this body: `DEPRECATED_CURSOR_GROK_4_5_MODELS.has`, `model.split`, `model.startsWith`, `modelId.split`, `xaiExternalProviderModel.startsWith`.

SHA-256 of the source span: `4d302573de1ae18342fcf11619dd0488b3c3f5b2e8c848e88bda996afa7e7b34`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

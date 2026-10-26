# `isSandRepetitionTolerantToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/loop-detection-policy.ts` · [Module README](../../../../../modules/core/runner/loop-detection-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483283-483289](../../../../../../reference/runtime/sand-eval-runner.cjs#L483283-L483289) | `FunctionDeclaration` | no | `toolName, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483283-483289](../../../../../../reference/runtime/sand-eval-runner.cjs#L483283-L483289) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:483283

Calls written directly in this body: `REPETITION_TOLERANT_TOOL_NAMES.has`, `actionOf`, `isTolerantComputerAction`, `resolveEffectiveToolCall`.

SHA-256 of the source span: `ad450d9b681f7e2a2ec10272e75997d76e089a67d5aced9686afff0ee79478e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

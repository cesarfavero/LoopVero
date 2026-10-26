# `createTurnObservation/cancelledAwaitOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-observation.ts` · [Module README](../../../../../modules/core/runner/turn-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588709-588711](../../../../../../reference/runtime/sand-eval-runner.cjs#L588709-L588711) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588709-588711](../../../../../../reference/runtime/sand-eval-runner.cjs#L588709-L588711) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588709

Calls written directly in this body: `host.isActiveRunInterrupted`.

SHA-256 of the source span: `55a7704e960a7facc948ee18badaeb66de283820f8f50f055c52df8a3fedcc61`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

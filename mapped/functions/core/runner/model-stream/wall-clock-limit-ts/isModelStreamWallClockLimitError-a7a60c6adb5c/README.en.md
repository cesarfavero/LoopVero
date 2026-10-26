# `isModelStreamWallClockLimitError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/model-stream/wall-clock-limit.ts` · [Module README](../../../../../../modules/core/runner/model-stream/wall-clock-limit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586666-586676](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586666-L586676) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586666-586676](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586666-L586676) | 1 | 1 | 0 | 2 | 0 | 0 |

### evaluation:586666

Calls written directly in this body: `new Set`, `seen.add`, `seen.has`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `40f719cb101b428852a8241799f2c79c4888a7698ffb332b37b7eab381c1afbf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

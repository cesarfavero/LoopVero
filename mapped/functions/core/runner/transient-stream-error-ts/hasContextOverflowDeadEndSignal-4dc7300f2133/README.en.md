# `hasContextOverflowDeadEndSignal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736302-736317](../../../../../../reference/runtime/host-main.cjs#L736302-L736317) | `FunctionDeclaration` | no | `error64, seen` |
| [evaluation:589994-590009](../../../../../../reference/runtime/sand-eval-runner.cjs#L589994-L590009) | `FunctionDeclaration` | no | `error63, seen` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736302-736317](../../../../../../reference/runtime/host-main.cjs#L736302-L736317) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:589994-590009](../../../../../../reference/runtime/sand-eval-runner.cjs#L589994-L590009) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:736302

Calls written directly in this body: `Array.isArray`, `fields3.errors.some`, `hasContextOverflowDeadEndSignal`, `isInputTokenLimitOverflowError`, `isSummarizationRetriesExhaustedError`, `seen.add`, `seen.has`.

SHA-256 of the source span: `b1d9ccd1f7ac3297a164764258b7525ef00db74681b06a1f2190b8765dc2a8b5`.

### evaluation:589994

Calls written directly in this body: `Array.isArray`, `fields3.errors.some`, `hasContextOverflowDeadEndSignal`, `isInputTokenLimitOverflowError`, `isSummarizationRetriesExhaustedError`, `seen.add`, `seen.has`.

SHA-256 of the source span: `2dbb3a67873ce52db50a953feebb4f1312b088f23eed8ab805afd42b3ce5022e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `serverRetryAfterMsFromError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736417-736419](../../../../../../reference/runtime/host-main.cjs#L736417-L736419) | `FunctionDeclaration` | no | `error64` |
| [evaluation:590084-590086](../../../../../../reference/runtime/sand-eval-runner.cjs#L590084-L590086) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736417-736419](../../../../../../reference/runtime/host-main.cjs#L736417-L736419) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:590084-590086](../../../../../../reference/runtime/sand-eval-runner.cjs#L590084-L590086) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736417

Calls written directly in this body: `findServerRetryAfterMs`, `new Set`.

SHA-256 of the source span: `64a05f846dcb82689350cbfb9a78da3daaf17a6ad63029c5ed4529ddd636acff`.

### evaluation:590084

Calls written directly in this body: `findServerRetryAfterMs`, `new Set`.

SHA-256 of the source span: `83b4ceaad5f68b904f10d7adb1c260ec45f8de52bd0d94762d29e71c59b30134`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

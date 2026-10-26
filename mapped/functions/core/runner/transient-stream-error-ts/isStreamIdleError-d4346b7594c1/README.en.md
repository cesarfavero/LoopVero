# `isStreamIdleError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736409-736414](../../../../../../reference/runtime/host-main.cjs#L736409-L736414) | `FunctionDeclaration` | no | `error64` |
| [evaluation:590047-590052](../../../../../../reference/runtime/sand-eval-runner.cjs#L590047-L590052) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736409-736414](../../../../../../reference/runtime/host-main.cjs#L736409-L736414) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:590047-590052](../../../../../../reference/runtime/sand-eval-runner.cjs#L590047-L590052) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:736409

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `5daf2979875090d645ec34bf4f2af9550bf70ba60f121b88b4e3953dba654658`.

### evaluation:590047

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `3edf7cf0ef622b5ace6fdd0988e9b4d087a775d1232422f735995eb947800a51`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

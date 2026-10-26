# `isFirstTokenStallError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736394-736399](../../../../../../reference/runtime/host-main.cjs#L736394-L736399) | `FunctionDeclaration` | no | `error64` |
| [evaluation:590032-590037](../../../../../../reference/runtime/sand-eval-runner.cjs#L590032-L590037) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736394-736399](../../../../../../reference/runtime/host-main.cjs#L736394-L736399) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:590032-590037](../../../../../../reference/runtime/sand-eval-runner.cjs#L590032-L590037) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:736394

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `3396b888e9cfb98fa28fa1925b8c2cfde21e9298664936e441cb00d5af8ab568`.

### evaluation:590032

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `06493c6d876cc5545245ae589335ddc6ca1046bb72780d282183d279423f79be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

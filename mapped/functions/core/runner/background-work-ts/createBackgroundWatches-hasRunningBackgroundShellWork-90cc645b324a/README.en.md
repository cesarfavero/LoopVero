# `createBackgroundWatches/hasRunningBackgroundShellWork`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490676-490676](../../../../../../reference/runtime/sand-eval-runner.cjs#L490676-L490676) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490676-490676](../../../../../../reference/runtime/sand-eval-runner.cjs#L490676-L490676) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:490676 uses an implicit arrow-function return.

### evaluation:490676

Calls written directly in this body: `shellRegistry.hasRunningWork`.

SHA-256 of the source span: `7858d7113205eb2354ee5c197ace05ac80d2ba3b3caca0a235debcba6bf8a5be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

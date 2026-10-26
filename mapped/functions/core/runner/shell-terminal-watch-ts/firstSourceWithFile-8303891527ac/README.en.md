# `firstSourceWithFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/shell-terminal-watch.ts` · [Module README](../../../../../modules/core/runner/shell-terminal-watch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533354-533366](../../../../../../reference/runtime/sand-eval-runner.cjs#L533354-L533366) | `FunctionDeclaration` | yes | `sources` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533354-533366](../../../../../../reference/runtime/sand-eval-runner.cjs#L533354-L533366) | 2 | 1 | 1 | 2 | 1 | 1 |

### evaluation:533354

Calls written directly in this body: `source`.

Assignment or increment targets: `failure3`.

Explicit throw targets: `failure3.error`.

SHA-256 of the source span: `84ca5840c2d11be67f3c23f6100cf9e1cb4292ad1a9e5b11da3807581546bf65`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

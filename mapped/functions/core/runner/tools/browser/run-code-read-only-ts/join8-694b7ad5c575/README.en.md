# `join8`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:522505-522512](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522505-L522512) | `FunctionDeclaration` | no | `a, b2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:522505-522512](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522505-L522512) | 5 | 0 | 0 | 6 | 0 | 0 |

### evaluation:522505

Calls written directly in this body: `isDataLike`.

SHA-256 of the source span: `b5273d69436443627d4aea075e653c4b06e033077ced4592882a22c63a94173f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

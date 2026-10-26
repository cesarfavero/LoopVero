# `normalizeCardSpaces`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/card-text.ts` · [Module README](../../../../../modules/shared/transcript/card-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706896-706898](../../../../../../reference/runtime/host-main.cjs#L706896-L706898) | `FunctionDeclaration` | no | `text3` |
| [evaluation:480993-480995](../../../../../../reference/runtime/sand-eval-runner.cjs#L480993-L480995) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706896-706898](../../../../../../reference/runtime/host-main.cjs#L706896-L706898) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480993-480995](../../../../../../reference/runtime/sand-eval-runner.cjs#L480993-L480995) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706896

Calls written directly in this body: `text3.replace`.

SHA-256 of the source span: `c7e66656107d2362f1ac6f1eadca884e7baf8f77a2952df6417caa802bfb0e2e`.

### evaluation:480993

Calls written directly in this body: `text3.replace`.

SHA-256 of the source span: `c7e66656107d2362f1ac6f1eadca884e7baf8f77a2952df6417caa802bfb0e2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

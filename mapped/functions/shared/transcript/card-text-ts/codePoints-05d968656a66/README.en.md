# `codePoints`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/card-text.ts` · [Module README](../../../../../modules/shared/transcript/card-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706889-706895](../../../../../../reference/runtime/host-main.cjs#L706889-L706895) | `FunctionDeclaration` | no | `text3, pattern` |
| [evaluation:480986-480992](../../../../../../reference/runtime/sand-eval-runner.cjs#L480986-L480992) | `FunctionDeclaration` | no | `text3, pattern` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706889-706895](../../../../../../reference/runtime/host-main.cjs#L706889-L706895) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480986-480992](../../../../../../reference/runtime/sand-eval-runner.cjs#L480986-L480992) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706889

Calls written directly in this body: `Array.from`, `new Set`, `text3.matchAll`.

SHA-256 of the source span: `e093ce84de9d4d6718676765490ee2d36f93e0f3a78ac21cc35b4e2caa38f5fd`.

### evaluation:480986

Calls written directly in this body: `Array.from`, `new Set`, `text3.matchAll`.

SHA-256 of the source span: `e093ce84de9d4d6718676765490ee2d36f93e0f3a78ac21cc35b4e2caa38f5fd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

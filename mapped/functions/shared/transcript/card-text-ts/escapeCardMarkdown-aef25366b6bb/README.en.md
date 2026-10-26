# `escapeCardMarkdown`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/card-text.ts` · [Module README](../../../../../modules/shared/transcript/card-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706935-706937](../../../../../../reference/runtime/host-main.cjs#L706935-L706937) | `FunctionDeclaration` | no | `text3` |
| [evaluation:481032-481034](../../../../../../reference/runtime/sand-eval-runner.cjs#L481032-L481034) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706935-706937](../../../../../../reference/runtime/host-main.cjs#L706935-L706937) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481032-481034](../../../../../../reference/runtime/sand-eval-runner.cjs#L481032-L481034) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706935

Calls written directly in this body: `text3.replace`.

SHA-256 of the source span: `9f445a359efc9156d892a9163d59a72cd97f433db60cbf45fbd955a0395c4971`.

### evaluation:481032

Calls written directly in this body: `text3.replace`.

SHA-256 of the source span: `9f445a359efc9156d892a9163d59a72cd97f433db60cbf45fbd955a0395c4971`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

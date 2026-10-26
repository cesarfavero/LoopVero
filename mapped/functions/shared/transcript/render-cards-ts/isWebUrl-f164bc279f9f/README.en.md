# `isWebUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707811-707815](../../../../../../reference/runtime/host-main.cjs#L707811-L707815) | `FunctionDeclaration` | no | `value` |
| [evaluation:564298-564302](../../../../../../reference/runtime/sand-eval-runner.cjs#L564298-L564302) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707811-707815](../../../../../../reference/runtime/host-main.cjs#L707811-L707815) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:564298-564302](../../../../../../reference/runtime/sand-eval-runner.cjs#L564298-L564302) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:707811

Calls written directly in this body: `URL.canParse`, `new URL`.

SHA-256 of the source span: `fc81cb667aa4942e3ad5ee4e41aafba3d74a35bc11ff4dd52945239ee5fe9f84`.

### evaluation:564298

Calls written directly in this body: `URL.canParse`, `new URL`.

SHA-256 of the source span: `fc81cb667aa4942e3ad5ee4e41aafba3d74a35bc11ff4dd52945239ee5fe9f84`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

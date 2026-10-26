# `mailboxDisplayNameShapeError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-display-name.ts` · [Module README](../../../../../modules/core/email/email-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715809-715823](../../../../../../reference/runtime/host-main.cjs#L715809-L715823) | `FunctionDeclaration` | no | `name18` |
| [evaluation:527478-527492](../../../../../../reference/runtime/sand-eval-runner.cjs#L527478-L527492) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715809-715823](../../../../../../reference/runtime/host-main.cjs#L715809-L715823) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:527478-527492](../../../../../../reference/runtime/sand-eval-runner.cjs#L527478-L527492) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:715809

Calls written directly in this body: `.test`, `/[<>]/.test`, `CONTROL_OR_DEL.test`, `ENCODED_WORD.test`, `new RegExp`.

SHA-256 of the source span: `da5d8cf2203ee5e1e4bcb9d6dcbc35ca664337d47754a5651e104221821bb74e`.

### evaluation:527478

Calls written directly in this body: `.test`, `/[<>]/.test`, `CONTROL_OR_DEL.test`, `ENCODED_WORD.test`, `new RegExp`.

SHA-256 of the source span: `da5d8cf2203ee5e1e4bcb9d6dcbc35ca664337d47754a5651e104221821bb74e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

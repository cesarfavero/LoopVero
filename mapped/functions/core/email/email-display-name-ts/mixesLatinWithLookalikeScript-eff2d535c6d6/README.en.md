# `mixesLatinWithLookalikeScript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-display-name.ts` · [Module README](../../../../../modules/core/email/email-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715897-715899](../../../../../../reference/runtime/host-main.cjs#L715897-L715899) | `FunctionDeclaration` | no | `value` |
| [evaluation:527566-527568](../../../../../../reference/runtime/sand-eval-runner.cjs#L527566-L527568) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715897-715899](../../../../../../reference/runtime/host-main.cjs#L715897-L715899) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527566-527568](../../../../../../reference/runtime/sand-eval-runner.cjs#L527566-L527568) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:715897

Calls written directly in this body: `HAS_CYRILLIC_LETTER.test`, `HAS_GREEK_LETTER.test`, `HAS_LATIN_LETTER.test`.

SHA-256 of the source span: `b59aa9426346bbd43cf2a956392a8fd48be4a3cbcceae5a95f2240f893897b8a`.

### evaluation:527566

Calls written directly in this body: `HAS_CYRILLIC_LETTER.test`, `HAS_GREEK_LETTER.test`, `HAS_LATIN_LETTER.test`.

SHA-256 of the source span: `b59aa9426346bbd43cf2a956392a8fd48be4a3cbcceae5a95f2240f893897b8a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

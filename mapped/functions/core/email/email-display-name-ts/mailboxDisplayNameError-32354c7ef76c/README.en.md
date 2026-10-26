# `mailboxDisplayNameError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-display-name.ts` · [Module README](../../../../../modules/core/email/email-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715936-715949](../../../../../../reference/runtime/host-main.cjs#L715936-L715949) | `FunctionDeclaration` | no | `name18` |
| [evaluation:527605-527618](../../../../../../reference/runtime/sand-eval-runner.cjs#L527605-L527618) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715936-715949](../../../../../../reference/runtime/host-main.cjs#L715936-L715949) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:527605-527618](../../../../../../reference/runtime/sand-eval-runner.cjs#L527605-L527618) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:715936

Calls written directly in this body: `mailboxDisplayNameShapeError`, `mixesLatinWithLookalikeScript`, `name18.normalize`, `reservedTermIn`.

SHA-256 of the source span: `9980858056880f568289e41caf22a60be316829bb705996172a7fe56eca3caf2`.

### evaluation:527605

Calls written directly in this body: `mailboxDisplayNameShapeError`, `mixesLatinWithLookalikeScript`, `name18.normalize`, `reservedTermIn`.

SHA-256 of the source span: `9980858056880f568289e41caf22a60be316829bb705996172a7fe56eca3caf2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

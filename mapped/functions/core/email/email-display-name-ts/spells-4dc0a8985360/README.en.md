# `spells`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-display-name.ts` · [Module README](../../../../../modules/core/email/email-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715873-715896](../../../../../../reference/runtime/host-main.cjs#L715873-L715896) | `FunctionDeclaration` | no | `text3, { length, lettersByUnit, lettersEnteredOnRepeat }, { mayStart, mayEnd, lastStart, crossesWords }` |
| [evaluation:527542-527565](../../../../../../reference/runtime/sand-eval-runner.cjs#L527542-L527565) | `FunctionDeclaration` | no | `text3, { length, lettersByUnit, lettersEnteredOnRepeat }, { mayStart, mayEnd, lastStart, crossesWords }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715873-715896](../../../../../../reference/runtime/host-main.cjs#L715873-L715896) | 7 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:527542-527565](../../../../../../reference/runtime/sand-eval-runner.cjs#L527542-L527565) | 7 | 1 | 0 | 4 | 0 | 0 |

### host:715873

Calls written directly in this body: `text3.charCodeAt`.

Assignment or increment targets: `i`, `previous`, `spelledPrefixes`.

SHA-256 of the source span: `e527590284f06a7567b7166e9b0feec93b0091a627a87e07e351bcebf4c6d1fd`.

### evaluation:527542

Calls written directly in this body: `text3.charCodeAt`.

Assignment or increment targets: `i`, `previous`, `spelledPrefixes`.

SHA-256 of the source span: `e527590284f06a7567b7166e9b0feec93b0091a627a87e07e351bcebf4c6d1fd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

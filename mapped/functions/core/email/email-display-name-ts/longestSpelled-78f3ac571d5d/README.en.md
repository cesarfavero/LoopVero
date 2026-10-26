# `longestSpelled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-display-name.ts` · [Module README](../../../../../modules/core/email/email-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715900-715929](../../../../../../reference/runtime/host-main.cjs#L715900-L715929) | `FunctionDeclaration` | no | `value, lexicon` |
| [evaluation:527569-527598](../../../../../../reference/runtime/sand-eval-runner.cjs#L527569-L527598) | `FunctionDeclaration` | no | `value, lexicon` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715900-715929](../../../../../../reference/runtime/host-main.cjs#L715900-L715929) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527569-527598](../../../../../../reference/runtime/sand-eval-runner.cjs#L527569-L527598) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:715900

Calls written directly in this body: `.fill`, `edgesOf`, `lexicon.inside.filter`, `lexicon.spans.filter`, `lexicon.wholeNames.filter`, `lexicon.words.filter`, `matched.reduce`, `new Uint8Array`, `spelledIn`, `words2.join`, `words2.map`, `wordsOf`.

SHA-256 of the source span: `6dd46adfcea9c87fe316a1afb5d669a16ad76cc9110a17a8951c9c94dbef7055`.

### evaluation:527569

Calls written directly in this body: `.fill`, `edgesOf`, `lexicon.inside.filter`, `lexicon.spans.filter`, `lexicon.wholeNames.filter`, `lexicon.words.filter`, `matched.reduce`, `new Uint8Array`, `spelledIn`, `words.join`, `words.map`, `wordsOf`.

SHA-256 of the source span: `bb891b59b891e5174e229f13396719d87c7490b948c98a6ce6bfcdae6a938bab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

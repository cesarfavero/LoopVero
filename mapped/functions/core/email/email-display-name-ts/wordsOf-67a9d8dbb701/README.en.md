# `wordsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-display-name.ts` · [Module README](../../../../../modules/core/email/email-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715827-715829](../../../../../../reference/runtime/host-main.cjs#L715827-L715829) | `FunctionDeclaration` | no | `value` |
| [evaluation:527496-527498](../../../../../../reference/runtime/sand-eval-runner.cjs#L527496-L527498) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715827-715829](../../../../../../reference/runtime/host-main.cjs#L715827-L715829) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527496-527498](../../../../../../reference/runtime/sand-eval-runner.cjs#L527496-L527498) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:715827

Calls written directly in this body: `.match`, `.replace`, `.replaceAll`, `value.normalize`.

SHA-256 of the source span: `dad7f45c70e7f0a184c962f5a0cd118611858f2c65d0eb8f6493175a83828850`.

### evaluation:527496

Calls written directly in this body: `.match`, `.replace`, `.replaceAll`, `value.normalize`.

SHA-256 of the source span: `dad7f45c70e7f0a184c962f5a0cd118611858f2c65d0eb8f6493175a83828850`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

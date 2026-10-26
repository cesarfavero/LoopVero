# `compiled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-display-name.ts` · [Module README](../../../../../modules/core/email/email-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715785-715791](../../../../../../reference/runtime/host-main.cjs#L715785-L715791) | `FunctionDeclaration` | no | `name18` |
| [evaluation:527454-527460](../../../../../../reference/runtime/sand-eval-runner.cjs#L527454-L527460) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715785-715791](../../../../../../reference/runtime/host-main.cjs#L715785-L715791) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:527454-527460](../../../../../../reference/runtime/sand-eval-runner.cjs#L527454-L527460) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:715785

Calls written directly in this body: `.map`, `/^[a-z]+$/.test`, `name18.replaceAll`, `new Error`, `spellingsOf`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `18d96d936cbbf9095f369c08900d55c16834acc87ae82ab059560623b6548865`.

### evaluation:527454

Calls written directly in this body: `.map`, `/^[a-z]+$/.test`, `name18.replaceAll`, `new Error`, `spellingsOf`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `18d96d936cbbf9095f369c08900d55c16834acc87ae82ab059560623b6548865`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

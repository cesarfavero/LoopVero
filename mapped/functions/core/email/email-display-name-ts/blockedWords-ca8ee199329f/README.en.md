# `blockedWords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-display-name.ts` · [Module README](../../../../../modules/core/email/email-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715801-715801](../../../../../../reference/runtime/host-main.cjs#L715801-L715801) | `ArrowFunctionExpression` | no | `scope` |
| [evaluation:527470-527470](../../../../../../reference/runtime/sand-eval-runner.cjs#L527470-L527470) | `ArrowFunctionExpression` | no | `scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715801-715801](../../../../../../reference/runtime/host-main.cjs#L715801-L715801) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:715801 uses an implicit arrow-function return.
| [evaluation:527470-527470](../../../../../../reference/runtime/sand-eval-runner.cjs#L527470-L527470) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:527470 uses an implicit arrow-function return.

### host:715801

Calls written directly in this body: `.filter`, `.map`.

SHA-256 of the source span: `32a4853fccfc6de9524b3354136e72248c664fdaee514a0b85a9ab7a42b87a05`.

### evaluation:527470

Calls written directly in this body: `.filter`, `.map`.

SHA-256 of the source span: `7d44f26301206283778f593b29ea6ee92ee81d0526d9492cf3ec6ecc2f0ca0d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `mapProse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/slack-markup.ts` · [Module README](../../../../../modules/shared/channels/slack-markup-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721595-721597](../../../../../../reference/runtime/host-main.cjs#L721595-L721597) | `FunctionDeclaration` | no | `text3, render2` |
| [evaluation:539847-539849](../../../../../../reference/runtime/sand-eval-runner.cjs#L539847-L539849) | `FunctionDeclaration` | no | `text3, render2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721595-721597](../../../../../../reference/runtime/host-main.cjs#L721595-L721597) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539847-539849](../../../../../../reference/runtime/sand-eval-runner.cjs#L539847-L539849) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:721595

Calls written directly in this body: `.join`, `.map`, `text3.split`.

SHA-256 of the source span: `214864e644ebbbe54a0b360dfde9abfb372deec7ec94b606d18008d7b9ab206b`.

### evaluation:539847

Calls written directly in this body: `.join`, `.map`, `text3.split`.

SHA-256 of the source span: `214864e644ebbbe54a0b360dfde9abfb372deec7ec94b606d18008d7b9ab206b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

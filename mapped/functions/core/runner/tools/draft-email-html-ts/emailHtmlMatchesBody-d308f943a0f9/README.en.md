# `emailHtmlMatchesBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732490-732497](../../../../../../../reference/runtime/host-main.cjs#L732490-L732497) | `FunctionDeclaration` | no | `{   html,   body }` |
| [evaluation:539502-539509](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539502-L539509) | `FunctionDeclaration` | no | `{   html,   body }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732490-732497](../../../../../../../reference/runtime/host-main.cjs#L732490-L732497) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539502-539509](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539502-L539509) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732490

Calls written directly in this body: `.map`, `body.split`, `bodyWords`, `matchesBodyWords`, `new Set`, `readHtml`, `reading.targets.every`.

SHA-256 of the source span: `785b9d0419c1a1d629670808fb0f16b918aa598c99d2bdd36699f3a8cd62f13e`.

### evaluation:539502

Calls written directly in this body: `.map`, `body.split`, `bodyWords`, `matchesBodyWords`, `new Set`, `readHtml`, `reading.targets.every`.

SHA-256 of the source span: `785b9d0419c1a1d629670808fb0f16b918aa598c99d2bdd36699f3a8cd62f13e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

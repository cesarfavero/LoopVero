# `buildRenderCardContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/render-card-content.ts` · [Module README](../../../../../../modules/core/runner/cards/render-card-content-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758017-758024](../../../../../../../reference/runtime/host-main.cjs#L758017-L758024) | `FunctionDeclaration` | no | `lead, fallbackTexts` |
| [evaluation:544115-544122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544115-L544122) | `FunctionDeclaration` | no | `lead, fallbackTexts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758017-758024](../../../../../../../reference/runtime/host-main.cjs#L758017-L758024) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:544115-544122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544115-L544122) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:758017

Calls written directly in this body: `fallbackTexts.join`, `lead.trim`.

SHA-256 of the source span: `255cfaf5e3d53534cbf67f73ace1f85cfdddde35f727a0f9728b04a9e1eba6b7`.

### evaluation:544115

Calls written directly in this body: `fallbackTexts.join`, `lead.trim`.

SHA-256 of the source span: `255cfaf5e3d53534cbf67f73ace1f85cfdddde35f727a0f9728b04a9e1eba6b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

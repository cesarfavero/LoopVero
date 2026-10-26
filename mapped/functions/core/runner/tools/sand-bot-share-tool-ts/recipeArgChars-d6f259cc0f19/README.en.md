# `recipeArgChars`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-bot-share-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-bot-share-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771081-771083](../../../../../../../reference/runtime/host-main.cjs#L771081-L771083) | `FunctionDeclaration` | no | `recipe` |
| [evaluation:570315-570317](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570315-L570317) | `FunctionDeclaration` | no | `recipe` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771081-771083](../../../../../../../reference/runtime/host-main.cjs#L771081-L771083) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570315-570317](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570315-L570317) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:771081

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `109534e83063ff6b3ff5bcbf9c383a3fbb8906eb9acb33e60ece49cbb5545b04`.

### evaluation:570315

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `109534e83063ff6b3ff5bcbf9c383a3fbb8906eb9acb33e60ece49cbb5545b04`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

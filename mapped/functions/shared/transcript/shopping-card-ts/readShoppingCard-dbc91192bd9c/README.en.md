# `readShoppingCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707696-707724](../../../../../../reference/runtime/host-main.cjs#L707696-L707724) | `FunctionDeclaration` | no | `value, options2 = {}` |
| [evaluation:481818-481846](../../../../../../reference/runtime/sand-eval-runner.cjs#L481818-L481846) | `FunctionDeclaration` | no | `value, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707696-707724](../../../../../../reference/runtime/host-main.cjs#L707696-L707724) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481818-481846](../../../../../../reference/runtime/sand-eval-runner.cjs#L481818-L481846) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:707696

Calls written directly in this body: `.flatMap`, `new CardReader`, `reader.compare`, `reader.count`, `reader.list`, `reader.record`.

SHA-256 of the source span: `5536642fa1a6dff657fb83ca6f80bc0ebeb4cf35c5f819857624d62a6e6cda93`.

### evaluation:481818

Calls written directly in this body: `.flatMap`, `new CardReader`, `reader.compare`, `reader.count`, `reader.list`, `reader.record`.

SHA-256 of the source span: `5536642fa1a6dff657fb83ca6f80bc0ebeb4cf35c5f819857624d62a6e6cda93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

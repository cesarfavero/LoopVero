# `itemLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707206-707209](../../../../../../reference/runtime/host-main.cjs#L707206-L707209) | `FunctionDeclaration` | no | `item` |
| [evaluation:481329-481332](../../../../../../reference/runtime/sand-eval-runner.cjs#L481329-L481332) | `FunctionDeclaration` | no | `item` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707206-707209](../../../../../../reference/runtime/host-main.cjs#L707206-L707209) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481329-481332](../../../../../../reference/runtime/sand-eval-runner.cjs#L481329-L481332) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:707206

Calls written directly in this body: `escapeCardMarkdown`.

SHA-256 of the source span: `bce813aaf984a63d0d612fcaa12960556e75d56aed9a4966a63888db3205a7a9`.

### evaluation:481329

Calls written directly in this body: `escapeCardMarkdown`.

SHA-256 of the source span: `bce813aaf984a63d0d612fcaa12960556e75d56aed9a4966a63888db3205a7a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

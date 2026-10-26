# `trackingLink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707218-707223](../../../../../../reference/runtime/host-main.cjs#L707218-L707223) | `FunctionDeclaration` | no | `card` |
| [evaluation:481341-481346](../../../../../../reference/runtime/sand-eval-runner.cjs#L481341-L481346) | `FunctionDeclaration` | no | `card` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707218-707223](../../../../../../reference/runtime/host-main.cjs#L707218-L707223) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481341-481346](../../../../../../reference/runtime/sand-eval-runner.cjs#L481341-L481346) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:707218

Calls written directly in this body: `escapeCardMarkdown`, `markdownLinkTarget`, `shipmentShowsTracking`.

SHA-256 of the source span: `c0a0f58851dc18521805cb6674ec446fb746a388d759ffa7ed32917862c33501`.

### evaluation:481341

Calls written directly in this body: `escapeCardMarkdown`, `markdownLinkTarget`, `shipmentShowsTracking`.

SHA-256 of the source span: `c0a0f58851dc18521805cb6674ec446fb746a388d759ffa7ed32917862c33501`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

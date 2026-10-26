# `shipmentLinkInText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707191-707199](../../../../../../reference/runtime/host-main.cjs#L707191-L707199) | `FunctionDeclaration` | no | `text3, card` |
| [evaluation:481314-481322](../../../../../../reference/runtime/sand-eval-runner.cjs#L481314-L481322) | `FunctionDeclaration` | no | `text3, card` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707191-707199](../../../../../../reference/runtime/host-main.cjs#L707191-L707199) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481314-481322](../../../../../../reference/runtime/sand-eval-runner.cjs#L481314-L481322) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:707191

Calls written directly in this body: `.includes`, `Array.from`, `linkKey`, `text3.matchAll`.

SHA-256 of the source span: `54317ff3b8a0d829ac9f9d06409ec32d32b744eb6c36497064ca9c951eb4083b`.

### evaluation:481314

Calls written directly in this body: `.includes`, `Array.from`, `linkKey`, `text3.matchAll`.

SHA-256 of the source span: `54317ff3b8a0d829ac9f9d06409ec32d32b744eb6c36497064ca9c951eb4083b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

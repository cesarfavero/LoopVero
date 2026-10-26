# `isHttpsUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706970-706974](../../../../../../reference/runtime/host-main.cjs#L706970-L706974) | `FunctionDeclaration` | no | `value` |
| [evaluation:481116-481120](../../../../../../reference/runtime/sand-eval-runner.cjs#L481116-L481120) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706970-706974](../../../../../../reference/runtime/host-main.cjs#L706970-L706974) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481116-481120](../../../../../../reference/runtime/sand-eval-runner.cjs#L481116-L481120) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:706970

Calls written directly in this body: `URL.canParse`, `new URL`.

SHA-256 of the source span: `1c8333766752f0649cccb7a787647bcfdc8de7c663d1807251c3afa9daabf63f`.

### evaluation:481116

Calls written directly in this body: `URL.canParse`, `new URL`.

SHA-256 of the source span: `1c8333766752f0649cccb7a787647bcfdc8de7c663d1807251c3afa9daabf63f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

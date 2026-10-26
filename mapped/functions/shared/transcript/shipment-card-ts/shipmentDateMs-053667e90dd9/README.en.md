# `shipmentDateMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706978-706986](../../../../../../reference/runtime/host-main.cjs#L706978-L706986) | `FunctionDeclaration` | no | `date6` |
| [evaluation:481124-481132](../../../../../../reference/runtime/sand-eval-runner.cjs#L481124-L481132) | `FunctionDeclaration` | no | `date6` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706978-706986](../../../../../../reference/runtime/host-main.cjs#L706978-L706986) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481124-481132](../../../../../../reference/runtime/sand-eval-runner.cjs#L481124-L481132) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:706978

Calls written directly in this body: `DATE_PATTERN.exec`, `Date.UTC`, `match2.map`, `new Date`, `parsed2.getUTCDate`, `parsed2.getUTCFullYear`, `parsed2.getUTCMonth`.

SHA-256 of the source span: `ddb1ff1b8dd45da9779c4cd157398f9bbeaa1c325fdd708541c667a2011b52fc`.

### evaluation:481124

Calls written directly in this body: `DATE_PATTERN.exec`, `Date.UTC`, `match2.map`, `new Date`, `parsed.getUTCDate`, `parsed.getUTCFullYear`, `parsed.getUTCMonth`.

SHA-256 of the source span: `b7262f8a085970462e58400f3257b0dc6c7395768e7b25dc3cdf434c07663cdd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

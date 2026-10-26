# `ShipmentReader.url`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707019-707024](../../../../../../reference/runtime/host-main.cjs#L707019-L707024) | `method` | no | `path33, value, required2` |
| [evaluation:481165-481170](../../../../../../reference/runtime/sand-eval-runner.cjs#L481165-L481170) | `method` | no | `path33, value, required2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707019-707024](../../../../../../reference/runtime/host-main.cjs#L707019-L707024) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481165-481170](../../../../../../reference/runtime/sand-eval-runner.cjs#L481165-L481170) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:707019

Calls written directly in this body: `isHttpsUrl`, `this.error`.

SHA-256 of the source span: `7d510c5241e328434c4501040a1346aebe6a8fe3ce52b5f22b535b7fe5f09ac5`.

### evaluation:481165

Calls written directly in this body: `isHttpsUrl`, `this.error`.

SHA-256 of the source span: `7d510c5241e328434c4501040a1346aebe6a8fe3ce52b5f22b535b7fe5f09ac5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `nextLogShipDelayMs/backoff2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/log-ship-cadence.ts` · [Module README](../../../../../modules/shared/observability/log-ship-cadence-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:452656-452656](../../../../../../reference/runtime/host-main.cjs#L452656-L452656) | `ArrowFunctionExpression` | no | `capMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452656-452656](../../../../../../reference/runtime/host-main.cjs#L452656-L452656) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:452656 uses an implicit arrow-function return.

### host:452656

Calls written directly in this body: `Math.max`, `Math.min`.

SHA-256 of the source span: `0069c67b7d8cfd5ffac9fed2bac4cad20dbd3b1e448fe4ee495d7cf92d2e279c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

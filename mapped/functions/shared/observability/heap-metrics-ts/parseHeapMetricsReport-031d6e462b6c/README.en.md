# `parseHeapMetricsReport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/heap-metrics.ts` · [Module README](../../../../../modules/shared/observability/heap-metrics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487543-487573](../../../../../../reference/runtime/host-main.cjs#L487543-L487573) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487543-487573](../../../../../../reference/runtime/host-main.cjs#L487543-L487573) | 8 | 0 | 0 | 6 | 0 | 1 |

### host:487543

Calls written directly in this body: `Number.isFinite`, `Object.getPrototypeOf`, `isMetricCount`, `ownDataValue`.

SHA-256 of the source span: `cf5e2c1d63fe4ff0c336e26f1ec5eb6d26b4fe62c1a2f5eeec3bb8af6aa19542`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

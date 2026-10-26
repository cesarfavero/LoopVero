# `isMetricCount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/heap-metrics.ts` · [Module README](../../../../../modules/shared/observability/heap-metrics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487540-487542](../../../../../../reference/runtime/host-main.cjs#L487540-L487542) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487540-487542](../../../../../../reference/runtime/host-main.cjs#L487540-L487542) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:487540

Calls written directly in this body: `Number.isInteger`.

SHA-256 of the source span: `856c0053425364c4e10024874b8b9dab906c5015d752d9b3d1344b216efe1fc5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

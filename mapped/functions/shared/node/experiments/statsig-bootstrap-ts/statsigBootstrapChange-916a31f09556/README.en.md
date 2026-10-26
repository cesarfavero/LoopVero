# `statsigBootstrapChange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/statsig-bootstrap.ts` · [Module README](../../../../../../modules/shared/node/experiments/statsig-bootstrap-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552372-552380](../../../../../../../reference/runtime/host-main.cjs#L552372-L552380) | `FunctionDeclaration` | no | `previous, next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552372-552380](../../../../../../../reference/runtime/host-main.cjs#L552372-L552380) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:552372

Calls written directly in this body: `areJsonValuesEqual`, `isUnknownRecord2`.

SHA-256 of the source span: `f1900b213941084c2b82cdb6f43b03968c2415a9f5ac855d87b04cb6ec6fc1d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

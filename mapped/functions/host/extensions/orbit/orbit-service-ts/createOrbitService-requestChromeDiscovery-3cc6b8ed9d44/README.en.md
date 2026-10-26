# `createOrbitService/requestChromeDiscovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/orbit-service.ts` · [Module README](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706276-706295](../../../../../../../reference/runtime/host-main.cjs#L706276-L706295) | `ArrowFunctionExpression` | no | `discoveryGeneration` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706276-706295](../../../../../../../reference/runtime/host-main.cjs#L706276-L706295) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:706276

Calls written directly in this body: `.catch`, `.finally`, `Promise.resolve`, `refreshChromePorts`.

Assignment or increment targets: `state.inFlightChromeDiscovery`.

SHA-256 of the source span: `a8bb5733261de9ce71de2f6c35a8d014e2b1d808d47963d1d3bfd8f28d45eb2b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

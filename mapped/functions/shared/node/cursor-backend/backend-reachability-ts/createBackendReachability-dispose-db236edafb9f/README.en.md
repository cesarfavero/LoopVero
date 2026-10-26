# `createBackendReachability/dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/backend-reachability.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-reachability-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711268-711271](../../../../../../../reference/runtime/host-main.cjs#L711268-L711271) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711268-711271](../../../../../../../reference/runtime/host-main.cjs#L711268-L711271) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:711268

Calls written directly in this body: `pendingReturn.dispose`.

Assignment or increment targets: `pendingReturn`.

SHA-256 of the source span: `2375457e728601f0638fad96a70f3f07c116cdc57d0bd45cf70cbe8fab65811b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

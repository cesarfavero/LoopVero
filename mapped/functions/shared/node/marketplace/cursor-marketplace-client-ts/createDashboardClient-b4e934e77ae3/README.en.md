# `createDashboardClient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/marketplace/cursor-marketplace-client.ts` · [Module README](../../../../../../modules/shared/node/marketplace/cursor-marketplace-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404286-404291](../../../../../../../reference/runtime/host-main.cjs#L404286-L404291) | `FunctionDeclaration` | no | `backend, getAccessToken, getMachineId, getTeamId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404286-404291](../../../../../../../reference/runtime/host-main.cjs#L404286-L404291) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:404286

Calls written directly in this body: `createSandCursorBackendClient`, `marketplaceBackendClientOptions`.

SHA-256 of the source span: `47bd92dd39ff2555f79cad315786df072d890a39667ef291be53ce0ccd263062`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

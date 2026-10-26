# `bestEffortMachineId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/marketplace/cursor-marketplace-client.ts` · [Module README](../../../../../../modules/shared/node/marketplace/cursor-marketplace-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404264-404272](../../../../../../../reference/runtime/host-main.cjs#L404264-L404272) | `FunctionDeclaration` | yes | `getMachineId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404264-404272](../../../../../../../reference/runtime/host-main.cjs#L404264-L404272) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:404264

Calls written directly in this body: `getMachineId`, `reportMcpHostEdgeFailure`.

SHA-256 of the source span: `e09db6c229c9639753eb7e9f9664f69b9e143c86eaafb4bf112b7995d446047a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `toCloudAgentUpdateEvent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-updates-stream.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-updates-stream-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:537562-537568](../../../../../../../reference/runtime/host-main.cjs#L537562-L537568) | `FunctionDeclaration` | no | `event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537562-537568](../../../../../../../reference/runtime/host-main.cjs#L537562-L537568) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:537562

Calls written directly in this body: `Number`, `event.bcId.trim`, `isPublishTimeStamped`, `runStatusFromBackendStatus`.

SHA-256 of the source span: `86a7fd729700a4a5c25bf7300fba0d351f108547033d4d8cf2eab3f03a01d110`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `toCloudAgentWake`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-conversation-read.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-conversation-read-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508796-508801](../../../../../../../reference/runtime/host-main.cjs#L508796-L508801) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508796-508801](../../../../../../../reference/runtime/host-main.cjs#L508796-L508801) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508796

Calls written directly in this body: `cloudAgentWakeFromSubscriptionMetadata`, `createdAtMs`.

SHA-256 of the source span: `be7749bcfb542a5bcfb9036c1b821d0eb29bf6d3e9ddf24f55f012599b6b1236`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

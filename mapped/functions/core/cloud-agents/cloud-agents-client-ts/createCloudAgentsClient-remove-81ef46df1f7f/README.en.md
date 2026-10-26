# `createCloudAgentsClient/remove`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513253-513255](../../../../../../reference/runtime/host-main.cjs#L513253-L513255) | `FunctionDeclaration` | yes | `bcId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513253-513255](../../../../../../reference/runtime/host-main.cjs#L513253-L513255) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:513253

Calls written directly in this body: `.deleteBackgroundComposer`, `client`, `new DeleteBackgroundComposerRequest`.

SHA-256 of the source span: `18c1ec231b440a2bb09fe2caea3b196344c66ed189ccb048717b4618f11fdb3e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

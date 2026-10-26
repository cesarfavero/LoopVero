# `SandAgentIdentityService.createRemoteAgentFirst`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495328-495357](../../../../../../../reference/runtime/host-main.cjs#L495328-L495357) | `method` | yes | `fields3, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495328-495357](../../../../../../../reference/runtime/host-main.cjs#L495328-L495357) | 2 | 0 | 2 | 2 | 2 | 1 |

### host:495328

Calls written directly in this body: `new ConnectError`, `this.deps.getCreationPolicy`, `this.deps.newAgentId`, `this.mintRemoteFirst`, `this.pendingLocalMaterializationIds.add`, `this.pendingLocalMaterializationIds.delete`, `withGeneratedMark`.

Explicit throw targets: `ConnectError`, `error64`.

SHA-256 of the source span: `f11122b6ac62ea2727b19ef909351bdc64ed5c08539d07ea1d760a1360436257`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

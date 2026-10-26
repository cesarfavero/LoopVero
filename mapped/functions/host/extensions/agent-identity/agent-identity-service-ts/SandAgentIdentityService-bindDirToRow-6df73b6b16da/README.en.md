# `SandAgentIdentityService.bindDirToRow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496030-496039](../../../../../../../reference/runtime/host-main.cjs#L496030-L496039) | `method` | yes | `root, agent, identity` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496030-496039](../../../../../../../reference/runtime/host-main.cjs#L496030-L496039) | 2 | 0 | 1 | 0 | 0 | 0 |

### host:496030

Calls written directly in this body: `assertSandProfileNotLinked`, `bindSandProfileToServer`, `mirrorRoomMembers`, `serverBindingOf`, `this.deps.forgetLocalAgentDeletion`, `this.droppedUnlistedIds.delete`, `this.prepareMediaRoots`.

SHA-256 of the source span: `0fe6a2f255388f42c14209596eedab929ee807e5ae4aec616fe1614f76539962`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

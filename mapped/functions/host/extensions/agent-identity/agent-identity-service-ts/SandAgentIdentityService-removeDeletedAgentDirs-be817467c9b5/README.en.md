# `SandAgentIdentityService.removeDeletedAgentDirs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495708-495713](../../../../../../../reference/runtime/host-main.cjs#L495708-L495713) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495708-495713](../../../../../../../reference/runtime/host-main.cjs#L495708-L495713) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:495708

Calls written directly in this body: `this.deletedAgents.removeAgentDirs`, `this.deps.getAgentsRootDir`.

SHA-256 of the source span: `4ab5eed971808a7a7a4b5d554a7a0c4fa1a05621fa9f3f96734a0f7be041ca55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

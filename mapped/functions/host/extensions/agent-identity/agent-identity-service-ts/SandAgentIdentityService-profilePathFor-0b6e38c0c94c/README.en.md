# `SandAgentIdentityService.profilePathFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495717-495719](../../../../../../../reference/runtime/host-main.cjs#L495717-L495719) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495717-495719](../../../../../../../reference/runtime/host-main.cjs#L495717-L495719) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:495717

Calls written directly in this body: `getSandProfilePath`, `this.deps.getAgentsRootDir`.

SHA-256 of the source span: `b89965642d1fdc6baa328937f1f3329493b2c0a5abdd69cbda57509c20444c23`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

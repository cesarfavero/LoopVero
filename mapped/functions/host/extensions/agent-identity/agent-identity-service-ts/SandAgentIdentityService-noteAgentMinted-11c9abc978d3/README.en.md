# `SandAgentIdentityService.noteAgentMinted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495325-495327](../../../../../../../reference/runtime/host-main.cjs#L495325-L495327) | `method` | no | `agentId, createIntent = "register-existing-local"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495325-495327](../../../../../../../reference/runtime/host-main.cjs#L495325-L495327) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:495325

Calls written directly in this body: `this.runSerialized`.

SHA-256 of the source span: `0de8bce1fda9e55ee689e200a16d588919b464d8195b45a0b902bb03267946e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

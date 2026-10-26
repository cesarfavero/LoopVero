# `SandAgentIdentityService.createRemoteAgentFromTemplate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495472-495492](../../../../../../../reference/runtime/host-main.cjs#L495472-L495492) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495472-495492](../../../../../../../reference/runtime/host-main.cjs#L495472-L495492) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:495472

Calls written directly in this body: `create`, `importedTemplateSetupForHarness`, `invariant`, `this.noteRoomPeople`, `this.rememberServerIdentity`, `this.serverAvatarVersions.set`, `toRemoteGrokBotAgent`.

SHA-256 of the source span: `11d85b8c94a26027aa103f14558fc88fa8e6c9614537eaa28ea972ca49d54f69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

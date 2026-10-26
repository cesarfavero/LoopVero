# `SandAgentIdentityService.mintRemoteFirst`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495500-495559](../../../../../../../reference/runtime/host-main.cjs#L495500-L495559) | `method` | yes | `{     create,     agentId,     fields: fields3,     wantsTemporal,     avatarDataUrl   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495500-495559](../../../../../../../reference/runtime/host-main.cjs#L495500-L495559) | 6 | 0 | 2 | 1 | 3 | 0 |

### host:495500

Calls written directly in this body: `brandedOrInvalidId`, `defaultedName`, `invariant`, `logFields`, `new ConnectError`, `new SandBoxHarnessCreateRefusedError`, `this.deps.report`, `this.rememberServerIdentity`, `this.requestMint`, `this.rollbackRemoteAgent`, `this.serverAvatarVersions.set`, `toRemoteGrokBotAgent`.

Explicit throw targets: `ConnectError`, `SandBoxHarnessCreateRefusedError`.

SHA-256 of the source span: `02b519b2fb09587852101d763f0bf9980cbcf6f0bcad3d73486a72ca989540cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

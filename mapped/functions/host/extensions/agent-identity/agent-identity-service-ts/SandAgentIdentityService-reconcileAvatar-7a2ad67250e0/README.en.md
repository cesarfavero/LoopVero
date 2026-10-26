# `SandAgentIdentityService.reconcileAvatar`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495905-495937](../../../../../../../reference/runtime/host-main.cjs#L495905-L495937) | `method` | yes | `agent, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495905-495937](../../../../../../../reference/runtime/host-main.cjs#L495905-L495937) | 5 | 0 | 4 | 7 | 0 | 1 |

### host:495905

Calls written directly in this body: `errorMessage`, `signal.throwIfAborted`, `this.applyRemoteAvatar`, `this.deps.fetchRemoteAvatarBytes`, `this.deps.getLocalAvatar`, `this.deps.log`, `this.locallyChangedAvatarIds.has`, `this.serverAvatarVersions.set`, `this.unresolvedAvatarBaselines.delete`, `this.unresolvedAvatarBaselines.set`, `this.unsupportedLocalAvatarBaselines.delete`.

Assignment or increment targets: `bytes`.

SHA-256 of the source span: `1d2bdcbc9431123a33627eed520c9db9bbf58df42555dacea0d02897ce6be3d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

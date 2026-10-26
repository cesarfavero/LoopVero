# `SandAgentIdentityService.pushEdit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496189-496270](../../../../../../../reference/runtime/host-main.cjs#L496189-L496270) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496189-496270](../../../../../../../reference/runtime/host-main.cjs#L496189-L496270) | 18 | 0 | 3 | 7 | 0 | 0 |

### host:496189

Calls written directly in this body: `brandedOrInvalidId`, `changedAvatarUpdate`, `createSandProfile`, `identitiesMatch`, `identityInput`, `logFields`, `readSandProfileFile`, `this.deps.getLocalAvatar`, `this.deps.report`, `this.groupChatSeedPush`, `this.keptServerTitles.delete`, `this.keptServerTitles.get`, `this.keptServerTitles.set`, `this.locallyChangedAvatarIds.delete`, `this.profilePathFor`, `this.rememberServerIdentity`, `this.runWrite`, `this.serverAvatarVersions.get`, `this.serverAvatarVersions.set`, `this.serverBindingOf`, `this.serverIdentities.get`, `this.stampFromRemote`, `this.unresolvedAvatarBaselines.delete`, `this.unresolvedAvatarBaselines.get`, `this.unsupportedLocalAvatarBaselines.delete`, `this.unsupportedLocalAvatarBaselines.has`, `this.unsupportedLocalAvatarBaselines.set`, `toRemoteGrokBotAgent`.

Assignment or increment targets: `avatar`.

SHA-256 of the source span: `4976bb8823b6205f9327119f06f948bf4018d5f72a98d2fa2d31f01b9d2a34b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

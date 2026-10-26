# `SandAgentIdentityService.mint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496048-496178](../../../../../../../reference/runtime/host-main.cjs#L496048-L496178) | `method` | yes | `agentId, createIntent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496048-496178](../../../../../../../reference/runtime/host-main.cjs#L496048-L496178) | 12 | 0 | 4 | 12 | 0 | 0 |

### host:496048

Calls written directly in this body: `brandedOrInvalidId`, `identityInput`, `logFields`, `readSandProfileFile`, `readSandProfileServerId`, `this.deletedAgents.has`, `this.deps.getCreationPolicy`, `this.deps.log`, `this.deps.report`, `this.mintedServerIds.set`, `this.profilePathFor`, `this.readLocalAvatarForUpload`, `this.rememberLocalAvatarIfItDoesNotMatchRow`, `this.runWrite`, `this.stampFromRemote`, `toRemoteGrokBotAgent`, `withGeneratedMark`.

SHA-256 of the source span: `63aa1ea1d88561866fcd4c88d6ed5cae5996871ad6ec56ee67fddead4294e047`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

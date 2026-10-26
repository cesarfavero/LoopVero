# `SandAgentIdentityService.deleteUpstream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496271-496307](../../../../../../../reference/runtime/host-main.cjs#L496271-L496307) | `method` | yes | `agentId, serverId, retries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496271-496307](../../../../../../../reference/runtime/host-main.cjs#L496271-L496307) | 5 | 0 | 1 | 3 | 0 | 0 |

### host:496271

Calls written directly in this body: `brandedOrInvalidId`, `errorLogTag`, `isUnansweredWrite`, `logFields`, `this.deps.report`, `this.locallyChangedAvatarIds.delete`, `this.mintedServerIds.delete`, `this.mintedServerIds.get`, `this.runWrite`, `this.serverAvatarVersions.delete`, `this.serverBindings.delete`, `this.serverIdentities.delete`, `this.unresolvedAvatarBaselines.delete`, `this.unsupportedLocalAvatarBaselines.delete`.

SHA-256 of the source span: `c8261c8f995bff239e9f8e41ee56af26657133fa465d84c2ffe423525628f61c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

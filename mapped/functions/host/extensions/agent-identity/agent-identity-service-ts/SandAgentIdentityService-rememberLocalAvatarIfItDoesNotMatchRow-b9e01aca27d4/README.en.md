# `SandAgentIdentityService.rememberLocalAvatarIfItDoesNotMatchRow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496352-496364](../../../../../../../reference/runtime/host-main.cjs#L496352-L496364) | `method` | yes | `agentId, rowAvatarVersion` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496352-496364](../../../../../../../reference/runtime/host-main.cjs#L496352-L496364) | 1 | 0 | 1 | 1 | 0 | 1 |

### host:496352

Calls written directly in this body: `errorMessage`, `this.deps.getLocalAvatar`, `this.deps.log`, `this.serverAvatarVersions.set`, `this.unresolvedAvatarBaselines.set`.

Assignment or increment targets: `localVersion`.

SHA-256 of the source span: `8dc520ca4451905211f1a252aea83e780b5d635ddcacb925a9bcbb522c62cc9a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

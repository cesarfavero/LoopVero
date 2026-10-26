# `SandAgentIdentityService.stampFromRemote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496308-496314](../../../../../../../reference/runtime/host-main.cjs#L496308-L496314) | `method` | no | `agentId, profilePath, remote, expectedLocal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496308-496314](../../../../../../../reference/runtime/host-main.cjs#L496308-L496314) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:496308

Calls written directly in this body: `bindSandProfileToServer`, `identityFromRowKeepingNamedBy`, `localIdentityDiverged`, `readSandProfileFile`, `serverBindingOf`, `this.rememberServerIdentity`.

SHA-256 of the source span: `9dd93a4b3a16cb2ad6dc8bf1bf158870f82bed0a70284412657722196ecb962f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

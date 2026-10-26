# `SandAgentIdentityService.rememberServerIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496347-496351](../../../../../../../reference/runtime/host-main.cjs#L496347-L496351) | `method` | no | `agentId, remote` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496347-496351](../../../../../../../reference/runtime/host-main.cjs#L496347-L496351) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:496347

Calls written directly in this body: `identityInputFromRemote`, `this.clock.monotonicNow`, `this.serverBindings.set`, `this.serverConfirmedAt.set`, `this.serverIdentities.set`.

SHA-256 of the source span: `a1be78e0fb0443448e78fd00f46b13f547fdf52649099ab657537e53057c6023`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `SandAgentIdentityService.applyRemoteAvatar`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495938-495960](../../../../../../../reference/runtime/host-main.cjs#L495938-L495960) | `method` | yes | `agent, expectedVersion, bytes, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495938-495960](../../../../../../../reference/runtime/host-main.cjs#L495938-L495960) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:495938

Calls written directly in this body: `errorMessage`, `signal.throwIfAborted`, `this.deps.log`, `this.deps.setLocalAvatarBytes`, `this.unresolvedAvatarBaselines.delete`, `this.unresolvedAvatarBaselines.set`, `this.unsupportedLocalAvatarBaselines.delete`.

SHA-256 of the source span: `100bcf7f975ff6bbfa9065e39d1d2b174e3f9c1d6ada45fb2feaf7b0bd15de9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

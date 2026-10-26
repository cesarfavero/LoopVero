# `SandAgentIdentityService.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495208-495213](../../../../../../../reference/runtime/host-main.cjs#L495208-L495213) | `method` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495208-495213](../../../../../../../reference/runtime/host-main.cjs#L495208-L495213) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:495208

Calls written directly in this body: `new SyncDownRetrySchedule`.

Assignment or increment targets: `this.clock`, `this.deletedAgents`, `this.deps`, `this.syncDownRetry`.

SHA-256 of the source span: `5b6caaa3214127329c3c7c686f1584145804088b3a4963b7f8e2a792bf1230d1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

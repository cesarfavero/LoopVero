# `SandAgentIdentityService.noteAgentIdentityChanged`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495610-495622](../../../../../../../reference/runtime/host-main.cjs#L495610-L495622) | `method` | no | `agentId, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495610-495622](../../../../../../../reference/runtime/host-main.cjs#L495610-L495622) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:495610

Calls written directly in this body: `this.enqueue`, `this.locallyChangedAvatarIds.add`, `this.pendingEditIds.add`, `this.pendingEditIds.has`, `this.unacknowledgedEditIds.add`.

SHA-256 of the source span: `7c4ca7dc99fc179b95bae7bd104dfea11121197d7c44faa7217a6e40213b864b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

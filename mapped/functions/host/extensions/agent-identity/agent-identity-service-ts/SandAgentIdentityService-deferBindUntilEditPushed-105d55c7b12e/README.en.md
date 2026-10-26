# `SandAgentIdentityService.deferBindUntilEditPushed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495967-495971](../../../../../../../reference/runtime/host-main.cjs#L495967-L495971) | `method` | no | `handle, hasLocalProfile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495967-495971](../../../../../../../reference/runtime/host-main.cjs#L495967-L495971) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:495967

Calls written directly in this body: `this.bindsAwaitingEdit.add`, `this.noteAgentIdentityChanged`, `this.unacknowledgedEditIds.add`.

SHA-256 of the source span: `d2728a2df437d858d62c4decda8a156cf3393e4804d573271b4bccc3c1c108dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

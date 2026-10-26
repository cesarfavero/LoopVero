# `SandAgentIdentityService.expectLocalEdit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495594-495609](../../../../../../../reference/runtime/host-main.cjs#L495594-L495609) | `method` | yes | `agentId, write4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495594-495609](../../../../../../../reference/runtime/host-main.cjs#L495594-L495609) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:495594

Calls written directly in this body: `this.bindsAwaitingEdit.delete`, `this.expectedEditCounts.delete`, `this.expectedEditCounts.get`, `this.expectedEditCounts.set`, `this.reconcileNow`, `write4`.

SHA-256 of the source span: `695c27153448fe02c620b2f40ec3b9ee04d121d242c17f4c83801b22c47d9ff0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

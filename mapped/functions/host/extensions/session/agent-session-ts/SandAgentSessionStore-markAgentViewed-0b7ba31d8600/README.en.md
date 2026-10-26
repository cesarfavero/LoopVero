# `SandAgentSessionStore.markAgentViewed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723462-723472](../../../../../../../reference/runtime/host-main.cjs#L723462-L723472) | `method` | no | `agentId, at3 = Date.now(), options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723462-723472](../../../../../../../reference/runtime/host-main.cjs#L723462-L723472) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:723462

Calls written directly in this body: `db.close`, `db.markViewed`, `getAgentDbPath`, `this.createAgentDb`.

Assignment or increment targets: `db`.

SHA-256 of the source span: `a1034f2f78956b5bdbc6cb9a6bc5af687d4d2960430c42642f9c8e7a35cc4eb7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

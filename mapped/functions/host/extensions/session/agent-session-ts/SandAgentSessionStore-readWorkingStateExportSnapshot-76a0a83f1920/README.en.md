# `SandAgentSessionStore.readWorkingStateExportSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723155-723188](../../../../../../../reference/runtime/host-main.cjs#L723155-L723188) | `method` | yes | `agentId, limits = {}, onProgress` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723155-723188](../../../../../../../reference/runtime/host-main.cjs#L723155-L723188) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:723155

Calls written directly in this body: `getAgentDbPath`, `this.agentExists`, `this.withAgentDb`.

SHA-256 of the source span: `a4bd8635431247e1782250987cb56f83a6c2d0b24e1cccfa37491169488f1713`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

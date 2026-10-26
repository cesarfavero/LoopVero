# `summarizeAgentById`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-roster.ts` · [Module README](../../../../../../modules/host/extensions/session/session-roster-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722990-723012](../../../../../../../reference/runtime/host-main.cjs#L722990-L723012) | `FunctionDeclaration` | yes | `host, agentId, activeAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722990-723012](../../../../../../../reference/runtime/host-main.cjs#L722990-L723012) | 3 | 0 | 4 | 4 | 0 | 0 |

### host:722990

Calls written directly in this body: `buildSummary`, `getAgentDbPath`, `host.isAgentBeingDeleted`, `host.loadCachedExtras`, `host.recoverAgentWithMissingDb`, `statIfExists`.

SHA-256 of the source span: `09e4e968dc215aff75957d294b1f17ab52237578af33fdcff199e97d95bac35f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `createServerAgentProxy/refreshRoster`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714585-714597](../../../../../../../reference/runtime/host-main.cjs#L714585-L714597) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714585-714597](../../../../../../../reference/runtime/host-main.cjs#L714585-L714597) | 1 | 2 | 0 | 0 | 0 | 0 |

### host:714585

Calls written directly in this body: `agents.filter`, `deps.listAgentsSync`, `indexer.noteAgent`, `knownAgents.add`, `knownAgents.clear`, `requiredAgents.add`, `requiredAgents.clear`.

SHA-256 of the source span: `09f7c0d9e9e6ee474086300d1e30040fee93f8fc9719bcea023ee4689307896c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

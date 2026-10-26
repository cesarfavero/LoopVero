# `SandMcpListingSummaries.createBoxServerSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-listing-summaries.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-listing-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688943-688979](../../../../../../../reference/runtime/host-main.cjs#L688943-L688979) | `method` | no | `server, box, boxDiscoveryUnavailable` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688943-688979](../../../../../../../reference/runtime/host-main.cjs#L688943-L688979) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:688943

Calls written directly in this body: `displayCommand`, `displayTransport`, `pluginAttributionFromDisplayServer`, `statusFromBoxListStatus`, `this.countEnabledTools`, `this.deps.isBoxExecWired`, `this.resolveServerCustomInstruction`, `unnamedMcpRowIdentifier`.

Assignment or increment targets: `enabledToolCount`.

SHA-256 of the source span: `7ddd9c5a1b7be97a7e2ddc84e93e911093adfc875dc74b1ad23f101d3709005b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `SandMcpManager.classifyRemoveOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689790-689800](../../../../../../../reference/runtime/host-main.cjs#L689790-L689800) | `method` | no | `serverId, state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689790-689800](../../../../../../../reference/runtime/host-main.cjs#L689790-L689800) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:689790

Calls written directly in this body: `state.servers.find`.

SHA-256 of the source span: `1aa5625c6513bd043982e1895ca012f4a46c13d6ff3f0c2ec12749f039afd8e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

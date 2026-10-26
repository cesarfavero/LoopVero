# `SandMcpListingSummaries.countEnabledTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-listing-summaries.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-listing-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688835-688841](../../../../../../../reference/runtime/host-main.cjs#L688835-L688841) | `method` | no | `serverId, tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688835-688841](../../../../../../../reference/runtime/host-main.cjs#L688835-L688841) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:688835

Calls written directly in this body: `.getMcpDisabledToolsByServerId`, `this.deps.settingsStore`, `tools.filter`.

SHA-256 of the source span: `1d4b1ae125ef4ac85b08bc76484c12f19321c356d93b0b687d3e700067849f79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

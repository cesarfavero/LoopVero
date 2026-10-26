# `SandMcpManager.listGrokBotAgentServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689636-689647](../../../../../../../reference/runtime/host-main.cjs#L689636-L689647) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689636-689647](../../../../../../../reference/runtime/host-main.cjs#L689636-L689647) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:689636

Calls written directly in this body: `isWithheldMcpDisplayServer`, `servers.push`, `this.loadGrokBotAgentServers`, `this.summaries.createCredentialPresenceSummaries`, `this.withheldSummaries`.

SHA-256 of the source span: `62fa5602a334b2a13237626e5c879352ef62211701bfbc65d0b436f23912f8f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

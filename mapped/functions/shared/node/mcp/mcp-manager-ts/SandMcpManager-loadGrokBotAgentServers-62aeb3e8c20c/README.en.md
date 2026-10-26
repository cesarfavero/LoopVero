# `SandMcpManager.loadGrokBotAgentServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689648-689657](../../../../../../../reference/runtime/host-main.cjs#L689648-L689657) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689648-689657](../../../../../../../reference/runtime/host-main.cjs#L689648-L689657) | 2 | 0 | 1 | 1 | 2 | 0 |

### host:689648

Calls written directly in this body: `new SandMcpConfigError`, `this.grokBotAgentServersProvider`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `52b307b381e4c87021234df9f1d12de02c80e35870632e3a5553660244487bfa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

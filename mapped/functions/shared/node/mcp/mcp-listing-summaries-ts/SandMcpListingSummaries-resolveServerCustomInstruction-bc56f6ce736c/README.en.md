# `SandMcpListingSummaries.resolveServerCustomInstruction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-listing-summaries.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-listing-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689004-689009](../../../../../../../reference/runtime/host-main.cjs#L689004-L689009) | `method` | no | `server` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689004-689009](../../../../../../../reference/runtime/host-main.cjs#L689004-L689009) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:689004

Calls written directly in this body: `.getRawMcpCustomInstruction`, `.getRawMcpCustomInstructionByServerId`, `resolveMcpCustomInstruction`, `this.deps.settingsStore`.

SHA-256 of the source span: `745f579dcfd6c91caa8665d9aedb209f7fae2a5f2ce62bba1990791421b7aa9d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

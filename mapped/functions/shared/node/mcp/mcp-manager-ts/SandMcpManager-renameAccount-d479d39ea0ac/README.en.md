# `SandMcpManager.renameAccount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689944-689946](../../../../../../../reference/runtime/host-main.cjs#L689944-L689946) | `method` | yes | `rawServerId, rawAccountKey, rawNewAccountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689944-689946](../../../../../../../reference/runtime/host-main.cjs#L689944-L689946) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:689944

Calls written directly in this body: `this.accountSlots.renameAccount`.

SHA-256 of the source span: `2cc779c80f76a44493c2056716d52f7676b1e884b5cb5c36a285ff77a0ae1255`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

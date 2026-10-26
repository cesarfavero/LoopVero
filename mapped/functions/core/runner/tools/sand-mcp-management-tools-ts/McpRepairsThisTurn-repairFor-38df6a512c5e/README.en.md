# `McpRepairsThisTurn.repairFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780175-780185](../../../../../../../reference/runtime/host-main.cjs#L780175-L780185) | `method` | no | `target` |
| [evaluation:580420-580430](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580420-L580430) | `method` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780175-780185](../../../../../../../reference/runtime/host-main.cjs#L780175-L780185) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:580420-580430](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580420-L580430) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:780175

Calls written directly in this body: `target.pluginIds.some`, `target.serverIds.some`.

SHA-256 of the source span: `9de2712742ee2113882baea2c56e275ffa7fa708cb67caf475d46d4c43940c3d`.

### evaluation:580420

Calls written directly in this body: `target.pluginIds.some`, `target.serverIds.some`.

SHA-256 of the source span: `9de2712742ee2113882baea2c56e275ffa7fa708cb67caf475d46d4c43940c3d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

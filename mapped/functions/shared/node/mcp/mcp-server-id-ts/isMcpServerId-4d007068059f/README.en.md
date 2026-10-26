# `isMcpServerId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-server-id.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-server-id-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685159-685161](../../../../../../../reference/runtime/host-main.cjs#L685159-L685161) | `FunctionDeclaration` | no | `rawId` |
| [evaluation:579382-579384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579382-L579384) | `FunctionDeclaration` | no | `rawId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685159-685161](../../../../../../../reference/runtime/host-main.cjs#L685159-L685161) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579382-579384](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579382-L579384) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:685159

Calls written directly in this body: `MCP_SERVER_ID_PATTERN.test`, `rawId.trim`.

SHA-256 of the source span: `e945c29af33f64c0e56fef687ba75eaed9e6b4df8135c96db2f0acb06abb3062`.

### evaluation:579382

Calls written directly in this body: `MCP_SERVER_ID_PATTERN.test`, `rawId.trim`.

SHA-256 of the source span: `e945c29af33f64c0e56fef687ba75eaed9e6b4df8135c96db2f0acb06abb3062`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

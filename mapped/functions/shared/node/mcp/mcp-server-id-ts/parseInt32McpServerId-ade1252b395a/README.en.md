# `parseInt32McpServerId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-server-id.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-server-id-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685186-685192](../../../../../../../reference/runtime/host-main.cjs#L685186-L685192) | `FunctionDeclaration` | no | `rawId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685186-685192](../../../../../../../reference/runtime/host-main.cjs#L685186-L685192) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:685186

Calls written directly in this body: `Number`, `isInt32McpServerId`, `new SandMcpConfigError`, `validateMcpServerId`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `eae0478fa0f608128017f016b38e7c8cbaaf7aa518f3d445a021d4d8042843d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

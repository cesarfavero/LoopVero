# `parseAccountMcpConfigJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/account-mcp.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690283-690291](../../../../../../../reference/runtime/host-main.cjs#L690283-L690291) | `FunctionDeclaration` | no | `json3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690283-690291](../../../../../../../reference/runtime/host-main.cjs#L690283-L690291) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:690283

Calls written directly in this body: `JSON.parse`, `json3.trim`, `mcpConfigSchema2.safeParse`.

SHA-256 of the source span: `61ef0ae205c29679cb5425db89d1db67c6223b60d270a6d03eb2b39c07066c40`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

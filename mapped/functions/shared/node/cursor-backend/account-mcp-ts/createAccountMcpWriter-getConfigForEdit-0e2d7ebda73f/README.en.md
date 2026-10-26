# `createAccountMcpWriter/getConfigForEdit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/account-mcp.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690579-690588](../../../../../../../reference/runtime/host-main.cjs#L690579-L690588) | `FunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690579-690588](../../../../../../../reference/runtime/host-main.cjs#L690579-L690588) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:690579

Calls written directly in this body: `.getMcpConfig`, `makeClient`, `new GetMcpConfigRequest`, `parseAccountMcpConfigJson`, `serverIdsByNameFromMetadata`.

SHA-256 of the source span: `e1cd8322c6628c5d7c97cf4408054b588fd2e5bec9012c60dd19db2dd92487af`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

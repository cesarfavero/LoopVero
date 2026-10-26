# `fetchAccountMcpServers/fetchStdioRuntimeConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/account-mcp.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690411-690414](../../../../../../../reference/runtime/host-main.cjs#L690411-L690414) | `ArrowFunctionExpression` | no | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690411-690414](../../../../../../../reference/runtime/host-main.cjs#L690411-L690414) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:690411 uses an implicit arrow-function return.

### host:690411

Calls written directly in this body: `.catch`, `client.getMcpConfig`.

SHA-256 of the source span: `b4011e979a631f4d64c46f2cdb5dd9bc831d6d39f1758a692ae34ba10963040f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

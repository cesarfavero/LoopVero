# `SandMcpManager.validateInstallableName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689713-689721](../../../../../../../reference/runtime/host-main.cjs#L689713-L689721) | `method` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689713-689721](../../../../../../../reference/runtime/host-main.cjs#L689713-L689721) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:689713

Calls written directly in this body: `BUILTIN_MCP_SERVER_NAMES.has`, `new SandMcpConfigError`, `validateServerName`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `097752b8433dd24ecc61f88577573aa0a8fb3a266cf487349f1bd2b0763b5dd0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

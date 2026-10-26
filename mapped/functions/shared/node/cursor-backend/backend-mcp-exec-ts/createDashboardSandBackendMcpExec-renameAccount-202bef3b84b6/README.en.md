# `createDashboardSandBackendMcpExec/renameAccount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487177-487186](../../../../../../../reference/runtime/host-main.cjs#L487177-L487186) | `FunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487177-487186](../../../../../../../reference/runtime/host-main.cjs#L487177-L487186) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:487177

Calls written directly in this body: `client.renameMcpOAuthAccount`, `new RenameMcpOAuthAccountRequest`.

SHA-256 of the source span: `575e84c1e215de0e5e109d9eb9b5c6d043e339fa821136fdda1c45e4a4d78ccb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

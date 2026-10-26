# `createDashboardSandBackendMcpExec/listTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486967-486993](../../../../../../../reference/runtime/host-main.cjs#L486967-L486993) | `FunctionExpression` | yes | `serverIdentifiers, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486967-486993](../../../../../../../reference/runtime/host-main.cjs#L486967-L486993) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:486967

Calls written directly in this body: `client.listSandMcpTools`, `errorLabel`, `new ListSandMcpToolsRequest`, `new SandBackendMcpExecError`, `reportMcpHostEdgeFailure`, `response.servers.map`.

Explicit throw targets: `SandBackendMcpExecError`.

SHA-256 of the source span: `64356bb727693e50d37ea3840ee57b8c768ff030f1f6c4a0b1cd1af67bf9094f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

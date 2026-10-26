# `createDashboardSandBackendMcpExec/checkAuthStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487062-487111](../../../../../../../reference/runtime/host-main.cjs#L487062-L487111) | `FunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487062-487111](../../../../../../../reference/runtime/host-main.cjs#L487062-L487111) | 12 | 0 | 1 | 1 | 2 | 1 |

### host:487062

Calls written directly in this body: `client.checkHttpMcpStatus`, `errorLabel`, `new CheckHttpMcpStatusRequest`, `new SandBackendMcpExecError`, `reportMcpHostEdgeFailure`, `response.statuses.find`.

Explicit throw targets: `SandBackendMcpExecError`.

SHA-256 of the source span: `84bad0582ddee1ff73c5ead62407a1ef8e75e0f047519af45941ba42698032bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `createDashboardSandBackendMcpExec/readResource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487026-487061](../../../../../../../reference/runtime/host-main.cjs#L487026-L487061) | `FunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487026-487061](../../../../../../../reference/runtime/host-main.cjs#L487026-L487061) | 3 | 0 | 1 | 4 | 0 | 1 |

### host:487026

Calls written directly in this body: `client.readSandMcpResource`, `errorLabel`, `mcpAppDocumentOverCap`, `new ReadSandMcpResourceRequest`, `reportMcpHostEdgeFailure`, `response.contents.map`, `response.contents.reduce`.

SHA-256 of the source span: `bd8f0bbe61b5e883021f2240fc4e4c9f5a6e469a6ab3a34623632c98531cf175`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

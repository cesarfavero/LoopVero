# `createSandMcpStateExecutor/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-state-executor.ts` · [Module README](../../../../../modules/core/mcp/mcp-state-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693467-693532](../../../../../../reference/runtime/host-main.cjs#L693467-L693532) | `FunctionExpression` | yes | `ctx, _args` |
| [evaluation:584704-584769](../../../../../../reference/runtime/sand-eval-runner.cjs#L584704-L584769) | `FunctionExpression` | yes | `ctx, _args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693467-693532](../../../../../../reference/runtime/host-main.cjs#L693467-L693532) | 6 | 3 | 1 | 1 | 0 | 0 |
| [evaluation:584704-584769](../../../../../../reference/runtime/sand-eval-runner.cjs#L584704-L584769) | 6 | 3 | 1 | 1 | 0 | 0 |

### host:693467

Calls written directly in this body: `.catch`, `.map`, `Promise.all`, `Promise.resolve`, `UNUSABLE_SERVER_STATUSES.has`, `existing.push`, `new Map`, `new McpStateExecResult`, `new McpStateSuccess`, `provider.getConnectorAuthStates`, `provider.getServerErrorMessages`, `provider.getServerStatuses`, `provider.getTools`, `statuses.get`, `statuses.set`, `toolsByServer.entries`, `toolsByServer.get`, `toolsByServer.has`, `toolsByServer.set`.

SHA-256 of the source span: `5f78eeedc0faff566530f582c925e4356f0535fe7836de7fa6d423c7fe53e5e2`.

### evaluation:584704

Calls written directly in this body: `.catch`, `.map`, `Promise.all`, `Promise.resolve`, `UNUSABLE_SERVER_STATUSES.has`, `existing.push`, `new Map`, `new McpStateExecResult`, `new McpStateSuccess`, `provider.getConnectorAuthStates`, `provider.getServerErrorMessages`, `provider.getServerStatuses`, `provider.getTools`, `statuses.get`, `statuses.set`, `toolsByServer.entries`, `toolsByServer.get`, `toolsByServer.has`, `toolsByServer.set`.

SHA-256 of the source span: `4705a767e83067ecbf5c68e8b0b0d362af1ef28077c743df3b6582e33bc55ce4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

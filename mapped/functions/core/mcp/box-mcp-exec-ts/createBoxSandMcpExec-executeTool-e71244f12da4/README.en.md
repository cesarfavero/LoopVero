# `createBoxSandMcpExec/executeTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684970-684993](../../../../../../reference/runtime/host-main.cjs#L684970-L684993) | `FunctionExpression` | yes | `ctx, args, options3` |
| [evaluation:514758-514781](../../../../../../reference/runtime/sand-eval-runner.cjs#L514758-L514781) | `FunctionExpression` | yes | `ctx, args, options3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684970-684993](../../../../../../reference/runtime/host-main.cjs#L684970-L684993) | 5 | 0 | 5 | 3 | 1 | 2 |
| [evaluation:514758-514781](../../../../../../reference/runtime/sand-eval-runner.cjs#L514758-L514781) | 5 | 0 | 5 | 3 | 1 | 2 |

### host:684970

Calls written directly in this body: `boxAgentMcpHost`, `boxLoadMcpServers`, `configOfServer`, `errorLabel2`, `errorResult3`, `execute`, `recordMcpExecErrorClass`, `repushOwnServerEntryBefore`, `reregister`, `stdioServerProcessExited`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `ccda28efb2b90b12d3d78a46e3eee6c3c0e3057e49f66e52323d9f140fb8cdbd`.

### evaluation:514758

Calls written directly in this body: `boxAgentMcpHost`, `boxLoadMcpServers`, `configOfServer`, `errorLabel`, `errorResult2`, `execute`, `recordMcpExecErrorClass`, `repushOwnServerEntryBefore`, `reregister`, `stdioServerProcessExited`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `b7411a514be5df6acf46991f83f120922a2d7a3294a619636ba65a58799ba74d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `createBoxSandMcpExec/listTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684924-684969](../../../../../../reference/runtime/host-main.cjs#L684924-L684969) | `FunctionExpression` | yes | `serverIdentifiers, options3` |
| [evaluation:514712-514757](../../../../../../reference/runtime/sand-eval-runner.cjs#L514712-L514757) | `FunctionExpression` | yes | `serverIdentifiers, options3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684924-684969](../../../../../../reference/runtime/host-main.cjs#L684924-L684969) | 2 | 0 | 2 | 1 | 1 | 0 |
| [evaluation:514712-514757](../../../../../../reference/runtime/sand-eval-runner.cjs#L514712-L514757) | 2 | 0 | 2 | 1 | 1 | 0 |

### host:684924

Calls written directly in this body: `.execute`, `.map`, `accessor.get`, `boxCtx.withCancel`, `boxMcpResourceAccessor`, `cancelList`, `giveUp`, `new McpStateExecArgs`, `new SandBoxMcpExecError`, `new Set`, `options3.signal.addEventListener`, `options3.signal.removeEventListener`, `result.result.value.servers.filter`.

Assignment or increment targets: `result`.

Explicit throw targets: `SandBoxMcpExecError`.

SHA-256 of the source span: `2883ce6d6ff6898bb4b9791d5d6eee151361685330c8fb8d25980ea980e615a2`.

### evaluation:514712

Calls written directly in this body: `.execute`, `.map`, `accessor.get`, `boxCtx.withCancel`, `boxMcpResourceAccessor`, `cancelList`, `giveUp`, `new McpStateExecArgs`, `new SandBoxMcpExecError`, `new Set`, `options3.signal.addEventListener`, `options3.signal.removeEventListener`, `result.result.value.servers.filter`.

Assignment or increment targets: `result`.

Explicit throw targets: `SandBoxMcpExecError`.

SHA-256 of the source span: `2883ce6d6ff6898bb4b9791d5d6eee151361685330c8fb8d25980ea980e615a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

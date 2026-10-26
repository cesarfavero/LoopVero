# `createBoxSandMcpExec/executeTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684980-684980](../../../../../../reference/runtime/host-main.cjs#L684980-L684980) | `ArrowFunctionExpression` | yes | `(none)` |
| [evaluation:514768-514768](../../../../../../reference/runtime/sand-eval-runner.cjs#L514768-L514768) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684980-684980](../../../../../../reference/runtime/host-main.cjs#L684980-L684980) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:684980 uses an implicit arrow-function return.
| [evaluation:514768-514768](../../../../../../reference/runtime/sand-eval-runner.cjs#L514768-L514768) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:514768 uses an implicit arrow-function return.

### host:684980

Calls written directly in this body: `.execute`, `.get`, `accessorOn`.

SHA-256 of the source span: `52a04bfa4395726ebb7ed22b3a7c8aeaff10947df5a74d7a25f69f96f1d588e7`.

### evaluation:514768

Calls written directly in this body: `.execute`, `.get`, `accessorOn`.

SHA-256 of the source span: `52a04bfa4395726ebb7ed22b3a7c8aeaff10947df5a74d7a25f69f96f1d588e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

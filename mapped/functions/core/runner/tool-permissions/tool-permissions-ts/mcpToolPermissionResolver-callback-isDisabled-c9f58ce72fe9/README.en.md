# `mcpToolPermissionResolver/<callback>/isDisabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-permissions/tool-permissions.ts` · [Module README](../../../../../../modules/core/runner/tool-permissions/tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:579331-579331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579331-L579331) | `ArrowFunctionExpression` | no | `toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579331-579331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579331-L579331) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:579331 uses an implicit arrow-function return.

### evaluation:579331

Calls written directly in this body: `mcp.isToolDisabled`.

SHA-256 of the source span: `02f7c173da49bbfaa2c9d4c7b0209358fc6ce479bf6324aae268349ea377e604`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

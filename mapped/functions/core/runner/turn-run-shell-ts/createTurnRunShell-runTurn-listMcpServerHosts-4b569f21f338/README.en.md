# `createTurnRunShell/runTurn/listMcpServerHosts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591807-591807](../../../../../../reference/runtime/sand-eval-runner.cjs#L591807-L591807) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591807-591807](../../../../../../reference/runtime/sand-eval-runner.cjs#L591807-L591807) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:591807 uses an implicit arrow-function return.

### evaluation:591807

Calls written directly in this body: `.listServerHosts`, `host.mcpManagement`, `new Map`.

SHA-256 of the source span: `f67e3fd4ab77d9e22864b8f6348ea6cb15a33f86b037e477a804d022890b97e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

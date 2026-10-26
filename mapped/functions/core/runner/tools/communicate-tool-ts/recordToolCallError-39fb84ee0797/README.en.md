# `recordToolCallError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725044-725057](../../../../../../../reference/runtime/host-main.cjs#L725044-L725057) | `FunctionDeclaration` | no | `ctx, toolName, visibility, error64` |
| [evaluation:480015-480028](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480015-L480028) | `FunctionDeclaration` | no | `ctx, toolName, visibility, error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725044-725057](../../../../../../../reference/runtime/host-main.cjs#L725044-L725057) | 0 | 0 | 0 | 0 | 0 | 1 |
| [evaluation:480015-480028](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480015-L480028) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:725044

Calls written directly in this body: `errorClassLabel`, `errorLogTag`, `process.stderr.write`, `toolCallErrors.increment`.

SHA-256 of the source span: `5840093f6cef053a05d18684d72ad8624b0d76e3bc0c95799a7ae302e3ce5dd6`.

### evaluation:480015

Calls written directly in this body: `errorClassLabel`, `errorLogTag`, `process.stderr.write`, `toolCallErrors.increment`.

SHA-256 of the source span: `e3677ef25c78239bda118a0c7c40300a0c32e671e2dc55b113169c1420e31f73`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

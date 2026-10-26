# `withLocalToolScope/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/tool-wrappers.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/tool-wrappers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:564555-564573](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564555-L564573) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:564555-564573](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564555-L564573) | 2 | 0 | 1 | 1 | 0 | 0 |

### evaluation:564555

Calls written directly in this body: `ctx.get`, `ctx.with`, `permission.completeScope`, `tool.execute`.

SHA-256 of the source span: `ea536b248a4079cab84c03b21c565c58b01282fc2aa50ce8617700f5dfeb6f6c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

# `createToolHandoff/wrapTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/tool-handoff.ts` · [Module README](../../../../../../modules/core/runner/tools/tool-handoff-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:569325-569337](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569325-L569337) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569325-569337](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569325-L569337) | 1 | 0 | 1 | 1 | 1 | 0 |

### evaluation:569325

Calls written directly in this body: `active.add`, `active.delete`, `cancel`, `ctx.signal.throwIfAborted`, `ctx.withCancel`, `new ToolCallAbortedError`, `tool.execute`.

Explicit throw targets: `ToolCallAbortedError`.

SHA-256 of the source span: `7846b145bd4c0d0804d38b4050bbac38a0264119a3351868914460b6bd18de53`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

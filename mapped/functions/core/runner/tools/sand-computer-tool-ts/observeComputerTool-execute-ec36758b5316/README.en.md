# `observeComputerTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777532-777558](../../../../../../../reference/runtime/host-main.cjs#L777532-L777558) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |
| [evaluation:577177-577203](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577177-L577203) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777532-777558](../../../../../../../reference/runtime/host-main.cjs#L777532-L777558) | 0 | 0 | 1 | 1 | 0 | 1 |
| [evaluation:577177-577203](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577177-L577203) | 0 | 0 | 1 | 1 | 0 | 1 |

### host:777532

Calls written directly in this body: `__callDispose`, `__using`, `interactionHandler.getAbortSignal`, `new ComputerOperationObservation`, `observation.run`, `startComputerUseSpan`.

SHA-256 of the source span: `a318437319365c7d5a2c0043c719e24e16dbcaf08407547ee8fb35589a764fce`.

### evaluation:577177

Calls written directly in this body: `__callDispose`, `__using`, `interactionHandler.getAbortSignal`, `new ComputerOperationObservation`, `observation.run`, `startComputerUseSpan`.

SHA-256 of the source span: `a318437319365c7d5a2c0043c719e24e16dbcaf08407547ee8fb35589a764fce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

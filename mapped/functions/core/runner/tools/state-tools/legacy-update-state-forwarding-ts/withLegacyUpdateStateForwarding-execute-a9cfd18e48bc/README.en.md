# `withLegacyUpdateStateForwarding/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/legacy-update-state-forwarding.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/legacy-update-state-forwarding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555739-555782](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555739-L555782) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555739-555782](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555739-L555782) | 6 | 0 | 3 | 2 | 3 | 0 |

### evaluation:555739

Calls written directly in this body: `JSON.stringify`, `legacyNameOf`, `memoryTool.execute`, `oneShot`, `parseLegacyArgs`, `readArgs`, `recordForwarded`, `refuse`, `splitStateToolForTarget`, `splitTool.execute`, `toolsByName.get`.

Explicit throw targets: `refuse`.

SHA-256 of the source span: `e7a3b7195b466b6535b37edf029f4627f71b0b7c5017458876619721d6066c48`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

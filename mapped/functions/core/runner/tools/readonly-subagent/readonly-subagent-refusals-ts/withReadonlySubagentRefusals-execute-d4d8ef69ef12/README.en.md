# `withReadonlySubagentRefusals/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/readonly-subagent/readonly-subagent-refusals.ts` · [Module README](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-refusals-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582566-582573](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582566-L582573) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582566-582573](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582566-L582573) | 1 | 0 | 1 | 1 | 1 | 0 |

### evaluation:582566

Calls written directly in this body: `carrier.execute`, `new ToolCallUnexpectedEnvironmentError`, `readonlySubagentRefusals.increment`, `readonlySubagentToolRefusal`, `refused4.has`.

Explicit throw targets: `ToolCallUnexpectedEnvironmentError`.

SHA-256 of the source span: `95ed13f4f810e4db56425471693a29aedcfd889adc61ba50ea79c1631fc0f2c0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

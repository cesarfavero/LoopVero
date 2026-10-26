# `routine.delete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763000-763005](../../../../../../../reference/runtime/host-main.cjs#L763000-L763005) | `ArrowFunctionExpression` | yes | `args, deps, need` |
| [evaluation:555610-555615](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555610-L555615) | `ArrowFunctionExpression` | yes | `args, deps, need` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763000-763005](../../../../../../../reference/runtime/host-main.cjs#L763000-L763005) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:555610-555615](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555610-L555615) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:763000

Calls written directly in this body: `deps.state.deleteAutomation`, `need`, `refuseUnreviewableAutomationRemoval`.

SHA-256 of the source span: `4399ff266139322400f6334b5fb303c5ac847d700cfb50e19de5710555852e77`.

### evaluation:555610

Calls written directly in this body: `deps.state.deleteAutomation`, `need`, `refuseUnreviewableAutomationRemoval`.

SHA-256 of the source span: `4399ff266139322400f6334b5fb303c5ac847d700cfb50e19de5710555852e77`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

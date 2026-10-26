# `createWakeParentTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/wake-parent/wake-parent-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/wake-parent/wake-parent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768638-768644](../../../../../../../../reference/runtime/host-main.cjs#L768638-L768644) | `ArrowFunctionExpression` | yes | `_ctx, args, toolDeps` |
| [evaluation:564153-564159](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564153-L564159) | `ArrowFunctionExpression` | yes | `_ctx, args, toolDeps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768638-768644](../../../../../../../../reference/runtime/host-main.cjs#L768638-L768644) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564153-564159](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564153-L564159) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768638

Calls written directly in this body: `toolDeps.requestAutomationParentWake`.

SHA-256 of the source span: `393961951fbcec8d0a7c7d44dae7434f276f021c278e8e117e3c0828ea8e140c`.

### evaluation:564153

Calls written directly in this body: `toolDeps.requestAutomationParentWake`.

SHA-256 of the source span: `393961951fbcec8d0a7c7d44dae7434f276f021c278e8e117e3c0828ea8e140c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

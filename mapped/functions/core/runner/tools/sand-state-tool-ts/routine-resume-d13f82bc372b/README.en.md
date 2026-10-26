# `routine.resume`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762985-762999](../../../../../../../reference/runtime/host-main.cjs#L762985-L762999) | `ArrowFunctionExpression` | yes | `args, deps, need` |
| [evaluation:555595-555609](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555595-L555609) | `ArrowFunctionExpression` | yes | `args, deps, need` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762985-762999](../../../../../../../reference/runtime/host-main.cjs#L762985-L762999) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:555595-555609](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555595-L555609) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:762985

Calls written directly in this body: `deps.canCreateAutomation`, `deps.canReviewAutomationWrites`, `writeAutomation`.

SHA-256 of the source span: `ac0a30f1e23de778f45554f00eb772f18417ebd13d969f7e78678c46e63acffc`.

### evaluation:555595

Calls written directly in this body: `deps.canCreateAutomation`, `deps.canReviewAutomationWrites`, `writeAutomation`.

SHA-256 of the source span: `ac0a30f1e23de778f45554f00eb772f18417ebd13d969f7e78678c46e63acffc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

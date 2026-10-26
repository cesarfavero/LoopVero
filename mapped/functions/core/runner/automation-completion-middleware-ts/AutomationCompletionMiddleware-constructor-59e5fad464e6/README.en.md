# `AutomationCompletionMiddleware.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/automation-completion-middleware.ts` · [Module README](../../../../../modules/core/runner/automation-completion-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586355-586359](../../../../../../reference/runtime/sand-eval-runner.cjs#L586355-L586359) | `method` | no | `innerExecutor, source, isRenamedSpelling` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586355-586359](../../../../../../reference/runtime/sand-eval-runner.cjs#L586355-L586359) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:586355

Calls written directly in this body: `super`.

Assignment or increment targets: `this.isRenamedSpelling`, `this.source`.

SHA-256 of the source span: `581018d1ca582bd09e17b25c761f07f0813f0ce318fe2f17afc356e3b4177db5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

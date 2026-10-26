# `DecisionRecordingClassifierExecutor.execute/refuseAtTheCancelNotTheSettle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489999-490003](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489999-L490003) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489999-490003](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489999-L490003) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489999

Calls written directly in this body: `record4`.

Assignment or increment targets: `refusedOnce`.

SHA-256 of the source span: `8532fec59498a376c8a1d48c2869b60641291220b044770f59b9b3d185b3181e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

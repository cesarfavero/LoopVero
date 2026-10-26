# `startRunCodeReadOnlyReview/begin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only-review.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750307-750309](../../../../../../../../reference/runtime/host-main.cjs#L750307-L750309) | `FunctionExpression` | no | `(none)` |
| [evaluation:523158-523160](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523158-L523160) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750307-750309](../../../../../../../../reference/runtime/host-main.cjs#L750307-L750309) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:523158-523160](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523158-L523160) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:750307

Calls written directly in this body: `now`.

Assignment or increment targets: `startedAt`.

SHA-256 of the source span: `ff9b32c2a7a0670c320d1becee194913147e31504490ef51a70beccda396eafe`.

### evaluation:523158

Calls written directly in this body: `now`.

Assignment or increment targets: `startedAt`.

SHA-256 of the source span: `ff9b32c2a7a0670c320d1becee194913147e31504490ef51a70beccda396eafe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

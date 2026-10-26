# `startRunCodeReadOnlyReview/observePhase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only-review.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750310-750319](../../../../../../../../reference/runtime/host-main.cjs#L750310-L750319) | `FunctionExpression` | no | `record3` |
| [evaluation:523161-523170](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523161-L523170) | `FunctionExpression` | no | `record4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750310-750319](../../../../../../../../reference/runtime/host-main.cjs#L750310-L750319) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523161-523170](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523161-L523170) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:750310

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `approvalMs`, `asked`, `classifierFailed`.

SHA-256 of the source span: `f05de9af8caf6ee744cc2758736a101f2f8be817fe8ec8b77fa329f42ee79901`.

### evaluation:523161

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `approvalMs`, `asked`, `classifierFailed`.

SHA-256 of the source span: `12ccac7c5739523a631e2fa6309f72c0b51be422124e736bfe76c7e00bba7d29`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

# `humanOnlyReviewLedger/cardShown`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699208-699209](../../../../../../../reference/runtime/host-main.cjs#L699208-L699209) | `ArrowFunctionExpression` | no | `(none)` |
| [host:699216-699219](../../../../../../../reference/runtime/host-main.cjs#L699216-L699219) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:489940-489941](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489940-L489941) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:489948-489951](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489948-L489951) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699208-699209](../../../../../../../reference/runtime/host-main.cjs#L699208-L699209) | 0 | 0 | 0 | 0 | 0 | 0 |
| [host:699216-699219](../../../../../../../reference/runtime/host-main.cjs#L699216-L699219) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489940-489941](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489940-L489941) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489948-489951](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489948-L489951) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:699208

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d8c7ff76b38a6ba1f0dfd0cae507faf3b110de37901ad7d18c725ff3358b6176`.

### host:699216

Calls written directly in this body: `audit.askAPerson`.

Assignment or increment targets: `askedAPerson`.

SHA-256 of the source span: `1412d1d11324b997991693104f46b9077bac67d640db22c06f4b2727003e819a`.

### evaluation:489940

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d8c7ff76b38a6ba1f0dfd0cae507faf3b110de37901ad7d18c725ff3358b6176`.

### evaluation:489948

Calls written directly in this body: `audit.askAPerson`.

Assignment or increment targets: `askedAPerson`.

SHA-256 of the source span: `1412d1d11324b997991693104f46b9077bac67d640db22c06f4b2727003e819a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

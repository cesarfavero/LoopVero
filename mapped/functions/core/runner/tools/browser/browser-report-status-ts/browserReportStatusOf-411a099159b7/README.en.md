# `browserReportStatusOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/browser-report-status.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/browser-report-status-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535204-535218](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L535204-L535218) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535204-535218](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L535204-L535218) | 5 | 1 | 0 | 2 | 0 | 0 |

### evaluation:535204

Calls written directly in this body: `FENCE2.exec`, `NOT_TOP_LEVEL.test`, `STATUS_LINE.exec`, `[computed].toLowerCase`, `report.split`.

Assignment or increment targets: `openFence`.

SHA-256 of the source span: `01b5a7a286a2271f5379170eee8efac038be207c945b27c1caceea7f117a416a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

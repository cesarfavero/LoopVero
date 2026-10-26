# `classifyCronTime`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682781-682850](../../../../../../reference/runtime/host-main.cjs#L682781-L682850) | `FunctionDeclaration` | no | `matcher` |
| [evaluation:527005-527074](../../../../../../reference/runtime/sand-eval-runner.cjs#L527005-L527074) | `FunctionDeclaration` | no | `matcher` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682781-682850](../../../../../../reference/runtime/host-main.cjs#L682781-L682850) | 14 | 0 | 0 | 13 | 0 | 0 |
| [evaluation:527005-527074](../../../../../../reference/runtime/sand-eval-runner.cjs#L527005-L527074) | 14 | 0 | 0 | 13 | 0 | 0 |

### host:682781

Calls written directly in this body: `ascending`, `hours.map`, `minuteIntervalOf`, `minutes.map`, `uniformStride`.

Assignment or increment targets: `every`.

SHA-256 of the source span: `b4308e1565b5960f14a5a3c498a30d42fe621fd291aa8b6d7d4ac437249d3d79`.

### evaluation:527005

Calls written directly in this body: `ascending`, `hours.map`, `minuteIntervalOf`, `minutes.map`, `uniformStride`.

Assignment or increment targets: `every`.

SHA-256 of the source span: `b4308e1565b5960f14a5a3c498a30d42fe621fd291aa8b6d7d4ac437249d3d79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

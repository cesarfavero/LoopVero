# `describeCronMatcher`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682867-682874](../../../../../../reference/runtime/host-main.cjs#L682867-L682874) | `FunctionDeclaration` | no | `matcher, forDisplay` |
| [evaluation:527091-527098](../../../../../../reference/runtime/sand-eval-runner.cjs#L527091-L527098) | `FunctionDeclaration` | no | `matcher, forDisplay` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682867-682874](../../../../../../reference/runtime/host-main.cjs#L682867-L682874) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:527091-527098](../../../../../../reference/runtime/sand-eval-runner.cjs#L527091-L527098) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:682867

Calls written directly in this body: `DISPLAY_ONLY_DAY_KINDS.has`, `classifyCronDays`, `classifyCronTime`, `describeCronTime`, `englishCronDays`.

SHA-256 of the source span: `37335cc84f4f0983f9f2a4752db156b2c77d6b66f954670932a963af9b2ec042`.

### evaluation:527091

Calls written directly in this body: `DISPLAY_ONLY_DAY_KINDS.has`, `classifyCronDays`, `classifyCronTime`, `describeCronTime`, `englishCronDays`.

SHA-256 of the source span: `37335cc84f4f0983f9f2a4752db156b2c77d6b66f954670932a963af9b2ec042`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

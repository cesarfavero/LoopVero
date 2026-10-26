# `triggerSchedule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automations.ts` · [Module README](../../../../../modules/shared/automations/automations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485507-485509](../../../../../../reference/runtime/host-main.cjs#L485507-L485509) | `FunctionDeclaration` | no | `trigger2` |
| [evaluation:475237-475239](../../../../../../reference/runtime/sand-eval-runner.cjs#L475237-L475239) | `FunctionDeclaration` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485507-485509](../../../../../../reference/runtime/host-main.cjs#L485507-L485509) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475237-475239](../../../../../../reference/runtime/sand-eval-runner.cjs#L475237-L475239) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485507

Calls written directly in this body: `triggerCronSchedules`.

SHA-256 of the source span: `4f1d3f28505177f7477e2d40e9e1c0f33e6ba2b4fdd1d06a75b110ef72391455`.

### evaluation:475237

Calls written directly in this body: `triggerCronSchedules`.

SHA-256 of the source span: `57942563c3180b4fefc9a2d41a2f83983b1775e846832f5a1fa468936461a882`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `describeCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-write-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-write-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759378-759381](../../../../../../reference/runtime/host-main.cjs#L759378-L759381) | `ArrowFunctionExpression` | no | `input2` |
| [evaluation:549538-549541](../../../../../../reference/runtime/sand-eval-runner.cjs#L549538-L549541) | `ArrowFunctionExpression` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759378-759381](../../../../../../reference/runtime/host-main.cjs#L759378-L759381) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549538-549541](../../../../../../reference/runtime/sand-eval-runner.cjs#L549538-L549541) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:759378

Calls written directly in this body: `describeWriteCalendar`, `writeCalendarParameters.safeParse`.

SHA-256 of the source span: `ab7f37bb4a6efb3e49642742fedccf9ce06add665dac3e22a5799f971ebbb02f`.

### evaluation:549538

Calls written directly in this body: `describeWriteCalendar`, `writeCalendarParameters.safeParse`.

SHA-256 of the source span: `317fe7f51a067609f7333bf16ecd4464156f72f365af2364ca194a56f0a97369`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

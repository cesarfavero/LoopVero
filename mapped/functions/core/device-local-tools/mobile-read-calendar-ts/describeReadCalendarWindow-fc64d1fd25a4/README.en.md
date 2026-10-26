# `describeReadCalendarWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-read-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-read-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759155-759172](../../../../../../reference/runtime/host-main.cjs#L759155-L759172) | `FunctionDeclaration` | no | `{   from: from2,   to: to3 }` |
| [evaluation:549315-549332](../../../../../../reference/runtime/sand-eval-runner.cjs#L549315-L549332) | `FunctionDeclaration` | no | `{   from: from2,   to: to3 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759155-759172](../../../../../../reference/runtime/host-main.cjs#L759155-L759172) | 6 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:549315-549332](../../../../../../reference/runtime/sand-eval-runner.cjs#L549315-L549332) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:759155

Calls written directly in this body: `Math.min`, `calendarDayOf`, `dayOfMs`, `writtenClockAsUtcMs`.

SHA-256 of the source span: `4ee519caea05f49a675dd2c74ac9f3d27e71a0669d8726e29d27a3a1a9cf1962`.

### evaluation:549315

Calls written directly in this body: `Math.min`, `calendarDayOf`, `dayOfMs`, `writtenClockAsUtcMs`.

SHA-256 of the source span: `9727cae1fd6220177858be80801d211309d3598946f8a26112ab3c2a644cd00b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

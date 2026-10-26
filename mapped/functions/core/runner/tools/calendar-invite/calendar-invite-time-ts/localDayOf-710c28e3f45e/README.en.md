# `localDayOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [Module README](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763969-763976](../../../../../../../../reference/runtime/host-main.cjs#L763969-L763976) | `FunctionDeclaration` | no | `instantMs, timeZone` |
| [evaluation:557343-557350](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557343-L557350) | `FunctionDeclaration` | no | `instantMs, timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763969-763976](../../../../../../../../reference/runtime/host-main.cjs#L763969-L763976) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557343-557350](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557343-L557350) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763969

Calls written directly in this body: `midnightMs`, `wallClockOfInstant`.

SHA-256 of the source span: `a38844cc31126384dd19a933289889316eb03d5adfe217a4a5a7ef4724d6a9c8`.

### evaluation:557343

Calls written directly in this body: `midnightMs`, `wallClockOfInstant`.

SHA-256 of the source span: `a38844cc31126384dd19a933289889316eb03d5adfe217a4a5a7ef4724d6a9c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

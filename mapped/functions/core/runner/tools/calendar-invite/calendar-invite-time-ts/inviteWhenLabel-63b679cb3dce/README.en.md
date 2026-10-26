# `inviteWhenLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [Module README](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763977-763992](../../../../../../../../reference/runtime/host-main.cjs#L763977-L763992) | `FunctionDeclaration` | no | `times, timeZone` |
| [evaluation:557351-557366](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557351-L557366) | `FunctionDeclaration` | no | `times, timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763977-763992](../../../../../../../../reference/runtime/host-main.cjs#L763977-L763992) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557351-557366](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557351-L557366) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:763977

Calls written directly in this body: `.format`, `new Intl.DateTimeFormat`, `wallClockOfInstant`.

SHA-256 of the source span: `91b350705cba24e432e813535b4bea3fb7702725bba619c82870cf6aaa57127e`.

### evaluation:557351

Calls written directly in this body: `.format`, `new Intl.DateTimeFormat`, `wallClockOfInstant`.

SHA-256 of the source span: `91b350705cba24e432e813535b4bea3fb7702725bba619c82870cf6aaa57127e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

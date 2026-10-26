# `midnightMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [Module README](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764003-764006](../../../../../../../../reference/runtime/host-main.cjs#L764003-L764006) | `FunctionDeclaration` | no | `date6, timeZone` |
| [evaluation:557377-557380](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557377-L557380) | `FunctionDeclaration` | no | `date6, timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764003-764006](../../../../../../../../reference/runtime/host-main.cjs#L764003-L764006) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557377-557380](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557377-L557380) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764003

Calls written directly in this body: `Date.UTC`, `zoneOffsetMs`.

SHA-256 of the source span: `84e8c46130f644ca301234a009e0ada1d8aa3a5cc47d5d699ca39850f1c94b58`.

### evaluation:557377

Calls written directly in this body: `Date.UTC`, `zoneOffsetMs`.

SHA-256 of the source span: `84e8c46130f644ca301234a009e0ada1d8aa3a5cc47d5d699ca39850f1c94b58`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

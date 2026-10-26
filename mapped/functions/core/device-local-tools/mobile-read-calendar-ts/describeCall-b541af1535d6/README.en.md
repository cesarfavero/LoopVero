# `describeCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-read-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-read-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759184-759187](../../../../../../reference/runtime/host-main.cjs#L759184-L759187) | `ArrowFunctionExpression` | no | `input2` |
| [evaluation:549344-549347](../../../../../../reference/runtime/sand-eval-runner.cjs#L549344-L549347) | `ArrowFunctionExpression` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759184-759187](../../../../../../reference/runtime/host-main.cjs#L759184-L759187) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549344-549347](../../../../../../reference/runtime/sand-eval-runner.cjs#L549344-L549347) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:759184

Calls written directly in this body: `describeReadCalendarWindow`, `readCalendarParameters.safeParse`.

SHA-256 of the source span: `136e9caba2611b5057a79b8cee6c3dff7dba59f0b3bf7e3c5df80ba6a0e6e480`.

### evaluation:549344

Calls written directly in this body: `describeReadCalendarWindow`, `readCalendarParameters.safeParse`.

SHA-256 of the source span: `22eb94f467d647032b909dc1c704f8a4d2c98225071d29a8282c0290a04655e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `isRealCalendarDay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-read-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-read-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759105-759111](../../../../../../reference/runtime/host-main.cjs#L759105-L759111) | `FunctionDeclaration` | no | `value` |
| [evaluation:549265-549271](../../../../../../reference/runtime/sand-eval-runner.cjs#L549265-L549271) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759105-759111](../../../../../../reference/runtime/host-main.cjs#L759105-L759111) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549265-549271](../../../../../../reference/runtime/sand-eval-runner.cjs#L549265-L549271) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:759105

Calls written directly in this body: `CALENDAR_DAY_PREFIX.exec`, `Date.UTC`, `Number`, `date6.getUTCDate`, `date6.getUTCMonth`, `new Date`.

SHA-256 of the source span: `c002f7eec85113d04d670b26b48b05170960d5b7f630ef13fa19ba1b7099a7c5`.

### evaluation:549265

Calls written directly in this body: `CALENDAR_DAY_PREFIX.exec`, `Date.UTC`, `Number`, `date6.getUTCDate`, `date6.getUTCMonth`, `new Date`.

SHA-256 of the source span: `c002f7eec85113d04d670b26b48b05170960d5b7f630ef13fa19ba1b7099a7c5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

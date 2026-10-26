# `spanText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-write-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-write-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759286-759289](../../../../../../reference/runtime/host-main.cjs#L759286-L759289) | `FunctionDeclaration` | no | `{ start, end }` |
| [evaluation:549446-549449](../../../../../../reference/runtime/sand-eval-runner.cjs#L549446-L549449) | `FunctionDeclaration` | no | `{ start, end }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759286-759289](../../../../../../reference/runtime/host-main.cjs#L759286-L759289) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549446-549449](../../../../../../reference/runtime/sand-eval-runner.cjs#L549446-L549449) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:759286

Calls written directly in this body: `isAllDay`, `timeText`.

SHA-256 of the source span: `7386941996ceb385f5103597a8c990f0274fd3e4976a079798414c29a2abe0eb`.

### evaluation:549446

Calls written directly in this body: `isAllDay`, `timeText`.

SHA-256 of the source span: `7386941996ceb385f5103597a8c990f0274fd3e4976a079798414c29a2abe0eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

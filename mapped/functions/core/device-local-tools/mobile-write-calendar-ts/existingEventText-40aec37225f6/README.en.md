# `existingEventText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-write-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-write-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759290-759297](../../../../../../reference/runtime/host-main.cjs#L759290-L759297) | `FunctionDeclaration` | no | `{   currentTitle,   currentStart }` |
| [evaluation:549450-549457](../../../../../../reference/runtime/sand-eval-runner.cjs#L549450-L549457) | `FunctionDeclaration` | no | `{   currentTitle,   currentStart }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759290-759297](../../../../../../reference/runtime/host-main.cjs#L759290-L759297) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549450-549457](../../../../../../reference/runtime/sand-eval-runner.cjs#L549450-L549457) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:759290

Calls written directly in this body: `isAllDay`, `isBlank`, `timeText`.

SHA-256 of the source span: `0dbae27c6c07356a3613495bbd51ecfe3a93cd2a92b50411b8782d1280984172`.

### evaluation:549450

Calls written directly in this body: `isAllDay`, `isBlank`, `timeText`.

SHA-256 of the source span: `0dbae27c6c07356a3613495bbd51ecfe3a93cd2a92b50411b8782d1280984172`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

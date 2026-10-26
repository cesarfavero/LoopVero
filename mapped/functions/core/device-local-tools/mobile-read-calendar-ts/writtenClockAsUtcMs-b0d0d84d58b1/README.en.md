# `writtenClockAsUtcMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-read-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-read-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759146-759150](../../../../../../reference/runtime/host-main.cjs#L759146-L759150) | `FunctionDeclaration` | no | `value, bound` |
| [evaluation:549306-549310](../../../../../../reference/runtime/sand-eval-runner.cjs#L549306-L549310) | `FunctionDeclaration` | no | `value, bound` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759146-759150](../../../../../../reference/runtime/host-main.cjs#L759146-L759150) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549306-549310](../../../../../../reference/runtime/sand-eval-runner.cjs#L549306-L549310) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:759146

Calls written directly in this body: `Date.parse`, `Number.isNaN`, `boundFormOf`, `value.replace`.

SHA-256 of the source span: `b6a7743b6ecf2614e415d19246273e5ae1508965ae10b5c2ff47e0ab07042ff8`.

### evaluation:549306

Calls written directly in this body: `Date.parse`, `Number.isNaN`, `boundFormOf`, `value.replace`.

SHA-256 of the source span: `c0447b8c7685d73a5e1dafa3ebc70123dce85bac28e5ec3602b8da2bc457f2c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

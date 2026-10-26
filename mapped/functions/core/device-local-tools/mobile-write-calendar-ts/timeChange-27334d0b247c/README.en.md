# `timeChange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-write-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-write-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759329-759334](../../../../../../reference/runtime/host-main.cjs#L759329-L759334) | `FunctionDeclaration` | no | `{ start, end }` |
| [evaluation:549489-549494](../../../../../../reference/runtime/sand-eval-runner.cjs#L549489-L549494) | `FunctionDeclaration` | no | `{ start, end }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759329-759334](../../../../../../reference/runtime/host-main.cjs#L759329-L759334) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:549489-549494](../../../../../../reference/runtime/sand-eval-runner.cjs#L549489-L549494) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:759329

Calls written directly in this body: `spanText`, `timeText`.

SHA-256 of the source span: `c16edc764326c7a7fb9b822ea0b67a965fddcd296a05695a84aa3e0475969731`.

### evaluation:549489

Calls written directly in this body: `spanText`, `timeText`.

SHA-256 of the source span: `c16edc764326c7a7fb9b822ea0b67a965fddcd296a05695a84aa3e0475969731`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

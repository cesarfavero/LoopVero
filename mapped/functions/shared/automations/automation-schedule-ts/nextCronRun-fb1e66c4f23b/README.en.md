# `nextCronRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682430-682456](../../../../../../reference/runtime/host-main.cjs#L682430-L682456) | `FunctionDeclaration` | no | `matcher, afterMs, wallClockOf` |
| [evaluation:526644-526670](../../../../../../reference/runtime/sand-eval-runner.cjs#L526644-L526670) | `FunctionDeclaration` | no | `matcher, afterMs, wallClockOf` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682430-682456](../../../../../../reference/runtime/host-main.cjs#L682430-L682456) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:526644-526670](../../../../../../reference/runtime/sand-eval-runner.cjs#L526644-L526670) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:682430

Calls written directly in this body: `Math.floor`, `Math.min`, `cronDayMatches`, `cronMatchesWallClock`, `isSameWallClockDay`, `new Date`, `wallClockOf`.

Assignment or increment targets: `cursorMs`.

SHA-256 of the source span: `304d10ce7243262afeaa7cf11c5905c9995aa26f08ce004684a0cc0b47e95f68`.

### evaluation:526644

Calls written directly in this body: `Math.floor`, `Math.min`, `cronDayMatches`, `cronMatchesWallClock`, `isSameWallClockDay`, `new Date`, `wallClockOf`.

Assignment or increment targets: `cursorMs`.

SHA-256 of the source span: `b8017bbe5ba1e19d04bd2e23a835c4b8d7d573313108cb8eb5a081c95e1e13b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

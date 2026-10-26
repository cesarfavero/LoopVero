# `cronMatchesWallClock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682364-682368](../../../../../../reference/runtime/host-main.cjs#L682364-L682368) | `FunctionDeclaration` | no | `matcher, wall` |
| [evaluation:526578-526582](../../../../../../reference/runtime/sand-eval-runner.cjs#L526578-L526582) | `FunctionDeclaration` | no | `matcher, wall` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682364-682368](../../../../../../reference/runtime/host-main.cjs#L682364-L682368) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:526578-526582](../../../../../../reference/runtime/sand-eval-runner.cjs#L526578-L526582) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:682364

Calls written directly in this body: `cronDayMatches`, `matcher.hour.has`, `matcher.minute.has`.

SHA-256 of the source span: `68d920ac1eb4d6b6a05932c433763bd9d0831aa614ee402d597d7fa3df098867`.

### evaluation:526578

Calls written directly in this body: `cronDayMatches`, `matcher.hour.has`, `matcher.minute.has`.

SHA-256 of the source span: `68d920ac1eb4d6b6a05932c433763bd9d0831aa614ee402d597d7fa3df098867`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

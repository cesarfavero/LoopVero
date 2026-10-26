# `_MeetingRepeatValues.isEveryWeekday`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-repeat-values.ts` · [Module README](../../../../../modules/shared/meetings/meeting-repeat-values-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:694004-694007](../../../../../../reference/runtime/host-main.cjs#L694004-L694007) | `method` | no | `days` |
| [evaluation:490075-490078](../../../../../../reference/runtime/sand-eval-runner.cjs#L490075-L490078) | `method` | no | `days` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:694004-694007](../../../../../../reference/runtime/host-main.cjs#L694004-L694007) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490075-490078](../../../../../../reference/runtime/sand-eval-runner.cjs#L490075-L490078) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:694004

Calls written directly in this body: `workweek.every`.

SHA-256 of the source span: `c7639ba7d6aeb83e0756e6eec2e787b658bef450d2127b5ec75061a90f780daf`.

### evaluation:490075

Calls written directly in this body: `workweek.every`.

SHA-256 of the source span: `c7639ba7d6aeb83e0756e6eec2e787b658bef450d2127b5ec75061a90f780daf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

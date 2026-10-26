# `_MeetingRepeatValues.isTimeZone`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-repeat-values.ts` · [Module README](../../../../../modules/shared/meetings/meeting-repeat-values-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693995-694003](../../../../../../reference/runtime/host-main.cjs#L693995-L694003) | `method` | no | `timezone` |
| [evaluation:490066-490074](../../../../../../reference/runtime/sand-eval-runner.cjs#L490066-L490074) | `method` | no | `timezone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693995-694003](../../../../../../reference/runtime/host-main.cjs#L693995-L694003) | 1 | 0 | 0 | 2 | 1 | 1 |
| [evaluation:490066-490074](../../../../../../reference/runtime/sand-eval-runner.cjs#L490066-L490074) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:693995

Calls written directly in this body: `new Intl.DateTimeFormat`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `f86bb991a3f40b158d76458ae194796d8bb6af625539ceeaf01f4908b0167299`.

### evaluation:490066

Calls written directly in this body: `new Intl.DateTimeFormat`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `624be99208479e314bc77200a331cf895a38f83d5667bde31fc8f7797d78e42e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

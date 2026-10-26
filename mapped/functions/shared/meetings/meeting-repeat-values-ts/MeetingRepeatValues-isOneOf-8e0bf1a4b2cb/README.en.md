# `_MeetingRepeatValues.isOneOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-repeat-values.ts` · [Module README](../../../../../modules/shared/meetings/meeting-repeat-values-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:694008-694010](../../../../../../reference/runtime/host-main.cjs#L694008-L694010) | `method` | no | `values, value` |
| [evaluation:490079-490081](../../../../../../reference/runtime/sand-eval-runner.cjs#L490079-L490081) | `method` | no | `values, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:694008-694010](../../../../../../reference/runtime/host-main.cjs#L694008-L694010) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490079-490081](../../../../../../reference/runtime/sand-eval-runner.cjs#L490079-L490081) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:694008

Calls written directly in this body: `values.some`.

SHA-256 of the source span: `90aa1fc7a1f7d12bf6abfe79f45924190ab71c09c0e395da2cdc603ab320681a`.

### evaluation:490079

Calls written directly in this body: `values.some`.

SHA-256 of the source span: `90aa1fc7a1f7d12bf6abfe79f45924190ab71c09c0e395da2cdc603ab320681a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

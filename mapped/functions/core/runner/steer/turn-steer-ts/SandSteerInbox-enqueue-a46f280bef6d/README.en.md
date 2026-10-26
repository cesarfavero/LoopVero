# `SandSteerInbox.enqueue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/steer/turn-steer.ts` · [Module README](../../../../../../modules/core/runner/steer/turn-steer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589786-589803](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589786-L589803) | `method` | no | `prompt, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589786-589803](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589786-L589803) | 1 | 1 | 0 | 2 | 0 | 0 |

### evaluation:589786

Calls written directly in this body: `listener`, `new Promise`.

SHA-256 of the source span: `feae57f3f142e0dd2489f9f39ec9898e451929a59d700ddf845b7791d1307337`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

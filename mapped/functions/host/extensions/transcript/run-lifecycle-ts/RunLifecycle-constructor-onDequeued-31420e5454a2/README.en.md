# `RunLifecycle.constructor/onDequeued`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739924-739934](../../../../../../../reference/runtime/host-main.cjs#L739924-L739934) | `ArrowFunctionExpression` | no | `event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739924-739934](../../../../../../../reference/runtime/host-main.cjs#L739924-L739934) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:739924 uses an implicit arrow-function return.

### host:739924

Calls written directly in this body: `this.tm.telemetry.reportQueueDequeued`.

SHA-256 of the source span: `bff5a673ca5105ab564bbf37d8842f650320aa564dcbe5e83367e52590ba5390`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

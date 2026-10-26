# `RunLifecycle.constructor/onWatchdog`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739935-739944](../../../../../../../reference/runtime/host-main.cjs#L739935-L739944) | `ArrowFunctionExpression` | no | `event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739935-739944](../../../../../../../reference/runtime/host-main.cjs#L739935-L739944) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:739935

Calls written directly in this body: `this.tm.telemetry.reportQueueWatchdog`.

SHA-256 of the source span: `96912b5d45298b9433c936c1cc94c63c7bb9826b42f365b01bd8507f49e28cf5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `SandStructuredLogTelemetry.reportConversationGc`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473194-473197](../../../../../../../reference/runtime/host-main.cjs#L473194-L473197) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473194-473197](../../../../../../../reference/runtime/host-main.cjs#L473194-L473197) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473194

Calls written directly in this body: `conversationGcTelemetry`, `this.enqueue`.

SHA-256 of the source span: `ed773f22e8f295bad3fe323cf5b26715423b99eede8b94c0ba481be3c794e4bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

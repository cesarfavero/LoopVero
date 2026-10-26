# `SandStructuredLogTelemetry.enqueue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473824-473826](../../../../../../../reference/runtime/host-main.cjs#L473824-L473826) | `method` | no | `level, message, metadata2, onSettled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473824-473826](../../../../../../../reference/runtime/host-main.cjs#L473824-L473826) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473824

Calls written directly in this body: `this.transport.enqueue`.

SHA-256 of the source span: `aac93f2347fc989b28f5eb86742b3dbd0e479ed8b64adc4f66f67f78c8d7241a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

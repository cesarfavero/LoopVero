# `SandStructuredLogTelemetry.reportHostProcessExitConfirmed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473587-473596](../../../../../../../reference/runtime/host-main.cjs#L473587-L473596) | `method` | yes | `marker17` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473587-473596](../../../../../../../reference/runtime/host-main.cjs#L473587-L473596) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:473587

Calls written directly in this body: `SandError.unregistered`, `hostCrashMarkerMetadata`, `logFields`, `sandErrorTags`, `this.transport.shipConfirmed`.

SHA-256 of the source span: `fdcae1b3a8f5acd0229f8119491ad1dc217e9e78fca4adcaefb5dab94071bdf8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

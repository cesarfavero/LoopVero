# `SandStructuredLogTelemetry.setFlushTickListener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473814-473816](../../../../../../../reference/runtime/host-main.cjs#L473814-L473816) | `method` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473814-473816](../../../../../../../reference/runtime/host-main.cjs#L473814-L473816) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473814

Calls written directly in this body: `this.transport.setFlushTickListener`.

SHA-256 of the source span: `c13c3d0e5ebb40d75c83af29d2967fc27aefea32fcbf6e549bd7562b1b8cac1c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `SandStructuredLogTelemetry.reportSearchIndexHealth`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473198-473201](../../../../../../../reference/runtime/host-main.cjs#L473198-L473201) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473198-473201](../../../../../../../reference/runtime/host-main.cjs#L473198-L473201) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473198

Calls written directly in this body: `searchIndexHealthTelemetry`, `this.enqueue`.

SHA-256 of the source span: `52c8595bb22a470d8ec6f73dfee4d4347e6299bdb5cda9d32b46453e9a0e1707`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

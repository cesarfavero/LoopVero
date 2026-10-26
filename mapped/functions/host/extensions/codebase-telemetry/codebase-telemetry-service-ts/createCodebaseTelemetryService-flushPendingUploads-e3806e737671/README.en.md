# `createCodebaseTelemetryService/flushPendingUploads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541053-541058](../../../../../../../reference/runtime/host-main.cjs#L541053-L541058) | `FunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541053-541058](../../../../../../../reference/runtime/host-main.cjs#L541053-L541058) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:541053

Calls written directly in this body: `currentAdapter.flushPendingUploads`.

SHA-256 of the source span: `fb719ea8bf69e2670fb0e725888cdb2b1b59dc5062c0400af786473db36b22da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

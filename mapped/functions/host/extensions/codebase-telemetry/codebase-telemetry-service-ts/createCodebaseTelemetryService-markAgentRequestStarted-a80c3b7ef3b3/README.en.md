# `createCodebaseTelemetryService/markAgentRequestStarted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541059-541063](../../../../../../../reference/runtime/host-main.cjs#L541059-L541063) | `FunctionExpression` | no | `requestId2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541059-541063](../../../../../../../reference/runtime/host-main.cjs#L541059-L541063) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:541059

Calls written directly in this body: `snapshotTrigger.handle`.

SHA-256 of the source span: `5cd89f3b0fa55f2a0b29f905deb0cd30b0e4e21e13e1a6c7442a417ea10a775c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

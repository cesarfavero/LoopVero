# `createCodebaseTelemetryService/dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541070-541086](../../../../../../../reference/runtime/host-main.cjs#L541070-L541086) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541070-541086](../../../../../../../reference/runtime/host-main.cjs#L541070-L541086) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:541070

Calls written directly in this body: `restartDelay.dispose`.

Assignment or increment targets: `disposePromise`, `stopping`.

SHA-256 of the source span: `fdfbb092d9a051b7fece63cf2c19b4794354f930cab3e4e7e41a72a8bf57352c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

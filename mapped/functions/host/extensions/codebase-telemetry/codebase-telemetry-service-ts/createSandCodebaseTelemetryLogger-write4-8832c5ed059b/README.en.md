# `createSandCodebaseTelemetryLogger/write4`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541090-541092](../../../../../../../reference/runtime/host-main.cjs#L541090-L541092) | `ArrowFunctionExpression` | no | `level, message, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541090-541092](../../../../../../../reference/runtime/host-main.cjs#L541090-L541092) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:541090

Calls written directly in this body: `formatLogMessage`, `log5`.

SHA-256 of the source span: `4db9f1d4127dec3c931bb914a379000a6986e07cf584aa4ca10810beb92c6e20`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

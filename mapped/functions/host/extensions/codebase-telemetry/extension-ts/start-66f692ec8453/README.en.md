# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/extension.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541681-541732](../../../../../../../reference/runtime/host-main.cjs#L541681-L541732) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541681-541732](../../../../../../../reference/runtime/host-main.cjs#L541681-L541732) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:541681

Calls written directly in this body: `context2.onStop`, `createCodebaseTelemetryService`, `createDeadlinePolicy`, `createRetryPolicy`, `createSandCodebaseTelemetryLogger`.

SHA-256 of the source span: `b430257875f56b05ae8d897fe0592b256079076b04b9157bc813d614beade282`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

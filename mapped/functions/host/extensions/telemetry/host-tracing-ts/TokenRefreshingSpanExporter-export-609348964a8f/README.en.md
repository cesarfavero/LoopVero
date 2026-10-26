# `TokenRefreshingSpanExporter.export`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-tracing.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-tracing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731624-731640](../../../../../../../reference/runtime/host-main.cjs#L731624-L731640) | `method` | no | `spans, resultCallback` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731624-731640](../../../../../../../reference/runtime/host-main.cjs#L731624-L731640) | 1 | 0 | 0 | 1 | 0 | 2 |

### host:731624

Calls written directly in this body: `delegate.export`, `resultCallback`, `this.resolveDelegate`.

Assignment or increment targets: `delegate`.

SHA-256 of the source span: `59c5bedbed233956f419168ab0ed8328d2771fadb5d752d1e074ae4b08c135fe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

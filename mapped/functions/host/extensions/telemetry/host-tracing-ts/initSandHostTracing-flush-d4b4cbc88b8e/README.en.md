# `initSandHostTracing/flush`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-tracing.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-tracing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731687-731698](../../../../../../../reference/runtime/host-main.cjs#L731687-L731698) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731687-731698](../../../../../../../reference/runtime/host-main.cjs#L731687-L731698) | 0 | 0 | 0 | 1 | 0 | 1 |

### host:731687

Calls written directly in this body: `.catch`, `provider.forceFlush`.

SHA-256 of the source span: `9d6327c513452c9ad8bb6392e3b97306e84de8673efcb5bc2643c70a6fd5ef7d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

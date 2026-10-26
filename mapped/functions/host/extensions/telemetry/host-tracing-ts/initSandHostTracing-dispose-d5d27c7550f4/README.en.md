# `initSandHostTracing/dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-tracing.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-tracing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731699-731710](../../../../../../../reference/runtime/host-main.cjs#L731699-L731710) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731699-731710](../../../../../../../reference/runtime/host-main.cjs#L731699-L731710) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:731699

Calls written directly in this body: `process.off`, `provider.shutdown`.

Assignment or increment targets: `disposed`.

SHA-256 of the source span: `52317376897a0447915993b70b2eed82ca942a9a2980fabb0effa436e09d196b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

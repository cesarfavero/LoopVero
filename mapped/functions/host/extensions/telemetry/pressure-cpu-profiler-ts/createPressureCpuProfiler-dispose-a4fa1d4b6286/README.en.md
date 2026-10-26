# `createPressureCpuProfiler/dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/pressure-cpu-profiler.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/pressure-cpu-profiler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731932-731939](../../../../../../../reference/runtime/host-main.cjs#L731932-L731939) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731932-731939](../../../../../../../reference/runtime/host-main.cjs#L731932-L731939) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:731932

Calls written directly in this body: `backend.dispose`.

Assignment or increment targets: `disposed`, `state`.

SHA-256 of the source span: `83b09d3122abbee6b8c6bf8f2ce0c23ec85cc2e1e9517cc74b4a1dc4e007f6e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

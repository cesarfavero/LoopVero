# `createPressureCpuProfiler/onPressure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/pressure-cpu-profiler.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/pressure-cpu-profiler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731893-731926](../../../../../../../reference/runtime/host-main.cjs#L731893-L731926) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731893-731926](../../../../../../../reference/runtime/host-main.cjs#L731893-L731926) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:731893

Calls written directly in this body: `.catch`, `.then`, `backend.start`, `knobs`, `now`.

Assignment or increment targets: `lastCaptureStartedAtMs`, `previousPressureAtMs`, `state`.

SHA-256 of the source span: `cd625669fd1ec23e89dff6fb6115231c79a38a518b1303a7b78e8ba98ef6615d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

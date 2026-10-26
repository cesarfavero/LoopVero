# `createPressureCpuProfiler/finishCapture`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/pressure-cpu-profiler.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/pressure-cpu-profiler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731872-731891](../../../../../../../reference/runtime/host-main.cjs#L731872-L731891) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731872-731891](../../../../../../../reference/runtime/host-main.cjs#L731872-L731891) | 1 | 0 | 1 | 1 | 0 | 1 |

### host:731872

Calls written directly in this body: `backend.stop`, `errorLogTag`, `knobs`, `now`, `options2.onCaptured`, `options2.reportHostLog`, `pruneOldProfiles`.

Assignment or increment targets: `state`.

SHA-256 of the source span: `66ee6bfa36794aadc94379ab1dc184b53b6cc74147fc0a3038e9d0d07cf59a37`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

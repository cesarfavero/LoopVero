# `createInspectorBackend/stop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/pressure-cpu-profiler.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/pressure-cpu-profiler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731822-731833](../../../../../../../reference/runtime/host-main.cjs#L731822-L731833) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731822-731833](../../../../../../../reference/runtime/host-main.cjs#L731822-L731833) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:731822

Calls written directly in this body: `JSON.stringify`, `active.disconnect`, `active.post`, `invariant`, `new SandProfilerCaptureError`.

Assignment or increment targets: `session`.

Explicit throw targets: `SandProfilerCaptureError`.

SHA-256 of the source span: `252e906248a2483cfddd62d7625012e90b3679517947913850fcd677b8f4c771`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

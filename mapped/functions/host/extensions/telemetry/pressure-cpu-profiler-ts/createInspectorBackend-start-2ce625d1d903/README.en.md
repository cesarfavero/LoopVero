# `createInspectorBackend/start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/pressure-cpu-profiler.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/pressure-cpu-profiler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731804-731821](../../../../../../../reference/runtime/host-main.cjs#L731804-L731821) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731804-731821](../../../../../../../reference/runtime/host-main.cjs#L731804-L731821) | 0 | 0 | 3 | 0 | 1 | 2 |

### host:731804

Calls written directly in this body: `new import_promises78.Session`, `starting.connect`, `starting.disconnect`, `starting.post`.

Assignment or increment targets: `session`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `cc4b8a16ac3eff19c612dbbddd6772bf30e3cb64637513f3252fff3ce7a0a7b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

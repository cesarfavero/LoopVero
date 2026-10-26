# `createSendTraceSampler`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/send-trace-sampler.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/send-trace-sampler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731567-731569](../../../../../../../reference/runtime/host-main.cjs#L731567-L731569) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731567-731569](../../../../../../../reference/runtime/host-main.cjs#L731567-L731569) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:731567

Calls written directly in this body: `new import_sdk_trace_node2.AlwaysOffSampler`, `new import_sdk_trace_node2.ParentBasedSampler`.

SHA-256 of the source span: `3584182e493190c8dcfbd401db2e41c7b7486e07e7769c3d73f659edff48349d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

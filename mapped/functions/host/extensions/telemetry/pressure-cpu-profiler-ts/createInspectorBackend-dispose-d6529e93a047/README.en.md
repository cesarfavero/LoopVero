# `createInspectorBackend/dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/pressure-cpu-profiler.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/pressure-cpu-profiler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731834-731837](../../../../../../../reference/runtime/host-main.cjs#L731834-L731837) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731834-731837](../../../../../../../reference/runtime/host-main.cjs#L731834-L731837) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:731834

Calls written directly in this body: `session.disconnect`.

Assignment or increment targets: `session`.

SHA-256 of the source span: `9e9ee671105413f0b2d6dc94dd65bab4a8a1f9a5fdd30a83aeef5a27b4ca8086`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `hostLifecycleTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/lifecycle-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/lifecycle-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471846-471863](../../../../../../../reference/runtime/host-main.cjs#L471846-L471863) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471846-471863](../../../../../../../reference/runtime/host-main.cjs#L471846-L471863) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:471846

Calls written directly in this body: `logFields`, `sandErrorTags`.

Assignment or increment targets: `level`.

SHA-256 of the source span: `1b3cf49c5a1c63dc8beabeb3619eb7916a6ba5729f0969a549def607ffd7bffe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

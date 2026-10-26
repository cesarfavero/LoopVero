# `isEventLogFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `shared/observability/telemetry-fields.ts` · [Module README](../../../../../modules/shared/observability/telemetry-fields-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:450934-450936](../../../../../../reference/runtime/host-main.cjs#L450934-L450936) | `FunctionDeclaration` | no | `fields3, event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:450934-450936](../../../../../../reference/runtime/host-main.cjs#L450934-L450936) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:450934

Calls written directly in this body: `Object.hasOwn`.

SHA-256 of the source span: `3d072f62e231e9e293b1a0756d15c471aef03dafae8963a0f61a30ffbd2b250d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

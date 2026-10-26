# `workingStateWarmTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/working-state-export-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/working-state-export-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472650-472681](../../../../../../../reference/runtime/host-main.cjs#L472650-L472681) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472650-472681](../../../../../../../reference/runtime/host-main.cjs#L472650-L472681) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472650

Calls written directly in this body: `brandedErrorClass`, `brandedId`, `cappedCount3`, `logFields`.

SHA-256 of the source span: `bb9955ad4e2e06c20ec411a83ee6d2c39442e7a253f14495a4470909e8d5973a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

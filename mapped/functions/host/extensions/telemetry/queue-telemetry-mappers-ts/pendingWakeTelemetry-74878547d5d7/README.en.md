# `pendingWakeTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/queue-telemetry-mappers.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/queue-telemetry-mappers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472234-472248](../../../../../../../reference/runtime/host-main.cjs#L472234-L472248) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472234-472248](../../../../../../../reference/runtime/host-main.cjs#L472234-L472248) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472234

Calls written directly in this body: `brandedErrorTag`, `brandedOrInvalidId`, `logFields`, `roundedMs`.

SHA-256 of the source span: `e792447e20c903b87a75b57462cf837166fc72678c7180424122a8f0967ad124`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `queueAcceptedTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/queue-telemetry-mappers.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/queue-telemetry-mappers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472169-472184](../../../../../../../reference/runtime/host-main.cjs#L472169-L472184) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472169-472184](../../../../../../../reference/runtime/host-main.cjs#L472169-L472184) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:472169

Calls written directly in this body: `brandedOrInvalidId`, `logFields`.

SHA-256 of the source span: `23385c42a0988bd251192ceedc3240981145964618ae93cdf86e121dda24880c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

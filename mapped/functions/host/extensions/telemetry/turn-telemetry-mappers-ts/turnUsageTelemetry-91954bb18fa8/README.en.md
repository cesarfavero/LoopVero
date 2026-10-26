# `turnUsageTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/turn-telemetry-mappers.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/turn-telemetry-mappers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472468-472485](../../../../../../../reference/runtime/host-main.cjs#L472468-L472485) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472468-472485](../../../../../../../reference/runtime/host-main.cjs#L472468-L472485) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:472468

Calls written directly in this body: `brandedId`, `brandedOrInvalidId`, `logFields`, `usageTokenTags`.

SHA-256 of the source span: `8fb4ef3f27073519479dd20c12f53714a3282f16d7bd129e703c8793e552ab09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

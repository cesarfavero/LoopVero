# `turnPrefixDiffTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/turn-telemetry-mappers.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/turn-telemetry-mappers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472512-472536](../../../../../../../reference/runtime/host-main.cjs#L472512-L472536) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472512-472536](../../../../../../../reference/runtime/host-main.cjs#L472512-L472536) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472512

Calls written directly in this body: `boundedPrefixChanges`, `brandedId`, `brandedOrInvalidId`, `logFields`.

SHA-256 of the source span: `bd7ad0c4af45868a00ebf03c0d651381c62ab9a3e13a99c363811e1f533d27e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

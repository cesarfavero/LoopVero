# `levelFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/experiments-diagnostic-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/experiments-diagnostic-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471157-471163](../../../../../../../reference/runtime/host-main.cjs#L471157-L471163) | `FunctionDeclaration` | no | `diagnostic` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471157-471163](../../../../../../../reference/runtime/host-main.cjs#L471157-L471163) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:471157

Calls written directly in this body: `INFO_KINDS.has`, `WARN_KINDS.has`.

SHA-256 of the source span: `092047eba1c55d3cdcff620a8e94c3f87a868f6f2a318c0e2a7cc384300e2025`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

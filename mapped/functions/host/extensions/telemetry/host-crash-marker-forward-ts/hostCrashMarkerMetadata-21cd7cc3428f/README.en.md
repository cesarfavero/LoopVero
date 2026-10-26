# `hostCrashMarkerMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-crash-marker-forward.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-crash-marker-forward-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471548-471569](../../../../../../../reference/runtime/host-main.cjs#L471548-L471569) | `FunctionDeclaration` | no | `marker17` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471548-471569](../../../../../../../reference/runtime/host-main.cjs#L471548-L471569) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:471548

Calls written directly in this body: `Math.round`, `brandedErrorTag`, `brandedId`, `logFields`.

SHA-256 of the source span: `91ae6688901612f3107895fae25c66579724280c40cf6b58903ead4192f4d362`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

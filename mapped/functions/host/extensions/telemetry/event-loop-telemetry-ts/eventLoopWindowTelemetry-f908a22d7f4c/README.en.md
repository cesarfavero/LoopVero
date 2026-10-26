# `eventLoopWindowTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/event-loop-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/event-loop-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:456262-456275](../../../../../../../reference/runtime/host-main.cjs#L456262-L456275) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456262-456275](../../../../../../../reference/runtime/host-main.cjs#L456262-L456275) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:456262

Calls written directly in this body: `Math.round`, `brandLiteralEnum`, `logFields`.

SHA-256 of the source span: `9122b293167a2998ae367c77e6f5872e49e9ed84111e98bb830c027391c9f7a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

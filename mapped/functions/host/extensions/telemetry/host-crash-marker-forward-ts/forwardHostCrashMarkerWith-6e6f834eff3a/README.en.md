# `forwardHostCrashMarkerWith`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-crash-marker-forward.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-crash-marker-forward-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471577-471600](../../../../../../../reference/runtime/host-main.cjs#L471577-L471600) | `FunctionDeclaration` | yes | `forwarder` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471577-471600](../../../../../../../reference/runtime/host-main.cjs#L471577-L471600) | 11 | 0 | 6 | 9 | 0 | 0 |

### host:471577

Calls written directly in this body: `deleteIfUnchanged`, `forwarder.emit`, `forwarder.emitUnparseable`, `forwarder.markForwarded`, `forwarder.store.read`, `forwarder.wasForwarded`, `parseHostCrashMarker`.

SHA-256 of the source span: `c9a246cdfee9f04d306d09d649724f977f3c8f717ac8ee44957180f51b436bb9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

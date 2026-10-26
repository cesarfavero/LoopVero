# `StructuredLogTransport.hasPendingDrops`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453257-453262](../../../../../../reference/runtime/host-main.cjs#L453257-L453262) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453257-453262](../../../../../../reference/runtime/host-main.cjs#L453257-L453262) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:453257

Calls written directly in this body: `TELEMETRY_DROP_REASONS.some`.

SHA-256 of the source span: `d178dd257b4851a357070e5b4f674286fc4b50a8530731949a3f9d89b6e69976`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

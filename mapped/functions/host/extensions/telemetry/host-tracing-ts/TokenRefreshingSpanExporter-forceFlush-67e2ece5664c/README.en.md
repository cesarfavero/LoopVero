# `TokenRefreshingSpanExporter.forceFlush`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-tracing.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-tracing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731647-731652](../../../../../../../reference/runtime/host-main.cjs#L731647-L731652) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731647-731652](../../../../../../../reference/runtime/host-main.cjs#L731647-L731652) | 0 | 0 | 1 | 0 | 0 | 1 |

### host:731647

Calls written directly in this body: `this.delegate.forceFlush`.

SHA-256 of the source span: `f48158596d288ad06c01b6d0f211762ec7464824a580da04e60761f2f5742537`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

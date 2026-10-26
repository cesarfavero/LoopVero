# `StructuredLogTransport.recordDropped`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453052-453054](../../../../../../reference/runtime/host-main.cjs#L453052-L453054) | `method` | no | `reason, count2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453052-453054](../../../../../../reference/runtime/host-main.cjs#L453052-L453054) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453052

Calls written directly in this body: `this.recordDrop`.

SHA-256 of the source span: `353db20d81c80829f624a16006741193418b14e0b39a3cfa3c7f5f76469a6211`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

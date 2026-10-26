# `StructuredLogTransport.dropBufferOverflow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453306-453321](../../../../../../reference/runtime/host-main.cjs#L453306-L453321) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453306-453321](../../../../../../reference/runtime/host-main.cjs#L453306-L453321) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:453306

Calls written directly in this body: `evicted.push`, `this.buffer.filter`, `this.buffer.splice`, `this.recordDrop`, `this.settle`.

Assignment or increment targets: `this.buffer`.

SHA-256 of the source span: `d42ac946f7c1494a03d1e3172f2bdebcd0ef69dd9b5217b927c037e4beac39e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

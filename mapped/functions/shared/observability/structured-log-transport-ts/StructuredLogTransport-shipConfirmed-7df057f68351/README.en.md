# `StructuredLogTransport.shipConfirmed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453026-453041](../../../../../../reference/runtime/host-main.cjs#L453026-L453041) | `method` | yes | `level, message, metadata2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453026-453041](../../../../../../reference/runtime/host-main.cjs#L453026-L453041) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:453026

Calls written directly in this body: `Date.now`, `this.buildLogEntry`, `this.recordSourceResult`, `this.shipLogs`.

SHA-256 of the source span: `eb2ee91464ba0d621e6cf4385f648bffc53c3c291f1b5ff4963f836f2564f085`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

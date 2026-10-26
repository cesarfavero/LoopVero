# `StructuredLogTransport.buildLogEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453327-453335](../../../../../../reference/runtime/host-main.cjs#L453327-L453335) | `method` | no | `level, message, metadata2, timestampMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453327-453335](../../../../../../reference/runtime/host-main.cjs#L453327-L453335) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:453327

Calls written directly in this body: `BigInt`, `new ClientLogEntry`, `toClientLogLevel`.

SHA-256 of the source span: `858a6b57ff0a3d00072cbc18c004fefbcaaa692de8068316662e042a5e8e75c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

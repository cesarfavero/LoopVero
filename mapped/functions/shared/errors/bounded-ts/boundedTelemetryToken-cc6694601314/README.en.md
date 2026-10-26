# `boundedTelemetryToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/bounded.ts` · [Module README](../../../../../modules/shared/errors/bounded-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:155191-155196](../../../../../../reference/runtime/host-main.cjs#L155191-L155196) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:155191-155196](../../../../../../reference/runtime/host-main.cjs#L155191-L155196) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:155191

Calls written directly in this body: `/^[A-Za-z][A-Za-z0-9]*\/E[A-Z0-9_]+$/.test`, `BOUNDED_TELEMETRY_TOKENS.includes`, `brandLiteralEnum`, `brandedTelemetryToken`.

SHA-256 of the source span: `e665478b6b0d391133fd8c278bd6c4dde8d04bf4a311397e74b3440d752f075f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

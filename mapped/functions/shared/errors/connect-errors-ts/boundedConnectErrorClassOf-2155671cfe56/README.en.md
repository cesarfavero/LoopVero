# `boundedConnectErrorClassOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/connect-errors.ts` · [Module README](../../../../../modules/shared/errors/connect-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451237-451242](../../../../../../reference/runtime/host-main.cjs#L451237-L451242) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451237-451242](../../../../../../reference/runtime/host-main.cjs#L451237-L451242) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:451237

Calls written directly in this body: `boundedConnectClass`, `boundedTelemetryToken`, `brandLiteralEnum`, `errorClassOf`.

SHA-256 of the source span: `4ae462d59ef4be6c32bebf4486e01f373e7c494db404b8d91286a6995c2382d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

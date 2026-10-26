# `newId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/trays-service.ts` · [Module README](../../../../../../modules/host/extensions/trays/trays-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784382-784384](../../../../../../../reference/runtime/host-main.cjs#L784382-L784384) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784382-784384](../../../../../../../reference/runtime/host-main.cjs#L784382-L784384) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:784382

Calls written directly in this body: `crypto.randomUUID`.

SHA-256 of the source span: `edc95c58729f8cd0d9f3648a3acf9fd74e9fed0902f792c163eb149a069b494e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `isCursorWebsiteUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/trays/error-details-tray.ts` · [Module README](../../../../../modules/shared/trays/error-details-tray-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736670-736674](../../../../../../reference/runtime/host-main.cjs#L736670-L736674) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736670-736674](../../../../../../reference/runtime/host-main.cjs#L736670-L736674) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:736670

Calls written directly in this body: `isHttpExternalUrl`, `new URL`.

SHA-256 of the source span: `8aafcaf550cd216f1daeb1c15be876a9b6d59255e5c6ec35760a0c6a8df92d2d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

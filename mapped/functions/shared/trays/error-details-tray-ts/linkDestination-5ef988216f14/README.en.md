# `linkDestination`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/trays/error-details-tray.ts` · [Module README](../../../../../modules/shared/trays/error-details-tray-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736552-736562](../../../../../../reference/runtime/host-main.cjs#L736552-L736562) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736552-736562](../../../../../../reference/runtime/host-main.cjs#L736552-L736562) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:736552

Calls written directly in this body: `.join`, `NON_DESTINATION_URL_PARAMS.has`, `URL.canParse`, `encodeURIComponent`, `kept.push`, `kept.toSorted`, `key.startsWith`, `new URL`.

SHA-256 of the source span: `1da24e786d5f88db3fff8832dbc43e3cf1d408d2285844e27903de2bb54da284`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

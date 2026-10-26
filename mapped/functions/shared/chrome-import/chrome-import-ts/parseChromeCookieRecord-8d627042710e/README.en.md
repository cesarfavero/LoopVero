# `parseChromeCookieRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/chrome-import/chrome-import.ts` · [Module README](../../../../../modules/shared/chrome-import/chrome-import-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485785-485810](../../../../../../reference/runtime/host-main.cjs#L485785-L485810) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485785-485810](../../../../../../reference/runtime/host-main.cjs#L485785-L485810) | 15 | 0 | 0 | 8 | 0 | 0 |

### host:485785

Calls written directly in this body: `Number.isFinite`, `asCookieValue`, `isUnknownRecord2`.

SHA-256 of the source span: `85f8d1b95083a67b9d35a06c21dd75d90112cc5508f27836d7e3f5b6c51c51cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

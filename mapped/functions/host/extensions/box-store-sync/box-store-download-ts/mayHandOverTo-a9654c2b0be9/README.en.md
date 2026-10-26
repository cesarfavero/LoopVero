# `mayHandOverTo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478304-478307](../../../../../../../reference/runtime/host-main.cjs#L478304-L478307) | `FunctionDeclaration` | no | `info2, uid` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478304-478307](../../../../../../../reference/runtime/host-main.cjs#L478304-L478307) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:478304

Calls written directly in this body: `info2.isDirectory`.

SHA-256 of the source span: `3077707dd81a6f147b5b0b7af022fd5930101f1412830dd4fcf740f9f2746574`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

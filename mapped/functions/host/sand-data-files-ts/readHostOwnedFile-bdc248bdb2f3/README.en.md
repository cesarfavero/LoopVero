# `readHostOwnedFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453793-453805](../../../../../reference/runtime/host-main.cjs#L453793-L453805) | `FunctionDeclaration` | yes | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453793-453805](../../../../../reference/runtime/host-main.cjs#L453793-L453805) | 1 | 0 | 4 | 1 | 1 | 0 |

### host:453793

Calls written directly in this body: `file2.close`, `file2.stat`, `openNoFollow`, `oversizedSandDataFile`, `readBounded`, `refuseUntrustedFile`, `sandDataNoFollowRoot`.

Explicit throw targets: `oversizedSandDataFile`.

SHA-256 of the source span: `8298f8772435e45513347464fb21f869b95b3c7dcec4d9f64b80abec6b04fb6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

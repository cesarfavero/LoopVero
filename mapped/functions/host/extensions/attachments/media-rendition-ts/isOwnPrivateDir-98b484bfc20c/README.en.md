# `isOwnPrivateDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/media-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/media-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497935-497945](../../../../../../../reference/runtime/host-main.cjs#L497935-L497945) | `FunctionDeclaration` | yes | `dir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497935-497945](../../../../../../../reference/runtime/host-main.cjs#L497935-L497945) | 3 | 0 | 1 | 4 | 1 | 1 |

### host:497935

Calls written directly in this body: `import_node_fs40.promises.lstat`, `isMissingPath`, `process.getuid`, `stat26.isDirectory`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `886aecdcd420dc3bd6b2879036abfc7aac883bbeab9daa0669887688b1d38d17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

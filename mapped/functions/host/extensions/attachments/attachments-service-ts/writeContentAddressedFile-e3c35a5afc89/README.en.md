# `writeContentAddressedFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498577-498585](../../../../../../../reference/runtime/host-main.cjs#L498577-L498585) | `FunctionDeclaration` | yes | `dir, targetPath, buffer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498577-498585](../../../../../../../reference/runtime/host-main.cjs#L498577-L498585) | 2 | 0 | 2 | 1 | 1 | 1 |

### host:498577

Calls written directly in this body: `.isFile`, `ensureSandDataDirSync`, `findSystemErrno`, `import_node_fs43.promises.lstat`, `writeSandDataFile`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `0c6ec339c54f957175f2b3b91c34b535daca458541d05cfb33dff892d327df5b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

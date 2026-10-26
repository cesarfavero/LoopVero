# `sweepStaleUploadParts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498637-498648](../../../../../../../reference/runtime/host-main.cjs#L498637-L498648) | `FunctionDeclaration` | yes | `partsDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498637-498648](../../../../../../../reference/runtime/host-main.cjs#L498637-L498648) | 2 | 1 | 2 | 0 | 1 | 1 |

### host:498637

Calls written directly in this body: `Date.now`, `findSystemErrno`, `import_node_fs43.promises.lstat`, `import_node_fs43.promises.readdir`, `removeSandDataFileSync`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `422e4f3ad567e831b05bcb95d31d81c6dc5d6509f5eb1fc97b1c755d00ca3604`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `readSourceOrRendition`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498896-498904](../../../../../../../reference/runtime/host-main.cjs#L498896-L498904) | `FunctionDeclaration` | yes | `file2, path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498896-498904](../../../../../../../reference/runtime/host-main.cjs#L498896-L498904) | 1 | 0 | 4 | 2 | 0 | 0 |

### host:498896

Calls written directly in this body: `file2.handle.readFile`, `openNoFollow`, `rendition.close`, `rendition.readFile`.

SHA-256 of the source span: `88ff709652c4e04eb8c7daa7d905f9c3c8db8f954c1af44109d429785152a355`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

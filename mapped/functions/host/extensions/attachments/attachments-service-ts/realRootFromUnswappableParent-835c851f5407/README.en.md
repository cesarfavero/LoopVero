# `realRootFromUnswappableParent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498718-498720](../../../../../../../reference/runtime/host-main.cjs#L498718-L498720) | `FunctionDeclaration` | yes | `root` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498718-498720](../../../../../../../reference/runtime/host-main.cjs#L498718-L498720) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:498718

Calls written directly in this body: `import_node_fs43.promises.realpath`.

SHA-256 of the source span: `b8d97a545e11b7911945f8957b3d59e26645c0e0cab516472aced14681aba5c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

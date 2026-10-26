# `realSandDataFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498941-498947](../../../../../../../reference/runtime/host-main.cjs#L498941-L498947) | `FunctionDeclaration` | yes | `resolved` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498941-498947](../../../../../../../reference/runtime/host-main.cjs#L498941-L498947) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:498941

Calls written directly in this body: `Promise.all`, `getSandRootDir`, `import_node_fs43.promises.realpath`, `isPathWithin`, `realRootFromUnswappableParent`.

SHA-256 of the source span: `d0905d04750af41e1f68176d6928b1094e57daad925215f11979902377996df2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

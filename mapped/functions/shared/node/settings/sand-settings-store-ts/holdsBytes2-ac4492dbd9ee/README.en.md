# `holdsBytes2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687681-687688](../../../../../../../reference/runtime/host-main.cjs#L687681-L687688) | `FunctionDeclaration` | no | `path33, bytes, root` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687681-687688](../../../../../../../reference/runtime/host-main.cjs#L687681-L687688) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:687681

Calls written directly in this body: `.equals`, `findSystemErrno`, `readNoFollow`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `aa28e2bab8f3d139ccee7a8fc4f04af96a2c3c75c82296216e9936ae9154ba7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

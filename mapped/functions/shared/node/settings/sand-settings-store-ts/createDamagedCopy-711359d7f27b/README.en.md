# `createDamagedCopy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687691-687711](../../../../../../../reference/runtime/host-main.cjs#L687691-L687711) | `FunctionDeclaration` | no | `path33, bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687691-687711](../../../../../../../reference/runtime/host-main.cjs#L687691-L687711) | 1 | 0 | 0 | 2 | 2 | 2 |

### host:687691

Calls written directly in this body: `findSystemErrno`.

Assignment or increment targets: `fd`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `8047701e0b516fdbee9a388403e9ffe3aef73200a87aba85998380c611dcc0f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

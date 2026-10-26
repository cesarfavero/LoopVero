# `walkNodes/walk3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479892-479914](../../../../../../../reference/runtime/host-main.cjs#L479892-L479914) | `FunctionDeclaration` | yes | `dir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479892-479914](../../../../../../../reference/runtime/host-main.cjs#L479892-L479914) | 5 | 1 | 1 | 1 | 0 | 1 |

### host:479892

Calls written directly in this body: `.join`, `.split`, `entry.isDirectory`, `entry.isFile`, `entry.isSymbolicLink`, `fs33.readdir`, `shouldSkipDir`, `walk3`.

Assignment or increment targets: `entries`.

SHA-256 of the source span: `36c89df671654fad72c479740f53395bd61d06a2bd92a0de012dc2cdff284168`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

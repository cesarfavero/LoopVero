# `buildPackFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-pack.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478514-478564](../../../../../../../reference/runtime/host-main.cjs#L478514-L478564) | `FunctionDeclaration` | yes | `destPath, sources, shouldAbort` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478514-478564](../../../../../../../reference/runtime/host-main.cjs#L478514-L478564) | 3 | 1 | 4 | 2 | 2 | 2 |

### host:478514

Calls written directly in this body: `.digest`, `.update`, `members2.push`, `new Promise`, `out.destroy`, `out.on`, `shouldAbort`, `write4`.

Assignment or increment targets: `bytes`, `offset2`, `skipped2`.

Explicit throw targets: `error64`, `outError`.

SHA-256 of the source span: `f5d05b14104dc84b0078ffe8ae9aa5f875a88b5970eb5fdceee91d8d88205647`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

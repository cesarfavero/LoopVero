# `storeLockFsThrough/readFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483729-483742](../../../../../../../reference/runtime/host-main.cjs#L483729-L483742) | `ArrowFunctionExpression` | yes | `path33, encoding` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483729-483742](../../../../../../../reference/runtime/host-main.cjs#L483729-L483742) | 1 | 0 | 4 | 1 | 1 | 0 |

### host:483729

Calls written directly in this body: `.catch`, `.isFile`, `handle.close`, `handle.readFile`, `handle.stat`, `new NoFollowRefusedError`.

Explicit throw targets: `NoFollowRefusedError`.

SHA-256 of the source span: `9492cd32824983a1829d36d34738347c7243bcf78553f97b87d5df114c625fb9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

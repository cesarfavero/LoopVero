# `extractPackMembers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-pack.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478565-478616](../../../../../../../reference/runtime/host-main.cjs#L478565-L478616) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478565-478616](../../../../../../../reference/runtime/host-main.cjs#L478565-L478616) | 0 | 1 | 3 | 1 | 0 | 0 |

### host:478565

Calls written directly in this body: `Math.max`, `Math.min`, `handle.close`, `settleAllThenThrowFirst`, `workers.push`.

Assignment or increment targets: `w2`.

SHA-256 of the source span: `4ab6ddb1c69967c4db8bf8687ebd6c39696f9a5fb6e4336160a959787cae9c3f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

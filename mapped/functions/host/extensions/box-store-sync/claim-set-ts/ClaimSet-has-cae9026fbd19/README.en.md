# `ClaimSet.has`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/claim-set.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/claim-set-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478410-478412](../../../../../../../reference/runtime/host-main.cjs#L478410-L478412) | `method` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478410-478412](../../../../../../../reference/runtime/host-main.cjs#L478410-L478412) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:478410

Calls written directly in this body: `this.claimed.has`.

SHA-256 of the source span: `2c4a5230a63250d90f82352413744ffd78942c59c00908a1c565b6f1f0d62bd5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

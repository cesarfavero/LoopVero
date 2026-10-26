# `ClaimSet.tryClaim`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/claim-set.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/claim-set-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478413-478417](../../../../../../../reference/runtime/host-main.cjs#L478413-L478417) | `method` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478413-478417](../../../../../../../reference/runtime/host-main.cjs#L478413-L478417) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:478413

Calls written directly in this body: `this.claimed.add`, `this.claimed.has`.

SHA-256 of the source span: `4a39ad4426a0a1cdf6c548cb5e64634bcd894427dabb5813eb550c6e16765b12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

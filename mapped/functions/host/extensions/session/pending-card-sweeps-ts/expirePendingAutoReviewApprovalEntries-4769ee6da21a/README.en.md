# `expirePendingAutoReviewApprovalEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/pending-card-sweeps.ts` · [Module README](../../../../../../modules/host/extensions/session/pending-card-sweeps-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719491-719493](../../../../../../../reference/runtime/host-main.cjs#L719491-L719493) | `FunctionDeclaration` | no | `db, onlyRequestId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719491-719493](../../../../../../../reference/runtime/host-main.cjs#L719491-L719493) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719491

Calls written directly in this body: `expirePendingCardEntries`.

SHA-256 of the source span: `42528c89380973f3e044074885b679f1e8a2332f17938a9e19ae7764dd8a91be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

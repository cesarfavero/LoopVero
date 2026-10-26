# `cookieOriginApprovalCardSettlement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/cookie-origin-approval-cards.ts` · [Module README](../../../../../modules/core/runner/cookie-origin-approval-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774959-774984](../../../../../../reference/runtime/host-main.cjs#L774959-L774984) | `FunctionDeclaration` | no | `outcome` |
| [evaluation:574588-574613](../../../../../../reference/runtime/sand-eval-runner.cjs#L574588-L574613) | `FunctionDeclaration` | no | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774959-774984](../../../../../../reference/runtime/host-main.cjs#L774959-L774984) | 8 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:574588-574613](../../../../../../reference/runtime/sand-eval-runner.cjs#L574588-L574613) | 8 | 0 | 0 | 7 | 0 | 0 |

### host:774959

Calls written directly in this body: `grantedItems`.

SHA-256 of the source span: `34558ff10df8324d2a99c918982982248ea2d4fbe4a069533c4bb86b0071317b`.

### evaluation:574588

Calls written directly in this body: `grantedItems`.

SHA-256 of the source span: `34558ff10df8324d2a99c918982982248ea2d4fbe4a069533c4bb86b0071317b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

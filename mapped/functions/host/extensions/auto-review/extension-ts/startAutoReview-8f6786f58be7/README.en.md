# `startAutoReview`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/auto-review/extension.ts` · [Module README](../../../../../../modules/host/extensions/auto-review/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499898-499907](../../../../../../../reference/runtime/host-main.cjs#L499898-L499907) | `FunctionDeclaration` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499898-499907](../../../../../../../reference/runtime/host-main.cjs#L499898-L499907) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:499898

Calls written directly in this body: `.then`, `Date.now`, `context2.deps.transcript.createAwaitingStateSink`, `context2.deps.transcript.expireAllPendingAutoReviewApprovalCards`, `new AutoReviewService`.

SHA-256 of the source span: `e5ae685e3e11e21f66e9e03bb8d54fde8f5c11c1cec9b41f01f7540a83a6e457`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

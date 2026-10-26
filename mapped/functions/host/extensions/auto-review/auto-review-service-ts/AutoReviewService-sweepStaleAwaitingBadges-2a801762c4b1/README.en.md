# `AutoReviewService.sweepStaleAwaitingBadges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/auto-review/auto-review-service.ts` · [Module README](../../../../../../modules/host/extensions/auto-review/auto-review-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499885-499894](../../../../../../../reference/runtime/host-main.cjs#L499885-L499894) | `method` | yes | `listAgentIds, ifSinceBefore` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499885-499894](../../../../../../../reference/runtime/host-main.cjs#L499885-L499894) | 0 | 1 | 1 | 0 | 0 | 1 |

### host:499885

Calls written directly in this body: `listAgentIds`, `this.deps.awaitingSink.clearForTab`.

SHA-256 of the source span: `8888aeaf28ec71d6a4f85cc7f9455d9b21075413a4d7e25f7635fcb71648e7b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

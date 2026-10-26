# `AutoReviewService.resolveApproval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/auto-review/auto-review-service.ts` · [Module README](../../../../../../modules/host/extensions/auto-review/auto-review-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499873-499884](../../../../../../../reference/runtime/host-main.cjs#L499873-L499884) | `method` | yes | `{     requestId: requestId2,     agentId,     entryId   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499873-499884](../../../../../../../reference/runtime/host-main.cjs#L499873-L499884) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:499873

Calls written directly in this body: `Object.assign`, `new Error`, `this.deps.transcript.settleStaleAutoReviewCard`.

Explicit throw targets: `Object.assign`.

SHA-256 of the source span: `673798c8742d14b651e0e644294cbfe58054df41850f09ca78d49a5962d684e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

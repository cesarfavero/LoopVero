# `createMcpSendHolds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/turn-composition/approval-providers.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/approval-providers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583698-583705](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583698-L583705) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583698-583705](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583698-L583705) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583698

Calls written directly in this body: `createForwardedAttachmentHold`, `createUncoveredSendHold`.

SHA-256 of the source span: `7f731f8a67e882648cb246466162173f96cc77b836b627694f204c529af76bf8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

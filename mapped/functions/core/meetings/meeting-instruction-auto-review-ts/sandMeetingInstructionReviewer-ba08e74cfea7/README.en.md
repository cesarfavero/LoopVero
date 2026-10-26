# `sandMeetingInstructionReviewer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/meetings/meeting-instruction-auto-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-instruction-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772213-772236](../../../../../../reference/runtime/host-main.cjs#L772213-L772236) | `FunctionDeclaration` | no | `{   ctx,   beforeReview,   options: options2 }` |
| [evaluation:571445-571468](../../../../../../reference/runtime/sand-eval-runner.cjs#L571445-L571468) | `FunctionDeclaration` | no | `{   ctx,   beforeReview,   options: options2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772213-772236](../../../../../../reference/runtime/host-main.cjs#L772213-L772236) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571445-571468](../../../../../../reference/runtime/sand-eval-runner.cjs#L571445-L571468) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:772213

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `29230b047c7196f05bc158b06dc333a8e2f4708e60e8e0daff24fcc59c27fa59`.

### evaluation:571445

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `29230b047c7196f05bc158b06dc333a8e2f4708e60e8e0daff24fcc59c27fa59`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

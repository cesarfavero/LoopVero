# `attachmentsNotFullyReviewable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-email-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-email-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764642-764649](../../../../../../reference/runtime/host-main.cjs#L764642-L764649) | `FunctionDeclaration` | no | `target` |
| [evaluation:558010-558017](../../../../../../reference/runtime/sand-eval-runner.cjs#L558010-L558017) | `FunctionDeclaration` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764642-764649](../../../../../../reference/runtime/host-main.cjs#L764642-L764649) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:558010-558017](../../../../../../reference/runtime/sand-eval-runner.cjs#L558010-L558017) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:764642

Calls written directly in this body: `.join`, `target.attachments.filter`, `unseen.map`.

SHA-256 of the source span: `d366a506dedcb363bd61ca4fc5a4352d6e284579492bf9bae148f48ed77d6dac`.

### evaluation:558010

Calls written directly in this body: `.join`, `target.attachments.filter`, `unseen.map`.

SHA-256 of the source span: `d366a506dedcb363bd61ca4fc5a4352d6e284579492bf9bae148f48ed77d6dac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

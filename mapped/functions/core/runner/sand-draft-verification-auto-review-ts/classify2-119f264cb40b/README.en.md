# `classify2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755874-755890](../../../../../../reference/runtime/host-main.cjs#L755874-L755890) | `FunctionDeclaration` | no | `ctx, route, options2, toolCallId, mode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755874-755890](../../../../../../reference/runtime/host-main.cjs#L755874-L755890) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755874

Calls written directly in this body: `runSandAutoReviewClassifier`.

SHA-256 of the source span: `24ebffb1309d84c069dd5f30cd2d2b93a3db80d7b4380d93ddead8a102d42bb3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

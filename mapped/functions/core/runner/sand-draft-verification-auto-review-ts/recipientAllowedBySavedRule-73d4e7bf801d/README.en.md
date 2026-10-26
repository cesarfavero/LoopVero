# `recipientAllowedBySavedRule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756004-756008](../../../../../../reference/runtime/host-main.cjs#L756004-L756008) | `FunctionDeclaration` | no | `decision` |
| [evaluation:541879-541883](../../../../../../reference/runtime/sand-eval-runner.cjs#L541879-L541883) | `FunctionDeclaration` | no | `decision` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756004-756008](../../../../../../reference/runtime/host-main.cjs#L756004-L756008) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541879-541883](../../../../../../reference/runtime/sand-eval-runner.cjs#L541879-L541883) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756004

Calls written directly in this body: `decision.appliedRules.some`.

SHA-256 of the source span: `4313d7a1d9ce138f5c399e0087d4d5f51a43ee1f0a8368f44ecf6f70ff412a98`.

### evaluation:541879

Calls written directly in this body: `decision.appliedRules.some`.

SHA-256 of the source span: `4313d7a1d9ce138f5c399e0087d4d5f51a43ee1f0a8368f44ecf6f70ff412a98`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

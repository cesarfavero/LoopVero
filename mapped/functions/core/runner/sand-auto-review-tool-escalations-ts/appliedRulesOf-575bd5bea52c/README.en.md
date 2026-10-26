# `appliedRulesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-tool-escalations.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-tool-escalations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583520-583523](../../../../../../reference/runtime/sand-eval-runner.cjs#L583520-L583523) | `FunctionDeclaration` | no | `rules` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583520-583523](../../../../../../reference/runtime/sand-eval-runner.cjs#L583520-L583523) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583520

Calls written directly in this body: `sandAutoReviewAppliedRules`.

SHA-256 of the source span: `bec6d1f64530cdb3c1ebbef3c52707402ac123bd47c06f1ba15b9c2eef6fd7e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

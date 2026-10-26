# `sandAutoReviewAppliedRules`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-classifier-run.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-classifier-run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693613-693620](../../../../../../reference/runtime/host-main.cjs#L693613-L693620) | `FunctionDeclaration` | no | `rules` |
| [evaluation:490849-490856](../../../../../../reference/runtime/sand-eval-runner.cjs#L490849-L490856) | `FunctionDeclaration` | no | `rules` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693613-693620](../../../../../../reference/runtime/host-main.cjs#L693613-L693620) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490849-490856](../../../../../../reference/runtime/sand-eval-runner.cjs#L490849-L490856) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:693613

Calls written directly in this body: `rules.flatMap`.

SHA-256 of the source span: `f5dbd72a76931ca3ec0e1a9f21cea4781e9d77cb109f8d7b5b2bc2b330e34365`.

### evaluation:490849

Calls written directly in this body: `rules.flatMap`.

SHA-256 of the source span: `a55f695561fdf152761bc633cf1f982256d10e0e9c20e853dbe6b436b4b63319`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

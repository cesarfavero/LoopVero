# `toBrowserReviewAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/browser/browser-tool-auto-review.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/browser-tool-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743359-743391](../../../../../../../../reference/runtime/host-main.cjs#L743359-L743391) | `FunctionDeclaration` | no | `op, args, defaultViewId` |
| [evaluation:516210-516242](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516210-L516242) | `FunctionDeclaration` | no | `op, args, defaultViewId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743359-743391](../../../../../../../../reference/runtime/host-main.cjs#L743359-L743391) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:516210-516242](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516210-L516242) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:743359

Calls written directly in this body: `JSON.stringify`, `booleanArg`, `numberArg`, `stringArg`, `stringArrayArg`.

SHA-256 of the source span: `038b7252245e137b3afaced3b8fc736c15e1e522116b8ddb760db819e22156c4`.

### evaluation:516210

Calls written directly in this body: `JSON.stringify`, `booleanArg`, `numberArg`, `stringArg`, `stringArrayArg`.

SHA-256 of the source span: `038b7252245e137b3afaced3b8fc736c15e1e522116b8ddb760db819e22156c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

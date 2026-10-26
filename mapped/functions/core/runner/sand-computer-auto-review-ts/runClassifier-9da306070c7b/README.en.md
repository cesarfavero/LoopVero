# `runClassifier`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699480-699501](../../../../../../reference/runtime/host-main.cjs#L699480-L699501) | `FunctionDeclaration` | yes | `ctx, args, classifierMode, buildTarget` |
| [evaluation:513236-513257](../../../../../../reference/runtime/sand-eval-runner.cjs#L513236-L513257) | `FunctionDeclaration` | yes | `ctx, args, classifierMode, buildTarget` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699480-699501](../../../../../../reference/runtime/host-main.cjs#L699480-L699501) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:513236-513257](../../../../../../reference/runtime/sand-eval-runner.cjs#L513236-L513257) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:699480

Calls written directly in this body: `options2.devBlockState.consume`, `runSandAutoReviewClassifier`.

SHA-256 of the source span: `1e63cba469ea25e175b1568ed4a42ebeb5e3ed6b2d90b35032432c6d99ff67aa`.

### evaluation:513236

Calls written directly in this body: `options2.devBlockState.consume`, `runSandAutoReviewClassifier`.

SHA-256 of the source span: `1e63cba469ea25e175b1568ed4a42ebeb5e3ed6b2d90b35032432c6d99ff67aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

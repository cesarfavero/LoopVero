# `runClassifier2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699832-699855](../../../../../../reference/runtime/host-main.cjs#L699832-L699855) | `FunctionDeclaration` | yes | `ctx, args, classifierMode, subject` |
| [evaluation:513588-513611](../../../../../../reference/runtime/sand-eval-runner.cjs#L513588-L513611) | `FunctionDeclaration` | yes | `ctx, args, classifierMode, subject` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699832-699855](../../../../../../reference/runtime/host-main.cjs#L699832-L699855) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:513588-513611](../../../../../../reference/runtime/sand-eval-runner.cjs#L513588-L513611) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:699832

Calls written directly in this body: `runSandAutoReviewClassifier`.

SHA-256 of the source span: `7ac012896082f9f866390e776a5d232fe80ed53a49f8708fcff721a0d358f80e`.

### evaluation:513588

Calls written directly in this body: `runSandAutoReviewClassifier`.

SHA-256 of the source span: `7ac012896082f9f866390e776a5d232fe80ed53a49f8708fcff721a0d358f80e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

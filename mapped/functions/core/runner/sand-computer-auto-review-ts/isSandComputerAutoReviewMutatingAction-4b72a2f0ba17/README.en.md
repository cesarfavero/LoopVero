# `isSandComputerAutoReviewMutatingAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699306-699308](../../../../../../reference/runtime/host-main.cjs#L699306-L699308) | `FunctionDeclaration` | no | `action` |
| [evaluation:513062-513064](../../../../../../reference/runtime/sand-eval-runner.cjs#L513062-L513064) | `FunctionDeclaration` | no | `action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699306-699308](../../../../../../reference/runtime/host-main.cjs#L699306-L699308) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513062-513064](../../../../../../reference/runtime/sand-eval-runner.cjs#L513062-L513064) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699306

Calls written directly in this body: `isSandComputerAutoReviewBypassAction`.

SHA-256 of the source span: `218354d8651b92482433ca7f1a7121cd5e3a72ea0c11615234b2aa13d7d9bd69`.

### evaluation:513062

Calls written directly in this body: `isSandComputerAutoReviewBypassAction`.

SHA-256 of the source span: `218354d8651b92482433ca7f1a7121cd5e3a72ea0c11615234b2aa13d7d9bd69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `isSandComputerAutoReviewBypassAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699303-699305](../../../../../../reference/runtime/host-main.cjs#L699303-L699305) | `FunctionDeclaration` | no | `action` |
| [evaluation:513059-513061](../../../../../../reference/runtime/sand-eval-runner.cjs#L513059-L513061) | `FunctionDeclaration` | no | `action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699303-699305](../../../../../../reference/runtime/host-main.cjs#L699303-L699305) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513059-513061](../../../../../../reference/runtime/sand-eval-runner.cjs#L513059-L513061) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699303

Calls written directly in this body: `BYPASS_COMPUTER_ACTIONS.has`.

SHA-256 of the source span: `c1d524c124821b167cea71dc083a04efb25b214c67d728541945a8877d4765af`.

### evaluation:513059

Calls written directly in this body: `BYPASS_COMPUTER_ACTIONS.has`.

SHA-256 of the source span: `c1d524c124821b167cea71dc083a04efb25b214c67d728541945a8877d4765af`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

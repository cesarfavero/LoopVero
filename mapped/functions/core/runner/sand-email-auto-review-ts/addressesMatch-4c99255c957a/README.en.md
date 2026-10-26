# `addressesMatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-email-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-email-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764540-764542](../../../../../../reference/runtime/host-main.cjs#L764540-L764542) | `FunctionDeclaration` | no | `left, right` |
| [evaluation:557908-557910](../../../../../../reference/runtime/sand-eval-runner.cjs#L557908-L557910) | `FunctionDeclaration` | no | `left, right` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764540-764542](../../../../../../reference/runtime/host-main.cjs#L764540-L764542) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557908-557910](../../../../../../reference/runtime/sand-eval-runner.cjs#L557908-L557910) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764540

Calls written directly in this body: `.toLowerCase`, `left.trim`, `right.trim`.

SHA-256 of the source span: `51e1fd492ea87bf4b355c120b7f0f145bf5d6e4fa02282e2cebefb09efc620f3`.

### evaluation:557908

Calls written directly in this body: `.toLowerCase`, `left.trim`, `right.trim`.

SHA-256 of the source span: `51e1fd492ea87bf4b355c120b7f0f145bf5d6e4fa02282e2cebefb09efc620f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

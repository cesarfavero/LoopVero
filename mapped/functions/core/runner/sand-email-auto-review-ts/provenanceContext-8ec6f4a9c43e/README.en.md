# `provenanceContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-email-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-email-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764556-764566](../../../../../../reference/runtime/host-main.cjs#L764556-L764566) | `FunctionDeclaration` | no | `target, provenance` |
| [evaluation:557924-557934](../../../../../../reference/runtime/sand-eval-runner.cjs#L557924-L557934) | `FunctionDeclaration` | no | `target, provenance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764556-764566](../../../../../../reference/runtime/host-main.cjs#L764556-L764566) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557924-557934](../../../../../../reference/runtime/sand-eval-runner.cjs#L557924-L557934) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:764556

Calls written directly in this body: `wakeEmailContext`.

SHA-256 of the source span: `b8136053aac9db6a37b153fe422e63d805e872f91184f5ed0d32fac04b9e1fce`.

### evaluation:557924

Calls written directly in this body: `wakeEmailContext`.

SHA-256 of the source span: `b8136053aac9db6a37b153fe422e63d805e872f91184f5ed0d32fac04b9e1fce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

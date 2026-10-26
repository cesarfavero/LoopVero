# `wakeEmailContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-email-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-email-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764543-764555](../../../../../../reference/runtime/host-main.cjs#L764543-L764555) | `FunctionDeclaration` | no | `target, wakeEmail` |
| [evaluation:557911-557923](../../../../../../reference/runtime/sand-eval-runner.cjs#L557911-L557923) | `FunctionDeclaration` | no | `target, wakeEmail` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764543-764555](../../../../../../reference/runtime/host-main.cjs#L764543-L764555) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557911-557923](../../../../../../reference/runtime/sand-eval-runner.cjs#L557911-L557923) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764543

Calls written directly in this body: `.some`.

SHA-256 of the source span: `350cbc30c9afbb9dab7a2d94669fac3b9a5a76182a9c5b77efcbf0114607759a`.

### evaluation:557911

Calls written directly in this body: `.some`.

SHA-256 of the source span: `350cbc30c9afbb9dab7a2d94669fac3b9a5a76182a9c5b77efcbf0114607759a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

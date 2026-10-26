# `runSandComputerAutoReviewPreflight/fingerprint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699653-699653](../../../../../../reference/runtime/host-main.cjs#L699653-L699653) | `ArrowFunctionExpression` | no | `displayStateIdentity` |
| [evaluation:513409-513409](../../../../../../reference/runtime/sand-eval-runner.cjs#L513409-L513409) | `ArrowFunctionExpression` | no | `displayStateIdentity` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699653-699653](../../../../../../reference/runtime/host-main.cjs#L699653-L699653) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:699653 uses an implicit arrow-function return.
| [evaluation:513409-513409](../../../../../../reference/runtime/sand-eval-runner.cjs#L513409-L513409) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:513409 uses an implicit arrow-function return.

### host:699653

Calls written directly in this body: `fingerprintSandComputerAutoReviewTarget`.

SHA-256 of the source span: `49bb36549b9b12028924bc6432518c8857830a1fe04863708f97e3f85cf77834`.

### evaluation:513409

Calls written directly in this body: `fingerprintSandComputerAutoReviewTarget`.

SHA-256 of the source span: `49bb36549b9b12028924bc6432518c8857830a1fe04863708f97e3f85cf77834`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

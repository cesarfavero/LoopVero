# `rejectOversizedField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699316-699321](../../../../../../reference/runtime/host-main.cjs#L699316-L699321) | `FunctionDeclaration` | no | `field, maxChars` |
| [evaluation:513072-513077](../../../../../../reference/runtime/sand-eval-runner.cjs#L513072-L513077) | `FunctionDeclaration` | no | `field, maxChars` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699316-699321](../../../../../../reference/runtime/host-main.cjs#L699316-L699321) | 0 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:513072-513077](../../../../../../reference/runtime/sand-eval-runner.cjs#L513072-L513077) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:699316

Calls written directly in this body: `new SandComputerAutoReviewBlockedError`.

Explicit throw targets: `SandComputerAutoReviewBlockedError`.

SHA-256 of the source span: `dc0baea9a8ae0d47392abef0a8f46e0ce244a8d4dd898cb590b87e3cc15785bc`.

### evaluation:513072

Calls written directly in this body: `new SandComputerAutoReviewBlockedError`.

Explicit throw targets: `SandComputerAutoReviewBlockedError`.

SHA-256 of the source span: `dc0baea9a8ae0d47392abef0a8f46e0ce244a8d4dd898cb590b87e3cc15785bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

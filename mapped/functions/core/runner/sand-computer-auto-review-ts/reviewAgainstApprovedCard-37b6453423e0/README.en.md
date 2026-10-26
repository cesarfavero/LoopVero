# `reviewAgainstApprovedCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699538-699545](../../../../../../reference/runtime/host-main.cjs#L699538-L699545) | `FunctionDeclaration` | yes | `args, call, displayStateCapture, { approvedFingerprint, cardReason }` |
| [evaluation:513294-513301](../../../../../../reference/runtime/sand-eval-runner.cjs#L513294-L513301) | `FunctionDeclaration` | yes | `args, call, displayStateCapture, { approvedFingerprint, cardReason }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699538-699545](../../../../../../reference/runtime/host-main.cjs#L699538-L699545) | 1 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:513294-513301](../../../../../../reference/runtime/sand-eval-runner.cjs#L513294-L513301) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:699538

Calls written directly in this body: `call.fingerprint`, `runClassifier`.

SHA-256 of the source span: `0c82b19428bdf7d859235049c93c7166b489a50a8037f3cc3423005b5832bf19`.

### evaluation:513294

Calls written directly in this body: `call.fingerprint`, `runClassifier`.

SHA-256 of the source span: `0c82b19428bdf7d859235049c93c7166b489a50a8037f3cc3423005b5832bf19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

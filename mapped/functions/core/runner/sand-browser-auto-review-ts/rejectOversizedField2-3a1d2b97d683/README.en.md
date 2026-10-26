# `rejectOversizedField2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699697-699702](../../../../../../reference/runtime/host-main.cjs#L699697-L699702) | `FunctionDeclaration` | no | `field, maxChars` |
| [evaluation:513453-513458](../../../../../../reference/runtime/sand-eval-runner.cjs#L513453-L513458) | `FunctionDeclaration` | no | `field, maxChars` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699697-699702](../../../../../../reference/runtime/host-main.cjs#L699697-L699702) | 0 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:513453-513458](../../../../../../reference/runtime/sand-eval-runner.cjs#L513453-L513458) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:699697

Calls written directly in this body: `new SandBrowserAutoReviewBlockedError`.

Explicit throw targets: `SandBrowserAutoReviewBlockedError`.

SHA-256 of the source span: `7929b87dc56fbeff6526962506473de3adcb1cf50cabd93ccfe92873eb788f17`.

### evaluation:513453

Calls written directly in this body: `new SandBrowserAutoReviewBlockedError`.

Explicit throw targets: `SandBrowserAutoReviewBlockedError`.

SHA-256 of the source span: `7929b87dc56fbeff6526962506473de3adcb1cf50cabd93ccfe92873eb788f17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

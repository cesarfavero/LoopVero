# `captureFailed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/browser/browser-tool-auto-review.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/browser-tool-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743395-743400](../../../../../../../../reference/runtime/host-main.cjs#L743395-L743400) | `FunctionDeclaration` | no | `timedOut` |
| [evaluation:516246-516251](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516246-L516251) | `FunctionDeclaration` | no | `timedOut` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743395-743400](../../../../../../../../reference/runtime/host-main.cjs#L743395-L743400) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:516246-516251](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516246-L516251) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:743395

Calls written directly in this body: `new SandBrowserAutoReviewBlockedError`.

SHA-256 of the source span: `ecc652aac789dc902b5e9ca6cf5819b4d51132d8cea1e2bd19a80a61185c7c46`.

### evaluation:516246

Calls written directly in this body: `new SandBrowserAutoReviewBlockedError`.

SHA-256 of the source span: `ecc652aac789dc902b5e9ca6cf5819b4d51132d8cea1e2bd19a80a61185c7c46`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

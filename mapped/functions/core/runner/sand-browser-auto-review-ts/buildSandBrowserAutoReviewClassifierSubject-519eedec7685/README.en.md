# `buildSandBrowserAutoReviewClassifierSubject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699729-699739](../../../../../../reference/runtime/host-main.cjs#L699729-L699739) | `FunctionDeclaration` | no | `args` |
| [evaluation:513485-513495](../../../../../../reference/runtime/sand-eval-runner.cjs#L513485-L513495) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699729-699739](../../../../../../reference/runtime/host-main.cjs#L699729-L699739) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513485-513495](../../../../../../reference/runtime/sand-eval-runner.cjs#L513485-L513495) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:699729

Calls written directly in this body: `normalizeSandBrowserElement`, `normalizeSandBrowserExactActionArgs`.

SHA-256 of the source span: `584ef8ad03b8836c88a214fd542cdc33176bd185d77821476c02ee96a2e4c333`.

### evaluation:513485

Calls written directly in this body: `normalizeSandBrowserElement`, `normalizeSandBrowserExactActionArgs`.

SHA-256 of the source span: `584ef8ad03b8836c88a214fd542cdc33176bd185d77821476c02ee96a2e4c333`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

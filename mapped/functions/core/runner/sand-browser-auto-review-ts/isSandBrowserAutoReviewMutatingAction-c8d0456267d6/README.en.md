# `isSandBrowserAutoReviewMutatingAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699678-699683](../../../../../../reference/runtime/host-main.cjs#L699678-L699683) | `FunctionDeclaration` | no | `action` |
| [evaluation:513434-513439](../../../../../../reference/runtime/sand-eval-runner.cjs#L513434-L513439) | `FunctionDeclaration` | no | `action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699678-699683](../../../../../../reference/runtime/host-main.cjs#L699678-L699683) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:513434-513439](../../../../../../reference/runtime/sand-eval-runner.cjs#L513434-L513439) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:699678

Calls written directly in this body: `BYPASS_BROWSER_OPS.has`.

SHA-256 of the source span: `a94bc880aaf5fb662402361773e5af486fe97336749925a582cea2ae509347f5`.

### evaluation:513434

Calls written directly in this body: `BYPASS_BROWSER_OPS.has`.

SHA-256 of the source span: `a94bc880aaf5fb662402361773e5af486fe97336749925a582cea2ae509347f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

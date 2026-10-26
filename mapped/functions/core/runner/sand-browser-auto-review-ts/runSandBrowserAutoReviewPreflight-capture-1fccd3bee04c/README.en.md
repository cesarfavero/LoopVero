# `runSandBrowserAutoReviewPreflight/capture`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699879-699884](../../../../../../reference/runtime/host-main.cjs#L699879-L699884) | `ArrowFunctionExpression` | no | `execution` |
| [evaluation:513635-513640](../../../../../../reference/runtime/sand-eval-runner.cjs#L513635-L513640) | `ArrowFunctionExpression` | no | `execution` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699879-699884](../../../../../../reference/runtime/host-main.cjs#L699879-L699884) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:699879 uses an implicit arrow-function return.
| [evaluation:513635-513640](../../../../../../reference/runtime/sand-eval-runner.cjs#L513635-L513640) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:513635 uses an implicit arrow-function return.

### host:699879

Calls written directly in this body: `measureReviewPhase`.

SHA-256 of the source span: `e55397459953f51008d438ae3e3e79aef64d67c794ba729094f5d1760377abe7`.

### evaluation:513635

Calls written directly in this body: `measureReviewPhase`.

SHA-256 of the source span: `e55397459953f51008d438ae3e3e79aef64d67c794ba729094f5d1760377abe7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `rowTool/<callback>/captureReviewState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751264-751269](../../../../../../../reference/runtime/host-main.cjs#L751264-L751269) | `ArrowFunctionExpression` | no | `stateCtx, stateToolCallId` |
| [evaluation:524115-524120](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524115-L524120) | `ArrowFunctionExpression` | no | `stateCtx, stateToolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751264-751269](../../../../../../../reference/runtime/host-main.cjs#L751264-L751269) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:751264 uses an implicit arrow-function return.
| [evaluation:524115-524120](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524115-L524120) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:524115 uses an implicit arrow-function return.

### host:751264

Calls written directly in this body: `captureBrowserReviewState`.

SHA-256 of the source span: `87dce1c3b4f018a7701bc136aac2ebce5b37369df167c84c583b99a94f49669a`.

### evaluation:524115

Calls written directly in this body: `captureBrowserReviewState`.

SHA-256 of the source span: `87dce1c3b4f018a7701bc136aac2ebce5b37369df167c84c583b99a94f49669a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

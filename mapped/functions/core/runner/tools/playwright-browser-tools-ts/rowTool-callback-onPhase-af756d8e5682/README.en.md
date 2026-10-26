# `rowTool/<callback>/onPhase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751192-751216](../../../../../../../reference/runtime/host-main.cjs#L751192-L751216) | `ArrowFunctionExpression` | no | `reviewed` |
| [evaluation:524043-524067](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524043-L524067) | `ArrowFunctionExpression` | no | `reviewed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751192-751216](../../../../../../../reference/runtime/host-main.cjs#L751192-L751216) | 2 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:524043-524067](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524043-L524067) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:751192

Calls written directly in this body: `observePlaywrightPhaseSafely`, `playwrightPhaseSpanName`, `playwrightPhaseSpanOutcome`, `readOnlyReview.observePhase`, `recordCompletedComputerUseSpan`.

Assignment or increment targets: `foregroundReviewMs`, `pageCheck`.

SHA-256 of the source span: `110efbef804fb3cf51af10b9271a50f99ebbe6ff2d0716fac2370bd60dbf16f9`.

### evaluation:524043

Calls written directly in this body: `observePlaywrightPhaseSafely`, `playwrightPhaseSpanName`, `playwrightPhaseSpanOutcome`, `readOnlyReview.observePhase`, `recordCompletedComputerUseSpan`.

Assignment or increment targets: `foregroundReviewMs`, `pageCheck`.

SHA-256 of the source span: `110efbef804fb3cf51af10b9271a50f99ebbe6ff2d0716fac2370bd60dbf16f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `recordPlaywrightRunCodeReview`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-review-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-review-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742673-742695](../../../../../../reference/runtime/host-main.cjs#L742673-L742695) | `FunctionDeclaration` | no | `ctx, args` |
| [evaluation:515335-515357](../../../../../../reference/runtime/sand-eval-runner.cjs#L515335-L515357) | `FunctionDeclaration` | no | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742673-742695](../../../../../../reference/runtime/host-main.cjs#L742673-L742695) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515335-515357](../../../../../../reference/runtime/sand-eval-runner.cjs#L515335-L515357) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:742673

Calls written directly in this body: `Math.round`, `codeModeLabel`, `isRunCodeReviewMismatch`, `logger118.warn`, `reviews.histogram`, `servedModelLabel`.

SHA-256 of the source span: `fa555e07b049f1149a44d4c625d62be92db031f3cf04f7f87d0bb3b9eeccb55b`.

### evaluation:515335

Calls written directly in this body: `Math.round`, `codeModeLabel2`, `isRunCodeReviewMismatch`, `logger91.warn`, `reviews.histogram`, `servedModelLabel`.

SHA-256 of the source span: `68e47e6f1d750b3755a76a5f04a064f52fe09ab452375ca036a9c75ce41cfda9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

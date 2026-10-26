# `PlaywrightTreeRewrite.rewrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751067-751070](../../../../../../../reference/runtime/host-main.cjs#L751067-L751070) | `ArrowFunctionExpression` | no | `text3` |
| [evaluation:523918-523921](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523918-L523921) | `ArrowFunctionExpression` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751067-751070](../../../../../../../reference/runtime/host-main.cjs#L751067-L751070) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523918-523921](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523918-L523921) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:751067

Calls written directly in this body: `formatPlaywrightResultText`.

Assignment or increment targets: `this.applied`.

SHA-256 of the source span: `6f7208d10c371d25a303acf51b8ce98827e5c0742e3b9541ea916e443605c686`.

### evaluation:523918

Calls written directly in this body: `formatPlaywrightResultText`.

Assignment or increment targets: `this.applied`.

SHA-256 of the source span: `6f7208d10c371d25a303acf51b8ce98827e5c0742e3b9541ea916e443605c686`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `createPlaywrightRunCodeOffer/settle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-run-code-offer.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-run-code-offer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693547-693556](../../../../../../../../reference/runtime/host-main.cjs#L693547-L693556) | `ArrowFunctionExpression` | no | `{ offered, reviewMode, admission, offerAdmission = admission, codeMode }` |
| [evaluation:483225-483234](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L483225-L483234) | `ArrowFunctionExpression` | no | `{ offered, reviewMode, admission, offerAdmission = admission, codeMode }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693547-693556](../../../../../../../../reference/runtime/host-main.cjs#L693547-L693556) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:483225-483234](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L483225-L483234) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:693547

Calls written directly in this body: `codeMode`, `onOffered`.

Assignment or increment targets: `listed`, `reported2`, `settled`.

SHA-256 of the source span: `54bd961bc718ba3b62041a5a1f7884a628f299bce7e4cdd03c351afca9e34524`.

### evaluation:483225

Calls written directly in this body: `codeMode`, `onOffered`.

Assignment or increment targets: `listed`, `reported2`, `settled`.

SHA-256 of the source span: `54bd961bc718ba3b62041a5a1f7884a628f299bce7e4cdd03c351afca9e34524`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

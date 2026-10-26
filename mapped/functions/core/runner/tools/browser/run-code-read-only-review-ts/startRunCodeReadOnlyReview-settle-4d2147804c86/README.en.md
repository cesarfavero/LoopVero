# `startRunCodeReadOnlyReview/settle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only-review.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750320-750333](../../../../../../../../reference/runtime/host-main.cjs#L750320-L750333) | `FunctionExpression` | no | `error64` |
| [evaluation:523171-523184](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523171-L523184) | `FunctionExpression` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750320-750333](../../../../../../../../reference/runtime/host-main.cjs#L750320-L750333) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:523171-523184](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523171-L523184) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:750320

Calls written directly in this body: `Math.max`, `now`, `outcomeOf`, `settled`.

SHA-256 of the source span: `887b0010c523a6a72bf30963a53a24be1e32be6310955c72519a4fc1133130a2`.

### evaluation:523171

Calls written directly in this body: `Math.max`, `now`, `outcomeOf`, `settled`.

SHA-256 of the source span: `63d8f7e2022d6d2f9fabab4e5b173c4ac099ebb895cddc2518261ff430fc0046`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

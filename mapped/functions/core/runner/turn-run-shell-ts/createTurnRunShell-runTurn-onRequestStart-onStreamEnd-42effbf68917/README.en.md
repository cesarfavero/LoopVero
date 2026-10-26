# `createTurnRunShell/runTurn/onRequestStart/onStreamEnd`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592052-592060](../../../../../../reference/runtime/sand-eval-runner.cjs#L592052-L592060) | `ArrowFunctionExpression` | no | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592052-592060](../../../../../../reference/runtime/sand-eval-runner.cjs#L592052-L592060) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:592052

Calls written directly in this body: `cancelRun`, `new SandRunAbortError`.

SHA-256 of the source span: `8f8f06a862f2ae30d7cf7bb19313d1e309fe4cc2eafd309648f61636e97f1e29`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

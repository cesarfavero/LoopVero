# `createTurnRunShell/runTurn/endThisRunAwaitingUser`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591865-591874](../../../../../../reference/runtime/sand-eval-runner.cjs#L591865-L591874) | `ArrowFunctionExpression` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591865-591874](../../../../../../reference/runtime/sand-eval-runner.cjs#L591865-L591874) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:591865

Calls written directly in this body: `cancelRun`, `new SandRunAbortError`.

Assignment or increment targets: `stopRequest`.

SHA-256 of the source span: `3e2626cb3eb8a02f31c7b4439631325064bad74f26e5c20102dea6510da2151b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

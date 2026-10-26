# `createTurnRunShell/runTurn/persistCheckpoint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-run-shell.ts` · [Module README](../../../../../modules/core/runner/turn-run-shell-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592329-592363](../../../../../../reference/runtime/sand-eval-runner.cjs#L592329-L592363) | `ArrowFunctionExpression` | no | `checkpointCtx, checkpoint, noteCheckpoint` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592329-592363](../../../../../../reference/runtime/sand-eval-runner.cjs#L592329-L592363) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:592329

Calls written directly in this body: `Promise.resolve`, `Promise.withResolvers`, `previous.then`, `stepCap.noteCheckpoint`.

Assignment or increment targets: `checkpointChain`.

SHA-256 of the source span: `18b8728a5b89e56b88622ec85ed54749d7fa53111565de75d90806852be251e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

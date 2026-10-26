# `createRemoteBoxResourceAccessor/connect3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/remote-box-resources.ts` · [Module README](../../../../../modules/core/runner/remote-box-resources-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534417-534446](../../../../../../reference/runtime/sand-eval-runner.cjs#L534417-L534446) | `ArrowFunctionExpression` | yes | `ctx, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534417-534446](../../../../../../reference/runtime/sand-eval-runner.cjs#L534417-L534446) | 2 | 0 | 2 | 1 | 2 | 1 |

### evaluation:534417

Calls written directly in this body: `Date.now`, `boxIsPreparing`, `boxNotReadyReasonForError`, `dropConnection`, `host.setRemoteBoxTerminalsFolder`, `new SandBoxNotReadyError`.

Assignment or increment targets: `connectedThisTurn`, `connectionPromise`, `currentConnection`.

Explicit throw targets: `SandBoxNotReadyError`.

SHA-256 of the source span: `3f57714e833e259383e0a664debf1089c2133de9ce9f4946e7de455e5f2b849c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

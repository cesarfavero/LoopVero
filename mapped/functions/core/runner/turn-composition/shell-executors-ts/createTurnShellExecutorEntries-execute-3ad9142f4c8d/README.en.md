# `createTurnShellExecutorEntries/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-composition/shell-executors.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/shell-executors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587529-587532](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587529-L587532) | `ArrowFunctionExpression` | no | `ctx, args, options2` |
| [evaluation:587535-587538](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587535-L587538) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587529-587532](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587529-L587532) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:587535-587538](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587535-L587538) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:587529

Calls written directly in this body: `baseShellStream.execute`, `host.autoReviewGate.assertNoPendingApproval`.

SHA-256 of the source span: `603c24589009e739634a0056567a470dac7c771a47553604aa5ab3958323ab6d`.

### evaluation:587535

Calls written directly in this body: `baseBackgroundShell.execute`, `host.autoReviewGate.assertNoPendingApproval`.

SHA-256 of the source span: `4c417ed7e08504a0efc2fe58dfbf4f9256008577cc1d505c7817b9379e03961f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

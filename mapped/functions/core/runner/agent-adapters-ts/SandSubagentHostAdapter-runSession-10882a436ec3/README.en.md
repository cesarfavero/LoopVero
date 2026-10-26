# `SandSubagentHostAdapter.runSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-adapters.ts` · [Module README](../../../../../modules/core/runner/agent-adapters-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583017-583085](../../../../../../reference/runtime/sand-eval-runner.cjs#L583017-L583085) | `method` | yes | `ctx, agentId, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583017-583085](../../../../../../reference/runtime/sand-eval-runner.cjs#L583017-L583085) | 9 | 0 | 2 | 6 | 0 | 1 |

### evaluation:583017

Calls written directly in this body: `String`, `args.selectedContext.selectedImages.map`, `deriveSandRequestLineage`, `getSpan2`, `recordDelegationDispatched`, `this.dispatcher.connectorScopeForTurn`, `this.dispatcher.dispatch`, `this.dispatcher.isRunning`, `this.forkedContext`, `this.releaseSession`, `this.reviewLaunchOrDeny`, `this.runDetachedSession`, `this.sessionEventSequence`, `this.sessions.get`.

Assignment or increment targets: `selectedImages`.

SHA-256 of the source span: `2f2888c5557854ca4e89998ed205903276e771033a15e89adeea6ff1bbfc10f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

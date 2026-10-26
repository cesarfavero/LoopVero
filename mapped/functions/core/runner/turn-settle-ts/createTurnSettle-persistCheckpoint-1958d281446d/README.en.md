# `createTurnSettle/persistCheckpoint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590746-590757](../../../../../../reference/runtime/sand-eval-runner.cjs#L590746-L590757) | `ArrowFunctionExpression` | yes | `ctx, checkpoint` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590746-590757](../../../../../../reference/runtime/sand-eval-runner.cjs#L590746-L590757) | 4 | 0 | 1 | 0 | 0 | 0 |

### evaluation:590746

Calls written directly in this body: `host.agentStore`, `host.getAwaitingUserInputTurnId`, `host.getCompletedTurnId`, `host.setLocalState`, `store.handleCheckpoint`.

SHA-256 of the source span: `16c14f34b5ca0aaee31161380a39d0dd74226312c0d5eec3b5a5bcc85f6a8bcb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

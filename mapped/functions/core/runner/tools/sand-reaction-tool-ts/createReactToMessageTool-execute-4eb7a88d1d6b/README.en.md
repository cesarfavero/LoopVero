# `createReactToMessageTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-reaction-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-reaction-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765589-765604](../../../../../../../reference/runtime/host-main.cjs#L765589-L765604) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:558955-558970](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558955-L558970) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765589-765604](../../../../../../../reference/runtime/host-main.cjs#L765589-L765604) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:558955-558970](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558955-L558970) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:765589

Calls written directly in this body: `args.emoji.trim`, `args.message_address.trim`, `ctx.get`, `d.completeTurnAfterReaction`, `d.getBlockReason`, `d.react`, `isMessageAddress`.

SHA-256 of the source span: `64142e77acbf4aec14d75accf42676e081030c97c6343cd60c2f2b0bdc883ae3`.

### evaluation:558955

Calls written directly in this body: `args.emoji.trim`, `args.message_address.trim`, `ctx.get`, `d.completeTurnAfterReaction`, `d.getBlockReason`, `d.react`, `isMessageAddress`.

SHA-256 of the source span: `64142e77acbf4aec14d75accf42676e081030c97c6343cd60c2f2b0bdc883ae3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

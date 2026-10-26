# `SandSubagentHostAdapter.reviewLaunchOrDeny`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-adapters.ts` · [Module README](../../../../../modules/core/runner/agent-adapters-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583086-583110](../../../../../../reference/runtime/sand-eval-runner.cjs#L583086-L583110) | `method` | yes | `ctx, agentId, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583086-583110](../../../../../../reference/runtime/sand-eval-runner.cjs#L583086-L583110) | 3 | 0 | 1 | 3 | 0 | 1 |

### evaluation:583086

Calls written directly in this body: `__callDispose`, `__using`, `createSpan`, `ctx.withName`, `this.releaseSession`, `this.reviewLaunch`.

SHA-256 of the source span: `92201b096db6d243eb666a10a1b5b7ab3cbc5d6e0717d6bd45037db6d5840237`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

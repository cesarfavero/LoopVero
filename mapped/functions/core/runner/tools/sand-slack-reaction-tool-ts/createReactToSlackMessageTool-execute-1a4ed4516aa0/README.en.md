# `createReactToSlackMessageTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-slack-reaction-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-slack-reaction-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768214-768227](../../../../../../../reference/runtime/host-main.cjs#L768214-L768227) | `ArrowFunctionExpression` | yes | `_ctx, args, slack` |
| [evaluation:563730-563743](../../../../../../../reference/runtime/sand-eval-runner.cjs#L563730-L563743) | `ArrowFunctionExpression` | yes | `_ctx, args, slack` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768214-768227](../../../../../../../reference/runtime/host-main.cjs#L768214-L768227) | 2 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:563730-563743](../../../../../../../reference/runtime/sand-eval-runner.cjs#L563730-L563743) | 2 | 0 | 1 | 1 | 1 | 0 |

### host:768214

Calls written directly in this body: `args.channel.trim`, `args.emoji.trim`, `args.message_ts.trim`, `new SandToolInputError`, `normalizeSlackEmojiName`, `slack.react`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `d5f4b89fe16ada4ff91c505a2bc4dc0d61e8197a13f4e126093820d34c56e1f5`.

### evaluation:563730

Calls written directly in this body: `args.channel.trim`, `args.emoji.trim`, `args.message_ts.trim`, `new SandToolInputError`, `normalizeSlackEmojiName`, `slack.react`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `d5f4b89fe16ada4ff91c505a2bc4dc0d61e8197a13f4e126093820d34c56e1f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `createSetSlackStatusTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/slack/sand-slack-status-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/slack/sand-slack-status-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740949-740952](../../../../../../../../reference/runtime/host-main.cjs#L740949-L740952) | `ArrowFunctionExpression` | yes | `_ctx, args, deps` |
| [evaluation:480544-480547](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480544-L480547) | `ArrowFunctionExpression` | yes | `_ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740949-740952](../../../../../../../../reference/runtime/host-main.cjs#L740949-L740952) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480544-480547](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480544-L480547) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740949

Calls written directly in this body: `deps.set`.

SHA-256 of the source span: `939cca1271566574a78bdcf5d7ee24242f6313d5d60b80c5a58fc6ecffd962f5`.

### evaluation:480544

Calls written directly in this body: `deps.set`.

SHA-256 of the source span: `939cca1271566574a78bdcf5d7ee24242f6313d5d60b80c5a58fc6ecffd962f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

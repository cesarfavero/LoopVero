# `createDeleteOwnSlackMessageTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/slack/sand-slack-message-delete-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/slack/sand-slack-message-delete-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768246-768252](../../../../../../../../reference/runtime/host-main.cjs#L768246-L768252) | `ArrowFunctionExpression` | yes | `_ctx, args, slack` |
| [evaluation:563762-563768](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563762-L563768) | `ArrowFunctionExpression` | yes | `_ctx, args, slack` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768246-768252](../../../../../../../../reference/runtime/host-main.cjs#L768246-L768252) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563762-563768](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563762-L563768) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:768246

Calls written directly in this body: `args.channel.trim`, `args.message_ts.trim`, `slack.deleteOwnMessage`.

SHA-256 of the source span: `f742e365b760393ddaa8008af8dc68d32a27d5bcb76a5f567049b5c7032b9f21`.

### evaluation:563762

Calls written directly in this body: `args.channel.trim`, `args.message_ts.trim`, `slack.deleteOwnMessage`.

SHA-256 of the source span: `f742e365b760393ddaa8008af8dc68d32a27d5bcb76a5f567049b5c7032b9f21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

# `build/onSendMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769057-769071](../../../../../../../../reference/runtime/host-main.cjs#L769057-L769071) | `ArrowFunctionExpression` | no | `message, timestampMs, deliverTo, toolCallId` |
| [evaluation:564704-564718](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564704-L564718) | `ArrowFunctionExpression` | no | `message, timestampMs, deliverTo, toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769057-769071](../../../../../../../../reference/runtime/host-main.cjs#L769057-L769071) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564704-564718](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564704-L564718) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:769057

Calls written directly in this body: `armPluginLinkWaits`, `host.emitUpdate`, `turn.reportWidgetShown`.

SHA-256 of the source span: `dabd5d59642b9029c1945b27af874b438041f14a42899c496e4cd25aee4f595d`.

### evaluation:564704

Calls written directly in this body: `armPluginLinkWaits`, `host.emitUpdate`, `turn.reportWidgetShown`.

SHA-256 of the source span: `dabd5d59642b9029c1945b27af874b438041f14a42899c496e4cd25aee4f595d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

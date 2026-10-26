# `createSendMessageTool2/render`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761573-761597](../../../../../../../reference/runtime/host-main.cjs#L761573-L761597) | `ArrowFunctionExpression` | yes | `_ctx, output2` |
| [evaluation:552388-552412](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552388-L552412) | `ArrowFunctionExpression` | yes | `_ctx, output2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761573-761597](../../../../../../../reference/runtime/host-main.cjs#L761573-L761597) | 8 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:552388-552412](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552388-L552412) | 8 | 0 | 0 | 5 | 0 | 0 |

### host:761573

Calls written directly in this body: `String`, `createStringResult`, `detail.startsWith`, `meetingSendResults.delete`, `meetingSendResults.get`, `output2.result.value.error.trim`, `output2.result.value.messageId.trim`, `threadSendResults.delete`, `threadSendResults.get`.

SHA-256 of the source span: `31d87cbcc7e65a0aabcc2bc187c30551b3b4652dc0b9312b793aeafa5ebeea76`.

### evaluation:552388

Calls written directly in this body: `String`, `createStringResult`, `detail.startsWith`, `meetingSendResults.delete`, `meetingSendResults.get`, `output2.result.value.error.trim`, `output2.result.value.messageId.trim`, `threadSendResults.delete`, `threadSendResults.get`.

SHA-256 of the source span: `31d87cbcc7e65a0aabcc2bc187c30551b3b4652dc0b9312b793aeafa5ebeea76`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

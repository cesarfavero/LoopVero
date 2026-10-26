# `createSendMessageTool2/serializeError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761598-761611](../../../../../../../reference/runtime/host-main.cjs#L761598-L761611) | `ArrowFunctionExpression` | no | `error64` |
| [evaluation:552413-552426](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552413-L552426) | `ArrowFunctionExpression` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761598-761611](../../../../../../../reference/runtime/host-main.cjs#L761598-L761611) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552413-552426](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552413-L552426) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:761598

Calls written directly in this body: `createSendMessageToolCall`, `new SendMessageError`, `new SendMessageResult`, `new SendMessageToolCall`.

SHA-256 of the source span: `3dc0ed1d8c7d129284ab2412829185af3f035689971b795d9ca4fd860390c21a`.

### evaluation:552413

Calls written directly in this body: `createSendMessageToolCall`, `new SendMessageError`, `new SendMessageResult`, `new SendMessageToolCall`.

SHA-256 of the source span: `8f2513b643729c7e36c9d879da0d520e92ca8f714d2ae94697bbd6c26a021a32`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

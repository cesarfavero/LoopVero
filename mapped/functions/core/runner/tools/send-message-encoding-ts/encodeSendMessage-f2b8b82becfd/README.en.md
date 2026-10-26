# `encodeSendMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-encoding.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-encoding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759664-759972](../../../../../../../reference/runtime/host-main.cjs#L759664-L759972) | `FunctionDeclaration` | no | `message` |
| [evaluation:550268-550576](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550268-L550576) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759664-759972](../../../../../../../reference/runtime/host-main.cjs#L759664-L759972) | 42 | 0 | 0 | 32 | 0 | 0 |
| [evaluation:550268-550576](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550268-L550576) | 42 | 0 | 0 | 32 | 0 | 0 |

### host:759664

Calls written directly in this body: `.join`, `JSON.stringify`, `encodeTextContent`, `folderLabel`, `isComputerUseToolId`, `listenerIntegrationManifest`, `message.approval.currency.toUpperCase`, `message.approval.items.map`, `message.approval.lineItems.map`, `message.connectors.join`, `message.draft.cc.join`, `message.draft.to.join`, `message.request.secrets.map`, `message.summary.replace`, `message.title.trim`, `new SendMessageArgs`, `new SendMessageAttachment`, `new SendMessageText`, `publishApprovalTarget`, `summarizeCredentialRequest`, `summarizePermissionRequest`, `summarizeSecretRequest`, `summarizeUserFormRequest`, `summarizeWidget`.

SHA-256 of the source span: `0e4d2395dd667b870cad0fb0970c253470175a0a110bece95371968168b2d2fd`.

### evaluation:550268

Calls written directly in this body: `.join`, `JSON.stringify`, `encodeTextContent`, `folderLabel`, `isComputerUseToolId`, `listenerIntegrationManifest`, `message.approval.currency.toUpperCase`, `message.approval.items.map`, `message.approval.lineItems.map`, `message.connectors.join`, `message.draft.cc.join`, `message.draft.to.join`, `message.request.secrets.map`, `message.summary.replace`, `message.title.trim`, `new SendMessageArgs`, `new SendMessageAttachment`, `new SendMessageText`, `publishApprovalTarget`, `summarizeCredentialRequest`, `summarizePermissionRequest`, `summarizeSecretRequest`, `summarizeUserFormRequest`, `summarizeWidget`.

SHA-256 of the source span: `0e4d2395dd667b870cad0fb0970c253470175a0a110bece95371968168b2d2fd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

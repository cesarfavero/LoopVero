# `attemptEmailSend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-email-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764393-764483](../../../../../../../reference/runtime/host-main.cjs#L764393-L764483) | `FunctionDeclaration` | yes | `deps, args` |
| [evaluation:557761-557851](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557761-L557851) | `FunctionDeclaration` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764393-764483](../../../../../../../reference/runtime/host-main.cjs#L764393-L764483) | 19 | 0 | 5 | 3 | 3 | 0 |
| [evaluation:557761-557851](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557761-L557851) | 19 | 0 | 5 | 3 | 3 | 0 |

### host:764393

Calls written directly in this body: `.join`, `JSON.stringify`, `deps.email.describeAttachments`, `deps.email.listInboxes`, `deps.email.send`, `deps.getAgentDir`, `deps.reviewSend`, `describeAttachments`, `describeRecipients`, `describeSuppressed`, `described2.map`, `grokBotStoreAttachmentAliases`, `inboxes.map`, `input2.replyTo.map`, `new SandToolInputError`, `normalizeSendEmailArgs`, `owned.join`, `resolveAttachmentPaths`, `sendingAddressOwnership`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `340c413473f91f307b3819aa5c31d74116e2327732fd387e06d9c45f8a67d1a0`.

### evaluation:557761

Calls written directly in this body: `.join`, `JSON.stringify`, `deps.email.describeAttachments`, `deps.email.listInboxes`, `deps.email.send`, `deps.getAgentDir`, `deps.reviewSend`, `describeAttachments`, `describeRecipients`, `describeSuppressed`, `described2.map`, `grokBotStoreAttachmentAliases`, `inboxes.map`, `input2.replyTo.map`, `new SandToolInputError`, `normalizeSendEmailArgs`, `owned.join`, `resolveAttachmentPaths`, `sendingAddressOwnership`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `340c413473f91f307b3819aa5c31d74116e2327732fd387e06d9c45f8a67d1a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

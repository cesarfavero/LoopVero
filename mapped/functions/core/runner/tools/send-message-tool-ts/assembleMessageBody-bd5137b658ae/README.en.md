# `assembleMessageBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760927-761109](../../../../../../../reference/runtime/host-main.cjs#L760927-L761109) | `FunctionDeclaration` | yes | `ctx, rawArgs, deps, cards` |
| [evaluation:551742-551924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551742-L551924) | `FunctionDeclaration` | yes | `ctx, rawArgs, deps, cards` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760927-761109](../../../../../../../reference/runtime/host-main.cjs#L760927-L761109) | 47 | 1 | 7 | 9 | 9 | 0 |
| [evaluation:551742-551924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551742-L551924) | 47 | 1 | 7 | 9 | 9 | 0 |

### host:760927

Calls written directly in this body: `Date.now`, `clampCredentialPurpose`, `clampSecretDescription`, `clampSecretLabel`, `credential.logins.map`, `deps.activeTurnRequestSource`, `deps.resolveCredentialBrowserTarget`, `describeChannelAddressProblem`, `images.push`, `isWebpageAttachmentUrl`, `measureMediaDimensions`, `new SandToolInputError`, `normalizeCredentialTarget`, `resolveAttachmentSource`, `resolveCloudAgentTitleBestEffort`, `resolveSendMessageAct`, `resolveSendMessageOpen`, `resolveSendMessageSecretTarget`, `sendToUserActEnabled`, `sendToUserLinkVisibility`, `sendToUserOpenEnabled`, `textMessageBody`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `b2a785136d898a06adfc24682d932dec19123f55e98d87c0edbb0c68a29993ae`.

### evaluation:551742

Calls written directly in this body: `Date.now`, `clampCredentialPurpose`, `clampSecretDescription`, `clampSecretLabel`, `credential.logins.map`, `deps.activeTurnRequestSource`, `deps.resolveCredentialBrowserTarget`, `describeChannelAddressProblem`, `images.push`, `isWebpageAttachmentUrl`, `measureMediaDimensions`, `new SandToolInputError`, `normalizeCredentialTarget`, `resolveAttachmentSource`, `resolveCloudAgentTitleBestEffort`, `resolveSendMessageAct`, `resolveSendMessageOpen`, `resolveSendMessageSecretTarget`, `sendToUserActEnabled`, `sendToUserLinkVisibility`, `sendToUserOpenEnabled`, `textMessageBody`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `cf858697a22737d5b11e955dd9449372416d5cbfa99d75345b0b79867cc9384e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

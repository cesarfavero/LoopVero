# `parseSlackChatTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/slack-address.ts` · [Module README](../../../../../modules/shared/channels/slack-address-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757541-757560](../../../../../../reference/runtime/host-main.cjs#L757541-L757560) | `FunctionDeclaration` | no | `chat` |
| [evaluation:543562-543581](../../../../../../reference/runtime/sand-eval-runner.cjs#L543562-L543581) | `FunctionDeclaration` | no | `chat` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757541-757560](../../../../../../reference/runtime/host-main.cjs#L757541-L757560) | 4 | 0 | 0 | 4 | 1 | 0 |
| [evaluation:543562-543581](../../../../../../reference/runtime/sand-eval-runner.cjs#L543562-L543581) | 4 | 0 | 0 | 4 | 1 | 0 |

### host:757541

Calls written directly in this body: `SLACK_CHANNEL_ID_PATTERN.test`, `SLACK_IM_ID_PATTERN.test`, `SLACK_MEMBER_ID_PATTERN.test`, `chat.indexOf`, `chat.slice`, `new SlackChatAddressError`.

Explicit throw targets: `SlackChatAddressError`.

SHA-256 of the source span: `61c5d73bb413d249924862a38c5b36e31b9ef3e2117fa85d0b5ca54a6f930074`.

### evaluation:543562

Calls written directly in this body: `SLACK_CHANNEL_ID_PATTERN.test`, `SLACK_IM_ID_PATTERN.test`, `SLACK_MEMBER_ID_PATTERN.test`, `chat.indexOf`, `chat.slice`, `new SlackChatAddressError`.

Explicit throw targets: `SlackChatAddressError`.

SHA-256 of the source span: `61c5d73bb413d249924862a38c5b36e31b9ef3e2117fa85d0b5ca54a6f930074`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

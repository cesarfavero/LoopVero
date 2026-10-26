# `createServerAgentProxy/setAgentHidden`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714885-714897](../../../../../../../reference/runtime/host-main.cjs#L714885-L714897) | `ArrowFunctionExpression` | yes | `agentId, isHidden` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714885-714897](../../../../../../../reference/runtime/host-main.cjs#L714885-L714897) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:714885

Calls written directly in this body: `actionClient.setGrokBotAgentClientState`, `classifyServerAgentActionError`, `ensureTailStarted`, `patchClientOverlay`.

SHA-256 of the source span: `494e40eba69379d62dd0995e79b30d69bb7f28762229ac5840c9dedbf1dd5ca2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

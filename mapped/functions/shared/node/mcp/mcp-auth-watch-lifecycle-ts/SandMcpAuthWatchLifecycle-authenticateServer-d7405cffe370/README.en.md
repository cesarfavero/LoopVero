# `SandMcpAuthWatchLifecycle.authenticateServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685748-685758](../../../../../../../reference/runtime/host-main.cjs#L685748-L685758) | `method` | yes | `rawServerId, rawAccountKey, requestingAgentId = null, forceReauth = false, trigger2 = null, grokBotAgentId = null, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685748-685758](../../../../../../../reference/runtime/host-main.cjs#L685748-L685758) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:685748

Calls written directly in this body: `this.authenticate`.

SHA-256 of the source span: `3c4d0032ec09ba4951e1e9683bdca64d6a6862ac1ad8a2dfbb9f374921c0af4c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

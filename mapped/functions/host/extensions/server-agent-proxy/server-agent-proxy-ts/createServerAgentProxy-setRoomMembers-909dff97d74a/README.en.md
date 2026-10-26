# `createServerAgentProxy/setRoomMembers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714862-714884](../../../../../../../reference/runtime/host-main.cjs#L714862-L714884) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714862-714884](../../../../../../../reference/runtime/host-main.cjs#L714862-L714884) | 1 | 0 | 2 | 3 | 0 | 1 |

### host:714862

Calls written directly in this body: `.find`, `classifyServerRoomActionError`, `deps.listAgentsSync`, `ensureTailStarted`, `roomClient.setGrokBotRoomMembers`, `roomRowFromFallback`, `roomSummaryAfterAdopt`.

Assignment or increment targets: `confirmed`.

SHA-256 of the source span: `472df6831ce18660b0381723f5e3a49eb97bc7cfa258aed48d9cbb4fefa56378`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

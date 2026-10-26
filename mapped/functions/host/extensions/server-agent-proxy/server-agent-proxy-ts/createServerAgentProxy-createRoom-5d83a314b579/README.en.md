# `createServerAgentProxy/createRoom`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714806-714861](../../../../../../../reference/runtime/host-main.cjs#L714806-L714861) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714806-714861](../../../../../../../reference/runtime/host-main.cjs#L714806-L714861) | 4 | 0 | 3 | 6 | 0 | 2 |

### host:714806

Calls written directly in this body: `.map`, `.slice`, `assertValidSandAgentId`, `classifyServerRoomActionError`, `clock.monotonicNow`, `deps.ensureServerRoomMembers`, `deps.listAgentsSync`, `ensureTailStarted`, `memberAgentIds.filter`, `new Map`, `new Set`, `roomCreateRetry.runWithRetry`, `roomSummaryAfterAdopt`.

Assignment or increment targets: `confirmed`, `roomsCapability`.

SHA-256 of the source span: `2d543b6d04eb17646c194668f7d1033908c21b02a7a1d0832ad8b5b5d2490323`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

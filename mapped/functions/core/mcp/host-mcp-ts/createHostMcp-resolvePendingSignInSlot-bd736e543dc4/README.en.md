# `createHostMcp/resolvePendingSignInSlot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701168-701194](../../../../../../reference/runtime/host-main.cjs#L701168-L701194) | `ArrowFunctionExpression` | yes | `providerIdentifier, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701168-701194](../../../../../../reference/runtime/host-main.cjs#L701168-L701194) | 6 | 0 | 2 | 5 | 0 | 1 |

### host:701168

Calls written directly in this body: `connectCardServerId`, `discovery.listBoxServers`, `manager.listServersFromCache`, `reportMcpHostEdgeFailure`, `signInAbsence.listedWithoutPageAtMs`, `state.servers.find`.

SHA-256 of the source span: `1726176758a10f870ab3c2107d8b14fab52cf92d32f70b19f1757b5315702cdf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

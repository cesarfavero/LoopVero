# `createHostMcp/resolveNeedsAuthSlot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701153-701167](../../../../../../reference/runtime/host-main.cjs#L701153-L701167) | `ArrowFunctionExpression` | yes | `providerIdentifier, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701153-701167](../../../../../../reference/runtime/host-main.cjs#L701153-L701167) | 4 | 0 | 1 | 2 | 0 | 0 |

### host:701153

Calls written directly in this body: `connectCardServerId`, `isPendingSignIn`, `manager.listServers`, `state.servers.find`.

SHA-256 of the source span: `3f00f79bbab1e8878bcc5bd8a6b07a05d2b5fdf114ceed6019fed62b987ee077`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

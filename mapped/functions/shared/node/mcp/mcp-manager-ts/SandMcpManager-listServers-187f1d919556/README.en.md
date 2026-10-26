# `SandMcpManager.listServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689353-689400](../../../../../../../reference/runtime/host-main.cjs#L689353-L689400) | `method` | yes | `options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689353-689400](../../../../../../../reference/runtime/host-main.cjs#L689353-L689400) | 6 | 1 | 4 | 2 | 0 | 1 |

### host:689353

Calls written directly in this body: `boxByName.set`, `boxRuntime.isBoxExecWired`, `httpDisplayServers`, `httpServers.map`, `new Map`, `reportBoxStdioErrorStatus`, `reportMcpHostEdgeFailure`, `state.servers.filter`, `stdioDisplayServers`, `this.accountSlots.noteListedState`, `this.connectorAuth.read`, `this.listBackendForStatus`, `this.listingCache.listBox`, `this.readVisibleDisplayServers`, `this.summarizeServers`.

Assignment or increment targets: `boxDiscoveryUnavailable`.

SHA-256 of the source span: `bd8390194ef6bb15f6bb00aa519fd0130f1863b4e38524f7e8ee8d2295693fc8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

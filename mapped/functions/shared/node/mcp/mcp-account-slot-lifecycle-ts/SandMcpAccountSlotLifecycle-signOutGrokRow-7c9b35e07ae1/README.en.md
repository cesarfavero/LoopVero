# `SandMcpAccountSlotLifecycle.signOutGrokRow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-account-slot-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-account-slot-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685323-685338](../../../../../../../reference/runtime/host-main.cjs#L685323-L685338) | `method` | yes | `serverId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685323-685338](../../../../../../../reference/runtime/host-main.cjs#L685323-L685338) | 2 | 0 | 3 | 1 | 1 | 0 |

### host:685323

Calls written directly in this body: `new SandMcpConfigError`, `server.serverIdentifier.trim`, `this.deps.backendMcpExec.logoutAccount`, `this.deps.clearPendingAuthWatch`, `this.deps.invalidateToolsCache`, `this.deps.notifyWatchCancelled`, `this.deps.reloadServers`, `this.deps.resolveDisplayServer`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `0d6ed210f444586d6cf005c2b7ce98e10d3ebb4ae62075a835a5865e35ea89fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

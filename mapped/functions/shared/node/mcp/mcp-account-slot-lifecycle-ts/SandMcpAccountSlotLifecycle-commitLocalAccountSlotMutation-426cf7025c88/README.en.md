# `SandMcpAccountSlotLifecycle.commitLocalAccountSlotMutation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-account-slot-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-account-slot-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685339-685366](../../../../../../../reference/runtime/host-main.cjs#L685339-L685366) | `method` | no | `serverId, patchSlots, patchSummaries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685339-685366](../../../../../../../reference/runtime/host-main.cjs#L685339-L685366) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:685339

Calls written directly in this body: `display.servers.find`, `display.servers.map`, `patchSlots`, `patchSummaries`, `patchedDisplayRow`, `runtimeConfigFromDisplay`, `this.deps.definitionSource.adoptAccountConfig`, `this.deps.dropBackendListing`, `this.deps.invalidateAccountRead`, `this.deps.invalidateToolsCache`, `this.deps.resetPushState`, `unnamedMcpRowIdentifier`.

Assignment or increment targets: `this.lastAccountDisplayConfig`, `this.lastListedState`.

SHA-256 of the source span: `dd8ada05e68109e557d956efa964d119211da798ab37018aa999d1d46c51310b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

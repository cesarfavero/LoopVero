# `SandMcpAccountSlotLifecycle.removeAccount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-account-slot-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-account-slot-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685299-685322](../../../../../../../reference/runtime/host-main.cjs#L685299-L685322) | `method` | yes | `rawServerId, rawAccountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685299-685322](../../../../../../../reference/runtime/host-main.cjs#L685299-L685322) | 3 | 0 | 4 | 3 | 0 | 0 |

### host:685299

Calls written directly in this body: `isGrokDisplayServerId`, `normalizeAccountKey`, `parseInt32McpListingServerId`, `rawServerId.trim`, `this.commitLocalAccountSlotMutation`, `this.deps.backendMcpExec.deleteAccount`, `this.deps.clearPendingAuthWatch`, `this.deps.notifyWatchCancelled`, `this.deps.reloadServers`, `this.resolveHttpDisplayServer`, `this.signOutGrokRow`.

SHA-256 of the source span: `054df4d992a3bd05163125be1512cabb44665fc2b2d09684927bffca1f9fcd18`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

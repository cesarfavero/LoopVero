# `SandMcpAccountSlotLifecycle.renameAccount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-account-slot-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-account-slot-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685269-685298](../../../../../../../reference/runtime/host-main.cjs#L685269-L685298) | `method` | yes | `rawServerId, rawAccountKey, rawNewAccountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685269-685298](../../../../../../../reference/runtime/host-main.cjs#L685269-L685298) | 2 | 0 | 3 | 2 | 0 | 0 |

### host:685269

Calls written directly in this body: `normalizeAccountKey`, `parseInt32McpServerId`, `this.commitLocalAccountSlotMutation`, `this.deps.backendMcpExec.renameAccount`, `this.deps.clearPendingAuthWatch`, `this.deps.notifyWatchCancelled`, `this.deps.reloadServers`, `this.resolveHttpDisplayServer`.

SHA-256 of the source span: `68fe084ca060aa845e10273354dccffce225f563462cd357920c052c738c504b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

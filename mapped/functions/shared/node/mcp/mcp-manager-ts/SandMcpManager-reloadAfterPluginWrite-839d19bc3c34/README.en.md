# `SandMcpManager.reloadAfterPluginWrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689969-689988](../../../../../../../reference/runtime/host-main.cjs#L689969-L689988) | `method` | yes | `write4, reload = "listed"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689969-689988](../../../../../../../reference/runtime/host-main.cjs#L689969-L689988) | 1 | 0 | 3 | 2 | 1 | 1 |

### host:689969

Calls written directly in this body: `this.accountSlots.noteListedState`, `this.displayListing.beginRead`, `this.displayListing.endRead`, `this.listAfterPluginWrite`, `this.noteSettledAfterPluginWrite`, `this.reload`, `this.reloadServers`.

Assignment or increment targets: `listed`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `0cd650764742933b2d2feb7cccabac49db5b7244de12906adae3dc7da9412d1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

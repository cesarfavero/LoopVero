# `SandMcpManager.listServersForDisplay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689441-689456](../../../../../../../reference/runtime/host-main.cjs#L689441-L689456) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689441-689456](../../../../../../../reference/runtime/host-main.cjs#L689441-L689456) | 1 | 0 | 1 | 1 | 1 | 1 |

### host:689441

Calls written directly in this body: `this.cachedListing`, `this.displayListing.beginRead`, `this.displayListing.endRead`, `this.kickAccountRecovery`, `this.readVisibleDisplayServers`, `this.settleBackendForDisplay`, `this.settleBoxForDisplay`, `this.summarizeServers`.

Assignment or increment targets: `visible`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `f3215a6324671f8bc297212ec064528b7fb88228e6be30b2e6e595f7e4f98eaa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

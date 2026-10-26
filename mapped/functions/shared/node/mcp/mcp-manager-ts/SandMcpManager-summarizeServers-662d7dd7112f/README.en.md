# `SandMcpManager.summarizeServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689500-689527](../../../../../../../reference/runtime/host-main.cjs#L689500-L689527) | `method` | no | `visibleServers, listing` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689500-689527](../../../../../../../reference/runtime/host-main.cjs#L689500-L689527) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:689500

Calls written directly in this body: `isWithheldMcpDisplayServer`, `listing.backendEntriesFor`, `listing.boxServerFor`, `servers.push`, `this.summaries.createBackendServerSummaries`, `this.summaries.createBoxServerSummary`, `this.withheldSummaries`.

SHA-256 of the source span: `caf3368449aaf8342496a075d325ea1f3648246167f7ed2613bec1c382c8d24d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

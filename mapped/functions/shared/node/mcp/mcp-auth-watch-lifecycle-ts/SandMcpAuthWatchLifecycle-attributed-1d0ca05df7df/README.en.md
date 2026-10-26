# `SandMcpAuthWatchLifecycle.attributed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685680-685685](../../../../../../../reference/runtime/host-main.cjs#L685680-L685685) | `method` | no | `report, cardOrigin` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685680-685685](../../../../../../../reference/runtime/host-main.cjs#L685680-L685685) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:685680

Calls written directly in this body: `this.entryPointByServerId.get`, `withCardOrigin`.

SHA-256 of the source span: `8c1d843867c3e939d0a8f68d9a6b1b0ff05de3e40ea97ad5b782491995764ce7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

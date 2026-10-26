# `SandMcpAuthWatchLifecycle.emit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685686-685688](../../../../../../../reference/runtime/host-main.cjs#L685686-L685688) | `method` | no | `report, cardOrigin` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685686-685688](../../../../../../../reference/runtime/host-main.cjs#L685686-L685688) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:685686

Calls written directly in this body: `this.attributed`, `this.deps.onConnectorAuth`.

SHA-256 of the source span: `d51539449e44ce581e1229c3c5f3b6b5ba98dddcc0510bc8d89693529927e78b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `SandMcpAuthWatchLifecycle.reportWatchTimedOut`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686119-686132](../../../../../../../reference/runtime/host-main.cjs#L686119-L686132) | `method` | no | `watch4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686119-686132](../../../../../../../reference/runtime/host-main.cjs#L686119-L686132) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:686119

Calls written directly in this body: `SandError.connectorAuthAbandoned`, `this.emit`, `this.handoffProgressOf`.

SHA-256 of the source span: `5ef7cca33ec1aa8e6cd43a7982dd1acabe2f4b23c1f24ef5271b2d105e2d0c20`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

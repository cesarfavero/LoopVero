# `SandMcpAuthWatchLifecycle.expirePendingAuthWatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686115-686118](../../../../../../../reference/runtime/host-main.cjs#L686115-L686118) | `method` | no | `watch4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686115-686118](../../../../../../../reference/runtime/host-main.cjs#L686115-L686118) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:686115

Calls written directly in this body: `this.clearPendingAuthWatch`, `this.reportWatchTimedOut`.

SHA-256 of the source span: `cae7c6c686cab53664cf5ff29a0f42fba8ebbc7f1c864c5391714f271fad5662`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

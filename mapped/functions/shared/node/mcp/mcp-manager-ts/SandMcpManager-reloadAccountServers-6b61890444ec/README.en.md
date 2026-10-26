# `SandMcpManager.reloadAccountServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690065-690068](../../../../../../../reference/runtime/host-main.cjs#L690065-L690068) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690065-690068](../../../../../../../reference/runtime/host-main.cjs#L690065-L690068) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:690065

Calls written directly in this body: `this.invalidateAccountServersPromise`, `this.loadAccountServers`.

SHA-256 of the source span: `fce0057760b4ca5241dccda131bd67bc93ac38a713f29a69f16c7cc50537452b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

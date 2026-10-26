# `SandMcpManager.noteAuthorizationUrlOpened`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690165-690167](../../../../../../../reference/runtime/host-main.cjs#L690165-L690167) | `method` | no | `authorizationUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690165-690167](../../../../../../../reference/runtime/host-main.cjs#L690165-L690167) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:690165

Calls written directly in this body: `this.authWatches.noteAuthorizationUrlOpened`.

SHA-256 of the source span: `eb82dc404670a007a78eb0c339a4f664394e098cfeb844c7b2d14d0f9389f4ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `createHostMcp/setInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701252-701254](../../../../../../reference/runtime/host-main.cjs#L701252-L701254) | `FunctionExpression` | yes | `{ serverId, instructions }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701252-701254](../../../../../../reference/runtime/host-main.cjs#L701252-L701254) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:701252

Calls written directly in this body: `mutations.setCustomInstructions`, `toInstalledServers`.

SHA-256 of the source span: `0efa1ba1bd11cc2aa132a2918820f25066ef1a78b878cfe0b4729a7c4c897503`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `SandMcpDefinitionSource.refreshInBackground`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-definition-source.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-definition-source-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686735-686747](../../../../../../../reference/runtime/host-main.cjs#L686735-L686747) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686735-686747](../../../../../../../reference/runtime/host-main.cjs#L686735-L686747) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:686735

Calls written directly in this body: `.then`, `this.loadAccountConfig`, `this.reloadBoxServers`.

SHA-256 of the source span: `f5cc0d54e01d441dba402c4716490d9c68db7c5287fb059c87f32fa423eb5f16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

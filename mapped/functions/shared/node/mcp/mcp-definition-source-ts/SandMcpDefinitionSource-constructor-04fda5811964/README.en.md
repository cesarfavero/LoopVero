# `SandMcpDefinitionSource.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-definition-source.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-definition-source-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686622-686630](../../../../../../../reference/runtime/host-main.cjs#L686622-L686630) | `method` | no | `builtins, accountConfigProvider, boxServers = async () => ({}), pluginInstallFolder, pluginIdForServer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686622-686630](../../../../../../../reference/runtime/host-main.cjs#L686622-L686630) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:686622

Calls written directly in this body: `this.loadAccountConfig`, `this.loadBoxServers`.

Assignment or increment targets: `this.accountConfigPromise`, `this.accountConfigProvider`, `this.boxServers`, `this.boxServersPromise`, `this.builtins`, `this.pluginIdForServer`, `this.pluginInstallFolder`.

SHA-256 of the source span: `f22132b2f42d79558135fb21eecc8e191d5574401755494c5db246e0cc2ede4a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `SandMcpDefinitionSource.getServersMissingPluginFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-definition-source.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-definition-source-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686702-686711](../../../../../../../reference/runtime/host-main.cjs#L686702-L686711) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686702-686711](../../../../../../../reference/runtime/host-main.cjs#L686702-L686711) | 1 | 1 | 2 | 1 | 0 | 0 |

### host:686702

Calls written directly in this body: `Object.entries`, `missing.add`, `new Set`, `readsPluginInstallFolder`, `this.getUserServerConfigs`, `this.stdioConfigForBox`.

SHA-256 of the source span: `a023b42950fd872801e80a96c2c5f78698fe0255fa48b95fdb5ebf027006c477`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

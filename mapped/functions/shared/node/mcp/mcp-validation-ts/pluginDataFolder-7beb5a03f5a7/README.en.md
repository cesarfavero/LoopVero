# `pluginDataFolder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-validation.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-validation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686556-686559](../../../../../../../reference/runtime/host-main.cjs#L686556-L686559) | `FunctionDeclaration` | no | `sandRoot, pluginId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686556-686559](../../../../../../../reference/runtime/host-main.cjs#L686556-L686559) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:686556

Calls written directly in this body: `SAFE_PLUGIN_DATA_ID.test`, `import_node_path128.posix.join`.

SHA-256 of the source span: `8b5068f1c0665a29cc5ccbd14a2c6b01369af99dd5c0e6cb57d5e192d373afc1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

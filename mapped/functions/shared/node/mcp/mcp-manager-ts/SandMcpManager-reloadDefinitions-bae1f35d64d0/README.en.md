# `SandMcpManager.reloadDefinitions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690237-690244](../../../../../../../reference/runtime/host-main.cjs#L690237-L690244) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690237-690244](../../../../../../../reference/runtime/host-main.cjs#L690237-L690244) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:690237

Calls written directly in this body: `this.boxRuntime.invalidateToolsCache`, `this.boxRuntime.resetPushState`, `this.definitionSource.clearCache`, `this.invalidateAccountServersPromise`.

SHA-256 of the source span: `1eb00316fba0b2e2c94c0673d87b08835ca6a3c928be5970c69c0c391c9d3e02`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

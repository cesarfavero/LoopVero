# `SandMcpManager.inPluginWriteOrder/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689695-689704](../../../../../../../reference/runtime/host-main.cjs#L689695-L689704) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689695-689704](../../../../../../../reference/runtime/host-main.cjs#L689695-L689704) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:689695

Calls written directly in this body: `new SandMcpConfigError`, `this.accountGenerationAtPluginWrite.set`, `this.settingsStore.getActiveAccountScope`, `write4`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `a0fdb0faed2fc2b114d4fabbb2e3b396f91e6d24aac8e8918a95999135e55bef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

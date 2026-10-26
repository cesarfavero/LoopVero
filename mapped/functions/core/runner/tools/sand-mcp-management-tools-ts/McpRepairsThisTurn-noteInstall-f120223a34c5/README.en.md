# `McpRepairsThisTurn.noteInstall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780167-780169](../../../../../../../reference/runtime/host-main.cjs#L780167-L780169) | `method` | no | `pluginIds` |
| [evaluation:580412-580414](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580412-L580414) | `method` | no | `pluginIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780167-780169](../../../../../../../reference/runtime/host-main.cjs#L780167-L780169) | 0 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:580412-580414](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580412-L580414) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:780167

Calls written directly in this body: `this.installedPluginIds.add`.

SHA-256 of the source span: `7ee9aefa9939db8b349b678afc18f0b65ebfaca714f322bd28329494e9fb7a60`.

### evaluation:580412

Calls written directly in this body: `this.installedPluginIds.add`.

SHA-256 of the source span: `7ee9aefa9939db8b349b678afc18f0b65ebfaca714f322bd28329494e9fb7a60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

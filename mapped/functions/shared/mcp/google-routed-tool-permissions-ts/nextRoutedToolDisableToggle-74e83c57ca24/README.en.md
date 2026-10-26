# `nextRoutedToolDisableToggle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/google-routed-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687193-687234](../../../../../../reference/runtime/host-main.cjs#L687193-L687234) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687193-687234](../../../../../../reference/runtime/host-main.cjs#L687193-L687234) | 8 | 2 | 0 | 3 | 0 | 0 |

### host:687193

Calls written directly in this body: `Object.entries`, `Object.fromEntries`, `args.disabled.filter`, `args.disabled.includes`, `disabled.add`, `disabled.delete`, `disabled.has`, `isDisabled`, `new Map`, `new Set`, `routedToolCarriedPermission`, `routedToolReplacedSources`, `routedToolsReplacing`, `rulesWithout`, `sameToolRules`, `tools.delete`, `tools.has`, `tools.set`.

SHA-256 of the source span: `504dce58302f50d89568e21a1556da1464d3e29c364296af4801570ab13526ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `createMcpManagementTools/describeSearch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780215-780221](../../../../../../../reference/runtime/host-main.cjs#L780215-L780221) | `ArrowFunctionExpression` | yes | `query2, plugins, recall2, deps` |
| [evaluation:580460-580466](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580460-L580466) | `ArrowFunctionExpression` | yes | `query2, plugins, recall2, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780215-780221](../../../../../../../reference/runtime/host-main.cjs#L780215-L780221) | 3 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:580460-580466](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580460-L580466) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:780215

Calls written directly in this body: `describeSearchResults`, `nativeSearchNote`.

SHA-256 of the source span: `1c155f7cbc6a537fde437484b105099d9fe6522797881ecb55a2433f349ce706`.

### evaluation:580460

Calls written directly in this body: `describeSearchResults`, `nativeSearchNote`.

SHA-256 of the source span: `1c155f7cbc6a537fde437484b105099d9fe6522797881ecb55a2433f349ce706`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

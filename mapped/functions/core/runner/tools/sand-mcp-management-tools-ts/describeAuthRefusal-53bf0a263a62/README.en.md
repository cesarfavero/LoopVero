# `describeAuthRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779750-779755](../../../../../../../reference/runtime/host-main.cjs#L779750-L779755) | `FunctionDeclaration` | no | `resolution` |
| [evaluation:579988-579993](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579988-L579993) | `FunctionDeclaration` | no | `resolution` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779750-779755](../../../../../../../reference/runtime/host-main.cjs#L779750-L779755) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579988-579993](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579988-L579993) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:779750

Calls written directly in this body: `describeBuiltinScmAuthRefusal`, `describeGrokUnavailableAuthRefusal`, `isMcpTailnetRefusalDetail`.

SHA-256 of the source span: `d15840d2ebdbe08ba970f20fb121b52199627bebda81eaa053a3b468c85774e4`.

### evaluation:579988

Calls written directly in this body: `describeBuiltinScmAuthRefusal`, `describeGrokUnavailableAuthRefusal`, `isMcpTailnetRefusalDetail`.

SHA-256 of the source span: `d15840d2ebdbe08ba970f20fb121b52199627bebda81eaa053a3b468c85774e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

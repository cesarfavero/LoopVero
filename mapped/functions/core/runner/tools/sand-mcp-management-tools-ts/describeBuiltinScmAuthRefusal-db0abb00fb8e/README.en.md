# `describeBuiltinScmAuthRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779730-779741](../../../../../../../reference/runtime/host-main.cjs#L779730-L779741) | `FunctionDeclaration` | no | `resolution` |
| [evaluation:579968-579979](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579968-L579979) | `FunctionDeclaration` | no | `resolution` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779730-779741](../../../../../../../reference/runtime/host-main.cjs#L779730-L779741) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:579968-579979](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579968-L579979) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:779730

Calls written directly in this body: `cursorScmProviderForMcpServerIdentifier`.

SHA-256 of the source span: `de5cbeaa5406f99043654ea0a3502d45325f361f2d1754d5ff94e4cf3ccd7262`.

### evaluation:579968

Calls written directly in this body: `cursorScmProviderForMcpServerIdentifier`.

SHA-256 of the source span: `de5cbeaa5406f99043654ea0a3502d45325f361f2d1754d5ff94e4cf3ccd7262`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

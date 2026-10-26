# `mcpManagementCopyFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779992-779996](../../../../../../../reference/runtime/host-main.cjs#L779992-L779996) | `FunctionDeclaration` | no | `teamBot` |
| [evaluation:580237-580241](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580237-L580241) | `FunctionDeclaration` | no | `teamBot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779992-779996](../../../../../../../reference/runtime/host-main.cjs#L779992-L779996) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:580237-580241](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580237-L580241) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:779992

Calls written directly in this body: `isPersonalMcpScope`.

SHA-256 of the source span: `fcaf85b497364d24ac3373d2363dcb268b7a63d348bd6870011d961580abed00`.

### evaluation:580237

Calls written directly in this body: `isPersonalMcpScope`.

SHA-256 of the source span: `fcaf85b497364d24ac3373d2363dcb268b7a63d348bd6870011d961580abed00`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

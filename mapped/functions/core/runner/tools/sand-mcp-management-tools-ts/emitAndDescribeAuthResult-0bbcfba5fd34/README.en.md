# `emitAndDescribeAuthResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779912-779946](../../../../../../../reference/runtime/host-main.cjs#L779912-L779946) | `FunctionDeclaration` | yes | `{   result,   taskId,   ...request5 }` |
| [evaluation:580157-580191](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580157-L580191) | `FunctionDeclaration` | yes | `{   result,   taskId,   ...request3 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779912-779946](../../../../../../../reference/runtime/host-main.cjs#L779912-L779946) | 9 | 0 | 2 | 8 | 0 | 0 |
| [evaluation:580157-580191](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580157-L580191) | 9 | 0 | 2 | 8 | 0 | 0 |

### host:779912

Calls written directly in this body: `connectorCardAccountFields`, `describeAlreadyAuthenticated`, `describeAuthStarted`, `describeAuthUnreachable`, `formatMcpAccountDisplayName`.

SHA-256 of the source span: `294d3c4e94c2f330d803427858a45db93ccb5a8fa8bf0b59bebfd04bd5f44ee4`.

### evaluation:580157

Calls written directly in this body: `connectorCardAccountFields`, `describeAlreadyAuthenticated`, `describeAuthStarted`, `describeAuthUnreachable`, `formatMcpAccountDisplayName`.

SHA-256 of the source span: `bb4d0d4f2eddaec33178cbdd46dfdcb3d0b9b2422a4c6d28fd6a5d7c5519249b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

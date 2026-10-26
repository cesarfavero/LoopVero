# `mcpManagementScopeFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779997-780004](../../../../../../../reference/runtime/host-main.cjs#L779997-L780004) | `FunctionDeclaration` | no | `teamBot` |
| [evaluation:580242-580249](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580242-L580249) | `FunctionDeclaration` | no | `teamBot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779997-780004](../../../../../../../reference/runtime/host-main.cjs#L779997-L780004) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:580242-580249](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580242-L580249) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:779997

Calls written directly in this body: `mcpManagementCopyFor`.

SHA-256 of the source span: `c85cf3b5cc0d73699ae5acfec091531b05ef2d759ce86917b003055bd80807e8`.

### evaluation:580242

Calls written directly in this body: `mcpManagementCopyFor`.

SHA-256 of the source span: `c85cf3b5cc0d73699ae5acfec091531b05ef2d759ce86917b003055bd80807e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `createMcpManagementTools/describeSearchResults`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780204-780214](../../../../../../../reference/runtime/host-main.cjs#L780204-L780214) | `ArrowFunctionExpression` | yes | `query2, plugins, deps` |
| [evaluation:580449-580459](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580449-L580459) | `ArrowFunctionExpression` | yes | `query2, plugins, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780204-780214](../../../../../../../reference/runtime/host-main.cjs#L780204-L780214) | 5 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:580449-580459](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580449-L580459) | 5 | 0 | 1 | 2 | 0 | 0 |

### host:780204

Calls written directly in this body: `.join`, `copy.searchEmptyWithQuery`, `plugins.map`, `plugins.some`, `readMcpInstalledListing`.

SHA-256 of the source span: `54daaa2fcf99cff23677ea004a903688b5eb474e8e4a8ee24d98819606d0d014`.

### evaluation:580449

Calls written directly in this body: `.join`, `copy.searchEmptyWithQuery`, `plugins.map`, `plugins.some`, `readMcpInstalledListing`.

SHA-256 of the source span: `54daaa2fcf99cff23677ea004a903688b5eb474e8e4a8ee24d98819606d0d014`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

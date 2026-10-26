# `findUnresolvedPlaceholderField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779598-779611](../../../../../../../reference/runtime/host-main.cjs#L779598-L779611) | `FunctionDeclaration` | no | `args` |
| [evaluation:579836-579849](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579836-L579849) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779598-779611](../../../../../../../reference/runtime/host-main.cjs#L779598-L779611) | 3 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:579836-579849](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579836-L579849) | 3 | 1 | 0 | 4 | 0 | 0 |

### host:779598

Calls written directly in this body: `Object.entries`, `UNRESOLVED_PLACEHOLDER.test`.

SHA-256 of the source span: `6c49249b7c923c7ca4a6b061a67c9140b16e1d26ca7e27be21ddad883253520f`.

### evaluation:579836

Calls written directly in this body: `Object.entries`, `UNRESOLVED_PLACEHOLDER.test`.

SHA-256 of the source span: `6c49249b7c923c7ca4a6b061a67c9140b16e1d26ca7e27be21ddad883253520f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

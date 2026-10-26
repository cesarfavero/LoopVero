# `connectorNameTokens`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:573710-573715](../../../../../../reference/runtime/sand-eval-runner.cjs#L573710-L573715) | `FunctionDeclaration` | no | `names3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573710-573715](../../../../../../reference/runtime/sand-eval-runner.cjs#L573710-L573715) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:573710

Calls written directly in this body: `names3.flatMap`, `new Set`.

SHA-256 of the source span: `2a97d3dfa49195c25cdc01ed44ba0e684f9d1bbcc3fc99af727d4c8dec457469`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `connectorScopeOfSend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/connector-scope/connector-scope.ts` · [Module README](../../../../../../modules/core/runner/connector-scope/connector-scope-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525837-525840](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525837-L525840) | `FunctionDeclaration` | no | `mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525837-525840](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525837-L525840) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:525837

Calls written directly in this body: `mcpConfigJson.trim`, `validConnectorScope`.

SHA-256 of the source span: `691e23af00df03261fce741aa8c4e7a563ee8e158256e6e85dcd26750489cece`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

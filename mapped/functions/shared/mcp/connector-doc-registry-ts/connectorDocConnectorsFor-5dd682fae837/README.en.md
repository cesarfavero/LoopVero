# `connectorDocConnectorsFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:573719-573726](../../../../../../reference/runtime/sand-eval-runner.cjs#L573719-L573726) | `FunctionDeclaration` | no | `names3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573719-573726](../../../../../../reference/runtime/sand-eval-runner.cjs#L573719-L573726) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:573719

Calls written directly in this body: `CONNECTORS.filter`, `names3.flatMap`.

SHA-256 of the source span: `3796e40d7459c06715498a8d023dd575ad8867b04d7819926171727b19ce5f95`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

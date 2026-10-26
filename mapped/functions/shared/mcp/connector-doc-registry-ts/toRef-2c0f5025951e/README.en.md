# `toRef`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774481-774490](../../../../../../reference/runtime/host-main.cjs#L774481-L774490) | `FunctionDeclaration` | no | `connector, parsed2` |
| [evaluation:573696-573705](../../../../../../reference/runtime/sand-eval-runner.cjs#L573696-L573705) | `FunctionDeclaration` | no | `connector, parsed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774481-774490](../../../../../../reference/runtime/host-main.cjs#L774481-L774490) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:573696-573705](../../../../../../reference/runtime/sand-eval-runner.cjs#L573696-L573705) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:774481

Calls written directly in this body: `connectorDocKindOf`.

SHA-256 of the source span: `c60d162cf0f18f09660f5d3d130535f6b5446669dc4cbd7cff901ac1d8dea764`.

### evaluation:573696

Calls written directly in this body: `connectorDocKindOf`.

SHA-256 of the source span: `ff32f9b7ec73665c6d052cb946535e91aa69a8f75fffa735dcbd04c7c3f4319d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `toSandModelCatalogEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/model-catalog.ts` · [Module README](../../../../../modules/shared/agents/model-catalog-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513577-513608](../../../../../../reference/runtime/host-main.cjs#L513577-L513608) | `FunctionDeclaration` | no | `model` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513577-513608](../../../../../../reference/runtime/host-main.cjs#L513577-L513608) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:513577

Calls written directly in this body: `def.name.trim`, `model.clientDisplayName.trim`, `model.variants.map`, `params.push`, `rawValues.map`.

SHA-256 of the source span: `d7519411ac6b0db6e7c7224bfe2e2075362c714a4a593021a20d69a9bc2e7c71`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

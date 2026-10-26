# `memberPublishMarketplacesFrom`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-marketplace.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-marketplace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404664-404676](../../../../../../../reference/runtime/host-main.cjs#L404664-L404676) | `FunctionDeclaration` | no | `marketplaces` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404664-404676](../../../../../../../reference/runtime/host-main.cjs#L404664-L404676) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:404664

Calls written directly in this body: `marketplaces.flatMap`.

SHA-256 of the source span: `57a2549804a33b292bdd392b279d4cd45b9e4e05815e553c294886b55620dad6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

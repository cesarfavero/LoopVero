# `createHostMcp/readAccountServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701344-701350](../../../../../../reference/runtime/host-main.cjs#L701344-L701350) | `ArrowFunctionExpression` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701344-701350](../../../../../../reference/runtime/host-main.cjs#L701344-L701350) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:701344

Calls written directly in this body: `.getUserServerConfigs`, `manager.definitionSourceView`, `manager.lastAccountDisplayConfigView`, `manager.reloadAccountServers`.

SHA-256 of the source span: `1184adf214bb753a6635c5e391d13f7336eae77c1659484afb9f578fbf77e727`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

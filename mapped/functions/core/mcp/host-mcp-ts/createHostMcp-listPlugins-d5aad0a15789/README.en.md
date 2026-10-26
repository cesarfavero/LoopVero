# `createHostMcp/listPlugins`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701210-701220](../../../../../../reference/runtime/host-main.cjs#L701210-L701220) | `FunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701210-701220](../../../../../../reference/runtime/host-main.cjs#L701210-L701220) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:701210

Calls written directly in this body: `.catch`, `Promise.all`, `manager.getCatalog`, `manager.listEffectivePlugins`, `manager.listServersFromCache`, `views.map`.

SHA-256 of the source span: `6c5e2ddfc173a5ac8749bbbb6743ca71440eef7dfbce17aa6ce936d5441dc9b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

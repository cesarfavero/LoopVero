# `createHostMcp/catalogServerStatuses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701008-701008](../../../../../../reference/runtime/host-main.cjs#L701008-L701008) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701008-701008](../../../../../../reference/runtime/host-main.cjs#L701008-L701008) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:701008 uses an implicit arrow-function return.

### host:701008

Calls written directly in this body: `Promise.resolve`, `deps.isCatalogServerStatusDisabled`, `discovery.getServerStatuses`, `new Map`.

SHA-256 of the source span: `10a2a3d2382e54edb172b543a230b81433dcc70318a608783888f97a8549ed66`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

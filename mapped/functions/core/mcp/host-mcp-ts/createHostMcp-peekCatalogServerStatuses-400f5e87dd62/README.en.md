# `createHostMcp/peekCatalogServerStatuses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701009-701011](../../../../../../reference/runtime/host-main.cjs#L701009-L701011) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701009-701011](../../../../../../reference/runtime/host-main.cjs#L701009-L701011) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:701009 uses an implicit arrow-function return.

### host:701009

Calls written directly in this body: `Promise.resolve`, `deps.isCatalogServerStatusDisabled`, `discovery.peekServerStatuses`.

SHA-256 of the source span: `39047e2ee34fb25ed095f6c76530b2f0ddd580c9475955622ee7048efea80671`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

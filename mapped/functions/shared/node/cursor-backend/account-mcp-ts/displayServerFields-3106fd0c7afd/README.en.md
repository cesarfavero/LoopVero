# `displayServerFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/account-mcp.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690353-690373](../../../../../../../reference/runtime/host-main.cjs#L690353-L690373) | `FunctionDeclaration` | no | `server, id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690353-690373](../../../../../../../reference/runtime/host-main.cjs#L690353-L690373) | 10 | 0 | 0 | 1 | 0 | 0 |

### host:690353

Calls written directly in this body: `accountSlotsFromAvailableServer`, `pluginAttributionFromAvailableServer`, `server.dataCenters.map`.

SHA-256 of the source span: `0059f808b5fbea1939dcc8a5c2cfe630ce75bfff8435382169ec3aae649efd45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

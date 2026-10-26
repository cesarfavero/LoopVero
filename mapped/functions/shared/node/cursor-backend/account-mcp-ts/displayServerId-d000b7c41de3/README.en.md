# `displayServerId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/account-mcp.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690348-690352](../../../../../../../reference/runtime/host-main.cjs#L690348-L690352) | `FunctionDeclaration` | no | `server` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690348-690352](../../../../../../../reference/runtime/host-main.cjs#L690348-L690352) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:690348

Calls written directly in this body: `String`, `server.serverIdentifier.trim`.

SHA-256 of the source span: `1d15ad62faef8a2e01e8a391d20f709acdd8f9586bcb6fdf1930ff12bbc9865e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

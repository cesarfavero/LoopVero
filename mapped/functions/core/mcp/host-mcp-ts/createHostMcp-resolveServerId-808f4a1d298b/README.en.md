# `createHostMcp/resolveServerId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701150-701150](../../../../../../reference/runtime/host-main.cjs#L701150-L701150) | `ArrowFunctionExpression` | no | `providerIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701150-701150](../../../../../../reference/runtime/host-main.cjs#L701150-L701150) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:701150 uses an implicit arrow-function return.

### host:701150

Calls written directly in this body: `discovery.providerServerId`.

SHA-256 of the source span: `71477a0098b579995ee30fce414c5ea88e6d8939e91e1bdf2e1e9880ee555431`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `createHostMcp/resolveServerIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701145-701145](../../../../../../reference/runtime/host-main.cjs#L701145-L701145) | `ArrowFunctionExpression` | no | `providerIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701145-701145](../../../../../../reference/runtime/host-main.cjs#L701145-L701145) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:701145 uses an implicit arrow-function return.

### host:701145

Calls written directly in this body: `discovery.providerDisplayServer`, `unnamedServerIdentity`.

SHA-256 of the source span: `474d45bbc2abebbe9024f822fc61ba968a6c1bca4a220d7a157eeb802fb54dc2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

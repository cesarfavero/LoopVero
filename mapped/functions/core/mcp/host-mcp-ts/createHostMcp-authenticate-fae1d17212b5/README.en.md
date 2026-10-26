# `createHostMcp/authenticate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701280-701290](../../../../../../reference/runtime/host-main.cjs#L701280-L701290) | `FunctionExpression` | yes | `serverId, accountKey, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701280-701290](../../../../../../reference/runtime/host-main.cjs#L701280-L701290) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:701280

Calls written directly in this body: `mutations.authenticateServer`, `toAuthResult`.

SHA-256 of the source span: `d5fd8bc3c2c740d27ed0349f73f6cd5b1285f0f66dd47b249767ea3bc3b19fd6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

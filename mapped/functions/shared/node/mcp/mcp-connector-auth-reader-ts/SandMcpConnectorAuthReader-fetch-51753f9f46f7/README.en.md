# `SandMcpConnectorAuthReader.fetch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-connector-auth-reader.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-connector-auth-reader-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686493-686501](../../../../../../../reference/runtime/host-main.cjs#L686493-L686501) | `method` | yes | `serverIdentifiers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686493-686501](../../../../../../../reference/runtime/host-main.cjs#L686493-L686501) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:686493

Calls written directly in this body: `reportMcpHostEdgeFailure`, `this.provider`.

SHA-256 of the source span: `c54caff8579b7b0846e12f2ec30e84b14051c67b7cd2532fd98140bf50a1bd59`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

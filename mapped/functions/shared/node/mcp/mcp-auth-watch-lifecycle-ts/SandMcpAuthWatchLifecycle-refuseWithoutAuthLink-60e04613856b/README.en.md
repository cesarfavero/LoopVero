# `SandMcpAuthWatchLifecycle.refuseWithoutAuthLink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685946-685981](../../../../../../../reference/runtime/host-main.cjs#L685946-L685981) | `method` | yes | `attempt, status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685946-685981](../../../../../../../reference/runtime/host-main.cjs#L685946-L685981) | 2 | 0 | 2 | 2 | 0 | 0 |

### host:685946

Calls written directly in this body: `brandedConnectorAuthProbeError`, `stripMarkupAndBoundConnectorError`, `this.failWithoutLink`, `this.reportFlowStartRefused`.

SHA-256 of the source span: `9ca720bbc67d48b18eb4efaae1b99a5348c987a476b9a131db62657d8346394f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `SandMcpAuthWatchLifecycle.reportFlowStartRefused`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685693-685705](../../../../../../../reference/runtime/host-main.cjs#L685693-L685705) | `method` | no | `refusal4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685693-685705](../../../../../../../reference/runtime/host-main.cjs#L685693-L685705) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:685693

Calls written directly in this body: `connectorAuthStartRefusal`, `this.emit`.

SHA-256 of the source span: `c959a01090b31f51e9c2982dfb6257117309ec3bb480dfc5758be9a0038df488`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

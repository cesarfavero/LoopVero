# `createServerAgentProxy/patchClientOverlay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714611-714616](../../../../../../../reference/runtime/host-main.cjs#L714611-L714616) | `ArrowFunctionExpression` | no | `agentId, patch2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714611-714616](../../../../../../../reference/runtime/host-main.cjs#L714611-L714616) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:714611

Calls written directly in this body: `activityOverlays.get`, `activityOverlays.set`, `boundRunStateChanged`, `patch2`.

SHA-256 of the source span: `d36822545d8c5b3be70867d187ed176ef7bae9f7c08fc7bc1eae1db1edb85508`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

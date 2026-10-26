# `createServerAgentProxy/requiresServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714618-714618](../../../../../../../reference/runtime/host-main.cjs#L714618-L714618) | `ArrowFunctionExpression` | no | `{ agentId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714618-714618](../../../../../../../reference/runtime/host-main.cjs#L714618-L714618) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:714618 uses an implicit arrow-function return.

### host:714618

Calls written directly in this body: `requiredAgents.has`.

SHA-256 of the source span: `38514ebd537130f5a14cd88689b2d747a3bb7947e0b5a0e8ee1559e415a36e94`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

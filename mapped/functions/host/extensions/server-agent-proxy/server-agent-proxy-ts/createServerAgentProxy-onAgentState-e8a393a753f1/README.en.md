# `createServerAgentProxy/onAgentState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714689-714689](../../../../../../../reference/runtime/host-main.cjs#L714689-L714689) | `ArrowFunctionExpression` | no | `frame` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714689-714689](../../../../../../../reference/runtime/host-main.cjs#L714689-L714689) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:714689 uses an implicit arrow-function return.

### host:714689

Calls written directly in this body: `serverAgentActivity.ingest`.

SHA-256 of the source span: `33076b098a9abbb8851cb014803bb0e1ae8f7ae8dc24c6542fcdd871ee9f7df5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

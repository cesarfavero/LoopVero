# `createServerAgentProxy/roomRowFromFallback`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714751-714758](../../../../../../../reference/runtime/host-main.cjs#L714751-L714758) | `ArrowFunctionExpression` | no | `confirmed, previous` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714751-714758](../../../../../../../reference/runtime/host-main.cjs#L714751-L714758) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:714751 uses an implicit arrow-function return.

### host:714751

Calls written directly in this body: `confirmed.memberAgentIds.flatMap`.

SHA-256 of the source span: `8830eac77fd2129c05b4eace880871cb844efe574bb196114b11640e4628dc0f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

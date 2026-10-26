# `slimAvatarOverrides/listAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-protocol.ts` · [Module README](../../../../modules/host/gateway-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490004-490004](../../../../../reference/runtime/host-main.cjs#L490004-L490004) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490004-490004](../../../../../reference/runtime/host-main.cjs#L490004-L490004) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:490004 uses an implicit arrow-function return.

### host:490004

Calls written directly in this body: `api.listAgents`, `stripSummaryRows`.

SHA-256 of the source span: `7cb9e758157efcc67f40d5d36946f233f997e9503c4e20f262ef52664811334f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

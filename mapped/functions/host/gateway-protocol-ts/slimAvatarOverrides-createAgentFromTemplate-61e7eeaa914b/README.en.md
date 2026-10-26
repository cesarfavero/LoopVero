# `slimAvatarOverrides/createAgentFromTemplate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-protocol.ts` · [Module README](../../../../modules/host/gateway-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490014-490014](../../../../../reference/runtime/host-main.cjs#L490014-L490014) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490014-490014](../../../../../reference/runtime/host-main.cjs#L490014-L490014) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:490014 uses an implicit arrow-function return.

### host:490014

Calls written directly in this body: `api.createAgentFromTemplate`, `stripCreateAgentResult`.

SHA-256 of the source span: `33082ea92f4ae57abc6bc875fefc0e6c1ada74e851799f359d350f57327f77ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

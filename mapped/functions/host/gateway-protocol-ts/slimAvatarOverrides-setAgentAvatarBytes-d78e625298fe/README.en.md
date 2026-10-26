# `slimAvatarOverrides/setAgentAvatarBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-protocol.ts` · [Module README](../../../../modules/host/gateway-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490012-490012](../../../../../reference/runtime/host-main.cjs#L490012-L490012) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490012-490012](../../../../../reference/runtime/host-main.cjs#L490012-L490012) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:490012 uses an implicit arrow-function return.

### host:490012

Calls written directly in this body: `api.setAgentAvatarBytes`, `stripNullableSummary`.

SHA-256 of the source span: `ead21e3c7fa588126a0d7c938d9da3639677ae3ee088ac6a2160fe25b0856b23`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

# `createHostGatewayApi/releaseCredentialFillAgentHold`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493265-493267](../../../../../reference/runtime/host-main.cjs#L493265-L493267) | `ArrowFunctionExpression` | yes | `{ holdId }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493265-493267](../../../../../reference/runtime/host-main.cjs#L493265-L493267) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:493265

Calls written directly in this body: `.remoteAgentHolds.release`, `deps.extensions.api`.

SHA-256 of the source span: `f7b70f34813d70c818e81f8835507915c6086d493dc9293bac0dd3eaf867c802`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

# `createHostGatewayApi/fillBrokeredCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493182-493198](../../../../../reference/runtime/host-main.cjs#L493182-L493198) | `ArrowFunctionExpression` | yes | `{ agentId, entryId, siteHint, windowIndex }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493182-493198](../../../../../reference/runtime/host-main.cjs#L493182-L493198) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:493182

Calls written directly in this body: `broker.fill`, `deps.extensions.api`.

SHA-256 of the source span: `4fe5ee378d25d5b49ed740afbc273e846949f758c1b6f34cf1b595559c93bb2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

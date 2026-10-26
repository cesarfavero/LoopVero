# `wrapGatewayApiWithServerAgentProxy/submitUserForm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492097-492103](../../../../../reference/runtime/host-main.cjs#L492097-L492103) | `ArrowFunctionExpression` | yes | `formArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492097-492103](../../../../../reference/runtime/host-main.cjs#L492097-L492103) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:492097

Calls written directly in this body: `act`, `api.submitUserForm`, `proxy.isProxiedAgent`.

SHA-256 of the source span: `67c1216eeb4082bddf4580847f6b153d38c93eb40f57104df743deb311accf78`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

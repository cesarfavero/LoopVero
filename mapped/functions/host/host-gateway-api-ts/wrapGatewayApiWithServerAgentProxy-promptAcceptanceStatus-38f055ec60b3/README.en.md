# `wrapGatewayApiWithServerAgentProxy/promptAcceptanceStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492021-492034](../../../../../reference/runtime/host-main.cjs#L492021-L492034) | `ArrowFunctionExpression` | yes | `statusArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492021-492034](../../../../../reference/runtime/host-main.cjs#L492021-L492034) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:492021

Calls written directly in this body: `act`, `api.promptAcceptanceStatus`, `proxy.isProxiedAgent`.

SHA-256 of the source span: `5a02ea6cb8779b60db6f597b9189dc15ad8e2431709dc8246533984aa7570f47`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

# `wrapGatewayApiWithServerAgentProxy/activate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491946-491950](../../../../../reference/runtime/host-main.cjs#L491946-L491950) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491946-491950](../../../../../reference/runtime/host-main.cjs#L491946-L491950) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:491946

Calls written directly in this body: `.catch`, `args.activateAgent`.

SHA-256 of the source span: `131a309826eb01e5a7dd17669e24e09065591047b9ab2108f34a2165c7bde81e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

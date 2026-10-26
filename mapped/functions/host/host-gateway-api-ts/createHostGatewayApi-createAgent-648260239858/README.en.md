# `createHostGatewayApi/createAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492587-492602](../../../../../reference/runtime/host-main.cjs#L492587-L492602) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492587-492602](../../../../../reference/runtime/host-main.cjs#L492587-L492602) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:492587

Calls written directly in this body: `.catch`, `createAgentMintsByNonce.delete`, `createAgentMintsByNonce.get`, `createAgentMintsByNonce.keys`, `createAgentMintsByNonce.set`, `mintAgent`.

SHA-256 of the source span: `b2ea16a25f605442748de9b7638ca4eedea9ccb404283f59804e1225e9f51df7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

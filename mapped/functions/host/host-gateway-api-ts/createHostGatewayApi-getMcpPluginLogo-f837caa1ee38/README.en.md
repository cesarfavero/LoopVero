# `createHostGatewayApi/getMcpPluginLogo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492862-492865](../../../../../reference/runtime/host-main.cjs#L492862-L492865) | `ArrowFunctionExpression` | yes | `{ url: url2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492862-492865](../../../../../reference/runtime/host-main.cjs#L492862-L492865) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:492862

Calls written directly in this body: `.plugins.resolvePluginLogo`, `deps.extensions.api`.

SHA-256 of the source span: `dd176620a47c01d1f688e225fb9e7c99b07870b0012ceeb12df5d0b9dd412076`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

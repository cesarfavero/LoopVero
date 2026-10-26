# `createHostGatewayApi/readMcpAppResource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:493115-493121](../../../../../reference/runtime/host-main.cjs#L493115-L493121) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493115-493121](../../../../../reference/runtime/host-main.cjs#L493115-L493121) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:493115

Calls written directly in this body: `.readMcpAppDocument`, `deps.extensions.api`, `experiments.checkFeatureGate`.

SHA-256 of the source span: `27a75b96cf413fcb9ad6e37c0ca2332f9e210961d1ff2d8a04082a3f6d466e17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

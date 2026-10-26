# `createHostGatewayApi/deleteAgentsAndReport/releaseAgentBox`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492416-492420](../../../../../reference/runtime/host-main.cjs#L492416-L492420) | `ArrowFunctionExpression` | yes | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492416-492420](../../../../../reference/runtime/host-main.cjs#L492416-L492420) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:492416

Calls written directly in this body: `Date.now`, `deps.releaseAgentBox`.

Assignment or increment targets: `boxReleaseMs`.

SHA-256 of the source span: `f71d4620c0e3d5bab4f1b5306c35be0c5ab276f32b6ea2dbf84d621dc0b5da28`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

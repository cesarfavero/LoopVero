# `createHostGatewayApi/deleteAgentsAndReport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492403-492440](../../../../../reference/runtime/host-main.cjs#L492403-L492440) | `ArrowFunctionExpression` | yes | `ids` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492403-492440](../../../../../reference/runtime/host-main.cjs#L492403-L492440) | 4 | 0 | 2 | 1 | 1 | 0 |

### host:492403

Calls written directly in this body: `.brain.reportAgentDelete`, `.deleteAgents`, `Date.now`, `deps.extensions.api`, `forgetDeletedAgentsOnHost`, `new ServerAgentProxyUnavailableError`.

Explicit throw targets: `ServerAgentProxyUnavailableError`.

SHA-256 of the source span: `91ce4ce98205c423f30d21432ea49e7c088158e642022a349b93080a5f99d2eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

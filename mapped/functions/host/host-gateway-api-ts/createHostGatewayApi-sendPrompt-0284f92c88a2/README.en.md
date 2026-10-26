# `createHostGatewayApi/sendPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492469-492487](../../../../../reference/runtime/host-main.cjs#L492469-L492487) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492469-492487](../../../../../reference/runtime/host-main.cjs#L492469-L492487) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:492469

Calls written directly in this body: `.find`, `.reportMessageSent`, `deps.extensions.api`, `manager.getActiveAgentId`, `manager.listAgentsSync`, `manager.sendPrompt`, `parseAgentId`.

SHA-256 of the source span: `1354a0c687e5182a46ed75bee992c1a627fc04272dfea1178be64095004f4aaf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

# `forgetDeletedAgentsOnHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491710-491726](../../../../../reference/runtime/host-main.cjs#L491710-L491726) | `FunctionDeclaration` | yes | `deps, agentIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491710-491726](../../../../../reference/runtime/host-main.cjs#L491710-L491726) | 0 | 2 | 2 | 0 | 0 | 0 |

### host:491710

Calls written directly in this body: `.broker.discardAgentSession`, `automations.deleteAgentSchedules`, `deps.extensions.api`, `deps.hostEvents.emit`, `deps.releaseAgentBox`, `session.forgetHandoff`, `session.forgetUserForm`.

SHA-256 of the source span: `6ccf879fd847361bd244ef33cc1eb34797a924da1633d778bb9e652f55d781c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

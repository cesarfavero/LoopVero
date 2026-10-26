# `startAgentIdentity/deleteAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496931-496931](../../../../../../../reference/runtime/host-main.cjs#L496931-L496931) | `ArrowFunctionExpression` | no | `agentIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496931-496931](../../../../../../../reference/runtime/host-main.cjs#L496931-L496931) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:496931 uses an implicit arrow-function return.

### host:496931

Calls written directly in this body: `service.deleteAgents`.

SHA-256 of the source span: `88b2653ca33c79e736afbee34aaf116a259fbcac5ba3e04020ab58830603d1c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

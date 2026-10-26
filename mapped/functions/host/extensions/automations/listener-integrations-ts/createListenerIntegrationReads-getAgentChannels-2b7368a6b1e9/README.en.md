# `createListenerIntegrationReads/getAgentChannels`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/listener-integrations.ts` · [Module README](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505566-505573](../../../../../../../reference/runtime/host-main.cjs#L505566-L505573) | `FunctionExpression` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505566-505573](../../../../../../../reference/runtime/host-main.cjs#L505566-L505573) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:505566

Calls written directly in this body: `CONNECTOR_MANIFESTS.map`, `connections.filter`, `deps.transcript.getAgentChannels`, `new Set`.

SHA-256 of the source span: `a79fa9a7f04b7405059d13c407ec004711e16e337b25ff2b0b0519aa56b57927`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

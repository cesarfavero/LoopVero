# `SandAgentIdentityService.serverBindingOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496329-496338](../../../../../../../reference/runtime/host-main.cjs#L496329-L496338) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496329-496338](../../../../../../../reference/runtime/host-main.cjs#L496329-L496338) | 4 | 0 | 1 | 4 | 0 | 0 |

### host:496329

Calls written directly in this body: `roster.agents.find`, `this.readServerRoster`, `this.rememberServerIdentity`, `this.serverBindings.get`.

SHA-256 of the source span: `1c2997247c2ca03280c0e626ca39611cdfb83e06763df2aebc0c03a28db31382`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

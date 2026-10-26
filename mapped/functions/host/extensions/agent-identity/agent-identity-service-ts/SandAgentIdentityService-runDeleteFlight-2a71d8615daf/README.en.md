# `SandAgentIdentityService.runDeleteFlight`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495663-495707](../../../../../../../reference/runtime/host-main.cjs#L495663-L495707) | `method` | yes | `agentIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495663-495707](../../../../../../../reference/runtime/host-main.cjs#L495663-L495707) | 4 | 3 | 2 | 2 | 1 | 2 |

### host:495663

Calls written directly in this body: `agentIds.filter`, `confirmed.join`, `errorMessage`, `intents.push`, `new Map`, `this.deletedAgents.forget`, `this.deletedAgents.has`, `this.deletedAgents.isDone`, `this.deletedAgents.record`, `this.deletedAgents.settle`, `this.deps.deleteLocalAgents`, `this.deps.log`, `this.removeDeletedAgentDirs`, `this.runSerialized`, `this.serverBindings.get`, `verdicts.set`.

Assignment or increment targets: `local`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `fc7e0433fae8c8221cb35e9b57bcbfd48a96fd953dc0eab62f475fd970f0ea75`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

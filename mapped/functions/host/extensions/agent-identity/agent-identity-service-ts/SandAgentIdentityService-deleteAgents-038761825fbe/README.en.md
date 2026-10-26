# `SandAgentIdentityService.deleteAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495623-495653](../../../../../../../reference/runtime/host-main.cjs#L495623-L495653) | `method` | yes | `agentIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495623-495653](../../../../../../../reference/runtime/host-main.cjs#L495623-L495653) | 1 | 4 | 2 | 1 | 0 | 0 |

### host:495623

Calls written directly in this body: `.verdicts.get`, `fresh.push`, `idsWith`, `invariant`, `joined.set`, `new Map`, `new Set`, `this.deletions.delete`, `this.deletions.get`, `this.deletions.set`, `this.runDeleteFlight`, `verdicts.set`.

Assignment or increment targets: `own3`.

SHA-256 of the source span: `050350c78440ef882133399fbdeb581c9979d858e83bb9c83da672b42a17d1b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `SandAgentIdentityService.runSerialized`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495724-495733](../../../../../../../reference/runtime/host-main.cjs#L495724-L495733) | `method` | no | `run` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495724-495733](../../../../../../../reference/runtime/host-main.cjs#L495724-L495733) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:495724

Calls written directly in this body: `next.then`, `this.queue.then`.

Assignment or increment targets: `this.queue`.

SHA-256 of the source span: `48d6b0dc68e209b5dcd69bf3a0e9500a14fc79d87b21314a92ecb816398780e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

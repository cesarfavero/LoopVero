# `CloudAgentArtifactCache.syncPlanned`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-artifact-cache.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-artifact-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538233-538241](../../../../../../../reference/runtime/host-main.cjs#L538233-L538241) | `method` | yes | `agentId, bcId, planned` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538233-538241](../../../../../../../reference/runtime/host-main.cjs#L538233-L538241) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:538233

Calls written directly in this body: `.finally`, `pending.then`, `start`, `this.inflight.get`, `this.inflight.set`.

SHA-256 of the source span: `644b1e1a26cc865e83209ef50bc4bef7a1ae977124d14a0495f747a881169a85`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

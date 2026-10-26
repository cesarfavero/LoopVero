# `CloudAgentArtifactCache.syncMissing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-artifact-cache.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-artifact-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538242-538254](../../../../../../../reference/runtime/host-main.cjs#L538242-L538254) | `method` | yes | `agentId, bcId, planned` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538242-538254](../../../../../../../reference/runtime/host-main.cjs#L538242-L538254) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:538242

Calls written directly in this body: `syncCloudAgentArtifactsToBox`, `this.partitionByPresence`.

SHA-256 of the source span: `b039ecde5b2702dbe63eaf82ddec3cc4cf2aabf037d68984adaf5a039bbb8fab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

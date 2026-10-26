# `SandAutomationCloudSync.finishAgentDeletion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [Module README](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505693-505696](../../../../../../../reference/runtime/host-main.cjs#L505693-L505696) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505693-505696](../../../../../../../reference/runtime/host-main.cjs#L505693-L505696) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:505693

Calls written directly in this body: `this.pendingAgentDeletions.delete`, `this.recordRecovery`.

SHA-256 of the source span: `644da1f64f939275a1332505decbd1b7d76bb9a634fe19ea8ee516b86e9f667a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

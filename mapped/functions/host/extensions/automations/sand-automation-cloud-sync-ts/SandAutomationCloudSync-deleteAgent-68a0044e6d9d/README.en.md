# `SandAutomationCloudSync.deleteAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [Module README](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505610-505642](../../../../../../../reference/runtime/host-main.cjs#L505610-L505642) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505610-505642](../../../../../../../reference/runtime/host-main.cjs#L505610-L505642) | 6 | 1 | 4 | 5 | 0 | 0 |

### host:505610

Calls written directly in this body: `initial.workflows.flatMap`, `new Error`, `readback.workflows.some`, `this.deleteRemote`, `this.deps.dropWebhookKeys`, `this.finishAgentDeletion`, `this.listRemote`, `this.pendingAgentDeletions.add`, `this.recordFailure`.

Assignment or increment targets: `deleteFailed`.

SHA-256 of the source span: `8826cc7f9e976dc266437f37bc30bf511a1fb718cde846aec1250e63e8255142`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

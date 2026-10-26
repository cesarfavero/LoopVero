# `SandAutomationCloudSync.retryPendingAgentDeletions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [Module README](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505643-505648](../../../../../../../reference/runtime/host-main.cjs#L505643-L505648) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505643-505648](../../../../../../../reference/runtime/host-main.cjs#L505643-L505648) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:505643

Calls written directly in this body: `this.deleteAgent`, `this.deps.hasCredential`.

SHA-256 of the source span: `75230c364f2e989935c0523eb6c4fc4537cfe6a10e882029b5f385b014592f67`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

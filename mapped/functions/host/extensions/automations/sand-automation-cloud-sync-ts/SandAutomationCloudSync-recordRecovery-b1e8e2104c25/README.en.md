# `SandAutomationCloudSync.recordRecovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [Module README](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505685-505692](../../../../../../../reference/runtime/host-main.cjs#L505685-L505692) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505685-505692](../../../../../../../reference/runtime/host-main.cjs#L505685-L505692) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:505685

Calls written directly in this body: `this.deps.onRecovery`, `this.failedAgentIds.delete`, `this.logCallbackFailure`.

SHA-256 of the source span: `06b36d7c46a263de66c2574822536768df6c5028416ed94dbb3fb4f699c5f384`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

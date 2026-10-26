# `SandAutomationCloudSync.listRemote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [Module README](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505649-505658](../../../../../../../reference/runtime/host-main.cjs#L505649-L505658) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505649-505658](../../../../../../../reference/runtime/host-main.cjs#L505649-L505658) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:505649

Calls written directly in this body: `new ListSandAutomationsRequest`, `this.deps.client.listSandAutomations`, `this.recordFailure`.

SHA-256 of the source span: `3d33cbd5e56a86aa56af86c7f62d26caad5e3e10a5593eb89a0a98b1de779620`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

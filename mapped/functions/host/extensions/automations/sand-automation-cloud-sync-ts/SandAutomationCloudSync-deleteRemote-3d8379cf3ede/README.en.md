# `SandAutomationCloudSync.deleteRemote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [Module README](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505659-505667](../../../../../../../reference/runtime/host-main.cjs#L505659-L505667) | `method` | yes | `agentId, automationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505659-505667](../../../../../../../reference/runtime/host-main.cjs#L505659-L505667) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:505659

Calls written directly in this body: `new DeleteAutomationRequest`, `this.deps.client.deleteSandAutomation`, `this.recordFailure`.

SHA-256 of the source span: `d54afa7e68a349a77c5bf5205c3349b6b2c3c1b2a92735c40e8a7cc7c7e72d69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

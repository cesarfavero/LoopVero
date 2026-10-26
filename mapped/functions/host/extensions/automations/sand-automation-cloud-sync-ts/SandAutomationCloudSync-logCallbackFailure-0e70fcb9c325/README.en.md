# `SandAutomationCloudSync.logCallbackFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [Module README](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505697-505704](../../../../../../../reference/runtime/host-main.cjs#L505697-L505704) | `method` | no | `callback, agentId, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505697-505704](../../../../../../../reference/runtime/host-main.cjs#L505697-L505704) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:505697

Calls written directly in this body: `errorIdentity`, `this.deps.reportDiagnostic`.

SHA-256 of the source span: `3a9bf3f68dcdc0433e9b9ef1e24a81e35bec13d49564630c599d36471f7bb282`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

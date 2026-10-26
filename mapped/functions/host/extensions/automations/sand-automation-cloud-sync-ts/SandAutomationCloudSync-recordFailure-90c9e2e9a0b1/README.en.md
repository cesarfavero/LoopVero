# `SandAutomationCloudSync.recordFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [Module README](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505668-505684](../../../../../../../reference/runtime/host-main.cjs#L505668-L505684) | `method` | no | `failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505668-505684](../../../../../../../reference/runtime/host-main.cjs#L505668-L505684) | 2 | 0 | 0 | 1 | 0 | 1 |

### host:505668

Calls written directly in this body: `errorIdentity`, `this.deps.hasCredential`, `this.deps.onFailure`, `this.deps.reportDiagnostic`, `this.failedAgentIds.add`, `this.logCallbackFailure`.

SHA-256 of the source span: `88d13d5d8b1e6bb21798136ea35e15d3966c84b97366b92720a902b1697e970a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

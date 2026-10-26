# `SandCloudAgentManager.getOriginClient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538460-538476](../../../../../../../reference/runtime/host-main.cjs#L538460-L538476) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538460-538476](../../../../../../../reference/runtime/host-main.cjs#L538460-L538476) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:538460

Calls written directly in this body: `createClient2`, `sandBackendIdentityAt`.

Assignment or increment targets: `this.originClient`.

SHA-256 of the source span: `9b7be02fd781ab3f0c28e655841ca5f1e98a5d315d473a5d039eff81359907e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

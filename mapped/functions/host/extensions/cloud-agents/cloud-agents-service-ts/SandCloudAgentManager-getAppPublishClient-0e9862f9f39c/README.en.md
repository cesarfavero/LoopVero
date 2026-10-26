# `SandCloudAgentManager.getAppPublishClient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538408-538422](../../../../../../../reference/runtime/host-main.cjs#L538408-L538422) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538408-538422](../../../../../../../reference/runtime/host-main.cjs#L538408-L538422) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:538408

Calls written directly in this body: `createSandCursorBackendClient`.

Assignment or increment targets: `this.appPublishClient`.

SHA-256 of the source span: `1c52c96a3e7c7d1be2c6b83869f1350db63e7fbd9857473ecd3f9aef1bc4726a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

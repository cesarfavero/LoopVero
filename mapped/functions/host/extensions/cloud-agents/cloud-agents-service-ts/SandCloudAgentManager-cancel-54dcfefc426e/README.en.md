# `SandCloudAgentManager.cancel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538574-538576](../../../../../../../reference/runtime/host-main.cjs#L538574-L538576) | `method` | yes | `bcId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538574-538576](../../../../../../../reference/runtime/host-main.cjs#L538574-L538576) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:538574

Calls written directly in this body: `this.backend.cancel`.

SHA-256 of the source span: `18425b67d082a7c19e674898cb66ef9c5a45490a9e9d581924eb65293b10408b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `SandCloudAgentManager.setArchived`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538586-538588](../../../../../../../reference/runtime/host-main.cjs#L538586-L538588) | `method` | yes | `bcId, archived` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538586-538588](../../../../../../../reference/runtime/host-main.cjs#L538586-L538588) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:538586

Calls written directly in this body: `this.backend.setArchived`.

SHA-256 of the source span: `3dfc7370f98ec833da3a097f34fbdbbb07c8784c9744ea5a4f3422651a85ffdc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

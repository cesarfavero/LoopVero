# `SandCloudAgentManager.getInfo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538607-538609](../../../../../../../reference/runtime/host-main.cjs#L538607-L538609) | `method` | yes | `bcId, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538607-538609](../../../../../../../reference/runtime/host-main.cjs#L538607-L538609) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:538607

Calls written directly in this body: `this.backend.getInfo`.

SHA-256 of the source span: `7e2ede6cc0ea05ac3dc457e2b9146b20cfdb3ab42cb9eadbe560b130ce2f5e5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

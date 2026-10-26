# `SandCloudAgentManager.listRecentActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538556-538558](../../../../../../../reference/runtime/host-main.cjs#L538556-L538558) | `method` | yes | `limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538556-538558](../../../../../../../reference/runtime/host-main.cjs#L538556-L538558) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:538556

Calls written directly in this body: `this.backend.listRecentActivity`.

SHA-256 of the source span: `260f9aca43a7c2d9c9090bfb789510ef5aaf43e1d2338205e1fba8bc7191bf8a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

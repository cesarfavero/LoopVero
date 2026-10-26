# `fetchAgentStoreObjectFromUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474315-474324](../../../../../../../reference/runtime/host-main.cjs#L474315-L474324) | `FunctionDeclaration` | yes | `url2, label` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474315-474324](../../../../../../../reference/runtime/host-main.cjs#L474315-L474324) | 2 | 0 | 2 | 2 | 1 | 0 |

### host:474315

Calls written directly in this body: `fetch`, `new SandBoxStoreSyncError`, `new Uint8Array`, `response.arrayBuffer`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `e4be835328ba0a2c9dbac39241f30a0c3a352a9de4b6b9189dc668710404cb18`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

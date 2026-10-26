# `resolveBoxObjectStoreProvider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-object-store.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475373-475393](../../../../../../../reference/runtime/host-main.cjs#L475373-L475393) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475373-475393](../../../../../../../reference/runtime/host-main.cjs#L475373-L475393) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:475373

Calls written directly in this body: `invariant`, `new AgentStoreObjectStoreProvider`, `new LocalFsObjectStoreProvider`, `new SandBoxStoreServiceProvider`.

SHA-256 of the source span: `2b0eafaa887edad0f0180e9283eb35d1f9ff84277f3c549085e0d105bda7ac82`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

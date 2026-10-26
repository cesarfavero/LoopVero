# `createAgentStoreClient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474113-474128](../../../../../../../reference/runtime/host-main.cjs#L474113-L474128) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474113-474128](../../../../../../../reference/runtime/host-main.cjs#L474113-L474128) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:474113

Calls written directly in this body: `createSandBackendTransport`, `new BcsAgentStoreTransport`, `new TokenCachingAgentStoreClient`.

SHA-256 of the source span: `efb9c6b3ae5071f72b4b19a7df13b8df9b1b6061e187e23b344d4c277820e15f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `presignSingleWrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474144-474153](../../../../../../../reference/runtime/host-main.cjs#L474144-L474153) | `FunctionDeclaration` | yes | `client, sourceId, file2, precondition` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474144-474153](../../../../../../../reference/runtime/host-main.cjs#L474144-L474153) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:474144

Calls written directly in this body: `client.presignWrites`, `new SandBoxStoreSyncError`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `4e30b27811ea112d9a9c255b006f28dd4be63544d3e298349a61aa5b51617ca0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

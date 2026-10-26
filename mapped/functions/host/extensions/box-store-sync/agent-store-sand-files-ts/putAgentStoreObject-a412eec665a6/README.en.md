# `putAgentStoreObject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474216-474281](../../../../../../../reference/runtime/host-main.cjs#L474216-L474281) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474216-474281](../../../../../../../reference/runtime/host-main.cjs#L474216-L474281) | 7 | 0 | 5 | 2 | 3 | 0 |

### host:474216

Calls written directly in this body: `client.invalidateListCache`, `etags.delete`, `etags.set`, `isConditionalWriteRejection`, `new SandBoxStoreSyncError`, `normalizeS3Etag`, `presignHasConditionalHeaders2`, `presignSingleWrite`, `put`, `putConflictObject`, `reportBoxStoreDiagnostic`, `resolveMutableWriteBaseline`, `response.headers.get`, `sha256Hex`, `warnIfConflictProtectionDowngraded`.

Assignment or increment targets: `response`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `affcb25363d7b81db5079924d058a83c4c041b361a47e6f7f39c4974572aa804`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

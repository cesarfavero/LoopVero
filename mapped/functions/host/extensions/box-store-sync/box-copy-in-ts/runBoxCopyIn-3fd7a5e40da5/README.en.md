# `runBoxCopyIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482969-483231](../../../../../../../reference/runtime/host-main.cjs#L482969-L483231) | `FunctionDeclaration` | yes | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482969-483231](../../../../../../../reference/runtime/host-main.cjs#L482969-L483231) | 19 | 0 | 7 | 13 | 2 | 7 |

### host:482969

Calls written directly in this body: `.every`, `.filter`, `copyInFailureOf`, `countStoreDbManifestEntries`, `deps.legacySync.readManifestStrict`, `deps.sync.enrollManifestV2`, `deps.sync.markLegacyHydrationCompleteForHandoff`, `deps.sync.markLegacyHydrationIncomplete`, `deps.sync.readManifestStrictDetailed`, `downloadVia.download`, `empty`, `errorMessage`, `getStoreDbManifestAgentIds`, `isBoxStoreFullyHydrated`, `log5`, `logRefusals`, `new Map`, `new SandBoxStoreSyncError`, `pruneRestoredOriginCliStoredLogins`, `withoutForeignMountEntries`.

Assignment or increment targets: `authoritativeStoreDbAgentIds`, `authoritativeStoreDbEntries`, `downloadFromLegacy`, `downloadVia`, `hydrateSource`, `legacyManifest`, `manifest`, `summary`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `f957e7a5612203202c2878647a6875dbd1f0b8edee5cf89c399c42bddd2e7319`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

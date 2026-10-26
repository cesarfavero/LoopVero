# `runBoxCopyInWithRetry/readManifestStrict`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483242-483251](../../../../../../../reference/runtime/host-main.cjs#L483242-L483251) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483242-483251](../../../../../../../reference/runtime/host-main.cjs#L483242-L483251) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:483242

Calls written directly in this body: `legacySync.readManifestStrict`.

Assignment or increment targets: `advertisedLegacyManifest`.

SHA-256 of the source span: `6a29b3f4dc55739019ee9145e698d96827fe5e3c023c66bc587512962207024a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

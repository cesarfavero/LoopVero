# `planSandBoxStoreMultipartParts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474692-474735](../../../../../../../reference/runtime/host-main.cjs#L474692-L474735) | `FunctionDeclaration` | yes | `srcPath, sizeBytes, partSizeBytes = SAND_BOX_STORE_MULTIPART_PART_SIZE_BYTES` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474692-474735](../../../../../../../reference/runtime/host-main.cjs#L474692-L474735) | 5 | 2 | 0 | 1 | 3 | 0 |

### host:474692

Calls written directly in this body: `Math.min`, `Number.isSafeInteger`, `buffer.subarray`, `finishPart`, `new SandBoxStoreSyncError`, `partHash.update`, `wholeHash.digest`, `wholeHash.update`.

Assignment or increment targets: `buffer`, `position`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `93432cbce6e8245cb66437c418eb6f799bc8505f1d2f5d113f50f5261d1f4066`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

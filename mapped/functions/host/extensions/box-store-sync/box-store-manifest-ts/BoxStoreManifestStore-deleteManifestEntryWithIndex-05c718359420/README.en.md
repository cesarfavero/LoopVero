# `BoxStoreManifestStore.deleteManifestEntryWithIndex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477103-477109](../../../../../../../reference/runtime/host-main.cjs#L477103-L477109) | `method` | no | `manifest, relPath, counts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477103-477109](../../../../../../../reference/runtime/host-main.cjs#L477103-L477109) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:477103

Calls written directly in this body: `.markChanged`, `manifest.delete`, `this.adjustAncestorRefCounts`, `this.manifestRevisionState`, `this.uncommittedStoreDbEntries.delete`.

SHA-256 of the source span: `bf336f623d35ace4c84ed9bf8b79a4dea85d875eeadc1751b6342cb4ae61b6bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `countStoreDbManifestEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476861-476868](../../../../../../../reference/runtime/host-main.cjs#L476861-L476868) | `FunctionDeclaration` | no | `manifest` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476861-476868](../../../../../../../reference/runtime/host-main.cjs#L476861-L476868) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:476861

Calls written directly in this body: `STORE_DB_MANIFEST_KEY_RE.test`, `isSymlinkManifestValue`.

Assignment or increment targets: `count2`.

SHA-256 of the source span: `c9e1ddc88921ca87fff2ba4bbf89c16ca496e0db3046e033e0139b3f730882a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

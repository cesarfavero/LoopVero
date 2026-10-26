# `hasManifestPathConflict`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476902-476910](../../../../../../../reference/runtime/host-main.cjs#L476902-L476910) | `FunctionDeclaration` | no | `entries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476902-476910](../../../../../../../reference/runtime/host-main.cjs#L476902-L476910) | 1 | 2 | 0 | 2 | 0 | 0 |

### host:476902

Calls written directly in this body: `Object.keys`, `new Set`, `relPath.indexOf`, `relPath.slice`, `relPaths.has`.

Assignment or increment targets: `separatorIndex`.

SHA-256 of the source span: `9b424a2e84c2d11f6edda2882ef2ee6e676d0d36630d6c4b95c5c47a8e63731c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

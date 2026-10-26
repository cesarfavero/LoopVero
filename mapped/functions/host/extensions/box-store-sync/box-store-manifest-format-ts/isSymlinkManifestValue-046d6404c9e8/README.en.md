# `isSymlinkManifestValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest-format.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474562-474564](../../../../../../../reference/runtime/host-main.cjs#L474562-L474564) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474562-474564](../../../../../../../reference/runtime/host-main.cjs#L474562-L474564) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:474562

Calls written directly in this body: `manifestSymlinkEntrySchema.safeParse`.

SHA-256 of the source span: `2c7eece1374b9e2ea44b853e43dbb72145a4d11e6b9c37aed6ec55ed31d80196`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

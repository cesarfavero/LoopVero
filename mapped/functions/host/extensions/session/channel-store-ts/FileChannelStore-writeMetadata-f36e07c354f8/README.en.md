# `FileChannelStore.writeMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/channel-store.ts` · [Module README](../../../../../../modules/host/extensions/session/channel-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721314-721320](../../../../../../../reference/runtime/host-main.cjs#L721314-L721320) | `method` | no | `platform2, label` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721314-721320](../../../../../../../reference/runtime/host-main.cjs#L721314-L721320) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:721314

Calls written directly in this body: `JSON.stringify`, `isSafeFolderId`, `labelFor`, `this.configPath`, `this.dir.writeFileAtomic`.

SHA-256 of the source span: `1ca5f96cf270c2ece1e201e2d65febd6cf2c7a5e3eb2e27291b114eeb2b099cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

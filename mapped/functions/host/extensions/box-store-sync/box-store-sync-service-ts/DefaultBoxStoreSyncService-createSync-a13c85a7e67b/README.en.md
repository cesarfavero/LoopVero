# `DefaultBoxStoreSyncService.createSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync-service.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482559-482580](../../../../../../../reference/runtime/host-main.cjs#L482559-L482580) | `method` | no | `categories, objectStoreProvider, logPrefix` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482559-482580](../../../../../../../reference/runtime/host-main.cjs#L482559-L482580) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:482559

Calls written directly in this body: `new BoxStoreSync`.

SHA-256 of the source span: `450666a14683cb5a115fb2c1a0c2acbed80f0e94a9afc87a5814e99bc68fcd57`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

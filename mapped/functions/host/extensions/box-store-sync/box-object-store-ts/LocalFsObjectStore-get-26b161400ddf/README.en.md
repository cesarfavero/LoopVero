# `LocalFsObjectStore.get`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-object-store.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475322-475329](../../../../../../../reference/runtime/host-main.cjs#L475322-L475329) | `method` | yes | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475322-475329](../../../../../../../reference/runtime/host-main.cjs#L475322-L475329) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:475322

Calls written directly in this body: `findSystemErrno`, `new Uint8Array`, `this.pathFor`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `e08d6a2f90a3da30b5e7d70ebf9973aafa202064bcd08f6ec1282f7a2e37955a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

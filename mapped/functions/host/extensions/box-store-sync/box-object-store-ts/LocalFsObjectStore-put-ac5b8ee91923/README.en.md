# `LocalFsObjectStore.put`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-object-store.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475330-475334](../../../../../../../reference/runtime/host-main.cjs#L475330-L475334) | `method` | yes | `key, bytes, _opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475330-475334](../../../../../../../reference/runtime/host-main.cjs#L475330-L475334) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:475330

Calls written directly in this body: `this.pathFor`.

SHA-256 of the source span: `2ecee2864e0e7a6a72446251a8fe1aa51721d5169db7126d92b63cc29e72c9a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

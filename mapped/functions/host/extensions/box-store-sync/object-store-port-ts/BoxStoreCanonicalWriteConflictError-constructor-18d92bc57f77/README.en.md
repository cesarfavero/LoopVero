# `BoxStoreCanonicalWriteConflictError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/object-store-port.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/object-store-port-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474485-474493](../../../../../../../reference/runtime/host-main.cjs#L474485-L474493) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474485-474493](../../../../../../../reference/runtime/host-main.cjs#L474485-L474493) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:474485

Calls written directly in this body: `super`.

Assignment or increment targets: `this.baseEtag`, `this.baselineSource`, `this.conflictRelPath`, `this.key`.

SHA-256 of the source span: `9b948b8657e10a12a10590018833c22b187d8529e4e580a1a0b545eb3c2a1f28`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

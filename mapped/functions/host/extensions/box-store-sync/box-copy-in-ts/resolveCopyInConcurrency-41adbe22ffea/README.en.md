# `resolveCopyInConcurrency`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482735-482740](../../../../../../../reference/runtime/host-main.cjs#L482735-L482740) | `FunctionDeclaration` | no | `env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482735-482740](../../../../../../../reference/runtime/host-main.cjs#L482735-L482740) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:482735

Calls written directly in this body: `Number.isFinite`, `Number.parseInt`, `env.SAND_BOX_STORE_COPY_IN_CONCURRENCY.trim`.

SHA-256 of the source span: `5ebbb939490b11f7c19948fbc7bb1c0fce628fff12654cff8843f538cc8dca9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

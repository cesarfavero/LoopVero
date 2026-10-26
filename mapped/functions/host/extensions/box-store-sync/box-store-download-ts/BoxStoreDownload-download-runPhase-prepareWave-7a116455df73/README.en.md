# `BoxStoreDownload.download/runPhase/prepareWave`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478139-478189](../../../../../../../reference/runtime/host-main.cjs#L478139-L478189) | `ArrowFunctionExpression` | yes | `wave` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478139-478189](../../../../../../../reference/runtime/host-main.cjs#L478139-L478189) | 2 | 1 | 2 | 1 | 0 | 1 |

### host:478139

Calls written directly in this body: `errorMessage`, `forEachBounded`, `remote.map`, `store.prefetchReads`, `this.log`.

Assignment or increment targets: `attempt`.

SHA-256 of the source span: `13e1611e70907f64e5426280b6311266e5644581be01001ec838736c446add48`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

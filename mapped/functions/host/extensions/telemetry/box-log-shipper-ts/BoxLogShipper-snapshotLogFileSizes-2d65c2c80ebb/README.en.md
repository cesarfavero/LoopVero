# `BoxLogShipper.snapshotLogFileSizes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730949-730973](../../../../../../../reference/runtime/host-main.cjs#L730949-L730973) | `method` | yes | `listing` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730949-730973](../../../../../../../reference/runtime/host-main.cjs#L730949-L730973) | 2 | 1 | 1 | 1 | 0 | 1 |

### host:730949

Calls written directly in this body: `errorLogTag`, `fileStat.isFile`, `files.push`, `findSystemErrno`, `this.reportHostLog`, `this.statFailedPaths.add`, `this.statFailedPaths.delete`, `this.statFailedPaths.has`, `this.statFile`.

Assignment or increment targets: `complete`, `fileStat`.

SHA-256 of the source span: `8f423a20f7e2a2e4dd2d7558b9f8aa2fa329a6f351388129808819ea9bea3550`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

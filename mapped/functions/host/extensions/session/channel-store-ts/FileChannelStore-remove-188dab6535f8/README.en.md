# `FileChannelStore.remove`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/channel-store.ts` · [Module README](../../../../../../modules/host/extensions/session/channel-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721321-721339](../../../../../../../reference/runtime/host-main.cjs#L721321-L721339) | `method` | no | `platform2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721321-721339](../../../../../../../reference/runtime/host-main.cjs#L721321-L721339) | 3 | 0 | 0 | 4 | 1 | 2 |

### host:721321

Calls written directly in this body: `.isDirectory`, `isMissingPathError`, `isSafeFolderId`, `new SandChannelLookupFailedError`, `removeSandDataFileSync`, `removeSandDataTreeSync`, `reportFallback`, `this.configPath`, `this.dir.scheduleNotify`, `this.stat`.

Explicit throw targets: `SandChannelLookupFailedError`.

SHA-256 of the source span: `b99c248bdc84ac23f4682511756f6a7ec7320711cec2aadbcbcd5f5598c1e7e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

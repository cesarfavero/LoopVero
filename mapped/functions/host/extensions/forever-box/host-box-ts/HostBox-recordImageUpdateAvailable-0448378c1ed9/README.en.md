# `HostBox.recordImageUpdateAvailable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/host-box.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680491-680503](../../../../../../../reference/runtime/host-main.cjs#L680491-L680503) | `method` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680491-680503](../../../../../../../reference/runtime/host-main.cjs#L680491-L680503) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:680491

Calls written directly in this body: `this.lastReported.get`, `this.lastReported.keys`, `this.notify`, `this.runningStatus`, `this.vncUrls.get`.

Assignment or increment targets: `this.imageUpdateAvailable`.

SHA-256 of the source span: `f7a24995808a72bba8dce0ec933947cd5a4f274d76c69589a8a4efae1d46ef3c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

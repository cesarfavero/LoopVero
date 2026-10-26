# `HostBox.getStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/host-box.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680606-680628](../../../../../../../reference/runtime/host-main.cjs#L680606-L680628) | `method` | yes | `ctx, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680606-680628](../../../../../../../reference/runtime/host-main.cjs#L680606-L680628) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:680606

Calls written directly in this body: `this.forkVncUrls.delete`, `this.inner.runState`, `this.report`, `this.runningStatus`, `this.vncUrls.delete`, `this.vncUrls.get`.

SHA-256 of the source span: `71383965284da7bb6996c1a76dd3d11d7bb22cc0c645025d50f3eb3414120cac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

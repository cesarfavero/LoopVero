# `HostBox.ensureWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/host-box.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680554-680574](../../../../../../../reference/runtime/host-main.cjs#L680554-L680574) | `method` | yes | `ctx, agentId, windowIndex, opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680554-680574](../../../../../../../reference/runtime/host-main.cjs#L680554-L680574) | 4 | 0 | 2 | 1 | 1 | 0 |

### host:680554

Calls written directly in this body: `forks.set`, `isPrimaryWindowIndex`, `new Map`, `new SandBoxCapabilityError2`, `this.ensureReady`, `this.forkVncUrls.get`, `this.forkVncUrls.set`, `this.inner.ensureWindow`, `this.notify`, `this.runningStatus`, `this.vncUrls.get`, `this.vncUrls.has`, `this.vncUrls.set`.

Assignment or increment targets: `forks`.

Explicit throw targets: `SandBoxCapabilityError2`.

SHA-256 of the source span: `3d7cf27d628e040f79f588035f568056c8ac0b0847752ede1151df26c11f53ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `BoxStoreSync.reportStoreDbSweepCapture`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481547-481565](../../../../../../../reference/runtime/host-main.cjs#L481547-L481565) | `method` | no | `capture, outcome, publication` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481547-481565](../../../../../../../reference/runtime/host-main.cjs#L481547-L481565) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:481547

Calls written directly in this body: `this.elapsedDurationMs`, `this.reportStoreDbCapture`.

SHA-256 of the source span: `d10d1391a3c7e875cc40b9be4bd56b8b18620cb17e1a2e508100e3f84166eeb7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

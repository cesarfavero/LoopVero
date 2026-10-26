# `LoopbackSandBox.waitUntilReady`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679464-679475](../../../../../../reference/runtime/host-main.cjs#L679464-L679475) | `method` | yes | `ctx, endpoint, timeoutMs = this.readyTimeoutMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679464-679475](../../../../../../reference/runtime/host-main.cjs#L679464-L679475) | 1 | 0 | 3 | 2 | 0 | 0 |

### host:679464

Calls written directly in this body: `this.waitUntilReadyUncoordinated`.

Assignment or increment targets: `this.daemonForegroundReadyWaits`.

SHA-256 of the source span: `cbf9b1411b343453b0e8f617e259fadc69a0ae41db707a312885e147f220dccd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

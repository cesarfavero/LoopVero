# `ForeverBoxService.requestRecreate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/forever-box-service.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/forever-box-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680307-680321](../../../../../../../reference/runtime/host-main.cjs#L680307-L680321) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680307-680321](../../../../../../../reference/runtime/host-main.cjs#L680307-L680321) | 1 | 0 | 2 | 1 | 1 | 1 |

### host:680307

Calls written directly in this body: `errorLogTag`, `this.abort.signal.throwIfAborted`, `this.options.lifecycleClient.recreateInBox`, `this.options.log`, `this.options.recreateFlushWaitDeadline.run`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `31f05f1893a82d22b6117dab05b21adb3f205c0f3b8c4fda2d6dc6ae83898360`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

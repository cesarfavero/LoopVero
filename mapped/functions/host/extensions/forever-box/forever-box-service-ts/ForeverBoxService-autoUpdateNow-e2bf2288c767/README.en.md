# `ForeverBoxService.autoUpdateNow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/forever-box-service.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/forever-box-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680191-680236](../../../../../../../reference/runtime/host-main.cjs#L680191-L680236) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680191-680236](../../../../../../../reference/runtime/host-main.cjs#L680191-L680236) | 8 | 0 | 2 | 9 | 0 | 1 |

### host:680191

Calls written directly in this body: `errorLogTag`, `logFields`, `this.isAutoUpdateCoolingDown`, `this.now`, `this.options.isInBox`, `this.options.log`, `this.options.telemetry.reportBoxRecreateDecided`, `this.refreshImageUpdateAvailable`, `this.requestRecreate`.

Assignment or increment targets: `this.lastAutoUpdateAttemptAt`, `this.updateInFlight`.

SHA-256 of the source span: `5c244b04db8b2ac5ecb46bccf963ce7c9fd68e6d2c514d1d9b24f1cd240e7959`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

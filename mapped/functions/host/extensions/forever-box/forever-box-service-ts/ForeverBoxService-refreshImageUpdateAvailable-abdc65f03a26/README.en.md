# `ForeverBoxService.refreshImageUpdateAvailable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/forever-box-service.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/forever-box-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680325-680390](../../../../../../../reference/runtime/host-main.cjs#L680325-L680390) | `method` | yes | `trigger2, options2 = { coalesce: true }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680325-680390](../../../../../../../reference/runtime/host-main.cjs#L680325-L680390) | 7 | 0 | 1 | 6 | 0 | 1 |

### host:680325

Calls written directly in this body: `SandError.boxImageCheckFailed`, `SandError.boxImageCheckTimedOut`, `brandedErrorClass`, `errorClassOf`, `this.box.recordImageUpdateAvailable`, `this.elapsedSince`, `this.now`, `this.options.imageCheckDeadline.run`, `this.options.isInBox`, `this.reportImageCheck`.

Assignment or increment targets: `this.imageRefreshInFlight`.

SHA-256 of the source span: `af1b20fcf69f21a9c7a31cacb8d6f98a3d88057e9a024c3743b8159f1475acb6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

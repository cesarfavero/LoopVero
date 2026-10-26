# `ForeverBoxService.seedImageUpdateAvailable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/forever-box-service.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/forever-box-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680391-680402](../../../../../../../reference/runtime/host-main.cjs#L680391-L680402) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680391-680402](../../../../../../../reference/runtime/host-main.cjs#L680391-L680402) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:680391

Calls written directly in this body: `this.options.imageSeedRetry.runWithRetry`, `this.options.isInBox`.

SHA-256 of the source span: `8b8aac771afc12607798951068ad442228af7cc5a79afcb64a63bd571d60d5e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

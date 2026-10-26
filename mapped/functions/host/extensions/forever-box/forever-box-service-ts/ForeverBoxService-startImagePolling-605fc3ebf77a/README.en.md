# `ForeverBoxService.startImagePolling`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/forever-box-service.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/forever-box-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680403-680420](../../../../../../../reference/runtime/host-main.cjs#L680403-L680420) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680403-680420](../../../../../../../reference/runtime/host-main.cjs#L680403-L680420) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:680403

Calls written directly in this body: `this.imagePollingStartDelay.dispose`, `this.options.imagePolling.start`, `this.options.imagePollingStartDelay.schedule`.

Assignment or increment targets: `this.imagePolling`, `this.imagePollingStartDelay`.

SHA-256 of the source span: `147fe506a06ac80da6f174ed5c901c2f1d2930b8d8e93c3d0653d0e37200a1b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

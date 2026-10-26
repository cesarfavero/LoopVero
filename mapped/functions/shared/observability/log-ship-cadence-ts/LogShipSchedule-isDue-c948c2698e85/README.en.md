# `LogShipSchedule.isDue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/log-ship-cadence.ts` · [Module README](../../../../../modules/shared/observability/log-ship-cadence-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:452671-452674](../../../../../../reference/runtime/host-main.cjs#L452671-L452674) | `method` | no | `eager, nowMs2 = Date.now()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452671-452674](../../../../../../reference/runtime/host-main.cjs#L452671-L452674) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:452671

Calls written directly in this body: `this.isBackingOff`.

SHA-256 of the source span: `d722dda69dd0be8271e576c1ada176d78a2ed654e7407d7e889cdb31e1440b5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

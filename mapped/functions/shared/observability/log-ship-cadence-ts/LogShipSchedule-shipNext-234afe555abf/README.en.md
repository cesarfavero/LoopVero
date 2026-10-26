# `LogShipSchedule.shipNext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/log-ship-cadence.ts` · [Module README](../../../../../modules/shared/observability/log-ship-cadence-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:452675-452677](../../../../../../reference/runtime/host-main.cjs#L452675-L452677) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452675-452677](../../../../../../reference/runtime/host-main.cjs#L452675-L452677) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:452675

Calls written directly in this body: `this.isBackingOff`.

Assignment or increment targets: `this.nextShipAtMs`.

SHA-256 of the source span: `b6cd3ecfaec1dde27221439acf3eabef4dff63cee4671d0ff883fc903abf1522`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

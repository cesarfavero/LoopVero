# `LogShipSchedule.record`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/log-ship-cadence.ts` · [Module README](../../../../../modules/shared/observability/log-ship-cadence-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:452678-452697](../../../../../../reference/runtime/host-main.cjs#L452678-L452697) | `method` | no | `result, nowMs2 = Date.now()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452678-452697](../../../../../../reference/runtime/host-main.cjs#L452678-L452697) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:452678

Calls written directly in this body: `getConnectRetryAfterMs`, `isRateLimitConnectError`, `nextLogShipDelayMs`.

Assignment or increment targets: `this.failureStreak`, `this.nextShipAtMs`, `this.rateLimitStreak`.

SHA-256 of the source span: `1301aa5e0315bc6d4338d9633d68a0119c8bdd1df3d2ca0ca6e813b5f5d655ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

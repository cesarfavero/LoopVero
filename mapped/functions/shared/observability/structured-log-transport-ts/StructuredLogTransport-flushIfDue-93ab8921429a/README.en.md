# `StructuredLogTransport.flushIfDue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453147-453153](../../../../../../reference/runtime/host-main.cjs#L453147-L453153) | `method` | yes | `eager` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453147-453153](../../../../../../reference/runtime/host-main.cjs#L453147-L453153) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:453147

Calls written directly in this body: `this.flush`, `this.hasPendingDrops`, `this.queueEagerDrain`, `this.shipSchedule.isDue`.

SHA-256 of the source span: `a0724051680b8895d51d4cec532a05c3e18e1d2f07efbb8f90ba710dffac5b91`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

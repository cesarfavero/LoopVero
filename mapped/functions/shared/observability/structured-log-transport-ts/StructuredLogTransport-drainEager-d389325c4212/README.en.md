# `StructuredLogTransport.drainEager`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453164-453171](../../../../../../reference/runtime/host-main.cjs#L453164-L453171) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453164-453171](../../../../../../reference/runtime/host-main.cjs#L453164-L453171) | 1 | 1 | 1 | 0 | 0 | 0 |

### host:453164

Calls written directly in this body: `this.flush`, `this.shipSchedule.isDue`.

Assignment or increment targets: `this.eagerDrainRequested`.

SHA-256 of the source span: `c6f0c36be67a8d772b8daee6581cc2ba3992e9910010ef5162b69324e0e4eeeb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

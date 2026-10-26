# `SandHost.flushTelemetryForFatalExit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786672-786677](../../../../../reference/runtime/host-main.cjs#L786672-L786677) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786672-786677](../../../../../reference/runtime/host-main.cjs#L786672-L786677) | 0 | 0 | 1 | 0 | 0 | 1 |

### host:786672

Calls written directly in this body: `.flushForFatalExit`, `this.hostExtensions.api`.

SHA-256 of the source span: `7427f9127d7411bf808e5e0533df8256cde2dd0c3ebf8c5a745d106de802131d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

# `SandHost.reportBoxReady`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786415-786440](../../../../../reference/runtime/host-main.cjs#L786415-L786440) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786415-786440](../../../../../reference/runtime/host-main.cjs#L786415-L786440) | 4 | 1 | 4 | 4 | 0 | 1 |

### host:786415

Calls written directly in this body: `.catch`, `Date.now`, `Math.max`, `Number.isFinite`, `delay3`, `this.telemetry.reportBoxBootStageConfirmed`.

Assignment or increment targets: `attempt`.

SHA-256 of the source span: `9444678aa20909373074d5acdfe88e02411f125d29cefb0a02f1030e3e8a72ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

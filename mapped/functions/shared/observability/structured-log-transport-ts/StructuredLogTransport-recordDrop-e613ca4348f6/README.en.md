# `StructuredLogTransport.recordDrop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453245-453249](../../../../../../reference/runtime/host-main.cjs#L453245-L453249) | `method` | no | `reason, count2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453245-453249](../../../../../../reference/runtime/host-main.cjs#L453245-L453249) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:453245

Calls written directly in this body: `Math.min`.

Assignment or increment targets: `counter.observed`.

SHA-256 of the source span: `fff0192b1062ccf7b6c1a2d2ec4173637507770e95344cd90ee5e614f8ddaa5a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

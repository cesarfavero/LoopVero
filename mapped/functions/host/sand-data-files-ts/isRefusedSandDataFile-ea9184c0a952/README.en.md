# `isRefusedSandDataFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453723-453725](../../../../../reference/runtime/host-main.cjs#L453723-L453725) | `FunctionDeclaration` | no | `error64` |
| [state-worker:482-484](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L482-L484) | `FunctionDeclaration` | no | `error` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453723-453725](../../../../../reference/runtime/host-main.cjs#L453723-L453725) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:482-484](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L482-L484) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:453723

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `f1f6464adbcb86a4dd98794caf72382dfb5b4448859c62fef67e26d3231dbd5f`.

### state-worker:482

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8c050660d8a5584c1347fd043bf8e635a5c72b6cca1ad63377a48ef453fddf29`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

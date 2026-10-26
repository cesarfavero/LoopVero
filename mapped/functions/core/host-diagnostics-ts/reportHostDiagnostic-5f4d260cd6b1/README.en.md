# `reportHostDiagnostic`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/observability/README.en.md).

**Module:** `core/host-diagnostics.ts` · [Module README](../../../../modules/core/host-diagnostics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430746-430748](../../../../../reference/runtime/host-main.cjs#L430746-L430748) | `FunctionDeclaration` | no | `diagnostic` |
| [evaluation:479618-479620](../../../../../reference/runtime/sand-eval-runner.cjs#L479618-L479620) | `FunctionDeclaration` | no | `diagnostic` |
| [state-worker:717-719](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L717-L719) | `FunctionDeclaration` | no | `diagnostic` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430746-430748](../../../../../reference/runtime/host-main.cjs#L430746-L430748) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:479618-479620](../../../../../reference/runtime/sand-eval-runner.cjs#L479618-L479620) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:717-719](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L717-L719) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:430746

Calls written directly in this body: `pinnedReporter`.

SHA-256 of the source span: `ed33d417708cc5e7e2c1e95b0e827a1f38b7243a1be34570d79b13df1d10ed9a`.

### evaluation:479618

Calls written directly in this body: `pinnedReporter`.

SHA-256 of the source span: `ed33d417708cc5e7e2c1e95b0e827a1f38b7243a1be34570d79b13df1d10ed9a`.

### state-worker:717

Calls written directly in this body: `pinnedReporter`.

SHA-256 of the source span: `ed33d417708cc5e7e2c1e95b0e827a1f38b7243a1be34570d79b13df1d10ed9a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

# `reportFallback`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/observability/README.en.md).

**Module:** `host/fallback-diagnostics.ts` · [Module README](../../../../modules/host/fallback-diagnostics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453494-453500](../../../../../reference/runtime/host-main.cjs#L453494-L453500) | `FunctionDeclaration` | no | `stage, error64` |
| [evaluation:627658-627664](../../../../../reference/runtime/sand-eval-runner.cjs#L627658-L627664) | `FunctionDeclaration` | no | `stage, error63` |
| [state-worker:723-729](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L723-L729) | `FunctionDeclaration` | no | `stage, error` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453494-453500](../../../../../reference/runtime/host-main.cjs#L453494-L453500) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627658-627664](../../../../../reference/runtime/sand-eval-runner.cjs#L627658-L627664) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:723-729](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L723-L729) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:453494

Calls written directly in this body: `errorLogTag`, `reportHostDiagnostic`, `reported.add`, `reported.has`.

SHA-256 of the source span: `d0aef68942af888188246a803b90e20eb61681da2fb794e0f8c4576004fa4ab4`.

### evaluation:627658

Calls written directly in this body: `errorLogTag`, `reportHostDiagnostic`, `reported.add`, `reported.has`.

SHA-256 of the source span: `c0cfa3f9649b2825d1021162e996c61e166d7613fa68843bc798cd18a24941cd`.

### state-worker:723

Calls written directly in this body: `errorLogTag`, `reportHostDiagnostic`, `reported.add`, `reported.has`.

SHA-256 of the source span: `2962946a98f39bee511813d363d327b05acc0b8a3fb6003d7be584adc3ea62a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

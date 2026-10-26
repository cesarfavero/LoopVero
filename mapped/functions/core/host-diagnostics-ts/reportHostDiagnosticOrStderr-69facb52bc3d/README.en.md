# `reportHostDiagnosticOrStderr`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/observability/README.en.md).

**Module:** `core/host-diagnostics.ts` · [Module README](../../../../modules/core/host-diagnostics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430749-430763](../../../../../reference/runtime/host-main.cjs#L430749-L430763) | `FunctionDeclaration` | no | `diagnostic` |
| [evaluation:479621-479635](../../../../../reference/runtime/sand-eval-runner.cjs#L479621-L479635) | `FunctionDeclaration` | no | `diagnostic` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430749-430763](../../../../../reference/runtime/host-main.cjs#L430749-L430763) | 1 | 0 | 0 | 1 | 0 | 1 |
| [evaluation:479621-479635](../../../../../reference/runtime/sand-eval-runner.cjs#L479621-L479635) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:430749

Calls written directly in this body: `errorLogTag`, `hostDiagnosticLine`, `pinnedReporter`, `process.stderr.write`.

SHA-256 of the source span: `876ae8d03f5676e0e4afb7aa405cf8f42f3b9393b073544ead8cce1b4b8cdd7d`.

### evaluation:479621

Calls written directly in this body: `errorLogTag`, `hostDiagnosticLine`, `pinnedReporter`, `process.stderr.write`.

SHA-256 of the source span: `876ae8d03f5676e0e4afb7aa405cf8f42f3b9393b073544ead8cce1b4b8cdd7d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

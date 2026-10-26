# `guardSandWidgetTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/widget-analytics.ts` · [Module README](../../../../../../modules/core/runner/cards/widget-analytics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583317-583327](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583317-L583327) | `FunctionDeclaration` | no | `emit` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583317-583327](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583317-L583327) | 0 | 0 | 0 | 0 | 0 | 1 |

### evaluation:583317

Calls written directly in this body: `emit`, `errorLogTag`, `reportHostDiagnosticOrStderr`.

SHA-256 of the source span: `41d5f297e34cc959b29f634d0c5e61966fa1df281946c653a22bd9b60a198ff9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

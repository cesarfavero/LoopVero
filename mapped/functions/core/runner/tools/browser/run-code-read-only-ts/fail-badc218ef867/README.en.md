# `fail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:522460-522462](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522460-L522462) | `FunctionDeclaration` | no | `reason = "unsupported_syntax"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:522460-522462](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522460-L522462) | 0 | 0 | 0 | 0 | 1 | 0 |

### evaluation:522460

Calls written directly in this body: `new NotReadOnly`.

Explicit throw targets: `NotReadOnly`.

SHA-256 of the source span: `b714a523fea8aed70eda0fa79192590e8509dd04d8f9c5e2f2b61081edea3e51`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

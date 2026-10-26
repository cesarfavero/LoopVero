# `isDataLike`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749651-749653](../../../../../../../../reference/runtime/host-main.cjs#L749651-L749653) | `FunctionDeclaration` | no | `kind` |
| [evaluation:522502-522504](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522502-L522504) | `FunctionDeclaration` | no | `kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749651-749653](../../../../../../../../reference/runtime/host-main.cjs#L749651-L749653) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522502-522504](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522502-L522504) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:749651

Calls written directly in this body: `arrayOf`.

SHA-256 of the source span: `0a98142b2fe88cc4e7dd66cc840da3037e4a2f626952b093ab10d8122195d305`.

### evaluation:522502

Calls written directly in this body: `arrayOf2`.

SHA-256 of the source span: `71db44596b550b877fd6bd7dbe87f49d8c3360f3dff797839cd237c994fc97fa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

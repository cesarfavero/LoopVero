# `classifyPlaywrightRunCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749679-749706](../../../../../../../../reference/runtime/host-main.cjs#L749679-L749706) | `FunctionDeclaration` | no | `code` |
| [evaluation:522530-522557](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522530-L522557) | `FunctionDeclaration` | no | `code` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749679-749706](../../../../../../../../reference/runtime/host-main.cjs#L749679-L749706) | 8 | 0 | 0 | 9 | 0 | 1 |
| [evaluation:522530-522557](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522530-L522557) | 8 | 0 | 0 | 9 | 0 | 1 |

### host:749679

Calls written directly in this body: `code.includes`, `parse15`, `walk2`.

Assignment or increment targets: `program`.

SHA-256 of the source span: `0d3ae9d7851fd74ce697d64768e0213bfb4d61023fb78d7c40a0926278e8f98d`.

### evaluation:522530

Calls written directly in this body: `code.includes`, `parse11`, `walk2`.

Assignment or increment targets: `program`.

SHA-256 of the source span: `f947f725ff1ed08dbcbffd4452897af69e2505af8001955d1147df26c9d8b693`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

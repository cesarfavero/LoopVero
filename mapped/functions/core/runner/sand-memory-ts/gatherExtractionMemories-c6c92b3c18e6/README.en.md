# `gatherExtractionMemories`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536316-536331](../../../../../../reference/runtime/sand-eval-runner.cjs#L536316-L536331) | `FunctionDeclaration` | no | `recall2, archive, exchangeText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536316-536331](../../../../../../reference/runtime/sand-eval-runner.cjs#L536316-L536331) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536316

Calls written directly in this body: `.map`, `archive.filter`, `inPrompt.map`, `new Set`, `selectRelevantMemories`.

SHA-256 of the source span: `c07bdf80537e6b1d22f6c3a5d44bc3d449f46ef0606adfd04820c4f978eaf5e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

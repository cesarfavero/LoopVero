# `createSystemPromptAssembly/memoryFactsPin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552929-552935](../../../../../../reference/runtime/sand-eval-runner.cjs#L552929-L552935) | `FunctionDeclaration` | no | `pin` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552929-552935](../../../../../../reference/runtime/sand-eval-runner.cjs#L552929-L552935) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:552929

Calls written directly in this body: `USER_MEMORY_FACT_MARKERS.some`, `deps.userMemory`, `isMemoryControlRender`.

SHA-256 of the source span: `3291c2b72a8c4a2c60fab37f81fc783b02966bc573855a6588599c5ceff4244b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

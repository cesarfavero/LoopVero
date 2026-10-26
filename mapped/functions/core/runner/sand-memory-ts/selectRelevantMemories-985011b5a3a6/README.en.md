# `selectRelevantMemories`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536302-536315](../../../../../../reference/runtime/sand-eval-runner.cjs#L536302-L536315) | `FunctionDeclaration` | no | `query2, memories, max` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536302-536315](../../../../../../reference/runtime/sand-eval-runner.cjs#L536302-L536315) | 4 | 2 | 0 | 3 | 0 | 0 |

### evaluation:536302

Calls written directly in this body: `.map`, `.slice`, `queryTokens.has`, `relevanceTokens`, `scored.push`, `scored.sort`.

Assignment or increment targets: `overlap`.

SHA-256 of the source span: `a944bae3041627e9b062408a4a580ea0b6a42d0d00374551f8fa4fadd3e66074`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

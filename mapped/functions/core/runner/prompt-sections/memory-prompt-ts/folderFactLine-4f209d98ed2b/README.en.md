# `folderFactLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/prompt-sections/memory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537896-537898](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537896-L537898) | `FunctionDeclaration` | no | `fact` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537896-537898](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537896-L537898) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:537896

Calls written directly in this body: `formatMemoryDate`.

SHA-256 of the source span: `30db57060be17d1041c8f01b4f4c535a8b81f72728b89609b268b7283ff645fd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

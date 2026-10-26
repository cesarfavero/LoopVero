# `indexFacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-sort-memories-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754243-754245](../../../../../../../reference/runtime/host-main.cjs#L754243-L754245) | `FunctionDeclaration` | no | `store` |
| [evaluation:536711-536713](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536711-L536713) | `FunctionDeclaration` | no | `store` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754243-754245](../../../../../../../reference/runtime/host-main.cjs#L754243-L754245) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536711-536713](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536711-L536713) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754243

Calls written directly in this body: `.map`, `new Map`, `store.listMemories`.

SHA-256 of the source span: `5149841912ef17722c4e0d260c29971aadb4c3c8baae472ba59aa1e9f3a035b6`.

### evaluation:536711

Calls written directly in this body: `.map`, `new Map`, `store.listMemories`.

SHA-256 of the source span: `21e8440299f5d5c39ee5b93d97168a8810146ec2d28a10dd3a7312888038ee50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

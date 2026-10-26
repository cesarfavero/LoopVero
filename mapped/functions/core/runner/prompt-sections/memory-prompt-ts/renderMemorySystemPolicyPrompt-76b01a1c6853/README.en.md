# `renderMemorySystemPolicyPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/prompt-sections/memory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537841-537843](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537841-L537843) | `FunctionDeclaration` | no | `location, opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537841-537843](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537841-L537843) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:537841

Calls written directly in this body: `renderMemoryPolicyPrompt`.

SHA-256 of the source span: `56e3f426877bbbd6e77e7eeff035aa583a08ceb0753830112120deaf865dd8cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

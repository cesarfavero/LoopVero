# `findInitialUserPromptIndex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476273-476281](../../../../../../reference/runtime/host-main.cjs#L476273-L476281) | `FunctionDeclaration` | no | `messages2` |
| [evaluation:255583-255591](../../../../../../reference/runtime/sand-eval-runner.cjs#L255583-L255591) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476273-476281](../../../../../../reference/runtime/host-main.cjs#L476273-L476281) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:255583-255591](../../../../../../reference/runtime/sand-eval-runner.cjs#L255583-L255591) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:476273

Calls written directly in this body: `settlesInitialUserPrompt`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `465e83552c9ad9e0a6822f55137e102cf4f7da7442eb04b3efef649e117c4960`.

### evaluation:255583

Calls written directly in this body: `settlesInitialUserPrompt`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `27412c8bfadab43868498bb74cfabd0cf52ab7308efa2f3113c4be29f7afebb6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `renderRelatedConversationsPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sessions/related-conversations-prompt.ts` · [Module README](../../../../../../modules/core/runner/sessions/related-conversations-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538432-538436](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538432-L538436) | `FunctionDeclaration` | no | `links` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538432-538436](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538432-L538436) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538432

Calls written directly in this body: `.map`, `.sort`, `links.slice`, `renderLinkLines`.

SHA-256 of the source span: `f7b963b1d4f1b44701f8a58be9023a76fc30d7586b9428f3cfa9c941b82df637`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

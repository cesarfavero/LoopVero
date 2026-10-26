# `resolveRelatedConversationsPromptSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sessions/related-conversations-prompt.ts` · [Module README](../../../../../../modules/core/runner/sessions/related-conversations-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538437-538471](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538437-L538471) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538437-538471](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538437-L538471) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:538437

Calls written directly in this body: `.map`, `.sort`, `live.filter`, `live.map`, `new Set`, `renderLinkLines`, `renderRelatedConversationsPrompt`, `section`, `seenLines.map`, `stillSeen`, `withNotes`.

SHA-256 of the source span: `850db748d499c35b99685775f348ac68a6efcfe7433d154131e38e47815667c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

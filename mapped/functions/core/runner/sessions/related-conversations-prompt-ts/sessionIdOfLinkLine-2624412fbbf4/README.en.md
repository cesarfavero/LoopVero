# `sessionIdOfLinkLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sessions/related-conversations-prompt.ts` · [Module README](../../../../../../modules/core/runner/sessions/related-conversations-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538423-538425](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538423-L538425) | `FunctionDeclaration` | no | `line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538423-538425](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538423-L538425) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538423

Calls written directly in this body: `LINK_LINE_SESSION_ID_RE.exec`.

SHA-256 of the source span: `9a1155260f57ea230ce0c2c1f382119b9bf26e4b6d8ff4efb87847da840d7bd2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

# `speakerList`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sessions/slack-conversation-prompt.ts` · [Module README](../../../../../../modules/core/runner/sessions/slack-conversation-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538240-538246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538240-L538246) | `FunctionDeclaration` | no | `participants` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538240-538246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538240-L538246) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:538240

Calls written directly in this body: `.join`, `named2.join`, `named2.slice`, `participants.slice`.

SHA-256 of the source span: `e27bf1aadbff7e0c5289557d598c36c716f22906bf12998d21b91b27e0d4ddb8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

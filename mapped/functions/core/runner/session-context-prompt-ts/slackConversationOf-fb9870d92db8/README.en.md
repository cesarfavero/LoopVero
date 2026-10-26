# `slackConversationOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/session-context-prompt.ts` · [Module README](../../../../../modules/core/runner/session-context-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538317-538327](../../../../../../reference/runtime/sand-eval-runner.cjs#L538317-L538327) | `FunctionDeclaration` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538317-538327](../../../../../../reference/runtime/sand-eval-runner.cjs#L538317-L538327) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538317

Calls written directly in this body: `slackConversationKindOf`, `slackSegments`.

SHA-256 of the source span: `da1de8f706405cdfe0ef560fd1fc51deadd465091c451e4a7d7623b5c1fb4506`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `buildSubagentRevival`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-revival-prompt.ts` · [Module README](../../../../../modules/core/runner/subagent-revival-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583924-583933](../../../../../../reference/runtime/sand-eval-runner.cjs#L583924-L583933) | `FunctionDeclaration` | no | `completions, context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583924-583933](../../../../../../reference/runtime/sand-eval-runner.cjs#L583924-L583933) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583924

Calls written directly in this body: `buildSubagentRevivalPrompt`, `completions.some`, `revivalInstructionOf`, `settledDelegationsOf`.

SHA-256 of the source span: `66419561410c26f5565cc6479385afe69c0edcbe210ae4914275a096f9086406`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

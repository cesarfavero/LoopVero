# `_SandAgentRunner.createAutoReviewConversationState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593938-593951](../../../../../../reference/runtime/sand-eval-runner.cjs#L593938-L593951) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593938-593951](../../../../../../reference/runtime/sand-eval-runner.cjs#L593938-L593951) | 0 | 0 | 2 | 1 | 0 | 0 |

### evaluation:593938

Calls written directly in this body: `.toBinary`, `ConversationStateHandle.fromConversationStateStructure`, `ConversationStateStructure.fromBinary`, `new BaseRedactedPromptBuilder`, `this.getBlobStore`, `this.getConversationState`, `this.inference.resolvePrivacyMode`, `toRedactedConversationStateStructure`.

SHA-256 of the source span: `2678078799a353c41ce419c5323568daf75d2edc78860507b811ec954ac3f05f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

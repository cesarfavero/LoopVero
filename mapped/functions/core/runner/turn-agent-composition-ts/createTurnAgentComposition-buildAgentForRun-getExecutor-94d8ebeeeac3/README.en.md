# `createTurnAgentComposition/buildAgentForRun/getExecutor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-agent-composition.ts` · [Module README](../../../../../modules/core/runner/turn-agent-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588141-588141](../../../../../../reference/runtime/sand-eval-runner.cjs#L588141-L588141) | `ArrowFunctionExpression` | no | `state` |
| [evaluation:588242-588250](../../../../../../reference/runtime/sand-eval-runner.cjs#L588242-L588250) | `ArrowFunctionExpression` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588141-588141](../../../../../../reference/runtime/sand-eval-runner.cjs#L588141-L588141) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:588141 uses an implicit arrow-function return.
| [evaluation:588242-588250](../../../../../../reference/runtime/sand-eval-runner.cjs#L588242-L588250) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588141

Calls written directly in this body: `applyParentConversationCall`, `summarizationSession.getExecutor`.

SHA-256 of the source span: `a7430dcb3751957b453f648721e8492036d333e07a053a7d6052530afa912c42`.

### evaluation:588242

Calls written directly in this body: `applyFrozenToolDescriptions`, `applyParentConversationCall`, `frozenPromptTools.middleware`, `new SandSelfSummaryPromptToolExecutor`, `session.getExecutorWithoutResolvedModelTracking`.

SHA-256 of the source span: `83380a368527d35be77236b3df99eb1da70e54da86aac6b4e43a18e7c33e65d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

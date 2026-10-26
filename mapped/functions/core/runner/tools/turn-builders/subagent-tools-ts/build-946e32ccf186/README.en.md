# `build`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/turn-builders/subagent-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/subagent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781147-781205](../../../../../../../../reference/runtime/host-main.cjs#L781147-L781205) | `ArrowFunctionExpression` | no | `{     host,     turn,     props,     extractAutoReviewConversationContext: extractAutoReviewConversationContext3   }, built` |
| [evaluation:581494-581552](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581494-L581552) | `ArrowFunctionExpression` | no | `{     host,     turn,     props,     extractAutoReviewConversationContext: extractAutoReviewConversationContext3   }, built` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781147-781205](../../../../../../../../reference/runtime/host-main.cjs#L781147-L781205) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581494-581552](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581494-L581552) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:781147

Calls written directly in this body: `built.some`, `createSubagentManagementTools`, `detached.stopDelegatedWork.bind`, `sandSubagentToolName`.

SHA-256 of the source span: `dabde6c781748c64a46da7fc2b228bf621c232deeef498ebaa7e774b57dae768`.

### evaluation:581494

Calls written directly in this body: `built.some`, `createSubagentManagementTools`, `detached.stopDelegatedWork.bind`, `sandSubagentToolName`.

SHA-256 of the source span: `dabde6c781748c64a46da7fc2b228bf621c232deeef498ebaa7e774b57dae768`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

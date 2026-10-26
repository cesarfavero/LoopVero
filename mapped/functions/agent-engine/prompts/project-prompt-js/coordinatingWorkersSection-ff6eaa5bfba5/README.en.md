# `coordinatingWorkersSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641079-641099](../../../../../../reference/runtime/host-main.cjs#L641079-L641099) | `FunctionDeclaration` | no | `options2` |
| [evaluation:431692-431712](../../../../../../reference/runtime/sand-eval-runner.cjs#L431692-L431712) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641079-641099](../../../../../../reference/runtime/host-main.cjs#L641079-L641099) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431692-431712](../../../../../../reference/runtime/sand-eval-runner.cjs#L431692-L431712) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:641079

Calls written directly in this body: `paragraphs.join`, `placementConsentClauses`, `sendToAgentDeliveryClause`, `sendToAgentResumeHint`, `sharedCheckoutWorktreeHint`.

SHA-256 of the source span: `905d7adbff16e75b8e85d4bd21c80e50eadd45198ccc0528dc52e68d56d3fce2`.

### evaluation:431692

Calls written directly in this body: `paragraphs.join`, `placementConsentClauses`, `sendToAgentDeliveryClause`, `sendToAgentResumeHint`, `sharedCheckoutWorktreeHint`.

SHA-256 of the source span: `905d7adbff16e75b8e85d4bd21c80e50eadd45198ccc0528dc52e68d56d3fce2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

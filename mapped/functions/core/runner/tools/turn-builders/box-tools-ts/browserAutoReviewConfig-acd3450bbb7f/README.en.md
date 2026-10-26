# `browserAutoReviewConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778887-778907](../../../../../../../../reference/runtime/host-main.cjs#L778887-L778907) | `FunctionDeclaration` | no | `{   host,   turn,   resolveAgentDisplay,   extractAutoReviewConversationContext: extractAutoReviewConversationContext3 }` |
| [evaluation:578621-578641](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578621-L578641) | `FunctionDeclaration` | no | `{   host,   turn,   resolveAgentDisplay,   extractAutoReviewConversationContext: extractAutoReviewConversationContext3 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778887-778907](../../../../../../../../reference/runtime/host-main.cjs#L778887-L778907) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:578621-578641](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578621-L578641) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:778887

Calls written directly in this body: `host.getAutoReviewInstructions`, `host.getConversationId`, `host.resolveBoxId`, `resolveAgentDisplay`.

SHA-256 of the source span: `a255b8043bde9005a043b6416482882f7051bd4d3e6a8c06ad8debba66437e98`.

### evaluation:578621

Calls written directly in this body: `host.getAutoReviewInstructions`, `host.getConversationId`, `host.resolveBoxId`, `resolveAgentDisplay`.

SHA-256 of the source span: `a255b8043bde9005a043b6416482882f7051bd4d3e6a8c06ad8debba66437e98`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

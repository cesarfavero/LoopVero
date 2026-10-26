# `resolveAgentInboxDraft`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755332-755362](../../../../../../../reference/runtime/host-main.cjs#L755332-L755362) | `FunctionDeclaration` | yes | `agentInbox, draft, attachments` |
| [evaluation:541212-541242](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541212-L541242) | `FunctionDeclaration` | yes | `agentInbox, draft, attachments` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755332-755362](../../../../../../../reference/runtime/host-main.cjs#L755332-L755362) | 3 | 0 | 1 | 1 | 2 | 0 |
| [evaluation:541212-541242](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541212-L541242) | 3 | 0 | 1 | 1 | 2 | 0 |

### host:755332

Calls written directly in this body: `agentInbox.getAgentDir`, `invariant`, `new DraftRefusedError`, `nonEmpty4`, `resolution.reason.replace`, `verifyAgentInboxDraft`.

Explicit throw targets: `DraftRefusedError`.

SHA-256 of the source span: `7baf74c83157b11627fe45a6a5da025be68a71eca4e58bb14fc6461b19d2ec0b`.

### evaluation:541212

Calls written directly in this body: `agentInbox.getAgentDir`, `invariant`, `new DraftRefusedError`, `nonEmpty2`, `resolution.reason.replace`, `verifyAgentInboxDraft`.

Explicit throw targets: `DraftRefusedError`.

SHA-256 of the source span: `50592654c286cd2984772c450e0cc4b2b70bd39e671d8fcf691fe9f5df5c3d0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

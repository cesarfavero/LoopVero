# `buildEmailSendCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732889-732957](../../../../../../../reference/runtime/host-main.cjs#L732889-L732957) | `FunctionDeclaration` | no | `route, draft, sendingAddress` |
| [evaluation:540411-540479](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540411-L540479) | `FunctionDeclaration` | no | `route, draft, sendingAddress` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732889-732957](../../../../../../../reference/runtime/host-main.cjs#L732889-L732957) | 10 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:540411-540479](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540411-L540479) | 10 | 0 | 0 | 7 | 0 | 0 |

### host:732889

Calls written directly in this body: `agentInboxSendCall`, `cardHtmlBody`, `draft.to.join`, `grokGmailSendCall`, `inertDraftText`, `isAgentInboxRoute`, `isGrokGmailRoute`, `restGmailSendCall`, `sendGmailDraftFromVerifiedSender`, `sendStagedDraft`, `signedGmailBodies`.

SHA-256 of the source span: `4182edb211d9274e502e5b0f002cbee8d4a3a13e7431cb35d2259f2a15a1a1e5`.

### evaluation:540411

Calls written directly in this body: `agentInboxSendCall`, `cardHtmlBody`, `draft.to.join`, `grokGmailSendCall`, `inertDraftText`, `isAgentInboxRoute`, `isGrokGmailRoute`, `restGmailSendCall`, `sendGmailDraftFromVerifiedSender`, `sendStagedDraft`, `signedGmailBodies`.

SHA-256 of the source span: `4182edb211d9274e502e5b0f002cbee8d4a3a13e7431cb35d2259f2a15a1a1e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

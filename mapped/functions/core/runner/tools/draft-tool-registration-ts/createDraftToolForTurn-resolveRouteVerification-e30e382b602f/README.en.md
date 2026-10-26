# `createDraftToolForTurn/resolveRouteVerification`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756163-756256](../../../../../../../reference/runtime/host-main.cjs#L756163-L756256) | `ArrowFunctionExpression` | yes | `ctx, { route, toolCallId, sendingAddress }` |
| [evaluation:542084-542177](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542084-L542177) | `ArrowFunctionExpression` | yes | `ctx, { route, toolCallId, sendingAddress }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756163-756256](../../../../../../../reference/runtime/host-main.cjs#L756163-L756256) | 10 | 1 | 5 | 6 | 0 | 0 |
| [evaluation:542084-542177](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542084-L542177) | 10 | 1 | 5 | 6 | 0 | 0 |

### host:756163

Calls written directly in this body: `canSendAs`, `candidates.at`, `candidates.slice`, `draftSendRouteCandidates`, `host.assertNoPendingAutoReviewApproval`, `hostedSendAs`, `mcp.resolveGmailDefaultSendAs.bind`, `mcp.resolveNeedsAuthSlot`, `onHostedGmailConnection`, `readGmailDefaultSendAs`, `verify`.

Assignment or increment targets: `target`.

SHA-256 of the source span: `89ede4562656dbb40c09893b8a21aaa4ed34ae3e1b736e8434b308fb40d46745`.

### evaluation:542084

Calls written directly in this body: `canSendAs`, `candidates.at`, `candidates.slice`, `draftSendRouteCandidates`, `host.assertNoPendingAutoReviewApproval`, `hostedSendAs`, `mcp.resolveGmailDefaultSendAs.bind`, `mcp.resolveNeedsAuthSlot`, `onHostedGmailConnection`, `readGmailDefaultSendAs`, `verify`.

Assignment or increment targets: `target`.

SHA-256 of the source span: `389cef72a4951dcf15226777f693b077af5f8af5baae6e615d6b0e9a394e6e92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

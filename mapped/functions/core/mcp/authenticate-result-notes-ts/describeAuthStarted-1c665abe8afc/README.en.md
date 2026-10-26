# `describeAuthStarted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/authenticate-result-notes.ts` · [Module README](../../../../../modules/core/mcp/authenticate-result-notes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779344-779364](../../../../../../reference/runtime/host-main.cjs#L779344-L779364) | `FunctionDeclaration` | yes | `result, request5` |
| [evaluation:579518-579538](../../../../../../reference/runtime/sand-eval-runner.cjs#L579518-L579538) | `FunctionDeclaration` | yes | `result, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779344-779364](../../../../../../reference/runtime/host-main.cjs#L779344-L779364) | 6 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:579518-579538](../../../../../../reference/runtime/sand-eval-runner.cjs#L579518-L579538) | 6 | 0 | 1 | 2 | 0 | 0 |

### host:779344

Calls written directly in this body: `describeFinanceBankLinkStarted`, `describeStartedSignIn`, `emitStartedCard`, `gatedSignOutReasonNote`, `isGrokFinanceServerId`, `request5.connectCardFollowUp`, `signedInReadClaimsWait`, `startedCardEmission`.

SHA-256 of the source span: `457abed6263dd5979ca49ef6e4b957f5f5e455319120dd6c5983eab6b7884d75`.

### evaluation:579518

Calls written directly in this body: `describeFinanceBankLinkStarted`, `describeStartedSignIn`, `emitStartedCard`, `gatedSignOutReasonNote`, `isGrokFinanceServerId`, `request3.connectCardFollowUp`, `signedInReadClaimsWait`, `startedCardEmission`.

SHA-256 of the source span: `c49a57ed0807f8fe0075f0a47e1da4e82805dfb72e621c4edc0a7ef80a790427`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

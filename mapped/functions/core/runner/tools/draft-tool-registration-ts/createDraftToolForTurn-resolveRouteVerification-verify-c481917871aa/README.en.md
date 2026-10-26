# `createDraftToolForTurn/resolveRouteVerification/verify`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756176-756223](../../../../../../../reference/runtime/host-main.cjs#L756176-L756223) | `ArrowFunctionExpression` | yes | `candidate, from2` |
| [evaluation:542097-542144](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542097-L542144) | `ArrowFunctionExpression` | yes | `candidate, from2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756176-756223](../../../../../../../reference/runtime/host-main.cjs#L756176-L756223) | 8 | 0 | 3 | 6 | 0 | 0 |
| [evaluation:542097-542144](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542097-L542144) | 8 | 0 | 3 | 6 | 0 | 0 |

### host:756176

Calls written directly in this body: `canSendAs`, `gmailSendAsSignatureHtml`, `host.assertNoPendingAutoReviewApproval`, `hostedSendAs`, `resolveGmailSignature`, `retryWhileDraftRateLimited`, `reviewOptions`, `reviewSandDraftRouteVerification`.

SHA-256 of the source span: `53dd18e7ef57a882e68f09482e3b2c8e258d975b6ce3564c5bce59b3937abc9d`.

### evaluation:542097

Calls written directly in this body: `canSendAs`, `gmailSendAsSignatureHtml`, `host.assertNoPendingAutoReviewApproval`, `hostedSendAs`, `resolveGmailSignature`, `retryWhileDraftRateLimited`, `reviewOptions`, `reviewSandDraftRouteVerification`.

SHA-256 of the source span: `cb5b37522ec13af0736e7cdbf1c61908a3bbdad7c1dffb7bd174d890feecfa89`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

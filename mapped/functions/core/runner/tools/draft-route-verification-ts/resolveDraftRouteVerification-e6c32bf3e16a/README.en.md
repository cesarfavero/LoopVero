# `resolveDraftRouteVerification`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735416-735472](../../../../../../../reference/runtime/host-main.cjs#L735416-L735472) | `FunctionDeclaration` | yes | `execute, route, options2 = {}` |
| [evaluation:540981-541037](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540981-L541037) | `FunctionDeclaration` | yes | `execute, route, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735416-735472](../../../../../../../reference/runtime/host-main.cjs#L735416-L735472) | 8 | 0 | 4 | 7 | 0 | 0 |
| [evaluation:540981-541037](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540981-L541037) | 8 | 0 | 4 | 7 | 0 | 0 |

### host:735416

Calls written directly in this body: `SLACK_ONE_TO_ONE_ID.test`, `execute`, `parseChannelDisplayName`, `readSlackPartnerProfileName`, `readSlackThreadParent`, `resolveEmailRouteVerification`, `resolveSlackSender`, `resolveSlackToLabel`, `slackReadMessages`, `slackVerificationFailure`.

SHA-256 of the source span: `e6bdce097b22c6408c931b84ff5319554e7ae2b864806d99dec93f6c00ce89c2`.

### evaluation:540981

Calls written directly in this body: `SLACK_ONE_TO_ONE_ID.test`, `execute`, `parseChannelDisplayName`, `readSlackPartnerProfileName`, `readSlackThreadParent`, `resolveEmailRouteVerification`, `resolveSlackSender`, `resolveSlackToLabel`, `slackReadMessages`, `slackVerificationFailure`.

SHA-256 of the source span: `e6bdce097b22c6408c931b84ff5319554e7ae2b864806d99dec93f6c00ce89c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

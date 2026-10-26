# `createRequestUserFormTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726751-726793](../../../../../../../reference/runtime/host-main.cjs#L726751-L726793) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:561366-561408](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561366-L561408) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726751-726793](../../../../../../../reference/runtime/host-main.cjs#L726751-L726793) | 11 | 0 | 4 | 7 | 0 | 0 |
| [evaluation:561366-561408](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561366-L561408) | 11 | 0 | 4 | 7 | 0 | 0 |

### host:726751

Calls written directly in this body: `Date.now`, `buildUserFormDriverUnavailableResult`, `buildUserFormSkippedFieldsNote`, `buildUserFormUnfillableResult`, `buildUserFormUnsupportedTurnResult`, `d.endTurn`, `d.getAgentId`, `d.onSendMessage`, `d.requestForm`, `invariant`, `isVaultKindOrOldArgs`, `normalizeUserFormRequest`, `resolveCardTaskThread`, `secureValuesUserFormOnLiveSite`, `shownUserFormOf`, `vaultKindOrOldUserForm`.

Assignment or increment targets: `form`.

SHA-256 of the source span: `6563703355f163790c4007565a71ff367e44f1543483be03187b38cf16503af4`.

### evaluation:561366

Calls written directly in this body: `Date.now`, `buildUserFormDriverUnavailableResult`, `buildUserFormSkippedFieldsNote`, `buildUserFormUnfillableResult`, `buildUserFormUnsupportedTurnResult`, `d.endTurn`, `d.getAgentId`, `d.onSendMessage`, `d.requestForm`, `invariant`, `isVaultKindOrOldArgs`, `normalizeUserFormRequest`, `resolveCardTaskThread`, `secureValuesUserFormOnLiveSite`, `shownUserFormOf`, `vaultKindOrOldUserForm`.

Assignment or increment targets: `form`.

SHA-256 of the source span: `94ab060eeb2ba0f2f7456015a2de4a04c83d5f8a8abdd5c4dc19bd4a8c59831b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

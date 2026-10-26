# `sendToUserDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761198-761221](../../../../../../../reference/runtime/host-main.cjs#L761198-L761221) | `FunctionDeclaration` | no | `deps, concise = usesConciseSendToUser(deps)` |
| [evaluation:552013-552036](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552013-L552036) | `FunctionDeclaration` | no | `deps, concise = usesConciseSendToUser(deps)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761198-761221](../../../../../../../reference/runtime/host-main.cjs#L761198-L761221) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:552013-552036](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552013-L552036) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:761198

Calls written directly in this body: `conciseSendToUserDescription`, `credentialRequestKind`, `deps.systemPromptHasSendToUserPolicy`, `deps.systemPromptPolicyHeadings`, `gatedInAppLinksGuidance`, `openingDeferringTo`, `sendToUserActionsGuidance`, `sendToUserLinkVisibility`, `widgetIntroDeferringTo`.

Assignment or increment targets: `credentialRequest`, `endTurnGuidance`.

SHA-256 of the source span: `7f306eed8aea279e3a6701505129a2e8894012b1f1989e32dc8ba02f32d837e1`.

### evaluation:552013

Calls written directly in this body: `conciseSendToUserDescription`, `credentialRequestKind`, `deps.systemPromptHasSendToUserPolicy`, `deps.systemPromptPolicyHeadings`, `gatedInAppLinksGuidance`, `openingDeferringTo`, `sendToUserActionsGuidance`, `sendToUserLinkVisibility`, `widgetIntroDeferringTo`.

Assignment or increment targets: `credentialRequest`, `endTurnGuidance`.

SHA-256 of the source span: `7f306eed8aea279e3a6701505129a2e8894012b1f1989e32dc8ba02f32d837e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

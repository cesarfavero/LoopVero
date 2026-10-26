# `createDraftToolForTurn/proposeRule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756118-756130](../../../../../../../reference/runtime/host-main.cjs#L756118-L756130) | `ArrowFunctionExpression` | yes | `ctx, emission, toolCallId` |
| [evaluation:542039-542051](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542039-L542051) | `ArrowFunctionExpression` | yes | `ctx, emission, toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756118-756130](../../../../../../../reference/runtime/host-main.cjs#L756118-L756130) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:542039-542051](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542039-L542051) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:756118

Calls written directly in this body: `host.ruleProposalsPermitted`, `proposeDraftAllowRule`, `reviewOptions`, `reviewedDraftSendCall`.

SHA-256 of the source span: `2230740de200d65fbb5e39fc3eb28a29abb5570930f4f4c5c2a8f12b421eac75`.

### evaluation:542039

Calls written directly in this body: `host.ruleProposalsPermitted`, `proposeDraftAllowRule`, `reviewOptions`, `reviewedDraftSendCall`.

SHA-256 of the source span: `2230740de200d65fbb5e39fc3eb28a29abb5570930f4f4c5c2a8f12b421eac75`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

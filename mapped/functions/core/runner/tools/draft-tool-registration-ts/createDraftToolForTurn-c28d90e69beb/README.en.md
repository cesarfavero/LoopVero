# `createDraftToolForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756086-756258](../../../../../../../reference/runtime/host-main.cjs#L756086-L756258) | `FunctionDeclaration` | no | `host, decisions, turn, review, recordDelivery` |
| [evaluation:542007-542179](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542007-L542179) | `FunctionDeclaration` | no | `host, decisions, turn, review, recordDelivery` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756086-756258](../../../../../../../reference/runtime/host-main.cjs#L756086-L756258) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:542007-542179](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542007-L542179) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:756086

Calls written directly in this body: `agentEmailDraftsForTurn`, `createDraftExternalMessageTool`, `createDraftRateLimitRetry`, `decisions.offers`, `draftToolAvailableForTurn`.

SHA-256 of the source span: `1675d609cadcad702b47226538d39299d1fa4b238f367bb808832f8fcf0ddbab`.

### evaluation:542007

Calls written directly in this body: `agentEmailDraftsForTurn`, `createDraftExternalMessageTool`, `createDraftRateLimitRetry`, `decisions.offers`, `draftToolAvailableForTurn`.

SHA-256 of the source span: `4fa0e80bc6b221913004a43a1577d09feb4d0e85bfc3d1235f4e55152c925b01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

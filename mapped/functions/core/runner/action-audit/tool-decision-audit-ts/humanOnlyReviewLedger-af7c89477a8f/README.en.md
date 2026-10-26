# `humanOnlyReviewLedger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699205-699224](../../../../../../../reference/runtime/host-main.cjs#L699205-L699224) | `FunctionDeclaration` | no | `audit, toolCallId` |
| [evaluation:489937-489956](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489937-L489956) | `FunctionDeclaration` | no | `audit, toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699205-699224](../../../../../../../reference/runtime/host-main.cjs#L699205-L699224) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:489937-489956](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489937-L489956) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:699205

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `35771b54a4a3cd5504bbc93e42ec6c681b22947e98a2ee29077010d6123b9bbb`.

### evaluation:489937

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `35771b54a4a3cd5504bbc93e42ec6c681b22947e98a2ee29077010d6123b9bbb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

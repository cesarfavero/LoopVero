# `subagentReadMode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769362-769372](../../../../../../../../reference/runtime/host-main.cjs#L769362-L769372) | `FunctionDeclaration` | no | `ctx` |
| [evaluation:565009-565019](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565009-L565019) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769362-769372](../../../../../../../../reference/runtime/host-main.cjs#L769362-L769372) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:565009-565019](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565009-L565019) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:769362

Calls written directly in this body: `agentKindOf`, `isSandSubagentHistoryKind`, `untrustedPageDriverReview`.

SHA-256 of the source span: `d6493b74c92b3a8518b94141641759f33eae82c100e7dec269c2b58c9df3dd3c`.

### evaluation:565009

Calls written directly in this body: `agentKindOf`, `isSandSubagentHistoryKind`, `untrustedPageDriverReview`.

SHA-256 of the source span: `d6493b74c92b3a8518b94141641759f33eae82c100e7dec269c2b58c9df3dd3c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

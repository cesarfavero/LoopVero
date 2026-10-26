# `untrustedPageDriverReview`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769359-769361](../../../../../../../../reference/runtime/host-main.cjs#L769359-L769361) | `FunctionDeclaration` | no | `ctx` |
| [evaluation:565006-565008](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565006-L565008) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769359-769361](../../../../../../../../reference/runtime/host-main.cjs#L769359-L769361) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565006-565008](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565006-L565008) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:769359

Calls written directly in this body: `agentKindOf`, `sandHistoryReadReviewer`.

SHA-256 of the source span: `ec996dd0448521382321ac24b9bb5aafcb4a4b4216a06ef44ac0118d018e0afa`.

### evaluation:565006

Calls written directly in this body: `agentKindOf`, `sandHistoryReadReviewer`.

SHA-256 of the source span: `ec996dd0448521382321ac24b9bb5aafcb4a4b4216a06ef44ac0118d018e0afa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

# `agentInboxSendCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732791-732817](../../../../../../../reference/runtime/host-main.cjs#L732791-L732817) | `FunctionDeclaration` | no | `route, draft, sendingAddress` |
| [evaluation:540313-540339](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540313-L540339) | `FunctionDeclaration` | no | `route, draft, sendingAddress` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732791-732817](../../../../../../../reference/runtime/host-main.cjs#L732791-L732817) | 7 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540313-540339](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540313-L540339) | 7 | 0 | 0 | 1 | 0 | 0 |

### host:732791

Calls written directly in this body: `.join`, `attachments.map`, `draft.to.join`, `emailHtmlNonTextTag`, `inertDraftText`, `sameBodyText`.

SHA-256 of the source span: `375044047d834a54908c219959b531fd4b14689dfb06c3a48a53223a7958b937`.

### evaluation:540313

Calls written directly in this body: `.join`, `attachments.map`, `draft.to.join`, `emailHtmlNonTextTag`, `inertDraftText`, `sameBodyText`.

SHA-256 of the source span: `375044047d834a54908c219959b531fd4b14689dfb06c3a48a53223a7958b937`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

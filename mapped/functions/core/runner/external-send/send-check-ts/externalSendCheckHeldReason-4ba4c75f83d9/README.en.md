# `externalSendCheckHeldReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/send-check.ts` · [Module README](../../../../../../modules/core/runner/external-send/send-check-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582791-582799](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582791-L582799) | `FunctionDeclaration` | no | `fallback2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582791-582799](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582791-L582799) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582791

Calls written directly in this body: `systemReminder`.

SHA-256 of the source span: `3af361fe5704dc71bf9c4af009b8cc86c4bfc62dd0900a06c4a6f727fe302187`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

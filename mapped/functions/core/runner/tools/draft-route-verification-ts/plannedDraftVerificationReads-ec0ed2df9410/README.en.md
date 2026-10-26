# `plannedDraftVerificationReads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735286-735315](../../../../../../../reference/runtime/host-main.cjs#L735286-L735315) | `FunctionDeclaration` | no | `route` |
| [evaluation:540851-540880](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540851-L540880) | `FunctionDeclaration` | no | `route` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735286-735315](../../../../../../../reference/runtime/host-main.cjs#L735286-L735315) | 7 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540851-540880](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540851-L540880) | 7 | 0 | 0 | 3 | 0 | 0 |

### host:735286

Calls written directly in this body: `SLACK_USER_ID.test`, `emailSenderRead`, `sender.replyRead`.

SHA-256 of the source span: `18cbdd434ddbd1a97ea253a43afd648382ef34c73ae7cdb1ce2b630b1e8da44c`.

### evaluation:540851

Calls written directly in this body: `SLACK_USER_ID.test`, `emailSenderRead`, `sender.replyRead`.

SHA-256 of the source span: `18cbdd434ddbd1a97ea253a43afd648382ef34c73ae7cdb1ce2b630b1e8da44c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

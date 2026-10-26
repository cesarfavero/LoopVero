# `describeSandMeetingInstructionCopy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693802-693810](../../../../../../reference/runtime/host-main.cjs#L693802-L693810) | `FunctionDeclaration` | no | `args` |
| [evaluation:491238-491246](../../../../../../reference/runtime/sand-eval-runner.cjs#L491238-L491246) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693802-693810](../../../../../../reference/runtime/host-main.cjs#L693802-L693810) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:491238-491246](../../../../../../reference/runtime/sand-eval-runner.cjs#L491238-L491246) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:693802

Calls written directly in this body: `compact`, `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`.

SHA-256 of the source span: `d2d7e0de0f81509e83b435128330dcd8d1e17a4352a5332ee179010d81f0902d`.

### evaluation:491238

Calls written directly in this body: `compact`, `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`.

SHA-256 of the source span: `d2d7e0de0f81509e83b435128330dcd8d1e17a4352a5332ee179010d81f0902d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `summarizeSandMeetingInstructionAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693811-693814](../../../../../../reference/runtime/host-main.cjs#L693811-L693814) | `FunctionDeclaration` | no | `args` |
| [evaluation:491247-491250](../../../../../../reference/runtime/sand-eval-runner.cjs#L491247-L491250) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693811-693814](../../../../../../reference/runtime/host-main.cjs#L693811-L693814) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:491247-491250](../../../../../../reference/runtime/sand-eval-runner.cjs#L491247-L491250) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:693811

Calls written directly in this body: `describeSandMeetingInstructionCopy`.

SHA-256 of the source span: `73f2a2918fa159e2e23e9132a1e333d269806d6a19186365b52d38752b60ea53`.

### evaluation:491247

Calls written directly in this body: `describeSandMeetingInstructionCopy`.

SHA-256 of the source span: `73f2a2918fa159e2e23e9132a1e333d269806d6a19186365b52d38752b60ea53`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

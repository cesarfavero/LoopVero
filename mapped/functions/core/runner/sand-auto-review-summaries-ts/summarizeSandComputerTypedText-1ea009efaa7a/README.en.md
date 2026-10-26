# `summarizeSandComputerTypedText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693980-693982](../../../../../../reference/runtime/host-main.cjs#L693980-L693982) | `FunctionDeclaration` | no | `text3` |
| [evaluation:491416-491418](../../../../../../reference/runtime/sand-eval-runner.cjs#L491416-L491418) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693980-693982](../../../../../../reference/runtime/host-main.cjs#L693980-L693982) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:491416-491418](../../../../../../reference/runtime/sand-eval-runner.cjs#L491416-L491418) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:693980

Calls written directly in this body: `summarizeTypedText`.

SHA-256 of the source span: `07c01b418c05c9bb21ef381c8b9ff05cde60d5f19fd0723fee9ce295dde4af6a`.

### evaluation:491416

Calls written directly in this body: `summarizeTypedText`.

SHA-256 of the source span: `07c01b418c05c9bb21ef381c8b9ff05cde60d5f19fd0723fee9ce295dde4af6a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

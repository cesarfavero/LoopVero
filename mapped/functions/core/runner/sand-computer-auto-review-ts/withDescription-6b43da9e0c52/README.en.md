# `withDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699441-699446](../../../../../../reference/runtime/host-main.cjs#L699441-L699446) | `FunctionDeclaration` | no | `{   summary,   description: description9 }` |
| [evaluation:513197-513202](../../../../../../reference/runtime/sand-eval-runner.cjs#L513197-L513202) | `FunctionDeclaration` | no | `{   summary,   description: description9 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699441-699446](../../../../../../reference/runtime/host-main.cjs#L699441-L699446) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513197-513202](../../../../../../reference/runtime/sand-eval-runner.cjs#L513197-L513202) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:699441

Calls written directly in this body: `description9.slice`.

SHA-256 of the source span: `c7f4565421544e386442a689bd84146102a0df4f4627dbce4883d874fc64535a`.

### evaluation:513197

Calls written directly in this body: `description9.slice`.

SHA-256 of the source span: `c7f4565421544e386442a689bd84146102a0df4f4627dbce4883d874fc64535a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

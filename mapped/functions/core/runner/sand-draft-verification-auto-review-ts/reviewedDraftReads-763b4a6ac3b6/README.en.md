# `reviewedDraftReads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755841-755846](../../../../../../reference/runtime/host-main.cjs#L755841-L755846) | `FunctionDeclaration` | no | `route, hostedSendAs = false` |
| [evaluation:541716-541721](../../../../../../reference/runtime/sand-eval-runner.cjs#L541716-L541721) | `FunctionDeclaration` | no | `route, hostedSendAs = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755841-755846](../../../../../../reference/runtime/host-main.cjs#L755841-L755846) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541716-541721](../../../../../../reference/runtime/sand-eval-runner.cjs#L541716-L541721) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755841

Calls written directly in this body: `plannedDraftVerificationReads`, `plannedEmailSignatureReads`.

SHA-256 of the source span: `07729e6efc3c18a43422a6fce74a2acbf1d2f7c076e5bbd535db1fa3a1bc766e`.

### evaluation:541716

Calls written directly in this body: `plannedDraftVerificationReads`, `plannedEmailSignatureReads`.

SHA-256 of the source span: `07729e6efc3c18a43422a6fce74a2acbf1d2f7c076e5bbd535db1fa3a1bc766e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

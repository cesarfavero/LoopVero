# `notifyReviewPhase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699802-699812](../../../../../../reference/runtime/host-main.cjs#L699802-L699812) | `FunctionDeclaration` | no | `options2, record3` |
| [evaluation:513558-513568](../../../../../../reference/runtime/sand-eval-runner.cjs#L513558-L513568) | `FunctionDeclaration` | no | `options2, record4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699802-699812](../../../../../../reference/runtime/host-main.cjs#L699802-L699812) | 1 | 0 | 0 | 1 | 0 | 1 |
| [evaluation:513558-513568](../../../../../../reference/runtime/sand-eval-runner.cjs#L513558-L513568) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:699802

Calls written directly in this body: `errorLogTag`, `options2.onPhase`, `reportHostDiagnostic`.

SHA-256 of the source span: `aa8ef02e0a35b3616470ba5562fef9f2e58affddacb7ae0b75aca2026e3102e2`.

### evaluation:513558

Calls written directly in this body: `errorLogTag`, `options2.onPhase`, `reportHostDiagnostic`.

SHA-256 of the source span: `8cd52c4aa6c44e227f7e0db82f238a6da01b3c06a94e7ef7c36c56e554d978cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `summarizeVerificationReads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755870-755873](../../../../../../reference/runtime/host-main.cjs#L755870-L755873) | `FunctionDeclaration` | no | `route, hostedSendAs = false` |
| [evaluation:541745-541748](../../../../../../reference/runtime/sand-eval-runner.cjs#L541745-L541748) | `FunctionDeclaration` | no | `route, hostedSendAs = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755870-755873](../../../../../../reference/runtime/host-main.cjs#L755870-L755873) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541745-541748](../../../../../../reference/runtime/sand-eval-runner.cjs#L541745-L541748) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755870

Calls written directly in this body: `.join`, `.map`, `reviewedDraftReads`.

SHA-256 of the source span: `f0009ab2525baa2ac9cf2399189b08a4b9fe7f891973a24bba25273872e696b4`.

### evaluation:541745

Calls written directly in this body: `.join`, `.map`, `reviewedDraftReads`.

SHA-256 of the source span: `f0009ab2525baa2ac9cf2399189b08a4b9fe7f891973a24bba25273872e696b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

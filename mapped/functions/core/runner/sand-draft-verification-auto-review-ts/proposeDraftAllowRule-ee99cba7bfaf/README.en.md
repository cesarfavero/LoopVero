# `proposeDraftAllowRule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755969-755978](../../../../../../reference/runtime/host-main.cjs#L755969-L755978) | `FunctionDeclaration` | yes | `args` |
| [evaluation:541844-541853](../../../../../../reference/runtime/sand-eval-runner.cjs#L541844-L541853) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755969-755978](../../../../../../reference/runtime/host-main.cjs#L755969-L755978) | 2 | 0 | 1 | 3 | 1 | 1 |
| [evaluation:541844-541853](../../../../../../reference/runtime/sand-eval-runner.cjs#L541844-L541853) | 2 | 0 | 1 | 3 | 1 | 1 |

### host:755969

Calls written directly in this body: `proposeWithClassifier`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `4a83a3997794a1edabb7e4b6638b1ea1d0e18b0010ad04e5c921f9fdaa1aac9c`.

### evaluation:541844

Calls written directly in this body: `proposeWithClassifier`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `ec0c4fd974f4e636bae37a7fe571d41b01adc5f03b2273ed8cdb540852812b79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

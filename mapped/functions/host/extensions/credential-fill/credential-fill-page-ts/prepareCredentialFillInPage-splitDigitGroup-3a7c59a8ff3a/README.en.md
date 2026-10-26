# `prepareCredentialFillInPage/splitDigitGroup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-page.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-page-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543513-543532](../../../../../../../reference/runtime/host-main.cjs#L543513-L543532) | `ArrowFunctionExpression` | no | `inputs, form2, isEligible` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543513-543532](../../../../../../../reference/runtime/host-main.cjs#L543513-L543532) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:543513

Calls written directly in this body: `.some`, `boxes.some`, `formCollectsPaymentCard`, `inputs.filter`, `inputs.indexOf`, `inputs.slice`, `owningForm`, `splitDigitGroupSignal`.

SHA-256 of the source span: `70fb17c3b226e6e99da780eacf611f5306ffcaea1d36e432f326b3ccea049587`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

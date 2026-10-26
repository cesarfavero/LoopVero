# `inspectBrowserDocument/splitDigitGroupShape`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547459-547472](../../../../../../../reference/runtime/host-main.cjs#L547459-L547472) | `ArrowFunctionExpression` | no | `isEligible` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547459-547472](../../../../../../../reference/runtime/host-main.cjs#L547459-L547472) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:547459

Calls written directly in this body: `.some`, `boxes.some`, `formCollectsPaymentCard`, `inputs.filter`, `inputs.indexOf`, `inputs.slice`, `owningForm`, `splitDigitGroupSignal`.

SHA-256 of the source span: `02acb6d5ce8d0dbfe3404565eea4f5d841341bb11e5869234376ed39a4c8f140`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

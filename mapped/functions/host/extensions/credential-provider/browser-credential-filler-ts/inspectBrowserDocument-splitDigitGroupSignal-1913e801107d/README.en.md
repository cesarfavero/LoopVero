# `inspectBrowserDocument/splitDigitGroupSignal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547432-547458](../../../../../../../reference/runtime/host-main.cjs#L547432-L547458) | `ArrowFunctionExpression` | no | `boxes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547432-547458](../../../../../../../reference/runtime/host-main.cjs#L547432-L547458) | 9 | 3 | 0 | 7 | 0 | 0 |

### host:547432

Calls written directly in this body: `.join`, `boxes.map`, `boxes.some`, `composedContains`, `composedParent`, `contextTextOf`, `contexts.push`, `describesAnotherKindOfCode`, `describesAnotherKindOfCodePhrase`, `describesOneTimeCode`, `describesPaymentCardCodePhrase`, `mentionsCode`.

Assignment or increment targets: `container`, `hop`, `weak`.

SHA-256 of the source span: `bc688a3b327d6a4a5021fb11b67f2d855743ca95cc79f339590dc7f7bdf8d371`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

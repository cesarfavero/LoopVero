# `inspectBrowserDocument/oneTimeCodeScore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547407-547422](../../../../../../../reference/runtime/host-main.cjs#L547407-L547422) | `ArrowFunctionExpression` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547407-547422](../../../../../../../reference/runtime/host-main.cjs#L547407-L547422) | 6 | 0 | 0 | 7 | 0 | 0 |

### host:547407

Calls written directly in this body: `autocompleteTokens`, `describesAnotherKindOfCode`, `describesOneTimeCode`, `describesPaymentCard`, `descriptorFor`, `formCollectsPaymentCard`, `mentionsCode`, `numericEntryHinted`, `oneTimeCodeTypeAllowed`, `owningForm`, `tokens.includes`, `tokens.some`.

SHA-256 of the source span: `b227b3959ce3ebf63c059bd93850062d0f6cad5aa126e716f9d029fc6c716665`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

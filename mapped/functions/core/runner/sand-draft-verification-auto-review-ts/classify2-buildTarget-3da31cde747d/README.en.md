# `classify2/buildTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755881-755886](../../../../../../reference/runtime/host-main.cjs#L755881-L755886) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755881-755886](../../../../../../reference/runtime/host-main.cjs#L755881-L755886) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:755881 uses an implicit arrow-function return.

### host:755881

Calls written directly in this body: `buildSandDraftVerificationRiskTarget`, `isHostedGmailRoute`, `options2.gmailSendAsSignature`.

SHA-256 of the source span: `247f45667768aa310e00752ebb0453d6d7cd02aafea24c53381e7156089b26ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

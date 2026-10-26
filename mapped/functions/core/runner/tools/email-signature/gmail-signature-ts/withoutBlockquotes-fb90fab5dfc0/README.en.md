# `withoutBlockquotes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755667-755677](../../../../../../../../reference/runtime/host-main.cjs#L755667-L755677) | `FunctionDeclaration` | no | `html` |
| [evaluation:541542-541552](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541542-L541552) | `FunctionDeclaration` | no | `html` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755667-755677](../../../../../../../../reference/runtime/host-main.cjs#L755667-L755677) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:541542-541552](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541542-L541552) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:755667

Calls written directly in this body: `Math.max`, `html.matchAll`, `html.slice`.

Assignment or increment targets: `cursor`, `depth`, `kept`.

SHA-256 of the source span: `8eea7230e0429c1646a9ffb757c50785a544ddb3a825c607f9b846a6eb11d2e6`.

### evaluation:541542

Calls written directly in this body: `Math.max`, `html.matchAll`, `html.slice`.

Assignment or increment targets: `cursor`, `depth`, `kept`.

SHA-256 of the source span: `8eea7230e0429c1646a9ffb757c50785a544ddb3a825c607f9b846a6eb11d2e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

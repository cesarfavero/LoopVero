# `signatureBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755738-755745](../../../../../../../../reference/runtime/host-main.cjs#L755738-L755745) | `FunctionDeclaration` | no | `messageHtml` |
| [evaluation:541613-541620](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541613-L541620) | `FunctionDeclaration` | no | `messageHtml` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755738-755745](../../../../../../../../reference/runtime/host-main.cjs#L755738-L755745) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:541613-541620](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541613-L541620) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:755738

Calls written directly in this body: `GMAIL_SIGNATURE_OPEN.exec`, `closingDiv`, `own3.slice`, `ownPart`.

SHA-256 of the source span: `499ef7bd31094b715d819b9ab97b25d791714a7ba96edaae6b588f9aa5600f56`.

### evaluation:541613

Calls written directly in this body: `GMAIL_SIGNATURE_OPEN.exec`, `closingDiv`, `own3.slice`, `ownPart`.

SHA-256 of the source span: `f9d55f3186da9f2128ef68f33be7d04e766e746efa808831697fe88ad936e7e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

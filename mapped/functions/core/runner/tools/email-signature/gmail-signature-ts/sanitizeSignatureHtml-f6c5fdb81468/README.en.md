# `sanitizeSignatureHtml`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755789-755798](../../../../../../../../reference/runtime/host-main.cjs#L755789-L755798) | `FunctionDeclaration` | no | `html` |
| [evaluation:541664-541673](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541664-L541673) | `FunctionDeclaration` | no | `html` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755789-755798](../../../../../../../../reference/runtime/host-main.cjs#L755789-L755798) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541664-541673](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541664-L541673) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755789

Calls written directly in this body: `.replace`, `html.replace`.

SHA-256 of the source span: `4a90edec939781b43cb14e25eba200e1ce4c74b194cca2845318612522a9ce58`.

### evaluation:541664

Calls written directly in this body: `.replace`, `html.replace`.

SHA-256 of the source span: `4a90edec939781b43cb14e25eba200e1ce4c74b194cca2845318612522a9ce58`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

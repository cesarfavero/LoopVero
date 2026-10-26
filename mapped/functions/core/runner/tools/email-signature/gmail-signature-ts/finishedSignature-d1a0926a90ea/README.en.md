# `finishedSignature`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755804-755807](../../../../../../../../reference/runtime/host-main.cjs#L755804-L755807) | `FunctionDeclaration` | no | `block` |
| [evaluation:541679-541682](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541679-L541682) | `FunctionDeclaration` | no | `block` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755804-755807](../../../../../../../../reference/runtime/host-main.cjs#L755804-L755807) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541679-541682](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541679-L541682) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:755804

Calls written directly in this body: `.trim`, `sanitizeSignatureHtml`.

SHA-256 of the source span: `6426e39066a264d544a0659b825a81fadebc26a16770d9c3f6b45f9607bedf83`.

### evaluation:541679

Calls written directly in this body: `.trim`, `sanitizeSignatureHtml`.

SHA-256 of the source span: `6426e39066a264d544a0659b825a81fadebc26a16770d9c3f6b45f9607bedf83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

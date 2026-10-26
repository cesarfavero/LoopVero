# `namesSigner`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755754-755757](../../../../../../../../reference/runtime/host-main.cjs#L755754-L755757) | `FunctionDeclaration` | no | `block, nameParts` |
| [evaluation:541629-541632](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541629-L541632) | `FunctionDeclaration` | no | `block, nameParts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755754-755757](../../../../../../../../reference/runtime/host-main.cjs#L755754-L755757) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541629-541632](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541629-L541632) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755754

Calls written directly in this body: `.toLocaleLowerCase`, `nameParts.some`, `plainText`.

SHA-256 of the source span: `577d94b7ab86c215e886145c04bd842300fabc42be321d6a3e5a8fe9f0f22677`.

### evaluation:541629

Calls written directly in this body: `.toLocaleLowerCase`, `nameParts.some`, `plainText`.

SHA-256 of the source span: `577d94b7ab86c215e886145c04bd842300fabc42be321d6a3e5a8fe9f0f22677`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

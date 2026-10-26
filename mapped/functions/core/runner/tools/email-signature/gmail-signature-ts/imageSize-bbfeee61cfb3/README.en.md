# `imageSize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755764-755767](../../../../../../../../reference/runtime/host-main.cjs#L755764-L755767) | `FunctionDeclaration` | no | `attributes, name18` |
| [evaluation:541639-541642](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541639-L541642) | `FunctionDeclaration` | no | `attributes, name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755764-755767](../../../../../../../../reference/runtime/host-main.cjs#L755764-L755767) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541639-541642](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541639-L541642) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755764

Calls written directly in this body: `/^\d{1,4}$/.test`, `attributes.get`.

SHA-256 of the source span: `7c9f242d43bee596241fe24f1885f6d146ae95ee98060659bcbe95ef1a323a57`.

### evaluation:541639

Calls written directly in this body: `/^\d{1,4}$/.test`, `attributes.get`.

SHA-256 of the source span: `7c9f242d43bee596241fe24f1885f6d146ae95ee98060659bcbe95ef1a323a57`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

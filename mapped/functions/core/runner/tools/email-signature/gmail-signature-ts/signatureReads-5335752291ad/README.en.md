# `signatureReads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755608-755611](../../../../../../../../reference/runtime/host-main.cjs#L755608-L755611) | `FunctionDeclaration` | no | `route` |
| [evaluation:541483-541486](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541483-L541486) | `FunctionDeclaration` | no | `route` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755608-755611](../../../../../../../../reference/runtime/host-main.cjs#L755608-L755611) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:541483-541486](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541483-L541486) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:755608

Calls written directly in this body: `isGmailRoute`, `isGrokGmailRoute`.

SHA-256 of the source span: `dd960655b020471802ff126b3b8ee92cea641a6aac9b8043d98ab55e7eca047d`.

### evaluation:541483

Calls written directly in this body: `isGmailRoute`, `isGrokGmailRoute`.

SHA-256 of the source span: `dd960655b020471802ff126b3b8ee92cea641a6aac9b8043d98ab55e7eca047d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

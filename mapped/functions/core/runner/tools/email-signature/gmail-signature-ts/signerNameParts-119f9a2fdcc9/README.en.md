# `signerNameParts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755746-755753](../../../../../../../../reference/runtime/host-main.cjs#L755746-L755753) | `FunctionDeclaration` | no | `{   sender,   sendingAddress }` |
| [evaluation:541621-541628](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541621-L541628) | `FunctionDeclaration` | no | `{   sender,   sendingAddress }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755746-755753](../../../../../../../../reference/runtime/host-main.cjs#L755746-L755753) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541621-541628](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541621-L541628) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755746

Calls written directly in this body: `.filter`, `.split`, `.test`, `displayName2.includes`, `new RegExp`, `sender.replace`, `sendingAddress.split`, `source.toLocaleLowerCase`.

SHA-256 of the source span: `80fc7498fdaa49408595fdd36cb4d4758cb7c41250b5033882ca390c573c5780`.

### evaluation:541621

Calls written directly in this body: `.filter`, `.split`, `.test`, `displayName2.includes`, `new RegExp`, `sender.replace`, `sendingAddress.split`, `source.toLocaleLowerCase`.

SHA-256 of the source span: `80fc7498fdaa49408595fdd36cb4d4758cb7c41250b5033882ca390c573c5780`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

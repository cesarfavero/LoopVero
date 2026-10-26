# `plainText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755689-755691](../../../../../../../../reference/runtime/host-main.cjs#L755689-L755691) | `FunctionDeclaration` | no | `html` |
| [evaluation:541564-541566](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541564-L541566) | `FunctionDeclaration` | no | `html` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755689-755691](../../../../../../../../reference/runtime/host-main.cjs#L755689-L755691) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541564-541566](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541564-L541566) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755689

Calls written directly in this body: `.replace`, `html.replace`.

SHA-256 of the source span: `30a3e491c61507a9a8ec97dbdb31ed9ba58af972a4de50316ef9997f87d5b0e5`.

### evaluation:541564

Calls written directly in this body: `.replace`, `html.replace`.

SHA-256 of the source span: `30a3e491c61507a9a8ec97dbdb31ed9ba58af972a4de50316ef9997f87d5b0e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

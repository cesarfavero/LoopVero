# `closingDiv`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755678-755688](../../../../../../../../reference/runtime/host-main.cjs#L755678-L755688) | `FunctionDeclaration` | no | `html, contentStart` |
| [evaluation:541553-541563](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541553-L541563) | `FunctionDeclaration` | no | `html, contentStart` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755678-755688](../../../../../../../../reference/runtime/host-main.cjs#L755678-L755688) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:541553-541563](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541553-L541563) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:755678

Calls written directly in this body: `.matchAll`, `html.slice`.

Assignment or increment targets: `depth`.

SHA-256 of the source span: `54b29081be07193736de59fc8f708d584ffe9a6f0430e7030192fb72c29ce14c`.

### evaluation:541553

Calls written directly in this body: `.matchAll`, `html.slice`.

Assignment or increment targets: `depth`.

SHA-256 of the source span: `54b29081be07193736de59fc8f708d584ffe9a6f0430e7030192fb72c29ce14c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).

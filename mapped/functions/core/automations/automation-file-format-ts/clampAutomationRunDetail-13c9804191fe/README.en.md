# `clampAutomationRunDetail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716559-716564](../../../../../../reference/runtime/host-main.cjs#L716559-L716564) | `FunctionDeclaration` | no | `detail` |
| [evaluation:627273-627278](../../../../../../reference/runtime/sand-eval-runner.cjs#L627273-L627278) | `FunctionDeclaration` | no | `detail` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716559-716564](../../../../../../reference/runtime/host-main.cjs#L716559-L716564) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627273-627278](../../../../../../reference/runtime/sand-eval-runner.cjs#L627273-L627278) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:716559

Calls written directly in this body: `detail.trim`, `trimmed.slice`.

SHA-256 of the source span: `f8d1ad63ab0af1f8efe96a7ed8501e401154361913e19e677e5300a82440bca7`.

### evaluation:627273

Calls written directly in this body: `detail.trim`, `trimmed.slice`.

SHA-256 of the source span: `f8d1ad63ab0af1f8efe96a7ed8501e401154361913e19e677e5300a82440bca7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

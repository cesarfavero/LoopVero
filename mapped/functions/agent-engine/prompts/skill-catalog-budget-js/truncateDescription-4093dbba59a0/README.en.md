# `truncateDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-budget.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639546-639552](../../../../../../reference/runtime/host-main.cjs#L639546-L639552) | `FunctionDeclaration` | no | `description9, maxLength` |
| [evaluation:430160-430166](../../../../../../reference/runtime/sand-eval-runner.cjs#L430160-L430166) | `FunctionDeclaration` | no | `description9, maxLength` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639546-639552](../../../../../../reference/runtime/host-main.cjs#L639546-L639552) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430160-430166](../../../../../../reference/runtime/sand-eval-runner.cjs#L430160-L430166) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:639546

Calls written directly in this body: `.trimEnd`, `Math.max`, `description9.slice`.

SHA-256 of the source span: `ff7e8f3bd63877f2e0b50373bbbeae84317bb48b8cb33d37263ceaf9a4902d91`.

### evaluation:430160

Calls written directly in this body: `.trimEnd`, `Math.max`, `description9.slice`.

SHA-256 of the source span: `ff7e8f3bd63877f2e0b50373bbbeae84317bb48b8cb33d37263ceaf9a4902d91`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

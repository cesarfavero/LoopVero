# `FormingTestPlanSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/testing/parent.js` · [Module README](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636327-636329](../../../../../../../reference/runtime/host-main.cjs#L636327-L636329) | `FunctionDeclaration` | no | `{ computerUseSubagentName, isCodexModel, stepNumber, trimmed = false }` |
| [evaluation:424380-424382](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424380-L424382) | `FunctionDeclaration` | no | `{ computerUseSubagentName, isCodexModel, stepNumber, trimmed = false }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636327-636329](../../../../../../../reference/runtime/host-main.cjs#L636327-L636329) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424380-424382](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424380-L424382) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:636327

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `78519c6dd7f663b5da6e0b40e9f246caefd360c373ea67375693b4fe2fc3603e`.

### evaluation:424380

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `78519c6dd7f663b5da6e0b40e9f246caefd360c373ea67375693b4fe2fc3603e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

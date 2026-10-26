# `TestYourWorkSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/testing/parent.js` · [Module README](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636333-636335](../../../../../../../reference/runtime/host-main.cjs#L636333-L636335) | `FunctionDeclaration` | no | `{ computerUseSubagentName, additionalInstructions, isCodexModel, isOpus, trimmed = false, stepNumber, planStepNumber }` |
| [evaluation:424386-424388](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424386-L424388) | `FunctionDeclaration` | no | `{ computerUseSubagentName, additionalInstructions, isCodexModel, isOpus, trimmed = false, stepNumber, planStepNumber }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636333-636335](../../../../../../../reference/runtime/host-main.cjs#L636333-L636335) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424386-424388](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424386-L424388) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:636333

Calls written directly in this body: `additionalInstructions.map`, `jsx`, `jsxs`.

SHA-256 of the source span: `2cfeddf9b0c169823ec17500b5303e52ec70a2bc5515c27c7bea85b4993e4db8`.

### evaluation:424386

Calls written directly in this body: `additionalInstructions.map`, `jsx`, `jsxs`.

SHA-256 of the source span: `2cfeddf9b0c169823ec17500b5303e52ec70a2bc5515c27c7bea85b4993e4db8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

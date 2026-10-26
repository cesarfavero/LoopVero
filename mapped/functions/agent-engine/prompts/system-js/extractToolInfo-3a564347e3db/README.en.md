# `extractToolInfo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/system.js` · [Module README](../../../../../modules/agent-engine/prompts/system-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636365-636392](../../../../../../reference/runtime/host-main.cjs#L636365-L636392) | `FunctionDeclaration` | no | `toolSetHandle` |
| [evaluation:424418-424445](../../../../../../reference/runtime/sand-eval-runner.cjs#L424418-L424445) | `FunctionDeclaration` | no | `toolSetHandle` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636365-636392](../../../../../../reference/runtime/host-main.cjs#L636365-L636392) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:424418-424445](../../../../../../reference/runtime/sand-eval-runner.cjs#L424418-L424445) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:636365

Calls written directly in this body: `automationsCommunicationToolNames.push`, `isAutomationsPlatformCommunicationToolName`, `promptVisibleTools.find`, `promptVisibleTools.includes`, `tool.descriptionTokenPartsGenerator`, `toolSetHandle.getAllTools`, `toolSetHandle.getDescriptionProps`, `toolSetHandle.getStaticTools`, `toolSetHandle.hasTool`.

Assignment or increment targets: `availableSubagentModelsDescription`, `availableSubagentTypesDescription`.

SHA-256 of the source span: `3e7c4e26bf8b3366919748c9b80b8222d56ce0c9a67506159d3f47433a9619f0`.

### evaluation:424418

Calls written directly in this body: `automationsCommunicationToolNames.push`, `isAutomationsPlatformCommunicationToolName`, `promptVisibleTools.find`, `promptVisibleTools.includes`, `tool.descriptionTokenPartsGenerator`, `toolSetHandle.getAllTools`, `toolSetHandle.getDescriptionProps`, `toolSetHandle.getStaticTools`, `toolSetHandle.hasTool`.

Assignment or increment targets: `availableSubagentModelsDescription`, `availableSubagentTypesDescription`.

SHA-256 of the source span: `3e7c4e26bf8b3366919748c9b80b8222d56ce0c9a67506159d3f47433a9619f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

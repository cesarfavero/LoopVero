# `categorizeCursorRules`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640651-640706](../../../../../../reference/runtime/host-main.cjs#L640651-L640706) | `FunctionDeclaration` | no | `cursorRules, workspacePaths = [], agentType, options2` |
| [evaluation:431265-431320](../../../../../../reference/runtime/sand-eval-runner.cjs#L431265-L431320) | `FunctionDeclaration` | no | `cursorRules, workspacePaths = [], agentType, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640651-640706](../../../../../../reference/runtime/host-main.cjs#L640651-L640706) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431265-431320](../../../../../../reference/runtime/sand-eval-runner.cjs#L431265-L431320) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640651

Calls written directly in this body: `filterByAgentEnvironment`, `measureFrontmatterBatch`.

SHA-256 of the source span: `7e55df960de0820c502b68dd208db6407351c8e1b3a8c31caee09b91d38d30e1`.

### evaluation:431265

Calls written directly in this body: `filterByAgentEnvironment`, `measureFrontmatterBatch`.

SHA-256 of the source span: `7e55df960de0820c502b68dd208db6407351c8e1b3a8c31caee09b91d38d30e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `CursorGuideSubagentSystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `agent-engine/prompts/subagent/cursor-guide.js` · [Module README](../../../../../../modules/agent-engine/prompts/subagent/cursor-guide-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:424639-424647](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424639-L424647) | `FunctionDeclaration` | no | `props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:424639-424647](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424639-L424647) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:424639

Calls written directly in this body: `.filter`, `jsx`, `jsxs`, `localWorkspaceToolNames.join`.

SHA-256 of the source span: `520f73dbdfded7945844ea3b157d019d88b4b9c9eb02de2fd54f2c3db6e4ef3f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

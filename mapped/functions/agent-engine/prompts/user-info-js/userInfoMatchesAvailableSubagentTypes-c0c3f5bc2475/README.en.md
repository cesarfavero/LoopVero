# `userInfoMatchesAvailableSubagentTypes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640481-640486](../../../../../../reference/runtime/host-main.cjs#L640481-L640486) | `FunctionDeclaration` | no | `content, description9` |
| [evaluation:431095-431100](../../../../../../reference/runtime/sand-eval-runner.cjs#L431095-L431100) | `FunctionDeclaration` | no | `content, description9` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640481-640486](../../../../../../reference/runtime/host-main.cjs#L640481-L640486) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431095-431100](../../../../../../reference/runtime/sand-eval-runner.cjs#L431095-L431100) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640481

Calls written directly in this body: `content.includes`, `renderAvailableSubagentTypesSection`.

SHA-256 of the source span: `5c89f6bc59c3ee36238818a24815dadbb4474b298955295437cd12becdca53c5`.

### evaluation:431095

Calls written directly in this body: `content.includes`, `renderAvailableSubagentTypesSection`.

SHA-256 of the source span: `5c89f6bc59c3ee36238818a24815dadbb4474b298955295437cd12becdca53c5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

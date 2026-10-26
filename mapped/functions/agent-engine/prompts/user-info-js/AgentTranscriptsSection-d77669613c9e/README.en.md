# `AgentTranscriptsSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640056-640063](../../../../../../reference/runtime/host-main.cjs#L640056-L640063) | `FunctionDeclaration` | no | `{ agentTranscriptsFolder, agentType, enableAgentChatLinks }` |
| [evaluation:430670-430677](../../../../../../reference/runtime/sand-eval-runner.cjs#L430670-L430677) | `FunctionDeclaration` | no | `{ agentTranscriptsFolder, agentType, enableAgentChatLinks }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640056-640063](../../../../../../reference/runtime/host-main.cjs#L640056-L640063) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430670-430677](../../../../../../reference/runtime/sand-eval-runner.cjs#L430670-L430677) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:640056

Calls written directly in this body: `.join`, `jsx`, `jsxs`.

SHA-256 of the source span: `ad99ecf921d9ab31d652ac8fbfdd610636d85ec232f8d139810b91230a6eecf9`.

### evaluation:430670

Calls written directly in this body: `.join`, `jsx`, `jsxs`.

SHA-256 of the source span: `ad99ecf921d9ab31d652ac8fbfdd610636d85ec232f8d139810b91230a6eecf9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

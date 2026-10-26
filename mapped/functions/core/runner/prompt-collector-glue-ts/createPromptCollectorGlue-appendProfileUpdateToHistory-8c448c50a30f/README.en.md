# `createPromptCollectorGlue/appendProfileUpdateToHistory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533767-533788](../../../../../../reference/runtime/sand-eval-runner.cjs#L533767-L533788) | `FunctionDeclaration` | no | `messages, snapshot, onAppended` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533767-533788](../../../../../../reference/runtime/sand-eval-runner.cjs#L533767-L533788) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:533767

Calls written directly in this body: `agentProfileIdentitiesEqual`, `getLatestAgentProfileUpdate`, `host.agentProfileProvider`, `host.gates.agentDescription`, `host.gates.renamedPromptMarkers`, `messages.some`, `onAppended`, `promptedAgentProfileIdentity`, `renderAgentProfileUpdate`.

SHA-256 of the source span: `f1af7207c5f5912007b27a8a1e8306539a58ab4c782675c0a0cd9e8e629efb32`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

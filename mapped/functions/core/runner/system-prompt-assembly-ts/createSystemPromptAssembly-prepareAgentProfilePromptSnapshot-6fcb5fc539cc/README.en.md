# `createSystemPromptAssembly/prepareAgentProfilePromptSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552759-552778](../../../../../../reference/runtime/sand-eval-runner.cjs#L552759-L552778) | `FunctionDeclaration` | no | `store` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552759-552778](../../../../../../reference/runtime/sand-eval-runner.cjs#L552759-L552778) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:552759

Calls written directly in this body: `deps.agentProfileProvider`, `deps.compactionEpoch`, `deps.gates.agentDescription`, `getProfileSection`, `promptedAgentProfileIdentity`, `resolveAgentProfilePromptSnapshot`, `resolveProfileForPrompt`, `store.getAgentProfilePromptSnapshot`, `store.setAgentProfilePromptSnapshot`.

Assignment or increment targets: `inMemoryProfilePromptSnapshot`.

SHA-256 of the source span: `f41c4c37275062926273978471a7d047a42cdbaa3bc3809f4f4f9114b25d8231`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `createSystemPromptAssembly/persistAgentProfilePromptSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552755-552758](../../../../../../reference/runtime/sand-eval-runner.cjs#L552755-L552758) | `FunctionDeclaration` | no | `store, snapshot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552755-552758](../../../../../../reference/runtime/sand-eval-runner.cjs#L552755-L552758) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:552755

Calls written directly in this body: `store.setAgentProfilePromptSnapshot`.

Assignment or increment targets: `inMemoryProfilePromptSnapshot`.

SHA-256 of the source span: `9fb544e0a40dddbf8bc1b5daad24c76a74c4fd6e4ae1bdc184153162b7c81d91`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

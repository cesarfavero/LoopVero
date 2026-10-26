# `composeCanvasScratchLaunchPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-canvas-prompt.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-canvas-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566768-566774](../../../../../../reference/runtime/sand-eval-runner.cjs#L566768-L566774) | `FunctionDeclaration` | no | `prompt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566768-566774](../../../../../../reference/runtime/sand-eval-runner.cjs#L566768-L566774) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566768

Calls written directly in this body: `prompt.trim`.

SHA-256 of the source span: `b61116be58f99b4bfa1d651b5487f3a1ac528b81469f2b240bc29ffccd34d014`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

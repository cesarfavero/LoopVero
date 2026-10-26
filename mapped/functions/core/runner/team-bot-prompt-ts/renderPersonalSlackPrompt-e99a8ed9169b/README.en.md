# `renderPersonalSlackPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/team-bot-prompt.ts` · [Module README](../../../../../modules/core/runner/team-bot-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538507-538516](../../../../../../reference/runtime/sand-eval-runner.cjs#L538507-L538516) | `FunctionDeclaration` | no | `identity2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538507-538516](../../../../../../reference/runtime/sand-eval-runner.cjs#L538507-L538516) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538507

Calls written directly in this body: `channelsSkillPointer`.

Assignment or increment targets: `state`.

SHA-256 of the source span: `d5807f35b22d8bbd565026390ac97dc13ea1c27e0dbbbb3906fbdaa15ab7d7ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

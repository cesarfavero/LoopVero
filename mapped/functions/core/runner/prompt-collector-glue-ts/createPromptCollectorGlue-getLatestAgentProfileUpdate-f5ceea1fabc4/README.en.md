# `createPromptCollectorGlue/getLatestAgentProfileUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533689-533705](../../../../../../reference/runtime/sand-eval-runner.cjs#L533689-L533705) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533689-533705](../../../../../../reference/runtime/sand-eval-runner.cjs#L533689-L533705) | 2 | 1 | 0 | 2 | 0 | 0 |

### evaluation:533689

Calls written directly in this body: `parseLatestAgentProfileUpdate`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `366abb9a1dcd117d5ef56b875e6cd2838ecdab2951a227b2a27b180a700b4e66`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

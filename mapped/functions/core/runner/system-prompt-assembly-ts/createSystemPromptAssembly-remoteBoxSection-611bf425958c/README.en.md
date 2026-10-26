# `createSystemPromptAssembly/remoteBoxSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553624-553629](../../../../../../reference/runtime/sand-eval-runner.cjs#L553624-L553629) | `FunctionDeclaration` | no | `leanExecutorFacts, canUseUserComputer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553624-553629](../../../../../../reference/runtime/sand-eval-runner.cjs#L553624-L553629) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553624

Calls written directly in this body: `deps.remoteBoxSection`, `renderSandExecutorLeanBoxSection`.

SHA-256 of the source span: `425ba73b51a1fd6b7b09fc58b3c5c09796a80549791b13dac8f12da4e5545c62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

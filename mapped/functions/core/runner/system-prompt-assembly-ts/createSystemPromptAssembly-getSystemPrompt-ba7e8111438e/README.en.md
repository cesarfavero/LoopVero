# `createSystemPromptAssembly/getSystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553750-553758](../../../../../../reference/runtime/sand-eval-runner.cjs#L553750-L553758) | `ArrowFunctionExpression` | no | `profileSnapshot, mountedTools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553750-553758](../../../../../../reference/runtime/sand-eval-runner.cjs#L553750-L553758) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:553750 uses an implicit arrow-function return.

### evaluation:553750

Calls written directly in this body: `renderSystemPrompt`.

SHA-256 of the source span: `109165ba3ced207e5d0a8d5bad7f34bb85f366fab608f400d374291bb1e4b00e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

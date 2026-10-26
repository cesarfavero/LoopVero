# `createPromptCollectorGlue/createToolResultTextWriter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533817-533819](../../../../../../reference/runtime/sand-eval-runner.cjs#L533817-L533819) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533817-533819](../../../../../../reference/runtime/sand-eval-runner.cjs#L533817-L533819) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533817

Calls written directly in this body: `createSandAgentToolsTextWriter`, `isLargeOutputSpillEnabled`.

SHA-256 of the source span: `5275ef977a70d31586b24117d4a83e1c87409f8e7f48cbb89831fba309c034bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

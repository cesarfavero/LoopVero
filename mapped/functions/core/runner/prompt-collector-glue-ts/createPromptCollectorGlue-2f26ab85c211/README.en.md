# `createPromptCollectorGlue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533688-534034](../../../../../../reference/runtime/sand-eval-runner.cjs#L533688-L534034) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533688-534034](../../../../../../reference/runtime/sand-eval-runner.cjs#L533688-L534034) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533688

Calls written directly in this body: `createImageGenerationConcurrencyLimiter`, `createSandAgentToolsUploader`.

SHA-256 of the source span: `358df2836ed713c7a374a9d1aa8335622570d1aec1ebb7f3342e79cf585a19b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

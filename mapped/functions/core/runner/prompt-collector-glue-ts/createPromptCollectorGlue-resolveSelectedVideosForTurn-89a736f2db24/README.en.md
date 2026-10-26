# `createPromptCollectorGlue/resolveSelectedVideosForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533835-533853](../../../../../../reference/runtime/sand-eval-runner.cjs#L533835-L533853) | `FunctionDeclaration` | yes | `videos` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533835-533853](../../../../../../reference/runtime/sand-eval-runner.cjs#L533835-L533853) | 3 | 1 | 1 | 3 | 0 | 0 |

### evaluation:533835

Calls written directly in this body: `new SelectedVideo`, `readSubagentVideoBytes`, `resolved.push`, `video.path.trim`.

SHA-256 of the source span: `e69532ca14ec2428973cf8fb4c2c152b22f062ed327d9ee7df1fc1e20251d45d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

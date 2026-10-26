# `includesHiddenPromptMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-prompt-markers.ts` · [Module README](../../../../../modules/core/runner/sand-prompt-markers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:526077-526079](../../../../../../reference/runtime/sand-eval-runner.cjs#L526077-L526079) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:526077-526079](../../../../../../reference/runtime/sand-eval-runner.cjs#L526077-L526079) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:526077

Calls written directly in this body: `HIDDEN_PROMPT_MARKERS.some`.

SHA-256 of the source span: `01b863a485b52d2581ed59536009d84034b93645576922dc3c64e7a8deaa9888`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

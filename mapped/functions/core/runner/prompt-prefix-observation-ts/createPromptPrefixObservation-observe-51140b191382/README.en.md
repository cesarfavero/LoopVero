# `createPromptPrefixObservation/observe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546690-546832](../../../../../../reference/runtime/sand-eval-runner.cjs#L546690-L546832) | `FunctionDeclaration` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546690-546832](../../../../../../reference/runtime/sand-eval-runner.cjs#L546690-L546832) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:546690

Calls written directly in this body: `deps.compactionEpoch`, `deps.requestSource`, `deps.sectionShas`, `isAuxiliaryRequest`, `isSummarizationRequest`, `loadPersisted`, `now`, `settlePending`.

Assignment or increment targets: `settlePending`.

SHA-256 of the source span: `b6d837b04602b5e698eeeac820fa930b41ba2480c0f84bbe20d9938918f8624c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `createPromptPrefixObservation/loadPersisted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546620-546625](../../../../../../reference/runtime/sand-eval-runner.cjs#L546620-L546625) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546620-546625](../../../../../../reference/runtime/sand-eval-runner.cjs#L546620-L546625) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:546620

Calls written directly in this body: `deps.snapshots.getPromptPrefixSnapshot`.

Assignment or increment targets: `loadedPersisted`, `previousMain`.

SHA-256 of the source span: `ef76f9c05be6c938f922ea6bd501b13c570c314136d3cbb1c21aa087f0b38407`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

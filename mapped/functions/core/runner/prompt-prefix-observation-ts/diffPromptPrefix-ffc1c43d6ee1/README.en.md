# `diffPromptPrefix`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546269-546293](../../../../../../reference/runtime/sand-eval-runner.cjs#L546269-L546293) | `FunctionDeclaration` | no | `previous, current2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546269-546293](../../../../../../reference/runtime/sand-eval-runner.cjs#L546269-L546293) | 6 | 2 | 0 | 1 | 0 | 0 |

### evaluation:546269

Calls written directly in this body: `changed.push`, `new Map`, `new Set`, `previous.sections.map`, `previousByName.get`, `seen.add`, `seen.has`.

Assignment or increment targets: `namedChange`.

SHA-256 of the source span: `d1b379d7147c4fedbb31137c1cf27074f055c48ea4cefa1d3254eb669691654e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

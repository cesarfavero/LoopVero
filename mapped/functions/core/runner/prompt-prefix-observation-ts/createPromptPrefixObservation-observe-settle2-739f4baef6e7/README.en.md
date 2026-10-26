# `createPromptPrefixObservation/observe/settle2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546701-546779](../../../../../../reference/runtime/sand-eval-runner.cjs#L546701-L546779) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546701-546779](../../../../../../reference/runtime/sand-eval-runner.cjs#L546701-L546779) | 16 | 3 | 0 | 3 | 0 | 0 |

### evaluation:546701

Calls written directly in this body: `Math.max`, `changed.includes`, `comparedToLatestMain`, `diffPromptPrefix`, `diffPromptPrefixDynamicTools`, `diffPromptPrefixTools`, `hashPromptPrefix`, `hashPromptPrefixTail`, `observePrewarmPrefix`, `prefixChanged.increment`, `prefixDynamicToolChanged.increment`, `prefixToolChanged.increment`, `toCallIndexLabel`, `toPreviousAgeLabel`, `toSectionLabel`, `toToolChangeLabels`.

Assignment or increment targets: `callIndex`, `latestMain`, `previousMain`, `settlePending`, `settled`.

SHA-256 of the source span: `1ad244cff55f9c239a9709bfb167422bebdc16ba9f133f19dc643bf6a55cb49f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `main`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/main.ts` · [Module README](../../../../modules/evaluation/main-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630756-630800](../../../../../reference/runtime/sand-eval-runner.cjs#L630756-L630800) | `FunctionDeclaration` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630756-630800](../../../../../reference/runtime/sand-eval-runner.cjs#L630756-L630800) | 10 | 0 | 6 | 0 | 0 | 0 |

### evaluation:630756

Calls written directly in this body: `.finally`, `.then`, `createFixtureAugmentedWebFetchService`, `createFixtureAugmentedWebSearchService`, `createLocalSandMcp`, `createSandEvalInference`, `new AbortController`, `process.exit`, `process.once`, `readSandEvalRunnerLaunchInputs`, `readSandProcessEnvironment`, `resolveSandStreamTuning`, `runSandEvalRequest`, `sandEvalTeamIdGetter`, `writeResult`.

Assignment or increment targets: `failureRunId`, `process.exitCode`.

SHA-256 of the source span: `f9e71261d23ad4a81d644648f6dd9bc3824d483ab5c97a9d8bbe7eb547b13fab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

# `readSandEvalRunnerLaunchInputs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/secrets.ts` · [Module README](../../../../modules/evaluation/secrets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630701-630708](../../../../../reference/runtime/sand-eval-runner.cjs#L630701-L630708) | `FunctionDeclaration` | yes | `argv, env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630701-630708](../../../../../reference/runtime/sand-eval-runner.cjs#L630701-L630708) | 0 | 0 | 2 | 1 | 0 | 0 |

### evaluation:630701

Calls written directly in this body: `JSON.parse`, `loadSandEvalRunnerSecrets`, `readRequiredNamedArgument`, `sandEvalRunnerRequestSchema.parse`.

SHA-256 of the source span: `7108671b20bedbd272ced61079a717a7d5229d3d5f97bc4d14b692b3d58c7086`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

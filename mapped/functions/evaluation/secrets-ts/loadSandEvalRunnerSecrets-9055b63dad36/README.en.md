# `loadSandEvalRunnerSecrets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/secrets.ts` · [Module README](../../../../modules/evaluation/secrets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630709-630729](../../../../../reference/runtime/sand-eval-runner.cjs#L630709-L630729) | `FunctionDeclaration` | yes | `argv, env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630709-630729](../../../../../reference/runtime/sand-eval-runner.cjs#L630709-L630729) | 1 | 0 | 2 | 1 | 1 | 0 |

### evaluation:630709

Calls written directly in this body: `consumeEnvironmentVariable`, `new SandEvalRunnerConfigurationError`, `readLaunchCredentials`, `readOptionalMachineFile`, `readOptionalNamedArgument`, `resolveMachineId`.

Explicit throw targets: `SandEvalRunnerConfigurationError`.

SHA-256 of the source span: `c427a0955597c0da25877b540990d75b43495a7f27a398b64dc53f0e56f6e6a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

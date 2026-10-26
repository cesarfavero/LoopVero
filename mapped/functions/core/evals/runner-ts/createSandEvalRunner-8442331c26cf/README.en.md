# `createSandEvalRunner`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/evals/runner.ts` · [Module README](../../../../../modules/core/evals/runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596865-596867](../../../../../../reference/runtime/sand-eval-runner.cjs#L596865-L596867) | `FunctionDeclaration` | no | `options2, applyProfile = (composed) => composed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596865-596867](../../../../../../reference/runtime/sand-eval-runner.cjs#L596865-L596867) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596865

Calls written directly in this body: `applyProfile`, `buildSandEvalRunnerOptions`, `new SandAgentRunner`.

SHA-256 of the source span: `1ff79ca45771d98a69cd2f2ad431fcd8b262f1e84dfc2e2628871b82a3775310`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `createSandEvalUserMachines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596463-596552](../../../../../../reference/runtime/sand-eval-runner.cjs#L596463-L596552) | `FunctionDeclaration` | no | `config2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596463-596552](../../../../../../reference/runtime/sand-eval-runner.cjs#L596463-L596552) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:596463

Calls written directly in this body: `boxMachineIds.add`, `new FixtureUserMachine`, `new Map`, `new Set`, `registered.set`, `replayMachines.set`, `sandEvalUserMachineFixtureConfigSchema.parse`.

SHA-256 of the source span: `a402cf79471364885e67c38d867c0130ff5d3f6c1deeda8f29a39525cafad74b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

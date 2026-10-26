# `turnUsageFromTurnEnded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-usage.ts` · [Module README](../../../../../modules/core/runner/turn-usage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525209-525220](../../../../../../reference/runtime/sand-eval-runner.cjs#L525209-L525220) | `FunctionDeclaration` | no | `fields3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525209-525220](../../../../../../reference/runtime/sand-eval-runner.cjs#L525209-L525220) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:525209

Calls written directly in this body: `toSafeTokenCount`.

SHA-256 of the source span: `d46fb3fc3b99b7dbbdb2454ff2bab7724ccda798976e517318f15baa85ecf660`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

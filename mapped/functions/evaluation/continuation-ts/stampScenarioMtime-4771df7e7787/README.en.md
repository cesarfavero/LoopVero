# `stampScenarioMtime`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/continuation.ts` · [Module README](../../../../modules/evaluation/continuation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628654-628660](../../../../../reference/runtime/sand-eval-runner.cjs#L628654-L628660) | `FunctionDeclaration` | no | `automation, scenarioMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628654-628660](../../../../../reference/runtime/sand-eval-runner.cjs#L628654-L628660) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628654

Calls written directly in this body: `Math.max`, `new Date`.

SHA-256 of the source span: `330416d8448e05bf6a861a1171f5e0aae14e7e86f15054089205a02d36f1dbb5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).

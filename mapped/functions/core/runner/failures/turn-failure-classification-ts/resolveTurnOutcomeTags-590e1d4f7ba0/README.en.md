# `resolveTurnOutcomeTags`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/failures/turn-failure-classification.ts` · [Module README](../../../../../../modules/core/runner/failures/turn-failure-classification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589664-589674](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589664-L589674) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589664-589674](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589664-L589674) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:589664

Calls written directly in this body: `adjustTurnOutcomeForBotBlock`, `classifyExpectedTurnFailure`.

SHA-256 of the source span: `d3bec040f10990ec47a66306ca1e3acb563a580d4fb2baa4986df8e1d5586652`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

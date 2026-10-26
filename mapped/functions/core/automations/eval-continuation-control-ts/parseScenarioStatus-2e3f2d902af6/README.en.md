# `parseScenarioStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/eval-continuation-control.ts` · [Module README](../../../../../modules/core/automations/eval-continuation-control-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628592-628600](../../../../../../reference/runtime/sand-eval-runner.cjs#L628592-L628600) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628592-628600](../../../../../../reference/runtime/sand-eval-runner.cjs#L628592-L628600) | 1 | 0 | 0 | 1 | 1 | 0 |

### evaluation:628592

Calls written directly in this body: `new SandEvalContinuationControlError`, `sandEvalScenarioStatusSchema.safeParse`.

Explicit throw targets: `SandEvalContinuationControlError`.

SHA-256 of the source span: `fcba96e319b03108506fb1fd291055fcfe57d64f0a7563a4c5408323b6329843`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

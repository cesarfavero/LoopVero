# `SandEvalContinuationControl.status`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/eval-continuation-control.ts` · [Module README](../../../../../modules/core/automations/eval-continuation-control-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628630-628632](../../../../../../reference/runtime/sand-eval-runner.cjs#L628630-L628632) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628630-628632](../../../../../../reference/runtime/sand-eval-runner.cjs#L628630-L628632) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:628630

Calls written directly in this body: `parseScenarioStatus`, `this.call`.

SHA-256 of the source span: `10659200d2776ef84bc25c021f39ffa440ff258e6c6d78d6115be783ed6732ab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).

# `createCombinedComputerUseSelection/read`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/combined-computer-use.ts` · [Module README](../../../../../../modules/core/runner/subagents/combined-computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535659-535680](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535659-L535680) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535659-535680](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535659-L535680) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:535659

Calls written directly in this body: `Object.freeze`, `now`, `options2.getRemoteBoxAvailable`, `selectionReason`.

Assignment or increment targets: `decision`.

SHA-256 of the source span: `db71386dfb972406f967df7d44183d81b756bd134131833ba41af29de57cb9e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

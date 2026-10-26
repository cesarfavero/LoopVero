# `createCombinedComputerUseSelection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/combined-computer-use.ts` · [Module README](../../../../../../modules/core/runner/subagents/combined-computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535651-535686](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535651-L535686) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535651-535686](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535651-L535686) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:535651

Calls written directly in this body: `combinedComputerUseToolsAvailable`.

SHA-256 of the source span: `e6fd45931ee7f52a1d3068f5ea11934964db7a5651b1766124aff62417a4d90c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).

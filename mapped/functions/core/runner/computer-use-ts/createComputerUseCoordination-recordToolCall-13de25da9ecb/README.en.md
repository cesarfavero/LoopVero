# `createComputerUseCoordination/recordToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/computer-use.ts` · [Module README](../../../../../modules/core/runner/computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525383-525387](../../../../../../reference/runtime/sand-eval-runner.cjs#L525383-L525387) | `ArrowFunctionExpression` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525383-525387](../../../../../../reference/runtime/sand-eval-runner.cjs#L525383-L525387) | 3 | 0 | 0 | 0 | 0 | 0 |

### evaluation:525383

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `browserToolCalls.find`, `browserToolCalls.snapshot`, `browserToolCalls.waitFor`.

SHA-256 of the source span: `2cc7d3f6bf202712096d1d07b4e3df0ba941c48042c7e5bc1192b35f1253df50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
